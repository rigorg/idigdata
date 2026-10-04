"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "idig_site_notice";
const ANALYTICS_OPT_OUT_KEY = "idig_analytics_opt_out";

export function isAnalyticsOptedOut(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "1";
  } catch {
    return false;
  }
}

export default function SiteNotice() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("va-opt-out") === "1") {
        window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
        window.localStorage.setItem(STORAGE_KEY, "dismissed");
        setVisible(false);
        return;
      }
      if (window.localStorage.getItem(STORAGE_KEY) === "dismissed") {
        setVisible(false);
        return;
      }
    } catch {
      setVisible(false);
      return;
    }

    const onHome = pathname === "/";
    if (!onHome) {
      setVisible(true);
      return;
    }

    function reveal() {
      if (window.scrollY < 160) return;
      setVisible(true);
      window.removeEventListener("scroll", reveal);
    }

    if (window.scrollY >= 160) {
      setVisible(true);
      return;
    }

    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, [pathname]);

  if (!visible) return null;

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  function optOut() {
    try {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      window.localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Site measurement notice"
      className="fixed bottom-3 left-3 right-3 z-[80] mx-auto max-w-lg rounded-md border border-navy/10 bg-porcelain px-3 py-2.5 md:left-6 md:right-auto"
    >
      <div className="flex items-start gap-2.5">
        <div className="min-w-0 flex-1">
          <p className="font-body text-[13px] leading-snug text-ink">
            We use first-party measurement and Vercel Analytics to understand
            traffic and improve this site.{" "}
            <Link
              href="/privacy/"
              className="font-semibold text-navy underline underline-offset-2 decoration-navy/30 hover:decoration-navy"
            >
              Privacy policy
            </Link>
            .
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <button
              type="button"
              onClick={dismiss}
              className="rounded-md bg-navy px-3 py-1.5 text-[12px] font-semibold text-porcelain hover:bg-navy-mid"
            >
              Got it
            </button>
            <button
              type="button"
              onClick={optOut}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-gray hover:text-navy"
            >
              Opt out of analytics
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss notice"
          className="shrink-0 p-1 text-warm-gray hover:text-navy"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
