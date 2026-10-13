import assert from "node:assert/strict";
import { test } from "node:test";
import { PUBLIC_CATALOG_ITEMS, PUBLIC_OUTCOME_DOMAINS, RETIRED_OUTCOME_IDS } from "./catalog";
import { FACTORY_CATALOG_ITEMS } from "./factory-outcome-catalog";
import { newEngagementDraft, parseEngagementDraft } from "./engagement-draft";
import { resolveOutcomeId } from "./outcome-links";

test("admitted matrix comprises sixty enterprise outcomes across six domains", () => {
  assert.equal(PUBLIC_CATALOG_ITEMS.length, 60);
  for (const domain of PUBLIC_OUTCOME_DOMAINS) {
    assert.equal(PUBLIC_CATALOG_ITEMS.filter(item => item.domainId === domain.id).length, 10);
  }
  // Factory services are absorbed into enterprise agentics and entered through the Collective
  assert.equal(FACTORY_CATALOG_ITEMS.length, 0);
  assert.ok(PUBLIC_CATALOG_ITEMS.some(item => item.id === "fa_factory_implementation" && item.domainId === "agentic_workflows"));
});

test("admitted P2P retirement preserves an old saved request without converting scope", () => {
  assert.ok(RETIRED_OUTCOME_IDS.includes("wa_procure_to_pay"));
  assert.equal(resolveOutcomeId("wa_procure_to_pay"), null);
  const draft = parseEngagementDraft(JSON.stringify({...newEngagementDraft(), outcomeIds:["wa_procure_to_pay", "wa_handoffs"]}));
  assert.deepEqual(draft?.outcomeIds, ["wa_handoffs"]);
  assert.deepEqual(draft?.retiredOutcomeIds, ["wa_procure_to_pay"]);
  assert.equal(PUBLIC_CATALOG_ITEMS.find(item=>item.id === "fs_invoice_discrepancies")?.domainId, "agentic_workflows");
});
