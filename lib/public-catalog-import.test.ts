import assert from "node:assert/strict";
import { test } from "node:test";
import { createHash } from "node:crypto";
import { PUBLIC_OUTCOME_DOMAINS } from "./catalog";
import { validatePublicExport, siteCatalogItems } from "./public-catalog-import";

function fixture() {
  const outcomes = PUBLIC_OUTCOME_DOMAINS.flatMap(domain => Array.from({ length: 10 }, (_, index) => ({ outcome_id: `${domain.code.toLowerCase()}_test_${index}`, face: domain.name, name: "Approved title", tagline: "Approved summary", situation: "", deliverables: [], public_order: index, public_revision: 1 })));
  const aliases = { old_id: outcomes[0].outcome_id };
  return { version: "outcome-catalog-2026-10-09", generated_at: "2026-10-09T00:00:00Z", source: "test fixture", public_hash: createHash("sha256").update(JSON.stringify({ outcomes, aliases })).digest("hex"), count: 60, outcomes, items: outcomes, aliases };
}
test("approved projection accepts separate public text and produces only site fields", () => {
  const payload = validatePublicExport(fixture());
  const items = siteCatalogItems(payload);
  assert.equal(items.length, 60);
  assert.deepEqual(Object.keys(items[0]).sort(), ["deliverables", "domainId", "id", "name", "situation", "tagline"]);
  assert.equal(items[0].situation, "");
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
