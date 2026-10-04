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

// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// Delivery Standard: 1 Block = 2 to 4 Weeks. Client selects outcomes, we quote blocks.
// Client-facing voice: strictly collective sovereign voice ("We", "Our team", "Our principals"). NO individual names.
// Capo Architecture:
// - Big, Centered 3D Spinning Cube Configurator (The Granddaddy of the site).
// - Interactive drag-to-spin physics with automatic right-side-up snapping on release.
// - Modal configurator pops up when clicking a face: outcomes toggle + spellchecked context window.
// - Compressed single-viewport flow; zero unnecessary vertical scroll.
// - Aggregator review section at bottom for scoping proposal request.

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
    accentHex: "#06B6D4",
    borderClass: "border-cyan-500/40 hover:border-cyan-400",
    bgGlowClass: "from-cyan-500/10 via-transparent to-transparent",
    pillClass: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    cubeRotation: { x: -12, y: -90 },
    faceTransform: "rotateY(90deg) translateZ(140px)",
    appGroups: "ERP—Enterprise Resource Planning · WMS—Warehouse Management · MES—Manufacturing Execution · HRM/HCM—Human Resources and Human Capital Management · EAM—Enterprise Asset Management · CRM—Customer Relationship Management",
  },
  {
    id: "it_ot_operations",
    code: "IT",
    name: "IT Operations & Security",
    shortName: "IT Operations",
    subtitle: "Maintain dependable enterprise infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    essence: "Dependable infrastructure, cybersecurity, and operational continuity across business and plant systems; the plant floor's controllers are coordinated with their owners, not authored.",
    badge: "OPERATIONS & SEC",
    accentHex: "#3B82F6",
    borderClass: "border-blue-500/40 hover:border-blue-400",
    bgGlowClass: "from-blue-500/10 via-transparent to-transparent",
    pillClass: "bg-blue-500/15 text-blue-300 border-blue-500/30",
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
    accentHex: "#8B5CF6",
    borderClass: "border-violet-500/40 hover:border-violet-400",
    bgGlowClass: "from-violet-500/10 via-transparent to-transparent",
    pillClass: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    cubeRotation: { x: -12, y: 90 },
    faceTransform: "rotateY(-90deg) translateZ(140px)",
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
    faceTransform: "rotateX(90deg) translateZ(140px)",
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
    faceTransform: "rotateX(-90deg) translateZ(140px)",
  },
];

// 3D face adjacency map for natural, game-like swipe transitions in all directions.
// Every face has an unambiguous, right-side-up neighbor for UP, DOWN, LEFT, and RIGHT gestures.
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

// Calculate canonical snap angles so each face lands perfectly right-side up,
// taking the shortest angular path without gratuitous full-circle spins.
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
  className = "w-8 h-8",
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
          <circle cx="12" cy="12" r="2" fill="#070E17" stroke={color} strokeWidth="2" />
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
          <circle cx="12" cy="10" r="1.75" fill={color} stroke="#070E17" strokeWidth="1.5" />
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

  const [activeDomainId, setActiveDomainId] = useState<string>("leadership_direction");
  const [modalDomainId, setModalDomainId] = useState<string | null>(null);
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

  const modalDomain = useMemo(() => {
    if (!modalDomainId) return null;
    return DOMAIN_CONFIGS.find((d) => d.id === modalDomainId) || null;
  }, [modalDomainId]);

  // Handle snap-rotation when clicking quick buttons
  const handleSnapToDomain = (domainId: string) => {
    setActiveDomainId(domainId);
    setCubeRotation((current) => getCanonicalRotationForDomain(domainId, current));
  };

  // Drag physics for natural, game-like 3D cube spinning
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

    // BEH-2 fix: Any movement > 2px is treated as a deliberate drag rather than a click
    if (distance > 2) {
      hasDraggedRef.current = true;
    }

    if (!hasDraggedRef.current) return;

    const sensitivity = 0.45;
    const startX = dragStartRef.current.rotX;
    const startY = dragStartRef.current.rotY;

    // Universal direct-manipulation physics for all faces:
    // Dragging UP (dy < 0) always tilts the cube UPWARDS (+X)
    // Dragging DOWN (dy > 0) always tilts the cube DOWNWARDS (-X)
    // Dragging LEFT (dx < 0) always turns the cube LEFTWARDS (-Y)
    // Dragging RIGHT (dx > 0) always turns the cube RIGHTWARDS (+Y)
    const tiltX = startX - dy * sensitivity;
    const tiltY = startY + dx * sensitivity;
    setCubeRotation({ x: tiltX, y: tiltY });
  };

  // ON DRAG RELEASE: Automatic snap right-side-up based on gesture vector!
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
        // Horizontal gesture
        if (dx < -swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.LEFT ?? activeDomainId;
        } else if (dx > swipeThreshold) {
          nextDomainId = FACE_NEIGHBORS[activeDomainId]?.RIGHT ?? activeDomainId;
        }
      } else {
        // Vertical gesture
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

  // When clicking a face on the cube
  const handleFaceClick = (domainId: string) => {
    if (hasDraggedRef.current) return; // User was spinning, not clicking
    setActiveDomainId(domainId);
    setModalDomainId(domainId);
  };

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

  // Modal domain outcomes and grouping
  const modalItems = useMemo(() => {
    if (!modalDomain) return [];
    return PUBLIC_CATALOG_ITEMS.filter((item) => item.domainId === modalDomain.id);
  }, [modalDomain]);

  const groupedModalItems = useMemo(() => {
    const groups: { name: string; items: CatalogItem[] }[] = [];
    const ungrouped: CatalogItem[] = [];

    modalItems.forEach((item) => {
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
  }, [modalItems]);

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
    setTimeout(() => {
      aggregatorRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
    <main className="min-h-screen bg-[#060c16] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] opacity-20 transition-all duration-700 ease-out"
          style={{ backgroundColor: activeDomain.accentHex }}
        />
        <div className="absolute top-[45%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] bg-cyan-900/15" />
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#040810] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-4">
        
        {/* ==================================================================== */}
        {/* TOP BAR / NAVIGATION STRIP                                           */}
        {/* ==================================================================== */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm shadow-sm">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Standard: <strong className="text-white font-medium">1 Block = 2 to 4 Weeks</strong></span>
            </div>

            <button
              onClick={handleScrollToAggregator}
              className="inline-flex items-center gap-2 rounded-md border border-amber-400/40 bg-amber-400/15 hover:bg-amber-400/25 px-3.5 py-1 text-xs font-semibold text-amber-300 transition-all shadow-sm hover:shadow-amber-400/10 cursor-pointer"
            >
              <span>Selected Outcomes: <strong className="text-white font-bold">{selectedCount}</strong></span>
              <span className="text-white/40">·</span>
              <span>Review & Quote →</span>
            </button>
          </div>
        </header>

        {/* ==================================================================== */}
        {/* CENTERED HERO STATEMENT                                              */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto pt-1 pb-1">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold mb-1">
            Outcome Configurator
          </p>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            What do you want your business to be able to do?
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Spin the 3D block to explore the six transformation disciplines. When you let go, it snaps right-side up to the closest face. Click any face to configure outcomes.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* GRANDDADDY 3D SPINNING CUBE STAGE (CENTERED & PROMINENT)             */}
        {/* ==================================================================== */}
        <section className="relative flex flex-col items-center justify-center py-4">
          
          {/* DRAG-TO-SPIN 3D CUBE CONTAINER */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-[340px] h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing [perspective:1400px] select-none touch-none"
            style={{ touchAction: "none" }}
            title="Click and drag to spin the 3D cube in any direction; on release it snaps right-side up to the closest face"
          >
            <div
              className={`relative w-[280px] h-[280px] ${isDragging ? "" : "transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"}`}
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
                    className={`absolute inset-0 rounded-2xl border-2 flex flex-col justify-between p-5 transition-all duration-300 bg-slate-950/90 shadow-2xl backdrop-blur-md group touch-none ${
                      isFocused
                        ? "shadow-[0_0_35px_rgba(255,255,255,0.15)] ring-1 ring-white/40"
                        : "hover:border-white/50"
                    }`}
                    style={{
                      transform: domain.faceTransform,
                      backfaceVisibility: "hidden",
                      borderColor: isFocused ? domain.accentHex : `${domain.accentHex}50`,
                      touchAction: "none",
                    }}
                  >
                    {/* FACE TOP BAR */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
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
                        <span className="text-[10px] font-mono text-slate-400">
                          Face {index + 1}
                        </span>
                      </div>

                      {count > 0 ? (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {count} selected
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500">
                          0 selected
                        </span>
                      )}
                    </div>

                    {/* FACE CENTER ICON & TITLE */}
                    <div className="flex flex-col items-center text-center my-auto py-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-105 transition-transform duration-300 mb-2">
                        <DomainBlockIcon code={domain.code} color={domain.accentHex} className="w-12 h-12" />
                      </div>
                      <h3 className="font-serif text-base font-semibold text-white leading-snug px-1">
                        {domain.name}
                      </h3>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 px-2 leading-relaxed">
                        {domain.subtitle}
                      </p>
                    </div>

                    {/* FACE BOTTOM ACTION HINT */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-mono text-[10px]">
                        {domain.id === "data_knowledge" ? "9 outcomes" : "10 outcomes"}
                      </span>
                      <span
                        className="font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        style={{ color: domain.accentHex }}
                      >
                        Configure Face →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CUBE CONTROL HINT */}
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-3 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <polyline points="3 3 3 8 8 8" />
            </svg>
            <span>Drag to rotate freely · Release to snap right-side up · Click any face to configure</span>
          </p>

          {/* 6 QUICK-SNAP BUTTONS */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {DOMAIN_CONFIGS.map((domain) => {
              const count = domainSelectionStats[domain.id] || 0;
              const isFocused = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => handleSnapToDomain(domain.id)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                    isFocused
                      ? "border-white/50 bg-white/15 text-white font-medium shadow-md scale-105"
                      : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: domain.accentHex }}
                  />
                  <span>{domain.shortName}</span>
                  {count > 0 && (
                    <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* QUICK-OPEN BUTTON FOR CURRENT FOCUSED FACE */}
          <div className="mt-3">
            <button
              onClick={() => setModalDomainId(activeDomain.id)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-amber-400/15 cursor-pointer hover:scale-[1.02]"
            >
              <span>Open Configurator for {activeDomain.name}</span>
              <span>→</span>
            </button>
          </div>

        </section>

        {/* ==================================================================== */}
        {/* AGGREGATOR & PROPOSAL SECTION (DOCKED AT BOTTOM)                     */}
        {/* ==================================================================== */}
        <section
          ref={aggregatorRef}
          id="aggregator"
          className="mt-6 rounded-2xl border border-white/10 bg-[#0a1220]/95 p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6"
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
                Review your configured outcomes and context across all six blocks before requesting a formal scoping proposal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => update({ outcomeIds: [] })}
                disabled={selectedCount === 0}
                className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                  selectedCount > 0
                    ? "text-slate-200 hover:text-white border-white/20 hover:border-amber-400/50 bg-white/5 hover:bg-white/10 cursor-pointer shadow-sm"
                    : "text-slate-600 border-white/5 bg-transparent cursor-not-allowed opacity-50"
                }`}
                title={selectedCount > 0 ? "Clear all selected outcomes across all blocks" : "No outcomes currently selected"}
              >
                Clear selections
              </button>
              <span className="font-mono text-sm px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                <strong className="text-amber-400 font-bold">{selectedCount}</strong> outcomes across{" "}
                <strong className="text-white font-bold">{aggregatedByDomain.length}</strong> blocks
              </span>
            </div>
          </div>

          {/* AGGREGATED BREAKDOWN BY BLOCK */}
          {aggregatedByDomain.length === 0 ? (
            <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <p className="text-slate-400 text-sm">
                No outcomes selected yet. Spin the 3D block above and click any face to select capabilities.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aggregatedByDomain.map(({ domain, items, note }) => (
                <div
                  key={domain.id}
                  className="rounded-xl border border-white/10 bg-slate-950/70 p-4 flex flex-col justify-between"
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
                      <button
                        onClick={() => setModalDomainId(domain.id)}
                        className="text-xs font-mono text-amber-400 hover:text-amber-300 cursor-pointer"
                      >
                        Edit ({items.length}) ↗
                      </button>
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
                      <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 text-xs text-slate-400">
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

          {/* GENERAL PROJECT NOTES & OVERARCHING REQUIREMENTS */}
          <div className="rounded-xl border border-white/10 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="general-message" className="text-sm font-semibold text-white">
                General Notes & Engagement Context (Optional)
              </label>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Anything else we should know? (e.g. overarching business timeline, executive sponsors, or custom agentic software needs)
            </p>
            <textarea
              id="general-message"
              rows={3}
              spellCheck={true}
              value={draft?.contactMessage || ""}
              onChange={(e) => update({ contactMessage: e.target.value })}
              placeholder="Add any overarching business context, bespoke system needs, or scheduling preferences..."
              className="w-full rounded-lg border border-white/10 bg-[#070e18] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 font-sans"
            />
          </div>

          {/* STANDARD & GOVERNANCE COMMITMENT BANNER */}
          <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs leading-relaxed text-amber-200">
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
                Thank you. Your outcome selections and operating context have been received. Our principal team will review the dependencies and reply with a scoping proposal.
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
                <p className="text-xs text-slate-400 font-mono">
                  Direct review by our principal team · Response within 1 business day
                </p>

                {submitError && (
                  <div className="w-full text-center text-xs text-rose-400 font-mono py-1">
                    {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={selectedCount === 0 || isSubmitting}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all shadow-lg cursor-pointer ${
                    selectedCount === 0 || isSubmitting
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5"
                      : "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-400/20 hover:scale-[1.01]"
                  }`}
                >
                  <span>{isSubmitting ? "Transmitting Request..." : "Request Scoping Proposal"}</span>
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

      {/* ==================================================================== */}
      {/* MODAL CONFIGURATOR DRAWER (POPS UP WHEN CLICKING A CUBE FACE)        */}
      {/* ==================================================================== */}
      {modalDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-white/20 bg-[#0b1322] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            style={{
              boxShadow: `0 0 40px ${modalDomain.accentHex}20`,
            }}
          >
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-slate-900/60">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded border uppercase"
                    style={{
                      backgroundColor: `${modalDomain.accentHex}20`,
                      color: modalDomain.accentHex,
                      borderColor: `${modalDomain.accentHex}40`,
                    }}
                  >
                    {modalDomain.code} · {modalDomain.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    <strong className="text-white">{domainSelectionStats[modalDomain.id] || 0}</strong> of{" "}
                    {modalItems.length} selected
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {modalDomain.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  {modalDomain.subtitle}
                </p>

                {modalDomain.appGroups && (
                  <div className="mt-2 rounded-lg border border-cyan-500/25 bg-cyan-950/40 p-2.5 text-xs text-cyan-200 leading-relaxed">
                    <strong className="text-cyan-100 font-semibold block mb-0.5 uppercase tracking-wider text-[10px] font-mono">
                      Application Groups:
                    </strong>
                    {modalDomain.appGroups}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setModalDomainId(null)}
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Close Configurator"
              >
                ✕
              </button>
            </div>

            {/* MODAL SCROLLABLE BODY */}
            <div className="p-5 sm:p-6 overflow-y-auto flex flex-col gap-5 max-h-[calc(90vh-170px)]">
              
              {/* UNGROUPED OUTCOMES */}
              {groupedModalItems.ungrouped.length > 0 && (
                <div className="flex flex-col gap-3">
                  {groupedModalItems.ungrouped.map((item, idx) => {
                    const isSelected = currentOutcomeIds.includes(item.id);
                    const isExpanded = expandedItemId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
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
                              <span className="font-mono text-slate-400 mr-1.5 font-normal">{idx + 1}.</span>
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
                            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                          >
                            {isExpanded ? "Less" : "Details"}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-1 border-t border-white/5 bg-slate-950/40 text-xs text-slate-300 space-y-1.5">
                            <p><strong>Operating Situation:</strong> {item.situation}</p>
                            <p><strong>Deliverables:</strong> {item.deliverables.join(" · ")}</p>
                            <p className="text-slate-400"><strong>Inclusions:</strong> {item.inclusions.join(", ")}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* GROUPED OUTCOMES */}
              {groupedModalItems.groups.map((group) => (
                <div key={group.name} className="flex flex-col gap-2.5 pt-1">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-amber-300/90">
                      {group.name}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {group.items.map((item) => {
                      const isSelected = currentOutcomeIds.includes(item.id);
                      const isExpanded = expandedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`rounded-xl border transition-all duration-200 overflow-hidden ${
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
                              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                            >
                              {isExpanded ? "Less" : "Details"}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="px-4 pb-3.5 pt-1 border-t border-white/5 bg-slate-950/40 text-xs text-slate-300 space-y-1.5">
                              <p><strong>Operating Situation:</strong> {item.situation}</p>
                              <p><strong>Deliverables:</strong> {item.deliverables.join(" · ")}</p>
                              <p className="text-slate-400"><strong>Inclusions:</strong> {item.inclusions.join(", ")}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* DEDICATED CONTEXT WINDOW WITH SPELLCHECK */}
              <div className="mt-2 rounded-xl bg-slate-950/70 p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor={`modal-context-${modalDomain.id}`}
                    className="text-xs font-semibold text-white flex items-center gap-2"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: modalDomain.accentHex }}
                    />
                    <span>{modalDomain.name} · Operating Context & Priorities</span>
                  </label>
                </div>
                <p className="text-xs text-slate-400 mb-2.5">
                  Explain your current systems, constraints, operating reality, or specific goals for this block.
                </p>
                <textarea
                  id={`modal-context-${modalDomain.id}`}
                  rows={3}
                  spellCheck={true}
                  value={domainNotes[modalDomain.id] || ""}
                  onChange={(e) => handleDomainNoteChange(modalDomain.id, e.target.value)}
                  placeholder={`Add specific context for ${modalDomain.name} (e.g. current pain points, ERP version, plant shift schedules, or timing)... `}
                  className="w-full rounded-lg border border-white/10 bg-[#070e18] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 font-sans"
                />
              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-t border-white/10 bg-slate-900/80">
              <span className="text-xs font-mono text-slate-300">
                {domainSelectionStats[modalDomain.id] || 0} outcomes selected in this block
              </span>

              <button
                type="button"
                onClick={() => setModalDomainId(null)}
                className="px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-all shadow-md cursor-pointer hover:scale-[1.02]"
              >
                Save & Return to Cube
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
