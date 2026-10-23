import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ContactSchema,
  isLikelyBotSpam,
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
    if (parsed.success) {
      assert.equal(isLikelyBotSpam(parsed.data), false);
    }
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
    for (const source of ["website-contact", "website-reader", "website-block", "website-block-custom", "website-collective", "website-agentic"]) {
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

  it("identifies automated form-stuffing bot spam without false positives on real inquiries", () => {
    // Dot-stuffed Gmail + gibberish note
    assert.equal(
      isLikelyBotSpam({
        name: "Mxoh Mkmix",
        email: "eq.a.no.k.a.k.a0.67@gmail.com",
        company: "Yutyfwrqzc LLC",
        role: "",
        message: "[THE BLOCK SCOPING PROPOSAL]\n\nMine: the_block\n\nNo outcomes pre-selected from catalog (direct inquiry).\n\nClient Note / Situation:\ngrJxQYBUStIMpuBtXfcDC",
      }),
      true,
    );

    // Pure numeric ("funky numbers") message inside template wrapper
    assert.equal(
      isLikelyBotSpam({
        name: "John Smith",
        email: "john.smith@example.com",
        company: "Acme Corp",
        role: "VP",
        message: "[THE COLLECTIVE // INQUIRY]\nTopic: Peer Collaboration & Shared Patterns\n\n3893655059",
      }),
      true,
    );

    // Legitimate executive inquiry passes cleanly
    assert.equal(
      isLikelyBotSpam({
        name: "Robert Paddock",
        email: "first.last@gmail.com",
        company: "Sierra Nevada",
        role: "CIO",
        message: "[THE COLLECTIVE // INQUIRY]\nTopic: Compare Notes & Shared Patterns\n\nLooking to compare notes on ERP cutover and workflow governance.",
      }),
      false,
    );
  });
});
