import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import AgenticLayerView from "@/components/agentic/AgenticLayerView";

export const metadata: Metadata = {
  title: { absolute: "Agentic layer | idigdata" },
  description:
    "I make agents work inside the enterprise. Outcome is the point. Intent in, outcome out — watched, evaluated, landed, costed.",
  alternates: { canonical: "/agentic-layer/" },
};

export default function AgenticLayerPage() {
  return (
    <PresenceShell>
      <AgenticLayerView />
    </PresenceShell>
  );
}
