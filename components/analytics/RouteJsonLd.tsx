"use client";

import { usePathname } from "next/navigation";
import { routeSchemas, serializeJsonLd } from "@/lib/seo/jsonld";

/**
 * Per-route JSON-LD without touching page files: BreadcrumbList on every
 * non-root route, Service on /block/, Blog on /agentic-ai/. Renders on the
 * server too (client components are SSR'd), so crawlers see it in the HTML.
 */
export default function RouteJsonLd() {
  const pathname = usePathname();
  const schemas = routeSchemas(pathname);
  if (schemas.length === 0) return null;
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={`${pathname}:${schema["@type"]}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
