import type { Metadata } from "next";
import AgenticPositionView from "@/components/agentic/AgenticPositionView";

export const metadata: Metadata = {
  title: "Learn through the work · Dispatches from the Operational Seam | Robert Paddock",
  description:
    "Field notes on enterprise transformation, operating knowledge, and hands-on agentic software development by Robert Paddock.",
  alternates: {
    canonical: "https://idigdata.com/agentic-ai/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentic-ai/",
    title: "Learn through the work · Dispatches from the Operational Seam | Robert Paddock",
    description:
      "Field notes on enterprise transformation, operating knowledge, and hands-on agentic software development by Robert Paddock.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "Learn through the work · Dispatches from the Operational Seam by Robert Paddock" }],
  },
};

export default function AgenticAiPage() {
  return <AgenticPositionView />;
}
