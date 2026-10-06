/**
 * RSS 2.0 feed for the Agentic AI weblog. Pure: takes posts, returns XML.
 * With zero posts it still emits a valid channel so /feed.xml is live before
 * the first post lands.
 */
import { postPath, type Post } from "./posts";
import { SITE_ORIGIN, WEBLOG_PATH } from "./site";

export const FEED_PATH = "/feed.xml";
export const FEED_TITLE = "Agentic AI, by Robert Paddock";
export const FEED_DESCRIPTION =
  "Robert Paddock's public notebook on enterprise and agentic workflows.";

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export type RssOptions = {
  origin?: string;
  now?: Date;
};

export function buildRssXml(posts: Post[], options: RssOptions = {}): string {
  const origin = options.origin ?? SITE_ORIGIN;
  const now = options.now ?? new Date();
  const channelLink = `${origin}${WEBLOG_PATH}`;
  const selfLink = `${origin}${FEED_PATH}`;
  const lastBuild = posts[0]?.date ?? now;

  const items = posts
    .map((post) => {
      const url = `${origin}${postPath(post)}`;
      const lines = [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${post.date.toUTCString()}</pubDate>`,
        post.description ? `      <description>${escapeXml(post.description)}</description>` : null,
        post.topic ? `      <category>${escapeXml(post.topic)}</category>` : null,
        "    </item>",
      ];
      return lines.filter((line): line is string => line !== null).join("\n");
    })
    .join("\n");

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(FEED_TITLE)}</title>`,
    `    <link>${escapeXml(channelLink)}</link>`,
    `    <description>${escapeXml(FEED_DESCRIPTION)}</description>`,
    "    <language>en-us</language>",
    `    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />`,
  ];
  if (items) lines.push(items);
  lines.push("  </channel>", "</rss>");
  return `${lines.join("\n")}\n`;
}
