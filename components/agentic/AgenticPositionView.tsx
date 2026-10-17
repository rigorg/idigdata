"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import s from "./AgenticPositionView.module.css";

// ============================================================================
// THE THREE GEOMETRIC SYMBOLS (ARCHITECTURAL DRAFTING SVGs)
// B.O.S.S. (Constellation) · FlowCraft (Workflow Blocks) · The Rig (Gantry Harness)
// ============================================================================

/**
 * 01 / Theme 01 — The Operational Seam
 * Precision architectural cross-section: Stated Digital Plane (top) and Living Floor (bottom)
 * meeting at an active illuminated laser seam line with central datum alignment crosshair.
 */
function ProcessConstellationSpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background card frame */}
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />
      
      {/* Upper Plate: Stated Digital Plane (ERP / Database Blueprint) */}
      <path d="M 6 6 L 42 6 L 42 20 L 28 20 L 24 23 L 6 23 Z" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      {/* Digital blueprint grid lines */}
      <line x1="10" y1="11" x2="38" y2="11" stroke="#9E7D3B" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="10" y1="16" x2="26" y2="16" stroke="#DDD7C8" strokeWidth="0.8" />

      {/* Lower Plate: Living Operational Floor (Physical Reality) */}
      <path d="M 6 25 L 24 25 L 28 22 L 42 22 L 42 42 L 6 42 Z" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      {/* Floor clipboard verification marks */}
      <line x1="10" y1="31" x2="20" y2="31" stroke="#2E4F3E" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="36" x2="30" y2="36" stroke="#2E4F3E" strokeWidth="1.2" strokeLinecap="round" />

      {/* The Illuminated Seam: Precision gold active threshold */}
      <path d="M 5 24 L 24 24 L 28 21 L 43 21" stroke="#9E7D3B" strokeWidth="1.8" strokeLinecap="round" />

      {/* Central Seam Alignment Datum / Caliper Crosshair */}
      <circle cx="26" cy="22.5" r="4" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.4" />
      <circle cx="26" cy="22.5" r="1.5" fill="#8F4A38" />
      <line x1="26" y1="16.5" x2="26" y2="19.5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="25.5" x2="26" y2="28.5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" />

      {/* Corner calibration tick marks */}
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 02 / Theme 02 — Human Intelligence & Binary Intelligence
 * Sovereign human authority (concentric compass ring) and binary execution
 * (isometric software cube) synthesizing at a central deterministic gold handshake gate.
 */
function WorkflowBlocksSpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background card frame */}
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />

      {/* Left Node: Human Authority (Concentric Sovereign Compass) */}
      <circle cx="17" cy="24" r="10.5" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="17" cy="24" r="6.5" stroke="#9E7D3B" strokeWidth="1" strokeDasharray="2.5 1.5" />
      <circle cx="17" cy="24" r="2.2" fill="#1E2024" />

      {/* Right Node: Binary Intelligence (Faceted Isometric Software Cube) */}
      <path d="M 31 15 L 39 19.5 L 39 28.5 L 31 33 L 23 28.5 L 23 19.5 Z" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="31" y1="15" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="39" y1="19.5" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="23" y1="19.5" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />

      {/* Central Synthesis Checkpoint / Deterministic Gold Handshake Diamond */}
      <path d="M 24 19.5 L 28.5 24 L 24 28.5 L 19.5 24 Z" fill="#9E7D3B" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.2" fill="#FAF6EE" />

      {/* Directed Pipeline Flow Ticks */}
      <path d="M 7 24 L 9.5 24" stroke="#9E7D3B" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 38.5 24 L 41 24" stroke="#9E7D3B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Corner calibration tick marks */}
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 03 / Theme 03 — The Software Factory & Gantry Harness
 * Heavy industrial gantry rail on sovereign iron with dual AST caliper inspection arms
 * guiding and verifying a living software engine core.
 */
function FactorySpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background card frame */}
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />

      {/* Overhead Gantry Structural Rail */}
      <rect x="6" y="7" width="36" height="5" rx="1" fill="#1E2024" stroke="#1E2024" strokeWidth="1" />
      <line x1="10" y1="9.5" x2="38" y2="9.5" stroke="#9E7D3B" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Dual Vertical Gantry Caliper Arms */}
      <line x1="12" y1="12" x2="12" y2="20" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="36" y1="12" x2="36" y2="20" stroke="#1E2024" strokeWidth="1.2" />

      {/* Precision AST Inspection Calipers */}
      <path d="M 10 20 L 15 20 L 15 28 L 19 28" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 38 20 L 33 20 L 33 28 L 29 28" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Fabricated Software Engine Core: Precision Nested Diamond */}
      <rect x="18.5" y="18.5" width="11" height="11" rx="1.5" transform="rotate(45 24 24)" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="2.8" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1" />
      <circle cx="24" cy="24" r="1.2" fill="#2E4F3E" />

      {/* Sovereign Iron Bed / Machine Anvil Base */}
      <path d="M 6 36 L 10 32 L 38 32 L 42 36 L 42 41 L 6 41 Z" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="14" y1="36" x2="34" y2="36" stroke="#9E7D3B" strokeWidth="1" />

      {/* Corner calibration tick marks */}
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Unified Enterprise Outcome Loop Symbol (Hero Centerpiece Plate)
 */
function PeopleSystemsWorkflowSpot() {
  return (
    <div className={s.emblemSpot}>
      <a
        href="/diagrams/v66-true-circular-loop.svg"
        target="_blank"
        rel="noreferrer"
        aria-label="Open The Outcome Loop architectural diagram at full size in a new tab"
        className={s.emblemLink}
      >
        <Image
          src="/diagrams/v66-true-circular-loop.svg"
          alt="The Outcome Loop · 01 Intent, 02 Define, 03 Deliver, 04 Outcome — People & Agents Contributing Throughout the Loop"
          width={1080}
          height={780}
          unoptimized
          className={s.emblemImg}
          priority
        />
      </a>
      <div className={s.emblemCaption}>
        <strong className={s.emblemCaptionTitle}>The Outcome Loop</strong>
        <span className={s.emblemCaptionSubtitle}>01 Intent &middot; 02 Define &middot; 03 Deliver &middot; 04 Outcome &#8634;</span>
        <a
          href="/diagrams/v66-true-circular-loop.svg"
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "6px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brass-dark)",
            textDecoration: "underline",
          }}
        >
          View Full-Size Diagram &#8599;
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// THE THREE THEMES DATA SPECIFICATION
// ============================================================================

interface TitanQuote {
  speaker: string;
  role: string;
  source: string;
  quote: string;
}

interface FieldNoteCard {
  rubric: string;
  stamp: string;
  text: string;
  signature: string;
  footerLabel: string;
}

interface CollectivePillar {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  spot: "constellation" | "blocks" | "factory";
  titanQuote: TitanQuote;
  body: string;
  fieldNoteCards: FieldNoteCard[];
  inquiries: string[];
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
  actionLabel: string;
}

const COLLECTIVES: CollectivePillar[] = [
  {
    num: "01",
    tag: "WEB LOG 01 // WHY 70% OF ERPs MISS EXPECTATIONS",
    actionLabel: "Join the Discussion",
    title: "Transforming Zeros and Ones",
    subtitle: "Mary's Sheet, Unifying Bastardized Item Catalogs & Why Transformation Still Starts With People, Data, Systems, and Workflows",
    spot: "constellation",
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital · Co-Host, All-In",
      source: "8090 (“The Space Between the Tasks”)",
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    body:
      "Over 70% of ERP initiatives miss expectations because they treat transformation as a software install instead of aligning people, data, systems, and workflows. Look at any legacy manufacturer trying to build a unified item catalog: decades-old 'smart schemas' bastardized over time, third parties relying on item translations, and internal departments using different keys across different systems. You only solve that by starting with the people on the floor.",
    fieldNoteCards: [
      {
        rubric: "FIELD BRIEF 01 // THE REAL REASON 70% OF ERPs MISS THE MARK",
        stamp: "MARY'S SHEET",
        text: "Walk almost any plant floor after a multimillion-dollar ERP go-live and you will find 'Mary's Sheet'—the clipboard or spreadsheet keeping the operation running when the database says Line 2 is green while mechanics have the pump unbolted on the bench. Now we have agentics layered right on top of that same world: people, data, systems, and workflows. Start with Mary on the floor and unify the data around how the work really happens, and she finally gets her time back to lead.",
        signature: "— Robert Paddock · Field Brief 01",
        footerLabel: "PEOPLE · DATA · SYSTEMS · WORKFLOWS",
      },
    ],
    inquiries: [
      "Why 70% of ERPs miss expectations: capturing unwritten floor truth ('Mary's Sheet') before automating",
      "Unifying legacy item catalogs: untangling bastardized 'smart schemas,' 3rd-party translations, and cross-department keys with people like Don WMS",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Dispatch 01: Mary's Sheet & Unifying the Item Catalog",
    topicKey: "01 / Transforming Zeros & Ones: Mary's Sheet & Item Catalogs",
  },
  {
    num: "02",
    tag: "WEB LOG 02 // TECHNOLOGY WORKING FOR PEOPLE",
    actionLabel: "Join the Discussion",
    title: "People and Agents at Work",
    subtitle: "Don WMS, the Unified Item Catalog & His Partner 'DON': Why Designing Around What People Love to Do Is the Foundation",
    spot: "blocks",
    titanQuote: {
      speaker: "Marc Benioff",
      role: "Chair & CEO, Salesforce · Investor, 8090",
      source: "Dreamforce / The Road to Service-as-Software",
      quote:
        "What matters isn’t just the model—it’s the metadata, the business context, and the deterministic enterprise workflows.",
    },
    body:
      "Long before agentics, the hardest part of enterprise transformation was human: helping a veteran operator whose whole purpose was holding a fragile system together in his head become part of the journey—helping unify the item catalog and stepping into workflows designed around what he loved to do. That lesson is the exact blueprint for how people and agents work together today.",
    fieldNoteCards: [
      {
        rubric: "FIELD BRIEF 02 // UNIFYING THE ITEM CATALOG & DON'S PARTNER, 'DON'",
        stamp: "DON WMS + DON",
        text: "Before agentics, we called him Don WMS. Don worked for a multi-location manufacturing and distribution company in New York, in tight city quarters cobbled together over 30–40 years where every inch of space was at a premium and constantly in movement. With bastardized 'smart' item schemas, third-party item translations, different internal department keys, and vendors shipping without proper labels, Don built a fragile system that worked—he knew where every item and every person was. Transformation was hard on him and his crew because knowing where everything sat was his purpose. Making Don part of the journey to unify the item catalog—and designing the workflows so he still did what he loved to do, walking the floor around his people armed with real-time knowledge on an iPad—changed everything. It was still Don WMS, but Don WMS had a partner, DON—and that was technology working for Don.",
        signature: "— Robert Paddock · Field Brief 02",
        footerLabel: "DON WMS + DON · TECHNOLOGY WORKING FOR PEOPLE",
      },
    ],
    inquiries: [
      "Don WMS & his iPad partner 'DON': designing workflows so people keep doing what they love, armed with real-time knowledge",
      "Making domain veterans part of the unified item catalog journey—and carrying that partnership into the agentic era",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Dispatch 02: Don WMS, His Partner 'DON' & People at Work",
    topicKey: "02 / People and Agents at Work: Don WMS & Partner DON",
  },
  {
    num: "03",
    tag: "WEB LOG 03 // THE RABBIT HOLE & DISCO DANCING",
    actionLabel: "Join the Discussion",
    title: "The Agentic Development Company",
    subtitle: "Falling Down the Rabbit Hole, the Disco Dance of Agents Going Off the Rails & Where Agentic AI Separates from Vibe Coding",
    spot: "factory",
    titanQuote: {
      speaker: "Matan Grinberg & Eno Reyes",
      role: "Co-Founders, Factory (factory.ai)",
      source: "Factory 2.0 Manifesto",
      quote:
        "The incremental units of this system are AI agents. This system will be built by engineers, and in turn will build their software. This system is the software factory... We are building the machine that builds the machine.",
    },
    body:
      "Over the last three years of hands-on agentic development, I have lived two distinct realities: the pure builder joy of falling down the Rabbit Hole into a whole new world, and the painful Disco Dance when agents go off the rails the deeper you get. Surviving both is what separates disciplined Agentic AI from Vibe Coding—and forged The Rig to build B.O.S.S. and FlowCraft.",
    fieldNoteCards: [
      {
        rubric: "FIELD BRIEF 03 // THE PURE JOY OF A WHOLE NEW WORLD FOR BUILDERS",
        stamp: "THE RABBIT HOLE",
        text: "There is a pure, unmistakable joy to what this period of time has given builders. For those of us who fell down the rabbit hole, it is a whole new world: sitting at your desk watching multiple agent harnesses coordinate across an architectural blueprint, turning 20 years of operational patterns into working data models, financial suites, and workflow blocks at a pace you never dreamed possible.",
        signature: "— Robert Paddock · Field Brief 03",
        footerLabel: "PURE BUILDER JOY · A WHOLE NEW WORLD",
      },
      {
        rubric: "FIELD BRIEF 04 // BURNING IT DOWN & AGENTIC AI VS. VIBE CODING",
        stamp: "DISCO DANCING",
        text: "Then there is Disco Dancing: the pain of thinking things are happening and finding out they didn't, learning how to interact, burning down the code and rebuilding from the ground up, and keeping pace with constant changes in model capabilities, new tools, and new standards. Agents go off the rails—and the deeper you get, the harder it is to solve. That exact point is where the separation between disciplined Agentic AI and Vibe Coding comes into play.",
        signature: "— Robert Paddock · Field Brief 04",
        footerLabel: "OFF THE RAILS · AGENTIC AI VS. VIBE CODING",
      },
    ],
    inquiries: [
      "The Rabbit Hole vs. Disco Dancing: the joy of a new builder world and the pain of burning code down to rebuild it right",
      "Where disciplined Agentic AI (The Rig) separates from Vibe Coding as systems get deeper",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Dispatch 03: The Rabbit Hole & Disco Dancing",
    topicKey: "03 / The Agentic Development Company: Rabbit Hole & Disco Dancing",
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
  const [topic, setTopic] = useState("All Three Systems & Field Theses");
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
      `[COLLECTIVE NOTE: LEARN THROUGH THE WORK]`,
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
          source: "website-agentic",
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
          ==================================================================== */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <p className={s.eyebrow}>
              Robert Paddock <span>/</span> Field Web Log: Human &amp; Binary Intelligence
            </p>
            <h1 className={s.mastheadTitle}>
              Learn through the work<span>.</span>
            </h1>
            <p className={s.dek}>
              Where 20+ years of business leadership and over 50 enterprise transformations meet three years of hands-on agentic development.
            </p>
            <p className={s.heroLead}>
              I connect people, systems, and workflows to shorten the path from intent to outcome. <strong>I call this era Binary Intelligence</strong> because it is still zeros and ones—now elevated to a level where human judgment can direct them at speed. Across stakeholder alignment on the plant floor, human-agentic workflow design around a Common Data Core, and operating a multi-harness <strong>Agentic Development Company</strong> proof of concept, <strong>people and agents contribute throughout <em>Intent, Define, Deliver, and Outcome</em>, with human judgment and accountability guiding the work</strong>.
            </p>
            <div className={s.byline}>
              <span className={s.square} />
              <span>
                Robert Paddock <small>Enterprise Transformation Executive &middot; Business Leadership, Technology Transformation &amp; Agentic Development</small>
              </span>
            </div>
          </div>

          <div className={s.heroVisual}>
            <div className={s.heroPlateFrame}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.plateInner}>
                <span className={s.plateTag}>HUMAN INTELLIGENCE &bull; BINARY INTELLIGENCE &bull; THE OUTCOME LOOP</span>
                <PeopleSystemsWorkflowSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>0s &amp; 1s</strong>
                    <span>Binary Intelligence</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>HUMAN LED</strong>
                    <span>Outcome Accountable</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>THE LOOP</strong>
                    <span>Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#systems-arc">01 / The Four Waves &amp; Working Ethos</a>
          <a href="#field-briefs">02 / Three Field Themes</a>
          <a href="#open-systems">03 / Lead-In to The Collective</a>
          <a href="#conversation">04 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE SYSTEMS ARC (THE FOUR WAVES) + PARADOX & TWO PRINCIPLES
          ==================================================================== */}
      <section id="systems-arc" className={s.fourWavesCompactSection}>
        <div className={s.fourWavesCompactInner}>
          <div className={s.fourWavesCompactHead}>
            <p className={s.eyebrow}>01 / Historical Foundation &amp; Working Ethos</p>
            <h2>The Four Waves of Enterprise Technology<span>.</span></h2>
            <p className={s.fourWavesCompactDek}>
              Across 20+ years of business leadership, over 50 enterprise transformations, and three years of hands-on agentic development, I have worked across every wave of enterprise computing. The Fourth Wave does not erase company memory&mdash;it pairs human judgment with binary intelligence across the foundation of the first three waves.
            </p>
          </div>

          <div className={s.fourWavesCompactBay}>
            <div className={s.figureBar}>
              <span className={s.figureSpecTag}>ARCHITECTURAL INFLECTION ANALYSIS // SPEC W-04 · HUMAN + BINARY INTELLIGENCE</span>
              <span className={s.here}><i /> WE ARE HERE</span>
            </div>
            <a
              href="/diagrams/four-waves.svg"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the four waves diagram at full size in a new tab"
              className={s.diagramLink}
            >
              <Image
                src="/diagrams/four-waves.svg"
                alt="Four waves of enterprise technology, showing applied agentics operating across existing enterprise assets."
                width={1200}
                height={660}
                unoptimized
                priority
                className={s.diagramCompact}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE THREE CORE THEMES & FOUR PERSONAL FIELD BRIEFS
          ==================================================================== */}
      <section id="field-briefs" className={s.triadSection}>
        <span id="the-collectives" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>02 / Field Web Log &middot; Three Field Themes &amp; Four Personal Field Briefs</p>
            <h2>One Human Thread Across Three Field Themes of Binary Intelligence<span>.</span></h2>
            <p className={s.triadDek}>
              Each theme leads with a personal field brief from the work&mdash;from <em>Mary&rsquo;s Sheet</em> on the plant floor, to <em>Don WMS</em> and his partner <em>DON</em> in tight New York quarters, to both sides of the builder&rsquo;s life in this era: <em>The Rabbit Hole</em> and <em>Disco Dancing</em>.
            </p>
          </div>

          <div className={s.triadGrid}>
            {COLLECTIVES.map((c) => (
              <article key={c.num} className={s.triadCard} id={`collective-${topicSlug(c.title)}`}>
                <div>
                  <div className={s.triadCardSpot}>
                    <div className={s.triadSpotFrame}>
                      {c.spot === "constellation" && <ProcessConstellationSpot />}
                      {c.spot === "blocks" && <WorkflowBlocksSpot />}
                      {c.spot === "factory" && <FactorySpot />}
                    </div>
                    <span className={s.triadNumTag}>{c.tag}</span>
                  </div>

                  <h3 className={s.triadCardTitle}>{c.title}</h3>
                  <div className={s.triadCardSubtitle}>{c.subtitle}</div>

                  {/* Concise Executive Thesis Summary */}
                  <p className={s.triadCardBody} style={{ marginTop: "14px" }}>{c.body}</p>

                  {/* Personal Field Brief Card(s) Lead First */}
                  {c.fieldNoteCards.map((fn) => (
                    <div key={fn.stamp} className={s.triadFieldNoteCard} style={{ marginTop: "16px" }}>
                      <div className={s.triadFieldNoteHead}>
                        <div className={s.triadFieldNoteRubric}>
                          <span className={s.triadFieldNoteDot} aria-hidden="true" />
                          <span>{fn.rubric}</span>
                        </div>
                        <span className={s.triadFieldNoteStamp}>{fn.stamp}</span>
                      </div>
                      <p className={s.triadFieldNoteText}>{fn.text}</p>
                      <div className={s.triadFieldNoteFooter}>
                        <span>{fn.signature}</span>
                        <span>{fn.footerLabel}</span>
                      </div>
                    </div>
                  ))}

                  {/* Supporting Industry Corroboration / Macro Consensus */}
                  <div style={{ marginTop: "16px", marginBottom: "6px" }}>
                    <span className={s.triadSectionTag}>SUPPORTING CORROBORATION // INDUSTRY PERSPECTIVE</span>
                  </div>
                  <div className={s.triadQuoteBlock}>
                    <div className={s.triadQuoteMeta}>
                      <span className={s.triadQuoteSpeaker}>{c.titanQuote.speaker}</span>
                      <span className={s.triadQuoteSource}>• {c.titanQuote.source}</span>
                    </div>
                    <blockquote className={s.triadQuoteText}>
                      &ldquo;{c.titanQuote.quote}&rdquo;
                    </blockquote>
                    <div className={s.triadQuoteRole}>{c.titanQuote.role}</div>
                  </div>
                </div>

                <div className={s.triadActions}>
                  <Link href={c.fieldNoteHref} className={s.triadReadBtn}>
                    <span>{c.fieldNoteLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleSelectTopic(c.topicKey)}
                    className={s.triadDiscussBtn}
                  >
                    <span>{c.actionLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: THE PATTERNS & THE COLLECTIVE GATEWAY
          A single compact bridge from the field briefs into The Collective
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection} style={{ padding: "56px 32px" }}>
        <div className={s.limelightInner}>
          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>03 / LEADING INTO THE COLLECTIVE // WHERE SHARED PATTERNS COMPOUND</p>
              <h3>From the Floor to the Collective: People, Patterns, and Three Working Systems.</h3>
              <p>
                When you preserve the knowledge inside your people (<em>Mary</em> and <em>Don WMS</em>), build with governed multi-harness discipline instead of vibe coding (<strong>The Rig</strong>), and structure enterprise transformation and daily workflows around a shared Data Spine (<strong>B.O.S.S.</strong> and <strong>FlowCraft</strong>), what proves useful in one operation becomes a reusable pattern for the next.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", flexShrink: 0 }}>
              <Link href="/collective/" className={s.limelightBannerCta}>
                <span>Enter The Collective &rarr;</span>
              </Link>
              <Link
                href="/block/"
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink)",
                  textDecoration: "underline",
                  opacity: 0.85,
                  paddingLeft: "4px",
                }}
              >
                <span>Configure Outcomes in The Block &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: DIRECT CORRESPONDENCE
          Private reader & builder exchange straight to Robert's desk
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>04 / Direct Correspondence</p>
            <h2>Join the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              For builders, peers, and enterprise operators. Have a thought on Polanyi&rsquo;s Paradox, human-agentic workflow design, or an operating challenge on your own floor? Send me a note. It comes directly to my desk, and I will reply personally.
            </p>
            <span className={s.privacyBadge}>Private builder &amp; peer correspondence · No public comments · Straight to Robert</span>
          </div>

          <div className={s.formCard}>
            {status === "success" || status === "recorded" ? (
              <div className={s.successAlert}>
                <h3 className={s.successTitle}>
                  {status === "success" ? "Thank you for your note." : "Your note has been recorded."}
                </h3>
                <p className={s.successText}>
                  {status === "success"
                    ? "Your message has been sent directly to Robert. He reads every peer and builder note personally and will reply to your email."
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
                    Focal Domain / Area of Collaboration
                  </label>
                  <select
                    id="reader-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={s.select}
                    disabled={status === "submitting"}
                  >
                    <option value="All Three Systems & Field Theses">
                      All Three Systems &amp; Field Theses
                    </option>
                    <option value="01 / Transforming Zeros & Ones: Mary's Sheet">
                      01 / Transforming Zeros &amp; Ones: Mary&apos;s Sheet &amp; Enterprise Transformation
                    </option>
                    <option value="02 / People and Agents at Work & Workflow Ownership">
                      02 / People and Agents at Work &amp; Workflow Ownership
                    </option>
                    <option value="03 / The Agentic Development Company & The Collective">
                      03 / The Agentic Development Company: Agent-Built Code · Human Outcome Accountability
                    </option>
                    <option value="The Collective / Collaboration & Shared Patterns">
                      The Collective / The Rig, B.O.S.S., FlowCraft &amp; Shared Patterns
                    </option>
                    <option value="General Builder / Peer Connection">
                      General Builder / Peer Connection
                    </option>
                  </select>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-message" className={s.label}>
                    Your Thought, Question, or Floor Reality
                  </label>
                  <textarea
                    id="reader-message"
                    required
                    rows={5}
                    placeholder="Share what you are navigating in your enterprise, a question on where binary intelligence meets the physical floor, or an idea to build together..."
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
                    {status === "submitting" ? "Sending note..." : "Send note to Robert"}
                  </button>
                  <span className={s.privacyFooter}>
                    Direct correspondence · For builders, peers &amp; curious practitioners
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
