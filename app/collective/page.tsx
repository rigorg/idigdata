import type { Metadata } from "next";
import CollectiveView from "@/components/collective/CollectiveView";

export const metadata: Metadata = {
  title: "The Collective · What We Learn Should Carry Forward | Robert Paddock",
  description:
    "People and agents, learning through the work—and leaving something useful for the next person. How lessons travel by choice while each company keeps control, and the workshop behind the idea: The Rig, B.O.S.S., and FlowCraft.",
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
      "People and agents, learning through the work—and leaving something useful for the next person. How lessons travel by choice while each company keeps control, and the workshop behind the idea: The Rig, B.O.S.S., and FlowCraft.",
  },
};

export default function CollectivePage() {
  return <CollectiveView />;
}
