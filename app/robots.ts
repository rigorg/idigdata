import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** Bona fide search and AI research crawlers explicitly welcomed. */
const BONA_FIDE_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "Anthropic-AI",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "ExaSearchBot",
  "DuckAssistBot",
  "LinkedInBot",
] as const;

/** Bulk commercial scrapers and SEO parasites disallowed from crawling. */
const BLOCKED_SCRAPERS = [
  "Bytespider",
  "CCBot",
  "Diffbot",
  "DotBot",
  "MJ12bot",
  "BLEXBot",
  "PetalBot",
  "SemrushBot",
  "AhrefsBot",
  "DataForSeoBot",
  "Barkrowler",
  "SeekportBot",
  "QlyzeBot",
] as const;

const DISALLOWED_INTERNAL_PATHS = ["/hold/", "/preview-agentic/", "/banners/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/feed.xml", "/llms.txt", "/llms-full.txt", "/facts.txt"],
        disallow: DISALLOWED_INTERNAL_PATHS,
      },
      ...BONA_FIDE_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: ["/", "/feed.xml", "/llms.txt", "/llms-full.txt", "/facts.txt"],
        disallow: DISALLOWED_INTERNAL_PATHS,
      })),
      ...BLOCKED_SCRAPERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: "https://idigdata.com/sitemap.xml",
    host: "https://idigdata.com",
  };
}
