import type { Metadata } from "next";
import AgenticPositionView from "@/components/agentic/AgenticPositionView";

export const metadata: Metadata = {
  title: "Agentic AI in the enterprise | idigdata",
  description:
    "Applied agentics in production, on company-owned data. Governance, security, and observability built in from the start.",
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

