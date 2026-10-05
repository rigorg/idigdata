/**
 * Public route enumeration for the sitemap.
 *
 * Routes come from the filesystem (app/**\/page.tsx) at build time, not from a
 * hand list. A route is public when none of these apply:
 *   - it sits under an excluded segment (api, preview-*, hold, geometry,
 *     banners, not-found)
 *   - its page.tsx is only a redirect (`permanentRedirect(` / `redirect(`)
 *   - it is marked noindex in its own metadata (`index: false`)
 *   - it is a legacy path listed as a redirect source in next.config.ts
 *   - it contains a dynamic segment ([slug]) — those are enumerated from
 *     content, not from the file tree
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { postPath, readPosts, type Post } from "./posts";
import { SITE_ORIGIN, WEBLOG_PATH } from "./site";

export { SITE_ORIGIN };

export type RouteEntry = {
  /** Route path with trailing slash, e.g. "/experience/". */
  route: string;
  /** Source page file, absolute. */
  file: string;
};

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

export type EnumerateOptions = {
  /** Absolute path to the Next app directory. */
  appDir: string;
  /** Absolute path to next.config.ts; legacy redirect sources are read from it. */
  nextConfigPath?: string | null;
  /** Extra route paths (with trailing slash) to drop. */
  exclude?: Iterable<string>;
};

const EXCLUDED_SEGMENTS = new Set(["api", "hold", "geometry", "banners", "not-found"]);
const EXCLUDED_SEGMENT_PREFIXES = ["preview-"];
const PAGE_FILES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx", "page.md"]);

const REDIRECT_CALL = /\b(?:permanentRedirect|redirect)\s*\(/;
const NOINDEX_METADATA = /\bindex\s*:\s*false\b/;

export function isExcludedSegment(segment: string): boolean {
  if (EXCLUDED_SEGMENTS.has(segment)) return true;
  return EXCLUDED_SEGMENT_PREFIXES.some((prefix) => segment.startsWith(prefix));
}

export function isRedirectOnlyPage(source: string): boolean {
  return REDIRECT_CALL.test(source);
}

export function isNoindexPage(source: string): boolean {
  return NOINDEX_METADATA.test(source);
}

/** Normalize to leading and trailing slash: "experience" -> "/experience/". */
export function normalizeRoute(route: string): string {
  let out = route.trim();
  if (!out.startsWith("/")) out = `/${out}`;
  if (!out.endsWith("/")) out = `${out}/`;
  return out.replace(/\/{2,}/g, "/");
}

/**
 * Read redirect `source:` paths out of next.config.ts by text, so the sitemap
 * never has to import the config (which would drag Next internals into the
 * scan). Wildcards (`/:path*`) are stripped; host-conditioned catch-alls like
 * `/:path*` collapse to "/" and are ignored by callers.
 */
export function readLegacyRedirectSources(nextConfigPath: string): Set<string> {
  const out = new Set<string>();
  if (!fs.existsSync(nextConfigPath)) return out;
  const source = fs.readFileSync(nextConfigPath, "utf8");
  const re = /source\s*:\s*["'`]([^"'`]+)["'`]/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(source)) !== null) {
    const raw = match[1].replace(/\/:[A-Za-z0-9_]+\*?$/, "");
    if (!raw || raw === "/") continue;
    if (raw.includes(":")) continue;
    out.add(normalizeRoute(raw));
  }
  return out;
}

/** Walk `appDir` for page files, returning route paths. Sorted. */
export function enumerateAppRoutes(options: EnumerateOptions): RouteEntry[] {
  const { appDir } = options;
  const legacy = options.nextConfigPath
    ? readLegacyRedirectSources(options.nextConfigPath)
    : new Set<string>();
  const extra = new Set(Array.from(options.exclude ?? [], normalizeRoute));
  const found: RouteEntry[] = [];

  const walk = (dir: string, segments: string[]) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const name = entry.name;
        if (name.startsWith("_") || name.startsWith(".")) continue;
        if (name.startsWith("[")) continue; // dynamic segment: enumerated from content
        if (isExcludedSegment(name)) continue;
        // Route groups "(group)" and parallel routes "@slot" do not add a URL segment.
        const isGroup = name.startsWith("(") && name.endsWith(")");
        const isSlot = name.startsWith("@");
        walk(path.join(dir, name), isGroup || isSlot ? segments : [...segments, name]);
        continue;
      }
      if (!entry.isFile() || !PAGE_FILES.has(entry.name)) continue;
      const file = path.join(dir, entry.name);
      const source = fs.readFileSync(file, "utf8");
      if (isRedirectOnlyPage(source)) continue;
      if (isNoindexPage(source)) continue;
      const route = segments.length === 0 ? "/" : normalizeRoute(segments.join("/"));
      if (legacy.has(route) || extra.has(route)) continue;
      found.push({ route, file });
    }
  };

  walk(appDir, []);
  found.sort((a, b) => a.route.localeCompare(b.route));
  return found;
}

/**
 * Last commit date of a file, ISO 8601, via git. Falls back to `fallback`
 * (default: now) when git is unavailable or the file is untracked.
 */
export function gitLastCommitDate(file: string, fallback: Date = new Date()): Date {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", path.basename(file)],
      {
        cwd: path.dirname(file),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        timeout: 5000,
        windowsHide: true,
      },
    ).trim();
    if (!out) return fallback;
    const date = new Date(out);
    return Number.isNaN(date.getTime()) ? fallback : date;
  } catch {
    return fallback;
  }
}

export const ROUTE_PRIORITY: Record<string, number> = {
  "/": 1.0,
  "/experience/": 0.9,
  "/block/": 0.9,
  [WEBLOG_PATH]: 0.9,
  "/contact/": 0.8,
  "/faq/": 0.6,
  "/privacy/": 0.3,
};

export const ROUTE_CHANGE_FREQUENCY: Record<string, SitemapEntry["changeFrequency"]> = {
  "/": "monthly",
  "/experience/": "monthly",
  "/block/": "monthly",
  [WEBLOG_PATH]: "weekly",
  "/contact/": "yearly",
  "/faq/": "monthly",
  "/privacy/": "yearly",
};

export function priorityFor(route: string): number {
  if (route in ROUTE_PRIORITY) return ROUTE_PRIORITY[route];
  if (route.startsWith(WEBLOG_PATH)) return 0.7; // individual posts
  return 0.5;
}

export function changeFrequencyFor(route: string): SitemapEntry["changeFrequency"] {
  if (route in ROUTE_CHANGE_FREQUENCY) return ROUTE_CHANGE_FREQUENCY[route];
  return "monthly";
}

export type BuildSitemapOptions = {
  cwd?: string;
  appDir?: string;
  nextConfigPath?: string | null;
  postsDir?: string;
  origin?: string;
  /** Override lastModified resolution (tests). */
  lastModifiedFor?: (file: string) => Date;
  now?: Date;
};

/**
 * Full sitemap: filesystem routes plus /agentic-ai/<slug>/ for each post.
 * The weblog index itself appears only when its page.tsx exists.
 */
export function buildSitemapEntries(options: BuildSitemapOptions = {}): SitemapEntry[] {
  // These reads run at build time only (the sitemap route is force-static), so
  // opt out of Turbopack output tracing; otherwise the whole project is traced
  // into the server bundle.
  const cwd = options.cwd ?? process.cwd();
  const appDir = options.appDir ?? path.join(/*turbopackIgnore: true*/ cwd, "app");
  const nextConfigPath =
    options.nextConfigPath === undefined
      ? path.join(/*turbopackIgnore: true*/ cwd, "next.config.ts")
      : options.nextConfigPath;
  const origin = options.origin ?? SITE_ORIGIN;
  const now = options.now ?? new Date();
  const lastModifiedFor = options.lastModifiedFor ?? ((file: string) => gitLastCommitDate(file, now));

  const entries: SitemapEntry[] = enumerateAppRoutes({ appDir, nextConfigPath }).map(
    ({ route, file }) => ({
      url: `${origin}${route}`,
      lastModified: lastModifiedFor(file),
      changeFrequency: changeFrequencyFor(route),
      priority: priorityFor(route),
    }),
  );

  const posts: Post[] = readPosts(
    options.postsDir ?? path.join(/*turbopackIgnore: true*/ cwd, "content", "posts"),
  );
  for (const post of posts) {
    const route = postPath(post);
    entries.push({
      url: `${origin}${route}`,
      lastModified: post.date,
      changeFrequency: changeFrequencyFor(route),
      priority: priorityFor(route),
    });
  }

  entries.sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
  return entries;
}
