import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  blockServiceSchema,
  breadcrumbSchema,
  labelForSegment,
  normalizePathname,
  PERSON_DESCRIPTION,
  routeSchemas,
  serializeJsonLd,
  webSiteSchema,
  weblogSchema,
} from "./jsonld";

const FORBIDDEN = [
  "four years applying agentics in production",
  "three types of agentic systems in production",
  "digital workers",
  "Sierra Nevada",
];

function roundTrip(node: unknown) {
  const text = serializeJsonLd(node);
  const parsed = JSON.parse(text);
  assert.deepEqual(parsed, node);
  return text;
}

describe("jsonld builders", () => {
  it("normalizes pathnames", () => {
    assert.equal(normalizePathname(null), "/");
    assert.equal(normalizePathname("/block"), "/block/");
    assert.equal(normalizePathname("/faq/?x=1"), "/faq/");
  });

  it("labels known segments and title-cases the rest", () => {
    assert.equal(labelForSegment("block"), "The Block");
    assert.equal(labelForSegment("agentic-ai"), "Agentic AI");
    assert.equal(labelForSegment("some-new-page"), "Some New Page");
  });

  it("emits nothing for the root", () => {
    assert.deepEqual(routeSchemas("/"), []);
    assert.equal(breadcrumbSchema("/"), null);
  });

  it("emits a breadcrumb for every non-root route", () => {
    for (const pathname of ["/experience/", "/contact/", "/faq/", "/privacy/", "/agentic-ai/some-post/"]) {
      const schemas = routeSchemas(pathname);
      assert.equal(schemas[0]["@type"], "BreadcrumbList", pathname);
      roundTrip(schemas[0]);
    }
    const crumbs = breadcrumbSchema("/agentic-ai/some-post/");
    const items = (crumbs as { itemListElement: Array<{ name: string; item: string }> }).itemListElement;
    assert.deepEqual(
      items.map((i) => i.name),
      ["Home", "Agentic AI", "Some Post"],
    );
    assert.equal(items[1].item, "https://idigdata.com/agentic-ai/");
  });

  it("adds Service on /block/ only", () => {
    const types = routeSchemas("/block/").map((s) => s["@type"]);
    assert.deepEqual(types, ["BreadcrumbList", "Service"]);
    const service = blockServiceSchema();
    assert.equal(service.name, "The Block");
    assert.equal(service.serviceType, "Enterprise transformation scoping and delivery blocks");
    assert.equal((service.provider as { name: string }).name, "Data Integration Group");
    const text = roundTrip(service);
    assert.equal(/price|offers?":\s*\{[^}]*price/i.test(text), false, "no prices");
    assert.equal(routeSchemas("/experience/").some((s) => s["@type"] === "Service"), false);
  });

  it("adds Blog on /agentic-ai/ only, not on posts", () => {
    assert.deepEqual(
      routeSchemas("/agentic-ai/").map((s) => s["@type"]),
      ["BreadcrumbList", "Blog"],
    );
    assert.deepEqual(
      routeSchemas("/agentic-ai/a-post/").map((s) => s["@type"]),
      ["BreadcrumbList"],
    );
    const blog = weblogSchema();
    assert.equal(blog.name, "Agentic AI");
    assert.equal((blog.author as { "@type": string; name: string })["@type"], "Person");
    assert.equal((blog.author as { name: string }).name, "Robert Paddock");
    roundTrip(blog);
  });

  it("WebSite names idigdata and is published by the Organization", () => {
    const site = webSiteSchema();
    assert.equal(site.name, "idigdata");
    assert.equal((site.publisher as { "@type": string })["@type"], "Organization");
    roundTrip(site);
  });

  it("serializes safely for a script tag and states accepted claims only", () => {
    const text = serializeJsonLd({ "@type": "Thing", name: "</script><b>" });
    assert.equal(text.includes("</script>"), false);
    assert.deepEqual(JSON.parse(text), { "@type": "Thing", name: "</script><b>" });
    const everything = [
      PERSON_DESCRIPTION,
      serializeJsonLd(webSiteSchema()),
      serializeJsonLd(blockServiceSchema()),
      serializeJsonLd(weblogSchema()),
    ].join("\n");
    for (const phrase of FORBIDDEN) {
      assert.equal(everything.toLowerCase().includes(phrase.toLowerCase()), false, phrase);
    }
  });
});
