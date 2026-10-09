import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveOutcomeId, outcomeLinkTarget } from "./outcome-links";
import { LEGACY_OUTCOME_ALIASES, PUBLIC_CATALOG_ITEMS } from "./catalog";
import { newEngagementDraft, parseEngagementDraft } from "./engagement-draft";

test("direct links resolve without carrying a selection instruction", () => {
  const target = outcomeLinkTarget(`?outcome=${PUBLIC_CATALOG_ITEMS[0].id}`);
  assert.equal(target.kind, "found");
  assert.deepEqual(Object.keys(target).sort(), ["item", "kind"]);
  assert.deepEqual(outcomeLinkTarget("?outcome=missing"), { kind: "unknown" });
  assert.deepEqual(outcomeLinkTarget(""), { kind: "none" });
});
test("alias chains resolve; cycles, inherited names and dangling IDs do not", () => {
  const ids = new Set(["current"]);
  assert.equal(resolveOutcomeId("old", ids, { old: "middle", middle: "current" }), "current");
  assert.equal(resolveOutcomeId("old", ids, { old: "middle", middle: "old" }), null);
  assert.equal(resolveOutcomeId("old", ids, { old: "missing" }), null);
  assert.equal(resolveOutcomeId("toString", ids, {}), null);
});
test("saved historical selections migrate without losing notes or duplicating outcomes", () => {
  const [alias, canonical] = Object.entries(LEGACY_OUTCOME_ALIASES).find(([, target]) => PUBLIC_CATALOG_ITEMS.some(item => item.id === target))!;
  const saved = { ...newEngagementDraft(), outcomeIds: [alias, canonical], notes: "Keep this context", contactMessage: "Keep this message" };
  const restored = parseEngagementDraft(JSON.stringify(saved));
  assert.deepEqual(restored, { ...saved, outcomeIds: [canonical] });
});
