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
// Capo Badass Dark Theme: sovereign, executive flight deck aesthetic.
// Capo Law: 1 Block = 2 to 4 Weeks. Client selects outcomes, Capo quotes blocks.

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

const DOMAIN_SAMPLE_CAPABILITIES: Record<string, string[]> = {
  leadership_direction: ["Executive IT Mandate", "Vendor Scope Reset", "Team Capability"],
  it_business_systems: ["ERP & Cutover Readiness", "Platform Selection", "Reliable Services"],
  data_knowledge: ["Consistent Records", "Traceable Reporting", "Operational Truth"],
  financial_systems: ["Reconciliation Engine", "Invoice Audit & Review", "Multi-Entity Ledger"],
  workflows_automation: ["Cross-System Integrations", "Exception Dispatcher", "Process Automation"],
  agentic_systems: ["Private AI Runtimes", "Custom API Bridges", "Autonomous Event Meshes"],
};

function IsometricBlockGlyph({
  active = false,
  highlight = false,
  className = "w-6 h-6",
}: {
  active?: boolean;
  highlight?: boolean;
  className?: string;
}) {
  const strokeColor = highlight
    ? "#E5B21D"
    : active
      ? "#E5B21D"
      : "rgba(255, 255, 255, 0.4)";
  const topFill = highlight
    ? "rgba(229, 178, 29, 0.45)"
    : active
      ? "rgba(229, 178, 29, 0.28)"
      : "rgba(255, 255, 255, 0.08)";
  const leftFill = highlight
    ? "rgba(229, 178, 29, 0.22)"
    : active
      ? "rgba(229, 178, 29, 0.14)"
      : "rgba(255, 255, 255, 0.03)";
  const rightFill = highlight
    ? "rgba(229, 178, 29, 0.32)"
    : active
      ? "rgba(229, 178, 29, 0.2)"
      : "rgba(255, 255, 255, 0.05)";

  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300 ${
        active || highlight ? "drop-shadow-[0_0_8px_rgba(229,178,29,0.5)]" : ""
      }`}
      aria-hidden="true"
    >
      <polygon
        points="14,3 24,8.5 14,14 4,8.5"
        fill={topFill}
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="4,8.5 14,14 14,25 4,19.5"
        fill={leftFill}
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="14,14 24,8.5 24,19.5 14,25"
        fill={rightFill}
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {(active || highlight) && (
        <circle cx="14" cy="14" r="1.5" fill="#E5B21D" />
      )}
    </svg>
  );
}

export default function TheBlockPage() {
  const { draft, update } = useEngagementDraft();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [agenticNotes, setAgenticNotes] = useState<string>("");
  const [generalNotes, setGeneralNotes] = useState<string>("");
  const [activeModalDomainId, setActiveModalDomainId] = useState<string | null>(null);
  const [activeProtocolStep, setActiveProtocolStep] = useState<"step1" | "step2" | "step3" | null>(null);
  const [domainFilter, setDomainFilter] = useState<"all" | "finite" | "ongoing">("all");

  // Quote modal state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteName, setQuoteName] = useState<string>("");
  const [quoteEmail, setQuoteEmail] = useState<string>("");
  const [quoteCompany, setQuoteCompany] = useState<string>("");
  const [quoteRole, setQuoteRole] = useState<string>("");
  const [quoteLaunch, setQuoteLaunch] = useState<string>("Immediate / Next Available Window");
  const [quoteNotes, setQuoteNotes] = useState<string>("");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [quoteErrorMsg, setQuoteErrorMsg] = useState<string>("");

  // Ensure entire document background is dark while on /block
  useEffect(() => {
    document.body.classList.add("bg-[#070E17]");
    document.documentElement.classList.add("bg-[#070E17]");
    return () => {
      document.body.classList.remove("bg-[#070E17]");
      document.documentElement.classList.remove("bg-[#070E17]");
    };
  }, []);

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

  const handleResetScope = () => {
    setSelectedIds(new Set());
    setAgenticNotes("");
    setGeneralNotes("");
    setQuoteNotes("");
    update({
      outcomeIds: [],
      notes: "",
      contactMessage: "",
    });
  };

  // Outcome selection metrics (Pure Capo scoping law: no fake block formulas)
  const catalogCount = selectedIds.size;
  const hasAgentic = agenticNotes.trim().length > 0;
  const totalItems = catalogCount + (hasAgentic ? 1 : 0);

  // Group selected items by domain
  const activeDomainsCount = new Set(
    Array.from(selectedIds)
      .map((id) => PUBLIC_CATALOG_ITEMS.find((it) => it.id === id)?.domainId)
      .filter(Boolean)
  ).size + (hasAgentic ? 1 : 0);

  // Active domain for modal
  const allDomains: DomainItem[] = [...PUBLIC_OUTCOME_DOMAINS, AGENTIC_DOMAIN];
  const activeDomain = allDomains.find((d) => d.id === activeModalDomainId);

  // Submit quote handler (Transmits exact scope manifest to Capo)
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
      `THE BLOCK · DELIVERY QUOTE REQUEST`,
      `==================================================`,
      `Client Name: ${quoteName.trim()}`,
      `Work Email: ${quoteEmail.trim()}`,
      quoteCompany.trim() ? `Company: ${quoteCompany.trim()}` : "",
      quoteRole.trim() ? `Operational Role: ${quoteRole.trim()}` : "",
      `Target Project Kickoff Window: ${quoteLaunch}`,
      `Delivery Standard: 1 Block = 2 to 4 Weeks`,
      `Total Outcomes Selected: ${totalItems} active across ${activeDomainsCount} domain(s)`,
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
          role: quoteRole.trim() || "The Block Delivery Quote Requester",
          company: quoteCompany.trim(),
          message: fullMessage,
          interestType: hasAgentic ? "applied_agentics" : "core_transformation",
        }),
      });

      if (res.ok) {
        setQuoteStatus("success");
      } else {
        setQuoteStatus("error");
        setQuoteErrorMsg("Unable to transmit delivery quote request. Please proceed to the Contact page.");
      }
    } catch {
      setQuoteStatus("error");
      setQuoteErrorMsg("Network error. Please try again or open the Contact form directly.");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#070E17] text-slate-100 selection:bg-[#E5B21D]/30"
      style={{
        backgroundImage: "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(229, 178, 29, 0.08), transparent 70%)",
      }}
    >
      
      {/* 1. TOP COMMAND BAR (BADASS DARK AESTHETIC - DOCKED UNDER HEADER) */}
      <section className="bg-[#0B1624]/95 backdrop-blur-md border-b border-white/10 text-white sticky top-[69px] md:top-[85px] z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
            
            {/* Left: Brand Lockup (Clean: Logo + THE BLOCK) */}
            <div className="flex items-center gap-2.5 justify-start shrink-0">
              <TheBlockLogo variant="gold" size="md" showWordmark={false} />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                THE BLOCK
              </span>
            </div>

            {/* Center: The Core Pitch (Centered Horizontally, Elevated Typography with Gold Ting) */}
            <div className="flex items-center justify-center text-center px-2 py-0.5 md:py-0">
              <p className="font-display italic text-base sm:text-lg lg:text-xl text-[#F7F5EE] tracking-tight leading-none drop-shadow-sm md:whitespace-nowrap">
                <span className="text-[#E5B21D] font-serif not-italic text-lg sm:text-xl lg:text-2xl mr-1 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&ldquo;</span>
                What do you want your business to be able to do?
                <span className="text-[#E5B21D] font-serif not-italic text-lg sm:text-xl lg:text-2xl ml-0.5 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&rdquo;</span>
              </p>
            </div>

            {/* Right: 1 Block = 2-4 Weeks Delivery Standard Anchor (Clickable Definition) */}
            <div className="flex items-center justify-end shrink-0">
              <div
                onClick={() => setActiveProtocolStep("step3")}
                role="button"
                tabIndex={0}
                title="Click to view Block Delivery Model definition"
                className="px-3.5 py-1.5 rounded-lg bg-[#E5B21D]/10 hover:bg-[#E5B21D]/20 border border-[#E5B21D]/30 hover:border-[#E5B21D]/60 text-xs font-mono flex items-center gap-2 shadow-xs cursor-pointer transition-all duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                <span className="text-[#E5B21D] font-bold tracking-wide whitespace-nowrap">
                  1 Block = 2 to 4 Weeks
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-white">&rarr;</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 6 OPERATIONAL BLOCKS (PANORAMIC COMMAND BOARD - DARK AESTHETIC) */}
      <section className="py-7 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 3-STEP ENTERPRISE SCOPING PROTOCOL & ENGINE DECK */}
        <div className="mb-6 rounded-2xl bg-[#0B1624]/90 border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
          {/* Top telemetry & protocol identity bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-3.5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E5B21D] shadow-[0_0_8px_#E5B21D] animate-pulse" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Enterprise Scoping Protocol
              </h2>
              <span className="text-slate-500 font-mono text-xs">&middot;</span>
              <span className="text-xs font-mono text-[#E5B21D] font-bold">
                6 Operating Engines
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              {totalItems > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                  <span className="text-[#E5B21D] font-bold">
                    {totalItems} {totalItems === 1 ? "Outcome" : "Outcomes"} in Scope (Draft Saved)
                  </span>
                  <span className="text-slate-500">&middot;</span>
                  <button
                    type="button"
                    onClick={handleResetScope}
                    className="text-[10px] text-slate-400 hover:text-rose-400 underline decoration-dotted cursor-pointer transition-colors"
                    title="Reset all selections and start fresh from 0"
                  >
                    Reset to 0
                  </button>
                </div>
              ) : (
                <span className="text-slate-400">
                  0 Outcomes in Scope &middot; Choose Capabilities Below
                </span>
              )}
              <span className="hidden md:inline text-slate-600">&bull;</span>
              <span className="hidden md:inline text-slate-400">Deterministic Sprint Architecture</span>
            </div>
          </div>

          {/* 3 Interconnected Execution Steps (Fully Clickable with Definitions) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Step 01 */}
            <div
              onClick={() => setActiveProtocolStep("step1")}
              role="button"
              tabIndex={0}
              className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#E5B21D]/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40 group-hover:bg-[#E5B21D] group-hover:text-[#070E17] transition-colors">
                    STEP 01
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 uppercase tracking-wider">
                    Select Capabilities
                  </span>
                </div>
                <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#E5B21D] transition-colors">
                  Choose Business Outcomes
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Click any configurator below. Select the discrete deliverables your business needs to execute.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#E5B21D]">
                <span>Click for Definition</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

            {/* Step 02 */}
            <div
              onClick={() => setActiveProtocolStep("step2")}
              role="button"
              tabIndex={0}
              className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#E5B21D]/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40 group-hover:bg-[#E5B21D] group-hover:text-[#070E17] transition-colors">
                    STEP 02
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 uppercase tracking-wider">
                    Context Window
                  </span>
                </div>
                <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#E5B21D] transition-colors">
                  State Systems &amp; Reality
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  State your live ERP, vendor friction, team bottlenecks, or operational constraints in the context window.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#E5B21D]">
                <span>Click for Context Guide</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

            {/* Step 03 */}
            <div
              onClick={() => setActiveProtocolStep("step3")}
              role="button"
              tabIndex={0}
              className="p-4 rounded-xl bg-[#0E1E32]/70 border border-[#E5B21D]/30 flex flex-col justify-between hover:border-[#E5B21D]/70 hover:bg-[#0E1E32] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17]">
                    STEP 03
                  </span>
                  <span className="text-[10px] font-mono text-[#E5B21D] font-bold uppercase tracking-wider">
                    Block Allocation
                  </span>
                </div>
                <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#E5B21D] transition-colors">
                  We Quote 2 to 4 Week Blocks
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  No open-ended retainers. We review your context and return an exact block allocation and schedule.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#E5B21D]/20 flex items-center justify-between text-[11px] font-mono text-[#E5B21D]">
                <span>Click for Delivery Model</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Blocks Grid (3x2 on desktop, architectural modular blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {allDomains.map((domain, idx) => {
            const isAgentic = domain.id === "agentic_systems";
            const blockNum = String(idx + 1).padStart(2, "0");
            
            // Domain items count
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
            const domainSelectedCount = isAgentic
              ? hasAgentic ? 1 : 0
              : domainItems.filter((it) => selectedIds.has(it.id)).length;
            const isBlockActive = domainSelectedCount > 0;

            return (
              <div
                key={domain.id}
                onClick={() => setActiveModalDomainId(domain.id)}
                className={`group relative rounded-xl border-t-2 border-l border-r border-b-4 p-5 sm:p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[310px] sm:min-h-[330px] ${
                  isAgentic
                    ? "bg-gradient-to-br from-[#0E1E32] via-[#0B1624] to-[#142840] border-t-[#E5B21D] border-l-[#E5B21D]/60 border-r-[#E5B21D]/60 border-b-[#B48A05] text-white shadow-[0_16px_30px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#B48A05,inset_0_1px_0_rgba(229,178,29,0.5),0_0_30px_rgba(229,178,29,0.2)] hover:-translate-y-1.5 hover:shadow-[0_24px_45px_-8px_rgba(229,178,29,0.35),0_6px_0_0_#B48A05,inset_0_1px_0_rgba(229,178,29,0.7)]"
                    : isBlockActive
                      ? "bg-[#0E1E32] border-t-[#E5B21D] border-l-[#E5B21D]/50 border-r-[#E5B21D]/50 border-b-[#B48A05] text-white shadow-[0_16px_30px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#B48A05,inset_0_1px_0_rgba(229,178,29,0.4),0_0_20px_rgba(229,178,29,0.15)] hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-8px_rgba(0,0,0,0.95),0_6px_0_0_#B48A05]"
                      : "bg-[#0B1624] hover:bg-[#0E1E32] border-t-white/20 border-l-white/10 border-r-white/10 border-b-[#050B12] text-white shadow-[0_16px_30px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#050B12,inset_0_1px_0_rgba(255,255,255,0.12)] hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-8px_rgba(0,0,0,0.95),0_6px_0_0_#070E17,inset_0_1px_0_rgba(229,178,29,0.35)] hover:border-t-[#E5B21D]/70"
                }`}
              >
                {/* 4 Machined Corner Notches */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#E5B21D]/60 transition-colors pointer-events-none" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#E5B21D]/60 transition-colors pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#E5B21D]/60 transition-colors pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#E5B21D]/60 transition-colors pointer-events-none" />

                {/* Block Header Plate */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <IsometricBlockGlyph
                        active={isBlockActive}
                        highlight={isAgentic}
                        className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                      />
                      <div className="flex items-center gap-1.5">
                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded tracking-wider ${
                          isAgentic
                            ? "bg-[#E5B21D] text-[#070E17]"
                            : isBlockActive
                              ? "bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40"
                              : "bg-white/10 text-slate-200 border border-white/15"
                        }`}>
                          CONFIGURATOR {blockNum}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#E5B21D]">
                          [{domain.code}]
                        </span>
                      </div>
                    </div>

                    {domain.badge && (
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40 uppercase tracking-wider">
                        {domain.badge}
                      </span>
                    )}

                    {isBlockActive && !domain.badge && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40 flex items-center gap-1.5 shadow-[0_0_10px_rgba(229,178,29,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                        <span>{domainSelectedCount} in Scope</span>
                      </span>
                    )}
                  </div>

                  {/* Block Title & Thesis */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight tracking-tight text-white group-hover:text-[#E5B21D] transition-colors">
                    {domain.name}
                  </h3>

                  <p className="text-xs mt-2 line-clamp-2 leading-relaxed text-slate-300">
                    {domain.subtitle}
                  </p>

                  {/* Modular Capability Sub-Blocks / Tags */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {(DOMAIN_SAMPLE_CAPABILITIES[domain.id] || []).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tactile Block Base Plate */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slate-500 group-hover:bg-[#E5B21D] transition-colors" />
                    <span>
                      {isAgentic
                        ? hasAgentic ? "Custom Spec Configured" : "Bespoke Engineering Pod"
                        : `${domainItems.length} Deliverable Outcomes`}
                    </span>
                  </div>

                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#E5B21D] group-hover:translate-x-1 transition-transform flex items-center gap-1 bg-[#E5B21D]/10 px-2.5 py-1 rounded border border-[#E5B21D]/25 group-hover:border-[#E5B21D]/50 group-hover:bg-[#E5B21D]/20">
                    <span>Open Configurator</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. HOW THE BLOCK WORKS: 1 BLOCK = 2 TO 4 WEEKS (BADASS DARK DELIVERY DECK) */}
      <section className="pb-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B1624]/90 rounded-2xl border border-white/15 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: Delivery Philosophy (1 Block = 2-4 Weeks) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#E5B21D] uppercase tracking-wider">
                    THE DELIVERY MODEL &middot; 1 BLOCK = 2 TO 4 WEEKS
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Configure your outcomes. We quote the blocks.
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  A Block is a discrete 2 to 4 week period of focused delivery time (2-week hands-on build sprint + verification and cutover stabilization). You select the exact capabilities your business needs. Send your scope over and our principals will analyze outcome complexity and return an exact block allocation and schedule.
                </p>
              </div>

              {/* 3 Delivery Pillars (Clickable to open Block Architecture Guide) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div
                  onClick={() => setActiveProtocolStep("step3")}
                  role="button"
                  tabIndex={0}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E5B21D]/50 hover:bg-white/10 transition-colors cursor-pointer space-y-1"
                >
                  <div className="font-bold text-[#E5B21D] flex items-center justify-between">
                    <span>1 BLOCK = 2-4 WKS</span>
                    <span className="text-[10px] text-slate-400">&rarr;</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-snug">
                    Fixed execution unit. Each block is a dedicated delivery sprint with clear operational boundaries.
                  </p>
                </div>

                <div
                  onClick={() => setActiveProtocolStep("step3")}
                  role="button"
                  tabIndex={0}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E5B21D]/50 hover:bg-white/10 transition-colors cursor-pointer space-y-1"
                >
                  <div className="font-bold text-[#E5B21D] flex items-center justify-between">
                    <span>OUTCOME SCOPING</span>
                    <span className="text-[10px] text-slate-400">&rarr;</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-snug">
                    Outcomes vary in depth. Some project mandates fit multiple outcomes into one block; complex cutovers take dedicated blocks.
                  </p>
                </div>

                <div
                  onClick={() => setActiveProtocolStep("step3")}
                  role="button"
                  tabIndex={0}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E5B21D]/50 hover:bg-white/10 transition-colors cursor-pointer space-y-1"
                >
                  <div className="font-bold text-[#E5B21D] flex items-center justify-between">
                    <span>NO GUESSWORK</span>
                    <span className="text-[10px] text-slate-400">&rarr;</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-snug">
                    Select 1 outcome, 5, or all 21. We review your requirements and tell you exactly how many blocks it will take.
                  </p>
                </div>
              </div>

              {/* Active Priorities Chips */}
              {totalItems > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Configured Outcomes ({totalItems}):
                    </span>
                    <button
                      type="button"
                      onClick={handleResetScope}
                      className="text-[10px] font-mono text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      Clear All (Reset to 0)
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pt-0.5">
                    {Array.from(selectedIds).map((id) => {
                      const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                      const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
                      return (
                        <span
                          key={id}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-slate-200"
                        >
                          <span className="font-bold text-[#E5B21D]">[{domain?.code}]</span>
                          <span className="truncate max-w-[200px]">{it?.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOutcome(id);
                            }}
                            className="text-slate-400 hover:text-rose-400 font-bold ml-0.5 cursor-pointer"
                          >
                            &times;
                          </button>
                        </span>
                      );
                    })}

                    {hasAgentic && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E1E32] text-white border border-[#E5B21D]/50 text-xs font-mono shadow-xs">
                        <span className="font-bold text-[#E5B21D]">[AS]</span>
                        <span>Bespoke Engineering Pod Mandate</span>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Fast Operating Context & Quote Trigger */}
            <div className="lg:col-span-5 bg-[#070E17]/90 p-5 rounded-xl border border-white/15 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold block mb-1">
                  INTAKE CONTEXT &middot; STEP 2 OF 2
                </span>
                <h5 className="font-serif text-base font-bold text-white">
                  Operating Context &amp; Constraints
                </h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Add specific context, systems, or delivery constraints. We will review your scope and quote the required blocks.
                </p>

                <textarea
                  value={generalNotes}
                  onChange={(e) => handleGeneralNotesChange(e.target.value)}
                  rows={3}
                  spellCheck={true}
                  placeholder="e.g. ERP cutover delayed by off-track integrator, need independent scope reset and cutover steering & stabilization..."
                  className="w-full mt-2.5 p-3 text-xs rounded-lg border border-white/20 bg-[#0B1624] focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D] text-white font-sans placeholder:text-slate-500"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full py-3 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,178,29,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Scope for Delivery Quote &rarr;</span>
                </button>
                <div className="text-[10px] font-mono text-center text-slate-400 mt-2">
                  1 Block = 2 to 4 Weeks &middot; Dedicated Delivery Mandate
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* 3.5. PROTOCOL DEFINITION MODAL (CLICKABLE DEFINITION DECK FOR STEPS 01, 02, 03) */}
      {activeProtocolStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/90 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-[#E5B21D]/40 shadow-2xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17]">
                    {activeProtocolStep === "step1" ? "PROTOCOL DEFINITION · STEP 01" : activeProtocolStep === "step2" ? "PROTOCOL DEFINITION · STEP 02" : "PROTOCOL DEFINITION · STEP 03"}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                    OPERATIONAL METHODOLOGY
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activeProtocolStep === "step1" && "Choose Business Outcomes"}
                  {activeProtocolStep === "step2" && "State Systems & Operating Reality"}
                  {activeProtocolStep === "step3" && "We Quote 2 to 4 Week Blocks"}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {activeProtocolStep === "step1" && "Browse 21 verified capabilities across the 6 core enterprise operating engines."}
                  {activeProtocolStep === "step2" && "Why real-world constraints, legacy databases, and vendor friction dictate delivery."}
                  {activeProtocolStep === "step3" && "Deterministic delivery architecture. Discrete sprint units with zero open-ended retainers."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProtocolStep(null)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1 bg-[#0B1624] text-xs leading-relaxed text-slate-300">
              {activeProtocolStep === "step1" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-serif text-sm font-bold text-white mb-1">
                      Outcomes Over Headcounts
                    </h4>
                    <p>
                      You do not buy generic advisory hours, open-ended retainers, or junior consultant headcounts. You select discrete, verifiable business capabilities your company needs to operate effectively.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-bold text-[#E5B21D] uppercase tracking-wider mb-2">
                      The 6 Enterprise Operating Engines:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[LD] Leadership &amp; Direction:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">Executive tech ownership, vendor scope accountability, IT capacity.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[IT] IT &amp; Business Systems:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">ERP readiness, cutover stabilization, platform selection.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[DK] Data &amp; Knowledge:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">Traceable reporting, single operational truth, consistent records.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[FS] Financial Systems:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">Reconciliation engines, invoice audit, multi-entity ledger integrity.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[WA] Workflows &amp; Automation:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">Cross-system event mesh, shop-floor sync, exception dispatch.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10">
                        <span className="text-[#E5B21D] font-bold">[AS] Agentic Systems:</span>
                        <p className="text-slate-300 font-sans text-xs mt-0.5">Autonomous agent pods, custom API bridges, private LLM runtimes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#E5B21D]/10 border border-[#E5B21D]/30 flex items-center justify-between">
                    <span className="font-mono text-slate-200">
                      Active selections across all engines: <strong className="text-[#E5B21D]">{totalItems} configured</strong>
                    </span>
                  </div>
                </div>
              )}

              {activeProtocolStep === "step2" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-serif text-sm font-bold text-white mb-1">
                      Why Context Dictates Delivery Speed
                    </h4>
                    <p>
                      Deliverables never succeed in a vacuum. Scoping a high-velocity 2 to 4 week block requires understanding which ERPs are live, what legacy databases must not break, and where past integrators or vendors became stalled.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[11px] font-bold text-[#E5B21D] uppercase tracking-wider block">
                      Operating Context &amp; Constraints Editor:
                    </label>
                    <textarea
                      value={generalNotes}
                      onChange={(e) => handleGeneralNotesChange(e.target.value)}
                      spellCheck={true}
                      rows={5}
                      placeholder="e.g. NetSuite ERP cutover off-track by 6 weeks; legacy EDI flat-files failing with warehouse 3PL; need independent technical steer..."
                      className="w-full p-3.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D] leading-relaxed resize-none"
                    />
                    <p className="text-[11px] text-slate-400 font-mono">
                      &bull; Edits made here immediately sync to your active project scope manifest.
                    </p>
                  </div>
                </div>
              )}

              {activeProtocolStep === "step3" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#0E1E32] border border-[#E5B21D]/40 space-y-1.5">
                    <div className="font-mono font-bold text-[#E5B21D] text-sm">
                      1 BLOCK = 2 TO 4 WEEKS
                    </div>
                    <p className="text-slate-200">
                      The core delivery standard of idigdata. Each Block is a discrete 2 to 4 week execution unit: 2 weeks of dedicated hands-on engineering build sprint, plus 1 to 2 weeks of verification suites, live cutover stabilization, and team handoff.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <div className="font-bold text-white">Outcome Depth</div>
                      <p className="text-slate-300 font-sans text-xs">
                        Outcomes vary in complexity. Some project mandates combine multiple outcomes into a single block; complex multi-entity cutovers require dedicated blocks.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <div className="font-bold text-white">Firm Scoping Turnaround</div>
                      <p className="text-slate-300 font-sans text-xs">
                        Within 1 business day of receiving your scope and context, our principals return an exact block allocation, schedule, and fixed quote.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono flex justify-between items-center text-slate-300">
                    <span>Active Selected Scope:</span>
                    <strong className="text-[#E5B21D]">{totalItems} outcomes configured</strong>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#070E17] flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-slate-400">
                1 Block = 2 to 4 Weeks &middot; idigdata Delivery Standard
              </span>

              {activeProtocolStep === "step1" && (
                <button
                  type="button"
                  onClick={() => setActiveProtocolStep(null)}
                  className="px-4 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Explore Configurators Below &darr;
                </button>
              )}

              {activeProtocolStep === "step2" && (
                <button
                  type="button"
                  onClick={() => setActiveProtocolStep(null)}
                  className="px-4 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Save Context &amp; Close &rarr;
                </button>
              )}

              {activeProtocolStep === "step3" && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveProtocolStep(null);
                    setIsQuoteModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(229,178,29,0.3)]"
                >
                  Request Delivery Quote &rarr;
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 4. EXPANSIVE COCKPIT CONFIGURATOR (CONFIGURATORS 01-05): TACTILE OUTCOME GRID + OPERATING CONTEXT WINDOW */}
      {activeModalDomainId && activeModalDomainId !== "agentic_systems" && activeDomain && (() => {
        const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id);
        const domainSelectedCount = domainItems.filter((it) => selectedIds.has(it.id)).length;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070E17]/90 backdrop-blur-md">
            <div className="bg-[#0B1624] text-white rounded-2xl border border-white/20 shadow-2xl max-w-6xl w-full h-[90vh] max-h-[860px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
              
              {/* Cockpit Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17]">
                      CONFIGURATOR [{activeDomain.code}]
                    </span>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      CAPABILITY CONFIGURATOR
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {activeDomain.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {activeDomain.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 rounded-full bg-[#E5B21D]/15 border border-[#E5B21D]/30 text-[#E5B21D] font-bold">
                    {domainSelectedCount} in Scope
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalDomainId(null)}
                    className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-base cursor-pointer transition-colors"
                  >
                    &times;
                  </button>
                </div>
              </div>

              {/* Cockpit Main Body: 2-Column Side-by-Side (Outcomes Grid + Operating Context Window) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 flex-1 overflow-hidden bg-[#0B1624]">
                
                {/* Left 7 Cols: Rapid Clickable Outcome Tiles (Zero tabs, no endless scroll) */}
                <div className="lg:col-span-7 flex flex-col min-h-0">
                  <div className="flex items-center justify-between gap-2 mb-3 shrink-0">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E5B21D]">
                      Available Capabilities ({domainItems.length})
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Click tile to select or remove
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-1 flex-1">
                    {domainItems.map((item) => {
                      const isChecked = selectedIds.has(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleOutcome(item.id)}
                          className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer select-none flex flex-col justify-between ${
                            isChecked
                              ? "bg-[#0E1E32] border-[#E5B21D] shadow-[0_0_18px_rgba(229,178,29,0.22)] text-white ring-1 ring-[#E5B21D]"
                              : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30 text-slate-200"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                                isChecked
                                  ? "bg-[#E5B21D] text-[#070E17]"
                                  : "bg-white/10 text-slate-300"
                              }`}>
                                {item.tagline || activeDomain.code}
                              </span>
                              <div className={`w-5 h-5 rounded flex items-center justify-center border font-bold text-xs shrink-0 transition-colors ${
                                isChecked
                                  ? "bg-[#E5B21D] border-[#E5B21D] text-[#070E17]"
                                  : "border-white/30 bg-[#070E17]"
                              }`}>
                                {isChecked ? "✓" : ""}
                              </div>
                            </div>

                            <h4 className="font-serif text-sm font-bold text-white leading-snug">
                              {item.name}
                            </h4>

                            <p className="text-xs mt-2 line-clamp-2 text-slate-300 leading-relaxed font-sans">
                              {item.outcome.split("Success check:")[0]?.trim() || item.outcome}
                            </p>
                          </div>

                          <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                            <span className={`font-bold ${isChecked ? "text-[#E5B21D]" : "text-slate-400"}`}>
                              {isChecked ? "● IN SCOPE" : "+ ADD TO SCOPE"}
                            </span>
                            <span className="text-slate-400">
                              {item.kind === "finite" ? "Sprint" : "Mandate"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right 5 Cols: THE DEDICATED CONTEXT WINDOW */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E17] p-4 sm:p-5 rounded-xl border border-white/15 min-h-0">
                  <div className="flex flex-col flex-1 min-h-0">
                    <div className="flex items-center gap-2 mb-1 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#E5B21D] animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold">
                        OPERATING CONTEXT WINDOW
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-white shrink-0">
                      State your context, constraints &amp; systems
                    </h4>
                    
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed shrink-0">
                      What systems are in play, what is broken, or what specific operating constraints should we know when scoping your blocks?
                    </p>

                    <textarea
                      value={generalNotes}
                      onChange={(e) => handleGeneralNotesChange(e.target.value)}
                      spellCheck={true}
                      placeholder="e.g. Current ERP cutover off-track by 6 weeks, need independent executive steering and integration scope reset..."
                      className="w-full flex-1 min-h-[180px] mt-3 p-3.5 text-xs rounded-lg border border-white/20 bg-[#0B1624] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D] leading-relaxed resize-none"
                    />
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 shrink-0 space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span className="text-[#E5B21D] font-bold">1 Block = 2 to 4 Weeks</span>
                      <span>{domainSelectedCount} in {activeDomain.code} &middot; {totalItems} Total</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalDomainId(null)}
                      className="w-full py-3 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,178,29,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply Scope &amp; Close Configurator &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        );
      })()}

      {/* 5. EXPANSIVE COCKPIT CONFIGURATOR: CONFIGURATOR 06 AGENTIC SYSTEMS (SEEDS + CONTEXT WINDOW) */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070E17]/90 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-[#E5B21D]/60 shadow-2xl max-w-6xl w-full h-[90vh] max-h-[860px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Cockpit Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17]">
                    CONFIGURATOR 06
                  </span>
                  <span className="font-mono text-xs font-bold text-[#E5B21D]">
                    [AS] BESPOKE STOREFRONT
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Agentic Systems &amp; Bespoke Software
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  Boutique engineering pod delivering governed multi-agent runtimes, custom API bridges, and private enterprise applications.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 rounded-full bg-[#E5B21D]/15 border border-[#E5B21D]/30 text-[#E5B21D] font-bold">
                  {hasAgentic ? "Mandate Specified" : "Bespoke Pod"}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalDomainId(null)}
                  className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-base cursor-pointer transition-colors"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Cockpit Main Body: 2-Column Side-by-Side (Seeds & Pillars + Bespoke Context Window) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 flex-1 overflow-hidden bg-[#0B1624]">
              
              {/* Left 7 Cols: Architectural Mandate Seeds & Pillars */}
              <div className="lg:col-span-7 flex flex-col min-h-0 space-y-4 overflow-y-auto pr-1">
                <div>
                  <label className="text-xs font-mono font-bold text-[#E5B21D] block mb-2 uppercase tracking-wider">
                    Common Architectural Mandates (Click to inject into Context):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {AGENTIC_IDEA_SEEDS.map((seed) => {
                      const isAdded = agenticNotes.includes(seed);
                      return (
                        <button
                          key={seed}
                          type="button"
                          onClick={() => addSeedToAgentic(seed)}
                          className={`text-left text-xs p-3.5 rounded-xl border font-mono transition-all duration-150 flex items-center justify-between gap-2 cursor-pointer ${
                            isAdded
                              ? "bg-[#0E1E32] border-[#E5B21D] text-white ring-1 ring-[#E5B21D] shadow-[0_0_15px_rgba(229,178,29,0.2)]"
                              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                          }`}
                        >
                          <span className="truncate">{seed}</span>
                          <span className="text-[#E5B21D] font-bold text-base shrink-0">
                            {isAdded ? "✓" : "+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Anti-Vibe-Coding Standard */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-[#E5B21D]/30 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E5B21D] shrink-0 shadow-[0_0_6px_#E5B21D]" />
                  <p className="text-xs text-slate-200 font-mono leading-relaxed">
                    <strong>The idigdata Standard:</strong> No flimsy prototype wrappers or uninspected vibe-coding. Every agentic system ships with automated verification suites, typed schemas, and human oversight gates.
                  </p>
                </div>

                {/* 3 Core Delivery Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 01</div>
                    <div className="font-serif font-bold text-white mt-1">Autonomous Pods</div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      Deterministic agent loops wired to live databases, webhooks, and ERPs.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 02</div>
                    <div className="font-serif font-bold text-white mt-1">API Bridges &amp; Mesh</div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      Zero-leakage data pipelines connecting legacy software without rip-and-replace.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-mono font-bold text-[#E5B21D] text-[10px] uppercase">Pillar 03</div>
                    <div className="font-serif font-bold text-white mt-1">Sovereign Runtimes</div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      Private LLM orchestration and secure tool execution inside your boundary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Dedicated Bespoke Context Window */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E17] p-4 sm:p-5 rounded-xl border border-white/15 min-h-0">
                <div className="flex flex-col flex-1 min-h-0">
                  <div className="flex items-center gap-2 mb-1 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#E5B21D] animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold">
                      BESPOKE CONTEXT WINDOW
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-white shrink-0">
                    Describe your bespoke engineering mandate
                  </h4>
                  
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed shrink-0">
                    Specify private AI runtimes, custom API endpoints, event triggers, or integrations to engineer.
                  </p>

                  <textarea
                    value={agenticNotes}
                    onChange={(e) => handleAgenticNotesChange(e.target.value)}
                    spellCheck={true}
                    placeholder="e.g. Build an autonomous multi-agent pipeline that ingests daily 3PL freight invoices, validates against contract rate cards, and writes approved adjustments into NetSuite via REST API..."
                    className="w-full flex-1 min-h-[180px] mt-3 p-3.5 text-xs rounded-lg border border-white/20 bg-[#0B1624] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D] leading-relaxed resize-none"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 shrink-0 space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span className="text-[#E5B21D] font-bold">1 Block = 2 to 4 Weeks</span>
                    <span>{hasAgentic ? "1 Bespoke Block in Scope" : "Ready to specify"}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalDomainId(null)}
                    className="w-full py-3 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,178,29,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply Bespoke Scope &amp; Close &rarr;</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 6. MODAL: THE BLOCK · DELIVERY QUOTE REQUEST (BADASS DARK THEME) */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/85 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-white/20 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-[#070E17] text-white flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#E5B21D] text-[#070E17]">
                    THE BLOCK
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    DELIVERY QUOTE REQUEST
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Request a Delivery Quote on Your Scope
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Send your selected capabilities to our principals. We review your requirements and quote the exact block allocation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Body Form or Success */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1 bg-[#0B1624]">
              {quoteStatus === "success" ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Scope Request Received
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                    Thank you. We have received your selected outcomes ({totalItems} active). Our principals will review your requirements and operational context, and return an exact delivery quote with the required block allocation and delivery timeline within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteStatus("idle");
                    }}
                    className="px-5 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close Configurator
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  
                  {/* Sizing snapshot plate */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono space-y-1.5">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Selected Outcomes:</span>
                      <strong className="text-white font-bold">{totalItems} active</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Delivery Standard:</span>
                      <strong className="text-[#E5B21D] font-bold">1 Block = 2 to 4 Weeks</strong>
                    </div>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-white/10">
                      We review your technical dependencies and return an exact block allocation.
                    </div>
                  </div>

                  {/* Selected items chips preview in modal */}
                  {totalItems > 0 && (
                    <div className="p-2.5 rounded-lg bg-[#070E17] border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Included in this Quote Request:
                      </span>
                      <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pt-0.5">
                        {Array.from(selectedIds).map((id) => {
                          const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                          const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
                          return (
                            <span key={id} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 border border-white/15 text-slate-200">
                              [{domain?.code}] {it?.name}
                            </span>
                          );
                        })}
                        {hasAgentic && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E1E32] text-[#E5B21D] border border-[#E5B21D]/30">
                            [AS] Bespoke Pod Mandate
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {quoteErrorMsg && (
                    <div className="p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200">
                      {quoteErrorMsg}
                    </div>
                  )}

                  {/* Client Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-serif font-bold text-white mb-1">
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
                        className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-serif font-bold text-white mb-1">
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
                        className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quote-company" className="block text-xs font-serif font-bold text-white mb-1">
                        Company / Organization
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        spellCheck={false}
                        value={quoteCompany}
                        onChange={(e) => setQuoteCompany(e.target.value)}
                        placeholder="Acme Operations, Inc."
                        className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-role" className="block text-xs font-serif font-bold text-white mb-1">
                        Operational Role / Title
                      </label>
                      <input
                        id="quote-role"
                        type="text"
                        spellCheck={false}
                        value={quoteRole}
                        onChange={(e) => setQuoteRole(e.target.value)}
                        placeholder="COO / VP Ops / CFO / CIO"
                        className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                  </div>

                  {/* Target Project Kickoff Window */}
                  <div>
                    <label htmlFor="quote-launch" className="block text-xs font-serif font-bold text-white mb-1">
                      Target Project Kickoff Window
                    </label>
                    <select
                      id="quote-launch"
                      value={quoteLaunch}
                      onChange={(e) => setQuoteLaunch(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D] font-mono"
                    >
                      <option value="Immediate / Next Available Window">Immediate / Next Available Window</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Within 60-90 Days / Next Quarter">Within 60-90 Days / Next Quarter</option>
                      <option value="Exploring Scope / Budgeting">Exploring Scope / Budgeting</option>
                    </select>
                  </div>

                  {/* Context & Constraints Textarea */}
                  <div>
                    <label htmlFor="quote-notes" className="block text-xs font-serif font-bold text-white mb-1">
                      Operational Context, Integrations &amp; Constraints
                    </label>
                    <textarea
                      id="quote-notes"
                      rows={2}
                      spellCheck={true}
                      value={quoteNotes}
                      onChange={(e) => setQuoteNotes(e.target.value)}
                      placeholder="e.g. ERP cutover delayed by integrator, need independent scope reset..."
                      className="w-full text-xs p-2.5 rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={quoteStatus === "submitting"}
                      className="w-full py-3 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,178,29,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {quoteStatus === "submitting" ? (
                        <span>Submitting scope request...</span>
                      ) : (
                        <span>Submit Scope for Delivery Quote &rarr;</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer fallback */}
            {quoteStatus !== "success" && (
              <div className="p-3.5 px-5 border-t border-white/10 bg-[#070E17] text-center">
                <Link
                  href={ENGAGEMENT_CONTACT_URL}
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="text-xs font-mono text-slate-400 hover:text-[#E5B21D] transition-colors"
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
