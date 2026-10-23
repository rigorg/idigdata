import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  getCookieConsent,
  hasUserConsented,
  isUserOptedOut,
  setCookieConsent,
  COOKIE_CONSENT_KEY,
  ANALYTICS_OPT_OUT_KEY,
} from "./cookieConsent";

describe("cookieConsent", () => {
  let storage: Record<string, string> = {};
  let cookies: string[] = [];

  beforeEach(() => {
    storage = {};
    cookies = [];

    // Mock minimal window / localStorage / document.cookie
    (globalThis as any).window = {
      location: { protocol: "https:" },
      localStorage: {
        getItem: (k: string) => storage[k] ?? null,
        setItem: (k: string, v: string) => {
          storage[k] = String(v);
        },
        removeItem: (k: string) => {
          delete storage[k];
        },
      },
      dispatchEvent: () => true,
    };

    (globalThis as any).document = {
      get cookie() {
        return cookies.join("; ");
      },
      set cookie(c: string) {
        const [pair] = c.split(";");
        const [k, v] = pair.split("=");
        if (c.includes("Max-Age=0")) {
          cookies = cookies.filter((item) => !item.startsWith(`${k}=`));
        } else {
          cookies = cookies.filter((item) => !item.startsWith(`${k}=`));
          cookies.push(`${k}=${v}`);
        }
      },
    };
  });

  it("defaults to undecided when unchosen", () => {
    assert.equal(getCookieConsent(), "undecided");
    assert.equal(hasUserConsented(), false);
    assert.equal(isUserOptedOut(), false);
  });

  it("sets and reads accepted status", () => {
    setCookieConsent("accepted");
    assert.equal(getCookieConsent(), "accepted");
    assert.equal(hasUserConsented(), true);
    assert.equal(isUserOptedOut(), false);
    assert.equal(storage[COOKIE_CONSENT_KEY], "accepted");
    assert.equal(storage[ANALYTICS_OPT_OUT_KEY], undefined);
  });

  it("sets and reads declined status", () => {
    setCookieConsent("declined");
    assert.equal(getCookieConsent(), "declined");
    assert.equal(hasUserConsented(), false);
    assert.equal(isUserOptedOut(), true);
    assert.equal(storage[COOKIE_CONSENT_KEY], "declined");
    assert.equal(storage[ANALYTICS_OPT_OUT_KEY], "1");
  });
});
