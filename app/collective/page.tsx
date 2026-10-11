import type { Metadata } from "next";
import CollectiveView from "@/components/collective/CollectiveView";

export const metadata: Metadata = {
  title: "The Collective · Sovereign Enterprise Software & Shared Patterns | Robert Paddock",
  description:
    "Intent equals outcome delivered. Custom, sovereign operational software built on B.O.S.S., FlowCraft, and The Rig. Run in isolation on private iron; grow through the collective pattern library.",
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
    title: "The Collective · Sovereign Enterprise Software & Shared Patterns | Robert Paddock",
    description:
      "Intent equals outcome delivered. Custom, sovereign operational software built on B.O.S.S., FlowCraft, and The Rig. Run in isolation on private iron; grow through the collective pattern library.",
  },
};

export default function CollectivePage() {
  return <CollectiveView />;
}
