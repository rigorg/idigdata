"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
  type CatalogItem,
  type CatalogDomain,
} from "@/lib/catalog";
import {
  useEngagementDraft,
  ENGAGEMENT_CONTACT_URL,
  type EngagementDraft,
} from "@/lib/engagement-draft";

// Strictly: 0 dollars, 0 phone numbers, ASCII hyphens only.

interface DomainItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  essence: string;
  badge?: string;
}

const AGENTIC_DOMAIN: DomainItem = {
  id: "agentic_systems",
  code: "AS",
  name: "Agentic Systems & Bespoke Software",
  subtitle: "Boutique software engineering, autonomous operations, and production AI tools",
  essence: "We engineer production-grade applications, custom API bridges, and autonomous workflows directly into your company repositories.",
  badge: "BOUTIQUE DEV STUDIO",
};

const AGENTIC_IDEA_SEEDS = [
  "Autonomous Financial Reconciliation Agent",
  "Multi-System Ingestion & Event Mesh",
  "Legacy ERP / EDI Integration Bridge",
  "Governed Executive Knowledge Engine",
  "Real-Time Operational Exception Dispatcher",
  "Custom Inventory Allocation Pipeline",
];

export default function TheBlockPage() {
  const { draft, update } = useEngagementDraft();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [agenticNotes, setAgenticNotes] = useState<string>("");
  const [generalNotes, setGeneralNotes] = useState<string>("");
  
  // Modals
  const [activeModalDomainId, setActiveModalDomainId] = useState<string | null>(null);
  const [domainFilter, setDomainFilter] = useState<"all" | "finite" | "ongoing">("all");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);

  // Quote form state
  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteCompany, setQuoteCompany] = useState("");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [quoteErrorMsg, setQuoteErrorMsg] = useState("");

  // Hydrate draft from hook on mount
  useEffect(() => {
    if (!draft) return;
    if (draft.outcomeIds.length > 0) {
      setSelectedIds(new Set(draft.outcomeIds));
    }
    if (draft.notes) {
      const parts = draft.notes.split("\n\n");
      const agenticPart = parts.find((p: string) => p.startsWith("[Agentic Systems Mandate]:"));
      const generalPart = parts.find((p: string) => p.startsWith("[Operational Context]:"));
      if (agenticPart) {
        setAgenticNotes(agenticPart.replace("[Agentic Systems Mandate]:", "").trim());
      }
      if (generalPart) {
        setGeneralNotes(generalPart.replace("[Operational Context]:", "").trim());
      } else if (!agenticPart && draft.notes.trim()) {
        setGeneralNotes(draft.notes.trim());
      }
    }
  }, [draft]);

  // Sync back to session storage
  const syncDraft = (newSelected: Set<string>, newAgentic: string, newGeneral: string) => {
    const noteSegments: string[] = [];
    if (newAgentic.trim()) {
      noteSegments.push(`[Agentic Systems Mandate]: ${newAgentic.trim()}`);
    }
    if (newGeneral.trim()) {
      noteSegments.push(`[Operational Context]: ${newGeneral.trim()}`);
    }
    update({
      outcomeIds: Array.from(newSelected),
      notes: noteSegments.join("\n\n"),
    });
  };

  const toggleOutcome = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
    syncDraft(next, agenticNotes, generalNotes);
  };

  const handleAgenticNotesChange = (val: string) => {
    setAgenticNotes(val);
    syncDraft(selectedIds, val, generalNotes);
  };

  const handleGeneralNotesChange = (val: string) => {
    setGeneralNotes(val);
    syncDraft(selectedIds, agenticNotes, val);
  };

  const addSeedToAgentic = (seed: string) => {
    const next = agenticNotes.trim() ? `${agenticNotes.trim()}\n- ${seed}` : seed;
    handleAgenticNotesChange(next);
  };

  // Math calculation
  const catalogCount = selectedIds.size;
  const hasAgentic = agenticNotes.trim().length > 0;
  const totalItems = catalogCount + (hasAgentic ? 1 : 0);

  let calculatedBlocks = totalItems;
  let pacingTitle = "Select outcomes to calculate";
  let pacingDesc = "Choose priorities across the 6 blocks to calculate engagement flight duration.";
  let isOvercapacity = false;

  if (totalItems === 0) {
    pacingTitle = "0 Blocks (Awaiting Selections)";
    pacingDesc = "Explore the 6 enterprise blocks below to assemble your required outcomes.";
  } else if (totalItems === 1) {
    calculatedBlocks = 1;
    pacingTitle = "1 Standard Block · 2-4 Weeks";
    pacingDesc = "Surgical Sprint: Fixed boundary addressing a single high-priority operational friction point.";
  } else if (totalItems === 2) {
    calculatedBlocks = 2;
    pacingTitle = "2 Standard Blocks · 4-8 Weeks";
    pacingDesc = "Dual-Track Flight: Cohesive paired deliverables executed in rapid succession or parallel workstreams.";
  } else if (totalItems === 3) {
    calculatedBlocks = 3;
    pacingTitle = "3 Standard Blocks · 6-12 Weeks";
    pacingDesc = "Multi-Stream Program: Substantial operational transformation across systems, ledgers, and team handoffs.";
  } else if (totalItems === 4) {
    calculatedBlocks = 4;
    pacingTitle = "4 Standard Blocks · 12-16 Weeks";
    pacingDesc = "Maximum Modular Flight: Full quarterly capacity ceiling to ensure organizational absorption without thrash.";
  } else {
    isOvercapacity = true;
    calculatedBlocks = totalItems;
    pacingTitle = `${totalItems} Blocks · Full Mandate Advisory`;
    pacingDesc = "Broad transformation detected. Sizing indicates a dedicated Executive Appointment or phased flights rather than modular sprints.";
  }

  // Active domain for modal
  const allDomains: DomainItem[] = [...PUBLIC_OUTCOME_DOMAINS, AGENTIC_DOMAIN];
  const activeDomain = allDomains.find((d) => d.id === activeModalDomainId);

  // Submit quote handler
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName.trim() || !quoteEmail.trim()) {
      setQuoteErrorMsg("Please enter your name and work email.");
      return;
    }
    setQuoteStatus("submitting");
    setQuoteErrorMsg("");

    const selectedNames = Array.from(selectedIds).map((id) => {
      const item = PUBLIC_CATALOG_ITEMS.find((it) => it.id === id);
      return item ? item.name : id;
    });

    const lines: string[] = [
      `Quote Request from The Block Configurator`,
      `Name: ${quoteName.trim()}`,
      `Email: ${quoteEmail.trim()}`,
      quoteCompany.trim() ? `Company: ${quoteCompany.trim()}` : "",
      `Calculated Scope: ${calculatedBlocks} Block(s) (${pacingTitle})`,
      selectedNames.length > 0 ? `Selected Outcomes:\n${selectedNames.map((n) => `- ${n}`).join("\n")}` : "",
      agenticNotes.trim() ? `Agentic Systems Mandate:\n${agenticNotes.trim()}` : "",
      generalNotes.trim() ? `Operational Context:\n${generalNotes.trim()}` : "",
    ].filter(Boolean);

    const fullMessage = lines.join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteName.trim(),
          email: quoteEmail.trim(),
          company: quoteCompany.trim(),
          message: fullMessage,
          interestType: hasAgentic ? "applied_agentics" : "core_transformation",
        }),
      });

      if (res.ok) {
        setQuoteStatus("success");
      } else {
        setQuoteStatus("error");
        setQuoteErrorMsg("Unable to send your request directly. You can proceed to the Contact form below.");
      }
    } catch {
      setQuoteStatus("error");
      setQuoteErrorMsg("Network error. Please try again or open the Contact form directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#142840] selection:bg-[#B48A05]/20">
      {/* 1. HERO & POSITIONING HEADER */}
      <section className="pt-12 pb-10 border-b border-[#142840]/10 bg-gradient-to-b from-white to-[#FBF9F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#142840] text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                  <svg className="w-3 h-3 text-[#B48A05]" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="6" height="6" rx="1" />
                    <rect x="9" y="2" width="6" height="6" rx="1" />
                    <rect x="16" y="2" width="6" height="6" rx="1" />
                    <rect x="2" y="9" width="6" height="6" rx="1" />
                    <rect x="9" y="9" width="6" height="6" rx="1" className="text-amber-400" />
                    <rect x="16" y="9" width="6" height="6" rx="1" />
                    <rect x="2" y="16" width="6" height="6" rx="1" />
                    <rect x="9" y="16" width="6" height="6" rx="1" />
                    <rect x="16" y="16" width="6" height="6" rx="1" />
                  </svg>
                  TB · THE BLOCK
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5A6978]">
                  Operational Capability &amp; Scope Configurator
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#142840] leading-tight">
                What do you want your business to be able to do?
              </h1>
              <p className="font-serif italic text-base sm:text-lg text-[#334155] leading-relaxed">
                Explore outcomes across leadership, business systems, company data, financial integrity, workflows, and boutique agentic software. Choose what matters to shape a concrete quote.
              </p>
            </div>

            {/* Quick telemetry badge */}
            <div className="flex items-center gap-4 bg-white border border-[#142840]/15 rounded-lg p-3.5 shadow-xs">
              <div className="text-right">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#5A6978]">Active Selection</div>
                <div className="font-mono text-sm font-bold text-[#142840]">
                  {totalItems} {totalItems === 1 ? "Outcome" : "Outcomes"} · {calculatedBlocks} {calculatedBlocks === 1 ? "Block" : "Blocks"}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-4 py-2 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* 3 Core Architecture Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#142840]/10 text-xs">
            <div className="p-3.5 bg-white/70 rounded border border-[#142840]/10">
              <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">01 · Agreed Outcomes</span>
              <p className="text-[#334155] leading-normal">
                Priorities, scope, dependencies, and verification measures agreed before delivery begins.
              </p>
            </div>
            <div className="p-3.5 bg-white/70 rounded border border-[#142840]/10">
              <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">02 · Company-Owned Assets</span>
              <p className="text-[#334155] leading-normal">
                Code, data schemas, and agent runtimes deployed in your Git repositories. Zero vendor lock-in.
              </p>
            </div>
            <div className="p-3.5 bg-white/70 rounded border border-[#142840]/10">
              <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">03 · Accountable Leadership</span>
              <p className="text-[#334155] leading-normal">
                Grounded in 50+ implementations, 15 enterprise transformations, and boutique software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 BLOCKS PANORAMIC GRID */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B48A05] font-bold block mb-1">
              THE 6 OPERATIONAL DOMAINS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142840]">
              Select a block to configure outcomes
            </h2>
          </div>
          <p className="text-xs text-[#5A6978] font-mono">
            Click any block below to open its outcome selector. Click, click, done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDomains.map((domain, idx) => {
            const isAgentic = domain.id === "agentic_systems";
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
            const domainSelectedCount = isAgentic
              ? hasAgentic ? 1 : 0
              : domainItems.filter((it) => selectedIds.has(it.id)).length;
            const hasActive = domainSelectedCount > 0;

            return (
              <div
                key={domain.id}
                onClick={() => setActiveModalDomainId(domain.id)}
                className={`group relative bg-white rounded-xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-md hover:translate-y-[-2px] ${
                  hasActive
                    ? "border-[#B48A05] ring-2 ring-[#B48A05]/20 shadow-xs"
                    : isAgentic
                    ? "border-[#142840]/30 bg-gradient-to-b from-white to-[#F3ECE0]/30"
                    : "border-[#142840]/15"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840]/5 text-[#142840] group-hover:bg-[#142840] group-hover:text-white transition-colors">
                      BLOCK 0{idx + 1} [{domain.code}]
                    </span>
                    {hasActive ? (
                      <span className="font-mono text-[11px] font-bold text-[#B48A05] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {domainSelectedCount} Active
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-[#5A6978]">
                        {isAgentic ? "Custom / Ideas" : `${domainItems.length} Outcomes`}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#142840] mb-2 leading-snug">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-[#5A6978] leading-relaxed mb-4">
                    {domain.subtitle}
                  </p>

                  <div className="p-3 rounded bg-[#FBF9F4] border-l-2 border-[#B48A05] text-xs font-serif italic text-[#334155] leading-normal mb-5">
                    "{domain.essence}"
                  </div>
                </div>

                <div className="pt-3 border-t border-[#142840]/10 flex items-center justify-between">
                  <span className="font-serif text-xs font-bold text-[#142840] group-hover:text-[#B48A05] transition-colors flex items-center gap-1.5">
                    {isAgentic ? "Open Agentic Studio" : "Configure Block"}
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                  {domain.badge && (
                    <span className="text-[9px] font-mono uppercase font-bold text-[#B48A05] bg-[#B48A05]/10 px-2 py-0.5 rounded">
                      {domain.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LIVE BLOCK CALCULATOR & ENGAGEMENT DOSSIER */}
      <section className="py-12 bg-[#EDE8DF] border-y border-[#142840]/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-md p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              
              {/* Left Column: Visual Block Meter & Pacing */}
              <div className="space-y-6 max-w-xl w-full">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B48A05] font-bold block mb-1">
                    TB // CALCULATED ENGAGEMENT SCOPE
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#142840]">
                    {pacingTitle}
                  </h3>
                  <p className="text-xs text-[#5A6978] mt-1 leading-relaxed">
                    {pacingDesc}
                  </p>
                </div>

                {/* 4 Block Visual Meter */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#5A6978]">BLOCK FLIGHT METER</span>
                    <span className="font-bold text-[#142840]">
                      {totalItems} Selected · {calculatedBlocks} Calculated
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {[1, 2, 3, 4].map((slot) => {
                      const isFilled = calculatedBlocks >= slot;
                      return (
                        <div
                          key={slot}
                          className={`h-10 rounded-md flex items-center justify-center font-mono text-xs font-bold transition-all ${
                            isFilled
                              ? isOvercapacity
                                ? "bg-amber-600 text-white"
                                : "bg-[#142840] text-[#B48A05] shadow-xs"
                              : "border border-dashed border-[#142840]/20 bg-[#FBF9F4] text-[#5A6978]/60"
                          }`}
                        >
                          {isFilled ? `BLOCK 0${slot}` : `SLOT 0${slot}`}
                        </div>
                      );
                    })}
                  </div>
                  {isOvercapacity && (
                    <div className="p-3 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 mt-2">
                      <strong>Full Mandate Detected:</strong> Selecting more than 4 blocks indicates a broad organizational transformation. Robert Paddock will review your scope for a dedicated executive role or phased roadmap.
                    </div>
                  )}
                </div>

                {/* Selected Priorities Tag Cloud */}
                {totalItems > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                      Priorities In Active Scope:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(selectedIds).map((id) => {
                        const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                        if (!it) return null;
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FBF9F4] border border-[#142840]/15 text-[11px] font-medium text-[#142840]"
                          >
                            <span>{it.name}</span>
                            <button
                              type="button"
                              onClick={() => toggleOutcome(id)}
                              className="text-[#5A6978] hover:text-red-700 cursor-pointer"
                              title="Remove"
                            >
                              &times;
                            </button>
                          </span>
                        );
                      })}
                      {hasAgentic && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-[#B48A05]/30 text-[11px] font-medium text-[#142840]">
                          <span className="font-mono text-[#B48A05]">[AS]</span>
                          <span>Bespoke Agentic Mandate</span>
                          <button
                            type="button"
                            onClick={() => handleAgenticNotesChange("")}
                            className="text-[#5A6978] hover:text-red-700 cursor-pointer"
                            title="Remove"
                          >
                            &times;
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Direct Situation Box & Quote CTA */}
              <div className="w-full lg:max-w-md bg-[#FBF9F4] p-5 rounded-lg border border-[#142840]/15 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B48A05] font-bold block">
                    HUMAN-TO-HUMAN INTAKE
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#142840]">
                    Your situation and context
                  </h4>
                  <p className="text-xs text-[#5A6978] mt-0.5">
                    "Send this over to me. Fill this out as best and as accurately as you can to reflect your desired outcomes, and I'll get back to you right away with a quote."
                  </p>
                </div>

                <div>
                  <label htmlFor="general-situation" className="sr-only">
                    Operational Context
                  </label>
                  <textarea
                    id="general-situation"
                    rows={4}
                    value={generalNotes}
                    onChange={(e) => handleGeneralNotesChange(e.target.value)}
                    placeholder="e.g. ERP cutover delayed by off-track integrator, need independent scope reset and cutover flight control..."
                    className="w-full text-xs font-sans p-3 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] leading-relaxed"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full py-3 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request a Quote on this Scope</span>
                    <span>&rarr;</span>
                  </button>

                  <Link
                    href={ENGAGEMENT_CONTACT_URL}
                    className="block text-center text-xs font-mono text-[#5A6978] hover:text-[#142840] py-1 cursor-pointer transition-colors"
                  >
                    Prefer full contact form? Review in Contact &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. MODAL: CENTERING CONTEXT FOR BLOCKS 01-05 */}
      {activeDomain && activeDomain.id !== "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840] text-white">
                    BLOCK [{activeDomain.code}]
                  </span>
                  <span className="text-xs font-mono text-[#5A6978]">
                    {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id).length} Available Outcomes
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142840]">
                  {activeDomain.name}
                </h3>
                <p className="text-xs text-[#5A6978] mt-1">
                  {activeDomain.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="w-8 h-8 rounded-full border border-[#142840]/20 hover:bg-[#142840]/5 flex items-center justify-center text-[#142840] font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-6 py-2.5 bg-white border-b border-[#142840]/10 flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setDomainFilter("all")}
                className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "all" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                All Outcomes
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("finite")}
                className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "finite" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                Finite Milestones
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("ongoing")}
                className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "ongoing" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                Ongoing Stewardship
              </button>
            </div>

            {/* Outcomes List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id)
                .filter((it) => (domainFilter === "all" ? true : it.kind === domainFilter))
                .map((item) => {
                  const isChecked = selectedIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleOutcome(item.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#FBF9F4] border-[#B48A05] ring-1 ring-[#B48A05]"
                          : "bg-white border-[#142840]/15 hover:border-[#142840]/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] uppercase font-bold text-[#B48A05] tracking-wider">
                              {item.tagline}
                            </span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#142840]/5 text-[#5A6978]">
                              {item.kind === "finite" ? "Finite" : "Ongoing"}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#142840]">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#5A6978] leading-relaxed">
                            <strong className="text-[#142840]">Situation:</strong> {item.situation}
                          </p>
                          <p className="text-xs text-[#334155] leading-relaxed">
                            <strong className="text-[#142840]">Outcome:</strong> {item.outcome}
                          </p>
                          {item.deliverables && item.deliverables.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {item.deliverables.map((deliv, dIdx) => (
                                <span
                                  key={dIdx}
                                  className="text-[10px] font-mono bg-white border border-[#142840]/10 px-2 py-0.5 rounded text-[#5A6978]"
                                >
                                  &bull; {deliv}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Checkbox button */}
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                            isChecked
                              ? "bg-[#142840] text-[#B48A05]"
                              : "border border-[#142840]/30 bg-white"
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-[#142840]/10 bg-[#FBF9F4] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6978]">
                {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id && selectedIds.has(it.id)).length} selected in this block
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-6 py-2 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL: AGENTIC SYSTEMS & BESPOKE SOFTWARE (BLOCK 06) */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-6 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840] text-white">
                    BLOCK 06 [AS]
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#B48A05] bg-[#B48A05]/10 px-2 py-0.5 rounded">
                    BOUTIQUE DEV STUDIO
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142840]">
                  Agentic Systems &amp; Bespoke Software
                </h3>
                <p className="text-xs text-[#5A6978] mt-1">
                  Enterprise-grade software engineering, autonomous operations, and production AI tools.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="w-8 h-8 rounded-full border border-[#142840]/20 hover:bg-[#142840]/5 flex items-center justify-center text-[#142840] font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {/* Firm Positioning & Anti-Vibe-Code Standard */}
              <div className="p-4 rounded-lg bg-[#FBF9F4] border border-[#142840]/15 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B48A05] font-bold block">
                  BOUTIQUE ENGINEERING BENCH &middot; THE RIG ENGINE
                </span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  We operate as a boutique software and systems development firm. Every engagement combines executive technology leadership with an elite engineering bench and a private agentic build harness. We do not deliver prompt-glued toy prototypes; we engineer production-grade applications, custom API bridges, and autonomous operational workflows directly into your company repositories - tested, documented, and fully governed from day one.
                </p>
              </div>

              {/* Idea Seeds */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                  Starter Ideas (Click to append to your mandate):
                </span>
                <div className="flex flex-wrap gap-2">
                  {AGENTIC_IDEA_SEEDS.map((seed, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => addSeedToAgentic(seed)}
                      className="text-xs font-mono px-3 py-1.5 rounded bg-white border border-[#142840]/15 hover:border-[#B48A05] hover:text-[#142840] text-[#5A6978] transition-colors cursor-pointer text-left"
                    >
                      + {seed}
                    </button>
                  ))}
                </div>
              </div>

              {/* Their Words Textarea */}
              <div className="space-y-2">
                <label htmlFor="agentic-custom-notes" className="text-xs font-serif font-bold text-[#142840] block">
                  Describe what you want your business to be able to do:
                </label>
                <textarea
                  id="agentic-custom-notes"
                  rows={4}
                  value={agenticNotes}
                  onChange={(e) => handleAgenticNotesChange(e.target.value)}
                  placeholder="e.g. Need an autonomous EDI parsing agent that verifies carrier freight invoices against contract rates and posts approved vouchers into Business Central General Ledger with penny-level accuracy..."
                  className="w-full text-xs font-sans p-3 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] leading-relaxed"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 px-6 border-t border-[#142840]/10 bg-[#FBF9F4] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6978]">
                {hasAgentic ? "1 Bespoke Block added to scope" : "No custom requirement added"}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-6 py-2 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Add to Scope &amp; Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL: DIRECT QUOTE REQUEST (HUMAN-TO-HUMAN) */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-6 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840] text-white block w-fit mb-1.5">
                  TB // DIRECT EXECUTIVE REVIEW
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142840]">
                  Request a quote on this scope
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#142840]/20 hover:bg-[#142840]/5 flex items-center justify-center text-[#142840] font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Body Form or Success */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {quoteStatus === "success" ? (
                <div className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#142840]">
                    Scope request received
                  </h4>
                  <p className="text-xs text-[#5A6978] leading-relaxed max-w-sm mx-auto">
                    Thank you. Robert Paddock will personally analyze your operational context and desired outcomes and get back to you right away with a quote.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteStatus("idle");
                    }}
                    className="px-6 py-2.5 rounded bg-[#142840] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  {/* Executive Quote Callout */}
                  <div className="p-3.5 rounded bg-[#FBF9F4] border-l-2 border-[#B48A05] text-xs font-serif italic text-[#334155] leading-relaxed">
                    "Send this over to me. Fill this out as best and as accurately as you can to reflect your desired outcomes, and I'll get back to you right away with a quote."
                    <span className="block font-sans not-italic text-[11px] font-bold text-[#142840] mt-1">
                      &mdash; Robert Paddock
                    </span>
                  </div>

                  {/* Summary pills */}
                  <div className="p-3 rounded bg-white border border-[#142840]/10 text-xs font-mono space-y-1">
                    <div className="flex justify-between text-[#5A6978]">
                      <span>Calculated Scope:</span>
                      <strong className="text-[#142840]">{calculatedBlocks} Block(s) &middot; {pacingTitle}</strong>
                    </div>
                    <div className="flex justify-between text-[#5A6978]">
                      <span>Active Outcomes:</span>
                      <strong className="text-[#142840]">{totalItems} Selected</strong>
                    </div>
                  </div>

                  {quoteErrorMsg && (
                    <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-800">
                      {quoteErrorMsg}
                    </div>
                  )}

                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                      Your Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                      Work Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-company" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                      Company / Organization (optional)
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={quoteCompany}
                      onChange={(e) => setQuoteCompany(e.target.value)}
                      placeholder="Acme Operations, Inc."
                      className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={quoteStatus === "submitting"}
                      className="w-full py-3 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {quoteStatus === "submitting" ? (
                        <span>Sending request...</span>
                      ) : (
                        <>
                          <span>Send to Robert &rarr;</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer fallback */}
            {quoteStatus !== "success" && (
              <div className="p-4 px-6 border-t border-[#142840]/10 bg-[#FBF9F4] text-center">
                <Link
                  href={ENGAGEMENT_CONTACT_URL}
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="text-xs font-mono text-[#5A6978] hover:text-[#142840] transition-colors"
                >
                  Prefer to review in the full contact page? Proceed to Contact form &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
