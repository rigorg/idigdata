import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ContactSchema,
  sanitizeHeaderField,
} from "./schema";

describe("contact schema", () => {
  it("accepts a normal reach-out payload", () => {
    const parsed = ContactSchema.safeParse({
      name: "Alex Operator",
      email: "alex@example.com",
      interestType: "applied_agentics",
      message: "Need a living asset review.",
    });
    assert.equal(parsed.success, true);
  });

  it("rejects article_request ghost interest", () => {
    const parsed = ContactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      interestType: "article_request",
    });
    assert.equal(parsed.success, false);
  });

  it("accepts each whitelisted website source", () => {
    for (const source of ["website-contact", "website-reader", "website-block", "website-block-custom"]) {
      const parsed = ContactSchema.safeParse({ name: "Alex", email: "alex@example.com", source });
      assert.equal(parsed.success, true, source);
      assert.equal(parsed.success && parsed.data.source, source);
    }
  });

  it("leaves source undefined when the form sends none", () => {
    const parsed = ContactSchema.safeParse({ name: "Alex", email: "alex@example.com" });
    assert.equal(parsed.success, true);
    assert.equal(parsed.success && parsed.data.source, undefined);
  });

  it("rejects an unknown source", () => {
    for (const source of ["website-unknown", "linkedin", "", 42]) {
      const parsed = ContactSchema.safeParse({ name: "Alex", email: "alex@example.com", source });
      assert.equal(parsed.success, false, String(source));
    }
  });

  it("strips CR/LF from header fields", () => {
    assert.equal(sanitizeHeaderField("evil\r\nBcc: x@y.z"), "evil Bcc: x@y.z");
  });
});
