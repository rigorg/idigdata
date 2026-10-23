#!/usr/bin/env node
/**
 * IndexNow ping: read the sitemap, POST every URL to api.indexnow.org.
 *
 *   npm run indexnow                      # reads https://idigdata.com/sitemap.xml
 *   npm run indexnow -- --dry-run         # print the payload, send nothing
 *   npm run indexnow -- --sitemap ./out/sitemap.xml
 *   npm run indexnow -- --sitemap https://preview.example/sitemap.xml
 *
 * The key is public by design (IndexNow verifies ownership by fetching
 * https://idigdata.com/<key>.txt). The key file lives at public/<key>.txt.
 * Running this is an Operator act: it tells Bing, Yandex, Seznam, Naver and
 * other IndexNow participants that these URLs changed.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "idigdata.com";
const KEY = "bf78857349f75e74b5dfe91837a03954";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const DEFAULT_SITEMAP = `https://${HOST}/sitemap.xml`;
const MAX_URLS_PER_POST = 10000;

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

function parseArgs(argv) {
  const out = { dryRun: false, sitemap: DEFAULT_SITEMAP };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") out.dryRun = true;
    else if (arg === "--sitemap") out.sitemap = argv[++i] ?? out.sitemap;
    else if (arg.startsWith("--sitemap=")) out.sitemap = arg.slice("--sitemap=".length);
    else if (arg === "--help" || arg === "-h") {
      console.log("usage: node scripts/indexnow-ping.mjs [--dry-run] [--sitemap <url|file>]");
      process.exit(0);
    }
  }
  return out;
}

async function readSitemap(source) {
  if (/^https?:\/\//i.test(source)) {
    const res = await fetch(source, { headers: { accept: "application/xml,text/xml" } });
    if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status} ${res.statusText}`);
    return res.text();
  }
  return readFile(path.resolve(source), "utf8");
}

export function extractLocs(xml) {
  const locs = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let match;
  while ((match = re.exec(xml)) !== null) {
    const url = match[1].trim();
    try {
      const parsed = new URL(url);
      if (parsed.hostname === HOST || parsed.hostname === `www.${HOST}`) locs.push(url);
    } catch {
      // skip malformed
    }
  }
  return Array.from(new Set(locs));
}

async function verifyKeyFile() {
  const keyFile = path.join(repoRoot, "public", `${KEY}.txt`);
  const body = (await readFile(keyFile, "utf8")).trim();
  if (body !== KEY) throw new Error(`key file ${keyFile} does not contain the key`);
  return keyFile;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const keyFile = await verifyKeyFile();
  const xml = await readSitemap(args.sitemap);
  const urlList = extractLocs(xml).slice(0, MAX_URLS_PER_POST);
  if (urlList.length === 0) throw new Error("no idigdata.com URLs found in sitemap");

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  console.log(`sitemap: ${args.sitemap}`);
  console.log(`key file: ${keyFile}`);
  console.log(`urls (${urlList.length}):`);
  for (const url of urlList) console.log(`  ${url}`);

  if (args.dryRun) {
    console.log("dry run; nothing sent");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  // 200 OK, 202 Accepted (key validation pending). Anything else is a failure.
  if (res.status === 200 || res.status === 202) {
    console.log(`indexnow: ${res.status} ${res.statusText}`);
    return;
  }
  throw new Error(`indexnow rejected: ${res.status} ${res.statusText} ${text}`.trim());
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
