/**
 * Weblog posts for the Agentic AI route (/agentic-ai/).
 *
 * Posts are Markdown files under content/posts/*.md with YAML-style frontmatter:
 *
 *   ---
 *   title: ...
 *   date: 2026-10-05
 *   slug: optional-override   (defaults to the file name without .md)
 *   description: one line
 *   topic: optional
 *   ---
 *
 * The directory does not exist yet. Every reader here tolerates that and
 * returns an empty list, so the sitemap and the feed ship with zero items.
 */
import fs from "node:fs";
import path from "node:path";
import { WEBLOG_PATH } from "./site";

export { WEBLOG_PATH };

export type Post = {
  slug: string;
  title: string;
  date: Date;
  description: string;
  topic: string | null;
  /** Absolute path of the source file. */
  file: string;
};

export function defaultPostsDir(cwd = process.cwd()): string {
  // Build-time read (force-static callers); keep Turbopack from tracing the tree.
  return path.join(/*turbopackIgnore: true*/ cwd, "content", "posts");
}

/** Parse a minimal `key: value` frontmatter block. Returns null when absent. */
export function parseFrontmatter(source: string): Record<string, string> | null {
  const normalized = source.replace(/^﻿/, "").replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return null;
  const end = normalized.indexOf("\n---", 4);
  if (end === -1) return null;
  const block = normalized.slice(4, end);
  const out: Record<string, string> = {};
  for (const line of block.split("\n")) {
    const match = /^([A-Za-z_][A-Za-z0-9_-]*)\s*:\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/\.md$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Read every post in `dir`. Files without usable frontmatter (missing title
 * or an unparseable date) are skipped rather than published half-formed.
 * Newest first.
 */
export function readPosts(dir = defaultPostsDir()): Post[] {
  if (!fs.existsSync(dir)) return [];
  const posts: Post[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    const file = path.join(dir, entry.name);
    const fm = parseFrontmatter(fs.readFileSync(file, "utf8"));
    if (!fm || !fm.title) continue;
    const date = fm.date ? new Date(fm.date) : new Date(NaN);
    if (Number.isNaN(date.getTime())) continue;
    const slug = slugify(fm.slug || entry.name);
    if (!slug) continue;
    posts.push({
      slug,
      title: fm.title,
      date,
      description: fm.description ?? "",
      topic: fm.topic || null,
      file,
    });
  }
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

export function postPath(post: Pick<Post, "slug">): string {
  return `${WEBLOG_PATH}${post.slug}/`;
}
