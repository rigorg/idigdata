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
import { TheBlockLogo } from "@/components/TheBlockLogo";

// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// Delivery Standard: 1 Block = 2 to 4 Weeks. Client selects outcomes, we quote blocks.
// Client-facing voice: the firm ("We", "Our team"); Robert Paddock is named as the lead who reviews every proposal.
// Capo Architecture:
// - Big, Centered 3D Spinning Cube Configurator in the center stage.
// - Rich idigdata Light Theme (crisp cream #FBF9F4, deep navy #142840, gold #FACC15, zero greenish wash-out) + Dark Theme toggle.
// - Six face categories underneath the cube to pick from.
// - One primary button to "Enter Configuration Mode" (plus direct face clicks).
// - Configuration Menu Modal/Drawer: 0 auto-selected outcomes, buyer explicitly configures scope.
// - Condensed, well laid-out Configured Outcomes aggregation plate (CPQ preview).
// - Request Scoping Proposal form wired into CPQ engine / "The Block Mine" intake.

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
    accentHex: "#D97706",
    borderClass: "border-amber-500/40 hover:border-amber-500",
    bgGlowClass: "from-amber-500/10 via-transparent to-transparent",
    pillClass: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    cubeRotation: { x: -12, y: 0 },
    faceTransform: "rotateY(0deg) translateZ(140px)",
  },
  {
    id: "business_systems",
    code: "BS",
    name: "Business Systems & Integration",
    shortName: "Business Systems",
    subtitle: "Get more value from enterprise applications and make them work together.",
    essence: "Connect ERP, WMS, MES, HRM/HCM, EAM, and CRM around shared operational truth.",
    badge: "APPLICATIONS",
    accentHex: "#0284C7",
    borderClass: "border-sky-500/40 hover:border-sky-500",
    bgGlowClass: "from-sky-500/10 via-transparent to-transparent",
    pillClass: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
    cubeRotation: { x: -12, y: -90 },
    faceTransform: "rotateY(90deg) translateZ(140px)",
    appGroups: "ERP, WMS, MES, HRM/HCM, EAM, CRM",
  },
  {
    id: "it_ot_operations",
    code: "IT",
    name: "IT Operations & Security",
    shortName: "IT Operations",
    subtitle: "Maintain dependable enterprise infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    essence: "Dependable infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    badge: "OPERATIONS & SEC",
    accentHex: "#2563EB",
    borderClass: "border-blue-500/40 hover:border-blue-500",
    bgGlowClass: "from-blue-500/10 via-transparent to-transparent",
    pillClass: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
    cubeRotation: { x: -12, y: -180 },
    faceTransform: "rotateY(180deg) translateZ(140px)",
  },
  {
    id: "data_knowledge",
    code: "DK",
    name: "Data & Knowledge",
    shortName: "Data & Truth",
    subtitle: "Turn business records, operating history, and company knowledge into trusted information people and agents can use.",
    essence: "Master data integrity, repeatable analytics, institutional memory retention, and RAG.",
    badge: "TRUTH & RAG",
    accentHex: "#7C3AED",
    borderClass: "border-purple-500/40 hover:border-purple-500",
    bgGlowClass: "from-purple-500/10 via-transparent to-transparent",
    pillClass: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
    cubeRotation: { x: -12, y: 90 },
    faceTransform: "rotateY(-90deg) translateZ(140px)",
  },
  {
    id: "financial_systems",
    code: "FS",
    name: "Financial Systems",
    shortName: "Finance & Cost",
    subtitle: "Maintain financial controls, accelerate close, and reconcile operations to finance.",
    essence: "Reconciliation, audit readiness, cost-to-serve, working capital visibility, and margin control.",
    badge: "FINANCE & CONTROLS",
    accentHex: "#0D9488",
    borderClass: "border-teal-500/40 hover:border-teal-500",
    bgGlowClass: "from-teal-500/10 via-transparent to-transparent",
    pillClass: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30",
    cubeRotation: { x: 78, y: 0 },
    faceTransform: "rotateX(-90deg) translateZ(140px)",
  },
  {
    id: "workflows_automation",
    code: "WA",
    name: "Workflows & Automation",
    shortName: "Workflows",
    subtitle: "Eliminate friction between teams and automate operational handoffs.",
    essence: "Order-to-cash, procure-to-pay, frontline mobile capture, and exception routing.",
    badge: "AUTOMATION",
    accentHex: "#DB2777",
    borderClass: "border-pink-500/40 hover:border-pink-500",
    bgGlowClass: "from-pink-500/10 via-transparent to-transparent",
    pillClass: "bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-500/30",
    cubeRotation: { x: -102, y: 0 },
    faceTransform: "rotateX(90deg) translateZ(140px)",
  },
];

const FACE_NEIGHBORS: Record<string, { UP: string; DOWN: string; LEFT: string; RIGHT: string }> = {
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
  const { theme, setTheme, isLight } = useTheme();

  // Active domain currently focused on the 3D block
  const [activeDomainId, setActiveDomainId] = useState<string>("leadership_direction");
  const [cubeRotation, setCubeRotation] = useState<{ x: number; y: number }>({ x: -12, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  // Configuration Mode state (the pop-up / drawer where menus pop up per Capo's direct directive)
  const [configModalDomainId, setConfigModalDomainId] = useState<string | null>(null);

  // Context notes per face
  const [domainNotes, setDomainNotes] = useState<Record<string, string>>({});
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Proposal request contact form inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactNote, setContactNote] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const aggregatorRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number; rotX: number; rotY: number }>({ x: 0, y: 0, rotX: -12, rotY: 0 });
  const hasDraggedRef = useRef(false);

  // Outcomes explicitly selected by the buyer (defaults to 0 on entry)
  const [selectedOutcomeIds, setSelectedOutcomeIds] = useState<string[]>([]);
  const hasInitializedRef = useRef(false);

  // Fresh entry defaults to 0 configured outcomes (clears any stale test drafts)
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      setSelectedOutcomeIds([]);
      update({ outcomeIds: [] });
    }
  }, [update]);

  const selectedCount = selectedOutcomeIds.length;

  const activeDomain = useMemo(() => {
    return DOMAIN_CONFIGS.find((d) => d.id === activeDomainId) || DOMAIN_CONFIGS[0];
  }, [activeDomainId]);

  const configDomain = useMemo(() => {
    if (!configModalDomainId) return null;
    return DOMAIN_CONFIGS.find((d) => d.id === configModalDomainId) || null;
  }, [configModalDomainId]);

  // Outcomes for the active configuration face
  const configFaceItems = useMemo(() => {
    if (!configDomain) return [];
    return PUBLIC_CATALOG_ITEMS.filter((item) => item.domainId === configDomain.id);
  }, [configDomain]);

  // Selection counts per domain
  const domainSelectionStats = useMemo(() => {
    const counts: Record<string, number> = {};
    DOMAIN_CONFIGS.forEach((d) => {
      const items = PUBLIC_CATALOG_ITEMS.filter((it) => it.domainId === d.id);
      counts[d.id] = items.filter((it) => selectedOutcomeIds.includes(it.id)).length;
    });
    return counts;
  }, [selectedOutcomeIds]);

  // Aggregated configured outcomes grouped by domain (for CPQ review)
  const aggregatedByDomain = useMemo(() => {
    return DOMAIN_CONFIGS.map((domain) => {
      const items = PUBLIC_CATALOG_ITEMS.filter(
        (it) => it.domainId === domain.id && selectedOutcomeIds.includes(it.id)
      );
      const note = domainNotes[domain.id] || "";
      return { domain, items, note };
    }).filter((group) => group.items.length > 0 || group.note.trim().length > 0);
  }, [selectedOutcomeIds, domainNotes]);

  // Drag-to-spin cube pointer handling
  const handlePointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: cubeRotation.x,
      rotY: cubeRotation.y,
    };
    hasDraggedRef.current = false;
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      hasDraggedRef.current = true;
    }

    const sensitivity = 0.55;
    const nextRotX = Math.max(-120, Math.min(90, dragStartRef.current.rotX - dy * sensitivity));
    const nextRotY = dragStartRef.current.rotY + dx * sensitivity;
    setCubeRotation({ x: nextRotX, y: nextRotY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);

    if (hasDraggedRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const swipeThreshold = 18;

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

  // Click on a 3D face directly rotates the block and opens configuration
  const handleFaceClick = (domainId: string) => {
    if (hasDraggedRef.current) return;
    setActiveDomainId(domainId);
    setCubeRotation((current) => getCanonicalRotationForDomain(domainId, current));
    setConfigModalDomainId(domainId);
  };

  // Click on one of the six categories underneath the cube
  const handleCategorySelect = (domainId: string) => {
    setActiveDomainId(domainId);
    setCubeRotation((current) => getCanonicalRotationForDomain(domainId, current));
  };

  // Toggle outcome selection (NO auto-select; explicit buyer choice)
  const handleToggleOutcome = (id: string) => {
    setSelectedOutcomeIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      update({ outcomeIds: next });
      return next;
    });
  };

  // Clear all configured outcomes
  const handleClearAll = () => {
    setSelectedOutcomeIds([]);
    update({ outcomeIds: [] });
  };

  // Save notes for a domain
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

  const handleScrollToAggregator = () => {
    aggregatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Submit Scoping Proposal to DigOps CPQ / The Block Mine
  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

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
      `[THE BLOCK SCOPING PROPOSAL]`,
      `Mine: the_block`,
      `Standard: 1 Block = 2 to 4 Weeks`,
      selectedCount > 0
        ? `Configured Outcomes (${selectedCount} selected across ${aggregatedByDomain.length} disciplines):\n${outcomesList}`
        : `No outcomes pre-selected from catalog (direct inquiry).`,
      contactNote.trim() ? `Client Note / Situation:\n${contactNote.trim()}` : "",
      (draft?.contactMessage || "").trim() ? `Additional Context:\n${(draft?.contactMessage || "").trim()}` : "",
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
      source: "website-block",
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
        setSubmitError(data?.error || "Unable to transmit scoping proposal. Please retry.");
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
          ? "bg-[#FBF9F4] text-[#142840] selection:bg-amber-400 selection:text-slate-900"
          : "bg-[#060c16] text-slate-100 selection:bg-amber-400 selection:text-slate-950"
      }`}
    >
      {/* Dynamic Warm Ambient Glow (Zero greenish or cyan tint) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute -top-[12%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[140px] transition-all duration-700 ease-out ${
            isLight ? "opacity-15 bg-amber-200/40" : "opacity-20 bg-amber-500/15"
          }`}
          style={{ backgroundColor: isLight ? undefined : `${activeDomain.accentHex}25` }}
        />
        <div
          className={`absolute bottom-[10%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[160px] ${
            isLight ? "bg-stone-200/50" : "bg-slate-900/40"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-6">
        
        {/* ==================================================================== */}
        {/* OPERATIONAL CONTROL BAR: STANDARD & THEME CLICKER                    */}
        {/* ==================================================================== */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3.5 pt-1 ${
            isLight ? "border-[#E2DCD2]" : "border-white/10"
          }`}
        >
          <div className="flex items-center">
            <TheBlockLogo
              size="md"
              variant="monochrome"
              className={isLight ? "text-[#142840]" : "text-white"}
              showWordmark={true}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* DELIVERY STANDARD BADGE */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${
                isLight
                  ? "bg-[#F3ECE0] border-amber-300 text-[#142840] shadow-xs"
                  : "bg-amber-400/10 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>1 Block = 2 to 4 Weeks</span>
            </div>

            {/* CUSTOM AGENTIC SCOPING LINK */}
            <Link
              href="/block/custom/"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-semibold transition-all ${
                isLight
                  ? "bg-amber-100/70 border-amber-300 text-amber-900 hover:bg-amber-200/80 shadow-xs"
                  : "bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Custom Agentic Scoping →</span>
            </Link>

            {/* SELECTION COUNTER PILL */}
            <button
              onClick={handleScrollToAggregator}
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedCount > 0
                  ? isLight
                    ? "bg-emerald-50 border-emerald-400 text-emerald-900 shadow-xs hover:bg-emerald-100"
                    : "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25"
                  : isLight
                  ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedCount > 0 ? "bg-emerald-500 animate-pulse" : isLight ? "bg-slate-400" : "bg-slate-600"
                }`}
              />
              <span>{selectedCount} configured</span>
              {selectedCount > 0 && <span className="text-[10px]">↓ Review Outcomes</span>}
            </button>

            {/* CLEAR ALL BUTTON */}
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isLight
                    ? "bg-rose-50 border-rose-300 text-rose-700 hover:bg-rose-100 shadow-xs"
                    : "bg-rose-950/30 border-rose-800/40 text-rose-300 hover:bg-rose-950/50"
                }`}
                title="Clear all selected outcomes"
              >
                Clear all
              </button>
            )}

            {/* THEME TOGGLE CLICKER */}
            <button
              type="button"
              onClick={() => setTheme(isLight ? "dark" : "light")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer ${
                isLight
                  ? "bg-white border-slate-300 text-[#142840] hover:bg-slate-100 shadow-xs"
                  : "bg-white/10 border-white/20 text-slate-200 hover:bg-white/15"
              }`}
              title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
            >
              {isLight ? (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
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
        {/* CENTERED HERO STATEMENT                                              */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto pt-1 pb-1">
          <p
            className={`text-[11px] font-mono uppercase tracking-[0.25em] font-bold mb-1.5 ${
              isLight ? "text-amber-800" : "text-amber-400"
            }`}
          >
            Outcome Storefront
          </p>
          <h1
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
              isLight ? "text-[#142840]" : "text-white"
            }`}
          >
            What do you want your business to be able to do?
          </h1>
          <p
            className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            Decades of enterprise leadership distilled into six core disciplines. A new way for any business that needs proven outcomes delivered: organize what you need, align on verified outcomes, and agree on a structured engagement with a clear flight of time.
          </p>
          <p
            className={`text-xs font-mono mt-2 max-w-xl mx-auto ${
              isLight ? "text-amber-900/80 font-medium" : "text-amber-300/80"
            }`}
          >
            Explore the block below. Select outcomes across any discipline to assemble your engagement.
          </p>
        </div>

        {/* CUSTOM AGENTIC DEVELOPMENT CALLOUT BANNER (STABLE CONTAINER) */}
        <div className="w-full max-w-4xl mx-auto px-1 z-10 relative">
          <div
            className={`p-3.5 sm:p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-left transition-all ${
              isLight
                ? "bg-amber-50/80 border-amber-300 text-slate-900 shadow-xs"
                : "bg-amber-950/20 border-amber-500/30 text-slate-100"
            }`}
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
                  Custom Agentic Development
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  1 Block = 2 to 4 Weeks
                </span>
              </div>
              <p className="text-xs sm:text-sm font-serif">
                Looking for a bespoke agentic system connecting your exact databases, ERP, and human-in-the-loop workflows?
              </p>
            </div>
            <Link
              href="/block/custom/"
              className="whitespace-nowrap px-4 py-2 rounded-lg text-xs font-mono font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Launch Custom Scoping Brief →</span>
            </Link>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* GRANDDADDY 3D SPINNING BLOCK (CENTER STAGE)                          */}
        {/* ==================================================================== */}
        <section className="relative flex flex-col items-center justify-center pt-2 pb-6">
          
          {/* DRAG-TO-SPIN 3D CUBE CONTAINER */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-[340px] h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing [perspective:1400px] select-none touch-none"
            style={{ touchAction: "none" }}
            title="Drag to spin the 3D block. Snaps to closest face on release. Click to configure."
          >
            <div
              className={`relative w-[280px] h-[280px] ${
                isDragging ? "" : "transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
              }}
            >
              {DOMAIN_CONFIGS.map((domain) => {
                const count = domainSelectionStats[domain.id] || 0;
                const isFocused = activeDomainId === domain.id;
                return (
                  <div
                    key={domain.id}
                    onClick={() => handleFaceClick(domain.id)}
                    className={`absolute inset-0 rounded-2xl border-2 flex flex-col justify-between p-5 transition-all duration-300 shadow-2xl backdrop-blur-md group touch-none cursor-pointer ${
                      isLight
                        ? isFocused
                          ? "bg-white shadow-[0_12px_40px_rgba(20,40,64,0.18)] ring-2 ring-amber-500/40"
                          : "bg-white/95 hover:bg-white shadow-md hover:shadow-lg"
                        : isFocused
                          ? "bg-slate-950/95 shadow-[0_0_35px_rgba(255,255,255,0.15)] ring-1 ring-white/40"
                          : "bg-slate-950/85 hover:bg-slate-950 hover:border-white/50"
                    }`}
                    style={{
                      transform: domain.faceTransform,
                      backfaceVisibility: "hidden",
                      borderColor: isFocused ? domain.accentHex : isLight ? "#E2DCD2" : `${domain.accentHex}50`,
                      touchAction: "none",
                    }}
                  >
                    {/* FACE TOP BAR */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: `${domain.accentHex}18`,
                            color: domain.accentHex,
                            borderColor: `${domain.accentHex}40`,
                          }}
                        >
                          {domain.code}
                        </span>
                        <span className={`text-[10px] font-mono tracking-wider font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          {domain.badge}
                        </span>
                      </div>

                      {/* SELECTION COUNT PILL */}
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-bold transition-all ${
                          count > 0
                            ? "bg-emerald-500 text-white shadow-xs"
                            : isLight
                            ? "bg-slate-100 text-slate-600 border border-slate-200"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {count > 0 ? `${count} configured` : "0 selected"}
                      </span>
                    </div>

                    {/* FACE CENTER CONTENT */}
                    <div className="my-auto flex flex-col gap-1.5 text-left">
                      <div className="flex items-center gap-2.5">
                        <DomainBlockIcon code={domain.code} color={domain.accentHex} className="w-6 h-6 flex-shrink-0" />
                        <h3
                          className={`font-serif text-lg font-bold leading-snug line-clamp-2 ${
                            isLight ? "text-[#142840]" : "text-white"
                          }`}
                        >
                          {domain.name}
                        </h3>
                      </div>
                      <p className={`text-xs leading-relaxed line-clamp-2 mt-0.5 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        {domain.essence}
                      </p>
                    </div>

                    {/* FACE BOTTOM CTA */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-white/10">
                      <span className="text-[11px] font-mono font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                        Click to configure face →
                      </span>
                      <span className="text-xs text-slate-400">
                        {PUBLIC_CATALOG_ITEMS.filter((i) => i.domainId === domain.id).length} outcomes
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================================================================== */}
          {/* SIX CATEGORIES UNDERNEATH THE BLOCK                                  */}
          {/* ==================================================================== */}
          <div className="w-full max-w-4xl mt-5">
            <p className={`text-xs font-mono uppercase tracking-wider font-semibold text-center mb-2.5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              Select an enterprise discipline to rotate the block and view outcomes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {DOMAIN_CONFIGS.map((domain) => {
                const count = domainSelectionStats[domain.id] || 0;
                const isSelected = activeDomainId === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => handleCategorySelect(domain.id)}
                    className={`flex flex-col items-start justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? isLight
                          ? "bg-white border-amber-500 shadow-md ring-2 ring-amber-500/20"
                          : "bg-white/15 border-white/40 shadow-lg ring-1 ring-white/30"
                        : isLight
                        ? "bg-white/80 hover:bg-white border-[#E2DCD2] hover:border-slate-400 text-slate-700"
                        : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className="font-mono text-xs font-bold px-1.5 py-0.5 rounded border"
                        style={{
                          backgroundColor: `${domain.accentHex}18`,
                          color: domain.accentHex,
                          borderColor: `${domain.accentHex}40`,
                        }}
                      >
                        {domain.code}
                      </span>
                      {count > 0 && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500" title={`${count} configured`} />
                      )}
                    </div>
                    <span className={`font-serif text-xs font-bold mt-2 line-clamp-1 ${isLight ? "text-[#142840]" : "text-white"}`}>
                      {domain.shortName}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {count > 0 ? `${count} configured` : `${PUBLIC_CATALOG_ITEMS.filter((i) => i.domainId === domain.id).length} outcomes`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ==================================================================== */}
          {/* PRIMARY BUTTON TO ENTER CONFIGURATION MODE                           */}
          {/* ==================================================================== */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <button
              onClick={() => setConfigModalDomainId(activeDomainId)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-serif text-base font-bold text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: activeDomain.accentHex,
              }}
            >
              <span>Enter Configuration Mode: {activeDomain.name}</span>
              <span className="font-mono text-xs bg-black/20 px-2.5 py-1 rounded-full">
                {domainSelectionStats[activeDomain.id] || 0} / {PUBLIC_CATALOG_ITEMS.filter((i) => i.domainId === activeDomain.id).length} Selected →
              </span>
            </button>
            <p className={`text-xs font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              Opens outcome selection drawer · Checkboxes to add or remove outcomes
            </p>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* CONFIGURATION MODE POP-UP / DRAWER (WHERE MENUS POP UP)              */}
        {/* ==================================================================== */}
        {configDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
            <div
              className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
                isLight ? "bg-[#FCFAF6] border-[#E2DCD2] text-[#142840]" : "bg-[#0B1420] border-white/15 text-slate-100"
              }`}
            >
              {/* MODAL HEADER */}
              <div
                className={`flex items-start justify-between p-5 sm:p-6 border-b ${
                  isLight ? "bg-white border-[#E2DCD2]" : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-base shadow-sm border mt-0.5"
                    style={{
                      backgroundColor: `${configDomain.accentHex}20`,
                      color: configDomain.accentHex,
                      borderColor: `${configDomain.accentHex}40`,
                    }}
                  >
                    {configDomain.code}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                        {configDomain.badge}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-xs font-mono text-slate-500">
                        {configFaceItems.length} outcomes available
                      </span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug mt-0.5">
                      {configDomain.name}
                    </h2>
                    <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                      {configDomain.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setConfigModalDomainId(null)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    isLight ? "bg-slate-100 hover:bg-slate-200 text-slate-700" : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                  aria-label="Close configuration"
                >
                  ✕
                </button>
              </div>

              {/* MODAL BODY (SCROLLABLE OUTCOMES LIST + NOTES) */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-5">
                
                {/* ACTIVE FACE CONTEXT NOTE INPUT */}
                <div
                  className={`p-4 rounded-xl border ${
                    isLight ? "bg-white border-[#E2DCD2]" : "bg-white/5 border-white/10"
                  }`}
                >
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 text-amber-700 dark:text-amber-300">
                    Specific context or notes for {configDomain.shortName} (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={domainNotes[configDomain.id] || ""}
                    onChange={(e) => handleDomainNoteChange(configDomain.id, e.target.value)}
                    placeholder={`e.g. Current enterprise situation, specific application versions, or constraints for ${configDomain.shortName}...`}
                    className={`w-full rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                      isLight
                        ? "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400"
                        : "bg-slate-900/80 border-white/15 text-white placeholder:text-slate-500"
                    }`}
                  />
                </div>

                {/* OUTCOME SELECTION CHECKLIST */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      Configure Outcomes ({configFaceItems.filter((i) => selectedOutcomeIds.includes(i.id)).length} selected)
                    </span>
                    <div className="flex items-center gap-3">
                      {configFaceItems.some((i) => selectedOutcomeIds.includes(i.id)) && (
                        <button
                          type="button"
                          onClick={() => {
                            const faceIds = new Set(configFaceItems.map((i) => i.id));
                            const next = selectedOutcomeIds.filter((id) => !faceIds.has(id));
                            setSelectedOutcomeIds(next);
                            update({ outcomeIds: next });
                          }}
                          className="text-[11px] font-mono text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                        >
                          Deselect face outcomes
                        </button>
                      )}
                      <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                        Checkboxes add outcomes to your proposal
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {configFaceItems.map((item, idx) => {
                      const isSelected = selectedOutcomeIds.includes(item.id);
                      const isExpanded = expandedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`rounded-xl border transition-all p-3.5 sm:p-4 ${
                            isSelected
                              ? isLight
                                ? "bg-white border-amber-500 shadow-sm ring-1 ring-amber-500/20"
                                : "bg-white/10 border-amber-400/60 shadow-md"
                              : isLight
                              ? "bg-white border-[#E2DCD2] hover:border-slate-400"
                              : "bg-white/5 border-white/10 hover:border-white/25"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {/* CHECKBOX */}
                            <input
                              type="checkbox"
                              id={`outcome-${item.id}`}
                              checked={isSelected}
                              onChange={() => handleToggleOutcome(item.id)}
                              className="w-4 h-4 mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                            />
                            <div className="flex-1">
                              <label
                                htmlFor={`outcome-${item.id}`}
                                className="font-serif text-sm sm:text-base font-bold leading-snug cursor-pointer block"
                              >
                                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold mr-1.5">
                                  #{idx + 1}
                                </span>
                                {item.name}
                              </label>
                              <p className={`text-xs mt-1 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                                {item.tagline}
                              </p>

                              {/* SITUATION & DELIVERABLES TOGGLE */}
                              <div className="mt-2.5">
                                <button
                                  type="button"
                                  onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                                  className={`text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                                    isLight ? "text-amber-800 hover:text-amber-950" : "text-amber-300 hover:text-amber-200"
                                  }`}
                                >
                                  {isExpanded ? "▲ Hide Deliverables & Situation" : "▼ View Deliverables & Situation"}
                                </button>

                                {isExpanded && (
                                  <div
                                    className={`mt-2.5 p-3 rounded-lg border text-xs flex flex-col gap-2 ${
                                      isLight ? "bg-slate-50 border-slate-200 text-slate-800" : "bg-slate-900/90 border-white/10 text-slate-200"
                                    }`}
                                  >
                                    <div>
                                      <strong className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-0.5">
                                        Operating Situation:
                                      </strong>
                                      <p className="leading-relaxed">{item.situation}</p>
                                    </div>

                                    {item.deliverables && item.deliverables.length > 0 && (
                                      <div>
                                        <strong className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                                          Target Deliverables:
                                        </strong>
                                        <ul className="list-disc pl-4 space-y-0.5">
                                          {item.deliverables.map((deliv, dIdx) => (
                                            <li key={dIdx} className="leading-relaxed">
                                              {deliv}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div
                className={`flex items-center justify-between p-4 sm:p-5 border-t ${
                  isLight ? "bg-white border-[#E2DCD2]" : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="font-bold">{configFaceItems.filter((i) => selectedOutcomeIds.includes(i.id)).length}</span>
                  <span className="text-slate-500">of {configFaceItems.length} selected for {configDomain.shortName}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const currentIndex = DOMAIN_CONFIGS.findIndex((d) => d.id === configDomain.id);
                      const nextIndex = (currentIndex + 1) % DOMAIN_CONFIGS.length;
                      const nextDomain = DOMAIN_CONFIGS[nextIndex];
                      handleCategorySelect(nextDomain.id);
                      setConfigModalDomainId(nextDomain.id);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-colors cursor-pointer ${
                      isLight ? "border-slate-300 hover:bg-slate-100 text-slate-800" : "border-white/20 hover:bg-white/10 text-white"
                    }`}
                  >
                    Next Face →
                  </button>

                  <button
                    onClick={() => setConfigModalDomainId(null)}
                    className="px-6 py-2 rounded-xl text-xs font-mono font-bold bg-[#142840] text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                  >
                    Done & Return to Block
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* CONFIGURED OUTCOMES & PROPOSAL HUB (COMPACT 2-COLUMN LAYOUT)         */}
        {/* ==================================================================== */}
        <section
          ref={aggregatorRef}
          className={`rounded-2xl border p-5 sm:p-7 transition-colors ${
            isLight ? "bg-white border-[#E2DCD2] shadow-sm" : "bg-white/5 border-white/10 shadow-xl"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: CONFIGURED OUTCOMES / PRIORITIES */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-6 border-slate-200/80 dark:border-white/10">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <h3 className={`font-serif text-lg font-bold ${isLight ? "text-[#142840]" : "text-white"}`}>
                      Configured Outcomes
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        selectedCount > 0
                          ? isLight
                            ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                            : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : isLight
                          ? "bg-slate-100 border-slate-200 text-slate-500"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {selectedCount} Selected
                    </span>
                    {selectedCount > 0 && (
                      <button
                        type="button"
                        onClick={handleClearAll}
                        className="text-[11px] font-mono font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {aggregatedByDomain.length === 0 ? (
                  <div className={`p-4 rounded-xl border border-dashed text-left ${isLight ? "bg-slate-50/70 border-slate-200" : "bg-white/5 border-white/10"}`}>
                    <p className={`font-serif text-sm font-semibold ${isLight ? "text-slate-800" : "text-slate-200"}`}>
                      No outcomes selected yet
                    </p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Select outcomes on the block above to calculate a delivery flight, or write your situation in the proposal form.
                    </p>
                    <button
                      type="button"
                      onClick={() => setConfigModalDomainId(activeDomainId)}
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer shadow-xs"
                    >
                      Configure {activeDomain.shortName} Outcomes →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                    {aggregatedByDomain.map(({ domain, items, note }) => (
                      <div
                        key={domain.id}
                        className={`rounded-xl border p-3 ${
                          isLight ? "bg-slate-50/80 border-slate-200" : "bg-white/5 border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between border-b pb-1.5 mb-2 border-slate-200/80 dark:border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border"
                              style={{
                                backgroundColor: `${domain.accentHex}18`,
                                color: domain.accentHex,
                                borderColor: `${domain.accentHex}40`,
                              }}
                            >
                              {domain.code}
                            </span>
                            <span className={`font-serif text-xs font-bold ${isLight ? "text-[#142840]" : "text-white"}`}>
                              {domain.shortName}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              handleCategorySelect(domain.id);
                              setConfigModalDomainId(domain.id);
                            }}
                            className="text-[10px] font-mono text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-start justify-between gap-2 text-xs leading-snug group"
                            >
                              <span className="flex items-start gap-1.5">
                                <span className="text-emerald-600 font-bold text-[11px]">✓</span>
                                <span className={isLight ? "text-slate-800" : "text-slate-200"}>{item.name}</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => handleToggleOutcome(item.id)}
                                className="text-slate-400 hover:text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer text-[11px]"
                                title="Remove outcome"
                              >
                                ✕
                              </button>
                            </li>
                          ))}
                        </ul>
                        {note.trim() && (
                          <div className={`mt-2 pt-1.5 border-t text-[11px] font-mono ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-400"}`}>
                            <strong>Context:</strong> {note.trim()}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: PROPOSAL REQUEST / DIRECT NOTE FORM */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isLight ? "text-[#142840]" : "text-white"}`}>
                  Request Your Scoping Proposal
                </h3>
                <p className={`text-xs mt-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  1 Block = 2 to 4 Weeks. Scope and delivery flight timing are agreed in your proposal.
                </p>
              </div>

              {submitSuccess ? (
                <div
                  className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-3 ${
                    isLight ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="font-serif text-xl font-bold">Proposal Request Transmitted</h4>
                  <p className="text-xs sm:text-sm max-w-md leading-relaxed">
                    {selectedCount > 0
                      ? `Robert Paddock will review your ${selectedCount} configured outcomes across ${aggregatedByDomain.length} disciplines and assemble your engagement proposal.`
                      : `Robert Paddock will review your message and reach out to discuss your scoping needs.`}
                  </p>
                  <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-300">
                    Logged to DigOps pipeline via The Block storefront.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmitProposal} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your Name"
                        className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          isLight ? "bg-white border-slate-300 text-slate-900" : "bg-slate-900 border-white/15 text-white"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="you@company.com"
                        className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          isLight ? "bg-white border-slate-300 text-slate-900" : "bg-slate-900 border-white/15 text-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      placeholder="Company Name"
                      className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isLight ? "bg-white border-slate-300 text-slate-900" : "bg-slate-900 border-white/15 text-white"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">
                      Your Situation or Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={contactNote}
                      onChange={(e) => setContactNote(e.target.value)}
                      placeholder="Describe your operational priorities, systems involved, or questions..."
                      className={`w-full rounded-xl border px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                        isLight
                          ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                          : "bg-slate-900 border-white/15 text-white placeholder:text-slate-500"
                      }`}
                    />
                  </div>

                  {submitError && (
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-serif text-base font-bold bg-[#142840] hover:bg-slate-800 text-white transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting
                      ? "Transmitting Proposal Request..."
                      : selectedCount > 0
                      ? `Request Scoping Proposal (${selectedCount} outcomes configured) →`
                      : "Request Scoping Proposal →"}
                  </button>

                  <p className="text-center text-[11px] font-mono text-slate-500">
                    Direct principal review · Scope agreed before engagement begins
                  </p>
                </form>
              )}
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
