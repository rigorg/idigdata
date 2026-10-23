import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDigOpsSupabase } from "@/lib/server/digopsSupabase";
import { guardJsonPost, parseBoundedJson } from "@/lib/server/requestSecurity";
import {
  ATTRIBUTION_COOKIE,
  decodeAttributionCookie,
  mergeAttributionSearch,
  parseAttributionSearch,
} from "@/lib/traffic/attribution";
import { classifyWebsiteSignal } from "@/lib/traffic/websiteSignals";

export const runtime = "nodejs";

const PageviewSchema = z.object({
  path: z.string().min(1).max(2048).refine((value) => value.startsWith("/")),
  referrer: z.string().max(2048).optional().nullable(),
  search: z.string().max(2048).optional().nullable(),
  anon_session_id: z.string().max(128).optional().nullable(),
  traffic_class: z.string().max(80).optional().nullable(),
  source_kind: z.string().max(80).optional().nullable(),
  source_channel: z.string().max(200).optional().nullable(),
  source_medium: z.string().max(200).optional().nullable(),
  source_campaign: z.string().max(200).optional().nullable(),
  attribution_confidence: z.string().max(80).optional().nullable(),
  source_refs: z.array(z.record(z.string(), z.string())).max(20).optional(),
  is_internal: z.boolean().optional(),
  is_bot: z.boolean().optional(),
  is_asset: z.boolean().optional(),
  buyer_signal: z.boolean().optional(),
});

const NO_CONTENT = new NextResponse(null, { status: 204 });
type UtmFields = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

function resolveUtms(
  search: string | null | undefined,
  attribution: ReturnType<typeof decodeAttributionCookie>,
): UtmFields {
  const live = parseAttributionSearch(search);
  return {
    utm_source: live.utm_source ?? attribution?.utm_source ?? null,
    utm_medium: live.utm_medium ?? attribution?.utm_medium ?? null,
    utm_campaign: live.utm_campaign ?? attribution?.utm_campaign ?? null,
    utm_term: live.utm_term ?? attribution?.utm_term ?? null,
    utm_content: live.utm_content ?? attribution?.utm_content ?? null,
  };
}

export async function POST(req: NextRequest) {
  const guard = guardJsonPost(req, {
    maxBytes: 8 * 1024,
    rateLimits: [
      { name: "pageview-minute", windowMs: 60 * 1000, max: 180 },
      { name: "pageview-hour", windowMs: 60 * 60 * 1000, max: 3000 },
    ],
    silent: true,
  });
  if (guard) return guard;

  const bodyResult = await parseBoundedJson(req, 8 * 1024, true);
  if (!bodyResult.ok) return bodyResult.response;
  const body = bodyResult.body;

  const parsed = PageviewSchema.safeParse(body);
  if (!parsed.success) return NO_CONTENT;

  const ua = req.headers.get("user-agent");
  const cookieInternal = req.cookies.get("idig_internal_traffic")?.value === "1";
  const cookieFleet = req.cookies.get("idig_fleet_traffic")?.value === "1";
  const attribution = decodeAttributionCookie(
    req.cookies.get(ATTRIBUTION_COOKIE)?.value,
  );
  const attributedSearch = mergeAttributionSearch(parsed.data.search, attribution);
  const signal = classifyWebsiteSignal({
    path: parsed.data.path,
    referrer: parsed.data.referrer,
    search: attributedSearch,
    userAgent: ua,
    hostname: req.nextUrl.hostname,
    isInternalMarked: parsed.data.is_internal === true || cookieInternal,
    isFleetMarked: cookieFleet || parsed.data.source_kind === "agent",
    trackPreviewTraffic:
      process.env.NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC === "1" ||
      process.env.TRACK_PREVIEW_TRAFFIC === "1",
  });
  if (signal.suppress_pageview) return NO_CONTENT;

  const supabase = getDigOpsSupabase();
  if (!supabase) {
    console.warn("pageview: DigOps Supabase env not configured");
    return NO_CONTENT;
  }

  const utms = resolveUtms(parsed.data.search, attribution);

  const geoCountry = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry");
  const geoRegion = req.headers.get("x-vercel-ip-country-region");
  const geoCity = req.headers.get("x-vercel-ip-city");
  const acceptLang = req.headers.get("accept-language")?.slice(0, 80) || null;
  const secFetchSite = req.headers.get("sec-fetch-site")?.slice(0, 80) || null;

  const baseRow = {
    source: "idigdata-website",
    path: parsed.data.path,
    referrer: parsed.data.referrer?.slice(0, 2048) || null,
    user_agent: ua ? ua.slice(0, 1024) : null,
    anon_session_id: parsed.data.anon_session_id || null,
    ...utms,
  };

  const row = {
    ...baseRow,
    traffic_class: signal.traffic_class,
    source_kind: signal.source_kind,
    source_channel: signal.source_channel,
    source_medium: signal.source_medium,
    source_campaign: signal.source_campaign,
    attribution_confidence: signal.attribution_confidence,
    source_refs: signal.source_refs,
    is_internal: signal.is_internal,
    is_bot: signal.is_bot,
    is_asset: signal.is_asset,
    buyer_signal: signal.buyer_signal,
  };

  // Insert into pageviews table (mirror)
  const { error } = await supabase.from("pageviews").insert(row);
  if (error) {
    if (isSchemaCacheMiss(error)) {
      const fallback = await supabase.from("pageviews").insert(baseRow);
      if (fallback.error) {
        console.error(`pageview fallback insert failed: ${fallback.error.message}`);
      }
    } else {
      console.error(`pageview insert failed: ${error.message}`);
    }
  }

  // Insert into site_hits with geo details so DigOps Operations (:3300) picks it up with full city/country
  try {
    const siteHitRow = {
      ...row,
      occurred_at: new Date().toISOString(),
      request_method: req.method,
      host: req.headers.get("host")?.slice(0, 255) || null,
      geo_country: geoCountry?.slice(0, 80) || null,
      geo_region: geoRegion?.slice(0, 80) || null,
      geo_city: geoCity?.slice(0, 80) || null,
      accept_language: acceptLang,
      sec_fetch_site: secFetchSite,
      landing_url: parsed.data.path,
    };
    await supabase.from("site_hits").insert(siteHitRow);
  } catch {
    // Non-blocking
  }

  return NO_CONTENT;
}

function isSchemaCacheMiss(error: { code?: string; message?: string }): boolean {
  const message = error.message?.toLowerCase() ?? "";
  return (
    error.code === "PGRST204" ||
    error.code === "42703" ||
    (message.includes("column") && message.includes("schema cache"))
  );
}
