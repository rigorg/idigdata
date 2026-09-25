import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import AgenticLayerView from "@/components/agentic/AgenticLayerView";

export const metadata: Metadata = {
  title: { absolute: "Agentic layer | idigdata" },
  description:
    "Applied agentics, in production, on company-owned data. A named person stays accountable.",
  alternates: { canonical: "/agentic-layer/" },
};

export default function AgenticLayerPage() {
  return (
    <PresenceShell>
      <AgenticLayerView />
    </PresenceShell>
  );
}
