import assert from "node:assert/strict";
import { test } from "node:test";
import { createHash } from "node:crypto";
import { PUBLIC_OUTCOME_DOMAINS } from "./catalog";
import { validatePublicExport, siteCatalogItems, validateFactoryExport, factoryCatalogItems, retainedPublicAliases } from "./public-catalog-import";

function fixture() {
  const outcomes = PUBLIC_OUTCOME_DOMAINS.flatMap(domain => Array.from({ length: 10 }, (_, index) => ({ outcome_id: `${domain.code.toLowerCase()}_test_${index}`, face: domain.name, name: "Approved title", tagline: "Approved summary", situation: "", deliverables: [], public_order: index, public_revision: 1 })));
  const aliases = { old_id: outcomes[0].outcome_id };
  return { version: "outcome-catalog-2026-10-10", generated_at: "2026-10-09T00:00:00Z", source: "test fixture", public_hash: createHash("sha256").update(JSON.stringify({ outcomes, aliases, retired_ids: [] })).digest("hex"), count: 60, outcomes, items: outcomes, aliases, retired_ids: [] };
}
test("approved projection accepts separate public text and produces only site fields", () => {
  const payload = validatePublicExport(fixture());
  const items = siteCatalogItems(payload);
  assert.equal(items.length, 60);
  assert.deepEqual(Object.keys(items[0]).sort(), ["deliverables", "domainId", "id", "name", "situation", "tagline"]);
  assert.equal(items[0].situation, "");
});
test("authoritative retirement revokes historical aliases while equivalents survive", () => {
  const payload = validatePublicExport(fixture());
  payload.retired_ids = ["scope_change", "old_id"];
  const active = payload.outcomes[0].outcome_id;
  assert.deepEqual(retainedPublicAliases(payload, {scope_change:active, old_id:active, historical:active, unknown:"missing"}), { historical:active, old_id:active });
  const tampered = fixture(); tampered.retired_ids.push("old_id");
  assert.throws(()=>validatePublicExport(tampered), /hash/);
  const invalid = fixture(); invalid.retired_ids.push(active);
  assert.throws(()=>validatePublicExport(invalid), /retired/);
});
test("factory public projection is separate and cannot enter the six-face importer", () => {
  const source = fixture();
  const outcomes = source.outcomes.slice(0,10).map((row,index) => ({...row, outcome_id:`factory_test_${index}`, face:"Factory Agentic Software", name:"Workflow assurance", tagline:"Software performs the agreed work.", situation:"Explicit public scope and result details."}));
  const aliases = {};
  const factory = {...source, version:"factory-outcome-catalog-2026-10-10", count:10, outcomes, items:outcomes, aliases, public_hash:createHash("sha256").update(JSON.stringify({outcomes,aliases,retired_ids: []})).digest("hex")};
  const approved = validateFactoryExport(factory);
  assert.equal(factoryCatalogItems(approved)[0].domainId,"factory_agentic_software");
  assert.equal(factoryCatalogItems(approved)[0].situation,"Explicit public scope and result details.");
  assert.throws(()=>validatePublicExport(factory),/provenance/);
  assert.throws(()=>validateFactoryExport(source),/provenance/);
  const privateLeak=structuredClone(factory); Object.assign(privateLeak.outcomes[0],{receipt:"Private source"});
  assert.throws(()=>validateFactoryExport(privateLeak),/fields/);
  const mixed=structuredClone(factory); mixed.outcomes[0].face="Data & Knowledge";
  assert.throws(()=>validateFactoryExport(mixed),/category/);
});
test("rejects private leakage, wrong counts, tampering and invalid aliases", () => {
  const dirty = fixture();
  Object.assign(dirty.outcomes[0], { receipt: "private" });
  assert.throws(() => validatePublicExport(dirty), /fields/);
  const wrong = fixture(); wrong.count = 59;
  assert.throws(() => validatePublicExport(wrong), /60/);
  const altered = fixture(); altered.outcomes[0].name = "Tampered";
  assert.throws(() => validatePublicExport(altered), /hash/);
  const alias = fixture(); alias.aliases.old_id = "missing";
  assert.throws(() => validatePublicExport(alias), /Alias/);
  const missing = fixture(); missing.outcomes[0].tagline = "";
  assert.throws(() => validatePublicExport(missing), /copy/);
  const duplicate = fixture(); duplicate.outcomes[1].outcome_id = duplicate.outcomes[0].outcome_id;
  assert.throws(() => validatePublicExport(duplicate), /duplicate/);
});
