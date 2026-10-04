import { notFound } from "next/navigation";
import PresenceShell from "@/components/presence/PresenceShell";
import AgenticLayerView from "@/components/agentic/AgenticLayerView";

export const metadata = {
  title: "Preview · Applied Agentics mock",
  robots: { index: false, follow: false },
};

export default function PreviewAgenticPage() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_PREVIEW) {
    notFound();
  }

  return (
    <PresenceShell>
      <AgenticLayerView mock />
    </PresenceShell>
  );
}
