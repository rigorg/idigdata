export type CookieConsentStatus = "accepted" | "declined" | "undecided";

export const COOKIE_CONSENT_KEY = "idig_cookie_consent";
export const ANALYTICS_OPT_OUT_KEY = "idig_analytics_opt_out";
export const CONSENT_UPDATED_EVENT = "idig-consent-updated";
export const OPEN_BANNER_EVENT = "idig-open-cookie-banner";

const CONSENT_MAX_AGE_SECONDS = 365 * 24 * 60 * 60; // 1 year

export function getCookieConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return "undecided";
  try {
    const val = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (val === "accepted") return "accepted";
    if (val === "declined") return "declined";

    // Legacy fallback check
    if (window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "1") {
      return "declined";
    }

    // Check cookie fallback
    const match = document.cookie
      .split(";")
      .map((p) => p.trim())
      .find((p) => p.startsWith(`${COOKIE_CONSENT_KEY}=`));
    if (match) {
      const cookieVal = match.slice(COOKIE_CONSENT_KEY.length + 1);
      if (cookieVal === "accepted" || cookieVal === "declined") {
        return cookieVal;
      }
    }

    return "undecided";
  } catch {
    return "undecided";
  }
}

export function hasUserConsented(): boolean {
  return getCookieConsent() === "accepted";
}

export function isUserOptedOut(): boolean {
  return getCookieConsent() === "declined";
}

export function setCookieConsent(status: "accepted" | "declined"): void {
  if (typeof window === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, status);

    // Sync cookie for edge/proxy visibility
    document.cookie = `${COOKIE_CONSENT_KEY}=${status}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;

    if (status === "accepted") {
      window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
      document.cookie = `${ANALYTICS_OPT_OUT_KEY}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
    } else {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      document.cookie = `${ANALYTICS_OPT_OUT_KEY}=1; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
      // Remove first-party attribution tracking cookie
      document.cookie = `idig_attr=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
    }
  } catch {
    // LocalStorage or cookie write failed; proceed safely
  }

  try {
    window.dispatchEvent(
      new CustomEvent(CONSENT_UPDATED_EVENT, { detail: status })
    );
  } catch {
    // Ignore in environments without CustomEvent support
  }
}

export function resetCookieConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${COOKIE_CONSENT_KEY}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
    window.dispatchEvent(new Event(OPEN_BANNER_EVENT));
  } catch {
    // ignore
  }
}
