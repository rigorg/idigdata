import { PERSON_DESCRIPTION, serializeJsonLd, webSiteSchema } from "@/lib/seo/jsonld";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: ["idigdata", "DIG LLC"],
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Robert Paddock takes responsibility for technology outcomes a company can own, operate, and improve. The business keeps running while the work moves.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
    jobTitle: "Enterprise Technology Leader",
    sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
  areaServed: "United States",
  sameAs: ["https://www.linkedin.com/in/robertpaddock"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Enterprise Technology Leader",
  description: PERSON_DESCRIPTION,
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    alternateName: "idigdata",
    url: "https://idigdata.com",
  },
  knowsAbout: [
    "Business transformation",
    "Transformational CIO leadership",
    "Legacy ERP modernization",
    "Enterprise resource planning (ERP)",
    "Warehouse management system (WMS)",
    "Manufacturing execution systems (MES)",
    "Product lifecycle management (PLM)",
    "Customer relationship management (CRM)",
    "Master data management (MDM)",
    "Common Data Model",
    "Systems integration",
    "Agentic AI in production",
    "AI governance and adoption",
    "Decision integrity for agentic AI",
    "Embedded transformation leadership",
    "Vendor-agnostic transformation",
    "Business-owned operating assets",
    "Discrete manufacturing",
    "Process manufacturing",
    "Architecture-engineering-construction (AEC)",
    "Beverage consumer packaged goods (CPG)",
    "Wellness and fitness operations",
    "Hospitality and gaming operations",
    "Fintech banking and POS integration",
  ],
  sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  url: "https://idigdata.com",
  email: "robert@idigdata.com",
};

const webSite = webSiteSchema();

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
      />
    </>
  );
}
