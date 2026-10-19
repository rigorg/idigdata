import type { Metadata } from "next";
import CollectiveView from "@/components/collective/CollectiveView";

export const metadata: Metadata = {
  title: "The Collective · Shared Field Patterns, Builder Orgs & Living Workshop | Robert Paddock",
  description:
    "Where operators, domain experts, and agentic builders compare real enterprise patterns—and how our living workshop (The Rig, B.O.S.S., and FlowCraft) turns proven patterns into modular Agentic Workflow Runtime Blocks.",
  alternates: {
    canonical: "https://idigdata.com/collective/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/collective/",
    title: "The Collective · Shared Field Patterns, Builder Orgs & Living Workshop | Robert Paddock",
    description:
      "Where operators, domain experts, and agentic builders compare real enterprise patterns—and how our living workshop (The Rig, B.O.S.S., and FlowCraft) turns proven patterns into modular Agentic Workflow Runtime Blocks.",
  },
};

export default function CollectivePage() {
  return <CollectiveView />;
}
