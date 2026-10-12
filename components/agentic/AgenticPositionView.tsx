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
        <pattern id="constellationDots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.7" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#constellationDots)" />
      
      {/* Outer concentric orbital rings */}
      <circle cx="60" cy="60" r="46" fill="none" stroke="#DDD7C8" strokeWidth="0.8" strokeDasharray="2 3" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="#9E7D3B" strokeWidth="0.8" opacity="0.6" />
      <circle cx="60" cy="60" r="16" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.2" />

      {/* Six 60-degree radial vectors radiating from central data core */}
      {/* 0 deg (12 o'clock: P2P) */}
      <line x1="60" y1="60" x2="60" y2="16" stroke="#9E7D3B" strokeWidth="1.2" />
      {/* 60 deg (2 o'clock: O2C) */}
      <line x1="60" y1="60" x2="98" y2="38" stroke="#9E7D3B" strokeWidth="1.2" />
      {/* 120 deg (4 o'clock: P2M) */}
      <line x1="60" y1="60" x2="98" y2="82" stroke="#9E7D3B" strokeWidth="1.2" />
      {/* 180 deg (6 o'clock: S2S) */}
      <line x1="60" y1="60" x2="60" y2="104" stroke="#9E7D3B" strokeWidth="1.2" />
      {/* 240 deg (8 o'clock: D2R) */}
      <line x1="60" y1="60" x2="22" y2="82" stroke="#9E7D3B" strokeWidth="1.2" />
      {/* 300 deg (10 o'clock: MDM) */}
      <line x1="60" y1="60" x2="22" y2="38" stroke="#9E7D3B" strokeWidth="1.2" />

      {/* Six Constellation Nodes */}
      <circle cx="60" cy="16" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />
      <circle cx="98" cy="38" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />
      <circle cx="98" cy="82" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />
      <circle cx="60" cy="104" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />
      <circle cx="22" cy="82" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />
      <circle cx="22" cy="38" r="3.5" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.5" />

      {/* Central Core (MDM / Company Truth) */}
      <circle cx="60" cy="60" r="5" fill="#9E7D3B" />
      <circle cx="60" cy="60" r="1.5" fill="#FAF6EE" />

      {/* Dimension ticks */}
      <line x1="10" y1="10" x2="16" y2="10" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="10" y1="10" x2="10" y2="16" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="110" y1="110" x2="104" y2="110" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="110" y1="110" x2="110" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
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
        <pattern id="blockGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.7" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#blockGrid)" />

      {/* Drafting frame */}
      <rect x="10" y="10" width="100" height="100" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />

      {/* Pipeline Block 01: Input / Schema Block */}
      <rect x="18" y="20" width="34" height="26" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="22" y1="28" x2="46" y2="28" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="22" y1="34" x2="40" y2="34" stroke="#DDD7C8" strokeWidth="0.8" />
      <text x="35" y="42" fontSize="5.2" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">INPUT CONTRACT</text>

      {/* Directed Pipeline Flow Arrow */}
      <path d="M 52 33 L 64 33 M 60 29 L 65 33 L 60 37" stroke="#9E7D3B" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Pipeline Block 02: Deterministic Workflow Block / Agent Lane */}
      <rect x="66" y="20" width="36" height="34" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.4" />
      <line x1="72" y1="28" x2="96" y2="28" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="72" y1="36" x2="92" y2="36" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="72" y1="44" x2="86" y2="44" stroke="#DDD7C8" strokeWidth="0.8" />
      <circle cx="94" cy="48" r="2" fill="#9E7D3B" />
      <text x="84" y="25" fontSize="5" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">WORKFLOW</text>

      {/* Pipeline Step 03: Human Authorization Diamond Gate */}
      <polygon points="42,60 56,74 42,88 28,74" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="1.5" />
      {/* Checkmark inside diamond */}
      <path d="M 37 74 L 41 78 L 47 70" stroke="#1E2024" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="42" y="96" fontSize="5" fill="#8F4A38" textAnchor="middle" fontFamily="monospace" fontWeight="bold">AUTH GATE</text>

      {/* Conductor Line from Workflow Block down to Auth Gate */}
      <path d="M 84 54 L 84 74 L 56 74" stroke="#9E7D3B" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />

      {/* Pipeline Step 04: Durable State Ledger Block */}
      <rect x="64" y="66" width="38" height="26" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="70" y1="74" x2="94" y2="74" stroke="#1E2024" strokeWidth="1" />
      <line x1="70" y1="80" x2="90" y2="80" stroke="#DDD7C8" strokeWidth="0.8" />
      <circle cx="92" cy="86" r="2.5" fill="#9E7D3B" />
      <text x="83" y="87" fontSize="5" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">STATE LEDGER</text>
      <path d="M 56 74 L 64 74" stroke="#1E2024" strokeWidth="1.5" />

      {/* Dimension rule at bottom */}
      <line x1="18" y1="104" x2="102" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="18" y1="101" x2="18" y2="107" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="60" y1="101" x2="60" y2="107" stroke="#1E2024" strokeWidth="1" />
      <line x1="102" y1="101" x2="102" y2="107" stroke="#9E7D3B" strokeWidth="0.8" />
      <text x="60" y="113" fontSize="5.2" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">FLOWCRAFT // RUNTIME BLOCKS</text>
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
        <pattern id="factoryDots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.7" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#factoryDots)" />

      {/* Industrial Factory Sawtooth Roofline Profile */}
      <path
        d="M 16 42 L 34 26 L 34 42 L 54 26 L 54 42 L 74 26 L 74 42 L 94 26 L 104 34 L 104 94 L 16 94 Z"
        fill="#FAF6EE"
        stroke="#DDD7C8"
        strokeWidth="0.8"
      />

      {/* Overhead Gantry Crane Rail */}
      <line x1="18" y1="46" x2="102" y2="46" stroke="#1E2024" strokeWidth="2" />
      {/* Structural Gantry End Brackets */}
      <line x1="18" y1="46" x2="18" y2="94" stroke="#1E2024" strokeWidth="1.5" />
      <line x1="102" y1="46" x2="102" y2="94" stroke="#1E2024" strokeWidth="1.5" />

      {/* Gantry Trolley Carriage (Center) */}
      <rect x="52" y="43" width="16" height="6" fill="#9E7D3B" stroke="#1E2024" strokeWidth="1" />
      {/* Hoist Cable */}
      <line x1="60" y1="49" x2="60" y2="58" stroke="#9E7D3B" strokeWidth="1.2" strokeDasharray="1 1" />
      {/* Precision AST Caliper Tool */}
      <path d="M 52 58 L 68 58 M 54 58 L 54 66 M 66 58 L 66 66" stroke="#1E2024" strokeWidth="1.2" fill="none" />

      {/* Assembly Line Conveyor */}
      <line x1="20" y1="74" x2="100" y2="74" stroke="#1E2024" strokeWidth="1.5" />
      {/* Mechanical Rollers */}
      <circle cx="28" cy="78" r="2.5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
      <circle cx="44" cy="78" r="2.5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
      <circle cx="60" cy="78" r="2.5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
      <circle cx="76" cy="78" r="2.5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
      <circle cx="92" cy="78" r="2.5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />

      {/* Manufactured Work Units */}
      {/* Unit 01: Raw Spec Block */}
      <rect x="23" y="62" width="12" height="12" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="26" y1="68" x2="32" y2="68" stroke="#DDD7C8" strokeWidth="0.8" />

      {/* Unit 02: Living Asset being calibrated */}
      <rect x="55" y="60" width="14" height="14" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.4" />
      <circle cx="62" cy="67" r="2" fill="#9E7D3B" />

      {/* Unit 03: Caliper-Verified Work Asset */}
      <rect x="83" y="62" width="12" height="12" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1" />
      <path d="M 86 68 L 88 70 L 92 65" stroke="#9E7D3B" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Local Sovereign Station Base: Rig-in-a-Box Terminal */}
      <rect x="34" y="86" width="52" height="18" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="40" y1="92" x2="80" y2="92" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="40" y1="97" x2="70" y2="97" stroke="#DDD7C8" strokeWidth="0.8" />
      <circle cx="76" cy="97" r="1.5" fill="#9E7D3B" />
      <text x="60" y="102" fontSize="4.8" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SOVEREIGN OPERATOR RIG</text>

      {/* Tolerancing Ticks at Bottom */}
      <line x1="16" y1="108" x2="104" y2="108" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="16" y1="105" x2="16" y2="111" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="60" y1="105" x2="60" y2="111" stroke="#1E2024" strokeWidth="1" />
      <line x1="104" y1="105" x2="104" y2="111" stroke="#9E7D3B" strokeWidth="0.8" />
      <text x="60" y="116" fontSize="5.2" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">RIG-IN-A-BOX // LOCAL IRON</text>
    </svg>
  );
}

/**
 * Unified Enterprise Constellation Symbol (Hero Plate)
 */
function EnterpriseHiveSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="plateDotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.8" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#plateDotGrid)" />
      <g stroke="#9E7D3B" strokeWidth="1.2" fill="#FAF6EE" strokeLinejoin="round">
        <polygon points="60,48 70,54 70,66 60,72 50,66 50,54" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.5" />
        <polygon points="60,26 70,32 70,44 60,50 50,44 50,32" />
        <polygon points="79,37 89,43 89,55 79,61 69,55 69,43" />
        <polygon points="79,59 89,65 89,77 79,83 69,77 69,65" />
        <polygon points="60,70 70,76 70,88 60,94 50,88 50,76" />
        <polygon points="41,59 51,65 51,77 41,83 31,77 31,65" />
        <polygon points="41,37 51,43 51,55 41,61 31,55 31,43" />
      </g>
      <circle cx="60" cy="60" r="2.5" fill="#9E7D3B" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="8" y1="8" x2="8" y2="16" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="104" y2="112" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="112" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
    </svg>
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
    tag: "FIELD BRIEF 01 // THE WORKFLOWS",
    actionLabel: "Join the Discussion",
    title: "Stated vs. Actual Reality",
    subtitle: "Mary's Sheet & The Unwritten Operating Core",
    spot: "constellation",
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "Founder, Social Capital & Co-Host, All-In",
      source: "beehiiv",
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    body:
      "Enterprise software only captures the happy path. The real operating logic lives in the unwritten space—the certified workforce matrices, informal plant phone calls, and thirty years of frontline judgment that keep a facility moving when systems change. In every organization, there is a Mary whose personal spreadsheets have outlasted multi-million-dollar ERP implementations. You cannot prompt an AI agent with what was never codified. True enterprise agentics begins by surfacing what lives in between the seams before generating a line of code.",
    inquiries: [
      "Stated vs. actual reality: why automated database introspection misses how the floor runs",
      "The maintenance exception: what happens when systems say clear but physical pumps are pulled",
      "Elevating frontline judgment: turning human data conduits into cross-department leaders",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Brief: Mary's Sheet & Stated Reality",
    topicKey: "01 / The Workflows: Stated vs. Actual Reality",
  },
  {
    num: "02",
    tag: "FIELD BRIEF 02 // WORKFLOWS OVER CHATBOTS",
    actionLabel: "Join the Discussion",
    title: "Workflows Over Chatbots",
    subtitle: "The SaaS/ERP Divide, Metadata, and the Sovereign Substrate",
    spot: "blocks",
    titanQuote: {
      speaker: "Marc Benioff",
      role: "Chair & CEO, Salesforce",
      source: "Dreamforce / TechCrunch",
      quote:
        "Copilot is really the new Microsoft Clippy... DIY AI is a science project. What matters isn't the model—it’s the metadata and the workflows.",
    },
    body:
      "Enterprise computing is crossing an architectural threshold: conversational chat and 'vibe coding' fail the moment they touch master data, regulatory compliance, and general ledgers. Salesforce is right: enterprise value lives in metadata and workflows, not chatbots. But while industry rags celebrate 'agentic champions,' internal builders remain handcuffed without a deterministic enterprise framework. The controversial reality: when talented enterprise teams are equipped with open patterns and runtime harnesses, legacy ERP monopolies fall away. The enterprise will build and own its core operational systems.",
    inquiries: [
      "Where Salesforce gets it right: why metadata and consequential workflows beat chatbots",
      "The agentic champion dilemma: why internal builders need a deterministic enterprise framework",
      "The controversial shift: can a talented enterprise team build their own operational ERP?",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Brief: Workflows, Champions & Sovereign ERPs",
    topicKey: "02 / Workflows, Agentic Champions & Sovereign ERPs",
  },
  {
    num: "03",
    tag: "FIELD BRIEF 03 // SOVEREIGN FABRICATION",
    actionLabel: "Join the Discussion",
    title: "The Machine That Builds the Machine",
    subtitle: "The Delivery Seam & Code Building Code on Local Iron",
    spot: "factory",
    titanQuote: {
      speaker: "Matan Grinberg & Eno Reyes",
      role: "Co-Founders, Factory (factory.ai)",
      source: "Factory 2.0 Manifesto",
      quote:
        "The incremental units of this system are AI agents. This system will be built by engineers, and in turn will build their software. This system is the software factory... We are building the machine that builds the machine.",
    },
    body:
      "Software engineering is crossing a permanent threshold: code is no longer written line by line; it is manufactured by autonomous systems. But where Factory.ai and Big Tech centralize software generation in closed venture clouds with proprietary droids, enterprise reality requires sovereignty. The real power is putting the industrial fabrication line directly into the hands of the human operator on local iron: the machine that builds the machines that build the living software assets—with AST calipers, deterministic test gates, and git-grounded task ledgers under absolute human ownership.",
    inquiries: [
      "Moving from prompt-assisted coding to sovereign software fabrication",
      "Rigorous AST calipers and deterministic test gates vs. unreviewable code generation",
      "The 80/20 delivery equation: why autonomous software factories still need physical floor truth",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Brief: The Machine That Builds the Machine",
    topicKey: "03 / The Machine That Builds the Machine & Sovereign Fabrication",
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
  const [topic, setTopic] = useState("All Three Systems (Full Stack: B.O.S.S. + FlowCraft + The Rig)");
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
              Macro venture capital views enterprise transformation from financial altitude; the physical floor runs on unwritten reality. Between executive slide decks and automated software factories, every enterprise deployment succeeds or fails in the operational seam between software and the physical dock. This is where I build, question, and learn through the work.
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
                <span className={s.plateTag}>THE COLLECTIVE • THREE INTERLOCKING SYSTEMS</span>
                <EnterpriseHiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>B.O.S.S.</strong>
                    <span>The Enterprise</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>FLOWCRAFT</strong>
                    <span>The Workflow</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>THE RIG</strong>
                    <span>The Factory</span>
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
            <p className={s.eyebrow}>02 / Field Briefs</p>
            <h2>Field Briefs<span>.</span></h2>
            <p className={s.triadDek}>
              Three foundational field briefs on enterprise agentics. Working theses formed from 20+ years on the enterprise floor and over three years inside the agentic runtime—grounded in the operational seam where code generation meets physical execution.
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
              The field briefs above explore why enterprise systems break down at the human seam. The Collective is the actual software—B.O.S.S., FlowCraft, and The Rig—built to solve it. Each enterprise runs in sovereign isolation on its own iron, while the collective pattern library grows as practitioners use the systems to solve real-world problems.
            </p>
          </div>

          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>THE SOFTWARE CONTRAPTION // SPEC-COL-01</p>
              <h3>Three Interlocking Open Systems. Intent Equals Outcome Delivered.</h3>
              <p>
                From specialized operators running QuickBooks to multi-site manufacturers needing sovereign purchasing and receiving engines. Mapped by <strong>B.O.S.S.</strong>, fabricated by <strong>The Rig</strong>, and executed on <strong>FlowCraft</strong>. Explore the architecture, launch a custom scoping brief, or join peer builders in the collective.
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
                    <option value="All Three Systems (Full Stack: B.O.S.S. + FlowCraft + The Rig)">
                      All Three Systems (Full Stack: B.O.S.S. + FlowCraft + The Rig)
                    </option>
                    <option value="01 / The Enterprise & B.O.S.S. (Domain Truth & Schemas)">
                      01 / The Enterprise &amp; B.O.S.S. (Domain Truth &amp; Schemas)
                    </option>
                    <option value="02 / The Workflow & FlowCraft (Human-Agent Runtime & MDM)">
                      02 / The Workflow &amp; FlowCraft (Human-Agent Runtime &amp; MDM)
                    </option>
                    <option value="03 / The Factory & The Rig (Software Factory & Rig-in-a-Box)">
                      03 / The Factory &amp; The Rig (Software Factory &amp; Rig-in-a-Box)
                    </option>
                    <option value="Open Source Collaboration & Code Sharing">
                      Open Source Collaboration &amp; Shared Systems
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
