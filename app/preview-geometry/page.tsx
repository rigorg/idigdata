import { notFound } from "next/navigation";

export const metadata = {
  title: "Master Operating Geometry Studio · idigdata",
  robots: { index: false, follow: false },
};

export default function PreviewGeometryPage() {
  // Strict guard: In production on Vercel, this route is inaccessible
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_PREVIEW) {
    notFound();
  }

  const EDITIONS = [
    {
      id: "v1",
      number: "Edition 1 · Primary Master Mark",
      title: "The Master Architectural Gold",
      description:
        "Pure 1:1 vector translation of the chosen plate. Warm ochre linework, double orbital tracks, 100% seamless honeycomb infill across all 6 sectors.",
      src: "/diagrams/unified-v1-architectural-gold.svg",
      tag: "Primary Master Mark",
      tagClass: "bg-[#A37E2C] text-[#FAF6EE]",
      cardClass: "border-2 border-[#A37E2C] bg-[#FAF6EE] shadow-xl",
      isDark: false,
    },
    {
      id: "v2",
      number: "Edition 2 · Brand Identity Triad",
      title: "The Brand Triad High-Contrast",
      description:
        "Rich Navy (#142840) and Sun-Gold (#FACC15) with Crimson (#C2410C) P2M criticality accent. High-contrast authority for digital headers and badges.",
      src: "/diagrams/unified-v2-brand-triad.svg",
      tag: "Brand Triad Edition",
      tagClass: "bg-[#142840] text-[#FACC15]",
      cardClass: "border border-navy/20 bg-white shadow-md",
      isDark: false,
    },
    {
      id: "v3",
      number: "Edition 3 · Technical Blueprint",
      title: "The Grayscale Drafting Blueprint",
      description:
        "Pure charcoal and stark white architectural drafting edition for patents, engineering diagrams, technical docs, and laser engraving.",
      src: "/diagrams/unified-v3-grayscale-blueprint.svg",
      tag: "Technical Blueprint",
      tagClass: "bg-[#1F2937] text-white",
      cardClass: "border border-navy/20 bg-white shadow-md",
      isDark: false,
    },
    {
      id: "v4",
      number: "Edition 4 · Complete Color Blowout",
      title: "The Full-Power Chromatic Apex",
      description:
        "Deep cosmic slate with vibrant rainbow orbital tracks, radiant multi-color process constellations (Sapphire, Gold, Crimson, Emerald, Violet), and glowing system halos.",
      src: "/diagrams/unified-v4-full-blowout.svg",
      tag: "Full Color Blowout",
      tagClass: "bg-gradient-to-r from-sky-500 via-orange-500 to-purple-600 text-white",
      cardClass: "border-2 border-sky-400 bg-[#0B132B] text-white shadow-2xl",
      isDark: true,
    },
  ];

  return (
    <div className="py-12 md:py-16 page-well">
      {/* Dev Environment Notice Banner */}
      <div className="mb-10 rounded-xl border border-[#A37E2C]/30 bg-[#A37E2C]/10 p-4 text-center">
        <p className="font-vollkorn text-sm font-bold uppercase tracking-wider text-[#A37E2C]">
          ⚡ Local Review Studio Active (:3100) · Excluded from Vercel Production
        </p>
        <p className="mt-1 text-xs text-navy/70">
          This review surface is dynamically available in development mode only. It will not appear on live Vercel deployments.
        </p>
      </div>

      <section className="mb-16 rounded-2xl border-2 border-[#142840] bg-[#FAF7F1] p-6 shadow-xl sm:p-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#142840]/10 pb-4">
          <div>
            <p className="font-vollkorn text-xs font-extrabold uppercase tracking-[0.2em] text-[#B48A05]">
              Candidate · Agentic layer
            </p>
            <h2 className="mt-2 font-vollkorn text-3xl font-black text-navy">
              Intent equals outcome
            </h2>
            <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-navy/75">
              Live on /agentic-layer/. Intent is the human. The agent
              launches in the window. Memory and data sit in the core.
            </p>
          </div>
          <span className="rounded-full bg-[#142840] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FACC15]">
            Live
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/diagrams/intent-to-outcome.svg?c=13"
          alt="Intent equals outcome: a human speaks or types, the estate in between, value lands"
          className="mx-auto block h-auto w-full max-w-[62rem]"
        />
        <div className="mt-6 flex items-center justify-between border-t border-[#142840]/10 pt-4 text-xs text-navy/70">
          <span>Pure vector SVG · cream substrate · charcoal · sun-gold path</span>
          <a
            href="/diagrams/intent-to-outcome.svg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-navy underline hover:opacity-80"
          >
            Open raw vector SVG
          </a>
        </div>
      </section>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="font-vollkorn text-xs font-extrabold uppercase tracking-[0.2em] text-[#A37E2C] mb-3">
          The Locked 3-Layer Operating Architecture
        </p>
        <h1 className="font-vollkorn text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-tight mb-4">
          The 4 Master Logo Editions
        </h1>
        <p className="text-lg text-navy/75 leading-relaxed font-body">
          100% seamless honeycomb infill across all 6 sectors, commanding double-ringed Constellation hubs, and 16 peripheral System bubbles with thin direct spokes into the center Data Core.
        </p>
      </div>

      {/* 2x2 Master Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {EDITIONS.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${item.cardClass}`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-current/10 pb-4 mb-4">
                <span className="font-vollkorn text-xs font-extrabold uppercase tracking-widest opacity-80">
                  {item.number}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${item.tagClass}`}
                >
                  {item.tag}
                </span>
              </div>
              <h2
                className={`font-vollkorn text-2xl font-bold mb-2 ${
                  item.isDark ? "text-white" : "text-navy"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`text-sm mb-6 ${
                  item.isDark ? "text-slate-300" : "text-navy/70"
                }`}
              >
                {item.description}
              </p>
            </div>

            <div className="my-auto py-4 flex items-center justify-center">
              <img
                src={item.src}
                alt={item.title}
                className="w-full max-w-[460px] h-auto object-contain mx-auto transition-transform hover:scale-[1.02]"
              />
            </div>

            <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs">
              <span className="opacity-70">Pure Vector SVG</span>
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:opacity-80"
              >
                Open Raw Vector SVG ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Specs Breakdown */}
      <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-navy/15 p-8 shadow-sm">
        <h3 className="font-vollkorn text-xl font-bold text-navy mb-4">
          The 3 Dimensional Layers in Pure Mathematical Balance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-navy/80">
          <div className="border-l-2 border-[#A37E2C] pl-4">
            <h4 className="font-bold text-navy mb-1">1. The Beehive (Workers)</h4>
            <p>Continuous hexagonal honeycomb matrix filling the 6 triangular sectors around the nucleus.</p>
          </div>
          <div className="border-l-2 border-navy pl-4">
            <h4 className="font-bold text-navy mb-1">2. Six Constellations</h4>
            <p>Large double-ringed hubs on the regular hexagon perimeter with 6 heavy spokes to the core.</p>
          </div>
          <div className="border-l-2 border-[#142840]/40 pl-4">
            <h4 className="font-bold text-navy mb-1">3. The Systemverse</h4>
            <p>Outer circle containing 16 smaller system bubbles with thin 1.2px spokes straight to the core.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
