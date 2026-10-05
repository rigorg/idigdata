# Connection points: idigdata-site

Every external connection the site code makes, read from the code on
`working` at the time of writing. Env keys are names only; values live in
Vercel project settings and the Operator's `.env.local` (see
`docs/DEPLOY-CUSTODY.md`). "Owner: Capo" means the secret or account is the
Operator's; "site" means the code path is this repo's.

Direction: **out** = the site calls the service; **in** = the service or a
visitor's browser calls the site, or the value only shapes how the site reads
a request; **build** = fetched at build time only.

## Connections

| Connection | Direction | Env keys (names) | Where in code | Failure mode as coded | Owner |
|---|---|---|---|---|---|
| DigOps Supabase: contact intake (`contact_submissions`) | out (server → Supabase REST) | `DIGOPS_SUPABASE_URL`, `DIGOPS_SUPABASE_ANON_KEY`, `DIGOPS_SUPABASE_SERVICE_ROLE_KEY` (optional; only to return the inserted id) | `lib/server/digopsSupabase.ts`, `app/api/contact/route.ts` (`insertContactRow`), `lib/contact/intake.ts` | URL or anon key unset → client is `null` → `console.warn`, `{ ok: false, error: "crm_failed" }` with HTTP 500; the email is not sent either (CRM first). Insert error → `console.error`, same 500. URL + service role without anon → falls back to service role for writes with a one-time warning. | Capo (keys, project), site (code) |
| DigOps Supabase: door-knock (`site_hits` + `pageviews`) | out (edge proxy → Supabase REST) | same three keys as above, plus `DIGOPS_IP_HASH_SALT`, `DIGOPS_INTERNAL_IPS`, `DIGOPS_FLEET_BEACON_SECRET`, `NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC` / `TRACK_PREVIEW_TRAFFIC` | `proxy.ts` → `lib/server/doorKnock.ts` (`recordDoorKnock`) | No client → returns silently (no row, page unaffected). `site_hits` insert error → `console.error`, continues. `pageviews` rich insert error → retries with the base row; both failing → `console.error`. Work runs in `event.waitUntil`; the visitor's response never waits on it. | Capo (keys), site |
| DigOps Supabase: client pageview beacon (`pageviews`) | in (browser → `/api/pageview/`) then out (server → Supabase) | `NEXT_PUBLIC_TRACK_PAGE_NAVIGATION` (gate; off by default), `DIGOPS_SUPABASE_*` as above | `components/analytics/PageviewBeacon.tsx`, `app/api/pageview/route.ts` | Gate unset → beacon never fires. Route always answers 204; guard failures are silent 204s; no Supabase client → `console.warn`, 204. Schema-cache miss (`PGRST204`/`42703`) → fallback insert of the base row. | Capo, site |
| Resend: contact notification email | out (server → Resend API) | `RESEND_API_KEY`, `EMAIL_NOTIFY_FROM` (default `idigdata website <noreply@idigdata.com>`), `EMAIL_NOTIFY_TO` (default `robert@idigdata.com`) | `app/api/contact/route.ts` (`sendNotifyEmail`, `recordContactIntake` notify callback) | Key unset → `console.error("RESEND_API_KEY not set")`, intake still recorded, HTTP 202 with `notification: "not_configured"`. Send error → one retry, then HTTP 202 with `notification: "failed"`. The CRM row is never duplicated on email failure. | Capo (key, domain), site |
| Vercel: hosting and deploy | in (platform runs the app) | `VERCEL_DEPLOYMENT_ID`, `VERCEL_ENV`, `VERCEL_GIT_COMMIT_REF`, `VERCEL_GIT_COMMIT_SHA` (read-only, platform-provided) | `app/hold/page.tsx` (shows deploy identity on the noindex hold page); `x-vercel-ip-*` headers read in `lib/server/doorKnock.ts` for coarse geo | Unset → hold page shows "local / unknown"; geo fields `null`. Deploys happen only from the canonical linked checkout (`docs/DEPLOY-CUSTODY.md`). | Capo (project, domains), site |
| Vercel Analytics | out (browser → `https://va.vercel-scripts.com`) | none | `components/analytics/VercelAnalytics.tsx`; CSP `script-src` allow in `next.config.ts` `headers()` | Script blocked or offline → no analytics, page unaffected. Visitor opt-out via `localStorage` `idig_analytics_opt_out=1` (`SiteNotice`, `?va-opt-out=1`) → `beforeSend` returns `null`. | Capo (Vercel project), site |
| Google Search Console verification | in (Google reads a meta tag) | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `app/layout.tsx` `metadata.verification.google` | Unset → tag omitted; nothing else changes. | Capo (console property), site |
| Bing Webmaster verification | in (Bing reads a meta tag) | `NEXT_PUBLIC_BING_SITE_VERIFICATION` | `app/layout.tsx` `metadata.verification.other["msvalidate.01"]` | Unset → an empty `msvalidate.01` meta is emitted (the `?? ""` default); harmless, but worth setting or removing. | Capo (webmaster property), site |
| Website event ingest (optional) | out (browser → configured URL) | `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL`, `NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC` | `components/analytics/websiteEvents.ts` (`trackWebsiteEvent`), called from `PageviewBeacon` (cta/mailto clicks, dwell, scroll, pageview_event) | URL unset → every call is a no-op. `fetch` rejects are swallowed (`credentials: "omit"`, `keepalive`). | Capo (endpoint), site |
| Same-origin allowlist for POST routes | in (request guard) | `WEBSITE_ALLOWED_ORIGINS` (comma-separated origins) | `lib/server/requestSecurity.ts` (`isAllowedOrigin`) | Unset → only the request's own origin plus defaults (`https://idigdata.com`, `https://www.idigdata.com`, `http://localhost:3100`, `http://127.0.0.1:3100`). Mismatch → 403 `forbidden_origin` (silent 204 on `/api/pageview/`). | site |
| Internal-traffic IP allowlist | in (request classification) | `DIGOPS_INTERNAL_IPS` | `proxy.ts` (`resolveTrafficMarks`), `lib/server/doorKnock.ts`, `lib/traffic/websiteSignals.ts` (`parseInternalIpAllowlist`) | Unset → no IP-based internal marking; `?internal=1` cookie and localhost still mark. Rows record as `rob_internal`, never suppressed. | Capo (which IPs), site |
| IP fingerprint salt | internal (hashing of a request field) | `DIGOPS_IP_HASH_SALT` | `lib/server/doorKnock.ts` (`hashClientIp`, HMAC-SHA-256, first 32 hex) | Unset → `console.warn`, `client_ip` stored as `null`; no raw IP is ever written. | Capo (secret), site |
| Fleet beacon header | in (`x-digops-traffic: fleet:<secret>`) | `DIGOPS_FLEET_BEACON_SECRET` | `proxy.ts` (`isFleetHeaderAuthorized`), `scripts/stamp-fleet-beacon.mjs` (`DIGOPS_SITE_URL` target) | Unset → header never authorizes; in production bare `?fleet=1` cannot mint the fleet cookie. Fleet hits record as `agent`, not People. | Capo (secret), site |
| Preview-route gate | in | `NEXT_PUBLIC_ALLOW_PREVIEW` | `app/geometry/page.tsx`, `app/preview-agentic/page.tsx`, `app/preview-geometry/page.tsx` | In production with the flag unset → `notFound()`. Also excluded from the sitemap by rule and from Vercel by `.vercelignore`. | site |
| IndexNow | out (Operator-run script → `https://api.indexnow.org/indexnow`) | none (key is public by design) | `scripts/indexnow-ping.mjs` (`npm run indexnow`); key file `public/bf78857349f75e74b5dfe91837a03954.txt` | Not part of the site runtime. Script exits 1 on missing key file, unreadable sitemap, zero URLs, or a non-200/202 response. Never run automatically. | Capo (when to ping), site |
| Google Fonts (Lora, Source Sans 3, Vollkorn) | build (Next fetches and self-hosts) | none | `app/layout.tsx` (`next/font/google`) | Build fails if `fonts.googleapis.com` is unreachable at build time. No runtime request; fonts are served from the site's own origin. | site |
| Local org admin link | none (anchor only, localhost) | none | `components/OrgAdminLink.tsx` → `http://127.0.0.1:3101` | Rendered only when `window.location.hostname` is `localhost`/`127.0.0.1`; never shown in production. | site |

Not connections, listed for completeness: `NEXT_PUBLIC_SUPABASE_URL` /
`NEXT_PUBLIC_SUPABASE_ANON_KEY` appear in `.env.example` as reserved but are not
read anywhere in `app/`, `components/`, `lib/` or `proxy.ts`. `mailto:robert@idigdata.com`
and the LinkedIn `sameAs` are plain links.

## Contact intake `source` values

`lib/contact/intake.ts` writes `source: "website-<interestType>"` into
`contact_submissions`. With today's `InterestTypeSchema` that is one of:

- `website-core_transformation`
- `website-transformation_recovery`
- `website-applied_agentics`
- `website-not_sure` (default when the field is omitted)

Being added on ag's branch (not on `working` yet): `website-contact`,
`website-reader`, `website-block`. DigOps reporting that filters on `source`
should expect both families once that branch lands.

Door-knock rows use `source: "idigdata-door-knock"`; the client pageview
beacon uses `source: "idigdata-website"`.

## Indexing note

`/faq/` is a public, indexable route today: it has no `noindex`, is not a
redirect, and is listed in the sitemap at priority 0.6. If that should change,
set `robots: { index: false }` in `app/faq/page.tsx`; the sitemap generator
drops any page whose source contains `index: false`.
