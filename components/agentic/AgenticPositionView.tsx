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
 * 01 / B.O.S.S. — The Process Constellation
 * 6-radial process vectors (P2P, O2C, P2M, S2S, D2R, MDM) radiating from central core.
 */
function ProcessConstellationSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="seamDots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.6" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#seamDots)" />
      
      {/* Top Half: Stated Reality (Boardroom ERP Schema) */}
      <rect x="12" y="12" width="96" height="34" rx="2" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1" />
      <rect x="16" y="16" width="30" height="10" fill="#EAE4D6" stroke="#1E2024" strokeWidth="0.8" />
      <text x="31" y="23" fontSize="4.2" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ERP SCHEMA</text>
      <line x1="52" y1="21" x2="102" y2="21" stroke="#9E7D3B" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="77" y="29" fontSize="3.8" fill="#8F4A38" textAnchor="middle" fontFamily="monospace">STATED HAPPY PATH</text>
      <text x="60" y="41" fontSize="4" fill="#68645C" textAnchor="middle" fontFamily="monospace">BILLABLE-HOUR MODEL</text>

      {/* The Operational Seam (The Chasm) */}
      <line x1="8" y1="56" x2="112" y2="56" stroke="#8F4A38" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="60" cy="56" r="3" fill="#8F4A38" />
      <text x="60" y="52" fontSize="3.8" fill="#8F4A38" textAnchor="middle" fontFamily="monospace" fontWeight="bold">THE OPERATIONAL SEAM</text>

      {/* Bottom Half: Actual Reality (Mary's Sheet & Floor Heuristics) */}
      <rect x="12" y="66" width="96" height="42" rx="2" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      {/* Green metal clipboard bar */}
      <rect x="44" y="63" width="32" height="6" rx="1.5" fill="#2E4F3E" stroke="#1E2024" strokeWidth="0.8" />
      <circle cx="60" cy="66" r="1.2" fill="#FAF6EE" />
      
      {/* 11x17 Ledger grid rows */}
      <line x1="16" y1="76" x2="104" y2="76" stroke="#2E4F3E" strokeWidth="0.8" />
      <line x1="16" y1="84" x2="104" y2="84" stroke="#DDD7C8" strokeWidth="0.6" />
      <line x1="16" y1="92" x2="104" y2="92" stroke="#DDD7C8" strokeWidth="0.6" />
      <line x1="16" y1="100" x2="104" y2="100" stroke="#DDD7C8" strokeWidth="0.6" />
      
      <line x1="42" y1="72" x2="42" y2="104" stroke="#2E4F3E" strokeWidth="0.8" />
      <line x1="72" y1="72" x2="72" y2="104" stroke="#DDD7C8" strokeWidth="0.6" />
      
      <text x="29" y="81" fontSize="3.8" fill="#2E4F3E" textAnchor="middle" fontFamily="monospace" fontWeight="bold">MARY'S SHEET</text>
      <text x="57" y="81" fontSize="3.6" fill="#1E2024" textAnchor="middle" fontFamily="monospace">PUMP EXCEPTION</text>
      <text x="88" y="81" fontSize="3.6" fill="#1E2024" textAnchor="middle" fontFamily="monospace">CREW MATCH</text>
      
      <text x="60" y="105" fontSize="4.2" fill="#2E4F3E" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ACTUAL REALITY // FLOOR TRUTH</text>
    </svg>
  );
}

/**
 * 02 / FlowCraft — The Interlocking Workflow Blocks
 * Modular, stepped instance blocks: input contract, workflow execution lane,
 * Human-in-the-loop authorization gate, and durable state ledger.
 */
function WorkflowBlocksSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="wfGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.6" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#wfGrid)" />

      {/* Top: Toy Chatbot / Unbounded Prompt Loop (Crossed out) */}
      <rect x="14" y="10" width="92" height="22" rx="2" fill="#FAF6EE" stroke="#A89F91" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="36" y="21" fontSize="4" fill="#A89F91" fontFamily="monospace">PROMPT CHATBOT</text>
      <text x="36" y="27" fontSize="3.4" fill="#8F4A38" fontFamily="monospace">RALPH WIGGUM LOOP</text>
      <line x1="86" y1="14" x2="98" y2="28" stroke="#8F4A38" strokeWidth="1.5" />
      <line x1="98" y1="14" x2="86" y2="28" stroke="#8F4A38" strokeWidth="1.5" />

      {/* Transition: Arrow down to deterministic left-to-right pipeline */}
      <path d="M 60 33 L 60 42 M 57 39 L 60 43 L 63 39" stroke="#9E7D3B" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <text x="60" y="47" fontSize="3.8" fill="#9E7D3B" textAnchor="middle" fontFamily="monospace" fontWeight="bold">PIPELINE WITH GOALS // LEFT ➔ RIGHT</text>

      {/* Step 1: Requirements Gathering */}
      <rect x="8" y="52" width="32" height="26" rx="2" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1" />
      <text x="24" y="62" fontSize="3.8" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01 // REQS</text>
      <line x1="12" y1="67" x2="36" y2="67" stroke="#9E7D3B" strokeWidth="0.8" />
      <text x="24" y="73" fontSize="3.2" fill="#68645C" textAnchor="middle" fontFamily="monospace">RULES &amp; MDM</text>

      {/* Flow arrow 1 -> 2 */}
      <path d="M 40 65 L 45 65 M 43 62 L 46 65 L 43 68" stroke="#9E7D3B" strokeWidth="1" fill="none" />

      {/* Step 2: UAT & State Gate */}
      <rect x="46" y="52" width="34" height="26" rx="2" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1.2" />
      <polygon points="63,55 71,63 63,71 55,63" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
      <path d="M 61 63 L 62.5 65 L 66 60.5" stroke="#1E2024" strokeWidth="1" fill="none" />
      <text x="63" y="75" fontSize="3.2" fill="#8F4A38" textAnchor="middle" fontFamily="monospace" fontWeight="bold">UAT GATE</text>

      {/* Flow arrow 2 -> 3 */}
      <path d="M 80 65 L 85 65 M 83 62 L 86 65 L 83 68" stroke="#9E7D3B" strokeWidth="1" fill="none" />

      {/* Step 3: Validated Ledger / Autonomy */}
      <rect x="86" y="52" width="28" height="26" rx="2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1" />
      <text x="100" y="62" fontSize="3.8" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03 // CORE</text>
      <line x1="90" y1="67" x2="110" y2="67" stroke="#1E2024" strokeWidth="0.8" />
      <text x="100" y="73" fontSize="3.2" fill="#2E4F3E" textAnchor="middle" fontFamily="monospace">SOVEREIGN</text>

      {/* Bottom Result: Complete Workflow Autonomy */}
      <rect x="8" y="86" width="104" height="24" rx="2" fill="#1E2024" />
      <text x="60" y="97" fontSize="4.4" fill="#FAF6EE" textAnchor="middle" fontFamily="monospace" fontWeight="bold">HUMAN-AGENT SYNTHESIS</text>
      <text x="60" y="105" fontSize="3.4" fill="#9E7D3B" textAnchor="middle" fontFamily="monospace">HUMANS + AGENTS · DETERMINISTIC</text>
    </svg>
  );
}

/**
 * 03 / The Rig — The Software Factory & Machine Shop
 * Industrial saw-tooth profile, overhead gantry rail, conveyor line with work units,
 * precision AST verification calipers, and local sovereign operator station.
 */
function FactorySpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="rigHatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke="#DDD7C8" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#rigHatch)" />

      {/* Outer Gantry Frame: The Test-Driven Harness */}
      <rect x="8" y="8" width="104" height="104" rx="2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.4" />
      <line x1="8" y1="20" x2="112" y2="20" stroke="#9E7D3B" strokeWidth="1.2" />
      <text x="60" y="16" fontSize="4.2" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">THE GANTRY HARNESS // LOCAL IRON</text>

      {/* Rapid Frontier Intelligence Churn Core */}
      <rect x="22" y="28" width="76" height="28" rx="2" fill="#FFFFFF" stroke="#8F4A38" strokeWidth="1" strokeDasharray="2 2" />
      <text x="60" y="38" fontSize="4" fill="#8F4A38" textAnchor="middle" fontFamily="monospace" fontWeight="bold">FRONTIER LLM CHURN (60-DAY)</text>
      <text x="60" y="47" fontSize="3.4" fill="#68645C" textAnchor="middle" fontFamily="monospace">COMMODITY COGNITION · DECOUPLED</text>

      {/* AST Calipers & Test Gates Layer */}
      <rect x="16" y="62" width="88" height="20" rx="1.5" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="1.2" />
      <path d="M 22 72 L 28 72 M 25 67 L 25 77" stroke="#1E2024" strokeWidth="1" />
      <text x="60" y="70" fontSize="3.8" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">DETERMINISTIC TEST CALIPERS</text>
      <text x="60" y="77" fontSize="3.2" fill="#9E7D3B" textAnchor="middle" fontFamily="monospace">GIT STATE LEDGER · HUMAN AUTH GATE</text>

      {/* Output: Living Operational Machines (Plural) */}
      <rect x="14" y="88" width="92" height="18" rx="2" fill="#2E4F3E" stroke="#1E2024" strokeWidth="1" />
      <text x="60" y="99" fontSize="4.2" fill="#FAF6EE" textAnchor="middle" fontFamily="monospace" fontWeight="bold">LIVING MACHINES (PLURAL)</text>
      <text x="60" y="104" fontSize="3.2" fill="#DDD7C8" textAnchor="middle" fontFamily="monospace">B.O.S.S. · FLOWCRAFT · THE RIG</text>
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

interface CollectivePillar {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  spot: "constellation" | "blocks" | "factory";
  titanQuote: TitanQuote;
  body: string;
  inquiries: string[];
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
  actionLabel: string;
}

const COLLECTIVES: CollectivePillar[] = [
  {
    num: "01",
    tag: "MAIN EVENT 01 // THE SEAM",
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
    tag: "MAIN EVENT 02 // SYNTHESIS",
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
    tag: "MAIN EVENT 03 // THE FACTORY",
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
              I&rsquo;ve spent 20+ years connecting business intent with the work people do every day on the enterprise floor. Now I&rsquo;m applying that experience to agentic systems: what they can do, where human judgment matters, and what it takes to make the result useful in daily operations. Between executive slide decks and automated software factories, every enterprise deployment succeeds or fails in the operational seam. This is where I build, question, and learn through the work.
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
            <p className={s.eyebrow}>02 / Three Main Events &amp; Field Dispatches</p>
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
