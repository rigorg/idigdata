import { readPosts } from "@/lib/seo/posts";
import { buildRssXml } from "@/lib/seo/rss";

export const dynamic = "force-static";

/** RSS 2.0 for the Agentic AI weblog. Valid with zero items until the first post lands. */
export function GET() {
  const xml = buildRssXml(readPosts());
  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
