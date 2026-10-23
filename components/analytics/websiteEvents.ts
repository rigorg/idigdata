"use client";

import {
  ATTRIBUTION_COOKIE,
  decodeAttributionCookie,
  encodeAttributionCookie,
  hasCampaignSignal,
  mergeAttributionSearch,
  parseAttributionSearch,
  type AttributionPayload,
} from "@/lib/traffic/attribution";
import { classifyWebsiteSignal, normalizePath, type WebsiteSignal } from "@/lib/traffic/websiteSignals";
import { hasUserConsented, isUserOptedOut } from "@/lib/traffic/cookieConsent";

export type WebsiteEventType =
  | "pageview_event"
  | "contact_submit"
  | "article_request"
  | "cta_click"
  | "mailto_click"
  | "dwell"
  | "scroll";

type WebsiteEventInput = {
  event_type: WebsiteEventType;
  path?: string;
  referrer?: string | null;
  payload?: Record<string, unknown>;
};

const SESSION_KEY = "idig_anon_sid";
const INTERNAL_MARKER_KEY = "idig_internal_traffic";
const FLEET_MARKER_KEY = "idig_fleet_traffic";
const INGEST_URL = process.env.NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL;
const TRACK_PREVIEW_TRAFFIC = process.env.NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC === "1";

export function getAnonSessionId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    const id = Array.from(buf, (b) => b.toString(16).padStart(2, "0")).join("");
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return null;
  }
}

export function isTrackableHost(): boolean {
  if (typeof window === "undefined") return false;
  return !getCurrentTrafficSignal().suppress_pageview;
}

export function getCurrentTrafficSignal(
  path = window.location.pathname,
  referrer: string | null = document.referrer || null,
): WebsiteSignal {
  syncTrafficMarkersFromLocation();
  if (hasUserConsented()) {
    syncAttributionFromLocation();
  }
  return classifyWebsiteSignal({
    path,
    referrer,
    search: getAttributionSearch() || window.location.search || null,
    userAgent: navigator.userAgent,
    hostname: window.location.hostname,
    isInternalMarked: hasMarker(INTERNAL_MARKER_KEY),
    isFleetMarked: hasMarker(FLEET_MARKER_KEY),
    trackPreviewTraffic: TRACK_PREVIEW_TRAFFIC,
  });
}

/** Synthetic search string with live UTMs filled from attribution cookie. */
export function getAttributionSearch(): string | null {
  if (typeof window === "undefined") return null;
  return mergeAttributionSearch(window.location.search, readAttributionCookie());
}

export function syncAttributionFromLocation() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("clear_attr") === "1" || isUserOptedOut()) {
      writeAttributionCookie(null);
      return;
    }
    // Only write attribution cookies if user has granted consent
    if (!hasUserConsented()) return;

    const live = parseAttributionSearch(window.location.search);
    if (!hasCampaignSignal(live)) return;
    const next: AttributionPayload = {
      ...live,
      landing_path: window.location.pathname.slice(0, 512),
      referrer_host: referrerHost(document.referrer),
      captured_at: new Date().toISOString(),
    };
    writeAttributionCookie(next);
  } catch {
    // Storage failures should not affect page behavior.
  }
}

export function trackWebsiteEvent(input: WebsiteEventInput) {
  if (typeof window === "undefined") return;
  if (!hasUserConsented()) return;
  if (!INGEST_URL) return;

  const referrer = input.referrer ?? (document.referrer || null);
  const signal = getCurrentTrafficSignal(input.path, referrer);
  if (signal.suppress_pageview) return;

  const payload = JSON.stringify({
    event_type: input.event_type,
    occurred_at: new Date().toISOString(),
    anon_session_id: getAnonSessionId(),
    path: normalizePath(input.path ?? window.location.pathname),
    referrer,
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
    payload: {
      ...input.payload,
      location_search: window.location.search || null,
      attribution_search: getAttributionSearch(),
    },
  });

  try {
    fetch(INGEST_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      credentials: "omit",
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Analytics never breaks the page.
  }
}

function syncTrafficMarkersFromLocation() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("internal") === "1") {
      window.localStorage.setItem(INTERNAL_MARKER_KEY, "1");
    }
    if (params.get("internal") === "0" || params.get("clear_internal") === "1") {
      window.localStorage.removeItem(INTERNAL_MARKER_KEY);
    }
    const fleet = params.get("fleet") ?? params.get("agent");
    // Production fleet mint is header-only (proxy). Do not let URL stamp localStorage.
    if (fleet === "1" && process.env.NODE_ENV !== "production") {
      window.localStorage.setItem(FLEET_MARKER_KEY, "1");
    }
    if (fleet === "0" || params.get("clear_fleet") === "1") {
      window.localStorage.removeItem(FLEET_MARKER_KEY);
    }
  } catch {
    // Storage failures should not affect page behavior.
  }
}

function hasMarker(key: string): boolean {
  try {
    if (window.localStorage.getItem(key) === "1") return true;
  } catch {
    // ignore
  }
  try {
    return document.cookie.split(";").some((part) => part.trim() === `${key}=1`);
  } catch {
    return false;
  }
}

function readAttributionCookie(): AttributionPayload | null {
  try {
    const match = document.cookie
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${ATTRIBUTION_COOKIE}=`));
    if (!match) return null;
    return decodeAttributionCookie(
      decodeURIComponent(match.slice(ATTRIBUTION_COOKIE.length + 1)),
    );
  } catch {
    return null;
  }
}

function writeAttributionCookie(payload: AttributionPayload | null) {
  try {
    if (!payload) {
      document.cookie = `${ATTRIBUTION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
      return;
    }
    if (!hasUserConsented()) return;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(
      encodeAttributionCookie(payload),
    )}; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Lax${secure}`;
  } catch {
    // ignore
  }
}

function referrerHost(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.replace(/^www\./, "").slice(0, 255);
  } catch {
    return null;
  }
}
