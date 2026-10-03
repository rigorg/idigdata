"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
} from "@/lib/catalog";
import {
  useEngagementDraft,
  ENGAGEMENT_CONTACT_URL,
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
  subtitle: "Boutique engineering pod, private AI runtimes, custom API bridges, and autonomous event meshes",
  essence: "We engineer production-grade applications, custom API bridges, and autonomous workflows directly into your company repositories.",
  badge: "BESPOKE STOREFRONT",
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
  let pacingTitle = "Select outcomes to calculate flight";
  let pacingDesc = "Choose priorities across the 6 blocks to calculate engagement flight duration.";
  let flightWeeks = "0 Weeks";
  let isOvercapacity = false;

  if (totalItems === 0) {
    pacingTitle = "0 Blocks · Awaiting Selections";
    pacingDesc = "Explore the 6 operational blocks below to assemble your required capabilities.";
    flightWeeks = "Awaiting Scope";
  } else if (totalItems === 1) {
    calculatedBlocks = 1;
    pacingTitle = "1 Standard Block · 2-4 Weeks";
    pacingDesc = "Surgical Sprint: Fixed boundary addressing a single high-priority operational friction point.";
    flightWeeks = "2-4 Weeks";
  } else if (totalItems === 2) {
    calculatedBlocks = 2;
    pacingTitle = "2 Standard Blocks · 4-8 Weeks";
    pacingDesc = "Dual-Track Flight: Cohesive paired deliverables executed in rapid succession or parallel workstreams.";
    flightWeeks = "4-8 Weeks";
  } else if (totalItems === 3) {
    calculatedBlocks = 3;
    pacingTitle = "3 Standard Blocks · 6-12 Weeks";
    pacingDesc = "Multi-Stream Program: Substantial operational transformation across systems, ledgers, and team handoffs.";
    flightWeeks = "6-12 Weeks";
  } else if (totalItems === 4) {
    calculatedBlocks = 4;
    pacingTitle = "4 Standard Blocks · 12-16 Weeks";
    pacingDesc = "Modular Flight Ceiling: Full quarterly capacity ceiling to ensure organizational absorption without thrash.";
    flightWeeks = "12-16 Weeks";
  } else {
    isOvercapacity = true;
    calculatedBlocks = totalItems;
    pacingTitle = `${totalItems} Blocks · Full Mandate / 12-24 Month Transformation`;
    pacingDesc = "Broad enterprise transformation or full-time executive mandate. Sizing indicates a dedicated executive appointment, fractional leadership, or multi-phase roadmap.";
    flightWeeks = "12-24 Month Mandate";
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
      
      {/* 1. COMPACT COMMAND BAR (ONE-SCREEN VIEWPORT OPTIMIZED) */}
      <section className="py-4 sm:py-5 border-b border-[#142840]/20 bg-[#0E1E32] text-white sticky top-[60px] z-40 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            
            {/* Left: Brand & Question */}
            <div className="flex items-center gap-3.5">
              <TheBlockLogo variant="gold" size="md" showWordmark={false} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                    THE BLOCK
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#E5B21D] font-bold uppercase tracking-wider">
                    CAPABILITY STOREFRONT
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 hidden md:inline">
                    &middot; by idigdata
                  </span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                  What do you want your business to be able to do?
                </p>
              </div>
            </div>

            {/* Right: Streamlined Scope Sizing & Action Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 self-end sm:self-auto">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs font-mono flex items-center gap-2">
                <span className="text-slate-300">
                  {totalItems} {totalItems === 1 ? "Outcome" : "Outcomes"}
                </span>
                <span className="text-white/30">&bull;</span>
                <span className="text-[#E5B21D] font-bold">
                  {calculatedBlocks} {calculatedBlocks === 1 ? "Block" : "Blocks"}
                </span>
                <span className="text-slate-400 hidden lg:inline">
                  ({flightWeeks})
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#0B1624] font-serif font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>Request Quote</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 6 OPERATIONAL BLOCKS (PANORAMIC COMMAND BOARD) */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Subtle subheader instructions */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B48A05]" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#142840]">
              Operational Expedition Board &middot; 6 Capability Blocks
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#5A6978] hidden sm:inline">
            Click any block to open its outcome configurator. Click, click, done.
          </span>
        </div>

        {/* 6 Blocks Grid (3x2 on desktop, fully on screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
                role="button"
                tabIndex={0}
                onClick={() => setActiveModalDomainId(domain.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalDomainId(domain.id);
                  }
                }}
                className={`group relative bg-white rounded-xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-md hover:translate-y-[-2px] ${
                  hasActive
                    ? "border-[#B48A05] ring-2 ring-[#B48A05]/20 shadow-xs"
                    : isAgentic
                    ? "border-[#142840]/30 bg-gradient-to-b from-white to-[#F3ECE0]/50"
                    : "border-[#142840]/15"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840]/5 text-[#142840] group-hover:bg-[#142840] group-hover:text-white transition-colors">
                      BLOCK 0{idx + 1} [{domain.code}]
                    </span>
                    {hasActive ? (
                      <span className="font-mono text-[11px] font-bold text-[#B48A05] flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-[#B48A05]/30">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {domainSelectedCount} Selected
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-[#5A6978]">
                        {isAgentic ? "Bespoke / Seeds" : `${domainItems.length} Outcomes`}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#142840] mb-1.5 leading-snug">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-[#5A6978] leading-relaxed mb-3 line-clamp-2">
                    {domain.subtitle}
                  </p>

                  <div className="p-2.5 rounded bg-[#FBF9F4] border-l-2 border-[#B48A05] text-[11px] font-serif italic text-[#334155] leading-normal mb-4">
                    "{domain.essence}"
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[#142840]/10 flex items-center justify-between">
                  <span className="font-serif text-xs font-bold text-[#142840] group-hover:text-[#B48A05] transition-colors flex items-center gap-1.5">
                    {isAgentic ? "Open Agentic Storefront" : "Configure Outcomes"}
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

      {/* 3. FLIGHT SIZING LADDER & INTAKE CONTEXT (COMPACT & INTUITIVE) */}
      <section className="py-6 bg-[#EDE8DF] border-t border-[#142840]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-xs p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
              
              {/* Left Column: Sizing Ladder */}
              <div className="space-y-4 max-w-xl w-full">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B48A05] font-bold block mb-1">
                    FLIGHT DURATION &middot; PACING SIZING
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142840]">
                    {pacingTitle}
                  </h3>
                  <p className="text-xs text-[#5A6978] mt-0.5 leading-relaxed">
                    {pacingDesc}
                  </p>
                </div>

                {/* Sizing Tiers Reference */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                  <div className={`p-2 rounded border transition-colors ${calculatedBlocks === 1 ? "bg-[#142840] text-white border-[#142840]" : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"}`}>
                    <div className="font-bold">1 BLOCK</div>
                    <div>2-4 Weeks</div>
                  </div>
                  <div className={`p-2 rounded border transition-colors ${calculatedBlocks === 2 ? "bg-[#142840] text-white border-[#142840]" : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"}`}>
                    <div className="font-bold">2 BLOCKS</div>
                    <div>4-8 Weeks</div>
                  </div>
                  <div className={`p-2 rounded border transition-colors ${calculatedBlocks === 3 ? "bg-[#142840] text-white border-[#142840]" : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"}`}>
                    <div className="font-bold">3 BLOCKS</div>
                    <div>6-12 Weeks</div>
                  </div>
                  <div className={`p-2 rounded border transition-colors ${calculatedBlocks === 4 ? "bg-[#142840] text-white border-[#142840]" : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"}`}>
                    <div className="font-bold">4 BLOCKS</div>
                    <div>12-16 Weeks</div>
                  </div>
                </div>

                {/* Active Priorities Chips */}
                {totalItems > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                      Configured in Flight:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from(selectedIds).map((id) => {
                        const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                        if (!it) return null;
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FBF9F4] border border-[#142840]/15 text-[11px] font-medium text-[#142840]"
                          >
                            <span>{it.name}</span>
                            <button
                              type="button"
                              onClick={() => toggleOutcome(id)}
                              className="text-[#5A6978] hover:text-red-700 cursor-pointer ml-1"
                              title="Remove"
                            >
                              &times;
                            </button>
                          </span>
                        );
                      })}
                      {hasAgentic && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 border border-[#B48A05]/30 text-[11px] font-medium text-[#142840]">
                          <span className="font-mono text-[#B48A05]">[AS]</span>
                          <span>Bespoke Agentic Mandate</span>
                          <button
                            type="button"
                            onClick={() => handleAgenticNotesChange("")}
                            className="text-[#5A6978] hover:text-red-700 cursor-pointer ml-1"
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

              {/* Right Column: Operational Context Intake */}
              <div className="w-full lg:max-w-md bg-[#FBF9F4] p-4 sm:p-5 rounded-lg border border-[#142840]/15 space-y-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B48A05] font-bold block">
                    OPERATIONAL CONTEXT &middot; INTAKE
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#142840]">
                    Your situation and priorities
                  </h4>
                  <p className="text-xs text-[#5A6978] mt-0.5">
                    Add specific context or constraints. We will review your scope and return an exact delivery quote.
                  </p>
                </div>

                <div>
                  <label htmlFor="general-situation" className="sr-only">
                    Operational Context
                  </label>
                  <textarea
                    id="general-situation"
                    rows={3}
                    spellCheck={true}
                    value={generalNotes}
                    onChange={(e) => handleGeneralNotesChange(e.target.value)}
                    placeholder="e.g. ERP cutover delayed by off-track integrator, need independent scope reset and cutover flight control..."
                    className="w-full text-xs font-sans p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full py-2.5 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Scope for Delivery Quote &rarr;</span>
                  </button>

                  <Link
                    href={ENGAGEMENT_CONTACT_URL}
                    className="block text-center text-[11px] font-mono text-[#5A6978] hover:text-[#142840] py-0.5 cursor-pointer transition-colors"
                  >
                    Prefer full contact review? Proceed to Contact form &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. FAST CENTERED MODAL: BLOCKS 01-05 (SCANNABLE OUTCOME ROWS) */}
      {activeDomain && activeDomain.id !== "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840] text-white">
                    BLOCK [{activeDomain.code}]
                  </span>
                  <span className="text-xs font-mono text-[#5A6978]">
                    {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id).length} Available Outcomes
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142840]">
                  {activeDomain.name}
                </h3>
                <p className="text-xs text-[#5A6978] mt-0.5">
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
            <div className="px-5 py-2 bg-white border-b border-[#142840]/10 flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setDomainFilter("all")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "all" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                All Capabilities
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("finite")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "finite" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                Finite Sprints (2-4 wks)
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("ongoing")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  domainFilter === "ongoing" ? "bg-[#142840] text-white font-bold" : "text-[#5A6978] hover:bg-[#FBF9F4]"
                }`}
              >
                Executive Mandates
              </button>
            </div>

            {/* Scannable, bite-sized outcome rows (Click, Click, Done) */}
            <div className="p-5 overflow-y-auto space-y-3 flex-1">
              {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id)
                .filter((it) => (domainFilter === "all" ? true : it.kind === domainFilter))
                .map((item) => {
                  const isChecked = selectedIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => toggleOutcome(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleOutcome(item.id);
                        }
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                        isChecked
                          ? "bg-amber-50/60 border-[#B48A05] ring-1 ring-[#B48A05] shadow-xs"
                          : "bg-white border-[#142840]/15 hover:border-[#142840]/40 hover:bg-[#FBF9F4]"
                      }`}
                    >
                      {/* Checkbox button */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[#142840] text-[#B48A05]"
                            : "border border-[#142840]/30 bg-white"
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#142840]">
                            {item.name}
                          </h4>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#142840]/5 text-[#5A6978] whitespace-nowrap font-medium uppercase">
                            {item.kind === "finite" ? "2-4 Wk Sprint" : "Executive Mandate"}
                          </span>
                        </div>
                        
                        <p className="text-xs text-[#5A6978] leading-relaxed">
                          {item.outcome.split("Success check:")[0]?.trim() || item.outcome}
                        </p>

                        {item.tagline && (
                          <span className="text-[10px] font-mono text-[#B48A05] font-semibold block pt-0.5">
                            &bull; {item.tagline}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-5 border-t border-[#142840]/10 bg-[#FBF9F4] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6978]">
                {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id && selectedIds.has(it.id)).length} selected in this block
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-5 py-2 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Done Configuring
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL: BLOCK 06 [AS] AGENTIC SYSTEMS & BESPOKE SOFTWARE STOREFRONT */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-5 border-b border-[#142840]/10 bg-[#0E1E32] text-white flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#E5B21D] text-[#0B1624]">
                    BLOCK 06 [AS]
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-300 tracking-wider">
                    BOUTIQUE DEV STOREFRONT
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Agentic Systems &amp; Bespoke Software
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Boutique software engineering pod, private agentic runtimes, and company-owned API integrations.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-white font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 overflow-y-auto space-y-5 flex-1">
              
              {/* 3 Core Delivery Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-lg bg-[#FBF9F4] border border-[#142840]/10">
                  <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">
                    01 &middot; Agents
                  </span>
                  <p className="text-[#334155] text-[11px] leading-normal">
                    Reconciliation bots, exception monitors, and autonomous dispatch on private infra.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FBF9F4] border border-[#142840]/10">
                  <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">
                    02 &middot; API Bridges
                  </span>
                  <p className="text-[#334155] text-[11px] leading-normal">
                    Custom integrations connecting ERPs, EDIs, WMS, and legacy databases.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FBF9F4] border border-[#142840]/10">
                  <span className="font-mono font-bold text-[#B48A05] uppercase tracking-wider block mb-1">
                    03 &middot; Knowledge
                  </span>
                  <p className="text-[#334155] text-[11px] leading-normal">
                    Governed AI reasoning over company documents with access logs and audit trails.
                  </p>
                </div>
              </div>

              {/* Anti-Vibe-Coding Standard */}
              <div className="p-3.5 rounded-lg bg-amber-50/60 border border-[#B48A05]/20 text-xs text-[#334155] leading-relaxed">
                <strong className="text-[#142840] block font-mono text-[10px] uppercase tracking-wider mb-0.5">
                  Production Engineering Standard:
                </strong>
                We do not deliver fragile toy prototypes. Every application is containerized, test-governed, documented, and delivered directly into your company Git repositories.
              </div>

              {/* Starter Idea Seeds */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                  Starter Ideas (Click to append to your mandate):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {AGENTIC_IDEA_SEEDS.map((seed, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => addSeedToAgentic(seed)}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#FBF9F4] border border-[#142840]/15 hover:border-[#B48A05] hover:text-[#142840] text-[#5A6978] transition-colors cursor-pointer text-left"
                    >
                      + {seed}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Mandate Textarea with Spellcheck */}
              <div className="space-y-1.5">
                <label htmlFor="agentic-custom-notes" className="text-xs font-serif font-bold text-[#142840] block">
                  Describe what you want your software or agentic system to do:
                </label>
                <textarea
                  id="agentic-custom-notes"
                  rows={3}
                  spellCheck={true}
                  value={agenticNotes}
                  onChange={(e) => handleAgenticNotesChange(e.target.value)}
                  placeholder="e.g. Need an autonomous EDI parsing agent that verifies carrier freight invoices against contract rates and posts approved vouchers into Business Central General Ledger with penny-level accuracy..."
                  className="w-full text-xs font-sans p-3 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] leading-relaxed"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 px-5 border-t border-[#142840]/10 bg-[#FBF9F4] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6978]">
                {hasAgentic ? "1 Bespoke Block added to flight" : "No custom requirement added"}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-5 py-2 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Add to Flight &amp; Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL: DIRECT QUOTE REQUEST (STUDIO FIRM VOICE) */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-5 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#142840] text-white block w-fit mb-1">
                  TB // THE BLOCK &middot; DIRECT SCOPE REVIEW
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142840]">
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
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {quoteStatus === "success" ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#142840]">
                    Scope request received
                  </h4>
                  <p className="text-xs text-[#5A6978] leading-relaxed max-w-sm mx-auto">
                    Thank you. We will analyze your operational context and desired outcomes and get back to you right away with a concrete quote and flight timeline.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteStatus("idle");
                    }}
                    className="px-5 py-2 rounded bg-[#142840] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  <div className="p-3 rounded bg-[#FBF9F4] border-l-2 border-[#B48A05] text-xs font-serif italic text-[#334155] leading-relaxed">
                    "Send your scope over to us. Fill this out as accurately as you can to reflect your desired outcomes, and we will get back to you right away with a quote and delivery timeline."
                  </div>

                  {/* Summary pills */}
                  <div className="p-2.5 rounded bg-white border border-[#142840]/10 text-xs font-mono space-y-1">
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
                    <div className="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-800">
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
                      spellCheck={false}
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
                      spellCheck={false}
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
                      spellCheck={false}
                      value={quoteCompany}
                      onChange={(e) => setQuoteCompany(e.target.value)}
                      placeholder="Acme Operations, Inc."
                      className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={quoteStatus === "submitting"}
                      className="w-full py-2.5 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {quoteStatus === "submitting" ? (
                        <span>Submitting scope request...</span>
                      ) : (
                        <>
                          <span>Submit Scope for Quote &rarr;</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer fallback */}
            {quoteStatus !== "success" && (
              <div className="p-3.5 px-5 border-t border-[#142840]/10 bg-[#FBF9F4] text-center">
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
