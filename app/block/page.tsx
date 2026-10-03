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
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5B21D]/15 text-[#E5B21D] border border-[#E5B21D]/30 font-bold uppercase tracking-wider">
                    CAPABILITY STOREFRONT
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 hidden md:inline">
                    &middot; by idigdata
                  </span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                  What do you want your business to be able to do?
                </p>
              </div>
            </div>

            {/* Right: 1 Block = 2-4 Weeks Anchor + Selection Pill + Action Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 self-end sm:self-auto">
              
              {/* Delivery standard anchor pill (Strictly 1 Block = 2 to 4 Weeks; zero outcome count equation) */}
              <div className="px-3.5 py-1.5 rounded-lg bg-[#E5B21D]/10 border border-[#E5B21D]/30 text-xs font-mono flex items-center gap-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                <span className="text-[#E5B21D] font-bold tracking-wide">
                  1 Block = 2 to 4 Weeks
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-4 py-1.5 sm:py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(229,178,29,0.25)] flex items-center gap-1.5"
              >
                <span>Request Delivery Quote</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 6 OPERATIONAL BLOCKS (PANORAMIC COMMAND BOARD - DARK AESTHETIC) */}
      <section className="py-7 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Subtle subheader instructions */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B21D] shadow-[0_0_8px_#E5B21D]" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
              Operational Capability Board &middot; 6 Blocks
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            Click any block to configure required capabilities
          </span>
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
                          BLOCK {blockNum}
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
                    <span>Configure Block</span>
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

              {/* 3 Delivery Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-[#E5B21D]">1 BLOCK = 2-4 WKS</div>
                  <p className="text-[11px] text-slate-300 font-sans leading-snug">
                    Fixed execution unit. Each block is a dedicated delivery sprint with clear operational boundaries.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-[#E5B21D]">OUTCOME SCOPING</div>
                  <p className="text-[11px] text-slate-300 font-sans leading-snug">
                    Outcomes vary in depth. Some project mandates fit multiple outcomes into one block; complex cutovers take dedicated blocks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-[#E5B21D]">NO GUESSWORK</div>
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
                      onClick={() => {
                        setSelectedIds(new Set());
                        setAgenticNotes("");
                        syncDraft(new Set(), "", generalNotes);
                      }}
                      className="text-[10px] font-mono text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      Clear All
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
                  spellCheck={false}
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

      {/* 4. FAST CENTERED MODAL: BLOCKS 01-05 (BADASS DARK SCANNABLE OUTCOME ROWS) */}
      {activeModalDomainId && activeModalDomainId !== "agentic_systems" && activeDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/85 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#E5B21D]">
                    [{activeDomain.code}]
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                    Operational Block
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activeDomain.name}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {activeDomain.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-5 py-2.5 bg-[#0A1420] border-b border-white/10 flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setDomainFilter("all")}
                className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                  domainFilter === "all" ? "bg-[#E5B21D] text-[#070E17] font-bold" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                All Capabilities
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("finite")}
                className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                  domainFilter === "finite" ? "bg-[#E5B21D] text-[#070E17] font-bold" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                Finite Sprints
              </button>
              <button
                type="button"
                onClick={() => setDomainFilter("ongoing")}
                className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                  domainFilter === "ongoing" ? "bg-[#E5B21D] text-[#070E17] font-bold" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                Executive Mandates
              </button>
            </div>

            {/* Modal Body: Scannable 1-line Outcome Rows */}
            <div className="p-3 sm:p-4 overflow-y-auto space-y-2 flex-1 bg-[#0B1624]">
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
                      className={`group flex items-start justify-between gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? "bg-[#E5B21D]/15 border-[#E5B21D] shadow-[0_0_15px_rgba(229,178,29,0.15)] text-white"
                          : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/25 text-slate-200"
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div className="flex items-start gap-3 min-w-0">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[#E5B21D] border-[#E5B21D] text-[#070E17]"
                            : "border-white/30 bg-[#070E17] group-hover:border-white/60"
                        }`}>
                          {isChecked ? "✓" : ""}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-sm font-bold truncate text-white">
                              {item.name}
                            </h4>
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                              isChecked ? "bg-white/20 text-white" : "bg-white/10 text-slate-300"
                            }`}>
                              {item.kind === "finite" ? "Sprint" : "Mandate"}
                            </span>
                          </div>
                          <p className="text-xs mt-0.5 line-clamp-2 text-slate-300">
                            {item.outcome.split("Success check:")[0]?.trim() || item.outcome}
                          </p>
                          {item.tagline && (
                            <span className={`text-[10px] font-mono font-medium block pt-0.5 ${
                              isChecked ? "text-[#E5B21D]" : "text-amber-400/90"
                            }`}>
                              &bull; {item.tagline}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right side tag */}
                      <span className={`text-[11px] font-mono shrink-0 font-bold ${
                        isChecked ? "text-[#E5B21D]" : "text-slate-400 group-hover:text-white"
                      }`}>
                        {isChecked ? "SELECTED" : "+ SELECT"}
                      </span>
                    </div>
                  );
                })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-white/10 bg-[#070E17] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomain.id && selectedIds.has(it.id)).length} selected in this block
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-4 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
              >
                Apply &amp; Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. FAST CENTERED MODAL: BLOCK 06 AGENTIC SYSTEMS (DEDICATED STOREFRONT POD) */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/85 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-[#E5B21D]/60 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17]">
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
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 bg-[#0B1624]">
              
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
                <div className="w-2 h-2 rounded-full bg-[#E5B21D] shrink-0 shadow-[0_0_6px_#E5B21D]" />
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
                      className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-[#E5B21D] hover:text-[#070E17] text-xs font-mono text-slate-200 transition-colors cursor-pointer text-left"
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
                  className="w-full p-3 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D]"
                />
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#070E17] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-300">
                {hasAgentic ? "1 Bespoke Block added to project mandate" : "No custom requirement added"}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalDomainId(null)}
                className="px-4 py-1.5 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
              >
                Save Scope &amp; Close
              </button>
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
                      Capo reviews your technical dependencies and returns an exact block allocation.
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
                      spellCheck={false}
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
