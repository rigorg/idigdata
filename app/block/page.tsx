"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
  CatalogItem,
} from "@/lib/catalog";
import {
  useEngagementDraft,
} from "@/lib/engagement-draft";

// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// Sovereign executive flight deck aesthetic.
// Delivery Standard: 1 Block = 2 to 4 Weeks. Client selects outcomes, we quote blocks.
// Client-facing voice: strictly collective sovereign voice ("We", "Our team", "Our principals").

interface DomainItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  essence: string;
  badge?: string;
  archetype?: string;
  accentColor?: string;
}

const AGENTIC_DOMAIN: DomainItem = {
  id: "agentic_systems",
  code: "AS",
  name: "Agentic Systems & Bespoke Software",
  subtitle: "Boutique engineering pod delivering private AI runtimes, custom API bridges, and autonomous event meshes",
  essence: "We engineer production-grade applications, custom API bridges, and autonomous workflows directly into your company repositories.",
  badge: "BESPOKE STOREFRONT",
  archetype: "AUTONOMOUS AI POD FOUNDRY",
  accentColor: "#E5B21D",
};

const AGENTIC_IDEA_SEEDS = [
  "Autonomous Freight Invoice Reconciler",
  "Legacy ERP / EDI Integration Bridge",
  "Multi-System Ingestion & Event Mesh",
  "Governed Executive Knowledge Engine",
  "Real-Time Operational Exception Dispatcher",
  "Custom Inventory Allocation Pipeline",
];

const DOMAIN_METADATA: Record<string, { archetype: string; accentBorder: string; accentGlow: string; tagBg: string }> = {
  leadership_direction: {
    archetype: "EXECUTIVE GOVERNANCE CONSOLE",
    accentBorder: "border-amber-500/40",
    accentGlow: "rgba(245, 158, 11, 0.2)",
    tagBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  it_business_systems: {
    archetype: "PLATFORM & CUTOVER WORKBENCH",
    accentBorder: "border-cyan-500/40",
    accentGlow: "rgba(6, 182, 212, 0.2)",
    tagBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  data_knowledge: {
    archetype: "TRUTH ENGINE & LINEAGE MATRIX",
    accentBorder: "border-indigo-500/40",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    tagBg: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  },
  financial_systems: {
    archetype: "LEDGER & AUDIT INTEGRITY VAULT",
    accentBorder: "border-emerald-500/40",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    tagBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  workflows_automation: {
    archetype: "EVENT MESH & DISPATCH SWITCHBOARD",
    accentBorder: "border-teal-500/40",
    accentGlow: "rgba(20, 184, 166, 0.2)",
    tagBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  },
  agentic_systems: {
    archetype: "AUTONOMOUS AI POD FOUNDRY",
    accentBorder: "border-[#E5B21D]/60",
    accentGlow: "rgba(229, 178, 29, 0.3)",
    tagBg: "bg-[#E5B21D]/20 text-[#E5B21D] border-[#E5B21D]/40",
  },
};

// Gamified 3D Isometric Visualizer Reactor
function IsometricBlockVisualizer({
  totalItems,
  activeDomainsCount,
  activeDomainCodes,
}: {
  totalItems: number;
  activeDomainsCount: number;
  activeDomainCodes: string[];
}) {
  const isStandby = totalItems === 0;

  return (
    <div className="relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#070E17] border border-white/15 overflow-hidden shadow-2xl group">
      {/* Background ambient radar / energy mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          backgroundImage: isStandby
            ? "radial-gradient(circle at 50% 50%, rgba(229, 178, 29, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(229, 178, 29, 0.2) 0%, rgba(14, 30, 50, 0.4) 60%, transparent 100%)",
        }}
      />

      {/* Isometric 3D Reactor Block SVG */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Grid Plinth */}
          <polygon
            points="80,120 140,90 80,60 20,90"
            fill="rgba(11, 22, 36, 0.8)"
            stroke={isStandby ? "rgba(255,255,255,0.15)" : "rgba(229,178,29,0.4)"}
            strokeWidth="1.2"
            strokeDasharray={isStandby ? "4,4" : "none"}
          />

          {/* Isometric Cube Faces */}
          {/* Top Face */}
          <polygon
            points="80,24 135,53 80,82 25,53"
            fill={isStandby ? "rgba(255, 255, 255, 0.05)" : "rgba(229, 178, 29, 0.5)"}
            stroke={isStandby ? "rgba(255,255,255,0.25)" : "#E5B21D"}
            strokeWidth={isStandby ? "1.2" : "2"}
            className="transition-all duration-300"
          />

          {/* Left Face */}
          <polygon
            points="25,53 80,82 80,136 25,107"
            fill={isStandby ? "rgba(255, 255, 255, 0.02)" : "rgba(180, 138, 5, 0.35)"}
            stroke={isStandby ? "rgba(255,255,255,0.2)" : "rgba(229, 178, 29, 0.7)"}
            strokeWidth={isStandby ? "1.2" : "1.8"}
            className="transition-all duration-300"
          />

          {/* Right Face */}
          <polygon
            points="80,82 135,53 135,107 80,136"
            fill={isStandby ? "rgba(255, 255, 255, 0.04)" : "rgba(229, 178, 29, 0.35)"}
            stroke={isStandby ? "rgba(255,255,255,0.25)" : "#E5B21D"}
            strokeWidth={isStandby ? "1.2" : "1.8"}
            className="transition-all duration-300"
          />

          {/* Active Internal Core Lines & Nodes */}
          {!isStandby && (
            <>
              {/* Internal vertical core light */}
              <line x1="80" y1="24" x2="80" y2="136" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
              {/* Energy Nodes */}
              <circle cx="80" cy="82" r="4.5" fill="#FFFFFF" className="animate-pulse" />
              <circle cx="80" cy="82" r="8" stroke="#E5B21D" strokeWidth="1.5" strokeOpacity="0.8" />
              <circle cx="80" cy="24" r="2.5" fill="#E5B21D" />
              <circle cx="135" cy="53" r="2.5" fill="#E5B21D" />
              <circle cx="25" cy="53" r="2.5" fill="#E5B21D" />
              <circle cx="80" cy="136" r="2.5" fill="#E5B21D" />
            </>
          )}

          {isStandby && (
            <circle cx="80" cy="82" r="3" fill="rgba(255,255,255,0.3)" />
          )}
        </svg>

        {/* Pulse beacon badge */}
        {!isStandby && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B21D] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E5B21D]" />
          </span>
        )}
      </div>

      {/* Assembly Status Caption */}
      <div className="mt-3 text-center">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {isStandby ? (
            <span className="text-slate-400">AWAITING SELECTION &middot; STANDBY</span>
          ) : totalItems <= 3 ? (
            <span className="text-[#E5B21D] font-bold">1 BLOCK FORMATION ACTIVATED</span>
          ) : (
            <span className="text-[#E5B21D] font-bold">MULTI-BLOCK CADENCE ACTIVATED</span>
          )}
        </div>

        {/* Active Engine Pill Bar */}
        <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
          {activeDomainCodes.length > 0 ? (
            activeDomainCodes.map((code) => (
              <span
                key={code}
                className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#E5B21D]/20 text-[#E5B21D] border border-[#E5B21D]/40"
              >
                [{code}]
              </span>
            ))
          ) : (
            <span className="text-[10px] font-mono text-slate-400">0 of 6 Engines Wired</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TheBlockPage() {
  const { draft, update } = useEngagementDraft();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [agenticNotes, setAgenticNotes] = useState<string>("");
  const [generalNotes, setGeneralNotes] = useState<string>("");
  const [activeModalDomainId, setActiveModalDomainId] = useState<string | null>(null);
  
  // Interactive Wiki & Protocol Spec Drawer
  const [isWikiOpen, setIsWikiOpen] = useState<boolean>(false);
  const [activeWikiTab, setActiveWikiTab] = useState<"rule1" | "rule2" | "rule3">("rule1");

  // Filtering on Command Board
  const [activeFilter, setActiveFilter] = useState<"all" | "finite" | "ongoing" | "active">("all");

  // Expandable items state for domains with many outcomes (e.g. LD with 7 items)
  const [expandedDomainIds, setExpandedDomainIds] = useState<Set<string>>(new Set());

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

  const toggleDomainExpanded = (domainId: string) => {
    setExpandedDomainIds((prev) => {
      const next = new Set(prev);
      if (next.has(domainId)) {
        next.delete(domainId);
      } else {
        next.add(domainId);
      }
      return next;
    });
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
  const activeDomainCodes = useMemo(() => {
    const codes = new Set<string>();
    Array.from(selectedIds).forEach((id) => {
      const it = PUBLIC_CATALOG_ITEMS.find((c) => c.id === id);
      const dom = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
      if (dom) codes.add(dom.code);
    });
    if (hasAgentic) codes.add("AS");
    return Array.from(codes);
  }, [selectedIds, hasAgentic]);

  const activeDomainsCount = activeDomainCodes.length;

  // Active domain for modal
  const allDomains: DomainItem[] = useMemo(() => [...PUBLIC_OUTCOME_DOMAINS, AGENTIC_DOMAIN], []);
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
      
      {/* 1. TOP COMMAND BAR (ELEVATED TYPOGRAPHY WITH GOLD TING QUOTES) */}
      <section className="bg-[#0B1624]/95 backdrop-blur-md border-b border-white/10 text-white sticky top-[69px] md:top-[85px] z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
            
            {/* Left: Brand Lockup */}
            <div className="flex items-center gap-2.5 justify-start shrink-0">
              <TheBlockLogo variant="gold" size="md" showWordmark={false} />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                THE BLOCK
              </span>
            </div>

            {/* Center: The Core Question (Centered Horizontally, Elevated Typography with Gold Ting) */}
            <div className="flex items-center justify-center text-center px-2 py-0.5 md:py-0">
              <p className="font-display italic text-base sm:text-lg lg:text-xl text-[#F7F5EE] tracking-tight leading-none drop-shadow-sm md:whitespace-nowrap">
                <span className="text-[#E5B21D] font-serif not-italic text-lg sm:text-xl lg:text-2xl mr-1 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&ldquo;</span>
                What do you want your business to be able to do?
                <span className="text-[#E5B21D] font-serif not-italic text-lg sm:text-xl lg:text-2xl ml-0.5 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&rdquo;</span>
              </p>
            </div>

            {/* Right: 1 Block = 2-4 Weeks Delivery Standard Anchor (Opens Wiki Rule 3) */}
            <div className="flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveWikiTab("rule3");
                  setIsWikiOpen(true);
                }}
                title="Click to view Delivery Standard Specification"
                className="px-3.5 py-1.5 rounded-lg bg-[#E5B21D]/10 hover:bg-[#E5B21D]/20 border border-[#E5B21D]/30 hover:border-[#E5B21D]/60 text-xs font-mono flex items-center gap-2 shadow-xs cursor-pointer transition-all duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                <span className="text-[#E5B21D] font-bold tracking-wide whitespace-nowrap">
                  1 Block = 2 to 4 Weeks
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-white">&rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DISTINCT INSTRUCTIONAL PROTOCOL WIKI / HANDBOOK (NOT CLUTTERING THE CONFIGURATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">
        <div className="rounded-xl border border-white/10 bg-[#0B1624]/60 backdrop-blur-md overflow-hidden transition-all duration-200">
          
          {/* Wiki Ribbon Header (Toggleable Specification Strip) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 gap-2 bg-[#070E17]/80 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                PROTOCOL SPEC
              </span>
              <span className="text-xs font-mono text-slate-300 font-semibold">
                Delivery Instructions &amp; Scoping Wiki
              </span>
              <span className="hidden md:inline text-slate-600">&bull;</span>
              <span className="hidden md:inline text-xs font-mono text-slate-400">
                Rule 01: Outcome Scoping &middot; Rule 02: Operating Context &middot; Rule 03: 1 Block = 2 to 4 Weeks
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsWikiOpen(!isWikiOpen)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E5B21D] hover:text-amber-300 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{isWikiOpen ? "Hide Instructions & Wiki" : "Read Instructions & Wiki"}</span>
              <span>{isWikiOpen ? "▴" : "▾"}</span>
            </button>
          </div>

          {/* Expanded Wiki Body (Distinct Documentation View) */}
          {isWikiOpen && (
            <div className="p-5 sm:p-6 bg-[#09121E] border-t border-white/5 space-y-4 animate-in fade-in duration-200">
              {/* Wiki Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <button
                  type="button"
                  onClick={() => setActiveWikiTab("rule1")}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeWikiTab === "rule1"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  &sect; 01 Outcome Scoping
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWikiTab("rule2")}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeWikiTab === "rule2"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  &sect; 02 Operating Context
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWikiTab("rule3")}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeWikiTab === "rule3"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  &sect; 03 The 1-Block Law (2 to 4 Wks)
                </button>
              </div>

              {/* Wiki Tab 1 */}
              {activeWikiTab === "rule1" && (
                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#E5B21D]">&sect; 01.0</span>
                    <span>Outcomes Over Headcounts: Choose Discrete Capabilities</span>
                  </div>
                  <p>
                    Enterprise buyers do not buy generic advisory hours, open-ended retainers, or junior consultant headcounts. On The Block, you select discrete, verified business outcomes across 6 core operating engines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#E5B21D] font-bold block mb-1">Finite Sprints (17)</span>
                      Clear start, defined deliverables, verified acceptance, explicit cutover handoff.
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#E5B21D] font-bold block mb-1">Executive Mandates (4)</span>
                      Fractional CIO leadership, continuous cyber resilience, and governance gating.
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#E5B21D] font-bold block mb-1">Bespoke Pods (AS)</span>
                      Custom API bridges, autonomous agent loops, and private LLM event meshes.
                    </div>
                  </div>
                </div>
              )}

              {/* Wiki Tab 2 */}
              {activeWikiTab === "rule2" && (
                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#E5B21D]">&sect; 02.0</span>
                    <span>Operational Reality &amp; Constraints Dictate Speed</span>
                  </div>
                  <p>
                    Capabilities never succeed in an abstract vacuum. Delivery feasibility depends on the live ERPs in play, legacy database schemas, third-party logistics (3PL) constraints, or stalled integrators. State your reality in the Context Window so our team quotes an accurate block allocation.
                  </p>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300">
                    <span className="text-[#E5B21D] font-bold block mb-0.5">Example Context Mandate:</span>
                    &ldquo;NetSuite cutover stalled by off-track vendor; EDI 856 flat-files dropping from 3PL warehouse; need independent technical steer and cutover stabilization.&rdquo;
                  </div>
                </div>
              )}

              {/* Wiki Tab 3 */}
              {activeWikiTab === "rule3" && (
                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#E5B21D]">&sect; 03.0</span>
                    <span>The Delivery Standard: 1 Block = 2 to 4 Weeks</span>
                  </div>
                  <p>
                    A Block is our fixed execution unit. Each Block represents 2 to 4 weeks of focused delivery: a 2-week hands-on engineering build sprint, followed by 1 to 2 weeks of verification suites, test scenarios, and cutover stabilization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#E5B21D] font-bold block mb-1">Deterministic Delivery</span>
                      No open-ended retainers. You select the outcomes. Our principals analyze technical complexity and return an exact block allocation and schedule.
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#E5B21D] font-bold block mb-1">Firm Turnaround</span>
                      Within 1 business day of receiving your scope and context, we return an exact block quote and delivery schedule.
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* 3. THE STAR OF THE SHOW: GAMIFIED BLOCK ASSEMBLY FLIGHT DECK */}
      <section className="pt-6 pb-4 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0B1624]/90 border border-white/15 shadow-2xl backdrop-blur-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Col: 3D Isometric Reactor Visualizer */}
            <div className="lg:col-span-4 flex justify-center">
              <IsometricBlockVisualizer
                totalItems={totalItems}
                activeDomainsCount={activeDomainsCount}
                activeDomainCodes={activeDomainCodes}
              />
            </div>

            {/* Right Col: Assembly HUD & Live Gamified Telemetry */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#E5B21D] shadow-[0_0_8px_#E5B21D] animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E5B21D]">
                      INTERACTIVE BLOCK CONFIGURATOR
                    </span>
                    <span className="text-slate-500 font-mono text-xs">&middot;</span>
                    <span className="text-xs font-mono text-slate-300">
                      6 Specialized Engines
                    </span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Assemble Your Business Capabilities
                  </h2>
                </div>

                {/* Instant Clean Slate / Reset Control */}
                {totalItems > 0 && (
                  <button
                    type="button"
                    onClick={handleResetScope}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Reset Build to 0</span>
                    <span>&times;</span>
                  </button>
                )}
              </div>

              {/* Real-time Assembly Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Outcomes Assembled</span>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    <span className={totalItems > 0 ? "text-[#E5B21D]" : "text-white"}>{totalItems}</span>
                    <span className="text-slate-500 text-xs">/ 21</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Operating Engines</span>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    <span className={activeDomainsCount > 0 ? "text-[#E5B21D]" : "text-white"}>{activeDomainsCount}</span>
                    <span className="text-slate-500 text-xs">/ 6</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Delivery Unit</span>
                  <div className="text-sm font-bold text-[#E5B21D] leading-tight">
                    1 Block
                    <span className="block text-[10px] text-slate-400 font-normal">2 to 4 Weeks</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Draft Persistence</span>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Multi-Day Saved</span>
                  </div>
                  <span className="block text-[9px] text-slate-400 font-mono">Retained on reload</span>
                </div>
              </div>

              {/* Interactive Engine Filter Switchboard */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                <span className="text-slate-400 text-[11px] mr-1">Filter View:</span>
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                    activeFilter === "all"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  All 6 Engines
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("finite")}
                  className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                    activeFilter === "finite"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  Finite Sprints (17)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("ongoing")}
                  className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                    activeFilter === "ongoing"
                      ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  Executive Mandates (4)
                </button>
                {totalItems > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter("active")}
                    className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                      activeFilter === "active"
                        ? "bg-[#E5B21D] text-[#070E17] font-bold border-[#E5B21D]"
                        : "bg-[#E5B21D]/15 text-[#E5B21D] border-[#E5B21D]/30 hover:bg-[#E5B21D]/25"
                    }`}
                  >
                    Active in Scope ({totalItems})
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. THE 6 UNIQUE CONFIGURATORS: EACH IS ITS OWN FUNCTIONAL, TACTILE MINI-CONFIGURATOR */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allDomains.map((domain, idx) => {
            const isAgentic = domain.id === "agentic_systems";
            const blockNum = String(idx + 1).padStart(2, "0");
            const meta = DOMAIN_METADATA[domain.id] || DOMAIN_METADATA.leadership_direction;
            
            // Domain items count
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id);
            const filteredDomainItems = domainItems.filter((it) => {
              if (activeFilter === "finite") return it.kind === "finite";
              if (activeFilter === "ongoing") return it.kind === "ongoing";
              if (activeFilter === "active") return selectedIds.has(it.id);
              return true;
            });

            const domainSelectedCount = isAgentic
              ? hasAgentic ? 1 : 0
              : domainItems.filter((it) => selectedIds.has(it.id)).length;
            const isBlockActive = domainSelectedCount > 0;
            const isExpanded = expandedDomainIds.has(domain.id);

            // In LD, show top 3 outcomes, and collapse remaining 4 if not expanded
            const visibleItems = isExpanded || domainItems.length <= 4
              ? filteredDomainItems
              : filteredDomainItems.slice(0, 3);
            const remainingCount = filteredDomainItems.length - visibleItems.length;

            return (
              <div
                key={domain.id}
                className={`relative rounded-2xl border-t-2 border-l border-r border-b-4 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  isAgentic
                    ? "bg-gradient-to-br from-[#0E1E32] via-[#0B1624] to-[#142840] border-t-[#E5B21D] border-l-[#E5B21D]/60 border-r-[#E5B21D]/60 border-b-[#B48A05] text-white shadow-[0_16px_35px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#B48A05,inset_0_1px_0_rgba(229,178,29,0.5),0_0_25px_rgba(229,178,29,0.15)]"
                    : isBlockActive
                      ? "bg-[#0E1E32] border-t-[#E5B21D] border-l-[#E5B21D]/50 border-r-[#E5B21D]/50 border-b-[#B48A05] text-white shadow-[0_16px_30px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#B48A05,inset_0_1px_0_rgba(229,178,29,0.35),0_0_20px_rgba(229,178,29,0.1)]"
                      : "bg-[#0B1624] border-t-white/20 border-l-white/10 border-r-white/10 border-b-[#050B12] text-white shadow-[0_16px_30px_-6px_rgba(0,0,0,0.85),0_4px_0_0_#050B12,inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-t-[#E5B21D]/70"
                }`}
              >
                {/* 4 Machined Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />

                <div>
                  {/* Configurator Header Plate */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
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

                    {/* Domain Archetype Badge */}
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${meta.tagBg}`}>
                      {domain.badge || meta.archetype.split(" ")[0]}
                    </span>
                  </div>

                  {/* Configurator Title & Subtitle */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight tracking-tight text-white">
                    {domain.name}
                  </h3>
                  <p className="text-xs mt-1.5 leading-relaxed text-slate-300">
                    {domain.subtitle}
                  </p>

                  {/* Configurator Specific Body: Interactive Capability Toggles (CONFIGURATORS 01-05) */}
                  {!isAgentic && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1">
                        <span>Select Deliverables ({domainSelectedCount}/{domainItems.length} active):</span>
                        <button
                          type="button"
                          onClick={() => setActiveModalDomainId(domain.id)}
                          className="text-[#E5B21D] hover:underline cursor-pointer"
                        >
                          Deep Dive Specs &rarr;
                        </button>
                      </div>

                      {visibleItems.map((item) => {
                        const isChecked = selectedIds.has(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => toggleOutcome(item.id)}
                            className={`p-2.5 rounded-xl border text-xs transition-all duration-150 cursor-pointer select-none flex items-start gap-2.5 ${
                              isChecked
                                ? "bg-[#0E1E32] border-[#E5B21D] text-white shadow-[0_0_12px_rgba(229,178,29,0.2)] ring-1 ring-[#E5B21D]"
                                : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                            }`}
                          >
                            <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border text-[10px] font-bold shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#E5B21D] border-[#E5B21D] text-[#070E17]"
                                : "border-white/30 bg-[#070E17]"
                            }`}>
                              {isChecked ? "✓" : ""}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-serif font-bold text-xs leading-snug truncate">
                                {item.name}
                              </div>
                              <div className="text-[10px] font-mono text-slate-400 mt-0.5 flex items-center gap-1.5">
                                <span className={isChecked ? "text-[#E5B21D] font-bold" : "text-slate-400"}>
                                  {isChecked ? "● IN ACTIVE SCOPE" : "+ CLICK TO ADD"}
                                </span>
                                <span>&middot;</span>
                                <span>{item.kind === "finite" ? "Sprint" : "Mandate"}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Expand / Collapse toggle for domains with more than 3 items */}
                      {domainItems.length > 4 && (
                        <button
                          type="button"
                          onClick={() => toggleDomainExpanded(domain.id)}
                          className="w-full text-center py-1.5 mt-1 text-[11px] font-mono text-slate-400 hover:text-[#E5B21D] bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                        >
                          {isExpanded
                            ? "▴ Show fewer capabilities"
                            : `▾ Show ${remainingCount} more capabilities`}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Configurator 06: Agentic Systems & Bespoke Software Specific Foundry Controls */}
                  {isAgentic && (
                    <div className="mt-4 space-y-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#E5B21D] font-bold uppercase tracking-wider block mb-1.5">
                          Architectural Mandate Seeds (Click to Inject):
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {AGENTIC_IDEA_SEEDS.slice(0, 4).map((seed) => {
                            const isAdded = agenticNotes.includes(seed);
                            return (
                              <button
                                key={seed}
                                type="button"
                                onClick={() => addSeedToAgentic(seed)}
                                className={`text-left text-[11px] font-mono p-2 rounded-lg border transition-colors flex items-center justify-between gap-1.5 cursor-pointer ${
                                  isAdded
                                    ? "bg-[#0E1E32] border-[#E5B21D] text-[#E5B21D] font-bold"
                                    : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                                }`}
                              >
                                <span className="truncate">{seed}</span>
                                <span className="text-xs shrink-0">{isAdded ? "✓" : "+"}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Inline Mandate Editor */}
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1">
                          Bespoke Engineering Specification:
                        </span>
                        <textarea
                          value={agenticNotes}
                          onChange={(e) => handleAgenticNotesChange(e.target.value)}
                          rows={3}
                          spellCheck={true}
                          placeholder="Specify custom API bridge, private AI runtime, or event mesh..."
                          className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] focus:ring-1 focus:ring-[#E5B21D] resize-none"
                        />
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] shrink-0" />
                        <span>Committed directly to company repositories. Typed schemas only.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tactile Configurator Base Bar */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slate-500" />
                    <span>
                      {isAgentic
                        ? hasAgentic ? "Custom Mandate Active" : "Bespoke Pod Ready"
                        : `${domainSelectedCount} Selected of ${domainItems.length}`}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalDomainId(domain.id)}
                    className="font-serif font-bold text-xs uppercase tracking-wider text-[#E5B21D] hover:text-white flex items-center gap-1 bg-[#E5B21D]/10 hover:bg-[#E5B21D]/20 px-2.5 py-1 rounded border border-[#E5B21D]/25 hover:border-[#E5B21D]/50 transition-colors cursor-pointer"
                  >
                    <span>Full Specs</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. DELIVERY SCOPE MANIFEST & OPERATING CONTEXT TRAY (NO CLUTTER, MISSION LAUNCH DECK) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B1624]/90 rounded-2xl border border-white/15 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: Configured Scope Manifest */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#E5B21D] uppercase tracking-wider">
                    CONFIGURED SCOPE MANIFEST &middot; 1 BLOCK = 2 TO 4 WEEKS
                  </span>
                  {totalItems > 0 && (
                    <button
                      type="button"
                      onClick={handleResetScope}
                      className="text-xs font-mono text-slate-400 hover:text-rose-400 cursor-pointer transition-colors"
                    >
                      Clear All (Reset to 0)
                    </button>
                  )}
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {totalItems > 0 ? `${totalItems} Capabilities Configured for Delivery` : "Awaiting Outcome Configuration"}
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {totalItems > 0
                    ? "Each Block is a focused 2 to 4 week execution period (2-week build sprint + cutover verification). Send your scope over and our team will analyze technical dependencies and quote an exact block allocation."
                    : "Toggle capabilities in any of the 6 configurators above to assemble your project scope. As outcomes are selected, your live delivery manifest will build here in real time."}
                </p>
              </div>

              {/* Active Priorities Chips */}
              {totalItems > 0 ? (
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Active Scope Items ({totalItems}):
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pt-0.5">
                    {Array.from(selectedIds).map((id) => {
                      const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                      const domain = PUBLIC_OUTCOME_DOMAINS.find((d) => d.id === it?.domainId);
                      return (
                        <span
                          key={id}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-slate-200"
                        >
                          <span className="font-bold text-[#E5B21D]">[{domain?.code}]</span>
                          <span className="truncate max-w-[220px]">{it?.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOutcome(id);
                            }}
                            className="text-slate-400 hover:text-rose-400 font-bold ml-0.5 cursor-pointer"
                            title="Remove from scope"
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
              ) : (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>0 Capabilities Active &middot; Ready to assemble</span>
                  <span className="text-[#E5B21D]">1 Block = 2 to 4 Weeks</span>
                </div>
              )}
            </div>

            {/* Right 5 cols: Fast Operating Context & Quote Trigger */}
            <div className="lg:col-span-5 bg-[#070E17]/90 p-5 rounded-xl border border-white/15 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold block mb-1">
                  DELIVERY QUOTE &middot; OPERATING CONTEXT
                </span>
                <h5 className="font-serif text-base font-bold text-white">
                  Operating Context &amp; Constraints
                </h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Add specific context, systems, or delivery constraints. We review your scope and return an exact block quote.
                </p>

                <textarea
                  value={generalNotes}
                  onChange={(e) => handleGeneralNotesChange(e.target.value)}
                  rows={3}
                  spellCheck={true}
                  placeholder="e.g. Current ERP cutover delayed by off-track integrator, need independent scope reset and cutover steering & stabilization..."
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

      {/* 6. DEEP-DIVE COCKPIT MODAL (CONFIGURATORS 01-05 SPECIFICATION VIEW) */}
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
                      SPECIFICATION COCKPIT
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

              {/* Cockpit Main Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 flex-1 overflow-hidden bg-[#0B1624]">
                
                {/* Left 7 Cols: Detailed Outcome Specifications */}
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

                {/* Right 5 Cols: Operating Context Window */}
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
                      <span>Apply Scope &amp; Close Cockpit &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        );
      })()}

      {/* 7. DEEP-DIVE COCKPIT MODAL (CONFIGURATOR 06 AGENTIC SYSTEMS SPECIFICATION VIEW) */}
      {activeModalDomainId === "agentic_systems" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070E17]/90 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-[#E5B21D]/60 shadow-2xl max-w-6xl w-full h-[90vh] max-h-[860px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
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

            {/* Body */}
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

              {/* Right 5 Cols: Bespoke Context Window */}
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

      {/* 8. MODAL: THE BLOCK · DELIVERY QUOTE REQUEST */}
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
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={quoteName}
                        onChange={(e) => setQuoteName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={quoteEmail}
                        onChange={(e) => setQuoteEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={quoteCompany}
                        onChange={(e) => setQuoteCompany(e.target.value)}
                        placeholder="Acme Operations LLC"
                        className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Your Role / Title
                      </label>
                      <input
                        type="text"
                        value={quoteRole}
                        onChange={(e) => setQuoteRole(e.target.value)}
                        placeholder="VP Operations / CIO / CFO"
                        className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Kickoff Window Preference
                    </label>
                    <select
                      value={quoteLaunch}
                      onChange={(e) => setQuoteLaunch(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                    >
                      <option value="Immediate / Next Available Window">Immediate / Next Available Window</option>
                      <option value="Within 2-4 Weeks">Within 2 to 4 Weeks</option>
                      <option value="Next Fiscal Quarter">Next Fiscal Quarter</option>
                      <option value="Exploratory Scoping Only">Exploratory Scoping Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Operating Systems &amp; Delivery Constraints (Optional)
                    </label>
                    <textarea
                      value={quoteNotes}
                      onChange={(e) => {
                        setQuoteNotes(e.target.value);
                        setGeneralNotes(e.target.value);
                      }}
                      rows={3}
                      spellCheck={true}
                      placeholder="Note any critical ERPs, warehouse 3PLs, or past delivery hurdles..."
                      className="w-full p-2.5 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D] font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={quoteStatus === "submitting"}
                      className="w-full py-3 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,178,29,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{quoteStatus === "submitting" ? "Transmitting Scope Request..." : "Transmit Scope & Request Quote →"}</span>
                    </button>
                    <div className="text-[10px] font-mono text-center text-slate-400 mt-2">
                      Direct transmission to idigdata leadership team &middot; 1 business day response
                    </div>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
