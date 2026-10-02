import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "The Block · Scoping & Outcome Configurator | idigdata",
  },
  description:
    "Explore outcomes across leadership, business systems, data, financial integrity, and workflows. Choose what matters to your business to shape a starting point for our conversation.",
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
