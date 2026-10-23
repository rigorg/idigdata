"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  hasUserConsented,
  CONSENT_UPDATED_EVENT,
} from "@/lib/traffic/cookieConsent";
import {
  getAnonSessionId,
  getAttributionSearch,
  getCurrentTrafficSignal,
  syncAttributionFromLocation,
  trackWebsiteEvent,
} from "./websiteEvents";

function sendPageview(path: string) {
  if (typeof window === "undefined") return;
  if (!hasUserConsented()) return;

  const signal = getCurrentTrafficSignal(path);
  if (signal.suppress_pageview) return;

  trackWebsiteEvent({
    event_type: "pageview_event",
    path,
    payload: { legacy_pageview_route: true },
  });

  const payload = JSON.stringify({
    path,
    referrer: document.referrer || null,
    search: getAttributionSearch() || window.location.search || null,
    anon_session_id: getAnonSessionId(),
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
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      const ok = navigator.sendBeacon("/api/pageview/", blob);
      if (ok) return;
    }
    fetch("/api/pageview/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // analytics never breaks the page
  }
}

function sendEngagement(
  eventType: "dwell" | "scroll",
  path: string,
  payload: Record<string, unknown>,
) {
  if (!hasUserConsented()) return;
  const signal = getCurrentTrafficSignal(path);
  if (signal.suppress_pageview) return;

  trackWebsiteEvent({
    event_type: eventType === "dwell" ? "dwell" : "scroll",
    path,
    payload: {
      ...payload,
      engagement_kind: eventType,
    },
  });
}

export default function PageviewBeacon() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);
  const maxScroll = useRef(0);
  const enteredAt = useRef(Date.now());
  const lastDwellSent = useRef(0);

  useEffect(() => {
    if (hasUserConsented()) {
      syncAttributionFromLocation();
    }
  }, [pathname]);

  // When visitor grants consent from the banner, fire initial pageview and sync attribution immediately
  useEffect(() => {
    function onConsentChanged(e: Event) {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "accepted") {
        syncAttributionFromLocation();
        const activePath = pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
        sendPageview(activePath);
      }
    }
    window.addEventListener(CONSENT_UPDATED_EVENT, onConsentChanged);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsentChanged);
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    if (lastPath.current === pathname) return;

    // Flush dwell for previous path before switching.
    if (lastPath.current && hasUserConsented()) {
      const dwellMs = Date.now() - enteredAt.current;
      if (dwellMs >= 3000) {
        sendEngagement("dwell", lastPath.current, {
          dwell_ms: dwellMs,
          max_scroll_pct: maxScroll.current,
        });
      }
    }

    lastPath.current = pathname;
    enteredAt.current = Date.now();
    maxScroll.current = 0;
    lastDwellSent.current = 0;

    if (hasUserConsented()) {
      sendPageview(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!hasUserConsented()) return;
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const text = (anchor.textContent ?? "").trim().slice(0, 120);

      if (href.startsWith("mailto:")) {
        trackWebsiteEvent({
          event_type: "mailto_click",
          payload: { href, text },
        });
        return;
      }

      trackWebsiteEvent({
        event_type: "cta_click",
        payload: { href, text },
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!hasUserConsented()) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) {
        maxScroll.current = 100;
        return;
      }
      const pct = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      if (pct > maxScroll.current) maxScroll.current = pct;
    }

    function flushDwell(reason: string) {
      if (!hasUserConsented()) return;
      const path = lastPath.current ?? window.location.pathname;
      const dwellMs = Date.now() - enteredAt.current;
      if (dwellMs < 3000) return;
      // Throttle beacon spam on visibility flips.
      if (Date.now() - lastDwellSent.current < 15000 && reason !== "pagehide") return;
      lastDwellSent.current = Date.now();
      sendEngagement("dwell", path, {
        dwell_ms: dwellMs,
        max_scroll_pct: maxScroll.current,
        reason,
      });
    }

    function onVisibility() {
      if (document.visibilityState === "hidden") flushDwell("hidden");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", () => flushDwell("pagehide"));
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
