"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PresenceShell from "@/components/presence/PresenceShell";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
} from "@/lib/catalog";
import { ENGAGEMENT_CONTACT_URL, useEngagementDraft } from "@/lib/engagement-draft";

// ============================================================================
// THE BLOCK · EXECUTIVE SCOPING & OUTCOME CONFIGURATOR
// Integrated under Capo executive directive:
// 1. Integrated Shell: Seamless presence within idigdata brand (PresenceShell).
// 2. The 5 Core Blocks: Leadership, IT Systems, Data, Financial, Workflows.
// 3. Strategic Scoping Lenses: Filter by transformation triggers and mandates.
// 4. Interactive Screen: Click any block to inspect and select outcomes.
// 5. Live Engagement Builder: Assembles priorities with contact handoff.
// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// ============================================================================

type StrategicLens = "all" | "leadership" | "erp" | "data" | "financial" | "workflows";

const STRATEGIC_LENSES: { id: StrategicLens; label: string; domainId?: string }[] = [
  { id: "all", label: "All Areas" },
  { id: "leadership", label: "Leadership & Mandate", domainId: "leadership_direction" },
  { id: "erp", label: "ERP & Systems", domainId: "it_business_systems" },
  { id: "data", label: "Data Core & MDM", domainId: "data_knowledge" },
  { id: "financial", label: "Financial Systems", domainId: "financial_systems" },
  { id: "workflows", label: "Workflows & AI", domainId: "workflows_automation" },
];

export default function TheBlockConfiguratorPage() {
  const router = useRouter();

  const { draft, notice, update } = useEngagementDraft();
  const selectedOutcomeIds = draft?.outcomeIds ?? [];
  const customNotes = draft?.notes ?? "";
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [selectedLens, setSelectedLens] = useState<StrategicLens>("all");
  const [filterMode, setFilterMode] = useState<"all" | "finite" | "ongoing">("all");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Keyboard accessibility and focus trap for the outcome drawer
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

  const activeAreasCount = useMemo(() => {
    return Object.values(selectionByDomain).filter((c) => c > 0).length;
  }, [selectionByDomain]);

  // Filtered domains based on selected lens
  const visibleDomains = useMemo(() => {
    if (selectedLens === "all") return PUBLIC_OUTCOME_DOMAINS;
    const lensObj = STRATEGIC_LENSES.find((l) => l.id === selectedLens);
    if (lensObj?.domainId) {
      return PUBLIC_OUTCOME_DOMAINS.filter((d) => d.id === lensObj.domainId);
    }
    return PUBLIC_OUTCOME_DOMAINS;
  }, [selectedLens]);

  const toggleOutcome = (id: string) => {
    update({
      stage: "editing",
      outcomeIds: selectedOutcomeIds.includes(id)
        ? selectedOutcomeIds.filter((value) => value !== id)
        : [...selectedOutcomeIds, id],
    });
  };

  const handleHandoff = () => {
    if (update({ stage: "handoff" })) router.push(ENGAGEMENT_CONTACT_URL);
  };

  return (
    <PresenceShell>
      {/* NOTICE BANNER */}
      {notice !== "none" && (
        <div role="status" className="bg-[#FAF7F1] border-b border-[#142840]/15 py-3 px-6 text-sm text-[#142840]">
          <div className="page-well">
            {notice === "invalid"
              ? "The saved draft could not be read. Start a new selection or add your notes below."
              : "This browser could not save your draft. Keep this page open and copy your notes before leaving. Contact handoff needs browser storage."}
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="p-section p-section--tight">
        <div className="page-well">
          <div className="hero-split">
            <div className="home-hero-copy">
              <div className="flex items-center gap-2 mb-3">
                <TheBlockLogo size="sm" variant="gold" showWordmark={true} />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                  Scoping &amp; Outcome Configurator
                </span>
              </div>
              <h1 className="p-h1" style={{ maxWidth: "18ch" }}>
                What do you want your business to be able to do?
              </h1>
              <p className="p-dek">
                Explore outcomes across leadership, business systems, company data, financial integrity, and workflows. Choose what matters to your business to shape a starting point for our conversation.
              </p>
              <p className="p-prose mt-4">
                A Block brings together bounded time and capability around agreed scope and outcomes. Grounded in 50+ implementations, 15 enterprise transformations, and executive operating experience, we establish the priorities, dependencies, and what successful delivery looks like.
              </p>
              <div className="home-hero-actions mt-6">
                <button
                  onClick={handleHandoff}
                  disabled={!draft}
                  className="p-btn cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <span className="p-gold-sq" />
                </button>
                <Link className="p-link" href="/experience/">
                  Explore my experience
                </Link>
              </div>
            </div>
            <div className="home-watermark" aria-hidden="true">
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>

          {/* 3 CORE TENET PLATES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="command-plate text-left">
              <div className="font-vollkorn text-[15px] font-bold text-[#142840] mb-1">
                01 &bull; Agreed Outcomes
              </div>
              <p className="text-[14px] leading-[1.55] text-[#243345] m-0">
                Priorities, scope, dependencies, and success measures agreed with your team before delivery.
              </p>
            </div>
            <div className="command-plate text-left">
              <div className="font-vollkorn text-[15px] font-bold text-[#142840] mb-1">
                02 &bull; Ownership &amp; Capability
              </div>
              <p className="text-[14px] leading-[1.55] text-[#243345] m-0">
                The company keeps what we build-and the capability, knowledge, and data core to run and improve it.
              </p>
            </div>
            <div className="command-plate text-left">
              <div className="font-vollkorn text-[15px] font-bold text-[#142840] mb-1">
                03 &bull; Accountable Leadership
              </div>
              <p className="text-[14px] leading-[1.55] text-[#243345] m-0">
                Clear responsibility for the agreed work across systems, vendors, and your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOUNDED DIAGNOSIS SECTION */}
      <section className="p-section">
        <div className="page-well">
          <div className="rounded-lg border border-[#142840]/15 bg-[#FAF7F1] p-6 max-w-4xl shadow-sm">
            <h2 className="font-vollkorn text-[22px] font-bold text-[#142840] mb-3">
              Know what is getting in the way, but not what needs to change?
            </h2>
            <p className="text-[15px] text-[#243345] leading-relaxed mb-3">
              You may know the outcome you want, or only the friction you feel. Start with either. A bounded diagnosis maps the causes and dependencies across people, process, data, and technology, sets priorities, and identifies the first testable change.
            </p>
            <p className="text-[15px] text-[#243345] leading-relaxed m-0">
              Before delivery, we agree the acceptance criteria and verification approach. After the change, we verify the operational result against those criteria.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKSPACE SECTION */}
      <section className="p-section" id="workspace">
        <div className="page-well">
          {/* Section Header & Strategic Lenses */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="p-kicker mb-1">Explore the outcomes</p>
              <h2 className="p-h2">Where do you want to make progress?</h2>
              <p className="text-[15px] text-[#5A6978] mt-1 max-w-2xl">
                Choose an area below to open its outcome deck, or filter by strategic focus. Your selections assemble into a conversation starting point.
              </p>
            </div>

            {/* Live Tally Badge */}
            <div className="flex items-center gap-3 bg-[#FAF7F1] border border-[#142840]/15 px-4 py-2 rounded-lg text-xs font-mono">
              <span className="font-bold text-[#B48A05]">
                {selectedOutcomeIds.length} OUTCOME{selectedOutcomeIds.length !== 1 ? "S" : ""}
              </span>
              <span className="text-[#142840]/30">&bull;</span>
              <span className="text-[#243345]">
                {activeAreasCount} OF {PUBLIC_OUTCOME_DOMAINS.length} AREAS SELECTED
              </span>
            </div>
          </div>

          {/* Strategic Lens Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#142840]/10">
            <span className="text-xs font-mono uppercase font-bold text-[#5A6978] mr-2">
              Focus Lens:
            </span>
            {STRATEGIC_LENSES.map((lens) => (
              <button
                key={lens.id}
                onClick={() => setSelectedLens(lens.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  selectedLens === lens.id
                    ? "bg-[#142840] text-white shadow-sm"
                    : "bg-[#FAF7F1] text-[#243345] hover:bg-[#F3EAE0] border border-[#142840]/10"
                }`}
              >
                {lens.label}
              </button>
            ))}
            {selectedLens !== "all" && (
              <button
                onClick={() => setSelectedLens("all")}
                className="text-xs font-mono text-[#B48A05] hover:underline ml-2 cursor-pointer"
              >
                Show All Areas
              </button>
            )}
          </div>

          {/* 5 BLOCKS CARDS + 6TH DOSSIER TILE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleDomains.map((domain) => {
              const count = selectionByDomain[domain.id] || 0;
              const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
              const isSelected = count > 0;
              const domainIndex = PUBLIC_OUTCOME_DOMAINS.findIndex((d) => d.id === domain.id);

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
                  onClick={(event) => {
                    if (draft) { event.currentTarget.focus(); setActiveDomainId(domain.id); }
                  }}
                  className={`group relative bg-white border rounded-xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px] shadow-sm ${
                    isSelected
                      ? "border-[#B48A05] border-t-4 ring-1 ring-[#B48A05]/20 shadow-md"
                      : "border-[#142840]/15 border-t-4 border-t-[#142840] hover:border-[#142840]/30 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top Bar of Card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#B48A05] bg-[#B48A05]/10 border border-[#B48A05]/30 px-2 py-0.5 rounded">
                          AREA 0{domainIndex + 1}
                        </span>
                        <span className="text-xs font-mono text-[#5A6978] font-semibold">
                          [{domain.code}]
                        </span>
                      </div>

                      {count > 0 ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#142840] bg-[#B48A05]/20 border border-[#B48A05]/40 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B48A05]"></span>
                          {count} SELECTED
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-[#5A6978]">
                          {domainItems.length} OUTCOMES
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-vollkorn text-[21px] font-bold text-[#142840] group-hover:text-[#B48A05] transition-colors mb-2 leading-snug">
                      {domain.name}
                    </h3>
                    <p className="text-[14px] text-[#5A6978] mb-4 line-clamp-2 leading-relaxed">
                      {domain.subtitle}
                    </p>

                    {/* Essence Quote */}
                    <div className="text-[13px] font-body text-[#243345] bg-[#FAF7F1] border-l-3 border-[#B48A05] p-3 rounded-r-md mb-6 leading-relaxed">
                      &ldquo;{domain.essence}&rdquo;
                    </div>
                  </div>

                  {/* Card Action Trigger */}
                  <div className="pt-4 border-t border-[#142840]/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {domainItems.map((it) => {
                        const isItemChecked = selectedOutcomeIds.includes(it.id);
                        return (
                          <div
                            key={it.id}
                            className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                              isItemChecked
                                ? "bg-[#B48A05]"
                                : "bg-[#142840]/15 group-hover:bg-[#142840]/25"
                            }`}
                            title={it.name}
                          />
                        );
                      })}
                    </div>

                    <span className="text-xs font-bold text-[#142840] group-hover:text-[#B48A05] group-hover:translate-x-1 transition-all flex items-center gap-1">
                      <span>Explore outcomes</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              );
            })}

            {/* ASSEMBLED DOSSIER CARD (6TH TILE) */}
            <div className="command-plate text-left flex flex-col justify-between mt-0 h-full border-[#B48A05]/40 shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#142840] bg-[#B48A05]/20 border border-[#B48A05]/40 px-2 py-0.5 rounded">
                    STARTING POINT
                  </span>
                  <span className="text-xs font-mono text-[#5A6978]">
                    YOUR DOSSIER
                  </span>
                </div>

                <h3 className="font-vollkorn text-[21px] font-bold text-[#142840] mb-2 leading-snug">
                  Your conversation starting point
                </h3>
                <p className="text-[13.5px] text-[#5A6978] mb-4 leading-relaxed">
                  Your selected priorities assemble here. Together, we will agree the scope, dependencies, and delivery approach.
                </p>

                <div className="space-y-2 mb-6 text-xs font-mono bg-white/70 border border-[#142840]/10 p-3 rounded-lg">
                  <div className="flex justify-between py-1 border-b border-[#142840]/10 text-[#5A6978]">
                    <span>Selected Outcomes:</span>
                    <span className="text-[#142840] font-bold">
                      {selectedOutcomeIds.length} / {PUBLIC_CATALOG_ITEMS.length}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#142840]/10 text-[#5A6978]">
                    <span>Areas represented:</span>
                    <span className="text-[#142840] font-bold">
                      {activeAreasCount} / {PUBLIC_OUTCOME_DOMAINS.length}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-[#5A6978]">
                    <span>Delivery cadence:</span>
                    <span className="text-[#B48A05] font-bold uppercase">To agree</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label htmlFor="block-notes" className="block font-vollkorn text-[14px] font-bold text-[#142840] mb-1.5">
                    Your situation or notes
                  </label>
                  <textarea
                    id="block-notes"
                    rows={4}
                    maxLength={8000}
                    value={customNotes}
                    disabled={!draft}
                    onChange={(event) => update({ notes: event.target.value, stage: "editing" })}
                    aria-describedby="block-notes-help"
                    placeholder="Describe your current operating friction, key systems, or target timeline..."
                    className="w-full rounded-md border border-[#142840]/20 bg-white p-3 text-sm text-[#142840] placeholder-[#5A6978]/60 focus:outline-none focus:border-[#142840] focus:ring-1 focus:ring-[#142840]"
                  />
                  <p id="block-notes-help" className="mt-1.5 text-xs text-[#5A6978]">
                    {notice === "unavailable"
                      ? "Notes are kept on this page only. Copy them before leaving."
                      : "Saved in this browser for your Contact draft; nothing is sent until you submit it."}
                  </p>
                </div>

                <button
                  onClick={handleHandoff}
                  disabled={!draft || (!selectedOutcomeIds.length && !customNotes.trim())}
                  className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    (selectedOutcomeIds.length > 0 || customNotes.trim())
                      ? "bg-[#142840] hover:bg-[#0B1624] text-[#F7F5EE] shadow-md hover:shadow-lg"
                      : "bg-[#142840]/10 text-[#5A6978] cursor-not-allowed border border-[#142840]/10"
                  }`}
                >
                  <span>Review Contact draft</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE OUTCOME SCREEN (DRAWER / OVERLAY) */}
      {activeDomain && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-end animate-fadeIn">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="outcome-dialog-title"
            className="bg-[#0B1624] border-l border-white/10 w-full max-w-3xl h-[100dvh] min-h-0 flex flex-col justify-between overflow-hidden shadow-2xl animate-slideLeft text-[#FBF9F4]"
          >
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
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors text-sm font-bold cursor-pointer"
                  aria-label="Close Screen"
                >
                  &times;
                </button>
              </div>

              <h2 id="outcome-dialog-title" className="font-vollkorn text-2xl font-bold text-white mb-2">
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
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors cursor-pointer ${
                    filterMode === "all"
                      ? "bg-[#B48A05] text-[#060E18] font-bold"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  ALL OUTCOMES
                </button>
                <button
                  onClick={() => setFilterMode("finite")}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors cursor-pointer ${
                    filterMode === "finite"
                      ? "bg-[#B48A05] text-[#060E18] font-bold"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  FINITE MILESTONES
                </button>
                <button
                  onClick={() => setFilterMode("ongoing")}
                  className={`text-xs font-mono px-3 py-1 rounded transition-colors cursor-pointer ${
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
                        <h4 className="font-vollkorn text-base font-bold text-white leading-snug">
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
                      <div className="text-white/70">
                        <span className="text-white/40 font-mono uppercase font-semibold">Situation: </span>
                        {item.situation}
                      </div>
                      <div className="text-white/95">
                        <span className="text-emerald-400 font-mono uppercase font-semibold">Outcome &amp; Verification: </span>
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
                  className="px-4 py-2 rounded-md text-xs font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Return to areas
                </button>
                <button
                  onClick={handleHandoff}
                  className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#B48A05] hover:bg-[#D4A310] text-[#060E18] transition-colors shadow-md cursor-pointer"
                >
                  Review Contact draft &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLOSING SECTION */}
      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">The full mandate, or a defined part.</h2>
          <p className="p-prose mt-4 mx-auto text-center" style={{ maxWidth: "60ch" }}>
            Engage me for an executive role, focused transformation work, or fractional leadership. The responsibilities, scope, and outcomes are agreed around what your business needs.
          </p>
          <div className="home-hero-actions justify-center mt-6">
            <Link className="p-btn" href="/contact/">
              <span>Start a conversation</span>
              <span className="p-gold-sq" />
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
