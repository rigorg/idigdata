import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "The Block · Scoping & Outcome Configurator | idigdata",
  },
  description:
    "The Block is idigdata's productized capability configurator. Explore outcomes across leadership, business systems, data, financial integrity, workflows, and bespoke agentic engineering. Configure your scope and calculate delivery flights.",
  alternates: { canonical: "/block/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/block/",
    title: "The Block · Scoping & Outcome Configurator | idigdata",
    description:
      "Explore outcomes across leadership, business systems, data, financial integrity, and workflows. Grounded in 50+ implementations and 15 enterprise transformations at scale.",
  },
};

export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
