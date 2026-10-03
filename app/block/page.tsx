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
// Delivery Standard: 1 Block = 2 to 4 Weeks. Client selects outcomes, we quote blocks.
// Client-facing voice: strictly collective sovereign voice ("We", "Our team", "Our principals").
// Capo Architecture: One-page configuration machine. All fits on one page. Shrunk down.
// Each of the 6 blocks is equal in size, fun, distinct color, hit it and go explore it.

interface DomainConfig {
  id: string;
  code: string;
  name: string;
  shortName: string;
  subtitle: string;
  essence: string;
  badge: string;
  accentHex: string;
  borderClass: string;
  bgGlowClass: string;
  pillClass: string;
}

const DOMAIN_CONFIGS: DomainConfig[] = [
  {
    id: "leadership_direction",
    code: "LD",
    name: "Leadership & Direction",
    shortName: "Leadership",
    subtitle: "Priorities, executive ownership, team capability, and accountable delivery",
    essence: "Bring decisions, people, vendors, and delivery responsibilities together around the business priorities.",
    badge: "EXECUTIVE",
    accentHex: "#F59E0B",
    borderClass: "border-amber-500/40 hover:border-amber-400",
    bgGlowClass: "from-amber-500/10 via-transparent to-transparent",
    pillClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    id: "it_business_systems",
    code: "IT",
    name: "IT & Business Systems",
    shortName: "Core Systems",
    subtitle: "ERP, warehouse systems, platform choices, and reliable services",
    essence: "Make selected business systems work for the people who depend on them, with tested changes and clear operating ownership.",
    badge: "PLATFORM",
    accentHex: "#06B6D4",
    borderClass: "border-cyan-500/40 hover:border-cyan-400",
    bgGlowClass: "from-cyan-500/10 via-transparent to-transparent",
    pillClass: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "data_knowledge",
    code: "DK",
    name: "Data & Knowledge",
    shortName: "Data & Truth",
    subtitle: "Consistent records, traceable reporting, and usable business information",
    essence: "Connect the information the business needs, resolve conflicting definitions, and give the company the means to maintain it.",
    badge: "TRUTH",
    accentHex: "#8B5CF6",
    borderClass: "border-violet-500/40 hover:border-violet-400",
    bgGlowClass: "from-violet-500/10 via-transparent to-transparent",
    pillClass: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  {
    id: "financial_systems",
    code: "FS",
    name: "Financial Systems",
    shortName: "Financial",
    subtitle: "Reconciliation, invoice review, and reporting across entities",
    essence: "Make financial records easier to reconcile and explain, with visible exceptions and finance retaining accounting and approval decisions.",
    badge: "LEDGER",
    accentHex: "#10B981",
    borderClass: "border-emerald-500/40 hover:border-emerald-400",
    bgGlowClass: "from-emerald-500/10 via-transparent to-transparent",
    pillClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "workflows_automation",
    code: "WA",
    name: "Workflows & Automation",
    shortName: "Workflows",
    subtitle: "Practical workflows across people, devices, and business systems",
    essence: "Reduce repeated entry and broken handoffs with tested workflows, clear permissions, and a way to recover when something fails.",
    badge: "EVENT MESH",
    accentHex: "#14B8A6",
    borderClass: "border-teal-500/40 hover:border-teal-400",
    bgGlowClass: "from-teal-500/10 via-transparent to-transparent",
    pillClass: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  },
  {
    id: "agentic_systems",
    code: "AS",
    name: "Agentic Systems & Bespoke Software",
    shortName: "Agentic AI",
    subtitle: "Boutique engineering pod delivering private AI runtimes, custom API bridges, and autonomous event meshes",
    essence: "We engineer production-grade applications, custom API bridges, and autonomous workflows directly into your company repositories.",
    badge: "STOREFRONT",
    accentHex: "#E5B21D",
    borderClass: "border-[#E5B21D]/60 hover:border-amber-300",
    bgGlowClass: "from-[#E5B21D]/15 via-transparent to-transparent",
    pillClass: "bg-[#E5B21D]/20 text-[#E5B21D] border-[#E5B21D]/40",
  },
];

// Unique, simple, cool-looking icons representing each of the 6 blocks
function DomainBlockIcon({
  code,
  className = "w-6 h-6",
  color = "currentColor",
}: {
  code: string;
  className?: string;
  color?: string;
}) {
  switch (code) {
    case "LD":
      // Executive Apex Crown & Compass Directive Helm
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9.5" strokeOpacity="0.35" strokeDasharray="3 3" />
          <polygon points="12 2.5 15 9.5 22 12 15 14.5 12 21.5 9 14.5 2 12 9 9.5 12 2.5" fill={`${color}25`} />
          <polygon points="12 4.5 14 10 12 12 10 10 12 4.5" fill={color} stroke="none" />
          <circle cx="12" cy="12" r="2" fill="#070E17" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "IT":
      // Modular Platform Cube & Interconnected Bus Nodes
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5L3.5 7.5v9l8.5 5 8.5-5v-9l-8.5-5z" fill={`${color}20`} strokeOpacity="0.85" />
          <path d="M12 12.5L3.5 7.5" />
          <path d="M12 12.5v9" />
          <path d="M12 12.5l8.5-5" />
          <circle cx="12" cy="7.5" r="1.5" fill={color} stroke="none" />
          <circle cx="7.75" cy="15" r="1.5" fill={color} stroke="none" />
          <circle cx="16.25" cy="15" r="1.5" fill={color} stroke="none" />
        </svg>
      );
    case "DK":
      // Faceted Truth Prism & Data Lineage Crystal
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3.5h12l4 6.5-10 11.5L2 10l4-6.5z" fill={`${color}20`} strokeOpacity="0.85" />
          <path d="M2 10h20" />
          <path d="M12 21.5L7.5 10 10 3.5" />
          <path d="M12 21.5l4.5-11.5L14 3.5" />
          <circle cx="12" cy="10" r="1.75" fill={color} stroke="#070E17" strokeWidth="1.5" />
        </svg>
      );
    case "FS":
      // Precision Calibrated Balance Scale & Ledger Equilibrium (Strictly NO $)
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v17.5M7 20.5h10" />
          <path d="M4 7.5l8-2 8 2" />
          <path d="M4 7.5l-2.5 5.5a3.5 3.5 0 007 0L6 7.5" fill={`${color}25`} strokeOpacity="0.85" />
          <path d="M20 7.5l-2.5 5.5a3.5 3.5 0 007 0L22 7.5" fill={`${color}25`} strokeOpacity="0.85" />
          <circle cx="12" cy="5.5" r="1.75" fill={color} stroke="none" />
        </svg>
      );
    case "WA":
      // Automated Cyclic Pipeline Loop & Kinetic Dispatch Spark
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12a8 8 0 0114.5-4.5M20 12a8 8 0 01-14.5 4.5" strokeOpacity="0.5" strokeWidth="1.5" />
          <path d="M19.5 3.5v4.5h-4.5M4.5 20.5v-4.5h4.5" strokeWidth="1.75" />
          <polygon points="13 6 8 13.5 12 13.5 11 18 16 10.5 12 10.5 13 6" fill={color} stroke="none" />
        </svg>
      );
    case "AS":
      // Autonomous Cybernetic Core & AI Neural Matrix
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" fill={`${color}25`} strokeOpacity="0.85" />
          <polygon points="12 8 15.5 12 12 16 8.5 12" fill={color} stroke="none" />
          <path d="M9 2v3.5M15 2v3.5M9 18.5v3.5M15 18.5v3.5M2 9h3.5M2 15h3.5M18.5 9h3.5M18.5 15h3.5" strokeWidth="1.75" />
        </svg>
      );
    default:
      return null;
  }
}

const AGENTIC_IDEA_SEEDS = [
  "Autonomous Freight Invoice Reconciler",
  "Legacy ERP / EDI Integration Bridge",
  "Multi-System Ingestion & Event Mesh",
  "Governed Executive Knowledge Engine",
  "Real-Time Operational Exception Dispatcher",
  "Custom Inventory Allocation Pipeline",
];

// Interactive 3D Isometric Reactor Visualizer
function GamifiedIsometricBlock({
  totalItems,
  activeDomainCodes,
}: {
  totalItems: number;
  activeDomainCodes: Set<string>;
}) {
  const isDormant = totalItems === 0;

  const hasLD = activeDomainCodes.has("LD");
  const hasIT = activeDomainCodes.has("IT");
  const hasDK = activeDomainCodes.has("DK");
  const hasFS = activeDomainCodes.has("FS");
  const hasWA = activeDomainCodes.has("WA");
  const hasAS = activeDomainCodes.has("AS");

  return (
    <div className="relative flex flex-col items-center justify-center p-3 rounded-2xl bg-[#070E17]/95 border border-white/10 shadow-2xl overflow-hidden group select-none">
      {/* Background ambient radar glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: isDormant
            ? "radial-gradient(circle at 50% 50%, rgba(229, 178, 29, 0.03) 0%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(229, 178, 29, 0.18) 0%, rgba(14, 30, 50, 0.35) 60%, transparent 100%)",
        }}
      />

      {/* 3D Isometric Block Projection SVG */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Plinth Shadow / Grid */}
          <polygon
            points="80,122 135,94 80,66 25,94"
            fill="rgba(11, 22, 36, 0.9)"
            stroke={isDormant ? "rgba(255,255,255,0.12)" : "rgba(229,178,29,0.35)"}
            strokeWidth="1.2"
            strokeDasharray={isDormant ? "3,3" : "none"}
          />

          {/* FACET 1: TOP LEFT [LD] (Amber Gold) */}
          <polygon
            points="80,24 80,82 25,53 25,24"
            fill={hasLD ? "rgba(245, 158, 11, 0.55)" : isDormant ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.08)"}
            stroke={hasLD ? "#F59E0B" : isDormant ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)"}
            strokeWidth={hasLD ? "2" : "1.2"}
            className="transition-all duration-300"
          />

          {/* FACET 2: TOP RIGHT [IT] (Electric Cyan) */}
          <polygon
            points="80,24 135,24 135,53 80,82"
            fill={hasIT ? "rgba(6, 182, 212, 0.55)" : isDormant ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.08)"}
            stroke={hasIT ? "#06B6D4" : isDormant ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)"}
            strokeWidth={hasIT ? "2" : "1.2"}
            className="transition-all duration-300"
          />

          {/* FACET 3: MID LEFT [DK] (Violet Indigo) */}
          <polygon
            points="25,53 80,82 80,110 25,82"
            fill={hasDK ? "rgba(139, 92, 246, 0.55)" : isDormant ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.06)"}
            stroke={hasDK ? "#8B5CF6" : isDormant ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.25)"}
            strokeWidth={hasDK ? "2" : "1.2"}
            className="transition-all duration-300"
          />

          {/* FACET 4: MID RIGHT [FS] (Emerald Green) */}
          <polygon
            points="80,82 135,53 135,82 80,110"
            fill={hasFS ? "rgba(16, 185, 129, 0.55)" : isDormant ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.06)"}
            stroke={hasFS ? "#10B981" : isDormant ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.25)"}
            strokeWidth={hasFS ? "2" : "1.2"}
            className="transition-all duration-300"
          />

          {/* FACET 5: BASE FOUNDATION [WA] (Cyber Teal) */}
          <polygon
            points="25,82 80,110 135,82 135,110 80,138 25,110"
            fill={hasWA ? "rgba(20, 184, 166, 0.55)" : isDormant ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.05)"}
            stroke={hasWA ? "#14B8A6" : isDormant ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.22)"}
            strokeWidth={hasWA ? "2" : "1.2"}
            className="transition-all duration-300"
          />

          {/* FACET 6: CENTRAL REACTOR CORE [AS] (Radiant Gold) */}
          {hasAS ? (
            <>
              <circle cx="80" cy="82" r="14" fill="rgba(229, 178, 29, 0.3)" className="animate-ping" />
              <circle cx="80" cy="82" r="10" fill="#E5B21D" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
              <circle cx="80" cy="82" r="4" fill="#FFFFFF" />
            </>
          ) : !isDormant ? (
            <circle cx="80" cy="82" r="5" fill="#E5B21D" className="animate-pulse" />
          ) : (
            <circle cx="80" cy="82" r="3" fill="rgba(255,255,255,0.25)" />
          )}

          {/* Internal Wireframe Lines */}
          <line x1="80" y1="24" x2="80" y2="138" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2,2" />
        </svg>

        {/* Pulse beacon badge when active */}
        {!isDormant && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B21D] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E5B21D]" />
          </span>
        )}
      </div>

      {/* Assembly Status Caption */}
      <div className="mt-2 text-center">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider">
          {isDormant ? (
            <span className="text-slate-400">0 / 21 &middot; DORMANT AT ZERO</span>
          ) : totalItems <= 3 ? (
            <span className="text-[#E5B21D] font-bold">1 BLOCK ASSEMBLED (2-4 WKS)</span>
          ) : (
            <span className="text-[#E5B21D] font-bold">MULTI-BLOCK SPRINT CADENCE</span>
          )}
        </div>

        {/* Color-Coded Engine Badges */}
        <div className="flex items-center justify-center gap-1 mt-1.5 flex-wrap">
          {DOMAIN_CONFIGS.map((cfg) => {
            const isActive = activeDomainCodes.has(cfg.code);
            return (
              <span
                key={cfg.code}
                className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded transition-all duration-300 ${
                  isActive
                    ? `${cfg.pillClass} shadow-[0_0_8px_${cfg.accentHex}40]`
                    : "bg-white/5 text-slate-500 border border-white/5"
                }`}
              >
                [{cfg.code}]
              </span>
            );
          })}
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
  const [isWikiModalOpen, setIsWikiModalOpen] = useState<boolean>(false);

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

  // Outcome selection metrics
  const catalogCount = selectedIds.size;
  const hasAgentic = agenticNotes.trim().length > 0;
  const totalItems = catalogCount + (hasAgentic ? 1 : 0);

  // Group selected items by domain code
  const activeDomainCodes = useMemo(() => {
    const codes = new Set<string>();
    Array.from(selectedIds).forEach((id) => {
      const it = PUBLIC_CATALOG_ITEMS.find((c) => c.id === id);
      const dom = DOMAIN_CONFIGS.find((d) => d.id === it?.domainId);
      if (dom) codes.add(dom.code);
    });
    if (hasAgentic) codes.add("AS");
    return codes;
  }, [selectedIds, hasAgentic]);

  const activeDomainsCount = activeDomainCodes.size;

  // Active domain for cockpit modal
  const activeDomainConfig = DOMAIN_CONFIGS.find((d) => d.id === activeModalDomainId);

  // Submit quote handler
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
      const domain = DOMAIN_CONFIGS.find((d) => d.id === item?.domainId);
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
      className="bg-[#070E17] text-slate-100 selection:bg-[#E5B21D]/30 flex flex-col"
      style={{
        backgroundImage: "radial-gradient(ellipse 90% 45% at 50% -5%, rgba(229, 178, 29, 0.08), transparent 70%)",
      }}
    >
      
      {/* 1. COMPACT COMMAND BAR (TIGHT, EXECUTIVE, FITS IN VIEW) */}
      <header className="bg-[#0B1624]/95 backdrop-blur-md border-b border-white/10 text-white sticky top-[69px] md:top-[85px] z-30 shadow-xl shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4">
            
            {/* Left: Brand Lockup */}
            <div className="flex items-center gap-2 justify-start shrink-0">
              <TheBlockLogo variant="gold" size="sm" showWordmark={false} />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                THE BLOCK
              </span>
            </div>

            {/* Center: The Core Question with Gold Ting Quotes */}
            <div className="flex items-center justify-center text-center px-1">
              <p className="font-display italic text-sm sm:text-base lg:text-lg text-[#F7F5EE] tracking-tight leading-none md:whitespace-nowrap">
                <span className="text-[#E5B21D] font-serif not-italic text-base sm:text-lg lg:text-xl mr-1 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&ldquo;</span>
                What do you want your business to be able to do?
                <span className="text-[#E5B21D] font-serif not-italic text-base sm:text-lg lg:text-xl ml-0.5 select-none drop-shadow-[0_0_8px_rgba(229,178,29,0.35)]">&rdquo;</span>
              </p>
            </div>

            {/* Right: Wiki Protocol Link & Delivery Anchor */}
            <div className="flex items-center justify-end gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsWikiModalOpen(true)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="View delivery protocol specification"
              >
                Protocol Wiki &middot; 3 Rules
              </button>
              <div
                onClick={() => setIsWikiModalOpen(true)}
                role="button"
                tabIndex={0}
                className="px-2.5 py-1 rounded bg-[#E5B21D]/10 hover:bg-[#E5B21D]/20 border border-[#E5B21D]/30 text-[11px] font-mono text-[#E5B21D] font-bold flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                <span>1 Block = 2-4 Wks</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. PRIMARY SPOT: ASSEMBLE YOUR BUSINESS CAPABILITIES (COMPACT FLIGHT DECK) */}
      <section className="pt-3 pb-2 max-w-7xl mx-auto px-4 sm:px-6 w-full shrink-0">
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0B1624]/90 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Visualizer: Gamified Isometric 3D Reactor Block */}
            <div className="md:col-span-4 flex justify-center">
              <GamifiedIsometricBlock
                totalItems={totalItems}
                activeDomainCodes={activeDomainCodes}
              />
            </div>

            {/* Flight Deck HUD: Assembly Telemetry */}
            <div className="md:col-span-8 space-y-2.5">
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5B21D] shadow-[0_0_8px_#E5B21D] animate-pulse" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E5B21D]">
                      CONFIGURATION MACHINE
                    </span>
                    <span className="text-slate-600 font-mono text-xs">&middot;</span>
                    <span className="text-[11px] font-mono text-slate-300">
                      6 Discrete Engines
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                    Assemble Your Business Capabilities
                  </h2>
                </div>

                {/* Instant Clean Slate / Reset Control */}
                {totalItems > 0 && (
                  <button
                    type="button"
                    onClick={handleResetScope}
                    className="px-2.5 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Reset to 0</span>
                    <span>&times;</span>
                  </button>
                )}
              </div>

              {/* Shrunk-Down Telemetry Bar */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 font-mono text-xs">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Outcomes</span>
                  <div className="text-base font-bold text-white flex items-baseline gap-1 mt-0.5">
                    <span className={totalItems > 0 ? "text-[#E5B21D]" : "text-white"}>{totalItems}</span>
                    <span className="text-slate-500 text-[10px]">/ 21</span>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Active Engines</span>
                  <div className="text-base font-bold text-white flex items-baseline gap-1 mt-0.5">
                    <span className={activeDomainsCount > 0 ? "text-[#E5B21D]" : "text-white"}>{activeDomainsCount}</span>
                    <span className="text-slate-500 text-[10px]">/ 6</span>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Delivery Unit</span>
                  <div className="text-xs font-bold text-[#E5B21D] mt-0.5 truncate">
                    1 Block <span className="text-slate-400 font-normal text-[10px]">(2-4 Wks)</span>
                  </div>
                </div>

                <div className="hidden sm:block p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Draft Memory</span>
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Auto-Saved</span>
                  </div>
                </div>
              </div>

              {/* Instructional Prompt Banner */}
              <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                <span>Select any of the 6 blocks below to explore and configure capabilities:</span>
                <span className="text-[#E5B21D] font-bold hidden sm:inline">Clean slate at 0</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 6 EQUAL-SIZED BLOCKS: 3D MODULAR BLOCKS, FUN, DISTINCT COLORS, HIT IT AND EXPLORE IT */}
      <section className="pt-2 pb-2 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {DOMAIN_CONFIGS.map((cfg, idx) => {
            const isAgentic = cfg.id === "agentic_systems";
            const blockNum = String(idx + 1).padStart(2, "0");
            const domainItems = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === cfg.id);
            const domainSelectedCount = isAgentic
              ? hasAgentic ? 1 : 0
              : domainItems.filter((it) => selectedIds.has(it.id)).length;
            const isBlockActive = domainSelectedCount > 0;

            return (
              <div
                key={cfg.id}
                onClick={() => setActiveModalDomainId(cfg.id)}
                role="button"
                tabIndex={0}
                className={`relative rounded-xl border transition-all duration-200 flex flex-col justify-between select-none group cursor-pointer overflow-hidden min-h-[160px] sm:min-h-[170px] hover:-translate-y-1 active:translate-y-0.5 ${
                  isBlockActive
                    ? "bg-[#0E1E32]"
                    : "bg-[#0B1624] hover:bg-[#0E1E32]/80"
                }`}
                style={{
                  borderColor: isBlockActive ? `${cfg.accentHex}80` : "rgba(255,255,255,0.12)",
                  boxShadow: isBlockActive
                    ? `0 6px 0 ${cfg.accentHex}99, 0 10px 0 #02060C, 0 16px 26px rgba(0,0,0,0.85), 0 0 25px ${cfg.accentHex}25`
                    : `0 6px 0 ${cfg.accentHex}30, 0 9px 0 #02060C, 0 12px 20px rgba(0,0,0,0.7)`,
                }}
              >
                {/* 3D Beveled Modular Block Cap / Roof Facet */}
                <div
                  className="px-3.5 py-1.5 border-b flex items-center justify-between transition-colors duration-200"
                  style={{
                    background: isBlockActive
                      ? `linear-gradient(90deg, ${cfg.accentHex}30, ${cfg.accentHex}10)`
                      : "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
                    borderColor: isBlockActive ? `${cfg.accentHex}50` : "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Block index and modular registration pins */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-all"
                      style={{
                        backgroundColor: isBlockActive ? cfg.accentHex : "rgba(255,255,255,0.3)",
                        boxShadow: isBlockActive ? `0 0 6px ${cfg.accentHex}` : "none",
                      }}
                    />
                    <span
                      className="font-mono text-[9px] font-bold tracking-widest uppercase"
                      style={{ color: cfg.accentHex }}
                    >
                      BLOCK {blockNum} &middot; [{cfg.code}]
                    </span>
                  </div>

                  {/* Archetype Badge */}
                  <span className={`text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${cfg.pillClass}`}>
                    {cfg.badge}
                  </span>
                </div>

                {/* Block Body: Icon Plinth + Domain Core */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                    {/* Tactile 3D Modular Icon Plinth */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border shrink-0 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-105"
                      style={{
                        backgroundColor: isBlockActive ? `${cfg.accentHex}22` : "rgba(0,0,0,0.5)",
                        borderColor: isBlockActive ? `${cfg.accentHex}60` : "rgba(255,255,255,0.12)",
                        boxShadow: isBlockActive
                          ? `inset 0 2px 4px rgba(255,255,255,0.15), 0 0 12px ${cfg.accentHex}35`
                          : "inset 0 2px 4px rgba(0,0,0,0.6)",
                      }}
                    >
                      <DomainBlockIcon code={cfg.code} className="w-6 h-6" color={cfg.accentHex} />
                    </div>

                    {/* Title & Scope Thesis */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-white leading-tight truncate">
                        {cfg.shortName}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed mt-1">
                        {cfg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Block Bottom Shelf: LED Metric + Recessed Configure Button */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono mt-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full transition-colors"
                        style={{
                          backgroundColor: isBlockActive ? cfg.accentHex : "rgba(255,255,255,0.25)",
                          boxShadow: isBlockActive ? `0 0 6px ${cfg.accentHex}` : "none",
                        }}
                      />
                      <span className={isBlockActive ? "font-bold text-white text-[11px]" : "text-slate-400 text-[11px]"}>
                        {isAgentic
                          ? hasAgentic ? "Mandate Configured" : "0 Configured"
                          : `${domainSelectedCount} of ${domainItems.length} Configured`}
                      </span>
                    </div>

                    <span
                      className="font-serif font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 px-2.5 py-1 rounded transition-all group-hover:translate-x-0.5"
                      style={{
                        color: cfg.accentHex,
                        backgroundColor: `${cfg.accentHex}18`,
                        border: `1px solid ${cfg.accentHex}40`,
                        boxShadow: isBlockActive ? `0 0 10px ${cfg.accentHex}20` : "none",
                      }}
                    >
                      <span>Configure</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. COMPACT SCOPE MANIFEST & DELIVERY QUOTE DOCKED TRAY (TIGHT, 1-PAGE ENGINE) */}
      <footer className="pt-1 pb-4 max-w-7xl mx-auto px-4 sm:px-6 w-full shrink-0">
        <div className="p-3 sm:p-4 rounded-xl bg-[#0B1624]/95 border border-white/15 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            
            {/* Left: Active Scope Summary */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#E5B21D] uppercase tracking-wider">
                  MISSION SCOPE MANIFEST:
                </span>
                <span className="text-xs font-mono text-white font-bold">
                  {totalItems > 0 ? `${totalItems} Outcomes Configured across ${activeDomainsCount} Engines` : "0 Outcomes in Scope"}
                </span>
                <span className="text-slate-500 font-mono text-xs">&middot;</span>
                <span className="text-xs font-mono text-slate-300">
                  1 Block = 2 to 4 Weeks
                </span>
              </div>

              {/* Active Chip list or Empty state */}
              {totalItems > 0 ? (
                <div className="flex flex-wrap gap-1 mt-1.5 max-h-14 overflow-y-auto">
                  {Array.from(selectedIds).map((id) => {
                    const it = PUBLIC_CATALOG_ITEMS.find((item) => item.id === id);
                    const domain = DOMAIN_CONFIGS.find((d) => d.id === it?.domainId);
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] font-mono text-slate-200"
                      >
                        <span className="font-bold text-[#E5B21D]">[{domain?.code}]</span>
                        <span className="truncate max-w-[160px]">{it?.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleOutcome(id);
                          }}
                          className="text-slate-400 hover:text-rose-400 font-bold cursor-pointer"
                        >
                          &times;
                        </button>
                      </span>
                    );
                  })}
                  {hasAgentic && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0E1E32] text-[#E5B21D] border border-[#E5B21D]/40 text-[10px] font-mono">
                      [AS] Bespoke Mandate
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  Click any of the 6 blocks above to configure outcomes. Starts clean at 0.
                </p>
              )}
            </div>

            {/* Right: Instant Trigger */}
            <div className="flex items-center gap-2 shrink-0">
              {totalItems > 0 && (
                <button
                  type="button"
                  onClick={handleResetScope}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-rose-300 text-xs font-mono transition-colors cursor-pointer"
                >
                  Clear to 0
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="py-2.5 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,178,29,0.3)] cursor-pointer"
              >
                <span>Request Delivery Quote &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      </footer>

      {/* 5. FOCUSED CONFIGURATOR COCKPIT MODAL (WHERE THE USER EXPLORES & CONFIGURES DETAILS) */}
      {activeModalDomainId && activeDomainConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070E17]/90 backdrop-blur-md">
          <div
            className="bg-[#0B1624] text-white rounded-2xl border shadow-2xl max-w-5xl w-full h-[88vh] max-h-[780px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            style={{ borderColor: `${activeDomainConfig.accentHex}60` }}
          >
            
            {/* Cockpit Header with Domain Color */}
            <div
              className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4 shrink-0"
              style={{
                borderTop: `3px solid ${activeDomainConfig.accentHex}`,
              }}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl border shrink-0 flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${activeDomainConfig.accentHex}20`,
                    borderColor: `${activeDomainConfig.accentHex}60`,
                    boxShadow: `0 0 15px ${activeDomainConfig.accentHex}30`,
                  }}
                >
                  <DomainBlockIcon code={activeDomainConfig.code} className="w-7 h-7" color={activeDomainConfig.accentHex} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: activeDomainConfig.accentHex,
                        color: "#070E17",
                      }}
                    >
                      CONFIGURATOR [{activeDomainConfig.code}]
                    </span>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      {activeDomainConfig.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {activeDomainConfig.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {activeDomainConfig.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalDomainId(null)}
                  className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold text-base cursor-pointer transition-colors"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Cockpit Body: Standard Catalog Domains (LD, IT, DK, FS, WA) */}
            {activeModalDomainId !== "agentic_systems" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 flex-1 overflow-hidden bg-[#0B1624]">
                
                {/* Left 7 cols: Capability Tiles */}
                <div className="lg:col-span-7 flex flex-col min-h-0">
                  <div className="flex items-center justify-between gap-2 mb-2.5 shrink-0">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: activeDomainConfig.accentHex }}>
                      Available Capabilities ({PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomainConfig.id).length})
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Click tile to toggle scope
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 overflow-y-auto pr-1 flex-1">
                    {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === activeDomainConfig.id).map((item) => {
                      const isChecked = selectedIds.has(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleOutcome(item.id)}
                          className={`p-3.5 rounded-xl border transition-all duration-150 cursor-pointer select-none flex flex-col justify-between ${
                            isChecked
                              ? "bg-[#0E1E32] text-white ring-1 shadow-[0_0_15px_rgba(229,178,29,0.2)]"
                              : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/25 text-slate-200"
                          }`}
                          style={{
                            borderColor: isChecked ? activeDomainConfig.accentHex : undefined,
                            boxShadow: isChecked ? `0 0 12px ${activeDomainConfig.accentHex}35` : undefined,
                          }}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                                style={{
                                  backgroundColor: isChecked ? activeDomainConfig.accentHex : "rgba(255,255,255,0.1)",
                                  color: isChecked ? "#070E17" : "#CBD5E1",
                                }}
                              >
                                {item.tagline || activeDomainConfig.code}
                              </span>
                              <div
                                className="w-4 h-4 rounded flex items-center justify-center border text-[10px] font-bold shrink-0 transition-colors"
                                style={{
                                  backgroundColor: isChecked ? activeDomainConfig.accentHex : "#070E17",
                                  borderColor: isChecked ? activeDomainConfig.accentHex : "rgba(255,255,255,0.3)",
                                  color: "#070E17",
                                }}
                              >
                                {isChecked ? "✓" : ""}
                              </div>
                            </div>

                            <h4 className="font-serif text-xs sm:text-sm font-bold text-white leading-snug">
                              {item.name}
                            </h4>

                            <p className="text-[11px] mt-1.5 line-clamp-2 text-slate-300 leading-relaxed font-sans">
                              {item.outcome.split("Success check:")[0]?.trim() || item.outcome}
                            </p>
                          </div>

                          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                            <span style={{ color: isChecked ? activeDomainConfig.accentHex : "#94A3B8" }} className="font-bold">
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

                {/* Right 5 cols: Operating Context Window */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E17] p-4 rounded-xl border border-white/10 min-h-0">
                  <div className="flex flex-col flex-1 min-h-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold block mb-1">
                      OPERATING CONTEXT WINDOW
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white">
                      State Live Systems &amp; Constraints
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      What systems are in play (e.g. ERP, 3PL, legacy database), or what delivery hurdles should we know?
                    </p>

                    <textarea
                      value={generalNotes}
                      onChange={(e) => handleGeneralNotesChange(e.target.value)}
                      spellCheck={true}
                      placeholder="e.g. Current ERP cutover off-track by 6 weeks; legacy flat files failing; need independent steering..."
                      className="w-full flex-1 min-h-[160px] mt-2.5 p-3 text-xs rounded-lg border border-white/20 bg-[#0B1624] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] resize-none"
                    />
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveModalDomainId(null)}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,178,29,0.3)] cursor-pointer"
                    >
                      <span>Apply &amp; Return to Flight Deck &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              /* Cockpit Body: Agentic Systems & Bespoke Software (Configurator 06) */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 flex-1 overflow-hidden bg-[#0B1624]">
                
                {/* Left 7 cols: Seeds & Architectural Mandates */}
                <div className="lg:col-span-7 flex flex-col min-h-0 space-y-3.5 overflow-y-auto pr-1">
                  <div>
                    <label className="text-xs font-mono font-bold text-[#E5B21D] block mb-2 uppercase tracking-wider">
                      Architectural Mandate Seeds (Click to inject into Context):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {AGENTIC_IDEA_SEEDS.map((seed) => {
                        const isAdded = agenticNotes.includes(seed);
                        return (
                          <button
                            key={seed}
                            type="button"
                            onClick={() => addSeedToAgentic(seed)}
                            className={`text-left text-xs p-2.5 rounded-xl border font-mono transition-all flex items-center justify-between gap-2 cursor-pointer ${
                              isAdded
                                ? "bg-[#0E1E32] border-[#E5B21D] text-white ring-1 ring-[#E5B21D]"
                                : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                            }`}
                          >
                            <span className="truncate">{seed}</span>
                            <span className="text-[#E5B21D] font-bold text-sm shrink-0">
                              {isAdded ? "✓" : "+"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Anti-vibe-coding standard */}
                  <div className="p-3 rounded-xl bg-white/5 border border-[#E5B21D]/30 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#E5B21D] shrink-0 shadow-[0_0_6px_#E5B21D]" />
                    <p className="text-[11px] text-slate-200 font-mono leading-relaxed">
                      <strong>The idigdata Standard:</strong> No uninspected vibe-coding. Every agentic system ships with automated verification suites, typed schemas, and commits directly into company repositories.
                    </p>
                  </div>
                </div>

                {/* Right 5 cols: Bespoke Mandate Editor */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E17] p-4 rounded-xl border border-white/10 min-h-0">
                  <div className="flex flex-col flex-1 min-h-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B21D] font-bold block mb-1">
                      BESPOKE MANDATE WINDOW
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Describe Custom Mandate
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Specify private AI runtimes, custom API endpoints, event triggers, or integrations.
                    </p>

                    <textarea
                      value={agenticNotes}
                      onChange={(e) => handleAgenticNotesChange(e.target.value)}
                      spellCheck={true}
                      placeholder="e.g. Build an autonomous multi-agent pipeline that ingests daily 3PL freight invoices, validates against contract rate cards, and writes approved adjustments into NetSuite via REST API..."
                      className="w-full flex-1 min-h-[160px] mt-2.5 p-3 text-xs rounded-lg border border-white/20 bg-[#0B1624] text-white font-sans placeholder:text-slate-500 focus:outline-none focus:border-[#E5B21D] resize-none"
                    />
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveModalDomainId(null)}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,178,29,0.3)] cursor-pointer"
                    >
                      <span>Apply Mandate &amp; Return &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* 6. PROTOCOL SPEC / WIKI MODAL (DISTINCT INSTRUCTIONS, NOT CLUTTERING MAIN SCREEN) */}
      {isWikiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/85 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5B21D] text-[#070E17] font-bold uppercase">
                  PROTOCOL SPECIFICATION
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                  How The Block Works: 3 Delivery Rules
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsWikiModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono text-[#E5B21D] font-bold text-[11px] block">&sect; 01.0 Outcomes Over Headcounts</span>
                <p>
                  You do not buy generic advisory hours, open-ended retainers, or junior consultant headcounts. You select discrete, verifiable business capabilities your company needs to operate effectively.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-mono text-[#E5B21D] font-bold text-[11px] block">&sect; 02.0 Operating Context &amp; Reality</span>
                <p>
                  Scoping high-velocity delivery requires knowing which ERPs are live, what legacy databases must not break, and where past integrators stalled. State your reality in the Context Window so our team quotes an accurate block allocation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#0E1E32] border border-[#E5B21D]/40 space-y-1">
                <span className="font-mono text-[#E5B21D] font-bold text-[11px] block">&sect; 03.0 The Delivery Standard: 1 Block = 2 to 4 Weeks</span>
                <p className="text-white">
                  A Block is a discrete 2 to 4 week execution unit: 2 weeks of dedicated hands-on engineering build sprint, followed by 1 to 2 weeks of verification suites, test scenarios, and cutover stabilization. Zero open retainers.
                </p>
              </div>
            </div>

            <div className="p-3 border-t border-white/10 bg-[#070E17] flex justify-end">
              <button
                type="button"
                onClick={() => setIsWikiModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#E5B21D] text-[#070E17] font-serif font-bold text-xs uppercase cursor-pointer"
              >
                Close Wiki
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. DELIVERY QUOTE REQUEST MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E17]/85 backdrop-blur-md">
          <div className="bg-[#0B1624] text-white rounded-2xl border border-white/20 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
            
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#070E17] flex items-start justify-between gap-4">
              <div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider uppercase bg-[#E5B21D] text-[#070E17]">
                  THE BLOCK
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                  Request Delivery Quote on Scope
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Send your selected capabilities to our principals. We review requirements and quote exact block allocations.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3.5 flex-1 bg-[#0B1624]">
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
                    className="px-5 py-2 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase cursor-pointer"
                  >
                    Close Configurator
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono flex items-center justify-between text-slate-300">
                    <span>Configured Outcomes: <strong className="text-white">{totalItems} active</strong></span>
                    <strong className="text-[#E5B21D]">1 Block = 2 to 4 Weeks</strong>
                  </div>

                  {quoteErrorMsg && (
                    <div className="p-2.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200">
                      {quoteErrorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                        className="w-full p-2 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
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
                        className="w-full p-2 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={quoteCompany}
                        onChange={(e) => setQuoteCompany(e.target.value)}
                        placeholder="Acme Operations LLC"
                        className="w-full p-2 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
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
                        className="w-full p-2 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D]"
                      />
                    </div>
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
                      rows={2}
                      spellCheck={true}
                      placeholder="Note any critical ERPs, warehouse 3PLs, or past delivery hurdles..."
                      className="w-full p-2 text-xs rounded-lg border border-white/20 bg-[#070E17] text-white focus:outline-none focus:border-[#E5B21D] font-sans"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={quoteStatus === "submitting"}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#E5B21D] hover:bg-amber-400 text-[#070E17] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,178,29,0.3)] cursor-pointer disabled:opacity-50"
                    >
                      <span>{quoteStatus === "submitting" ? "Transmitting..." : "Transmit Scope & Request Quote →"}</span>
                    </button>
                    <div className="text-[9px] font-mono text-center text-slate-400 mt-1.5">
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
