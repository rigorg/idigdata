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
 * 02 / Theme 02 — Human-Agent Synthesis
 * Sovereign human authority (concentric compass ring) and autonomous machine execution
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

      {/* Right Node: Autonomous Machine (Faceted Isometric Software Cube) */}
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
 * Unified Enterprise Constellation Symbol (Hero Plate)
 */
function PeopleSystemsWorkflowSpot() {
  return (
    <div className={s.emblemSpot}>
      <Image
        src="/diagrams/personal-symbol-transparent.webp"
        alt="People, Systems, and Workflows · Connected by data"
        width={144}
        height={144}
        className={s.emblemImg}
        priority
      />
      <div className={s.emblemCaption}>
        <strong className={s.emblemCaptionTitle}>People, Systems, and Workflows</strong>
        <span className={s.emblemCaptionSubtitle}>Connected by data</span>
      </div>
    </div>
  );
}

// ============================================================================
// THE THREE COLLECTIVES DATA SPECIFICATION
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
    tag: "THEME 01 // THE SEAM",
    actionLabel: "Join the Discussion",
    title: "The Operational Seam",
    subtitle: "Why ERPs Fail: Context Gathering vs. Floor Truth & The Human Seam",
    spot: "constellation",
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital & Co-Host, All-In",
      source: "8090 / beehiiv (“The space between the tasks”)",
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    body:
      "Why do enterprise ERP implementations so often struggle to deliver on their promise? Gartner forecasts that through 2027, over 70% of new ERP initiatives will fail to fully realize their business-case goals. Modern AI software factories diagnose this as a 'context gathering' problem—assuming enterprise truth sits in clean wikis waiting to be ingested. But on the enterprise floor, 80% of operating truth is unwritten: held in tacit human judgment, informal cross-department trust, and Mary's edge-case scheduling spreadsheet. Monolithic software captures sanitized Standard Operating Procedures—how an organization wishes it functioned on its best day. AI hits a brick wall if it merely automates documented fiction. Before writing code, an architect must map how the enterprise actually runs—synthesizing an authoritative, company-owned Common Data Model that bridges fragmented silos and honors the human seam holding the business together.",
    fieldNoteCard: {
      rubric: "SEAM LOG // THE OPERATIONAL SEAM",
      stamp: "OBSERVED REALITY",
      text: "The enterprise ERP showed packaging line 2 as green and ready. On the physical floor, mechanics had unbolted the pump twenty minutes earlier, work order scrawled in grease on cardboard. Mary caught it because she walked the concrete with her clipboard. The software was a clean fiction; Mary's sheet was the living enterprise.",
      signature: "— Rob Paddock · Plant Floor Field Note",
    },
    inquiries: [
      "Context gathering vs. floor truth: why database introspection misses how the company actually runs",
      "The human seam: what happens when systems flag green but physical steel is torn apart",
      "Elevating frontline judgment: turning human data conduits into operational leaders",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Dispatch: Mary's Sheet & The Unwritten Core",
    topicKey: "01 / The Operational Seam: Mary's Sheet",
  },
  {
    num: "02",
    tag: "THEME 02 // SYNTHESIS",
    actionLabel: "Join the Discussion",
    title: "Human-Agent Synthesis",
    subtitle: "Enterprise Workflows: Information Continuity, Human Authority & Consequential Action",
    spot: "blocks",
    titanQuote: {
      speaker: "Marc Benioff",
      role: "Chair & CEO, Salesforce",
      source: "Dreamforce / The Road to Service-as-Software",
      quote:
        "What matters isn’t just the model—it’s the metadata, the business context, and the deterministic enterprise workflows.",
    },
    body:
      "The enterprise computing conversation has too often focused on conversational prompt droids or the fantasy of zero-human automation. But democratizing information does not create organizational agreement: an AI agent can surface a conflict between purchasing, sales, and controllers, but only an executive with skin in the game can make the decision and carry the liability. The winning discipline is Human-Agent Synthesis: experienced operators and autonomous agents collaborating inside deterministic left-to-right pipelines. Moving work through goal-directed assembly lines—governed by strict data contracts, state validation, and human authorization gates—allows enterprises to harness autonomous software while keeping operational authority firmly with human leadership.",
    fieldNoteCard: {
      rubric: "SEAM LOG // HUMAN-AGENT SYNTHESIS",
      stamp: "THE DOMAIN CHAMPION",
      text: "In a complex manufacturing plant, one scheduler kept operations running with interconnected Excel workbooks and PowerShell scripts—a single point of failure who loved technology. We partnered with him as an Agentic Domain Champion inside a bounded framework. What he built blew past anything he thought possible. The sheer satisfaction on his face is what happens when you empower frontline domain experts to author custom software inside a safe architecture. These are the champions every enterprise needs—and already has.",
      signature: "— Rob Paddock · Manufacturing Floor Field Note",
    },
    inquiries: [
      "Beyond conversational chat: why deterministic left-to-right pipelines beat prompt droids",
      "Information vs. authority: why surfacing data conflicts still requires executive decision ownership",
      "Reclaiming the application layer: why businesses will build and own their core workflows",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Dispatch: The Sovereign Substrate & The Inevitable ERP",
    topicKey: "02 / Human-Agent Synthesis: The Sovereign Substrate",
  },
  {
    num: "03",
    tag: "THEME 03 // THE FACTORY",
    actionLabel: "Join the Discussion",
    title: "The Machine That Builds the Machines",
    subtitle: "The Software Factory: Code Building Code, The Gantry Harness & Sovereign Iron",
    spot: "factory",
    titanQuote: {
      speaker: "Matan Grinberg & Eno Reyes",
      role: "Co-Founders, Factory",
      source: "Factory 2.0: From Coding Agents to Software Factories",
      quote:
        "The incremental units of this system are AI agents. This system will be built by engineers, and in turn will build their software. This system is the software factory.",
    },
    body:
      "We have crossed the threshold into the software factory: code now building code. But autonomous software fabrication introduces a demanding new engineering discipline: managing token burn, orchestrating open-weight models alongside frontier APIs, and mastering multi-seat execution. Frontier models and APIs evolve rapidly. If an enterprise welds its core business logic directly to a single proprietary endpoint or hosted SaaS, it invites fragile dependencies. The durable asset is the machine that builds the machines: the test-driven gantry harness on local iron. Wrapping volatile intelligence in deterministic AST calipers, git-backed state ledgers, and human authorization gates turns model tokens into living, verifiable enterprise software.",
    fieldNoteCard: {
      rubric: "SEAM LOG // THE RUNTIME SEAM",
      stamp: "THE BUILDER'S REALITY",
      text: "Building enterprise agentic systems is serious, demanding work. Over three years inside the runtime, I have burned down codebases and started over when early assumptions failed under operational pressure. When agents operate inside a deterministic harness, delivery velocity is unmatched; when they run unconstrained, intent fails to equal outcome. I bring hands-on builder depth to enterprise technology: knowing what to automate, where guardrails must hold, and what it takes to make autonomous systems reliable in daily operations.",
      signature: "— Rob Paddock · Systems Builder Field Note",
    },
    inquiries: [
      "Decoupling model churn: why the competitive moat is the gantry harness on local iron",
      "Deterministic calipers vs. Ralph Wiggum loops: wrapping volatile models in AST inspection gates",
      "The delivery seam: why autonomous software factories still require operators on the physical dock",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Dispatch: The Delivery Seam & Floor Truth",
    topicKey: "03 / The Machine That Builds the Machines",
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
              Robert Paddock <span>/</span> Applied Agentics &amp; Industrial Reality
            </p>
            <h1 className={s.mastheadTitle}>
              Learn through the work<span>.</span>
            </h1>
            <p className={s.dek}>
              Where a 20-year enterprise systems arc meets over three years inside the agentic runtime.
            </p>
            <p className={s.heroLead}>
              I&rsquo;ve spent 20+ years connecting business intent with the work people do every day on the enterprise floor. For over three years, I&rsquo;ve been hands-on inside the agentic runtime&mdash;learning where autonomous systems accelerate delivery and where human judgment remains essential. Between executive slide decks and automated software factories, every enterprise deployment succeeds or fails in the operational seam. This is where I build, lead, and deliver technology that works in daily operations.
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
                <span className={s.plateTag}>PEOPLE • SYSTEMS • WORKFLOWS</span>
                <PeopleSystemsWorkflowSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>20+ YRS</strong>
                    <span>Systems Arc</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>3+ YRS</strong>
                    <span>Agentic Runtime</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>SHOP FLOOR</strong>
                    <span>Ground Truth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#systems-arc">01 / The Systems Arc</a>
          <a href="#field-briefs">02 / Field Briefs</a>
          <a href="#open-systems">03 / The Patterns &amp; Software</a>
          <a href="#conversation">04 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE SYSTEMS ARC (THE FOUR WAVES)
          Pride of place, compact and sleek
          ==================================================================== */}
      <section id="systems-arc" className={s.fourWavesCompactSection}>
        <div className={s.fourWavesCompactInner}>
          <div className={s.fourWavesCompactHead}>
            <p className={s.eyebrow}>01 / Historical Foundation</p>
            <h2>The Four Waves of Enterprise Technology<span>.</span></h2>
            <p className={s.fourWavesCompactDek}>
              I have lived through every one of these waves across 50 enterprise implementations. Agentics is not an overnight replacement for company memory—it is the fourth wave operating directly across the foundation of the first three.
            </p>
          </div>

          <div className={s.fourWavesCompactBay}>
            <div className={s.figureBar}>
              <span className={s.figureSpecTag}>ARCHITECTURAL INFLECTION ANALYSIS // SPEC W-04</span>
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
          SECTION 02: THE THREE COLLECTIVES (LEARN AND BUILD)
          The Enterprise (B.O.S.S.) · The Workflow (FlowCraft) · The Factory (The Rig)
          ==================================================================== */}
      <section id="field-briefs" className={s.triadSection}>
        <span id="the-collectives" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>02 / Three Core Themes &amp; Field Dispatches</p>
            <h2>Three Core Theses on Enterprise Agentics<span>.</span></h2>
            <p className={s.triadDek}>
              Three foundational working theses formed from 20+ years on the enterprise floor and over three years inside the agentic runtime—each paired with an in-depth operational field dispatch from the seam.
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

                  {/* What the industry is saying */}
                  <div style={{ marginTop: "16px", marginBottom: "6px" }}>
                    <span className={s.triadSectionTag}>WHAT THE INDUSTRY IS SAYING</span>
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

                  {/* The Operator's Working Thesis */}
                  <div style={{ marginTop: "18px", marginBottom: "6px" }}>
                    <span className={s.triadSectionTag}>WORKING THESIS // OPERATIONAL GROUND TRUTH</span>
                  </div>
                  <p className={s.triadCardBody}>{c.body}</p>

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
                      <span>VERIFIED IN ARENA</span>
                    </div>
                  </div>

                  {/* Core Inquiries */}
                  <div style={{ marginTop: "14px", marginBottom: "6px" }}>
                    <span className={s.triadInquiryLabel}>CORE CONVERSATIONAL INQUIRIES</span>
                  </div>
                  <ul className={s.triadPointsList}>
                    {c.inquiries.map((inq, idx) => (
                      <li key={idx}>{inq}</li>
                    ))}
                  </ul>
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
          A concise, poignant bridge from the essays into the living software
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection}>
        <div className={s.limelightInner}>
          <div className={s.limelightHead}>
            <p className={s.eyebrow}>03 / The Patterns at the Seam</p>
            <h2>Where The Work Turns Into Code<span>.</span></h2>
            <p className={s.limelightDek}>
              These field notes inform the systems I&rsquo;m building. The Collective brings that work together with an invitation to other builders and operators: develop useful enterprise software, test it in real work, and share what proves valuable.
            </p>
          </div>

          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>THE HUMAN &amp; AGENT BUILDER COMMONS // SOVEREIGN RUNTIMES</p>
              <h3>Humans and Autonomous Agents Building Together in a New Era.</h3>
              <p>
                An organizing collective where experienced enterprise operators and autonomous software agents build sovereign systems together on private iron. Operators choose what to share. Other operators review and choose what to adopt. Business data and decisions stay with their owners.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", flexShrink: 0 }}>
              <Link href="/collective/" className={s.limelightBannerCta}>
                <span>Enter The Collective &rarr;</span>
              </Link>
              <Link
                href="/block/custom/"
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink)",
                  textDecoration: "underline",
                  opacity: 0.85,
                  paddingLeft: "4px",
                }}
              >
                <span>Launch Custom Scoping Brief &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: DIRECT CORRESPONDENCE
          Private reader & builder exchange straight to Rob's desk
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>04 / Direct Correspondence</p>
            <h2>Join the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              For builders, peers, and curious people. Have a thought, an operational challenge from your own floor, or an idea to build together? Send me a note. It comes directly to my desk, and I will reply personally.
            </p>
            <span className={s.privacyBadge}>Private builder &amp; peer correspondence · No public comments · Straight to Rob</span>
          </div>

          <div className={s.formCard}>
            {status === "success" || status === "recorded" ? (
              <div className={s.successAlert}>
                <h3 className={s.successTitle}>
                  {status === "success" ? "Thank you for your note." : "Your note has been recorded."}
                </h3>
                <p className={s.successText}>
                  {status === "success"
                    ? "Your message has been sent directly to Rob. He reads every peer and builder note personally and will reply to your email."
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
                    <option value="01 / The Operational Seam: Mary's Sheet">
                      01 / The Operational Seam: Mary&apos;s Sheet &amp; The Unwritten Core
                    </option>
                    <option value="02 / Human-Agent Synthesis: The Sovereign Substrate">
                      02 / Human-Agent Synthesis: The Sovereign Substrate &amp; Enterprise Workflows
                    </option>
                    <option value="03 / The Machine That Builds the Machines">
                      03 / The Machine That Builds the Machines: Software Factories &amp; Tokenomics
                    </option>
                    <option value="The Collective / Collaboration & Shared Patterns">
                      The Collective / Collaboration &amp; Shared Patterns
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
                    placeholder="Share what you are navigating in your enterprise, a question on where agentics breaks on the physical floor, or an idea to build together..."
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
                    Direct correspondence · For builders, peers &amp; curious practitioners
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
              <Link href="/experience/">Explore the systems arc &rarr;</Link>
              <a href="#open-systems">Explore the open systems &rarr;</a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
