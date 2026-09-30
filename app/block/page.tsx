"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
  CatalogDomain,
  CatalogItem
} from "@/lib/catalog";

// ============================================================================
// THE BLOCK · GAMIFIED OUTCOME CONFIGURATOR & MARKETING PORTAL
// Built under Capo executive directive:
// 1. Marketing Piece: Slap between the eyes with clean, high-impact content.
// 2. The 5 Core Blocks: Leadership, Enterprise ERP, Data, Financial, Governance.
// 3. Interactive Screen: Click any block to open its screen and pick outcomes.
// 4. Live Engagement Builder: Assembles "Your Block" with seamless contact handoff.
// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// ============================================================================

export default function TheBlockConfiguratorPage() {
  const router = useRouter();

  // State
  const [selectedOutcomeIds, setSelectedOutcomeIds] = useState<string[]>([]);
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [cadence, setCadence] = useState<"sprint" | "quarterly" | "continuous">("sprint");
  const [concurrency, setConcurrency] = useState<"sequential" | "parallel">("sequential");
  const [filterMode, setFilterMode] = useState<"all" | "finite" | "ongoing">("all");
  const [customNotes, setCustomNotes] = useState<string>("");

  // Restore from sessionStorage if exists
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("the_block_selection");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.outcomeIds && Array.isArray(parsed.outcomeIds)) {
          setSelectedOutcomeIds(parsed.outcomeIds);
        }
        if (parsed.cadence) setCadence(parsed.cadence);
        if (parsed.concurrency) setConcurrency(parsed.concurrency);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to sessionStorage whenever selection changes
  useEffect(() => {
    try {
      const payload = {
        outcomeIds: selectedOutcomeIds,
        cadence,
        concurrency,
        notes: customNotes,
        updatedAt: new Date().toISOString()
      };
      sessionStorage.setItem("the_block_selection", JSON.stringify(payload));
    } catch {
      // ignore
    }
  }, [selectedOutcomeIds, cadence, concurrency, customNotes]);

  // Active domain object
  const activeDomain = useMemo(() => {
    return PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === activeDomainId) || null;
  }, [activeDomainId]);

  // Items in active domain
  const activeItems = useMemo(() => {
    if (!activeDomainId) return [];
    let items = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomainId);
    if (filterMode !== "all") {
      items = items.filter((it) => it.kind === filterMode);
    }
    return items;
  }, [activeDomainId, filterMode]);

  // Selected items list
  const selectedItems = useMemo(() => {
    return PUBLIC_CATALOG_ITEMS.filter((it) => selectedOutcomeIds.includes(it.id));
  }, [selectedOutcomeIds]);

  // Count per domain
  const selectionByDomain = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const d of PUBLIC_OUTCOME_DOMAINS) {
      counts[d.id] = 0;
    }
    for (const it of selectedItems) {
      counts[it.domainId] = (counts[it.domainId] || 0) + 1;
    }
    return counts;
  }, [selectedItems]);

  const toggleOutcome = (id: string) => {
    setSelectedOutcomeIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleHandoff = () => {
    try {
      const payload = {
        outcomeIds: selectedOutcomeIds,
        itemNames: selectedItems.map((i) => i.name),
        cadence,
        concurrency,
        customNotes,
        timestamp: new Date().toISOString()
      };
      sessionStorage.setItem("the_block_handoff", JSON.stringify(payload));
    } catch {
      // ignore
    }
    router.push("/contact/");
  };

  return (
    <div className="min-h-screen bg-[#060E18] text-[#FBF9F4] font-sans antialiased selection:bg-[#B48A05] selection:text-white">

      {/* TOP COMMAND HEADER */}
      <header className="sticky top-0 z-40 bg-[#060E18]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <TheBlockLogo size="md" variant="white" showWordmark={true} />
            </Link>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 border-l border-white/10 pl-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>OPERATIONAL ARCHITECTURE</span>
              <span className="text-white/20">&bull;</span>
              <span>5 CORE DOMAINS</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {selectedOutcomeIds.length > 0 && (
              <div className="flex items-center gap-3 bg-[#0B1624] border border-[#B48A05]/40 px-3 py-1.5 rounded-full text-xs">
                <span className="font-mono text-[#B48A05] font-semibold">
                  {selectedOutcomeIds.length} OUTCOME{selectedOutcomeIds.length > 1 ? "S" : ""}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-white/70">
                  {Object.values(selectionByDomain).filter((c) => c > 0).length} BLOCK{Object.values(selectionByDomain).filter((c) => c > 0).length > 1 ? "S" : ""} ACTIVE
                </span>
              </div>
            )}
            <button
              onClick={handleHandoff}
              className="bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-md transition-all shadow-lg shadow-[#B48A05]/10"
            >
              Request Blueprint
            </button>
          </div>
        </div>
      </header>

      {/* MARKETING HERO SECTION ("SLAP THEM BETWEEN THE EYES") */}
      <section className="relative pt-16 pb-12 px-6 border-b border-white/5 overflow-hidden">
        {/* Subtle background radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#B48A05]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-3 py-1 rounded-full mb-6">
            <span>Executive Technology Leadership & Capability</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Turn the potential of your people and technology<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF9F4] via-[#F3EFE6] to-[#B48A05]">
              into business performance.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            I lead the work and build the capability—across your systems, data, and people. No open-ended advisory or speculative roadmaps. You configure agreed operational outcomes across our five core domains, delivered with company-owned assets and clear milestone acceptance.
          </p>

          {/* 3 High-Impact Tenet Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">01 &bull; AGREED OUTCOMES</div>
              <div className="text-xs text-white/70">
                Clearly scoped milestones, verifiable reconciliation, and operational acceptance defined upfront with your team.
              </div>
            </div>
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">02 &bull; CLIENT ASSET OWNERSHIP</div>
              <div className="text-xs text-white/70">
                Data models, cloud blueprints, and automation workflows transfer 100% to your internal team.
              </div>
            </div>
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">03 &bull; ACCOUNTABLE LEADERSHIP</div>
              <div className="text-xs text-white/70">
                Direct executive flight control across systems, vendors, and internal teams to deliver real operational performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 5 MAIN PRODUCTION BLOCKS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#B48A05] uppercase mb-1">
              Interactive Selection Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Select Your Operational Blocks
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Click any of the 5 core blocks below to open its outcome screen and assemble your program.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/40">
            <span>5 CORE BLOCKS</span>
            <span>&bull;</span>
            <span>21 VERIFIED OUTCOMES</span>
          </div>
        </div>

        {/* 5 BLOCKS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLIC_OUTCOME_DOMAINS.map((domain, index) => {
            const count = selectionByDomain[domain.id] || 0;
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
            const isSelected = count > 0;

            return (
              <div
                key={domain.id}
                onClick={() => setActiveDomainId(domain.id)}
                className={`group relative bg-[#0B1624] border rounded-xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px] ${
                  isSelected
                    ? "border-[#B48A05] shadow-lg shadow-[#B48A05]/10 ring-1 ring-[#B48A05]/30"
                    : "border-white/10 hover:border-white/30 hover:bg-[#0D1C2E]"
                }`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                        BLOCK 0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-white/40 font-semibold">
                        [{domain.code}]
                      </span>
                    </div>

                    {count > 0 ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {count} SELECTED
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-white/40">
                        {domainItems.length} OUTCOMES
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B48A05] transition-colors mb-2">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-white/60 mb-4 line-clamp-2 leading-relaxed">
                    {domain.subtitle}
                  </p>

                  {/* Essence Quote */}
                  <div className="text-xs font-mono text-white/80 bg-[#060E18] border-l-2 border-[#B48A05] p-3 rounded-r-md mb-6 leading-relaxed">
                    &ldquo;{domain.essence}&rdquo;
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {domainItems.map((it) => {
                      const isItemChecked = selectedOutcomeIds.includes(it.id);
                      return (
                        <div
                          key={it.id}
                          className={`w-2 h-2 rounded-sm transition-colors ${
                            isItemChecked
                              ? "bg-[#B48A05]"
                              : "bg-white/10 group-hover:bg-white/20"
                          }`}
                          title={it.name}
                        />
                      );
                    })}
                  </div>

                  <span className="text-xs font-semibold text-[#B48A05] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Configure Block</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* ASSEMBLED DOSSIER CARD (6TH TILE) */}
          <div className="bg-gradient-to-br from-[#0B1624] via-[#0D1C2E] to-[#0B1624] border border-[#B48A05]/30 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  ACTIVE DOSSIER
                </span>
                <span className="text-xs font-mono text-white/40">
                  PROGRAM BLUEPRINT
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Your Configured Engagement
              </h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                As you select outcomes across the 5 blocks, your bespoke operational program is assembled here in real time.
              </p>

              <div className="space-y-2 mb-6 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5 text-white/60">
                  <span>Selected Outcomes:</span>
                  <span className="text-white font-semibold">{selectedOutcomeIds.length} / 17</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5 text-white/60">
                  <span>Active Blocks:</span>
                  <span className="text-white font-semibold">
                    {Object.values(selectionByDomain).filter((c) => c > 0).length} / 5
                  </span>
                </div>
                <div className="flex justify-between py-1 text-white/60">
                  <span>Delivery Cadence:</span>
                  <span className="text-[#B48A05] font-semibold uppercase">{cadence}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleHandoff}
              disabled={selectedOutcomeIds.length === 0}
              className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                selectedOutcomeIds.length > 0
                  ? "bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] shadow-lg shadow-[#B48A05]/20 cursor-pointer"
                  : "bg-white/5 text-white/30 cursor-not-allowed border border-white/5"
              }`}
            >
              <span>Lock In Block & Request Blueprint</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BLOCK OUTCOME SCREEN (DRAWER / OVERLAY) */}
      {activeDomain && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-end animate-fadeIn">
          <div className="bg-[#0B1624] border-l border-white/10 w-full max-w-3xl h-full flex flex-col justify-between overflow-hidden shadow-2xl animate-slideLeft">

            {/* SCREEN HEADER */}
            <div className="p-6 border-b border-white/10 bg-[#060E18]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                    BLOCK [{activeDomain.code}]
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {activeItems.length} OUTCOMES AVAILABLE
                  </span>
                </div>

                <button
                  onClick={() => setActiveDomainId(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
                  aria-label="Close Screen"
                >
                  &times;
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                {activeDomain.name}
              </h2>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                {activeDomain.subtitle}
              </p>

              {/* Essence Banner */}
              <div className="text-xs font-mono text-white/90 bg-[#0B1624] border border-[#B48A05]/30 p-3 rounded-lg leading-relaxed">
                <span className="text-[#B48A05] font-bold">DELIVERY ESSENCE: </span>
                {activeDomain.essence}
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                <button
                  onClick={() => setFilterMode("all")}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    filterMode === "all"
                      ? "bg-[#B48A05] text-[#060E18] font-bold"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  ALL OUTCOMES
                </button>
                <button
                  onClick={() => setFilterMode("finite")}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    filterMode === "finite"
                      ? "bg-[#B48A05] text-[#060E18] font-bold"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  FINITE MILESTONES
                </button>
                <button
                  onClick={() => setFilterMode("ongoing")}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors ${
                    filterMode === "ongoing"
                      ? "bg-[#B48A05] text-[#060E18] font-bold"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  ONGOING STEWARDSHIP
                </button>
              </div>
            </div>

            {/* SCREEN BODY: OUTCOMES DECK */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {activeItems.map((item) => {
                const isSelected = selectedOutcomeIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleOutcome(item.id)}
                    className={`border rounded-xl p-5 cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#0D1E33] border-[#B48A05] shadow-lg shadow-[#B48A05]/10"
                        : "bg-[#060E18] border-white/10 hover:border-white/20 hover:bg-[#071322]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                            {item.tagline}
                          </span>
                          <span className="text-[10px] font-mono text-white/40 uppercase">
                            [{item.kind}]
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {item.name}
                        </h4>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#B48A05] text-[#060E18] font-bold text-sm"
                            : "border border-white/20 bg-white/5 text-transparent"
                        }`}
                      >
                        ✓
                      </div>
                    </div>

                    <div className="space-y-2 mt-3 text-xs leading-relaxed">
                      <div className="text-white/60">
                        <span className="text-white/40 font-mono uppercase font-semibold">Situation: </span>
                        {item.situation}
                      </div>
                      <div className="text-white/90">
                        <span className="text-emerald-400 font-mono uppercase font-semibold">Outcome: </span>
                        {item.outcome}
                      </div>
                    </div>

                    {/* Deliverables Pills */}
                    {item.deliverables && item.deliverables.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <div className="text-[10px] font-mono uppercase text-white/40 mb-1.5">
                          Tangible Artifacts:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.deliverables.map((deliv, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70"
                            >
                              &bull; {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SCREEN FOOTER */}
            <div className="p-4 border-t border-white/10 bg-[#060E18] flex items-center justify-between">
              <div className="text-xs font-mono text-white/60">
                <span className="text-[#B48A05] font-bold">
                  {selectionByDomain[activeDomain.id] || 0}
                </span>{" "}
                of {PUBLIC_CATALOG_ITEMS.filter((i) => i.domainId === activeDomain.id).length} selected in this block
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveDomainId(null)}
                  className="px-4 py-2 rounded-md text-xs font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Return to Blocks
                </button>
                <button
                  onClick={handleHandoff}
                  className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] transition-colors shadow-md"
                >
                  Review Dossier &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER CTA SECTION */}
      <footer className="py-16 px-6 border-t border-white/10 bg-[#040A12] text-center text-xs text-white/50">
        <div className="max-w-4xl mx-auto space-y-4">
          <TheBlockLogo size="sm" variant="gold" showWordmark={true} className="mx-auto mb-2" />
          <p className="max-w-xl mx-auto leading-relaxed">
            Data Integration Group &bull; Enterprise Technology Architecture &amp; Delivery &bull; idigdata.com
          </p>
        </div>
      </footer>

    </div>
  );
}
