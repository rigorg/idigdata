"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
} from "@/lib/catalog";
import { ENGAGEMENT_CONTACT_URL, useEngagementDraft } from "@/lib/engagement-draft";

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

  const { draft, notice, update } = useEngagementDraft();
  const selectedOutcomeIds = draft?.outcomeIds ?? [];
  const customNotes = draft?.notes ?? "";
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [filterMode, setFilterMode] = useState<"all" | "finite" | "ongoing">("all");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeDomainId) return;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setActiveDomainId(null); }
      if (event.key !== "Tab" || !dialog) return;
      const targets = Array.from(dialog.querySelectorAll<HTMLElement>('button:not(:disabled), [tabindex="0"], textarea:not(:disabled)'));
      const first = targets[0];
      const last = targets[targets.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [activeDomainId]);

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
    update({ stage: "editing", outcomeIds: selectedOutcomeIds.includes(id)
      ? selectedOutcomeIds.filter((value) => value !== id) : [...selectedOutcomeIds, id] });
  };

  const handleHandoff = () => {
    if (update({ stage: "handoff" })) router.push(ENGAGEMENT_CONTACT_URL);
  };

  return (
    <div className="min-h-screen bg-[#060E18] text-[#FBF9F4] font-sans antialiased selection:bg-[#B48A05] selection:text-white">

      {/* TOP COMMAND HEADER */}
      <header className="sticky top-0 z-40 bg-[#060E18]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <TheBlockLogo size="md" variant="white" showWordmark={true} />
            </Link>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 border-l border-white/10 pl-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>EXPLORE OUTCOMES</span>
              <span className="text-white/20">&bull;</span>
              <span>{PUBLIC_OUTCOME_DOMAINS.length} AREAS</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {selectedOutcomeIds.length > 0 && (
              <div className="hidden sm:flex items-center gap-3 bg-[#0B1624] border border-[#B48A05]/40 px-3 py-1.5 rounded-full text-xs">
                <span className="font-mono text-[#B48A05] font-semibold">
                  {selectedOutcomeIds.length} OUTCOME{selectedOutcomeIds.length > 1 ? "S" : ""}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-white/70">
                  {Object.values(selectionByDomain).filter((c) => c > 0).length} AREA{Object.values(selectionByDomain).filter((c) => c > 0).length > 1 ? "S" : ""} SELECTED
                </span>
              </div>
            )}
            <button
              onClick={handleHandoff}
              disabled={!draft}
              className="shrink-0 bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-md transition-all shadow-lg shadow-[#B48A05]/10"
            >
              Start a conversation
            </button>
          </div>
        </div>
      </header>

      {notice !== "none" && (
        <p role="status" className="px-6 py-3 text-sm text-white bg-[#0B1624]">
          {notice === "invalid"
            ? "The saved draft could not be read. Start a new selection or add your notes below."
            : "This browser could not save your draft. Keep this page open and copy your notes before leaving. Contact handoff needs browser storage."}
        </p>
      )}

      {/* MARKETING HERO SECTION ("SLAP THEM BETWEEN THE EYES") */}
      <section className="relative pt-16 pb-12 px-6 border-b border-white/5 overflow-hidden">
        {/* Subtle background radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#B48A05]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-3 py-1 rounded-full mb-6">
            <span>THE BLOCK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            What do you want your business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF9F4] via-[#F3EFE6] to-[#B48A05]">
              to be able to do?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore outcomes across leadership, business systems, data and knowledge, financial systems, and workflows. Choose what matters to your business to shape a starting point for our conversation.
          </p>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            A Block brings together bounded time and capability around agreed scope and outcomes. Together, we establish the priorities, dependencies, and what successful delivery looks like.
          </p>

          {/* 3 High-Impact Tenet Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">01 &bull; AGREED OUTCOMES</div>
              <div className="text-xs text-white/70">
                Priorities, scope, dependencies, and success measures agreed with your team before delivery.
              </div>
            </div>
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">02 &bull; OWNERSHIP & CAPABILITY</div>
              <div className="text-xs text-white/70">
                The company keeps what we build—and the capability to run and improve it.
              </div>
            </div>
            <div className="bg-[#0B1624]/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-xs font-mono font-bold text-[#B48A05] mb-1">03 &bull; ACCOUNTABLE LEADERSHIP</div>
              <div className="text-xs text-white/70">
                Clear responsibility for the agreed work across systems, vendors, and your team.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 max-w-7xl mx-auto">
        <div className="bg-[#0B1624] border border-white/10 rounded-xl p-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Know what is getting in the way, but not what needs to change?
          </h2>
          <p className="text-sm text-white/70 leading-relaxed mb-3">
            You may know the outcome you want, or only the friction you feel.
            Start with either. A bounded diagnosis maps the causes and
            dependencies across people, process, data, and technology, sets
            priorities, and identifies the first testable change.
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Before delivery, we agree the acceptance criteria and verification
            approach. After the change, we verify the operational result
            against those criteria.
          </p>
        </div>
      </section>

      {/* THE 5 MAIN PRODUCTION BLOCKS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#B48A05] uppercase mb-1">
              Explore the outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Where do you want to make progress?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Choose an area to explore outcomes and select the priorities you want to discuss.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/40">
            <span>{PUBLIC_OUTCOME_DOMAINS.length} AREAS</span>
            <span>&bull;</span>
            <span>{PUBLIC_CATALOG_ITEMS.length} OUTCOMES TO EXPLORE</span>
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
                role="button"
                tabIndex={draft ? 0 : -1}
                aria-disabled={!draft}
                aria-haspopup="dialog"
                onKeyDown={(event) => {
                  if (draft && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault(); setActiveDomainId(domain.id);
                  }
                }}
                onClick={(event) => { if (draft) { event.currentTarget.focus(); setActiveDomainId(domain.id); } }}
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
                        AREA 0{index + 1}
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
                    <span>Explore outcomes</span>
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
                  SELECTED PRIORITIES
                </span>
                <span className="text-xs font-mono text-white/40">
                  STARTING POINT
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Your conversation starting point
              </h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                Your selected priorities appear here. Together, we will agree the scope and delivery approach, including any Blocks needed.
              </p>

              <div className="space-y-2 mb-6 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5 text-white/60">
                  <span>Selected Outcomes:</span>
                  <span className="text-white font-semibold">{selectedOutcomeIds.length} / {PUBLIC_CATALOG_ITEMS.length}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5 text-white/60">
                  <span>Areas selected:</span>
                  <span className="text-white font-semibold">
                    {Object.values(selectionByDomain).filter((c) => c > 0).length} / {PUBLIC_OUTCOME_DOMAINS.length}
                  </span>
                </div>
                <div className="flex justify-between py-1 text-white/60">
                  <span>Delivery cadence:</span>
                  <span className="text-[#B48A05] font-semibold uppercase">To agree</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="block-notes" className="block text-sm font-semibold text-white mb-2">
                Your situation or notes
              </label>
              <textarea id="block-notes" rows={4} maxLength={8000}
                value={customNotes} disabled={!draft}
                onChange={(event) => update({ notes: event.target.value, stage: "editing" })}
                aria-describedby="block-notes-help"
                className="w-full rounded-md border border-white/20 bg-[#060E18] p-3 text-sm text-white"
              />
              <p id="block-notes-help" className="mt-2 text-xs text-white/60">
                {notice === "unavailable" ? "Notes are kept on this page only. Copy them before leaving." : "You can start with notes alone. Saved in this browser tab for your Contact draft; nothing is sent until you submit it."}
              </p>
            </div>

            <button
              onClick={handleHandoff}
              disabled={!draft || (!selectedOutcomeIds.length && !customNotes.trim())}
              className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                (selectedOutcomeIds.length > 0 || customNotes.trim())
                  ? "bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] shadow-lg shadow-[#B48A05]/20 cursor-pointer"
                  : "bg-white/5 text-white/30 cursor-not-allowed border border-white/5"
              }`}
            >
              <span>Review Contact draft</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BLOCK OUTCOME SCREEN (DRAWER / OVERLAY) */}
      {activeDomain && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-end animate-fadeIn">
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="outcome-dialog-title" className="bg-[#0B1624] border-l border-white/10 w-full max-w-3xl h-[100dvh] min-h-0 flex flex-col justify-between overflow-hidden shadow-2xl animate-slideLeft">

            {/* SCREEN HEADER */}
            <div className="p-6 shrink-0 border-b border-white/10 bg-[#060E18]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                    AREA [{activeDomain.code}]
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

              <h2 id="outcome-dialog-title" className="text-2xl font-bold text-white mb-2">
                {activeDomain.name}
              </h2>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                {activeDomain.subtitle}
              </p>

              {/* Essence Banner */}
              <div className="text-xs font-mono text-white/90 bg-[#0B1624] border border-[#B48A05]/30 p-3 rounded-lg leading-relaxed">
                <span className="text-[#B48A05] font-bold">AREA FOCUS: </span>
                {activeDomain.essence}
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-white/5">
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
            <div className="p-6 flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-4">
              {activeItems.map((item) => {
                const isSelected = selectedOutcomeIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault(); toggleOutcome(item.id);
                      }
                    }}
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
                          Delivery and scope:
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
            <div className="p-4 shrink-0 border-t border-white/10 bg-[#060E18] flex flex-wrap gap-3 items-center justify-between">
              <div className="text-xs font-mono text-white/60">
                <span className="text-[#B48A05] font-bold">
                  {selectionByDomain[activeDomain.id] || 0}
                </span>{" "}
                of {PUBLIC_CATALOG_ITEMS.filter((i) => i.domainId === activeDomain.id).length} selected in this area
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveDomainId(null)}
                  className="px-4 py-2 rounded-md text-xs font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Return to areas
                </button>
                <button
                  onClick={handleHandoff}
                  className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] transition-colors shadow-md"
                >
                  Discuss priorities &rarr;
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
