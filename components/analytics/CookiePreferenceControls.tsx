"use client";

import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  resetCookieConsent,
  type CookieConsentStatus,
} from "@/lib/traffic/cookieConsent";

export default function CookiePreferenceControls() {
  const [status, setStatus] = useState<CookieConsentStatus>("undecided");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(getCookieConsent());

    function onUpdated() {
      setStatus(getCookieConsent());
    }

    window.addEventListener("idig-consent-updated", onUpdated);
    return () => window.removeEventListener("idig-consent-updated", onUpdated);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => resetCookieConsent()}
        className="inline-flex items-center rounded-md bg-navy px-3.5 py-2 text-[13px] font-semibold text-porcelain hover:bg-navy-mid focus:outline-none focus:ring-2 focus:ring-navy/40 transition-colors"
      >
        Change Cookie Preferences
      </button>

      {status === "accepted" && (
        <button
          type="button"
          onClick={() => setCookieConsent("declined")}
          className="inline-flex items-center rounded-md border border-navy/20 px-3.5 py-2 text-[13px] font-medium text-warm-gray hover:text-navy hover:border-navy/40 focus:outline-none transition-colors"
        >
          Opt Out of Measurement
        </button>
      )}

      <span className="text-[12.5px] font-medium text-warm-gray">
        Current status:{" "}
        <strong className="text-navy">
          {status === "accepted"
            ? "Consented"
            : status === "declined"
            ? "Declined / Opted Out"
            : "No choice recorded"}
        </strong>
      </span>
    </div>
  );
}
