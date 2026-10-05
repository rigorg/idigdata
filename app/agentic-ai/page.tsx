import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import AgenticLayerView from "@/components/agentic/AgenticLayerView";

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
  return (
    <PresenceShell>
      <AgenticLayerView />
    </PresenceShell>
  );
}
