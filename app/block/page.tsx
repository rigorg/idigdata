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
// Capo Law: 1 Block = 2 Weeks of focused execution.

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
  const [activeModalDomainId, setActiveModalDomainId] = useState<string | null>(null);
  const [domainFilter, setDomainFilter] = useState<"all" | "finite" | "ongoing">("all");

  // Quote modal state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteName, setQuoteName] = useState<string>("");
  const [quoteEmail, setQuoteEmail] = useState<string>("");
  const [quoteCompany, setQuoteCompany] = useState<string>("");
  const [quoteRole, setQuoteRole] = useState<string>("");
  const [quoteLaunch, setQuoteLaunch] = useState<string>("Immediate / Next Available Flight");
  const [quoteNotes, setQuoteNotes] = useState<string>("");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [quoteErrorMsg, setQuoteErrorMsg] = useState<string>("");

  // Sync from draft on mount
  useEffect(() => {
    if (!draft) return;
    if (draft.outcomeIds && draft.outcomeIds.length > 0) {
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
        const genText = generalPart.replace("[Operational Context]:", "").trim();
        setGeneralNotes(genText);
        setQuoteNotes(genText);
      } else if (!agenticPart && draft.notes.trim()) {
        setGeneralNotes(draft.notes.trim());
        setQuoteNotes(draft.notes.trim());
      }
    }
  }, [draft]);

  // Sync changes back to draft
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
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      syncDraft(next, agenticNotes, generalNotes);
      return next;
    });
  };

  const handleAgenticNotesChange = (val: string) => {
    setAgenticNotes(val);
    syncDraft(selectedIds, val, generalNotes);
  };

  const handleGeneralNotesChange = (val: string) => {
    setGeneralNotes(val);
    setQuoteNotes(val);
    syncDraft(selectedIds, agenticNotes, val);
  };

  const addSeedToAgentic = (seed: string) => {
    const next = agenticNotes.trim() ? `${agenticNotes.trim()}\n- ${seed}` : seed;
    handleAgenticNotesChange(next);
  };

  // Math calculation anchored on Capo Law: 1 Block = 2 Weeks of dedicated execution.
  // We do not assume 1 outcome = 1 block; 1 to 2 related outcomes package into a 2-week block.
  const catalogCount = selectedIds.size;
  const hasAgentic = agenticNotes.trim().length > 0;
  const totalItems = catalogCount + (hasAgentic ? 1 : 0);

  // Group selected items by domain
  const activeDomainsCount = new Set(
    Array.from(selectedIds)
      .map((id) => PUBLIC_CATALOG_ITEMS.find((it) => it.id === id)?.domainId)
      .filter(Boolean)
  ).size + (hasAgentic ? 1 : 0);

  let flightSummary = "Awaiting Scope";
  let flightTier = 0; // 1, 2, 3, 4, or 5 (mandate)
  let pacingTitle = "0 Outcomes Selected";
  let pacingDesc = "Select outcomes across the 6 blocks below. 1 Block is 2 weeks of focused execution.";

  if (totalItems === 0) {
    flightSummary = "Awaiting Scope";
    flightTier = 0;
    pacingTitle = "0 Outcomes Selected";
    pacingDesc = "Select outcomes across the 6 blocks below. 1 Block = 2 Weeks of focused execution.";
  } else if (totalItems === 1) {
    flightSummary = "1 Block · 2 Weeks";
    flightTier = 1;
    pacingTitle = "1 Block · 2-Week Surgical Sprint";
    pacingDesc = "Surgical Sprint: Fixed 2-week execution block addressing a single high-priority friction point.";
  } else if (totalItems === 2) {
    if (activeDomainsCount === 1) {
      flightSummary = "1-2 Blocks · 2-4 Weeks";
      flightTier = 1;
      pacingTitle = "1-2 Blocks · 2-4 Weeks";
      pacingDesc = "Focused Sprint: Paired deliverables in the same domain packaged into 1 to 2 two-week execution blocks.";
    } else {
      flightSummary = "2 Blocks · 4 Weeks";
      flightTier = 2;
      pacingTitle = "2 Blocks · 4-Week Dual Flight";
      pacingDesc = "Dual-Track Flight: 2 discrete two-week execution blocks across separate systems.";
    }
  } else if (totalItems === 3) {
    flightSummary = "2-3 Blocks · 4-6 Weeks";
    flightTier = 3;
    pacingTitle = "2-3 Blocks · 4-6 Weeks";
    pacingDesc = "Multi-Stream Flight: 2 to 3 two-week blocks (4 to 6 weeks of dedicated execution, phased across operational checkpoints).";
  } else if (totalItems === 4) {
    flightSummary = "2-4 Blocks · 4-8 Weeks";
    flightTier = 4;
    pacingTitle = "2-4 Blocks · 4-8 Weeks";
    pacingDesc = "Comprehensive Flight: Up to 4 two-week execution blocks structured in coordinated delivery waves.";
  } else if (totalItems <= 6) {
    flightSummary = "3-4 Blocks · 6-8 Weeks";
    flightTier = 4;
    pacingTitle = "3-4 Blocks · 6-8 Weeks (Quarterly Ceiling)";
    pacingDesc = "Quarterly Flight Ceiling: 3 to 4 two-week blocks designed for organizational absorption without operational thrash.";
  } else {
    flightSummary = "Full Mandate · 12-24 Months";
    flightTier = 5;
    pacingTitle = `${totalItems} Outcomes · Full Mandate / 12-24 Month Transformation`;
    pacingDesc = "Broad enterprise transformation or executive appointment. Sizing indicates a full-time CIO mandate, fractional leadership, or multi-quarter transformation program.";
  }

  // Active domain for modal
  const allDomains: DomainItem[] = [...PUBLIC_OUTCOME_DOMAINS, AGENTIC_DOMAIN];
  const activeDomain = allDomains.find((d) => d.id === activeModalDomainId);

  // Submit quote handler (Specialized for The Block Scope Quote)
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName.trim() || !quoteEmail.trim()) {
      setQuoteErrorMsg("Please enter your name and work email.");
      return;
    }
    setQuoteStatus("submitting");
    setQuoteErrorMsg("");

    const selectedDetails = Array.from(selectedIds).map((id) => {
      const item = PUBLIC_CATALOG_ITEMS.find((it) => it.id === id);
      const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === item?.domainId);
      return item ? `[${domain?.code || "BL"}] ${item.name} (${item.kind === "finite" ? "Finite Sprint" : "Executive Mandate"})` : id;
    });

    const lines: string[] = [
      `==================================================`,
      `THE BLOCK · FLIGHT SCOPE QUOTE REQUEST`,
      `==================================================`,
      `Client Name: ${quoteName.trim()}`,
      `Work Email: ${quoteEmail.trim()}`,
      quoteCompany.trim() ? `Company: ${quoteCompany.trim()}` : "",
      quoteRole.trim() ? `Operational Role: ${quoteRole.trim()}` : "",
      `Target Flight Launch: ${quoteLaunch}`,
      `Estimated Flight: ${flightSummary} (${pacingTitle})`,
      `Block Law Reference: 1 Block = 2 Weeks of Dedicated Execution`,
      `Total Outcomes: ${totalItems} Selected across ${activeDomainsCount} domain(s)`,
      ``,
      `CONFIGURED OUTCOMES:`,
      selectedDetails.length > 0 ? selectedDetails.map((n) => `- ${n}`).join("\n") : "(None from catalog)",
      ``,
      agenticNotes.trim() ? `AGENTIC SYSTEMS & BESPOKE MANDATE:\n${agenticNotes.trim()}` : "",
      ``,
      (quoteNotes.trim() || generalNotes.trim()) ? `OPERATIONAL CONTEXT & CONSTRAINTS:\n${quoteNotes.trim() || generalNotes.trim()}` : "",
      `==================================================`,
    ].filter(Boolean);

    const fullMessage = lines.join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteName.trim(),
          email: quoteEmail.trim(),
          role: quoteRole.trim() || "The Block Flight Quote Requester",
          company: quoteCompany.trim(),
          message: fullMessage,
          interestType: hasAgentic ? "applied_agentics" : "core_transformation",
        }),
      });

      if (res.ok) {
        setQuoteStatus("success");
      } else {
        setQuoteStatus("error");
        setQuoteErrorMsg("Unable to transmit scope quote request. Please proceed to the Contact page.");
      }
    } catch {
      setQuoteStatus("error");
      setQuoteErrorMsg("Network error. Please try again or open the Contact form directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#142840] selection:bg-[#B48A05]/20">
      
      {/* 1. TOP COMMAND BAR (SLEEK 90PX HEADER) */}
      <section className="bg-[#0B1624] border-b border-[#142840]/40 text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            
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

            {/* Right: Sizing Pill (1 Block = 2 Weeks) & Action Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 self-end sm:self-auto">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs font-mono flex items-center gap-2">
                <span className="text-slate-300">
                  {totalItems} {totalItems === 1 ? "Outcome" : "Outcomes"}
                </span>
                <span className="text-white/30">&bull;</span>
                <span className="text-[#E5B21D] font-bold">
                  {totalItems === 0 ? "Awaiting Scope" : `Est. ${flightSummary}`}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#0B1624] font-serif font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>Request Scope Quote</span>
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
            Click any block to open and configure capabilities
          </span>
        </div>

        {/* 6 Blocks Grid (3x2 on desktop, fully on screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {allDomains.map((domain, idx) => {
            const isAgentic = domain.id === "agentic_systems";
            const blockNum = String(idx + 1).padStart(2, "0");
            
            // Domain items count
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
            const domainSelectedCount = isAgentic
              ? hasAgentic ? 1 : 0
              : domainItems.filter((it) => selectedIds.has(it.id)).length;

            return (
              <div
                key={domain.id}
                onClick={() => setActiveModalDomainId(domain.id)}
                className={`group relative rounded-xl border p-4.5 cursor-pointer transition-all duration-150 flex flex-col justify-between ${
                  isAgentic
                    ? "bg-[#0E1E32] text-white border-[#E5B21D]/50 hover:border-[#E5B21D] hover:shadow-lg shadow-md"
                    : "bg-white border-[#142840]/15 hover:border-[#142840] hover:shadow-md text-[#142840]"
                }`}
              >
                {/* Top row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isAgentic ? "bg-[#E5B21D] text-[#0B1624]" : "bg-[#142840] text-white"
                      }`}>
                        BLOCK {blockNum}
                      </span>
                      <span className={`font-mono text-xs font-semibold ${
                        isAgentic ? "text-[#E5B21D]" : "text-[#B48A05]"
                      }`}>
                        [{domain.code}]
                      </span>
                    </div>

                    {domain.badge && (
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-[#E5B21D] border border-[#E5B21D]/30 uppercase tracking-wider">
                        {domain.badge}
                      </span>
                    )}

                    {domainSelectedCount > 0 && !domain.badge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {domainSelectedCount} in Flight
                      </span>
                    )}
                  </div>

                  <h3 className={`font-serif text-lg font-bold leading-snug tracking-tight group-hover:text-[#B48A05] transition-colors ${
                    isAgentic ? "text-white group-hover:text-[#E5B21D]" : "text-[#142840]"
                  }`}>
                    {domain.name}
                  </h3>

                  <p className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${
                    isAgentic ? "text-slate-300" : "text-[#5A6978]"
                  }`}>
                    {domain.subtitle}
                  </p>
                </div>

                {/* Bottom preview info */}
                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                  isAgentic ? "border-white/10 text-slate-300" : "border-[#142840]/10 text-[#5A6978]"
                }`}>
                  <span>
                    {isAgentic
                      ? hasAgentic ? "Custom Spec Configured" : "Bespoke Engineering Pod"
                      : `${domainItems.length} Deliverable Outcomes`}
                  </span>
                  <span className={`font-serif font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 ${
                    isAgentic ? "text-[#E5B21D]" : "text-[#142840]"
                  }`}>
                    <span>Configure</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. FLIGHT SIZING LADDER & INTAKE CONTEXT (COMPACT & INTUITIVE) */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl border border-[#142840]/15 p-5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: Sizing Ladder & Capo Law */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#B48A05] uppercase tracking-wider">
                    FLIGHT DURATION &middot; PACING SIZING
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#142840]">
                  {pacingTitle}
                </h4>
                <p className="text-xs text-[#5A6978] mt-1 leading-relaxed">
                  {pacingDesc}
                </p>
              </div>

              {/* 4 Execution Sizing Tiers (1 Block = 2 Weeks) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div className={`p-2.5 rounded border transition-colors ${
                  flightTier === 1
                    ? "bg-[#142840] text-white border-[#142840] shadow-sm"
                    : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"
                }`}>
                  <div className="font-bold">1 BLOCK</div>
                  <div className={flightTier === 1 ? "text-[#E5B21D]" : "text-[#142840]"}>2 Weeks</div>
                  <div className="text-[9px] mt-0.5 opacity-75">Surgical Sprint</div>
                </div>

                <div className={`p-2.5 rounded border transition-colors ${
                  flightTier === 2
                    ? "bg-[#142840] text-white border-[#142840] shadow-sm"
                    : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"
                }`}>
                  <div className="font-bold">2 BLOCKS</div>
                  <div className={flightTier === 2 ? "text-[#E5B21D]" : "text-[#142840]"}>4 Weeks</div>
                  <div className="text-[9px] mt-0.5 opacity-75">Dual-Track Flight</div>
                </div>

                <div className={`p-2.5 rounded border transition-colors ${
                  flightTier === 3
                    ? "bg-[#142840] text-white border-[#142840] shadow-sm"
                    : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"
                }`}>
                  <div className="font-bold">3 BLOCKS</div>
                  <div className={flightTier === 3 ? "text-[#E5B21D]" : "text-[#142840]"}>6 Weeks</div>
                  <div className="text-[9px] mt-0.5 opacity-75">Multi-Stream Flight</div>
                </div>

                <div className={`p-2.5 rounded border transition-colors ${
                  flightTier === 4
                    ? "bg-[#142840] text-white border-[#142840] shadow-sm"
                    : "bg-[#FBF9F4] border-[#142840]/10 text-[#5A6978]"
                }`}>
                  <div className="font-bold">4 BLOCKS</div>
                  <div className={flightTier === 4 ? "text-[#E5B21D]" : "text-[#142840]"}>8 Weeks</div>
                  <div className="text-[9px] mt-0.5 opacity-75">Quarterly Ceiling</div>
                </div>
              </div>

              {/* Delivery Rule Callout */}
              <div className="p-3 rounded bg-[#FBF9F4] border-l-2 border-[#B48A05] text-xs font-serif text-[#334155] leading-relaxed">
                Standard execution unit: <strong>1 Block is 2 weeks of dedicated delivery</strong>. Depending on technical dependencies, 1 to 2 related outcomes can be packaged per 2-week block flight.
              </div>

              {/* Active Priorities Chips */}
              {totalItems > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                    Configured in Flight ({totalItems}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.from(selectedIds).map((id) => {
                      const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                      const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
                      return (
                        <span
                          key={id}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-[#142840]"
                        >
                          <span className="font-bold text-[#B48A05]">[{domain?.code}]</span>
                          <span className="truncate max-w-[200px]">{it?.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOutcome(id);
                            }}
                            className="text-slate-400 hover:text-red-600 font-bold ml-0.5 cursor-pointer"
                          >
                            &times;
                          </button>
                        </span>
                      );
                    })}

                    {hasAgentic && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0E1E32] text-white border border-[#E5B21D]/30 text-xs font-mono">
                        <span className="font-bold text-[#E5B21D]">[AS]</span>
                        <span>Bespoke Engineering Pod Mandate</span>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Fast Operating Context & Quote Trigger */}
            <div className="lg:col-span-5 bg-[#FBF9F4] p-4.5 rounded-lg border border-[#142840]/10 flex flex-col justify-between space-y-3.5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B48A05] font-bold block mb-1">
                  INTAKE CONTEXT &middot; STEP 2 OF 2
                </span>
                <h5 className="font-serif text-base font-bold text-[#142840]">
                  Operating Context &amp; Constraints
                </h5>
                <p className="text-xs text-[#5A6978] mt-1 leading-relaxed">
                  Add specific context or constraints. We will review your scope and return an exact delivery quote.
                </p>

                <textarea
                  value={generalNotes}
                  onChange={(e) => handleGeneralNotesChange(e.target.value)}
                  rows={3}
                  spellCheck={false}
                  placeholder="e.g. ERP cutover delayed by off-track integrator, need independent scope reset and cutover flight control..."
                  className="w-full mt-2.5 p-2.5 text-xs rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] font-sans placeholder:text-slate-400"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Scope for Delivery Quote &rarr;</span>
                </button>
                <div className="text-[10px] font-mono text-center text-[#5A6978] mt-2">
                  1 Block = 2 Weeks &middot; Dedicated Delivery Flight
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FAST CENTERED MODAL: BLOCKS 01-05 (SCANNABLE OUTCOME ROWS) */}
      {activeModalDomainId && activeModalDomainId !== "agentic_systems" && activeDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#142840]/10 bg-[#FBF9F4] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#B48A05]">
                    [{activeDomain.code}]
                  </span>
                  <span className="font-mono text-[11px] text-[#5A6978] uppercase tracking-wider">
                    Operational Block
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142840]">
                  {activeDomain.name}
                </h3>
                <p className="text-xs text-[#5A6978] mt-0.5 leading-relaxed">
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

            {/* Modal Body: Scannable 1-line Outcome Rows */}
            <div className="p-3 sm:p-4 overflow-y-auto space-y-2 flex-1">
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
                      className={`group flex items-start justify-between gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none ${
                        isChecked
                          ? "bg-[#142840] text-white border-[#142840] shadow-xs"
                          : "bg-white hover:bg-slate-50 border-[#142840]/10 text-[#142840]"
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div className="flex items-start gap-3 min-w-0">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[#E5B21D] border-[#E5B21D] text-[#0B1624]"
                            : "border-[#142840]/30 bg-white group-hover:border-[#142840]"
                        }`}>
                          {isChecked ? "✓" : ""}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-sm font-bold truncate">
                              {item.name}
                            </h4>
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                              isChecked ? "bg-white/15 text-slate-200" : "bg-slate-100 text-[#5A6978]"
                            }`}>
                              {item.kind === "finite" ? "Sprint" : "Mandate"}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 line-clamp-2 ${
                            isChecked ? "text-slate-300" : "text-[#5A6978]"
                          }`}>
                            {item.outcome.split("Success check:")[0]?.trim() || item.outcome}
                          </p>
                          {item.tagline && (
                            <span className={`text-[10px] font-mono font-medium block pt-0.5 ${
                              isChecked ? "text-[#E5B21D]" : "text-[#B48A05]"
                            }`}>
                              &bull; {item.tagline}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right side tag */}
                      <span className={`text-[11px] font-mono shrink-0 font-bold ${
                        isChecked ? "text-[#E5B21D]" : "text-[#B48A05]"
                      }`}>
                        {isChecked ? "SELECTED" : "+ SELECT"}
                      </span>
                    </div>
                  );
                })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-[#142840]/10 bg-[#FBF9F4] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-[#5A6978]">
                {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id && selectedIds.has(it.id)).length} selected in this block
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-4 py-1.5 rounded bg-[#142840] hover:bg-[#1C385A] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Apply &amp; Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. FAST CENTERED MODAL: BLOCK 06 AGENTIC SYSTEMS (DEDICATED STOREFRONT POD) */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1624]/80 backdrop-blur-xs">
          <div className="bg-[#0E1E32] text-white rounded-xl border border-[#E5B21D]/40 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0B1624] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#0B1624]">
                    BLOCK 06
                  </span>
                  <span className="font-mono text-xs font-bold text-[#E5B21D]">
                    [AS] BESPOKE STOREFRONT
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Agentic Systems &amp; Bespoke Software
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Boutique engineering pod delivering governed multi-agent runtimes, custom API bridges, and private enterprise applications.
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

            {/* Modal Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
              
              {/* 3 Core Delivery Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 01</div>
                  <div className="font-serif font-bold text-white mt-1">Autonomous Pods</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Deterministic agent loops wired to live databases, webhooks, and ERPs.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 02</div>
                  <div className="font-serif font-bold text-white mt-1">API Bridges &amp; Mesh</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Zero-leakage data pipelines connecting legacy software without rip-and-replace.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 03</div>
                  <div className="font-serif font-bold text-white mt-1">Sovereign Runtimes</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Private LLM architectures deployed within your tenant; zero model vendor training on your data.
                  </p>
                </div>
              </div>

              {/* Anti-Vibe-Coding Standard */}
              <div className="p-3 rounded-lg bg-white/5 border border-[#E5B21D]/30 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E5B21D] shrink-0" />
                <p className="text-xs text-slate-200 font-mono leading-relaxed">
                  <strong>The idigdata Standard:</strong> No flimsy prototype wrappers or uninspected vibe-coding. Every agentic system ships with automated verification suites, typed schemas, and human oversight gates.
                </p>
              </div>

              {/* Starter Idea Seeds */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold block mb-2">
                  Click a Starter Idea Seed to populate your mandate:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {AGENTIC_IDEA_SEEDS.map((seed) => (
                    <button
                      key={seed}
                      type="button"
                      onClick={() => addSeedToAgentic(seed)}
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#E5B21D] hover:text-[#0B1624] text-xs font-mono text-slate-200 transition-colors cursor-pointer text-left"
                    >
                      + {seed}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Mandate Input */}
              <div>
                <label className="text-xs font-mono font-bold text-white block mb-1">
                  Describe your bespoke system mandate or technical challenge:
                </label>
                <textarea
                  value={agenticNotes}
                  onChange={(e) => handleAgenticNotesChange(e.target.value)}
                  rows={4}
                  spellCheck={false}
                  placeholder="e.g. Build an autonomous multi-agent pipeline that ingests daily 3PL freight invoices, validates against contract rate cards, and writes approved adjustments into NetSuite via REST API..."
                  className="w-full p-3 text-xs rounded-lg border border-white/20 bg-black/40 text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D]"
                />
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#0B1624] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-300">
                {hasAgentic ? "1 Bespoke Block added to flight" : "No custom requirement added"}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-4 py-1.5 rounded bg-[#E5B21D] hover:bg-amber-400 text-[#0B1624] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Add to Flight &amp; Done
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 6. MODAL: THE BLOCK · FLIGHT SCOPE QUOTE REQUEST (DEDICATED INTAKE) */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142840]/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#142840]/20 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
            <div className="p-5 border-b border-[#142840]/10 bg-[#0B1624] text-white flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#E5B21D] text-[#0B1624]">
                    THE BLOCK
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    FLIGHT SCOPE QUOTE
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Request a Delivery Quote on This Flight
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Dedicated scope intake for your selected operational capabilities.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-white font-bold text-sm cursor-pointer"
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
                    Flight Scope Request Received
                  </h4>
                  <p className="text-xs text-[#5A6978] leading-relaxed max-w-sm mx-auto">
                    Thank you. We have received your flight configuration ({flightSummary}). Our principals will review your selected capabilities and delivery dependencies, and get back to you within 1 business day with an exact delivery quote and flight schedule.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteStatus("idle");
                    }}
                    className="px-5 py-2 rounded bg-[#142840] text-white font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close Configurator
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  
                  {/* Sizing snapshot plate */}
                  <div className="p-3 rounded bg-slate-50 border border-[#142840]/10 text-xs font-mono space-y-1.5">
                    <div className="flex justify-between items-center text-[#5A6978]">
                      <span>Estimated Flight:</span>
                      <strong className="text-[#142840] font-bold">{flightSummary}</strong>
                    </div>
                    <div className="flex justify-between items-center text-[#5A6978]">
                      <span>Selected Outcomes:</span>
                      <strong className="text-[#142840]">{totalItems} active</strong>
                    </div>
                    <div className="text-[10px] text-[#B48A05] pt-1 border-t border-slate-200">
                      Standard delivery unit: 1 Block = 2 Weeks of focused execution.
                    </div>
                  </div>

                  {/* Selected items chips preview in modal */}
                  {totalItems > 0 && (
                    <div className="p-2.5 rounded bg-[#FBF9F4] border border-[#142840]/10 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A6978] font-bold block">
                        Included in this Quote Request:
                      </span>
                      <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pt-0.5">
                        {Array.from(selectedIds).map((id) => {
                          const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                          const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
                          return (
                            <span key={id} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-[#142840]">
                              [{domain?.code}] {it?.name}
                            </span>
                          );
                        })}
                        {hasAgentic && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E1E32] text-[#E5B21D]">
                            [AS] Bespoke Pod Mandate
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {quoteErrorMsg && (
                    <div className="p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-800">
                      {quoteErrorMsg}
                    </div>
                  )}

                  {/* Client Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quote-company" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                        Company / Organization
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

                    <div>
                      <label htmlFor="quote-role" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                        Operational Role / Title
                      </label>
                      <input
                        id="quote-role"
                        type="text"
                        spellCheck={false}
                        value={quoteRole}
                        onChange={(e) => setQuoteRole(e.target.value)}
                        placeholder="COO / VP Ops / CFO / CIO"
                        className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
                      />
                    </div>
                  </div>

                  {/* Target Flight Launch Window */}
                  <div>
                    <label htmlFor="quote-launch" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                      Target Flight Launch Window
                    </label>
                    <select
                      id="quote-launch"
                      value={quoteLaunch}
                      onChange={(e) => setQuoteLaunch(e.target.value)}
                      className="w-full text-xs p-2.5 rounded border border-[#142840]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] font-mono"
                    >
                      <option value="Immediate / Next Available Flight">Immediate / Next Available Flight</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Within 60-90 Days / Next Quarter">Within 60-90 Days / Next Quarter</option>
                      <option value="Exploring Scope / Budgeting">Exploring Scope / Budgeting</option>
                    </select>
                  </div>

                  {/* Context & Constraints Textarea */}
                  <div>
                    <label htmlFor="quote-notes" className="block text-xs font-serif font-bold text-[#142840] mb-1">
                      Operational Context, Integrations &amp; Constraints
                    </label>
                    <textarea
                      id="quote-notes"
                      rows={2}
                      spellCheck={false}
                      value={quoteNotes}
                      onChange={(e) => setQuoteNotes(e.target.value)}
                      placeholder="e.g. ERP cutover delayed by integrator, need independent scope reset..."
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
                        <span>Submitting flight scope request...</span>
                      ) : (
                        <span>Submit Flight Scope for Delivery Quote &rarr;</span>
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
                  Prefer to review in the general contact page? Proceed to Contact form &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
