import type { Metadata } from "next";
import CollectiveView from "@/components/collective/CollectiveView";

export const metadata: Metadata = {
  title: "The Collective · Agentic Development Company, Enterprise Assets & Shared Patterns | Robert Paddock",
  description:
    "How The Rig (Agentic Development Company) builds B.O.S.S. (Enterprise Foundation Asset) and FlowCraft (Human-Agentic Runtime System & Workflow Blocks) on a shared Data Spine, paired with an open pattern commons.",
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
    title: "The Collective · Agentic Development Company, Enterprise Assets & Shared Patterns | Robert Paddock",
    description:
      "How The Rig (Agentic Development Company) builds B.O.S.S. (Enterprise Foundation Asset) and FlowCraft (Human-Agentic Runtime System & Workflow Blocks) on a shared Data Spine.",
  },
};

export default function CollectivePage() {
  return <CollectiveView />;
}
