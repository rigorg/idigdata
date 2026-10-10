import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { validateFactoryExport, factoryCatalogItems } from "../lib/public-catalog-import";

const input = process.argv[2];
if (!input) throw new Error("Usage: npm run catalog:import-factory -- <approved-factory-export.json>");
const payload = validateFactoryExport(JSON.parse(readFileSync(resolve(input), "utf8").replace(/^\uFEFF/, "")));
const items = factoryCatalogItems(payload);
const path = resolve("lib/factory-outcome-catalog.ts");
const result = `// Generated from the approved Operations factory public export.\n// Separate from the six-face enterprise Block.\nimport type { CatalogItem } from "./catalog";\n\nexport const FACTORY_CATALOG_ITEMS: CatalogItem[] = ${JSON.stringify(items, null, 2)};\n\nexport const FACTORY_CATALOG_REVISION = ${JSON.stringify({ version: payload.version, public_hash: payload.public_hash, count: payload.count })};\n\nexport const FACTORY_OUTCOME_ALIASES: Record<string, string> = ${JSON.stringify(payload.aliases, null, 2)};\n`;
writeFileSync(path, result);
console.log(JSON.stringify({ count: items.length, public_hash: payload.public_hash, file: path }));
