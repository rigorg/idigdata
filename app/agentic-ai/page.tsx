import type { Metadata } from "next";
import AgenticPositionView from "@/components/agentic/AgenticPositionView";

export const metadata: Metadata = {
  title: "Agentic AI: A personal weblog | Robert Paddock",
  description:
    "Observations and questions from the intersection of enterprise work and agentic AI. Where I build, question, and write.",
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
    title: "Agentic AI: A personal weblog | Robert Paddock",
    description:
      "Observations and questions from the intersection of enterprise work and agentic AI. Where I build, question, and write.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "Agentic AI, a personal weblog by Robert Paddock" }],
  },
};

export default function AgenticAiPage() {
  return <AgenticPositionView />;
}

