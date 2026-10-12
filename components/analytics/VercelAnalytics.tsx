"use client";

import { Analytics } from "@vercel/analytics/react";
import { hasUserConsented } from "@/lib/traffic/cookieConsent";

export default function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        try {
          if (!hasUserConsented()) {
            return null;
          }
        } catch {
          return null;
        }
        return event;
      }}
    />
  );
}
