"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import s from "./AgenticPositionView.module.css";

// ============================================================================
// RIG ESTATE SPOT GRAPHICS (INLINE SVGs — BRASS / SLATE / PARCHMENT)
// Clean, understated architectural glyphs modeled on construction trailer drafts
// ============================================================================

function BeehiveSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.8" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#dotGrid)" />
      {/* 13-cell honeycomb cluster */}
      <g stroke="#9E7D3B" strokeWidth="1.2" fill="#FAF6EE" strokeLinejoin="round">
        {/* Center cell */}
        <polygon points="60,48 70,54 70,66 60,72 50,66 50,54" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.5" />
        {/* Ring 1 surrounding cells */}
        <polygon points="60,26 70,32 70,44 60,50 50,44 50,32" />
        <polygon points="79,37 89,43 89,55 79,61 69,55 69,43" />
        <polygon points="79,59 89,65 89,77 79,83 69,77 69,65" />
        <polygon points="60,70 70,76 70,88 60,94 50,88 50,76" />
        <polygon points="41,59 51,65 51,77 41,83 31,77 31,65" />
        <polygon points="41,37 51,43 51,55 41,61 31,55 31,43" />
      </g>
      {/* Center node indicator */}
      <circle cx="60" cy="60" r="2.5" fill="#9E7D3B" />
      {/* Dimension ticks */}
      <line x1="8" y1="8" x2="16" y2="8" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="8" y1="8" x2="8" y2="16" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="104" y2="112" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="112" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
    </svg>
  );
}

function SeamJointSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      {/* Background architectural box */}
      <rect x="10" y="10" width="100" height="100" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
      {/* 80% AI Factory Block */}
      <rect x="20" y="24" width="46" height="72" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      {/* Factory hatch lines */}
      <line x1="24" y1="36" x2="62" y2="36" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="46" x2="62" y2="46" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="56" x2="62" y2="56" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="66" x2="62" y2="66" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="76" x2="62" y2="76" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="86" x2="62" y2="86" stroke="#DDD7C8" strokeWidth="1" />
      <text x="43" y="32" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">80% CODE</text>
      
      {/* 20% Physical Floor Block */}
      <rect x="66" y="24" width="34" height="72" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <text x="83" y="32" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">20% FLOOR</text>

      {/* The Seam Joint (Center Interface) */}
      <line x1="66" y1="20" x2="66" y2="100" stroke="#9E7D3B" strokeWidth="2.5" strokeDasharray="3 2" />
      {/* Joint collar marker */}
      <circle cx="66" cy="60" r="5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.5" />
      <circle cx="66" cy="60" r="2" fill="#9E7D3B" />
      {/* Dimension rule */}
      <line x1="20" y1="104" x2="100" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="20" y1="101" x2="20" y2="107" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="66" y1="101" x2="66" y2="107" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="100" y1="101" x2="100" y2="107" stroke="#9E7D3B" strokeWidth="0.8" />
    </svg>
  );
}

function PolanyiSheetSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      {/* Background drafting frame */}
      <rect x="12" y="14" width="96" height="92" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
      {/* Mary's Sheet Grid Matrix */}
      <rect x="22" y="24" width="76" height="52" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      {/* Grid lines */}
      <line x1="22" y1="36" x2="98" y2="36" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="22" y1="48" x2="98" y2="48" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="22" y1="60" x2="98" y2="60" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="42" y1="24" x2="42" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="64" y1="24" x2="64" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="82" y1="24" x2="82" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      {/* Tacit cell highlight */}
      <rect x="44" y="38" width="18" height="8" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="0.8" />
      {/* Downward bridge arrow to Agentic Gateway */}
      <path d="M 60 76 L 60 94 M 56 90 L 60 94 L 64 90" stroke="#9E7D3B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="98" r="4" fill="#1E2024" />
      <circle cx="60" cy="98" r="1.5" fill="#FAF6EE" />
      <text x="60" y="20" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">TACIT KNOWLEDGE</text>
    </svg>
  );
}

function BossAuditSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      {/* Outer Stated Reality Ring (Dashed) */}
      <circle cx="60" cy="60" r="44" fill="none" stroke="#68645C" strokeWidth="1" strokeDasharray="4 3" />
      {/* Inner Actual Reality Axis (Solid Brass) */}
      <circle cx="60" cy="60" r="32" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.5" />
      {/* Core Ground Truth */}
      <circle cx="60" cy="60" r="18" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      {/* Crosshairs */}
      <line x1="60" y1="10" x2="60" y2="110" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="10" y1="60" x2="110" y2="60" stroke="#DDD7C8" strokeWidth="0.8" />
      {/* Delta indicator arc */}
      <path d="M 60 28 A 32 32 0 0 1 88 44" fill="none" stroke="#8F4A38" strokeWidth="2" strokeLinecap="round" />
      <circle cx="88" cy="44" r="2.5" fill="#8F4A38" />
      <text x="60" y="63" fontSize="8" fill="#1E2024" textAnchor="middle" fontWeight="bold" fontFamily="monospace">B.O.S.S.</text>
      <text x="60" y="116" fontSize="6.5" fill="#68645C" textAnchor="middle" fontFamily="monospace">DELTA AUDIT</text>
    </svg>
  );
}

function FloorMatrixSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      {/* Background drafting frame */}
      <rect x="10" y="10" width="100" height="100" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />

      {/* Top Box: Theoretical '20 People' Roster */}
      <rect x="18" y="18" width="84" height="28" fill="#FFFFFF" stroke="#68645C" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="60" y="26" fontSize="5.2" fill="#68645C" textAnchor="middle" fontFamily="monospace" letterSpacing="0.05em">THE &quot;20 CHAMPIONS&quot; LIST</text>
      {/* 4x5 tidy dots */}
      <g fill="#9E7D3B">
        <circle cx="28" cy="34" r="1.6" /><circle cx="35" cy="34" r="1.6" /><circle cx="42" cy="34" r="1.6" /><circle cx="49" cy="34" r="1.6" /><circle cx="56" cy="34" r="1.6" />
        <circle cx="64" cy="34" r="1.6" /><circle cx="71" cy="34" r="1.6" /><circle cx="78" cy="34" r="1.6" /><circle cx="85" cy="34" r="1.6" /><circle cx="92" cy="34" r="1.6" />
        <circle cx="28" cy="40" r="1.6" /><circle cx="35" cy="40" r="1.6" /><circle cx="42" cy="40" r="1.6" /><circle cx="49" cy="40" r="1.6" /><circle cx="56" cy="40" r="1.6" />
        <circle cx="64" cy="40" r="1.6" /><circle cx="71" cy="40" r="1.6" /><circle cx="78" cy="40" r="1.6" /><circle cx="85" cy="40" r="1.6" /><circle cx="92" cy="40" r="1.6" />
      </g>

      {/* Center Seam / Reality Gap Divider */}
      <line x1="14" y1="52" x2="106" y2="52" stroke="#8F4A38" strokeWidth="1.5" />
      <rect x="30" y="48" width="60" height="8" fill="#F4EFE5" stroke="#8F4A38" strokeWidth="0.8" />
      <text x="60" y="54" fontSize="4.8" fill="#8F4A38" textAnchor="middle" fontWeight="bold" fontFamily="monospace">IT DON&apos;T WORK THAT WAY</text>

      {/* Bottom Box: Actual Floor Reality (25 Task Forces / 150 People) */}
      <rect x="18" y="62" width="84" height="42" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <text x="60" y="70" fontSize="5.2" fill="#1E2024" textAnchor="middle" fontWeight="bold" fontFamily="monospace">150 PEOPLE // 25 TASK FORCES</text>
      {/* Irregular connected task force nodes */}
      <g stroke="#68645C" strokeWidth="0.6" fill="#9E7D3B">
        <line x1="28" y1="78" x2="44" y2="84" />
        <line x1="44" y1="84" x2="60" y2="76" />
        <line x1="60" y1="76" x2="76" y2="84" />
        <line x1="76" y1="84" x2="92" y2="78" />
        <line x1="34" y1="94" x2="48" y2="90" />
        <line x1="48" y1="90" x2="72" y2="92" />
        <line x1="72" y1="92" x2="86" y2="96" />
        <line x1="44" y1="84" x2="48" y2="90" />
        <line x1="60" y1="76" x2="72" y2="92" />

        <circle cx="28" cy="78" r="2.2" fill="#8F4A38" />
        <circle cx="44" cy="84" r="2.2" />
        <circle cx="60" cy="76" r="2.8" fill="#1E2024" />
        <circle cx="76" cy="84" r="2.2" />
        <circle cx="92" cy="78" r="2.2" fill="#8F4A38" />
        <circle cx="34" cy="94" r="2.2" />
        <circle cx="48" cy="90" r="2.2" />
        <circle cx="72" cy="92" r="2.2" />
        <circle cx="86" cy="96" r="2.2" />
      </g>
    </svg>
  );
}

// ============================================================================
// EDITORIAL DATA SETS
// ============================================================================

const PILLAR_ESSAYS = [
  {
    num: "01",
    slug: "marys-sheet",
    postHref: "/agentic-ai/marys-sheet/",
    category: "DOMAIN REALITY",
    readTime: "6 MIN READ",
    title: "Mary's Sheet & Polanyi's Paradox",
    subtitle: "Why 80% automated code generation crashes into the unwritten 20% enterprise floor.",
    spot: "polanyi",
    summary:
      "Enterprise procedures capture the happy path. The real operating logic lives in the minds and desktop spreadsheets of experienced people who handle exceptions, weigh conflicting priorities, and know when standard software falls short. Polanyi noted: 'We know more than we can tell.' You cannot prompt an AI agent with what was never written down.",
    takeaway: "True enterprise agentics begins by mapping tacit operating reality before writing code.",
    topicKey: "Mary's Sheet and tacit domain reality",
  },
  {
    num: "02",
    slug: "the-application-layer",
    postHref: "/agentic-ai/the-application-layer/",
    category: "ARCHITECTURE & SYSTEMS",
    readTime: "8 MIN READ",
    title: "Chamath's beehiiv vs. The Beehive",
    subtitle: "Macro venture theory vs. the reality of running a 13-cell multi-agent engine in production.",
    spot: "beehive",
    summary:
      "Chamath Palihapitiya publishes high-level macroeconomic theses on beehiiv. In the arena, I built and operate The Beehive: a living 13-cell multi-agent architecture in production. In a sandbox, agents feel magical; in production, they require deterministic caller gates, auditable state synchronization, token governance, and strict human authorization across brownfield systems.",
    takeaway: "The distance between a demo and an enterprise asset is telemetry, boundaries, and governance.",
    topicKey: "The Beehive multi-agent runtime in production",
  },
  {
    num: "03",
    slug: "the-delivery-seam",
    postHref: "/agentic-ai/the-delivery-seam/",
    category: "ENTERPRISE DELIVERY",
    readTime: "7 MIN READ",
    title: "The Two Software Factories: 8090 vs. Factory.ai",
    subtitle: "External generation vs. internal droids—why both motions crash into the operational seam.",
    spot: "seam",
    summary:
      "The frontier market has split into two software factory paradigms: 8090 Inc. builds and hosts custom applications externally for the business, while Factory.ai installs autonomous Droids into internal engineering teams to automate ticket-to-deploy. Both promise automated velocity. But software never touches the ground cleanly on its own. Code always fails at the 20% seam—where software meets unwritten dock procedures, messy data cutovers, and organizational resistance. The factory writes the code; the delivery partner operationalizes the outcome.",
    takeaway: "80% automated generation × 20% physical floor delivery = complete enterprise outcome.",
    topicKey: "The 80/90 collaborative delivery seam",
  },
];

const FIELD_NOTES = [
  {
    num: "01",
    slug: "the-boss-protocol-mapping-stated-vs-actual",
    category: "GOVERNANCE & AUDIT",
    readTime: "9 MIN READ",
    title: "The B.O.S.S. Protocol: Mapping Stated vs. Actual Reality",
    subtitle: "Before prompting an agent or generating a line of code, discover what the business actually does.",
    spot: "boss",
    summary:
      "Every enterprise has two operating systems: Stated Reality (the executive slide deck, the vendor manual, the official org chart) and Actual Reality (how invoices get approved, where inventory really sits, who actually clears the dock). The Business Operating System Specification (B.O.S.S.) reconciles the delta so agents execute on truth, not fiction.",
    takeaway: "Never automate a stated process until you have audited the actual operational truth.",
    topicKey: "The B.O.S.S. protocol and stated vs actual reality",
  },
  {
    num: "02",
    slug: "the-20-people-fallacy-partner-theory-vs-the-floor",
    category: "OPERATIONAL REALITY",
    readTime: "7 MIN READ",
    title: "The '20 People' Fallacy: Partner Theory vs. The Floor",
    subtitle: "The internet says 'give me 20 champions.' Walk into a live enterprise: it don't work that way.",
    spot: "floor",
    summary:
      "Partner ecosystem theorists and tech influencers love to say: 'Uh duh, give me 20 implementation champions and we'll drive enterprise adoption.' Sure—if you could walk into a company and find 20 aligned, articulate practitioners ready to go, you could do all kinds of good things with that. But it don't work that way. In real enterprise operations, you aren't handed a tidy roster of 20 champions. You inherit 150 people across 25 disjointed task forces, conflicting departmental incentives, legacy system trauma, and Mary's spreadsheet running the loading dock. She identifies a tiny sliver of the seam, but mistakes a slide-deck checklist for operational reality. The true 20% seam cannot be solved with an ecosystem checklist; it requires an operator who knows how to unearth tacit truth, align the 150 people across those 25 task forces, and engineer delivery straight into the physical floor.",
    takeaway: "The 20% seam isn't a 20-person influencer checklist—it is 150 people across 25 task forces aligned into zero-rollback execution.",
    topicKey: "The 20 people fallacy and the true operational seam",
  },
];

const QUESTIONS = [
  {
    num: "01",
    question: "What does the experienced person know that the workflow does not?",
    body: "Enterprise procedures capture the happy path. The real operating logic lives in the minds of experienced people who handle exceptions, weigh conflicting priorities, and know when standard rules fall short. Agentic systems must connect to that tacit judgment rather than assuming standard procedures tell the whole story.",
    topicKey: "What the experienced person knows",
  },
  {
    num: "02",
    question: "When should an agent act, and when should a person decide?",
    body: "Autonomous action is easy to demonstrate in a sandbox, but consequential in production. Clear governance requires explicit boundary design: agents gather context, synthesize history, and execute permitted steps, while accountable people retain final decisions on money, commitments, and exceptions.",
    topicKey: "When an agent acts vs. person decides",
  },
  {
    num: "03",
    question: "What makes a useful demonstration become dependable enterprise work?",
    body: "A prototype shows what is possible under ideal conditions. Production requires verified enterprise data access, strict authorization, observable telemetry, graceful failure modes, and operational ownership by the business. Without those, a demonstration never becomes dependable work.",
    topicKey: "From prototype to dependable enterprise work",
  },
];

function topicSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function AgenticPositionView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General thoughts on agentic workflows");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "recorded" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSelectTopic(selectedTopic: string) {
    setTopic(selectedTopic);
    try {
      window.history.replaceState(null, "", `#topic-${topicSlug(selectedTopic)}`);
    } catch {}
    const el = document.getElementById("conversation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Please enter a valid email.";
    if (!message.trim()) next.message = "Please write your thought or question.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    const formattedMessage = [
      `[READER NOTE: LEARN THROUGH THE WORK · AGENTIC AI DISPATCHES]`,
      `Topic: ${topic}`,
      ``,
      message.trim(),
    ].join("\n");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role: "",
          company: "",
          message: formattedMessage,
          interestType: "applied_agentics",
          source: "learn-through-the-work-reader",
          _hp: hp,
        }),
      });

      const data = await res.json();
      if ((res.ok || res.status === 202) && data.ok) {
        setStatus(data.notification === "sent" ? "success" : "recorded");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <article className={s.page}>
      {/* ====================================================================
          MASTHEAD / HERO ("Learn through the work.")
          Modeled on research.socialcapital.com simplicity, elevated to Rig Estate
          ==================================================================== */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <p className={s.eyebrow}>
              Robert Paddock <span>/</span> Applied Agentics &amp; Industrial Reality
            </p>
            <h1 className={s.mastheadTitle}>
              Learn through the work<span>.</span>
            </h1>
            <p className={s.dek}>
              Dispatches from the Operational Seam. Where 20+ years of enterprise systems arc meets two years inside the agentic runtime.
            </p>
            <p className={s.heroLead}>
              Chamath Palihapitiya publishes macro investment theses on beehiiv. I operate inside The Beehive on the physical enterprise floor. Nobody knows me; everybody knows Chamath. But while Silicon Valley generates code from 30,000 feet, every enterprise transformation succeeds or fails in the unwritten 20% seam between software and the physical dock. This is where I build, question, and learn through the work.
            </p>
            <div className={s.byline}>
              <span className={s.square} />
              <span>
                Robert Paddock <small>Founder, Operator, Enterprise Technology Leader</small>
              </span>
            </div>
          </div>

          <div className={s.heroVisual} aria-hidden="true">
            <div className={s.heroPlateFrame}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.plateInner}>
                <span className={s.plateTag}>RUNTIME SPECIFICATION · ARCHITECTURAL SET</span>
                <BeehiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>20+ YRS</strong>
                    <span>Systems Arc</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>13 CELLS</strong>
                    <span>The Beehive OS</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>20% SEAM</strong>
                    <span>Delivery Seam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#essays">01 / The Pillar Essays</a>
          <a href="#field-notes">02 / Operational Field Notes</a>
          <a href="#the-collaborative-seam">03 / The Delivery Seam &amp; The Block</a>
          <a href="#operator-brief">04 / The Operator Behind the Notebook</a>
          <a href="#conversation">05 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE PILLAR ESSAYS (Weblog Triad)
          Leading immediately under the hero: Mary's Sheet, The Application Layer, The Delivery Seam
          ==================================================================== */}
      <section id="essays" className={s.dispatchesSection}>
        <div className={s.dispatchesInner}>
          <div className={s.dispatchesHead}>
            <p className={s.eyebrow}>01 / The Weblog Triad</p>
            <h2>The Pillar Essays<span>.</span></h2>
            <p className={s.dispatchesDek}>
              Foundational architectural essays exploring domain reality, multi-agent runtime design, and the physical delivery seam where automated code meets industrial operations.
            </p>
          </div>

          <div className={s.dispatchList}>
            {PILLAR_ESSAYS.map((d) => (
              <article key={d.num} className={s.dispatchCard} id={`dispatch-${d.slug}`}>
                <div className={s.dispatchSpotCol}>
                  <div className={s.spotFrame}>
                    {d.spot === "beehive" && <BeehiveSpot />}
                    {d.spot === "seam" && <SeamJointSpot />}
                    {d.spot === "polanyi" && <PolanyiSheetSpot />}
                  </div>
                  <span className={s.spotLabel}>{d.category}</span>
                </div>

                <div className={s.dispatchBodyCol}>
                  <div className={s.dispatchMeta}>
                    <span className={s.dispatchNum}>{d.num} / ESSAY</span>
                    <span className={s.dispatchDot}>·</span>
                    <span className={s.dispatchTime}>{d.readTime}</span>
                  </div>
                  <h3 className={s.dispatchTitle}>{d.title}</h3>
                  <p className={s.dispatchSubtitle}>{d.subtitle}</p>
                  <p className={s.dispatchText}>{d.summary}</p>
                  
                  <div className={s.dispatchCallout}>
                    <span className={s.calloutLabel}>OPERATIONAL TAKEAWAY</span>
                    <p className={s.calloutText}>{d.takeaway}</p>
                  </div>

                  <div className={s.dispatchActions}>
                    <Link href={d.postHref} className={s.dispatchReadBtn}>
                      <span>Read Full Essay</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleSelectTopic(d.topicKey)}
                      className={s.dispatchDiscussBtn}
                    >
                      <span>Share your perspective on this</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: OPERATIONAL DOCTRINE & FIELD NOTES
          Field audits, B.O.S.S. protocol, and '20 People' fallacy from production
          ==================================================================== */}
      <section id="field-notes" className={s.dispatchesSection} style={{ borderTop: "1px solid var(--line)" }}>
        <div className={s.dispatchesInner}>
          <div className={s.dispatchesHead}>
            <p className={s.eyebrow}>02 / Operational Doctrine &amp; Field Notes</p>
            <h2>Field Notes from the Arena<span>.</span></h2>
            <p className={s.dispatchesDek}>
              Runtime audits, governance frameworks, and operational reality checks drawn directly from enterprise cutovers and physical floor execution.
            </p>
          </div>

          <div className={s.dispatchList}>
            {FIELD_NOTES.map((d) => (
              <article key={d.num} className={s.dispatchCard} id={`dispatch-${d.slug}`}>
                <div className={s.dispatchSpotCol}>
                  <div className={s.spotFrame}>
                    {d.spot === "boss" && <BossAuditSpot />}
                    {d.spot === "floor" && <FloorMatrixSpot />}
                  </div>
                  <span className={s.spotLabel}>{d.category}</span>
                </div>

                <div className={s.dispatchBodyCol}>
                  <div className={s.dispatchMeta}>
                    <span className={s.dispatchNum}>{d.num} / NOTE</span>
                    <span className={s.dispatchDot}>·</span>
                    <span className={s.dispatchTime}>{d.readTime}</span>
                  </div>
                  <h3 className={s.dispatchTitle}>{d.title}</h3>
                  <p className={s.dispatchSubtitle}>{d.subtitle}</p>
                  <p className={s.dispatchText}>{d.summary}</p>
                  
                  <div className={s.dispatchCallout}>
                    <span className={s.calloutLabel}>OPERATIONAL TAKEAWAY</span>
                    <p className={s.calloutText}>{d.takeaway}</p>
                  </div>

                  <div className={s.dispatchActions}>
                    <button
                      type="button"
                      onClick={() => handleSelectTopic(d.topicKey)}
                      className={s.dispatchDiscussBtn}
                    >
                      <span>Share your perspective on this</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: THE COLLABORATIVE SEAM & THE BLOCK
          Synthesizing 8090 Inc. Frontier AI Factory with Capo's Delivery Seam
          and direct architectural connection to The Block (60 Outcomes)
          ==================================================================== */}
      <section id="the-collaborative-seam" className={s.seamSection}>
        <div className={s.seamInner}>
          <div className={s.seamHead}>
            <p className={s.eyebrow}>03 / The Collaboration &amp; Delivery Architecture</p>
            <h2>Filling the 20% Seam<span>.</span></h2>
            <p className={s.seamDek}>
              Whether an enterprise generates software externally (8090 Inc.) or deploys autonomous developer droids internally (Factory.ai), automated software always crashes into the same physical reality: the 20% operational seam.
            </p>
          </div>

          <div className={s.seamDiagramContainer}>
            <div className={s.seamBayLeft}>
              <span className={s.bayPlaque}>80% FACTORIES · 8090 &amp; FACTORY.AI</span>
              <h3>External Factories &amp; Internal Droids</h3>
              <ul className={s.bayList}>
                <li>Automated high-speed code generation</li>
                <li>Frontier foundation model leverage</li>
                <li>Rapid full-stack system scaffolding</li>
                <li>Instant prototype &amp; SaaS velocity</li>
              </ul>
              <div className={s.bayFooter}>80% of Enterprise Codebase</div>
            </div>

            <div className={s.seamJointCenter}>
              <div className={s.jointPlaque}>THE DELIVERY SEAM</div>
              <div className={s.jointGraphic}>
                <SeamJointSpot />
              </div>
              <p className={s.jointCaption}>
                Where software meets dock reality, unwritten exceptions, and cutover accountability.
              </p>
            </div>

            <div className={s.seamBayRight}>
              <span className={s.bayPlaque}>20% SEAM · ROBERT PADDOCK</span>
              <h3>Collaborative Delivery &amp; Sales Partner</h3>
              <ul className={s.bayList}>
                <li><strong>Filling the 20% Seam:</strong> Mary's sheet &amp; Polanyi discovery</li>
                <li><strong>Engineered Sales:</strong> Land enterprise deals by proving code</li>
                <li><strong>Systems Arc &amp; The Rig:</strong> 20+ years, 50 implementations, living runtime</li>
                <li><strong>Team Leadership:</strong> Running cross-functional technical &amp; ops teams</li>
              </ul>
              <div className={s.bayFooter}>Sell · Deliver · Run the Teams to Execute</div>
            </div>
          </div>

          <div className={s.pillarTrio}>
            <div className={s.pillarItem}>
              <span className={s.pillarNum}>PILLAR 01 // DELIVERY SEAM</span>
              <h4>Filling the 20% Seam</h4>
              <p>
                Software factories (8090, Factory.ai, Gas City) generate the 80% code mass. The 20% seam—where software hits physical inventory, dock workflows, Mary's spreadsheet (Polanyi's Paradox), and zero-rollback cutovers—is where transformations actually succeed or fail.
              </p>
            </div>
            <div className={s.pillarItem}>
              <span className={s.pillarNum}>PILLAR 02 // REVENUE &amp; GROWTH</span>
              <h4>Engineered Sales</h4>
              <p>
                Landing and generating enterprise business through working software, not slideware. Building solutions directly into code, diagnosing actual architectural pain, and aligning technical reality with C-suite P&amp;L objectives.
              </p>
            </div>
            <div className={s.pillarItem}>
              <span className={s.pillarNum}>PILLAR 03 // THE WORK &amp; RUNTIME</span>
              <h4>Systems Arc &amp; The Rig</h4>
              <p>
                20+ years of enterprise systems arc across 50 implementations and 15 at massive scale (docks to boardroom). Paired with an intimate, hands-on relationship with production code in The Rig—building on the exact same trajectory as 8090 and Factory.ai.
              </p>
            </div>
          </div>

          <div className={s.realityCallout}>
            <div className={s.realityCalloutContent}>
              <p className={s.realityCalloutHead}>THE REALITY GAP // BEYOND ECOSYSTEM THEORIES</p>
              <h3 className={s.realityCalloutTitle}>
                The &ldquo;20 People&rdquo; Fallacy vs. The 20% Seam<span>.</span>
              </h3>
              <p className={s.realityCalloutText}>
                Ecosystem theorists and tech influencers love to propose: <em>&ldquo;Uh duh, give me 20 implementation champions and we&rsquo;ll drive adoption.&rdquo;</em> Sure—if you could walk into a company and find 20 aligned, articulate practitioners ready to go, you could do all kinds of good things with that. <em>It don&rsquo;t work that way.</em>
              </p>
              <p className={s.realityCalloutText}>
                In real enterprise operations, you aren&rsquo;t handed 20 ready champions. You inherit 150 people across 25 disjointed task forces, conflicting departmental incentives, legacy system trauma, and Mary&rsquo;s desktop spreadsheet running the loading dock. She identifies a tiny sliver of the seam, but mistakes a slide-deck checklist for operational reality.
              </p>
              <p className={s.realityCalloutText}>
                The real 20% seam is where software either bites into the shop floor or gets rejected like a bad organ transplant. The software factory writes the 80% code mass. The delivery partner aligns the 150 people, unearths the unwritten truth, and bridges engineered sales to zero-rollback delivery.
              </p>
            </div>
            <div className={s.realityContrastBay}>
              <div className={s.contrastRow}>
                <span className={s.contrastLabel}>THE THEORETICAL VIEW (80%)</span>
                <span className={s.contrastValueStated}>&ldquo;Give me 20 champions to run the partner playbook.&rdquo;</span>
              </div>
              <div className={s.contrastRow}>
                <span className={s.contrastLabel}>THE ARENA REALITY (20% SEAM)</span>
                <span className={s.contrastValueActual}>150 people across 25 task forces, Mary&rsquo;s spreadsheet, and zero-rollback cutover accountability.</span>
              </div>
              <div className={s.contrastRow}>
                <span className={s.contrastLabel}>THE OPERATOR&rsquo;S RULE</span>
                <span className={s.contrastRuleText}>&ldquo;You don&rsquo;t inherit alignment. You build it on the floor.&rdquo;</span>
              </div>
            </div>
          </div>

          <div className={s.mandateBanner}>
            <span className={s.mandateLead}>THE OPERATIONAL MANDATE</span>
            <p className={s.mandateText}>Sell. Deliver. Run the teams to execute.</p>
          </div>

          {/* Connection to The Block Card */}
          <div className={s.blockConnectionCard}>
            <div className={s.blockConnectionBody}>
              <p className={s.eyebrow} style={{ margin: 0 }}>FLOWCRAFT &amp; DIGOPS · SOVEREIGN ASSETS</p>
              <h3>The Block: 60 Proven Leadership &amp; Enterprise Outcomes</h3>
              <p>
                Every architectural dispatch in this publication is backed by operational catalog outcomes—from custom enterprise agentic systems (Category 07) to full-scale digital transformation investments. Explore the read-only catalog projected directly from Operations (:3300).
              </p>
            </div>
            <div className={s.blockConnectionActions}>
              <Link href="/block/" className={s.blockCtaPrimary}>
                <span>Explore The Block (60 Outcomes)</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/block/custom/" className={s.blockCtaSecondary}>
                <span>Custom Agentic Software (Category 07) &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: THE OPERATOR BEHIND THE NOTEBOOK
          Answering 'Who is Rob?' with authentic systems architecture authority
          ==================================================================== */}
      <section id="operator-brief" className={s.briefSection}>
        <div className={s.briefInner}>
          <div className={s.briefHead}>
            <p className={s.eyebrow}>04 / Identity &amp; Authority</p>
            <h2>The Operator Behind the Notebook<span>.</span></h2>
            <p className={s.briefDek}>
              Nobody knows me; everybody knows Chamath. That is the point. Macro thinkers invest in market waves; operators make them survive when they hit the physical shop floor.
            </p>
          </div>

          <div className={s.briefGrid}>
            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>01 / PROOF IN THE ARENA</span>
                <h3>20+ Years in Enterprise Systems</h3>
              </div>
              <p>
                50 enterprise implementations, 15 at massive scale, from warehouse docks to executive boardrooms. Nobody understands enterprise systems at the customer level better. 15+ cutovers without a single rollback, recovering an at-risk $8M program to save $2M, and consolidating 200 software silos down to 25 core operating platforms.
              </p>
              <div className={s.cardFootnote}>
                <span>Track Record</span>
                <strong>15+ Cutovers · $2M Saved</strong>
              </div>
            </div>

            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>02 / RUNTIME DEPTH</span>
                <h3>A Proven Agentic Contraption</h3>
              </div>
              <p>
                While the market talks about AI agents in slide decks, I built a real, working agentic runtime right here: <strong>The Rig</strong>. It is a no-fooling something on the same frontier trajectory as 8090, Factory.ai, and Gas City—operating with deterministic caller gates, verifiable audit trails, and an intimate daily relationship with production code.
              </p>
              <div className={s.cardFootnote}>
                <span>Agentic Engine</span>
                <strong>13 Cells · Production Governed</strong>
              </div>
            </div>

            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>03 / OPERATING TRUTH</span>
                <h3>Mary's Sheet &amp; Polanyi's Paradox</h3>
              </div>
              <p>
                <em>&ldquo;We know more than we can tell.&rdquo;</em> Slabs of enterprise software get bought, but the factory runs on Mary's 15-year-old desktop spreadsheet. Frontier AI code factories generate software fast, but only an operator who knows the dock can translate that tacit reality into working code.
              </p>
              <div className={s.cardFootnote}>
                <span>Domain Reality</span>
                <strong>Tacit Knowledge Discovery</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          THE WORKING POSITION & INQUIRIES
          Foundational principles: Company Knowledge, Human Authority, Useful Work
          ==================================================================== */}
      <section id="the-position" className={s.positionSection}>
        <div className={s.positionInner}>
          <div className={s.positionHead}>
            <p className={s.eyebrow}>Operating Principles</p>
            <h2>Company Knowledge. Human Authority. <em>Useful Work.</em></h2>
            <p className={s.positionDek}>
              Why durable applied agentics begins with maintained enterprise records, explicit human authority, and verifiable results that the business can run.
            </p>
          </div>

          <div className={s.principlesGrid}>
            <div className={s.principleCard}>
              <span className={s.principleNum}>01</span>
              <h3>The foundation is company knowledge.</h3>
              <p>
                I build on the data, history, and judgment the company already owns. I look for the tacit logic in how people work before trying to codify it in software.
              </p>
            </div>
            <div className={s.principleCard}>
              <span className={s.principleNum}>02</span>
              <h3>The mandate is human.</h3>
              <p>
                I define what the agent may see and do, which decisions people retain, and who can stop the work. I want to follow a result back through the information, actions, and approvals that produced it.
              </p>
            </div>
            <div className={s.principleCard}>
              <span className={s.principleNum}>03</span>
              <h3>The result has to hold up.</h3>
              <p>
                I use rules where the step is clear and agents where interpretation helps. I test exceptions and recovery, watch the cost of reaching a useful result, and equip people to run and improve the workflow.
              </p>
            </div>
          </div>

          {/* The Questions Grid */}
          <div className={s.questionsContainer}>
            <div className={s.questionsHead}>
              <p className={s.eyebrow}>Three Core Inquiries</p>
              <h3>Questions from the Field</h3>
            </div>
            <div className={s.questionGrid}>
              {QUESTIONS.map((q) => (
                <div key={q.num} className={s.questionCard}>
                  <span className={s.questionNum}>{q.num} / QUESTION</span>
                  <h4 className={s.questionTitle}>&ldquo;{q.question}&rdquo;</h4>
                  <p className={s.questionBody}>{q.body}</p>
                  <button
                    type="button"
                    onClick={() => handleSelectTopic(q.topicKey)}
                    className={s.questionPrompt}
                  >
                    Share your perspective on this &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Four Waves Inflection */}
          <div className={s.fourWavesBay}>
            <div className={s.figureBar}>
              <span>THE FOUR WAVES OF ENTERPRISE TECHNOLOGY</span>
              <span className={s.here}><i /> WE ARE HERE</span>
            </div>
            <a
              href="/diagrams/four-waves.svg"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the four waves diagram at full size in a new tab"
            >
              <Image
                src="/diagrams/four-waves.svg"
                alt="Four waves of enterprise technology, showing applied agentics operating across existing enterprise assets."
                width={1200}
                height={520}
                unoptimized
                className={s.diagram}
              />
            </a>
            <p className={s.figureCaption}>
              A conceptual picture of the inflection: bringing autonomous agents into production on the foundation of existing company data cores.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: DIRECT CORRESPONDENCE ("Continue the Conversation")
          Private, direct reader exchange straight to Rob's desk
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>05 / Direct Correspondence</p>
            <h2>Continue the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              Have a thought, a question, or an operational challenge from your own organization? Send me a note. It comes directly to my desk, and I will reply personally.
            </p>
            <span className={s.privacyBadge}>Private reader correspondence · No public comments · Straight to Rob</span>
          </div>

          <div className={s.formCard}>
            {status === "success" || status === "recorded" ? (
              <div className={s.successAlert}>
                <h3 className={s.successTitle}>
                  {status === "success" ? "Thank you for your note." : "Your note has been recorded."}
                </h3>
                <p className={s.successText}>
                  {status === "success"
                    ? "Your message has been sent directly to Rob. He reads every reader note personally and will reply to your email."
                    : "Your note was safely recorded. Direct email notification is unconfirmed on this environment — write robert@idigdata.com directly if you need a same-day response."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                  className={s.resetButton}
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <div role="alert" className={s.errorAlert}>
                    Something went wrong sending your note. Please try again, or write directly to{" "}
                    <a href="mailto:robert@idigdata.com" style={{ color: "inherit", fontWeight: 700 }}>
                      robert@idigdata.com
                    </a>.
                  </div>
                )}

                {/* Honeypot for bot defense */}
                <div aria-hidden="true" className={s.honeypot}>
                  <label htmlFor="agentic-reader-hp">Leave this empty</label>
                  <input
                    id="agentic-reader-hp"
                    name="_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                </div>

                <div className={s.formRow}>
                  <div>
                    <label htmlFor="reader-name" className={s.label}>
                      Your Name
                    </label>
                    <input
                      id="reader-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={s.input}
                      disabled={status === "submitting"}
                      aria-invalid={errors.name ? true : undefined}
                    />
                    {errors.name && <p className={s.fieldError}>{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="reader-email" className={s.label}>
                      Your Email
                    </label>
                    <input
                      id="reader-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className={s.input}
                      disabled={status === "submitting"}
                      aria-invalid={errors.email ? true : undefined}
                    />
                    {errors.email && <p className={s.fieldError}>{errors.email}</p>}
                  </div>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-topic" className={s.label}>
                    Topic or Question
                  </label>
                  <select
                    id="reader-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={s.select}
                    disabled={status === "submitting"}
                  >
                    <option value="General thoughts on agentic workflows">
                      General thoughts on agentic workflows
                    </option>
                    <option value="Mary's Sheet and tacit domain reality">
                      Essay 01: Mary's Sheet &amp; Polanyi's Paradox
                    </option>
                    <option value="The Beehive multi-agent runtime in production">
                      Essay 02: Chamath's beehiiv vs. The Beehive
                    </option>
                    <option value="The 80/90 collaborative delivery seam">
                      Essay 03: The Two Software Factories (8090 vs. Factory.ai)
                    </option>
                    <option value="The B.O.S.S. protocol and stated vs actual reality">
                      Field Note 01: The B.O.S.S. Protocol
                    </option>
                    <option value="The 20 people fallacy and the true operational seam">
                      Field Note 02: The '20 People' Fallacy
                    </option>
                    <option value="What the experienced person knows">
                      Inquiry 01: What the experienced person knows
                    </option>
                    <option value="When an agent acts vs. person decides">
                      Inquiry 02: When an agent acts vs. person decides
                    </option>
                    <option value="From prototype to dependable enterprise work">
                      Inquiry 03: From prototype to dependable enterprise work
                    </option>
                  </select>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-message" className={s.label}>
                    Your Thought, Question, or Perspective
                  </label>
                  <textarea
                    id="reader-message"
                    required
                    rows={5}
                    placeholder="Share what you are navigating in your enterprise, a question on where agentics breaks on the physical floor, or thoughts on the 80/90 seam..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    className={s.textarea}
                    disabled={status === "submitting"}
                    aria-invalid={errors.message ? true : undefined}
                  />
                  {errors.message && <p className={s.fieldError}>{errors.message}</p>}
                </div>

                <div className={s.submitRow}>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={s.submitButton}
                  >
                    <span className={s.submitSquare} aria-hidden="true" />
                    {status === "submitting" ? "Sending note..." : "Send note to Rob"}
                  </button>
                  <span className={s.privacyFooter}>
                    Direct correspondence · No public comments · Respects your privacy
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Close */}
      <footer className={s.close}>
        <div className={s.closeInner}>
          <div>
            <p className={s.eyebrow}>An Open Stance</p>
            <h2>I keep learning<br />through the work.</h2>
          </div>
          <div>
            <p>
              I expect my view to develop as I build, test, and operate these systems in production. What should we delegate? What needs human judgment? How do we know the result held up on the dock?
            </p>
            <p>
              That is why I keep coming back to <em>We Are Here.</em>
            </p>
            <div className={s.links}>
              <Link href="/experience/">Explore the experience &rarr;</Link>
              <Link href="/block/">Explore outcomes in The Block &rarr;</Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
