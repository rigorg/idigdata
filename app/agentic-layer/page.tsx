import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import AgenticLayerView from "@/components/agentic/AgenticLayerView";

export const metadata: Metadata = {
  title: { absolute: "Agentic layer | idigdata" },
  description:
    "Outcome is the point. Agentics rides the application layer. I own the path. A crew lands it.",
  alternates: { canonical: "/agentic-layer/" },
};

export default function AgenticLayerPage() {
  return (
    <PresenceShell>
      <AgenticLayerView />
    </PresenceShell>
  );
}
