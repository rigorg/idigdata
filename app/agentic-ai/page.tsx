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
};

export default function AgenticAiPage() {
  return <AgenticPositionView />;
}

