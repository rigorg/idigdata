"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  PUBLIC_OUTCOME_DOMAINS,
  PUBLIC_CATALOG_ITEMS,
  CatalogItem,
} from "@/lib/catalog";
import {
  useEngagementDraft,
} from "@/lib/engagement-draft";

import { useTheme } from "@/lib/theme";

// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// Delivery Standard: 1 Block = 2 to 4 Weeks. Client selects outcomes, we quote blocks.
// Client-facing voice: strictly collective sovereign voice ("We", "Our team", "Our principals"). NO individual names.
// Storefront Architecture:
// - Light Theme default with instant Dark Theme clicker toggle.
// - Unified Side-by-Side Storefront Workspace (Desktop) & Stacked Flow (Mobile).
// - Interactive 3D Spinning Cube with direct-manipulation physics and shortest-path snap.
// - Inline Outcome Shelf directly alongside the cube: 1-click select, zero modal jumping, zero deep scrolling.
// - Streamlined bottom Scope Review & Scoping Proposal request form.

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
  faceTransform: string;
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
    cubeRotation: { x: -12, y: 0 },
    faceTransform: "rotateY(0deg) translateZ(130px)",
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
    cubeRotation: { x: -12, y: -90 },
    faceTransform: "rotateY(90deg) translateZ(130px)",
    appGroups: "ERP • WMS • MES • HRM/HCM • EAM • CRM",
  },
  {
    id: "it_ot_operations",
    code: "IT",
    name: "IT Operations & Security",
    shortName: "IT Operations",
    subtitle: "Maintain dependable enterprise infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    essence: "Dependable infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    badge: "OPERATIONS & SEC",
    accentHex: "#3B82F6",
    borderClass: "border-blue-500/40 hover:border-blue-400",
    bgGlowClass: "from-blue-500/10 via-transparent to-transparent",
    pillClass: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    cubeRotation: { x: -12, y: -180 },
    faceTransform: "rotateY(180deg) translateZ(130px)",
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
    cubeRotation: { x: -12, y: 90 },
    faceTransform: "rotateY(-90deg) translateZ(130px)",
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
    faceTransform: "rotateX(90deg) translateZ(130px)",
  },
  {
    id: "workflows_automation",
    code: "WA",
    name: "Workflows & Automation",
    shortName: "Workflows",
    subtitle: "Connect work across people and applications-and make improved ways of working stick.",
    essence: "End-to-end handoff elimination, order-to-cash, procure-to-pay, shop-floor capture, and resilient automation.",
    badge: "WORKFLOW RUNTIMES",
    accentHex: "#14B8A6",
    borderClass: "border-teal-500/40 hover:border-teal-400",
    bgGlowClass: "from-teal-500/10 via-transparent to-transparent",
    pillClass: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    cubeRotation: { x: 90, y: 0 },
    faceTransform: "rotateX(-90deg) translateZ(130px)",
  },
];

const FACE_NEIGHBORS: Record<
  string,
  {
    UP: string;
    DOWN: string;
    LEFT: string;
    RIGHT: string;
  }
> = {
  leadership_direction: {
    UP: "workflows_automation",
    DOWN: "financial_systems",
    LEFT: "business_systems",
    RIGHT: "data_knowledge",
  },
  business_systems: {
    UP: "workflows_automation",
    DOWN: "financial_systems",
    LEFT: "it_ot_operations",
    RIGHT: "leadership_direction",
  },
  it_ot_operations: {
    UP: "workflows_automation",
    DOWN: "financial_systems",
    LEFT: "data_knowledge",
    RIGHT: "business_systems",
  },
  data_knowledge: {
    UP: "workflows_automation",
    DOWN: "financial_systems",
    LEFT: "leadership_direction",
    RIGHT: "it_ot_operations",
  },
  financial_systems: {
    UP: "leadership_direction",
    DOWN: "it_ot_operations",
    LEFT: "business_systems",
    RIGHT: "data_knowledge",
  },
  workflows_automation: {
    UP: "it_ot_operations",
    DOWN: "leadership_direction",
    LEFT: "business_systems",
    RIGHT: "data_knowledge",
  },
};

function getCanonicalRotationForDomain(
  targetDomainId: string,
  currentRotation: { x: number; y: number }
): { x: number; y: number } {
  const config = DOMAIN_CONFIGS.find((d) => d.id === targetDomainId) || DOMAIN_CONFIGS[0];
  const targetX = config.cubeRotation.x;

  if (targetDomainId === "financial_systems" || targetDomainId === "workflows_automation") {
    const nearest360 = Math.round(currentRotation.y / 360) * 360;
    return { x: targetX, y: nearest360 };
  }

  const baseTargetY = config.cubeRotation.y;
  let diff = (baseTargetY - currentRotation.y) % 360;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return { x: targetX, y: currentRotation.y + diff };
}

function DomainBlockIcon({
  code,
  className = "w-7 h-7",
  color = "currentColor",
}: {
  code: string;
  className?: string;
  color?: string;
}) {
  switch (code) {
    case "LD":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9.5" strokeOpacity="0.35" strokeDasharray="3 3" />
          <polygon points="12 2.5 15 9.5 22 12 15 14.5 12 21.5 9 14.5 2 12 9 9.5 12 2.5" fill={`${color}25`} />
          <polygon points="12 4.5 14 10 12 12 10 10 12 4.5" fill={color} stroke="none" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "BS":
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
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5l8 3.5v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11v-6l8-3.5z" fill={`${color}20`} strokeOpacity="0.85" />
          <path d="M12 7.5v9" />
          <path d="M8.5 12h7" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case "DK":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3.5h12l4 6.5-10 11.5L2 10l4-6.5z" fill={`${color}20`} strokeOpacity="0.85" />
          <path d="M2 10h20" />
          <path d="M12 21.5L7.5 10 10 3.5" />
          <path d="M12 21.5l4.5-11.5L14 3.5" />
          <circle cx="12" cy="10" r="1.75" fill={color} stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "FS":
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

  // Capo Directives:
  // 1. Default to Light Theme, with an instant Dark Theme toggle clicker.
  // 2. 1 Block = 2 to 4 Weeks standard locked.
  // 3. 58 canonical outcomes across 6 faces.
  // 4. Side-by-side workspace: 3D interactive block on left, live outcome shelf on right (NO MODAL).
  const { theme, setTheme, isLight } = useTheme();
  const [activeDomainId, setActiveDomainId] = useState<string>("leadership_direction");
  const [cubeRotation, setCubeRotation] = useState({ x: -12, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [domainNotes, setDomainNotes] = useState<Record<string, string>>({});
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Form contact inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const aggregatorRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number; rotX: number; rotY: number }>({ x: 0, y: 0, rotX: -12, rotY: 0 });
  const hasDraggedRef = useRef(false);

  const currentOutcomeIds = useMemo(() => {
    return draft?.outcomeIds ?? [];
  }, [draft?.outcomeIds]);

  const selectedCount = currentOutcomeIds.length;

  const activeDomain = useMemo(() => {
    return DOMAIN_CONFIGS.find((d) => d.id === activeDomainId) || DOMAIN_CONFIGS[0];
  }, [activeDomainId]);

  // Handle snap-rotation when clicking quick buttons
  const handleSnapToDomain = (domainId: string) => {
    setActiveDomainId(domainId);
    setCubeRotation((current) => getCanonicalRotationForDomain(domainId, current));
  };

  // Drag physics for natural, responsive 3D cube spinning
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: cubeRotation.x,
      rotY: cubeRotation.y,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const distance = Math.hypot(dx, dy);

    if (distance > 2) {
      hasDraggedRef.current = true;
    }

    if (!hasDraggedRef.current) return;

    const sensitivity = 0.45;
    const startX = dragStartRef.current.rotX;
    const startY = dragStartRef.current.rotY;

    const tiltX = startX - dy * sensitivity;
    const tiltY = startY + dx * sensitivity;
    setCubeRotation({ x: tiltX, y: tiltY });
  };

  // On release: snap right-side-up to closest adjacent face
  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    if (hasDraggedRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const swipeThreshold = 20;

      let nextDomainId = activeDomainId;

      if (absDx > absDy) {
        if (dx < -swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.LEFT ?? activeDomainId;
        } else if (dx > swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.RIGHT ?? activeDomainId;
        }
      } else {
        if (dy < -swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.UP ?? activeDomainId;
        } else if (dy > swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.DOWN ?? activeDomainId;
        }
      }

      setActiveDomainId(nextDomainId);
      setCubeRotation((current) => getCanonicalRotationForDomain(nextDomainId, current));
    }
  };

  // Clicking a face on the cube rotates to that face and switches the active outcome shelf
  const handleFaceClick = (domainId: string) => {
    if (hasDraggedRef.current) return;
    handleSnapToDomain(domainId);
  };

  // Toggle outcome selection with immediate state reflection
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

    const synthesized = Object.entries(updated)
      .filter(([_, content]) => content.trim().length > 0)
      .map(([id, content]) => {
        const dom = DOMAIN_CONFIGS.find((d) => d.id === id);
        return `[${dom?.name || id}]\n${content.trim()}`;
      })
      .join("\n\n");

    update({ notes: synthesized });
  };

  // Active domain catalog items
  const activeItems = useMemo(() => {
    return PUBLIC_CATALOG_ITEMS.filter((item) => item.domainId === activeDomain.id);
  }, [activeDomain]);

  // Grouped active items
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

  const handleScrollToAggregator = () => {
    aggregatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCount === 0 || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const outcomesList = aggregatedByDomain
      .map((entry) => {
        const itemNames = entry.items.map((it) => `  - ${it.name}`).join("\n");
        const contextText = entry.note.trim() ? `\n  Context: ${entry.note.trim()}` : "";
        return `[${entry.domain.name}]\n${itemNames}${contextText}`;
      })
      .join("\n\n");

    const fullMessage = [
      `THE BLOCK PROPOSAL REQUEST (${selectedCount} outcomes selected)`,
      outcomesList,
      (draft?.contactMessage || "").trim() ? `General Context & Notes:\n${(draft?.contactMessage || "").trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const payload = {
      name: contactName.trim(),
      email: contactEmail.trim(),
      company: contactCompany.trim(),
      role: "Block Outcome Buyer",
      message: fullMessage,
      interestType: "applied_agentics",
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(data?.error || "Unable to transmit proposal request. Please retry.");
      }
    } catch {
      setSubmitError("Network connection issue. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 antialiased flex flex-col justify-between ${
        isLight
          ? "bg-[#FBF9F4] text-slate-900 selection:bg-amber-400 selection:text-slate-900"
          : "bg-[#060c16] text-slate-100 selection:bg-amber-400 selection:text-slate-950"
      }`}
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[140px] transition-all duration-700 ease-out ${
            isLight ? "opacity-10" : "opacity-20"
          }`}
          style={{ backgroundColor: activeDomain.accentHex }}
        />
        <div
          className={`absolute top-[45%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] ${
            isLight ? "bg-blue-100/40" : "bg-cyan-900/15"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
        
        {/* ==================================================================== */}
        {/* OPERATIONAL BAR: CONTROLS, DELIVERY STANDARD & THEME CLICKER         */}
        {/* ==================================================================== */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 pt-1 ${
            isLight ? "border-slate-200/80" : "border-white/10"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                isLight
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-900"
                  : "bg-amber-400/10 border-amber-400/30 text-amber-400"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Outcome Configurator
            </span>
            <span className={isLight ? "text-slate-500 text-xs hidden sm:inline" : "text-slate-400 text-xs hidden sm:inline"}>
              Rotate cube or select face to configure scope
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* DELIVERY STANDARD BADGE */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${
                isLight
                  ? "bg-amber-50 border-amber-300 text-amber-900 shadow-xs"
                  : "bg-amber-400/10 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>1 Block = 2 to 4 Weeks</span>
            </div>

            {/* SELECTION COUNTER PILL */}
            <button
              onClick={handleScrollToAggregator}
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-medium transition-all cursor-pointer ${
                selectedCount > 0
                  ? isLight
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-xs hover:bg-emerald-100"
                    : "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25"
                  : isLight
                  ? "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedCount > 0 ? "bg-emerald-500 animate-pulse" : isLight ? "bg-slate-300" : "bg-slate-600"
                }`}
              />
              <span>{selectedCount} selected</span>
              {selectedCount > 0 && <span className="text-[10px]">↓ Review</span>}
            </button>

            {/* THEME CLICKER (LIGHT / DARK TOGGLE) */}
            <button
              type="button"
              onClick={() => setTheme(isLight ? "dark" : "light")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-xs"
                  : "bg-white/10 border-white/20 text-slate-200 hover:bg-white/15"
              }`}
              title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
            >
              {isLight ? (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* STOREFRONT HERO HEADER                                               */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto pt-1 pb-2">
          <p
            className={`text-[11px] font-mono uppercase tracking-[0.25em] font-semibold mb-1 ${
              isLight ? "text-amber-700" : "text-amber-400"
            }`}
          >
            Outcome Configurator
          </p>
          <h1
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight ${
              isLight ? "text-[#142840]" : "text-white"
            }`}
          >
            What do you want your business to be able to do?
          </h1>
          <p
            className={`text-xs sm:text-sm mt-1.5 max-w-2xl mx-auto leading-relaxed ${
              isLight ? "text-slate-600" : "text-slate-300"
            }`}
          >
            Spin the 3D block or tap any face to explore the six transformation disciplines. Select the capabilities you need-we scope the blocks and delivery sequence.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* MASTER STOREFRONT WORKSPACE (SIDE-BY-SIDE ON DESKTOP, STACKED MOBILE)*/}
        {/* ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ------------------------------------------------------------------ */}
          {/* LEFT WING: THE 3D INTERACTIVE BLOCK STATION (lg:col-span-5)        */}
          {/* ------------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            
            {/* 3D DRAG-TO-SPIN CUBE CONTAINER */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing [perspective:1200px] select-none touch-none"
              style={{ touchAction: "none" }}
              title="Drag to spin the 3D block; on release it snaps right-side up to the closest face"
            >
              <div
                className={`relative w-[260px] h-[260px] ${
                  isDragging ? "" : "transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
                }}
              >
                {DOMAIN_CONFIGS.map((domain, index) => {
                  const count = domainSelectionStats[domain.id] || 0;
                  const isFocused = activeDomainId === domain.id;
                  return (
                    <div
                      key={domain.id}
                      onClick={() => handleFaceClick(domain.id)}
                      className={`absolute inset-0 rounded-2xl border-2 flex flex-col justify-between p-4 transition-all duration-300 group touch-none cursor-pointer ${
                        isLight
                          ? "bg-white/95 text-slate-900 shadow-xl shadow-slate-200/60 backdrop-blur-sm"
                          : "bg-slate-950/90 text-white shadow-2xl backdrop-blur-md"
                      } ${
                        isFocused
                          ? isLight
                            ? "ring-2 ring-slate-800 shadow-2xl"
                            : "shadow-[0_0_35px_rgba(255,255,255,0.15)] ring-1 ring-white/40"
                          : isLight
                          ? "hover:border-slate-400"
                          : "hover:border-white/50"
                      }`}
                      style={{
                        transform: domain.faceTransform,
                        backfaceVisibility: "hidden",
                        borderColor: isFocused ? domain.accentHex : isLight ? `${domain.accentHex}80` : `${domain.accentHex}50`,
                        touchAction: "none",
                      }}
                    >
                      {/* FACE TOP BAR */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                            style={{
                              backgroundColor: `${domain.accentHex}20`,
                              color: domain.accentHex,
                              borderColor: `${domain.accentHex}40`,
                            }}
                          >
                            {domain.code}
                          </span>
                          <span
                            className={`text-[10px] font-mono ${
                              isLight ? "text-slate-500" : "text-slate-400"
                            }`}
                          >
                            Face {index + 1}
                          </span>
                        </div>

                        {count > 0 ? (
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 shadow-xs ${
                              isLight
                                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {count} selected
                          </span>
                        ) : (
                          <span className={`text-[10px] font-mono ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                            0 selected
                          </span>
                        )}
                      </div>

                      {/* FACE CENTER ICON & TITLE */}
                      <div className="flex flex-col items-center text-center my-auto py-1">
                        <div
                          className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform duration-300 mb-1.5 ${
                            isLight ? "bg-slate-50 border-slate-200/80" : "bg-white/[0.03] border-white/5"
                          }`}
                        >
                          <DomainBlockIcon code={domain.code} color={domain.accentHex} className="w-10 h-10" />
                        </div>
                        <h3
                          className={`font-serif text-sm font-semibold leading-snug px-1 ${
                            isLight ? "text-[#142840]" : "text-white"
                          }`}
                        >
                          {domain.name}
                        </h3>
                        <p
                          className={`text-[11px] mt-1 line-clamp-2 px-1 leading-relaxed ${
                            isLight ? "text-slate-600" : "text-slate-300"
                          }`}
                        >
                          {domain.subtitle}
                        </p>
                      </div>

                      {/* FACE BOTTOM ACTION HINT */}
                      <div
                        className={`pt-1.5 border-t flex items-center justify-between text-[11px] ${
                          isLight ? "border-slate-200/80" : "border-white/10"
                        }`}
                      >
                        <span className={`font-mono text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          {PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === domain.id).length} outcomes
                        </span>
                        <span
                          className="font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                          style={{ color: domain.accentHex }}
                        >
                          Select Face →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QUICK-SNAP TABS (ALL 6 FACES, DOOR LINK REMOVED) */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
              {DOMAIN_CONFIGS.map((domain) => {
                const count = domainSelectionStats[domain.id] || 0;
                const isFocused = activeDomainId === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => handleSnapToDomain(domain.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs transition-all cursor-pointer ${
                      isFocused
                        ? isLight
                          ? "border-slate-900 bg-slate-900 text-white font-semibold shadow-xs"
                          : "border-white/50 bg-white/15 text-white font-medium shadow-md scale-105"
                        : isLight
                        ? "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 shadow-xs"
                        : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: domain.accentHex }}
                    />
                    <span>{domain.shortName}</span>
                    {count > 0 && (
                      <span
                        className={`font-mono text-[10px] px-1 rounded-full font-bold ${
                          isLight
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ACTIVE BLOCK BRIEFING & OPERATING CONTEXT CARD */}
            <div
              className={`w-full rounded-xl border p-4 transition-all ${
                isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-slate-950/60 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-2 mb-2.5 border-inherit">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeDomain.accentHex }}
                  />
                  <h2 className={`font-serif text-sm font-semibold ${isLight ? "text-[#142840]" : "text-white"}`}>
                    {activeDomain.name}
                  </h2>
                </div>
                <span
                  className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: `${activeDomain.accentHex}15`,
                    color: activeDomain.accentHex,
                    borderColor: `${activeDomain.accentHex}30`,
                  }}
                >
                  {activeDomain.code}
                </span>
              </div>

              <p className={`text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                {activeDomain.essence}
              </p>

              {/* DEDICATED CONTEXT WINDOW FOR THIS BLOCK */}
              <div className="mt-3 pt-3 border-t border-inherit">
                <label
                  htmlFor={`context-${activeDomain.id}`}
                  className={`text-[11px] font-semibold flex items-center justify-between mb-1.5 ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  <span>Operating context for {activeDomain.shortName}</span>
                  <span className="text-[10px] font-normal text-slate-400 font-mono">Optional</span>
                </label>
                <textarea
                  id={`context-${activeDomain.id}`}
                  rows={2}
                  spellCheck={true}
                  value={domainNotes[activeDomain.id] || ""}
                  onChange={(e) => handleDomainNoteChange(activeDomain.id, e.target.value)}
                  placeholder={`Add specific operating context for ${activeDomain.shortName} (e.g. current systems, plant shift schedules, pain points)...`}
                  className={`w-full rounded-lg border px-3 py-2 text-xs transition-colors font-sans ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                      : "bg-[#070e18] border-white/10 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30"
                  }`}
                />
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------------ */}
          {/* RIGHT WING: LIVE OUTCOME STOREFRONT SHELF (INLINE, ZERO MODAL JUMP) */}
          {/* ------------------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            {/* SHELF HEADER STRIP */}
            <div
              className={`rounded-xl border p-3.5 flex items-center justify-between transition-colors ${
                isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-slate-950/70 border-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: activeDomain.accentHex }}
                />
                <div>
                  <h3 className={`font-serif text-base font-semibold ${isLight ? "text-[#142840]" : "text-white"}`}>
                    {activeDomain.name} Capabilities
                  </h3>
                  <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                    Click any outcome to add it to your Block scope
                  </p>
                </div>
              </div>

              <span
                className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border ${
                  (domainSelectionStats[activeDomain.id] || 0) > 0
                    ? isLight
                      ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                      : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                    : isLight
                    ? "bg-slate-100 border-slate-200 text-slate-500"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                {domainSelectionStats[activeDomain.id] || 0} / {activeItems.length} selected
              </span>
            </div>

            {/* OUTCOMES LIST (COMPACT, 1-CLICK TOGGLE, EXPANDABLE DETAILS) */}
            <div className="flex flex-col gap-2">
              
              {/* UNGROUPED OUTCOMES */}
              {groupedActiveItems.ungrouped.map((item) => {
                const isSelected = currentOutcomeIds.includes(item.id);
                const isExpanded = expandedItemId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                      isSelected
                        ? isLight
                          ? "border-amber-500 bg-amber-50/70 shadow-xs ring-1 ring-amber-500/30"
                          : "border-amber-400/60 bg-amber-400/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                        : isLight
                        ? "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-xs"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      onClick={() => handleToggleOutcome(item.id)}
                      className="flex items-start gap-3 p-3 cursor-pointer select-none"
                    >
                      {/* CUSTOM CHECKBOX */}
                      <div
                        className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                          isSelected
                            ? "bg-amber-500 border-amber-500 text-white shadow-xs"
                            : isLight
                            ? "border-slate-300 bg-slate-100 hover:border-slate-400"
                            : "border-white/20 bg-slate-900 hover:border-white/40"
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold leading-snug ${isLight ? "text-slate-900" : "text-white"}`}>
                          {item.name}
                        </p>
                        <p className={`mt-0.5 text-xs leading-relaxed line-clamp-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                          {item.tagline}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedItemId(isExpanded ? null : item.id);
                        }}
                        className={`text-[11px] font-medium px-2 py-1 rounded shrink-0 transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {isExpanded ? "Less" : "Details"}
                      </button>
                    </div>

                    {isExpanded && (
                      <div
                        className={`px-3.5 pb-3 pt-1 border-t text-xs space-y-1.5 ${
                          isLight
                            ? "bg-slate-50/80 border-slate-100 text-slate-700"
                            : "bg-slate-950/40 border-white/5 text-slate-300"
                        }`}
                      >
                        <p><strong className="font-semibold">Operating Situation:</strong> {item.situation}</p>
                        <p><strong className="font-semibold">Deliverables:</strong> {item.deliverables.join(" • ")}</p>
                        {item.inclusions && item.inclusions.length > 0 && (
                          <p className={isLight ? "text-slate-500" : "text-slate-400"}>
                            <strong>Inclusions:</strong> {item.inclusions.join(", ")}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* GROUPED OUTCOMES */}
              {groupedActiveItems.groups.map((group) => (
                <div key={group.name} className="flex flex-col gap-2 pt-1">
                  <div className={`flex items-center gap-2 border-b pb-1 ${isLight ? "border-slate-200" : "border-white/10"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${isLight ? "text-amber-800" : "text-amber-300/90"}`}>
                      {group.name}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => {
                      const isSelected = currentOutcomeIds.includes(item.id);
                      const isExpanded = expandedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                            isSelected
                              ? isLight
                                ? "border-amber-500 bg-amber-50/70 shadow-xs ring-1 ring-amber-500/30"
                                : "border-amber-400/60 bg-amber-400/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                              : isLight
                              ? "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-xs"
                              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div
                            onClick={() => handleToggleOutcome(item.id)}
                            className="flex items-start gap-3 p-3 cursor-pointer select-none"
                          >
                            <div
                              className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                                isSelected
                                  ? "bg-amber-500 border-amber-500 text-white shadow-xs"
                                  : isLight
                                  ? "border-slate-300 bg-slate-100 hover:border-slate-400"
                                  : "border-white/20 bg-slate-900 hover:border-white/40"
                              }`}
                            >
                              {isSelected && (
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-semibold leading-snug ${isLight ? "text-slate-900" : "text-white"}`}>
                                {item.name}
                              </p>
                              <p className={`mt-0.5 text-xs leading-relaxed line-clamp-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                                {item.tagline}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedItemId(isExpanded ? null : item.id);
                              }}
                              className={`text-[11px] font-medium px-2 py-1 rounded shrink-0 transition-colors cursor-pointer ${
                                isLight
                                  ? "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {isExpanded ? "Less" : "Details"}
                            </button>
                          </div>

                          {isExpanded && (
                            <div
                              className={`px-3.5 pb-3 pt-1 border-t text-xs space-y-1.5 ${
                                isLight
                                  ? "bg-slate-50/80 border-slate-100 text-slate-700"
                                  : "bg-slate-950/40 border-white/5 text-slate-300"
                              }`}
                            >
                              <p><strong className="font-semibold">Operating Situation:</strong> {item.situation}</p>
                              <p><strong className="font-semibold">Deliverables:</strong> {item.deliverables.join(" • ")}</p>
                              {item.inclusions && item.inclusions.length > 0 && (
                                <p className={isLight ? "text-slate-500" : "text-slate-400"}>
                                  <strong>Inclusions:</strong> {item.inclusions.join(", ")}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* ==================================================================== */}
        {/* SCOPE SUMMARY & PROPOSAL REQUEST SECTION                            */}
        {/* ==================================================================== */}
        <section
          ref={aggregatorRef}
          id="aggregator"
          className={`mt-4 rounded-2xl border p-5 sm:p-7 backdrop-blur-md transition-colors ${
            isLight ? "bg-white/95 border-slate-200 text-slate-900 shadow-xl" : "bg-[#0a1220]/95 border-white/10 shadow-2xl"
          }`}
        >
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 ${isLight ? "border-slate-200" : "border-white/10"}`}>
            <div>
              <p className={`text-xs font-mono uppercase tracking-[0.2em] font-semibold ${isLight ? "text-amber-700" : "text-amber-400"}`}>
                Storefront Scope Summary
              </p>
              <h2 className={`font-serif text-xl sm:text-2xl font-semibold mt-0.5 ${isLight ? "text-[#142840]" : "text-white"}`}>
                Your Configured Outcomes
              </h2>
              <p className={`text-xs sm:text-sm mt-0.5 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Review your selections across all blocks. When ready, transmit your request for a scoped proposal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => update({ outcomeIds: [] })}
                disabled={selectedCount === 0}
                className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                  selectedCount > 0
                    ? isLight
                      ? "text-slate-700 hover:text-slate-950 border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 cursor-pointer shadow-xs"
                      : "text-slate-200 hover:text-white border-white/20 hover:border-amber-400/50 bg-white/5 hover:bg-white/10 cursor-pointer shadow-sm"
                    : "text-slate-400 border-transparent bg-transparent cursor-not-allowed opacity-50"
                }`}
                title={selectedCount > 0 ? "Clear all selected outcomes" : "No outcomes currently selected"}
              >
                Clear all
              </button>

              <span
                className={`font-mono text-xs px-3.5 py-1.5 rounded-md border ${
                  isLight
                    ? "bg-slate-50 border-slate-200 text-slate-800"
                    : "bg-white/5 border-white/10 text-slate-200"
                }`}
              >
                <strong className={isLight ? "text-amber-700 font-bold" : "text-amber-400 font-bold"}>{selectedCount}</strong> outcomes in{" "}
                <strong className={isLight ? "text-[#142840] font-bold" : "text-white font-bold"}>{aggregatedByDomain.length}</strong> blocks
              </span>
            </div>
          </div>

          {/* BREAKDOWN OF SELECTED OUTCOMES BY BLOCK */}
          {aggregatedByDomain.length === 0 ? (
            <div
              className={`rounded-xl border border-dashed p-6 text-center my-4 ${
                isLight ? "border-slate-300 bg-slate-50/50" : "border-white/15 bg-white/[0.02]"
              }`}
            >
              <p className={`text-xs sm:text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                No outcomes selected yet. Spin the 3D block above and click any outcome to add capabilities to your scope.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              {aggregatedByDomain.map(({ domain, items, note }) => (
                <div
                  key={domain.id}
                  className={`rounded-xl border p-3.5 flex flex-col justify-between ${
                    isLight ? "border-slate-200 bg-slate-50/70" : "border-white/10 bg-slate-950/70"
                  }`}
                >
                  <div>
                    <div className={`flex items-center justify-between border-b pb-2 mb-2 ${isLight ? "border-slate-200" : "border-white/10"}`}>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: domain.accentHex }}
                        />
                        <h4 className={`text-xs font-semibold ${isLight ? "text-[#142840]" : "text-white"}`}>{domain.name}</h4>
                      </div>
                      <button
                        onClick={() => handleSnapToDomain(domain.id)}
                        className={`text-[11px] font-mono hover:underline cursor-pointer ${
                          isLight ? "text-amber-700" : "text-amber-400"
                        }`}
                      >
                        Edit ({items.length}) →
                      </button>
                    </div>

                    {items.length > 0 && (
                      <ul className={`space-y-1 text-xs mb-2 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                        {items.map((it) => (
                          <li key={it.id} className="flex items-start gap-1.5">
                            <span className={isLight ? "text-amber-600 mt-0.5" : "text-amber-400 mt-0.5"}>✓</span>
                            <span>{it.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {note.trim() && (
                      <div
                        className={`rounded-lg border p-2 text-xs ${
                          isLight ? "border-slate-200 bg-white text-slate-600" : "border-white/5 bg-white/[0.02] text-slate-400"
                        }`}
                      >
                        <strong className={`block text-[10px] font-mono uppercase tracking-wider mb-0.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                          Block Context:
                        </strong>
                        <p className="italic">{note}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GENERAL NOTES */}
          <div
            className={`rounded-xl border p-4 mb-4 ${
              isLight ? "border-slate-200 bg-slate-50/50" : "border-white/10 bg-slate-950/50"
            }`}
          >
            <label htmlFor="general-message" className={`text-xs font-semibold block mb-1 ${isLight ? "text-slate-800" : "text-white"}`}>
              General Notes & Scoping Preferences (Optional)
            </label>
            <textarea
              id="general-message"
              rows={2}
              spellCheck={true}
              value={draft?.contactMessage || ""}
              onChange={(e) => update({ contactMessage: e.target.value })}
              placeholder="Add any overarching timeline preferences, key executive sponsors, or integration priorities..."
              className={`w-full rounded-lg border px-3 py-2 text-xs font-sans transition-colors ${
                isLight
                  ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                  : "bg-[#070e18] border-white/10 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30"
              }`}
            />
          </div>

          {/* STANDARD DELIVERY COMMITMENT BANNER */}
          <div
            className={`rounded-xl border p-3.5 text-xs leading-relaxed mb-4 ${
              isLight
                ? "border-amber-300 bg-amber-50/80 text-amber-950"
                : "border-amber-400/30 bg-amber-400/10 text-amber-200"
            }`}
          >
            <p className="font-semibold mb-0.5">Standard Delivery Commitment:</p>
            <p>
              A Block represents two to four weeks of time and effort. Scope, outcomes, dependencies, and the number of Blocks are agreed in your proposal. Selecting outcomes does not calculate or commit you to an engagement.
            </p>
          </div>

          {/* PROPOSAL REQUEST FORM */}
          <form onSubmit={handleSubmitProposal} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Jane Doe"
                  className={`w-full rounded-lg border px-3 py-2 text-xs font-sans transition-colors ${
                    isLight
                      ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none"
                      : "bg-slate-950 border-white/10 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className={`w-full rounded-lg border px-3 py-2 text-xs font-sans transition-colors ${
                    isLight
                      ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none"
                      : "bg-slate-950 border-white/10 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={contactCompany}
                  onChange={(e) => setContactCompany(e.target.value)}
                  placeholder="Acme Operating Co."
                  className={`w-full rounded-lg border px-3 py-2 text-xs font-sans transition-colors ${
                    isLight
                      ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none"
                      : "bg-slate-950 border-white/10 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  }`}
                />
              </div>
            </div>

            {submitError && (
              <p className="text-xs text-rose-500 font-mono mt-1">
                {submitError}
              </p>
            )}

            {submitSuccess ? (
              <div
                className={`rounded-xl border p-4 text-center ${
                  isLight ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                }`}
              >
                <p className="font-serif text-base font-semibold">
                  Proposal Request Transmitted
                </p>
                <p className="text-xs mt-1">
                  Our principals will review your {selectedCount} configured outcomes and assemble your scoping proposal.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={selectedCount === 0 || isSubmitting}
                className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                  selectedCount > 0
                    ? isLight
                      ? "bg-[#142840] hover:bg-[#1B3A5C] text-white shadow-md hover:scale-[1.005]"
                      : "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/15 hover:scale-[1.005]"
                    : "bg-slate-200 text-slate-400 dark:bg-white/5 dark:text-slate-600 cursor-not-allowed opacity-50"
                }`}
              >
                {isSubmitting
                  ? "Transmitting Scope Request..."
                  : `Request Scoping Proposal (${selectedCount} outcomes selected)`}
              </button>
            )}
          </form>

        </section>

      </div>
    </main>
  );
}
