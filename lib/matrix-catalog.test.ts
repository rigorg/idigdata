import assert from "node:assert/strict";
import { test } from "node:test";
import { PUBLIC_CATALOG_ITEMS, PUBLIC_OUTCOME_DOMAINS, RETIRED_OUTCOME_IDS } from "./catalog";
import { FACTORY_CATALOG_ITEMS } from "./factory-outcome-catalog";
import { newEngagementDraft, parseEngagementDraft } from "./engagement-draft";
import { resolveOutcomeId } from "./outcome-links";

test("admitted matrix separates six enterprise faces from ten factory outcomes", () => {
  assert.equal(PUBLIC_CATALOG_ITEMS.length, 60);
  for (const domain of PUBLIC_OUTCOME_DOMAINS) assert.equal(PUBLIC_CATALOG_ITEMS.filter(item => item.domainId === domain.id).length, 10);
  assert.equal(FACTORY_CATALOG_ITEMS.length, 10);
  for (const item of FACTORY_CATALOG_ITEMS) {
    assert.equal(resolveOutcomeId(item.id), null);
    assert.equal(item.domainId, "factory_agentic_software");
  }
  for (const item of [...PUBLIC_CATALOG_ITEMS, ...FACTORY_CATALOG_ITEMS]) {
    for (const heading of ["Scope:", "What you receive:", "Completion:", "Boundaries:"]) assert.ok(item.situation?.includes(heading), item.id);
  }
});

test("admitted P2P retirement preserves an old saved request without converting scope", () => {
  assert.ok(RETIRED_OUTCOME_IDS.includes("wa_procure_to_pay"));
  assert.equal(resolveOutcomeId("wa_procure_to_pay"), null);
  const draft = parseEngagementDraft(JSON.stringify({...newEngagementDraft(), outcomeIds:["wa_procure_to_pay", "wa_handoffs"]}));
  assert.deepEqual(draft?.outcomeIds, ["wa_handoffs"]);
  assert.deepEqual(draft?.retiredOutcomeIds, ["wa_procure_to_pay"]);
  assert.equal(PUBLIC_CATALOG_ITEMS.find(item=>item.id === "fs_invoice_discrepancies")?.domainId, "workflows_automation");
});
