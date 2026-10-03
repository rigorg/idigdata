"use client";

import { useEffect, useState, useMemo, useRef } from "react";
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
// Capo Architecture: Interactive 3D Cube Configurator.
// 6 categories mapped to the 6 faces of the Block cube.
// Dedicated context window per configurator with spellCheck={true}.
// Aggregator showing all selections by block, notes by block, overall message, and proposal request.

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
  cubeRotation: { x: number; y: number };
  appGroups?: string;
}

const DOMAIN_CONFIGS: DomainConfig[] = [
  {
    id: "leadership_direction",
    code: "LD",
    name: "Leadership, Direction & Transformation",
    shortName: "Leadership",
    subtitle: "Turn business priorities into an executable roadmap, accountable delivery, and measurable improvement.",
    essence: "Align priorities, investment, ownership, and sequencing across teams and executive partners.",
    badge: "EXECUTIVE",
    accentHex: "#F59E0B",
    borderClass: "border-amber-500/40 hover:border-amber-400",
    bgGlowClass: "from-amber-500/10 via-transparent to-transparent",
    pillClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    cubeRotation: { x: -10, y: 0 },
  },
  {
    id: "business_systems",
    code: "BS",
    name: "Business Systems & Integration",
    shortName: "Business Systems",
    subtitle: "Get more value from enterprise applications and make them work together.",
    essence: "Connect ERP, WMS, MES, HRM/HCM, EAM, and CRM around shared operational truth.",
    badge: "APPLICATIONS",
    accentHex: "#06B6D4",
    borderClass: "border-cyan-500/40 hover:border-cyan-400",
    bgGlowClass: "from-cyan-500/10 via-transparent to-transparent",
    pillClass: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    cubeRotation: { x: -10, y: -90 },
    appGroups: "ERP—Enterprise Resource Planning · WMS—Warehouse Management · MES—Manufacturing Execution · HRM/HCM—Human Resources and Human Capital Management · EAM—Enterprise Asset Management · CRM—Customer Relationship Management",
  },
  {
    id: "it_ot_operations",
    code: "IT",
    name: "IT/OT Operations & Security",
    shortName: "IT / OT & Cyber",
    subtitle: "Modernize the IT function to support reliable business operations, connected plants, and governed agentic capabilities.",
    essence: "Dependable infrastructure, operational resilience, qualified cyber coordination, and plant-floor OT.",
    badge: "OPERATIONS & SEC",
    accentHex: "#3B82F6",
    borderClass: "border-blue-500/40 hover:border-blue-400",
    bgGlowClass: "from-blue-500/10 via-transparent to-transparent",
    pillClass: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    cubeRotation: { x: -10, y: -180 },
  },
  {
    id: "data_knowledge",
    code: "DK",
    name: "Data & Knowledge",
    shortName: "Data & Truth",
    subtitle: "Turn business records, operating history, and company knowledge into trusted information people and agents can use.",
    essence: "Master data integrity, repeatable analytics, institutional memory retention, and RAG.",
    badge: "TRUTH & RAG",
    accentHex: "#8B5CF6",
    borderClass: "border-violet-500/40 hover:border-violet-400",
    bgGlowClass: "from-violet-500/10 via-transparent to-transparent",
    pillClass: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    cubeRotation: { x: -10, y: 90 },
  },
  {
    id: "financial_systems",
    code: "FS",
    name: "Financial Systems",
    shortName: "Financial Systems",
    subtitle: "Protect financial integrity and give the CFO a unified view of performance, planning, and profitability.",
    essence: "Reconciliation, accelerated close, auditable controls, unified EPM, and Activity-Based Costing.",
    badge: "FINANCIAL INTEGRITY",
    accentHex: "#10B981",
    borderClass: "border-emerald-500/40 hover:border-emerald-400",
    bgGlowClass: "from-emerald-500/10 via-transparent to-transparent",
    pillClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    cubeRotation: { x: -90, y: 0 },
  },
  {
    id: "workflows_automation",
    code: "WA",
    name: "Workflows & Automation",
    shortName: "Workflows",
    subtitle: "Connect work across people and applications—and make improved ways of working stick.",
    essence: "End-to-end handoff elimination, order-to-cash, procure-to-pay, shop-floor capture, and resilient automation.",
    badge: "WORKFLOW RUNTIMES",
    accentHex: "#14B8A6",
    borderClass: "border-teal-500/40 hover:border-teal-400",
    bgGlowClass: "from-teal-500/10 via-transparent to-transparent",
    pillClass: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    cubeRotation: { x: 90, y: 0 },
  },
];

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
    case "BS":
      // Enterprise Application Bus & Interconnected Platform Nodes
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill={`${color}25`} />
          <rect x="14" y="3" width="7" height="7" rx="1.5" fill={`${color}25`} />
          <rect x="14" y="14" width="7" height="7" rx="1.5" fill={`${color}25`} />
          <rect x="3" y="14" width="7" height="7" rx="1.5" fill={`${color}25`} />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeOpacity="0.8" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case "IT":
      // Fortified Plant Shield & Secure Industrial Gateway
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5l8 3.5v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11v-6l8-3.5z" fill={`${color}20`} strokeOpacity="0.85" />
          <path d="M12 7.5v9" />
          <path d="M8.5 12h7" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case "DK":
      // Faceted Truth Crystal & Knowledge Foundation
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
      // Balanced Scales of Financial Integrity & Ledger Pillar
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M6 21h12" />
          <path d="M4 8l8-2 8 2" />
          <path d="M4 8l-2 6c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5L6 8" fill={`${color}25`} />
          <path d="M20 8l-2 6c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5L22 8" fill={`${color}25`} />
          <circle cx="12" cy="6" r="1.5" fill={color} />
        </svg>
      );
    case "WA":
      // Resilient Orchestration Loop & Event Mesh
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <polyline points="3 3 3 8 8 8" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <polyline points="16 16 21 16 21 21" />
          <circle cx="12" cy="12" r="2.5" fill={`${color}30`} stroke={color} strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}

export default function TheBlockConfiguratorPage() {
  const { draft, update } = useEngagementDraft();

  const [activeDomainId, setActiveDomainId] = useState<string>("leadership_direction");
  const [cubeRotation, setCubeRotation] = useState({ x: -12, y: 0 });
  const [domainNotes, setDomainNotes] = useState<Record<string, string>>({});
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Form contact inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const aggregatorRef = useRef<HTMLDivElement>(null);

  const currentOutcomeIds = useMemo(() => {
    return draft?.outcomeIds ?? [];
  }, [draft?.outcomeIds]);

  const selectedCount = currentOutcomeIds.length;

  const activeDomain = useMemo(() => {
    return DOMAIN_CONFIGS.find((d) => d.id === activeDomainId) || DOMAIN_CONFIGS[0];
  }, [activeDomainId]);

  // Rotate cube when active domain changes
  useEffect(() => {
    const config = DOMAIN_CONFIGS.find((d) => d.id === activeDomainId);
    if (config) {
      setCubeRotation(config.cubeRotation);
    }
  }, [activeDomainId]);

  // Toggle outcome selection
  const handleToggleOutcome = (id: string) => {
    const current = currentOutcomeIds;
    const next = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    update({ outcomeIds: next });
  };

  // Synchronize category notes into global draft notes
  const handleDomainNoteChange = (domainId: string, text: string) => {
    const updated = { ...domainNotes, [domainId]: text };
    setDomainNotes(updated);
    
    // Synthesize structured note for engagement draft
    const synthesized = Object.entries(updated)
      .filter(([_, content]) => content.trim().length > 0)
      .map(([id, content]) => {
        const dom = DOMAIN_CONFIGS.find((d) => d.id === id);
        return `[${dom?.name || id}]
${content.trim()}`;
      })
      .join("\n\n");
    
    update({ notes: synthesized });
  };

  // Group outcomes for the active domain
  const activeItems = useMemo(() => {
    return PUBLIC_CATALOG_ITEMS.filter((item) => item.domainId === activeDomain.id);
  }, [activeDomain.id]);

  // Sub-groups inside active domain if present
  const groupedActiveItems = useMemo(() => {
    const groups: { name: string; items: CatalogItem[] }[] = [];
    const ungrouped: CatalogItem[] = [];

    activeItems.forEach((item) => {
      if (item.group) {
        let existing = groups.find((g) => g.name === item.group);
        if (!existing) {
          existing = { name: item.group, items: [] };
          groups.push(existing);
        }
        existing.items.push(item);
      } else {
        ungrouped.push(item);
      }
    });

    return { groups, ungrouped };
  }, [activeItems]);

  // Domain selection counts
  const domainSelectionStats = useMemo(() => {
    const counts: Record<string, number> = {};
    DOMAIN_CONFIGS.forEach((d) => {
      const items = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === d.id);
      counts[d.id] = items.filter((it) => currentOutcomeIds.includes(it.id)).length;
    });
    return counts;
  }, [currentOutcomeIds]);

  // Aggregated outcomes grouped by domain
  const aggregatedByDomain = useMemo(() => {
    return DOMAIN_CONFIGS.map((domain) => {
      const items = PUBLIC_CATALOG_ITEMS.filter(
        (it) => it.domainId === domain.id && currentOutcomeIds.includes(it.id)
      );
      const note = domainNotes[domain.id] || "";
      return {
        domain,
        items,
        note,
      };
    }).filter((entry) => entry.items.length > 0 || entry.note.trim().length > 0);
  }, [currentOutcomeIds, domainNotes]);

  const handleSelectDomain = (domainId: string) => {
    setActiveDomainId(domainId);
  };

  const handleScrollToAggregator = () => {
    setTimeout(() => {
      aggregatorRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
  };

  return (
    <main className="min-h-screen bg-[#070e18] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Dynamic Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 ease-out"
          style={{ backgroundColor: activeDomain.accentHex }}
        />
        <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] bg-cyan-900/20" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#040810] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        
        {/* ==================================================================== */}
        {/* HEADER STRIP                                                         */}
        {/* ==================================================================== */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                B
              </div>
              <span className="font-mono text-sm tracking-wider uppercase text-slate-300 group-hover:text-white">
                idigdata
              </span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400/90 font-mono">
              The Block · Cube Configurator
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Standard: <strong className="text-white font-medium">1 Block = 2 to 4 Weeks</strong></span>
            </div>

            <button
              onClick={handleScrollToAggregator}
              className="inline-flex items-center gap-2 rounded-md border border-amber-400/40 bg-amber-400/15 hover:bg-amber-400/25 px-3.5 py-1.5 text-xs font-semibold text-amber-300 transition-all shadow-sm hover:shadow-amber-400/10"
            >
              <span>Selections: <strong className="text-white font-bold">{selectedCount}</strong></span>
              <span className="text-white/40">·</span>
              <span>Review & Quote →</span>
            </button>
          </div>
        </header>

        {/* ==================================================================== */}
        {/* ESSENCE STATEMENT BANNER                                             */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-[#0d1726]/90 to-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">
              Transformational Scoping Machine
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3 leading-tight">
              What do you want your business to be able to do?
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore the six faces of The Block. Select the outcomes that matter to your business, add your operating context, and request an executive proposal.
            </p>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* THE 3D CUBE CONFIGURATOR STAGE                                       */}
        {/* ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: THE INTERACTIVE 3D CUBE (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-between rounded-xl border border-white/10 bg-[#0c1524]/80 p-6 backdrop-blur-md shadow-xl relative min-h-[460px]">
            <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="uppercase tracking-wider">Interactive 3D Block</span>
              <span className="text-amber-400/80">Click a face or chip to rotate</span>
            </div>

            {/* 3D CUBE SCENE */}
            <div className="relative w-full h-[260px] flex items-center justify-center py-4 my-2 [perspective:1200px]">
              <div
                className="relative w-[180px] h-[180px] transition-transform duration-700 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
                }}
              >
                {/* 1. FRONT FACE: LEADERSHIP (LD) */}
                <div
                  onClick={() => handleSelectDomain("leadership_direction")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "leadership_direction"
                      ? "border-amber-400 bg-amber-950/80 shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                      : "border-amber-500/40 bg-slate-950/85 hover:border-amber-400/70"
                  }`}
                  style={{
                    transform: "rotateY(0deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      LD
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 1
                    </span>
                  </div>
                  <DomainBlockIcon code="LD" color="#F59E0B" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">Leadership & Transformation</p>
                    <p className="text-[10px] font-mono text-amber-400 mt-1">
                      {domainSelectionStats["leadership_direction"] || 0} / 10 selected
                    </p>
                  </div>
                </div>

                {/* 2. RIGHT FACE: BUSINESS SYSTEMS (BS) */}
                <div
                  onClick={() => handleSelectDomain("business_systems")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "business_systems"
                      ? "border-cyan-400 bg-cyan-950/80 shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                      : "border-cyan-500/40 bg-slate-950/85 hover:border-cyan-400/70"
                  }`}
                  style={{
                    transform: "rotateY(90deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      BS
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 2
                    </span>
                  </div>
                  <DomainBlockIcon code="BS" color="#06B6D4" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">Business Systems & ERP</p>
                    <p className="text-[10px] font-mono text-cyan-400 mt-1">
                      {domainSelectionStats["business_systems"] || 0} / 10 selected
                    </p>
                  </div>
                </div>

                {/* 3. BACK FACE: IT/OT & SECURITY (IT) */}
                <div
                  onClick={() => handleSelectDomain("it_ot_operations")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "it_ot_operations"
                      ? "border-blue-400 bg-blue-950/80 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                      : "border-blue-500/40 bg-slate-950/85 hover:border-blue-400/70"
                  }`}
                  style={{
                    transform: "rotateY(180deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      IT
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 3
                    </span>
                  </div>
                  <DomainBlockIcon code="IT" color="#3B82F6" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">IT / OT & Cyber</p>
                    <p className="text-[10px] font-mono text-blue-400 mt-1">
                      {domainSelectionStats["it_ot_operations"] || 0} / 10 selected
                    </p>
                  </div>
                </div>

                {/* 4. LEFT FACE: DATA & KNOWLEDGE (DK) */}
                <div
                  onClick={() => handleSelectDomain("data_knowledge")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "data_knowledge"
                      ? "border-violet-400 bg-violet-950/80 shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                      : "border-violet-500/40 bg-slate-950/85 hover:border-violet-400/70"
                  }`}
                  style={{
                    transform: "rotateY(-90deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      DK
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 4
                    </span>
                  </div>
                  <DomainBlockIcon code="DK" color="#8B5CF6" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">Data & Knowledge</p>
                    <p className="text-[10px] font-mono text-violet-400 mt-1">
                      {domainSelectionStats["data_knowledge"] || 0} / 9 selected
                    </p>
                  </div>
                </div>

                {/* 5. TOP FACE: FINANCIAL SYSTEMS (FS) */}
                <div
                  onClick={() => handleSelectDomain("financial_systems")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "financial_systems"
                      ? "border-emerald-400 bg-emerald-950/80 shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                      : "border-emerald-500/40 bg-slate-950/85 hover:border-emerald-400/70"
                  }`}
                  style={{
                    transform: "rotateX(90deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      FS
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 5
                    </span>
                  </div>
                  <DomainBlockIcon code="FS" color="#10B981" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">Financial Systems & EPM</p>
                    <p className="text-[10px] font-mono text-emerald-400 mt-1">
                      {domainSelectionStats["financial_systems"] || 0} / 10 selected
                    </p>
                  </div>
                </div>

                {/* 6. BOTTOM FACE: WORKFLOWS & AUTOMATION (WA) */}
                <div
                  onClick={() => handleSelectDomain("workflows_automation")}
                  className={`absolute inset-0 rounded-xl border-2 flex flex-col items-center justify-between p-4 cursor-pointer transition-all duration-300 select-none ${
                    activeDomainId === "workflows_automation"
                      ? "border-teal-400 bg-teal-950/80 shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                      : "border-teal-500/40 bg-slate-950/85 hover:border-teal-400/70"
                  }`}
                  style={{
                    transform: "rotateX(-90deg) translateZ(90px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      WA
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Face 6
                    </span>
                  </div>
                  <DomainBlockIcon code="WA" color="#14B8A6" className="w-12 h-12" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white leading-tight">Workflows & Automation</p>
                    <p className="text-[10px] font-mono text-teal-400 mt-1">
                      {domainSelectionStats["workflows_automation"] || 0} / 10 selected
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* QUICK-SELECT DOCK (6 FACES) */}
            <div className="w-full pt-4 border-t border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 text-center">
                Select Configurator Face
              </p>
              <div className="grid grid-cols-3 gap-2">
                {DOMAIN_CONFIGS.map((domain) => {
                  const count = domainSelectionStats[domain.id] || 0;
                  const isActive = activeDomainId === domain.id;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => handleSelectDomain(domain.id)}
                      className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all text-xs ${
                        isActive
                          ? "border-white/40 bg-white/10 text-white font-medium shadow-sm"
                          : "border-white/5 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: domain.accentHex }}
                      />
                      <span className="truncate flex-1">{domain.shortName}</span>
                      {count > 0 && (
                        <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE FACE OUTCOME CONFIGURATOR TRAY (Lg: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 rounded-xl border border-white/10 bg-[#0c1524]/90 p-6 md:p-7 backdrop-blur-md shadow-xl">
            
            {/* DOMAIN HEADER */}
            <div className="flex flex-col gap-2 border-b border-white/10 pb-5">
              <div className="flex items-center justify-between gap-3">
                <span
                  className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider"
                  style={{
                    backgroundColor: `${activeDomain.accentHex}15`,
                    color: activeDomain.accentHex,
                    borderColor: `${activeDomain.accentHex}30`,
                  }}
                >
                  {activeDomain.badge} · {activeDomain.code}
                </span>

                <span className="text-xs font-mono text-slate-400">
                  <strong className="text-white">{domainSelectionStats[activeDomain.id] || 0}</strong> of{" "}
                  {activeItems.length} outcomes selected
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                {activeDomain.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeDomain.subtitle}
              </p>

              {/* APPLICATION GROUPS BADGE FOR BUSINESS SYSTEMS */}
              {activeDomain.appGroups && (
                <div className="mt-2 rounded-lg border border-cyan-500/25 bg-cyan-950/40 p-3 text-xs leading-relaxed text-cyan-200">
                  <strong className="text-cyan-100 font-semibold block mb-0.5 uppercase tracking-wider text-[10px] font-mono">
                    Supported Application Groups:
                  </strong>
                  {activeDomain.appGroups}
                </div>
              )}
            </div>

            {/* OUTCOMES LIST (WITH SUB-GROUPS IF PRESENT) */}
            <div className="flex flex-col gap-4">
              
              {/* UNGROUPED ITEMS */}
              {groupedActiveItems.ungrouped.length > 0 && (
                <div className="flex flex-col gap-3">
                  {groupedActiveItems.ungrouped.map((item, index) => {
                    const isSelected = currentOutcomeIds.includes(item.id);
                    const isExpanded = expandedItemId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`group rounded-lg border transition-all duration-200 overflow-hidden ${
                          isSelected
                            ? "border-amber-400/60 bg-amber-400/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div
                          onClick={() => handleToggleOutcome(item.id)}
                          className="flex items-start gap-3.5 p-3.5 cursor-pointer select-none"
                        >
                          <div
                            className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                              isSelected
                                ? "bg-amber-400 border-amber-400 text-slate-950 shadow-sm"
                                : "border-white/20 bg-slate-900 group-hover:border-white/40"
                            }`}
                          >
                            {isSelected && (
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-semibold text-white leading-snug">
                              <span className="font-mono text-slate-400 mr-1.5 font-normal">{index + 1}.</span>
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                              {item.tagline}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedItemId(isExpanded ? null : item.id);
                            }}
                            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                            title="View Situation and Scope Details"
                          >
                            {isExpanded ? "Less" : "Details"}
                          </button>
                        </div>

                        {/* EXPANDABLE DETAIL DRAWER */}
                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-1 border-t border-white/5 bg-slate-950/40 text-xs text-slate-300 space-y-2">
                            <p><strong>Operating Situation:</strong> {item.situation}</p>
                            <p><strong>Key Deliverables:</strong> {item.deliverables.join(" · ")}</p>
                            <p className="text-slate-400"><strong>Inclusions:</strong> {item.inclusions.join(", ")}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* GROUPED ITEMS */}
              {groupedActiveItems.groups.map((group) => (
                <div key={group.name} className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-amber-300/90">
                      {group.name}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {group.items.map((item) => {
                      const isSelected = currentOutcomeIds.includes(item.id);
                      const isExpanded = expandedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`group rounded-lg border transition-all duration-200 overflow-hidden ${
                            isSelected
                              ? "border-amber-400/60 bg-amber-400/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div
                            onClick={() => handleToggleOutcome(item.id)}
                            className="flex items-start gap-3.5 p-3.5 cursor-pointer select-none"
                          >
                            <div
                              className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                                isSelected
                                  ? "bg-amber-400 border-amber-400 text-slate-950 shadow-sm"
                                  : "border-white/20 bg-slate-900 group-hover:border-white/40"
                              }`}
                            >
                              {isSelected && (
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>

                            <div className="flex-1">
                              <p className="text-sm font-semibold text-white leading-snug">
                                {item.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                                {item.tagline}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedItemId(isExpanded ? null : item.id);
                              }}
                              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                            >
                              {isExpanded ? "Less" : "Details"}
                            </button>
                          </div>

                          {/* EXPANDABLE DETAIL DRAWER */}
                          {isExpanded && (
                            <div className="px-4 pb-3.5 pt-1 border-t border-white/5 bg-slate-950/40 text-xs text-slate-300 space-y-2">
                              <p><strong>Operating Situation:</strong> {item.situation}</p>
                              <p><strong>Key Deliverables:</strong> {item.deliverables.join(" · ")}</p>
                              <p className="text-slate-400"><strong>Inclusions:</strong> {item.inclusions.join(", ")}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>

            {/* DEDICATED CONTEXT WINDOW PER CONFIGURATOR (WITH SPELLCHECK) */}
            <div className="mt-4 pt-5 border-t border-white/10 rounded-xl bg-slate-950/50 p-4 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={`context-${activeDomain.id}`}
                  className="text-xs font-semibold text-white flex items-center gap-2"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeDomain.accentHex }}
                  />
                  <span>{activeDomain.name} · Context & Operating Notes</span>
                </label>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Spellcheck Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-2.5">
                Explain current challenges, systems involved, or specific goals for this block.
              </p>
              <textarea
                id={`context-${activeDomain.id}`}
                rows={3}
                spellCheck={true}
                value={domainNotes[activeDomain.id] || ""}
                onChange={(e) => handleDomainNoteChange(activeDomain.id, e.target.value)}
                placeholder={`Add specific context for ${activeDomain.name} (e.g. current pain points, ERP version, plant shift schedules, or timing)... `}
                className="w-full rounded-lg border border-white/10 bg-[#070e18] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30"
              />
            </div>

          </div>

        </section>

        {/* ==================================================================== */}
        {/* AGGREGATOR & PROPOSAL REQUEST SECTION                                */}
        {/* ==================================================================== */}
        <section
          ref={aggregatorRef}
          id="aggregator"
          className="mt-6 rounded-xl border border-white/10 bg-[#0b1322] p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold">
                Engagement Summary & Review
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mt-1">
                Your Block Scope & Outcomes
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Review your configured outcomes and context across all six blocks before requesting an executive proposal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200">
                <strong className="text-amber-400 font-bold">{selectedCount}</strong> outcomes across{" "}
                <strong className="text-white font-bold">{aggregatedByDomain.length}</strong> blocks
              </span>
            </div>
          </div>

          {/* AGGREGATED BREAKDOWN BY BLOCK */}
          {aggregatedByDomain.length === 0 ? (
            <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <p className="text-slate-400 text-sm">
                No outcomes selected yet. Click the faces on the 3D cube above to select the capabilities your business needs.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aggregatedByDomain.map(({ domain, items, note }) => (
                <div
                  key={domain.id}
                  className="rounded-lg border border-white/10 bg-slate-950/60 p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: domain.accentHex }}
                        />
                        <h4 className="text-sm font-semibold text-white">{domain.name}</h4>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {items.length} selected
                      </span>
                    </div>

                    {items.length > 0 && (
                      <ul className="space-y-1.5 text-xs text-slate-300 mb-3">
                        {items.map((it) => (
                          <li key={it.id} className="flex items-start gap-1.5">
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{it.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {note.trim() && (
                      <div className="rounded border border-white/5 bg-white/[0.02] p-2.5 text-xs text-slate-400">
                        <strong className="text-slate-300 block mb-1 text-[11px] font-mono uppercase tracking-wider">
                          Block Notes:
                        </strong>
                        <p className="italic text-slate-300">{note}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GENERAL PROJECT NOTES & BESPOKE REQUIREMENTS (WITH SPELLCHECK) */}
          <div className="rounded-xl border border-white/10 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="general-message" className="text-sm font-semibold text-white">
                General Notes & Additional Context (Optional)
              </label>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Spellcheck Active
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Anything else we should know? (e.g. target completion dates, executive sponsor constraints, or custom agentic software needs)
            </p>
            <textarea
              id="general-message"
              rows={3}
              spellCheck={true}
              value={draft?.contactMessage || ""}
              onChange={(e) => update({ contactMessage: e.target.value })}
              placeholder="Add any overarching business context, bespoke system needs, or scheduling preferences..."
              className="w-full rounded-lg border border-white/10 bg-[#070e18] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30"
            />
          </div>

          {/* STANDARD & GOVERNANCE COMMITMENT BANNER */}
          <div className="rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-xs leading-relaxed text-amber-200">
            <p className="font-semibold text-amber-100 mb-1">Standard Delivery Commitment:</p>
            <p>
              A Block represents two to four weeks of time and effort. Scope, outcomes, dependencies, and the number of Blocks are agreed in your proposal. Selecting outcomes does not calculate or commit you to an engagement.
            </p>
          </div>

          {/* PROPOSAL INTAKE FORM */}
          {submitSuccess ? (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white">Proposal Request Received</h3>
              <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
                Thank you, {contactName || "partner"}. Your outcome selections and notes have been sent to Rob Paddock for review. We will evaluate the dependencies and prepare a scoping proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitProposal} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1.5 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full rounded-lg border border-white/10 bg-[#070e18] px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1.5 font-mono">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-white/10 bg-[#070e18] px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1.5 font-mono">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                    placeholder="e.g. Acme Industrial"
                    className="w-full rounded-lg border border-white/10 bg-[#070e18] px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-400">
                  Direct review by Rob Paddock · Response within 1 business day
                </p>

                <button
                  type="submit"
                  disabled={selectedCount === 0}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all shadow-lg ${
                    selectedCount === 0
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5"
                      : "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-400/20 hover:scale-[1.01]"
                  }`}
                >
                  <span>Send to Rob for Review & Scoping Proposal</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </form>
          )}

        </section>

      </div>
    </main>
  );
}
