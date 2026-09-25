const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: ["idigdata", "DIG LLC"],
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Robert Paddock builds and develops teams around substantial technology mandates. Enterprise systems and applied AI become capabilities the company can own, operate, and improve. The business keeps running while the work moves. $100M-$1B enterprise operators.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
    jobTitle: "Transformational Chief Information Officer",
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
  jobTitle: "Transformational Chief Information Officer",
  description:
    "Technology executive. 30 years, 50+ implementations, 15 transformations at scale, four years applying agentics. Substantial mandates for $100M-$1B businesses. The business keeps running while the work moves.",
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

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
