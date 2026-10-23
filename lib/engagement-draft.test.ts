import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ENGAGEMENT_DRAFT_KEY, LEGACY_DRAFT_KEYS, EngagementDraftSession,
  composeEngagementMessage, engagementSummary, newEngagementDraft,
  parseEngagementDraft, selectedOutcomeNames, retiredOutcomeLabel,
} from "./engagement-draft";
import { PUBLIC_CATALOG_ITEMS } from "./catalog";
import { ContactSchema } from "./contact/schema";

it("preserves a retired scope beside current selections without substituting it", () => {
  assert.equal(retiredOutcomeLabel("wa_procure_to_pay"), "Procure-to-Pay");
  assert.equal(retiredOutcomeLabel("wa_old_scope"), "Old Scope");
  const active = PUBLIC_CATALOG_ITEMS[0].id;
  const raw = JSON.stringify({ ...newEngagementDraft(), outcomeIds: [active, "retired_scope"], notes: "Keep this context" });
  const draft = parseEngagementDraft(raw, ["retired_scope"]);
  assert.ok(draft);
  assert.deepEqual(draft.outcomeIds, [active]);
  assert.deepEqual(draft.retiredOutcomeIds, ["retired_scope"]);
  assert.equal(draft.notes, "Keep this context");
  assert.match(engagementSummary(draft), /retired_scope/);
  assert.deepEqual(parseEngagementDraft(JSON.stringify(draft), ["retired_scope"]), draft);
  assert.equal(parseEngagementDraft(raw, []), null);
});

class MemoryStorage {
  data = new Map<string, string>();
  writes = 0;
  failWrite = false;
  failRemove = false;
  getItem(key: string) { return this.data.get(key) ?? null; }
  setItem(key: string, value: string) {
    if (this.failWrite) throw new Error("storage blocked");
    this.writes++; this.data.set(key, value);
  }
  removeItem(key: string) {
    if (this.failRemove) throw new Error("storage blocked");
    this.data.delete(key);
  }
}
const first = PUBLIC_CATALOG_ITEMS[0];
const second = PUBLIC_CATALOG_ITEMS[1];
const start = (store: MemoryStorage) => new EngagementDraftSession(() => store);

describe("engagement draft lifecycle", () => {
  it("does not save initial empty state before or during hydration", () => {
    const store = new MemoryStorage();
    const saved = { ...newEngagementDraft(), outcomeIds: [first.id], notes: "Original notes" };
    store.data.set(ENGAGEMENT_DRAFT_KEY, JSON.stringify(saved));
    const session = start(store);
    assert.equal(session.update({ notes: "" }), false);
    assert.equal(store.writes, 0);
    assert.deepEqual(session.hydrate(), saved);
    assert.deepEqual(session.hydrate(), saved);
    assert.equal(store.writes, 0);
  });

  it("preserves identity, notes and Contact edits across handoff, return and reload", () => {
    const store = new MemoryStorage();
    const block = start(store);
    const id = block.hydrate().id;
    block.update({ outcomeIds: [first.id], notes: "The close is delayed." });
    assert.equal(block.handoff(), true);
    const contact = start(store);
    assert.equal(contact.hydrate().stage, "handoff");
    contact.update({ contactMessage: "I edited my message, please retain this." });
    const returned = start(store);
    returned.hydrate();
    returned.update({ outcomeIds: [second.id], notes: "Updated situation", stage: "editing" });
    returned.handoff();
    const reload = start(store).hydrate();
    assert.equal(reload.id, id);
    assert.equal(reload.contactMessage, "I edited my message, please retain this.");
    assert.equal(reload.notes, "Updated situation");
    assert.deepEqual(reload.outcomeIds, [second.id]);
    const outgoing = composeEngagementMessage(reload).message;
    assert.ok(outgoing.includes(second.name));
    assert.ok(!outgoing.includes(first.name));
    assert.equal(outgoing.match(/I edited my message/g)?.length, 1);
    assert.ok(outgoing.includes("Updated situation"));
  });

  it("hands off notes without an outcome or invented duration", () => {
    const store = new MemoryStorage();
    const block = start(store);
    block.hydrate();
    block.update({ notes: "We do not know the cause yet." });
    assert.equal(block.handoff(), true);
    const result = composeEngagementMessage(start(store).hydrate());
    assert.ok(result.message.includes("We do not know the cause yet."));
    assert.ok(result.message.includes("Delivery timing: To agree"));
    assert.ok(!/sprint|Blocks:|sequential/.test(result.message));
    assert.equal(result.error, null);
  });

  it("projects labels from catalog IDs and ignores stored labels", () => {
    const draft = newEngagementDraft();
    draft.outcomeIds = [first.id, first.id];
    const parsed = parseEngagementDraft(JSON.stringify({ ...draft, itemNames: ["Invented name"] }))!;
    assert.deepEqual(parsed.outcomeIds, [first.id]);
    assert.deepEqual(selectedOutcomeNames(parsed), [first.name]);
    assert.ok(!engagementSummary(parsed).includes("Invented name"));
  });

  it("rejects malformed shapes, unknown IDs and future versions", () => {
    for (const raw of ["{", "null", "[]", "{}", JSON.stringify({ ...newEngagementDraft(), outcomeIds: ["unknown"] }),
      JSON.stringify({ ...newEngagementDraft(), notes: {} }), JSON.stringify({ ...newEngagementDraft(), version: 3 })]) {
      assert.equal(parseEngagementDraft(raw), null);
      const store = new MemoryStorage();
      store.data.set(ENGAGEMENT_DRAFT_KEY, raw);
      const session = start(store);
      assert.equal(session.hydrate().notes, "");
      assert.equal(session.notice, "invalid");
      assert.equal(store.getItem(ENGAGEMENT_DRAFT_KEY), raw);
      assert.equal(store.writes, 0);
    }
  });

  it("restores both old Block storage forms, retaining notes but discarding sizing", () => {
    for (const key of LEGACY_DRAFT_KEYS.slice(0, 2)) {
      const store = new MemoryStorage();
      store.data.set(key, JSON.stringify({ outcomeIds: [first.id], notes: "Saved notes", customNotes: "Handoff notes", cadence: "sprint", concurrency: "parallel" }));
      const session = start(store);
      const draft = session.hydrate();
      assert.deepEqual(draft.outcomeIds, [first.id]);
      assert.equal(draft.notes, "Handoff notes");
      assert.equal(session.notice, "none");
      assert.ok(!JSON.stringify(draft).includes("cadence"));
    }
  });

  it("restores old Contact drafts without treating old names as new catalog facts", () => {
    for (const key of LEGACY_DRAFT_KEYS.slice(2)) {
      const store = new MemoryStorage();
      store.data.set(key, JSON.stringify({ activeItemNames: [first.name, "Previous custom outcome"], activeToolNames: ["Legacy build"], domainNotes: { financial_systems: "Close question" }, totalBlocks: 3, pacing: "sprint" }));
      const draft = start(store).hydrate();
      assert.deepEqual(draft.outcomeIds, [first.id]);
      assert.ok(draft.notes.includes("Previous custom outcome"));
      assert.ok(draft.notes.includes("Legacy build"));
      assert.ok(draft.notes.includes("Close question"));
      assert.ok(!engagementSummary(draft).includes("Blocks: 3"));
    }
  });

  it("skips a malformed legacy entry and selects the latest valid legacy record", () => {
    const store = new MemoryStorage();
    store.data.set(LEGACY_DRAFT_KEYS[0], "{");
    store.data.set(LEGACY_DRAFT_KEYS[1], JSON.stringify({ outcomeIds: [first.id], customNotes: "older", timestamp: "2026-01-01" }));
    store.data.set(LEGACY_DRAFT_KEYS[2], JSON.stringify({ activeItemNames: [second.name], domainNotes: { team: "newer" }, updatedAt: "2026-02-01" }));
    assert.deepEqual(start(store).hydrate().outcomeIds, [second.id]);
    const bad = new MemoryStorage();
    bad.data.set(LEGACY_DRAFT_KEYS[0], JSON.stringify({ outcomeIds: "wrong", notes: "no" }));
    const session = start(bad);
    session.hydrate();
    assert.equal(session.notice, "invalid");
  });

  it("fails safely when storage is inaccessible and never claims a handoff", () => {
    const session = new EngagementDraftSession(() => { throw new Error("denied"); });
    assert.equal(session.hydrate().notes, "");
    assert.equal(session.notice, "unavailable");
    assert.equal(session.update({ notes: "Keep on screen" }), false);
    assert.equal(session.draft?.notes, "Keep on screen");
    assert.equal(session.handoff(), false);
    assert.equal(session.notice, "unavailable");
  });

  it("retains a valid in-memory edit when a later save fails", () => {
    const store = new MemoryStorage();
    const session = start(store);
    session.hydrate();
    session.update({ notes: "First" });
    store.failWrite = true;
    assert.equal(session.update({ notes: "New unsaved text" }), false);
    assert.equal(session.draft?.notes, "New unsaved text");
    assert.equal(session.notice, "unavailable");
  });

  it("retains draft on failure and clears only an explicit successful server response", () => {
    const store = new MemoryStorage();
    const session = start(store);
    session.hydrate();
    session.update({ outcomeIds: [first.id], notes: "Keep until success", contactMessage: "My text" });
    const saved = store.getItem(ENGAGEMENT_DRAFT_KEY);
    for (const [httpOk, body] of [[false, { ok: true }], [true, { ok: false }], [true, {}], [true, { ok: "true" }]] as const) {
      assert.equal(session.complete(httpOk, body), false);
      assert.equal(store.getItem(ENGAGEMENT_DRAFT_KEY), saved);
    }
    for (const key of LEGACY_DRAFT_KEYS) store.data.set(key, '{"notes":"old"}');
    assert.equal(session.complete(true, { ok: true, notification: "not_sent" }), true);
    assert.equal(session.draft, null);
    assert.equal(session.update({ notes: "must not revive" }), false);
    for (const key of LEGACY_DRAFT_KEYS) assert.equal(store.getItem(key), null);
    assert.ok(!store.getItem(ENGAGEMENT_DRAFT_KEY)?.includes("Keep until success"));
    assert.equal(start(store).hydrate().notes, "");
  });

  it("does not turn accepted submission into failure when cleanup is blocked", () => {
    const store = new MemoryStorage();
    const session = start(store);
    session.hydrate();
    session.update({ notes: "Submitted" });
    store.data.set(LEGACY_DRAFT_KEYS[0], '{"notes":"stale"}');
    store.failRemove = true;
    assert.equal(session.complete(true, { ok: true }), true);
    assert.equal(session.notice, "clear-failed");
    assert.equal(start(store).hydrate().notes, ""); // tombstone wins over stale legacy
    const blocked = start(store);
    blocked.hydrate();
    store.failWrite = true;
    assert.equal(blocked.complete(true, { ok: true }), true);
    assert.equal(blocked.notice, "clear-failed");
  });

  it("includes every selected label plus notes in the actual composed payload once", () => {
    const draft = { ...newEngagementDraft(), outcomeIds: PUBLIC_CATALOG_ITEMS.map((item) => item.id), notes: "Block detail", contactMessage: "Contact detail" };
    const { message, error } = composeEngagementMessage(draft);
    assert.equal(error, null);
    for (const item of PUBLIC_CATALOG_ITEMS) assert.equal(message.split(item.name).length - 1, 1);
    assert.ok(message.includes("Block detail"));
    assert.ok(message.includes("Contact detail"));
    assert.equal(ContactSchema.shape.message.safeParse(message).success, true);
  });

  it("enforces the server's message limit without truncating user content", () => {
    const draft = newEngagementDraft();
    draft.contactMessage = "x".repeat(4000);
    assert.equal(composeEngagementMessage(draft).error, null);
    draft.contactMessage += "x";
    assert.ok(composeEngagementMessage(draft).error);
    assert.equal(composeEngagementMessage(draft).message.length, 4001);
    draft.contactMessage = "x".repeat(3900);
    draft.outcomeIds = PUBLIC_CATALOG_ITEMS.map((item) => item.id);
    draft.notes = "User content is never cut.";
    assert.ok(composeEngagementMessage(draft).error);
    assert.ok(composeEngagementMessage(draft).message.includes(draft.notes));
  });
});
