import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/seo/routes";

export const dynamic = "force-static";

/**
 * Generated from the filesystem at build time (see lib/seo/routes.ts):
 * every app/**\/page.tsx that is public, minus redirect-only, noindex,
 * preview/hold/geometry/banners, api, and legacy paths in next.config.ts
 * redirects. lastModified is the file's last git commit date; weblog posts
 * under content/posts/*.md are added as /agentic-ai/<slug>/ when present.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
