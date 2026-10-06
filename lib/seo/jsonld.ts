/**
 * Per-route JSON-LD. Pure functions keyed on the pathname so a single
 * component in the root layout can emit the right schema for every page
 * without touching the page files.
 *
 * Claims here are the accepted public claims only. Keep it that way.
 */
import { SITE_ORIGIN, WEBLOG_PATH } from "./site";

export type JsonLdNode = Record<string, unknown> & { "@type": string };

export const ORGANIZATION_NAME = "Data Integration Group";
export const SITE_NAME = "idigdata";
export const PERSON_NAME = "Robert Paddock";

export const PERSON_DESCRIPTION =
  "Enterprise Technology Leader. 30 years, 50+ implementations, 15 enterprise transformations at scale. Founder of Data Integration Group (DIG LLC), the practice behind idigdata, founded 2016.";

const BLOCK_DISCIPLINES = [
  "Leadership, Direction & Transformation",
  "Business Systems & Integration",
  "IT Operations & Security",
  "Data & Knowledge",
  "Financial Systems",
  "Workflows & Automation",
];

/** Human labels for known top-level segments; others are title-cased. */
const SEGMENT_LABELS: Record<string, string> = {
  experience: "Experience",
  block: "The Block",
  contact: "Contact",
  faq: "FAQ",
  privacy: "Privacy",
  "agentic-ai": "Agentic AI",
};

export function labelForSegment(segment: string): string {
  if (segment in SEGMENT_LABELS) return SEGMENT_LABELS[segment];
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function normalizePathname(pathname: string | null | undefined): string {
  if (!pathname) return "/";
  let out = pathname.split(/[?#]/)[0] ?? "/";
  if (!out.startsWith("/")) out = `/${out}`;
  if (!out.endsWith("/")) out = `${out}/`;
  return out.replace(/\/{2,}/g, "/");
}

export function organizationRef(): Record<string, unknown> {
  return {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    alternateName: [SITE_NAME, "DIG LLC"],
    url: SITE_ORIGIN,
  };
}

export function personRef(): Record<string, unknown> {
  return {
    "@type": "Person",
    name: PERSON_NAME,
    jobTitle: "Enterprise Technology Leader",
    url: SITE_ORIGIN,
    sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  };
}

export function webSiteSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    publisher: organizationRef(),
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(pathname: string): JsonLdNode | null {
  const normalized = normalizePathname(pathname);
  if (normalized === "/") return null;
  const segments = normalized.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
    ...segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: labelForSegment(segment),
      item: `${SITE_ORIGIN}/${segments.slice(0, index + 1).join("/")}/`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function blockServiceSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "The Block",
    url: `${SITE_ORIGIN}/block/`,
    serviceType: "Enterprise transformation scoping and delivery blocks",
    description:
      "A scoping and outcome configurator. Configure outcomes across six transformation disciplines; one Block is two to four weeks.",
    provider: organizationRef(),
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transformation disciplines",
      itemListElement: BLOCK_DISCIPLINES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function weblogSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Agentic AI",
    url: `${SITE_ORIGIN}${WEBLOG_PATH}`,
    description: "Robert Paddock's public notebook on enterprise and agentic workflows",
    author: personRef(),
    publisher: organizationRef(),
    inLanguage: "en-US",
  };
}

/**
 * Everything the route layer should emit for `pathname`. Root gets nothing
 * (WebSite/Organization/Person live in the static JsonLd component).
 */
export function routeSchemas(pathname: string | null | undefined): JsonLdNode[] {
  const normalized = normalizePathname(pathname);
  const out: JsonLdNode[] = [];
  const crumbs = breadcrumbSchema(normalized);
  if (crumbs) out.push(crumbs);
  if (normalized === "/block/") out.push(blockServiceSchema());
  if (normalized === WEBLOG_PATH) out.push(weblogSchema());
  return out;
}

/** Serialize for a <script type="application/ld+json">; `<` is escaped so a value can never close the tag. */
export function serializeJsonLd(node: unknown): string {
  return JSON.stringify(node).replace(/</g, "\\u003c");
}
