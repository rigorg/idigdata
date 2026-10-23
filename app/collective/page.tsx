import type { Metadata } from "next";
import CollectiveView from "@/components/collective/CollectiveView";

export const metadata: Metadata = {
  title: "The Collective · What We Learn Should Carry Forward | Robert Paddock",
  description:
    "People and Binary Intelligence, learning through the work and leaving something useful for the next person. How patterns travel by choice while each company keeps control, and the three systems behind the work: B.O.S.S., FlowCraft, and The Rig.",
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
    title: "The Collective · What We Learn Should Carry Forward | Robert Paddock",
    description:
      "People and Binary Intelligence, learning through the work and leaving something useful for the next person. How patterns travel by choice while each company keeps control, and the three systems behind the work: B.O.S.S., FlowCraft, and The Rig.",
  },
};

export default function CollectivePage() {
  return <CollectiveView />;
}
