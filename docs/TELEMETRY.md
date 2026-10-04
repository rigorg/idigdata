# Telemetry — idigdata-site

Entrance truth lives in DigOps Supabase. Client beacons are opt-in.

## Source of truth

| Path | When it fires | Tables | Auth |
|---|---|---|---|
| `proxy.ts` → `recordDoorKnock` | First meaningful HTML document request (and remount internal/fleet) | `site_hits` (rich) + `pageviews` (mirror) | DigOps **anon** insert (RLS) |
| `/api/pageview/` | Only if `NEXT_PUBLIC_TRACK_PAGE_NAVIGATION=1` | `pageviews` | DigOps anon |
| `websiteEvents` → ingest URL | Only if `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL` set | External | Credential-free POST |
| Vercel Analytics | Always unless visitor opts out | Vercel | First-party aggregate |

Default production posture: **door-knock only** + Vercel Analytics. Do not turn on page navigation tracking without Operator word.

DigOps `/website` **People** means a person on a live page. Live pages include Home, Application Layer, Agentic Layer, and Contact — not only the old IA routes. Arrival on that page is [GA4 Default Channel Grouping](https://support.google.com/analytics/answer/9756891) from stored UTM + referrer. Vercel Analytics does not write into DigOps.

## Markers

| Marker | How | Notes |
|---|---|---|
| Internal | `?internal=1`, `DIGOPS_INTERNAL_IPS`, or localhost | Year cookie / allowlist / local host; records as `rob_internal`. DigOps **You**, never People. |
| Fleet | Header `x-digops-traffic: fleet:<DIGOPS_FLEET_BEACON_SECRET>` | Production ignores bare `?fleet=1` |
| Attribution | UTM/gclid landing → `idig_attr` cookie (30d) | Fills UTMs after navigation |

Clear: `?clear_internal=1`, `?clear_fleet=1`, `?clear_attr=1`.

## PII posture (door-knock)

- IP stored as HMAC-SHA-256 prefix (`h:…`) using `DIGOPS_IP_HASH_SALT`. No raw IP. If the secret is unset, the fingerprint is skipped.
- Coarse geo only (country / region / city) — no lat/long
- `headers_json` allowlist excludes IP / forwarded / ray ids

## Rate limits

`/api/contact` and `/api/pageview` use in-process buckets (`requestSecurity.ts`).
On Vercel this is a **soft** per-isolate guard. Primary defenses: same-origin check,
body caps, honeypot, zod. Platform WAF / Upstash is the hard follow-up if spam rises.

## DigOps keys

- Prefer `DIGOPS_SUPABASE_ANON_KEY` for all website inserts (RLS insert-only policies).
- `DIGOPS_SUPABASE_SERVICE_ROLE_KEY` optional — only for contact `.select("id")` return.
