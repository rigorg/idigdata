import { createHash } from "node:crypto";
import { PUBLIC_OUTCOME_DOMAINS, type CatalogItem } from "./catalog";

type PublicRow = { outcome_id: string; face: string; name: string; tagline: string; situation: string; deliverables: string[]; public_order: number; public_revision: number };
export type PublicExport = { version: string; generated_at: string; source: string; public_hash: string; count: number; aliases: Record<string, string>; outcomes: PublicRow[]; items: PublicRow[] };
const object = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
function keys(value: Record<string, unknown>, expected: string[]) {
  if (Object.keys(value).sort().join() !== [...expected].sort().join()) throw new Error("Unexpected or missing public export fields");
}
export function validatePublicExport(input: unknown): PublicExport {
  if (!object(input)) throw new Error("Expected public catalog export");
  keys(input, ["version", "generated_at", "source", "public_hash", "count", "aliases", "outcomes", "items"]);
  if (input.version !== "outcome-catalog-2026-10-09" || typeof input.generated_at !== "string" || !Number.isFinite(Date.parse(input.generated_at)) || typeof input.source !== "string" || !input.source.trim()) throw new Error("Invalid export provenance");
  if (!Array.isArray(input.outcomes) || input.outcomes.length !== 60 || input.count !== 60 || JSON.stringify(input.items) !== JSON.stringify(input.outcomes)) throw new Error("Expected 60 consistent public outcomes");
  const counts = new Map(PUBLIC_OUTCOME_DOMAINS.map(domain => [domain.name, 0]));
  const ids = new Set<string>();
  for (const row of input.outcomes) {
    if (!object(row)) throw new Error("Invalid public outcome");
    keys(row, ["outcome_id", "face", "name", "tagline", "situation", "deliverables", "public_order", "public_revision"]);
    if (typeof row.outcome_id !== "string" || !/^[a-z][a-z0-9_]+$/.test(row.outcome_id) || ids.has(row.outcome_id)) throw new Error("Invalid or duplicate public ID");
    ids.add(row.outcome_id);
    if (typeof row.face !== "string" || !counts.has(row.face)) throw new Error("Unknown public category");
    counts.set(row.face, counts.get(row.face)! + 1);
    if (typeof row.name !== "string" || !row.name.trim() || typeof row.tagline !== "string" || !row.tagline.trim() || typeof row.situation !== "string") throw new Error("Incomplete approved public copy");
    if (!Array.isArray(row.deliverables) || row.deliverables.length !== 0) throw new Error("Unapproved public deliverables");
    if (!Number.isInteger(row.public_order) || (row.public_order as number) < 0 || !Number.isInteger(row.public_revision) || (row.public_revision as number) < 1) throw new Error("Invalid public revision or order");
  }
  if ([...counts.values()].some(count => count !== 10)) throw new Error("Expected ten outcomes in each category");
  if (!object(input.aliases)) throw new Error("Invalid aliases");
  for (const [alias, target] of Object.entries(input.aliases)) {
    if (!/^[a-z][a-z0-9_]+$/.test(alias) || ids.has(alias) || typeof target !== "string" || !ids.has(target)) throw new Error("Alias must resolve directly to an active public outcome");
  }
  const hash = createHash("sha256").update(JSON.stringify({ outcomes: input.outcomes, aliases: input.aliases })).digest("hex");
  if (input.public_hash !== hash) throw new Error("Public export hash mismatch");
  return input as PublicExport;
}

export function siteCatalogItems(payload: PublicExport): CatalogItem[] {
  return [...payload.outcomes].sort((a, b) => a.face.localeCompare(b.face) || a.public_order - b.public_order || a.outcome_id.localeCompare(b.outcome_id)).map(row => ({
    id: row.outcome_id, domainId: PUBLIC_OUTCOME_DOMAINS.find(domain => domain.name === row.face)!.id,
    name: row.name, tagline: row.tagline, situation: row.situation, deliverables: [],
  }));
}
