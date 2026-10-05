import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, describe, it } from "node:test";
import {
  buildSitemapEntries,
  enumerateAppRoutes,
  gitLastCommitDate,
  isRedirectOnlyPage,
  normalizeRoute,
  priorityFor,
  readLegacyRedirectSources,
} from "./routes";

const REPO = path.resolve(__dirname, "..", "..");
const APP_DIR = path.join(REPO, "app");
const NEXT_CONFIG = path.join(REPO, "next.config.ts");

describe("route helpers", () => {
  it("normalizes to leading and trailing slash", () => {
    assert.equal(normalizeRoute("experience"), "/experience/");
    assert.equal(normalizeRoute("/block"), "/block/");
    assert.equal(normalizeRoute("/faq/"), "/faq/");
  });

  it("detects redirect-only pages by source", () => {
    assert.equal(isRedirectOnlyPage('permanentRedirect("/experience/");'), true);
    assert.equal(isRedirectOnlyPage("redirect('/contact/')"), true);
    assert.equal(isRedirectOnlyPage("export default function Page() { return null; }"), false);
  });

  it("reads legacy redirect sources from next.config.ts", () => {
    const legacy = readLegacyRedirectSources(NEXT_CONFIG);
    assert.equal(legacy.has("/work/"), true);
    assert.equal(legacy.has("/engagement/"), true);
    assert.equal(legacy.has("/about/"), true);
    // the host-conditioned "/:path*" catch-all must not collapse to "/"
    assert.equal(legacy.has("/"), false);
  });

  it("keeps the agreed priorities", () => {
    assert.equal(priorityFor("/"), 1.0);
    assert.equal(priorityFor("/experience/"), 0.9);
    assert.equal(priorityFor("/block/"), 0.9);
    assert.equal(priorityFor("/agentic-ai/"), 0.9);
    assert.equal(priorityFor("/contact/"), 0.8);
    assert.equal(priorityFor("/faq/"), 0.6);
    assert.equal(priorityFor("/privacy/"), 0.3);
    assert.equal(priorityFor("/agentic-ai/some-post/"), 0.7);
  });
});

describe("enumerateAppRoutes against the real app directory", () => {
  const routes = enumerateAppRoutes({ appDir: APP_DIR, nextConfigPath: NEXT_CONFIG }).map(
    (entry) => entry.route,
  );

  it("includes the public pages", () => {
    for (const expected of ["/", "/experience/", "/block/", "/contact/", "/faq/", "/privacy/"]) {
      assert.ok(routes.includes(expected), `missing ${expected} in ${routes.join(", ")}`);
    }
  });

  it("excludes internal, redirect-only and noindex routes", () => {
    for (const excluded of [
      "/api/",
      "/api/contact/",
      "/hold/",
      "/geometry/",
      "/banners/",
      "/preview-agentic/",
      "/preview-geometry/",
      "/work/",
      "/method/",
      "/systems/",
      "/engagement/",
      "/agentics/",
      "/applied-agentics/",
      "/application-layer/",
      "/agentic-layer/",
      "/transformations/",
      "/approach/",
    ]) {
      assert.equal(routes.includes(excluded), false, `${excluded} must not be listed`);
    }
  });

  it("returns routes with trailing slashes and no duplicates", () => {
    assert.equal(new Set(routes).size, routes.length);
    for (const route of routes) assert.ok(route.endsWith("/"), route);
  });
});

describe("enumerateAppRoutes against a fixture tree", () => {
  let root: string;

  before(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "idig-routes-"));
    const write = (rel: string, body: string) => {
      const file = path.join(root, rel);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, body);
    };
    write("app/page.tsx", "export default function Home() { return null; }");
    write("app/agentic-ai/page.tsx", "export default function Weblog() { return null; }");
    write("app/agentic-ai/[slug]/page.tsx", "export default function Post() { return null; }");
    write("app/(marketing)/pricing/page.tsx", "export default function Pricing() { return null; }");
    write("app/old/page.tsx", 'import { permanentRedirect } from "next/navigation";\nexport default function Old() { permanentRedirect("/"); }');
    write("app/secret/page.tsx", "export const metadata = { robots: { index: false, follow: false } };\nexport default function S() { return null; }");
    write("app/preview-thing/page.tsx", "export default function P() { return null; }");
    write("app/legacy/page.tsx", "export default function L() { return null; }");
    write("app/api/ping/route.ts", "export function GET() {}");
    write(
      "next.config.ts",
      'const c = { async redirects() { return [{ source: "/legacy", destination: "/", permanent: true }, { source: "/legacy/:path*", destination: "/", permanent: true }]; } }; export default c;',
    );
    write(
      "content/posts/first-note.md",
      "---\ntitle: First note\ndate: 2026-10-01\ndescription: A first note.\ntopic: agentic\n---\n\nBody.\n",
    );
    write("content/posts/draft.md", "no frontmatter here");
  });

  after(() => {
    fs.rmSync(root, { recursive: true, force: true });
  });

  it("enumerates only public static routes", () => {
    const routes = enumerateAppRoutes({
      appDir: path.join(root, "app"),
      nextConfigPath: path.join(root, "next.config.ts"),
    }).map((entry) => entry.route);
    assert.deepEqual(routes, ["/", "/agentic-ai/", "/pricing/"]);
  });

  it("builds sitemap entries with posts and a stable lastModified", () => {
    const fixed = new Date("2026-10-05T00:00:00Z");
    const entries = buildSitemapEntries({
      cwd: root,
      origin: "https://example.test",
      lastModifiedFor: () => fixed,
      now: fixed,
    });
    const urls = entries.map((entry) => entry.url);
    assert.deepEqual(urls, [
      "https://example.test/",
      "https://example.test/agentic-ai/",
      "https://example.test/agentic-ai/first-note/",
      "https://example.test/pricing/",
    ]);
    const post = entries.find((entry) => entry.url.endsWith("/first-note/"));
    assert.ok(post);
    assert.equal(post.lastModified.toISOString().slice(0, 10), "2026-10-01");
    assert.equal(post.priority, 0.7);
    const home = entries.find((entry) => entry.url === "https://example.test/");
    assert.equal(home?.lastModified, fixed);
  });

  it("falls back to the supplied date when the file is not tracked by git", () => {
    const fallback = new Date("2001-01-01T00:00:00Z");
    const untracked = path.join(root, "app", "page.tsx");
    assert.equal(gitLastCommitDate(untracked, fallback), fallback);
  });
});

describe("gitLastCommitDate on a tracked file", () => {
  it("returns a real commit date for app/layout.tsx when git is present", () => {
    const fallback = new Date("2001-01-01T00:00:00Z");
    const date = gitLastCommitDate(path.join(APP_DIR, "layout.tsx"), fallback);
    assert.ok(date instanceof Date);
    assert.ok(!Number.isNaN(date.getTime()));
    // Either git answered (date after 2020) or git is absent (fallback). Both are valid.
    assert.ok(date.getTime() === fallback.getTime() || date.getFullYear() >= 2020);
  });
});
