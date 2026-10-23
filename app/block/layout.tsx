import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "The Block · Scoping & Outcome Configurator | idigdata",
  },
  description:
    "The Block is idigdata's productized capability configurator. Explore 60 outcomes across commercial leadership, transformation, enterprise systems, data, financial integrity, and agentic workflows. Configure your scope and request an engagement proposal.",
  alternates: { canonical: "/block/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/block/",
    title: "The Block · Scoping & Outcome Configurator | idigdata",
    description:
      "Explore 60 outcomes across leadership, business systems, data, financial integrity, and agentic workflows. Grounded in 20+ years of business leadership and over 50 enterprise transformations.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "The Block: a scoping and outcome configurator by idigdata" }],
  },
};

export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
