import type { Metadata } from "next";
import AgenticPositionView from "@/components/agentic/AgenticPositionView";

export const metadata: Metadata = {
  title: "Learn through the work · Dispatches from the Operational Seam | Robert Paddock",
  description:
    "Where 20+ years of enterprise systems arc meets over three years inside the agentic runtime. Observations, mental models, and operating notes from Robert Paddock.",
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
      "Where 20+ years of enterprise systems arc meets over three years inside the agentic runtime. Observations, mental models, and operating notes from Robert Paddock.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "Learn through the work · Dispatches from the Operational Seam by Robert Paddock" }],
  },
};

export default function AgenticAiPage() {
  return <AgenticPositionView />;
}
