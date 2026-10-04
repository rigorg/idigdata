import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** Allow all crawlers including major AI / answer-engine bots. No GEO theater — open crawl + accurate pages. */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Anthropic-AI",
  "PerplexityBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/hold/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: "https://idigdata.com/sitemap.xml",
    host: "https://idigdata.com",
  };
}
