"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  OPEN_BANNER_EVENT,
  type CookieConsentStatus,
} from "@/lib/traffic/cookieConsent";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const status = getCookieConsent();
    if (status === "undecided") {
      setVisible(true);
    }

    function handleOpen() {
      setVisible(true);
    }

    window.addEventListener(OPEN_BANNER_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, handleOpen);
  }, []);

  if (!mounted || !visible) return null;

  function handleAccept() {
    setCookieConsent("accepted");
    setVisible(false);
  }

  function handleDecline() {
    setCookieConsent("declined");
    setVisible(false);
  }

  return (
    <aside
      role="region"
      aria-label="Cookie and privacy preferences"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto z-[95] max-w-lg rounded-xl border border-navy/15 bg-porcelain/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-navy-dark/95"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-navy dark:text-cream">
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Privacy & Cookies</span>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Decline and close cookie preferences"
          className="rounded p-1 text-warm-gray hover:text-navy focus:outline-none focus:ring-1 focus:ring-navy dark:hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>
      </div>

      <p className="mt-2 font-body text-[13.5px] leading-snug text-ink dark:text-porcelain/90">
        We use first-party telemetry and cookies to measure visitor traffic and
        verify engagement. We do not pre-load tracking cookies until you provide
        consent. You may accept or decline at any time. Review our{" "}
        <Link
          href="/privacy/"
          className="font-semibold text-navy underline underline-offset-2 decoration-navy/30 hover:decoration-navy dark:text-cream dark:decoration-cream/40 dark:hover:decoration-cream"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-md bg-navy px-3.5 py-1.5 text-[12.5px] font-semibold text-porcelain shadow-sm hover:bg-navy-mid focus:outline-none focus:ring-2 focus:ring-navy/40 dark:bg-cream dark:text-navy dark:hover:bg-porcelain transition-colors"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={handleDecline}
          className="rounded-md border border-navy/20 px-3 py-1.5 text-[12.5px] font-medium text-warm-gray hover:border-navy/40 hover:text-navy focus:outline-none focus:ring-1 focus:ring-navy dark:border-white/20 dark:text-porcelain/70 dark:hover:text-white transition-colors"
        >
          Decline / Opt Out
        </button>
      </div>
    </aside>
  );
}
