import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PresenceShell from "@/components/presence/PresenceShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "How this site is held",
  robots: { index: false, follow: false },
  alternates: { canonical: "/hold/" },
};

export default function HoldPage() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_PREVIEW) {
    notFound();
  }

  return (
    <PresenceShell>
      <header className="p-section">
        <div className="page-well">
          <p className="p-kicker">Hold</p>
          <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
            Local preview status.
          </h1>
        </div>
      </header>
    </PresenceShell>
  );
}
