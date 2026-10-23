# Telemetry - idigdata-site

Visitor metrics live in DigOps Supabase (`site_hits` with `pageviews` mirror), shared with Operations (`:3300/website`). Client engagement analytics require acceptance; server door knocks are suppressed on decline. A separate identifier-free request counter is described below.

## Cookieless target-page counts (October 20, 2026)

Capo authorized counts for `/agentic-ai/` and `/collective/`, including requests from visitors who decline analytics. `proxy.ts` records canonical path, UTC hour, `is_bot`, and fixed source `idigdata-cookieless-count` in `site_hits`; no mirror or session linkage. Database-generated row IDs/timestamps are storage bookkeeping, not visitor identifiers. No IP/hash, UA, geo, referrer, URL query or cookies are copied into these records. Existing internal/fleet marks only exclude traffic. No cookies are created by the counter. Production hosts only; GET HTML and non-prefetch RSC requests only. Browser classification is heuristic, not proof of a human; reloads count and cached client navigation can be missed. This is request measurement, not unique visitors, engagement or dwell.

Operations excludes this source from every normal visitor query and uses exact count queries in a separate card. Only the selected date window applies to that card. UTC-hour timestamps are displayed within Pacific date windows. Do not add the counts to visitor totals. No historical reconstruction; collection starts after the site deployment. No new table, migration, external analytics service or public read grant is introduced. The cookie banner and privacy notice distinguish the counter from preference-controlled analytics. General hosting request logs remain separate from these minimal count records.

## Legal Compliance & Cookie Consent

1. **Zero Pre-Consent Tracking**: On initial landing, no tracking cookies (`idig_attr`) are stamped and no client beacons (`/api/pageview/`) are fired before the user accepts cookies or chooses preferences.
2. **Cookie Consent Banner (`CookieConsentBanner.tsx`)**: Prominently presented at bottom viewport. Allows visitor to:
   - **Accept All**: Stores consent (`idig_cookie_consent=accepted`), syncs UTM attribution cookie, and immediately fires `/api/pageview/`.
   - **Decline / Opt Out**: Stores decline (`idig_cookie_consent=declined`), purges `idig_attr` if present, sets `idig_analytics_opt_out=1`, and suppresses all client beacons and server door knocks.
3. **Preferences Control**: Visitors can change their mind at any time via `/privacy/` ("Cookie & Measurement Preferences").

## Source of Truth

| Path | When it fires | Tables | Auth |
|---|---|---|---|
| `PageviewBeacon.tsx` → `/api/pageview/` | On page load / route navigation once consented | `pageviews` | DigOps **anon** insert (RLS) |
| `proxy.ts` → `recordDoorKnock` | Document requests (suppressed if opted out) | `site_hits` (rich) + `pageviews` (mirror) | DigOps **anon** insert (RLS) |
| `websiteEvents` → ingest URL | Client event telemetry (if `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL` set and consented) | External | Credential-free POST |
| Vercel Analytics | Client aggregate counts (suppressed unless consented) | Vercel | First-party aggregate |

## Operations (:3300) Metrics Integration

DigOps Operations at `http://127.0.0.1:3300/website` reads directly from the Supabase `pageviews` table:
- **People**: Real external visitors on live site pages (Home, Experience, The Block, Agentic AI, The Collective, Contact).
- **You**: Localhost, `?internal=1`, or allowlisted operator IPs (`is_internal=true`, `rob_internal`).
- **Scanners / Noise**: Probe paths, scanners, or bot traffic (`is_bot=true`).
- **All raw**: Everything captured in the selected period.

## Markers

| Marker | How | Notes |
|---|---|---|
| Consent | Banner click or `/privacy/` | `idig_cookie_consent=accepted\|declined`. Stored in cookie + localStorage. |
| Internal | `?internal=1`, `DIGOPS_INTERNAL_IPS`, or localhost | Year cookie / allowlist / local host; records as `rob_internal`. DigOps **You**, never People. |
| Fleet | Header `x-digops-traffic: fleet:<DIGOPS_FLEET_BEACON_SECRET>` | Production ignores bare `?fleet=1` |
| Attribution | UTM/gclid landing → `idig_attr` cookie (30d) | Only stamped after consent. Fills UTMs after navigation. |

Clear: `?clear_internal=1`, `?clear_fleet=1`, `?clear_attr=1`.

## PII Posture

- IP stored as HMAC-SHA-256 prefix (`h:...`) using `DIGOPS_IP_HASH_SALT`. No raw IP. If the secret is unset, the fingerprint is skipped.
- Coarse geo only (country / region / city) - no lat/long
- `headers_json` allowlist excludes IP / forwarded / ray ids

## Rate Limits

`/api/contact` and `/api/pageview` use in-process buckets (`requestSecurity.ts`).
On Vercel this is a **soft** per-isolate guard. Primary defenses: same-origin check,
body caps, honeypot, zod. Platform WAF / Upstash is the hard follow-up if spam rises.

## DigOps Keys

- Prefer `DIGOPS_SUPABASE_ANON_KEY` for all website inserts (RLS insert-only policies).
- `DIGOPS_SUPABASE_SERVICE_ROLE_KEY` optional - only for contact `.select("id")` return.
