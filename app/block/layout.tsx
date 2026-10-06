import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "The Block · Scoping & Outcome Configurator | idigdata",
  },
  description:
    "The Block is idigdata's productized capability configurator. Explore outcomes across leadership, business systems, data, financial integrity, workflows, and bespoke agentic engineering. Configure your scope and structure your delivery blocks.",
  alternates: { canonical: "/block/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/block/",
    title: "The Block · Scoping & Outcome Configurator | idigdata",
    description:
      "Explore outcomes across leadership, business systems, data, financial integrity, and workflows. Grounded in 50+ implementations and 15 enterprise transformations at scale.",
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
