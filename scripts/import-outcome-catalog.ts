import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { validatePublicExport, siteCatalogItems, retainedPublicAliases } from "../lib/public-catalog-import";
import { LEGACY_OUTCOME_ALIASES } from "../lib/catalog";

const input = process.argv[2];
if (!input) throw new Error("Usage: npm run catalog:import -- <approved-export.json>");
const payload = validatePublicExport(JSON.parse(readFileSync(resolve(input), "utf8").replace(/^\uFEFF/, "")));
const items = siteCatalogItems(payload);
const aliases = retainedPublicAliases(payload, LEGACY_OUTCOME_ALIASES);
const path = resolve("lib/catalog.ts");
const current = readFileSync(path, "utf8");
const header = current.slice(current.indexOf("export interface CatalogDomain"), current.indexOf("export const PUBLIC_CATALOG_ITEMS"));
if (!header || !current.includes("export const LEGACY_OUTCOME_ALIASES")) throw new Error("Unexpected catalog module layout");
const result = `// Generated from approved Operations public export. Do not edit outcome copy here.\n// Revision: ${payload.version}; SHA256: ${payload.public_hash}; 60 outcomes, ten per category.\n\n${header}export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = ${JSON.stringify(items, null, 2)};\n\nexport const LEGACY_OUTCOME_ALIASES: Record<string, string> = ${JSON.stringify(Object.fromEntries(Object.entries(aliases).sort(([a], [b]) => a.localeCompare(b))), null, 2)};\n\nexport const PUBLIC_CATALOG_REVISION = ${JSON.stringify({ version: payload.version, public_hash: payload.public_hash, count: payload.count })};\n`;
writeFileSync(path, result + `\nexport const RETIRED_OUTCOME_IDS: string[] = ${JSON.stringify(payload.retired_ids)};\n`);
console.log(JSON.stringify({ count: items.length, public_hash: payload.public_hash, file: path }));
