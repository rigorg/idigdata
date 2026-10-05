import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildRssXml, escapeXml, FEED_TITLE } from "./rss";
import type { Post } from "./posts";

/** Cheap well-formedness check: every opened tag closes, in order. */
function assertBalanced(xml: string) {
  const stack: string[] = [];
  const tag = /<(\/?)([A-Za-z_:][\w:.-]*)[^>]*?(\/?)>/g;
  let match: RegExpExecArray | null;
  const body = xml.replace(/<\?xml[^>]*\?>/, "");
  while ((match = tag.exec(body)) !== null) {
    const [, closing, name, selfClosing] = match;
    if (selfClosing) continue;
    if (closing) {
      assert.equal(stack.pop(), name, `unexpected </${name}>`);
    } else {
      stack.push(name);
    }
  }
  assert.deepEqual(stack, [], "unclosed tags remain");
}

describe("rss", () => {
  it("escapes the five XML specials", () => {
    assert.equal(escapeXml(`a & b < c > "d" 'e'`), "a &amp; b &lt; c &gt; &quot;d&quot; &apos;e&apos;");
  });

  it("emits a valid, empty channel when there are no posts", () => {
    const xml = buildRssXml([], { now: new Date("2026-10-05T00:00:00Z") });
    assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
    assert.ok(xml.includes(`<title>${FEED_TITLE}</title>`));
    assert.ok(xml.includes("<link>https://idigdata.com/agentic-ai/</link>"));
    assert.ok(xml.includes('rel="self"'));
    assert.equal(xml.includes("<item>"), false);
    assertBalanced(xml);
  });

  it("emits one item per post with escaped text", () => {
    const posts: Post[] = [
      {
        slug: "tools-and-trust",
        title: "Tools & trust <in production>",
        date: new Date("2026-10-02T12:00:00Z"),
        description: "What \"trust\" means.",
        topic: "agentic",
        file: "/x/tools-and-trust.md",
      },
    ];
    const xml = buildRssXml(posts);
    assert.ok(xml.includes("<title>Tools &amp; trust &lt;in production&gt;</title>"));
    assert.ok(xml.includes('<guid isPermaLink="true">https://idigdata.com/agentic-ai/tools-and-trust/</guid>'));
    assert.ok(xml.includes("<pubDate>Fri, 02 Oct 2026 12:00:00 GMT</pubDate>"));
    assert.ok(xml.includes("<category>agentic</category>"));
    assertBalanced(xml);
  });
});
