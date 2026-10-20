import type { NextRequest } from "next/server";
import { getDigOpsSupabase } from "./digopsSupabase";
import { isBotUserAgent } from "@/lib/traffic/websiteSignals";

export const COOKIELESS_SOURCE = "idigdata-cookieless-count";

/** No cookie, session, fingerprint, attribution or IP fields enter this record. */
export function cookielessCountRow(req: NextRequest, now = new Date()) {
  if (!["idigdata.com", "www.idigdata.com"].includes(req.nextUrl.hostname)) return null;
  const path = req.nextUrl.pathname.replace(/\/$/, "");
  if (req.method !== "GET" || !["/agentic-ai", "/collective"].includes(path)) return null;
  if (req.headers.has("next-router-prefetch") || req.headers.has("next-router-segment-prefetch") ||
      /prefetch/i.test(`${req.headers.get("purpose") ?? ""} ${req.headers.get("sec-purpose") ?? ""}`)) return null;
  if (!(req.headers.get("accept") ?? "").includes("text/html") && req.headers.get("rsc") !== "1") return null;
  // Explicitly marked development/agent requests are not public audience measurements.
  if (["internal", "fleet", "agent"].some((key) => req.nextUrl.searchParams.get(key) === "1") || req.headers.has("x-digops-traffic")) return null;
  const hour = new Date(now);
  hour.setUTCMinutes(0, 0, 0);
  return {
    source: COOKIELESS_SOURCE,
    path: `${path}/`,
    occurred_at: hour.toISOString(),
    is_bot: isBotUserAgent(req.headers.get("user-agent") ?? "") || /validator/i.test(req.headers.get("user-agent") ?? ""),
  };
}

export async function recordCookielessCount(req: NextRequest, internal: boolean) {
  if (internal) return;
  const row = cookielessCountRow(req);
  if (!row) return;
  const db = getDigOpsSupabase();
  if (!db) return;
  const { error } = await db.from("site_hits").insert(row);
  if (error) console.error("cookieless page count write failed:", error.code);
}
