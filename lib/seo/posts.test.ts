import assert from "node:assert/strict";
import path from "node:path";
import { describe, it } from "node:test";
import { parseFrontmatter, postPath, readPosts, slugify } from "./posts";

describe("frontmatter", () => {
  it("parses a simple block", () => {
    const fm = parseFrontmatter(
      '---\ntitle: "Quoted title"\ndate: 2026-10-05\nslug: custom-slug\ndescription: One line.\ntopic: agentic\n---\n\nBody\n',
    );
    assert.deepEqual(fm, {
      title: "Quoted title",
      date: "2026-10-05",
      slug: "custom-slug",
      description: "One line.",
      topic: "agentic",
    });
  });

  it("tolerates CRLF and a BOM", () => {
    const fm = parseFrontmatter("﻿---\r\ntitle: Hi\r\ndate: 2026-01-01\r\n---\r\n");
    assert.equal(fm?.title, "Hi");
  });

  it("returns null without a leading fence", () => {
    assert.equal(parseFrontmatter("# Heading\n"), null);
    assert.equal(parseFrontmatter("---\ntitle: open"), null);
  });
});

describe("posts", () => {
  it("slugifies file names", () => {
    assert.equal(slugify("My First Note.md"), "my-first-note");
    assert.equal(slugify("already-slug"), "already-slug");
  });

  it("maps to the weblog path", () => {
    assert.equal(postPath({ slug: "hello" }), "/agentic-ai/hello/");
  });

  it("returns an empty list when the content directory does not exist", () => {
    const missing = path.join(__dirname, "no-such-dir", "posts");
    assert.deepEqual(readPosts(missing), []);
  });
});
