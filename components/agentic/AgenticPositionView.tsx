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
  fieldNoteCard: FieldNoteCard;
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
    subtitle: "Mary's Sheet, Why 70% of ERPs Fall Short & Why Agentics Still Starts With People, Systems, and Workflows",
    spot: "constellation",
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital · Co-Host, All-In",
      source: "8090 (“The Space Between the Tasks”)",
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    body:
      "Gartner predicts that over 70% of ERP initiatives fail to fully meet their original business-case goals—because organizations treat transformation as a software install instead of aligning people, data, systems, and workflows. Layering agentics on top sits on that exact same reality: capturing unwritten floor rules ('Mary's Sheet') and unifying data before automating.",
    fieldNoteCard: {
      rubric: "PERSONAL FIELD NOTE // THE REAL REASON 70% OF ERPs MISS THE MARK",
      stamp: "MARY'S SHEET",
      text: "Walk almost any plant floor after a multimillion-dollar ERP go-live and you will find 'Mary's Sheet'—the clipboard or spreadsheet keeping the operation running when the database says Line 2 is green while mechanics have the pump unbolted on the bench. Now we have agentics layered right on top of that same world: people, data, systems, and workflows. Start with Mary on the floor and unify the data around how the work really happens, and she finally gets her time back to lead.",
      signature: "— Robert Paddock · Personal Field Note (Illustrative Composite)",
      footerLabel: "PEOPLE · DATA · SYSTEMS · WORKFLOWS",
    },
    inquiries: [
      "Why 70% of ERPs miss expectations: aligning people, data, systems, and workflows",
      "Capturing unwritten floor truth ('Mary's Sheet') before automating",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Dispatch 01: Mary's Sheet & Why 70% of ERPs Miss",
    topicKey: "01 / Transforming Zeros & Ones: Mary's Sheet",
  },
  {
    num: "02",
    tag: "WEB LOG 02 // EMPOWERED WITH AGENTS",
    actionLabel: "Join the Discussion",
    title: "People and Agents at Work",
    subtitle: "How Being Empowered With Agents Changes Workflows, Speed to Decisions, and Data Organization in Ways Unimaginable a Few Years Ago",
    spot: "blocks",
    titanQuote: {
      speaker: "Marc Benioff",
      role: "Chair & CEO, Salesforce · Investor, 8090",
      source: "Dreamforce / The Road to Service-as-Software",
      quote:
        "What matters isn’t just the model—it’s the metadata, the business context, and the deterministic enterprise workflows.",
    },
    body:
      "Once people, systems, and data are aligned, something genuinely new happens—a shift that was never imaginable just a few years ago. Being directly empowered with agents changes how workflows run, how fast decisions get made, and how enterprise data is organized across Intent, Define, Deliver, and Outcome.",
    fieldNoteCard: {
      rubric: "PERSONAL FIELD NOTE // WATCHING PEOPLE STEP INTO AGENT EMPOWERMENT",
      stamp: "UNIMAGINABLE A FEW YEARS AGO",
      text: "After twenty years of watching capable operators spend their days reconciling spreadsheets and waiting weeks for a workflow change, seeing what happens when someone is empowered with agents is remarkable. Put a production scheduler or operations lead on top of organized data with governed agents, and suddenly they are organizing data, reshaping workflows, and reaching decisions in minutes that used to take weeks.",
      signature: "— Robert Paddock · Personal Field Note",
      footerLabel: "WORKFLOWS · DATA · SPEED TO DECISIONS",
    },
    inquiries: [
      "How agent empowerment changes workflows, data organization, and speed to decisions",
      "Equipping domain champions to build and run governed workflows on a Common Data Core",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Dispatch 02: People and Agents at Work",
    topicKey: "02 / People and Agents at Work & Workflow Ownership",
  },
  {
    num: "03",
    tag: "WEB LOG 03 // SOFTWARE FACTORIES & THE BUILDER'S REALITY",
    actionLabel: "Join the Discussion",
    title: "The Agentic Development Company",
    subtitle: "What Frontier Software Factories Are Proving—And the Human Side of Learning, Being Excited, and Being Mad in This Brave New World",
    spot: "factory",
    titanQuote: {
      speaker: "Matan Grinberg & Eno Reyes",
      role: "Co-Founders, Factory (factory.ai)",
      source: "Factory 2.0 Manifesto",
      quote:
        "The incremental units of this system are AI agents. This system will be built by engineers, and in turn will build their software. This system is the software factory... We are building the machine that builds the machine.",
    },
    body:
      "Frontier software factories are proving that AI agents are now the incremental units building software—writing code and running checks inside governed pipelines while engineers build 'the machine that builds the machine.' I operate that thesis in practice as a multi-harness Agentic Development Company proof of concept (The Rig), building both B.O.S.S. and FlowCraft under human outcome accountability.",
    fieldNoteCard: {
      rubric: "PERSONAL FIELD NOTE // THE HUMAN SIDE OF A BUILDER IN THIS BRAVE NEW WORLD",
      stamp: "EXCITED · MAD · LEARNING",
      text: "Let me tell you the human side of spending the last three years building in this brave new world: you spend half your time blown away with excitement and the other half mad as hell. One hour four agent harnesses coordinate across a spec and land working software at a pace you never dreamed of; two hours later an agent confidently hallucinates across a seam and you have to tear the harness down and rethink the guardrails. Living through that excitement, frustration, and relentless learning is what forged The Rig.",
      signature: "— Robert Paddock · Personal Builder Note",
      footerLabel: "3 YEARS IN THE BRAVE NEW WORLD",
    },
    inquiries: [
      "What frontier software factories are saying: building 'the machine that builds the machine'",
      "The human side of the builder: learning, being excited, and getting mad in this brave new world",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Dispatch 03: The Agentic Development Company",
    topicKey: "03 / The Agentic Development Company & The Collective",
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

          {/* THE PARADOX & ROBERT'S WORKING ETHOS */}
          <div className={s.briefGrid} style={{ marginTop: "32px" }}>
            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>THE PARADOX // WHY 70% OF ERPs MISS EXPECTATIONS</span>
                <h3>&ldquo;We Know More Than We Can Tell.&rdquo;</h3>
                <p>
                  Gartner predicts that over 70% of ERP initiatives fail to fully meet their business-case goals because they treat transformation as a software install instead of aligning <strong>people, data, systems, and workflows</strong> (<em>Mary&rsquo;s Sheet</em>). <strong>Layering agentics on top sits on that exact same reality&mdash;it still starts with the people.</strong>
                </p>
              </div>
              <div className={s.cardFootnote}>
                <span>People · Data · Workflows</span>
                <strong>SAME CORE PROBLEM</strong>
              </div>
            </div>

            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>ETHOS 01 // EMPOWERED WITH AGENTS AT WORK</span>
                <h3>Workflows, Data &amp; Speed to Decisions</h3>
                <p>
                  What is uniquely new&mdash;and <strong>never imaginable just a few years ago</strong>&mdash;is what happens when operators and domain experts are directly empowered with agents. It transforms how workflows run, how data is organized, and how fast decisions get made across <em>Intent, Define, Deliver, and Outcome</em>.
                </p>
              </div>
              <div className={s.cardFootnote}>
                <span>Human + Agent Empowerment</span>
                <strong>UNIMAGINABLE A FEW YEARS AGO</strong>
              </div>
            </div>

            <div className={s.briefCard}>
              <div className={s.cardHeader}>
                <span className={s.cardNum}>ETHOS 02 // SOFTWARE FACTORIES &amp; THE BUILDER&rsquo;S REALITY</span>
                <h3>Agent-Built Code · Human Outcome Accountability</h3>
                <p>
                  Frontier software factories are proving that AI agents are the incremental units building software. Living that shift for three years&mdash;<strong>learning, being excited, and getting mad in this brave new world</strong>&mdash;forged the discipline of <strong>The Rig</strong> to build <strong>B.O.S.S.</strong> and <strong>FlowCraft</strong> under human accountability.
                </p>
              </div>
              <div className={s.cardFootnote}>
                <span>Accountable Command</span>
                <strong>EXCITED · MAD · LEARNING</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE THREE CORE THEMES & FIELD DISPATCHES
          ==================================================================== */}
      <section id="field-briefs" className={s.triadSection}>
        <span id="the-collectives" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>02 / Field Web Log &middot; Three Field Themes</p>
            <h2>One Human Thread Across Three Field Themes of Binary Intelligence<span>.</span></h2>
            <p className={s.triadDek}>
              From transforming enterprise zeros and ones on the floor, to human-agentic workflow synthesis around a company-owned data core, to three years of hands-on agentic development building The Rig, B.O.S.S., and FlowCraft.
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

                  {/* Industry Corroboration / Macro Consensus */}
                  <div style={{ marginTop: "14px", marginBottom: "6px" }}>
                    <span className={s.triadSectionTag}>FRONTIER CORROBORATION // INDUSTRY PERSPECTIVE</span>
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

                  {/* Dark Notebook Seam Log Card */}
                  <div className={s.triadFieldNoteCard}>
                    <div className={s.triadFieldNoteHead}>
                      <div className={s.triadFieldNoteRubric}>
                        <span className={s.triadFieldNoteDot} aria-hidden="true" />
                        <span>{c.fieldNoteCard.rubric}</span>
                      </div>
                      <span className={s.triadFieldNoteStamp}>{c.fieldNoteCard.stamp}</span>
                    </div>
                    <p className={s.triadFieldNoteText}>{c.fieldNoteCard.text}</p>
                    <div className={s.triadFieldNoteFooter}>
                      <span>{c.fieldNoteCard.signature}</span>
                      <span>{c.fieldNoteCard.footerLabel}</span>
                    </div>
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
          A concise, poignant bridge from the essays into Whole Assets & The Collective
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection}>
        <div className={s.limelightInner}>
          <div className={s.limelightHead}>
            <p className={s.eyebrow}>03 / Leading Into The Collective &middot; Patterns &amp; Reusable Blocks</p>
            <h2>Where Shared Patterns Reduce Repeated Work and Token Burn<span>.</span></h2>
            <p className={s.limelightDek}>
              When you connect these three practices&mdash;mapping enterprise reality around people and data (<strong>B.O.S.S.</strong>), executing governed human-agentic workflow blocks (<strong>FlowCraft</strong>), and building through a multi-harness <strong>Agentic Development Company</strong> (<strong>The Rig</strong>)&mdash;verified schemas and workflow patterns can be reused across builds instead of re-solving every problem from scratch.
            </p>
          </div>

          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>THE COLLECTIVE // THE RIG · B.O.S.S. · FLOWCRAFT · SHARED PATTERNS</p>
              <h3>See What I Have Built and How Reusable Patterns Compound.</h3>
              <p>
                Explore <strong>The Collective</strong>: how <strong>The Rig</strong> (Agentic Development Company) built <strong>B.O.S.S.</strong> (Enterprise Foundation Asset) and <strong>FlowCraft</strong> (Human-Agentic Runtime System &amp; Workflow Blocks) on a shared Data Spine, and how builders can voluntarily share reusable workflow patterns.
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
