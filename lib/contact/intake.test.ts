import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { contactIntakeRow, recordContactIntake } from "./intake";
import { ContactSchema } from "./schema";

const payload = ContactSchema.parse({ name: "Test Operator", email: "test@example.com", message: "Reviewed priorities", interestType: "not_sure" });
const row = () => contactIntakeRow(payload, new Headers({ referer: "https://idigdata.com/contact/", "user-agent": "test" }));

describe("contact intake persistence and notification", () => {
  it("inserts only verified database columns, without invented status or database-owned fields", () => {
    assert.deepEqual(Object.keys(row()).sort(), ["name", "email", "role", "company", "message", "source", "source_url", "user_agent", "anon_session_id"].sort());
    assert.equal(row().source_url, "https://idigdata.com/contact/");
    assert.equal(row().source, "website-not_sure");
    assert.equal(row().role, "(not supplied)");
  });

  it("rides a whitelisted form source in the source column, else falls back to website-<interestType>", () => {
    const headers = new Headers({ referer: "https://idigdata.com/block/custom/" });
    for (const source of ["website-contact", "website-reader", "website-block", "website-block-custom"] as const) {
      assert.equal(contactIntakeRow(ContactSchema.parse({ ...payload, source }), headers).source, source);
    }
    assert.equal(contactIntakeRow(ContactSchema.parse({ ...payload, interestType: "applied_agentics" }), headers).source, "website-applied_agentics");
    assert.equal(row().company, null);
    assert.equal(row().message, payload.message);
  });

  it("waits for an accepted CRM insert before invoking notification", async () => {
    const events: string[] = [];
    let accept!: () => void;
    const accepted = new Promise<void>((resolve) => { accept = resolve; });
    const result = recordContactIntake(row(), async (inserted) => {
      assert.deepEqual(inserted, row());
      events.push("insert started");
      await accepted;
      events.push("insert accepted");
      return { ok: true, id: "test-id" };
    }, async () => { events.push("notify"); return true; });
    assert.deepEqual(events, ["insert started"]);
    accept();
    assert.deepEqual(await result, { ok: true, lead_id: "test-id", notification: "sent" });
    assert.deepEqual(events, ["insert started", "insert accepted", "notify"]);
  });

  it("never notifies when CRM refuses or throws", async () => {
    for (const error of ["not_configured", "insert_failed"] as const) {
      let notifications = 0;
      const result = await recordContactIntake(row(), async () => ({ ok: false, error }), async () => { notifications++; return true; });
      assert.deepEqual(result, { ok: false, error: "crm_failed" });
      assert.equal(notifications, 0);
    }
    const result = await recordContactIntake(row(), async () => { throw new Error("network"); }, async () => { assert.fail("must not notify"); });
    assert.deepEqual(result, { ok: false, error: "crm_failed" });
  });

  it("retains acceptance when notification is unconfigured, refused or throws", async () => {
    const insert = async () => ({ ok: true as const, id: null });
    assert.deepEqual(await recordContactIntake(row(), insert, null), { ok: true, lead_id: null, notification: "not_configured" });
    assert.deepEqual(await recordContactIntake(row(), insert, async () => false), { ok: true, lead_id: null, notification: "failed" });
    assert.deepEqual(await recordContactIntake(row(), insert, async () => { throw new Error("mail failure"); }), { ok: true, lead_id: null, notification: "failed" });
  });
});

describe("contact existing-cookie attribution", () => {
  const cookie = () => Buffer.from(JSON.stringify({ utm_source: "linkedin", utm_medium: "social", utm_campaign: "executive", landing_path: "/some-old-landing/", captured_at: "2026-09-30" })).toString("base64url");
  const door = "6202e1e7-d4d4-4e57-b935-485a790f71da";
  const browser = "0123456789abcdef0123456789abcdef";
  it("joins the existing pageview UUID and retains actual Contact path with known campaign", () => {
    const result = contactIntakeRow({ ...payload, anon_session_id: browser }, new Headers({ referer: "https://idigdata.com/contact/?intent=scoping_review&email=private#draft" }), { doorSessionId: door, attributionCookie: cookie() });
    assert.equal(result.anon_session_id, door);
    assert.equal(result.source_url, "https://idigdata.com/contact/?utm_source=linkedin&utm_medium=social&utm_campaign=executive");
    assert.equal(result.source, "website-not_sure");
    assert.ok(!result.source_url?.includes("some-old-landing"));
    assert.ok(!result.source_url?.includes("private"));
  });
  it("lets explicit URL campaign parameters win while filling only missing values", () => {
    const result = contactIntakeRow(payload, new Headers({ referer: "https://idigdata.com/contact/?utm_source=direct-test&utm_campaign=&other=drop" }), { attributionCookie: cookie() });
    const url = new URL(result.source_url!);
    assert.equal(url.searchParams.get("utm_source"), "direct-test");
    assert.equal(url.searchParams.get("utm_medium"), "social");
    assert.equal(url.searchParams.has("utm_campaign"), false);
    assert.equal(url.searchParams.has("other"), false);
  });
  it("rejects malformed cookie IDs and falls back only to a valid browser session", () => {
    assert.equal(contactIntakeRow({ ...payload, anon_session_id: browser }, new Headers(), { doorSessionId: "bad-cookie" }).anon_session_id, browser);
    assert.equal(contactIntakeRow({ ...payload, anon_session_id: "someone@example.com" }, new Headers(), { doorSessionId: "bad-cookie" }).anon_session_id, null);
    assert.equal(contactIntakeRow({ ...payload, anon_session_id: door }, new Headers()).anon_session_id, door);
  });
  it("safely handles malformed attribution, non-http sources, credentials and length limits", () => {
    assert.equal(contactIntakeRow(payload, new Headers({ referer: "https://idigdata.com/contact/?private=drop" }), { attributionCookie: "not-json" }).source_url, "https://idigdata.com/contact/");
    for (const source of ["javascript:alert(1)", "file:///private", "not a URL", "https://user:pass@idigdata.com/contact/", "https://idigdata.com/" + "x".repeat(8200)]) {
      assert.equal(contactIntakeRow(payload, new Headers({ referer: source })).source_url, null);
    }
    const result = contactIntakeRow(payload, new Headers({ referer: "https://idigdata.com/contact/?utm_source=" + "x".repeat(513) }), { attributionCookie: cookie() });
    assert.ok(!new URL(result.source_url!).searchParams.has("utm_source"));
    assert.ok(result.source_url!.length <= 2048);
  });
});
