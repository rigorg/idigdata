# Discoverability layer: idigdata-site

What the site publishes for crawlers, answer engines, feed readers and search
consoles, where each piece lives, and what an Operator has to do by hand.

## Surfaces

| Surface | URL | Source | Generated how |
|---|---|---|---|
| Sitemap | `/sitemap.xml` | `app/sitemap.ts` → `lib/seo/routes.ts` | Build time, from the filesystem (see below) |
| Robots | `/robots.txt` | `app/robots.ts` | Static; allows `/`, `/feed.xml`, `/llms.txt`, `/llms-full.txt`; disallows `/hold/` |
| RSS | `/feed.xml` | `app/feed.xml/route.ts` → `lib/seo/rss.ts` | Build time; "Agentic AI, by Robert Paddock"; zero items until posts exist |
| llms.txt | `/llms.txt` | `public/llms.txt` | Hand-written; accepted claims only |
| llms-full.txt | `/llms-full.txt` | `public/llms-full.txt` | Hand-compiled from each page's metadata title and description |
| JSON-LD (site) | every page | `components/analytics/JsonLd.tsx` | WebSite, Organization, Person |
| JSON-LD (route) | every page | `components/analytics/RouteJsonLd.tsx` → `lib/seo/jsonld.ts` | BreadcrumbList on non-root routes; Service on `/block/`; Blog on `/agentic-ai/` |
| IndexNow key | `/<key>.txt` | `public/bf78857349f75e74b5dfe91837a03954.txt` | Static; key is public by design |
| Feed discovery | `<link rel="alternate" type="application/rss+xml">` | `app/layout.tsx`: `metadata.alternates.types` plus a `<head>` fallback | See note below |

### Why the feed link is declared twice

`metadata.alternates.types` in the root layout is the right place for feed and
llms.txt discovery, and it is declared there. But every public page (and
`app/block/layout.tsx`) sets `alternates: { canonical }`, and Next replaces the
whole `alternates` object at the deepest segment that defines it, so the
layout-level `types` never reach the HTML on those pages. Verified in the built
`.next/server/app/*.html`: before the fallback, no `rel="alternate"` link
rendered anywhere, including the pre-existing `text/plain` llms.txt entry. The
root layout therefore also renders the two links directly in `<head>`. When the
pages are reworked to stop overriding `alternates` (or to spread the layout's
`types`), the `<head>` fallback can go.

## Sitemap rules (`lib/seo/routes.ts`)

A route is listed when a `page.tsx` exists for it and none of the following apply:

- segment is `api`, `hold`, `geometry`, `banners`, `not-found`, or starts with `preview-`
- the page source calls `permanentRedirect(` or `redirect(`
- the page source sets `index: false` in its metadata
- the path is a redirect `source:` in `next.config.ts` (legacy IA paths)
- the segment is dynamic (`[slug]`); those come from content, not the file tree

`lastModified` is the file's last git commit date (`git log -1 --format=%cI -- <file>`),
falling back to build time when git is unavailable. Priorities: `/` 1.0;
`/experience/`, `/block/`, `/agentic-ai/` 0.9; `/contact/` 0.8; `/faq/` 0.6;
`/privacy/` 0.3; posts 0.7; anything new 0.5 until assigned.

Unit tests: `lib/seo/*.test.ts` (run with `npm test`). The route test runs
against both the real `app/` tree and a temporary fixture tree.

## Weblog posts (future)

Posts live in `content/posts/*.md` with frontmatter:

```
---
title: ...
date: 2026-10-05
slug: optional-override
description: one line
topic: optional
---
```

When the directory exists, `readPosts()` (`lib/seo/posts.ts`) feeds both the
sitemap (`/agentic-ai/<slug>/`) and `/feed.xml`. Files without a title or a
parseable date are skipped. The directory does not exist today and nothing
here fabricates posts. The `/agentic-ai/` index route itself is listed only
once its `page.tsx` lands.

## IndexNow

- Key: `bf78857349f75e74b5dfe91837a03954`
- Key file: `public/bf78857349f75e74b5dfe91837a03954.txt` → served at `https://idigdata.com/bf78857349f75e74b5dfe91837a03954.txt`
- Script: `scripts/indexnow-ping.mjs`; `npm run indexnow` reads `https://idigdata.com/sitemap.xml`, extracts `<loc>` URLs on the idigdata.com host, and POSTs them to `https://api.indexnow.org/indexnow` with the key and `keyLocation`.
- `npm run indexnow -- --dry-run` prints the payload without sending.
- `npm run indexnow -- --sitemap <url|file>` overrides the sitemap source.
- Running the ping is an Operator act after a production deploy. It has not been run from this lane.

## Structured data claims

Everything in `lib/seo/jsonld.ts` and `components/analytics/JsonLd.tsx` uses
only the accepted public claims: Robert Paddock, Enterprise Technology Leader;
founder of Data Integration Group (DIG LLC); idigdata founded 2016; 30 years;
50+ implementations; 15 enterprise transformations at scale. The Service
schema for The Block names the six disciplines and carries no prices. The
jsonld test asserts the retired phrases do not reappear.

## Verifying locally

```
npx next dev -p 3102
curl -s http://localhost:3102/sitemap.xml
curl -s http://localhost:3102/robots.txt
curl -s http://localhost:3102/feed.xml
curl -s http://localhost:3102/llms.txt
curl -s http://localhost:3102/ | grep -o '<script type="application/ld+json">[^<]*'
```

Port 3100 is the Operator's dev port; do not use it from a lane.
