import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PresenceShell from "@/components/presence/PresenceShell";

export const metadata: Metadata = {
  title: { absolute: "Unified Operating Systemverse | idigdata" },
  description:
    "The Unified Operating Geometry: The Systems Verse × The Six Process Constellations × The Beehive as one coherent geometric shape.",
  alternates: { canonical: "/geometry/" },
};

export default function UnifiedGeometryPage() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_PREVIEW) {
    notFound();
  }

  return (
    <PresenceShell>
      <section className="p-section">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">Unified Operating Architecture</p>
              <h1 className="p-h1" style={{ maxWidth: "20ch" }}>
                The Unified Operating Systemverse
              </h1>
              <p className="p-dek">
                The Systems Verse, the Six Process Constellations, and the Beehive honeycomb unified into one single geometric shape.
              </p>
            </div>
            <div className="mandate-card">
              <p className="font-vollkorn text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#B48A05]">
                Candidate AV-05
              </p>
              <p className="mt-2 text-[14.5px] leading-[1.5]">
                One geometric frame: 6 categorical process flows × 16 functional systems × 1 company data core.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-[#142840]/15 bg-[#FBF9F4] p-4 shadow-sm md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/unified-geometry-candidate.svg"
              alt="The Unified Operating Systemverse: Systems Verse, Six Process Constellations, and Beehive as one geometric shape"
              className="mx-auto block h-auto w-full max-w-[54rem]"
            />
            <div className="mt-6 border-t border-[#142840]/10 pt-4 text-center">
              <p className="font-vollkorn text-[16px] italic text-[#475569]">
                Standard universal geometric frame · bespoke operator fill · customer-side transformation command
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-[#142840]/10 bg-[#F3ECE0]/50 p-6">
              <span className="font-vollkorn text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#B48A05]">
                Dimension 1 · Software
              </span>
              <h3 className="mt-2 font-vollkorn text-[20px] font-bold text-navy">
                The Systemverse
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                16 functional system groups on the outer orbit, bound to the core through the woven integration backbone fabric.
              </p>
            </div>

            <div className="rounded-lg border border-[#142840]/10 bg-[#F3ECE0]/50 p-6">
              <span className="font-vollkorn text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#B48A05]">
                Dimension 2 · Workflows
              </span>
              <h3 className="mt-2 font-vollkorn text-[20px] font-bold text-navy">
                The Six Constellations
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                6 categorical process pillars (P2P, O2C, P2M, S2S, D2R, MDM) at 60° radial vectors with BPSc weight bands.
              </p>
            </div>

            <div className="rounded-lg border border-[#142840]/10 bg-[#F3ECE0]/50 p-6">
              <span className="font-vollkorn text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#B48A05]">
                Dimension 3 · Matrix & People
              </span>
              <h3 className="mt-2 font-vollkorn text-[20px] font-bold text-navy">
                The Beehive
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                Hexagonal honeycomb matrix at the intersection of process flows and functional system groups, centered on MDM+CDM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
