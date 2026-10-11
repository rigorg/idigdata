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
 * Modular, stepped instance blocks where the shop floor hits: human + agent synthesis.
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
      <rect x="12" y="12" width="96" height="96" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />

      {/* Instance Level Block 1: Human Operating Cell (Upper Left) */}
      <rect x="20" y="22" width="38" height="32" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.4" />
      <line x1="26" y1="32" x2="52" y2="32" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="26" y1="40" x2="46" y2="40" stroke="#DDD7C8" strokeWidth="1" />
      <circle cx="28" cy="46" r="2" fill="#9E7D3B" />
      <text x="39" y="29" fontSize="5.5" fill="#68645C" fontFamily="monospace" fontWeight="bold">HUMAN</text>

      {/* Instance Level Block 2: Agent Runtime Cell (Lower Right) */}
      <rect x="58" y="54" width="42" height="38" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.4" />
      <line x1="64" y1="68" x2="94" y2="68" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="64" y1="76" x2="90" y2="76" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="64" y1="84" x2="82" y2="84" stroke="#DDD7C8" strokeWidth="1" />
      <circle cx="92" cy="62" r="2" fill="#1E2024" />
      <text x="79" y="62" fontSize="5.5" fill="#68645C" fontFamily="monospace" fontWeight="bold">AGENT</text>

      {/* The Interlocking Seam Block (Center Conductor) */}
      <rect x="44" y="42" width="30" height="24" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.8" strokeDasharray="2 1" />
      <circle cx="59" cy="54" r="3.5" fill="#9E7D3B" />
      <circle cx="59" cy="54" r="1.5" fill="#FAF6EE" />
      <text x="59" y="49" fontSize="4.8" fill="#1E2024" textAnchor="middle" fontFamily="monospace" fontWeight="bold">MDM SEAM</text>

      {/* Registration Alignment Ticks */}
      <line x1="58" y1="18" x2="58" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="58" y1="94" x2="58" y2="100" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="16" y1="54" x2="22" y2="54" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="98" y1="54" x2="104" y2="54" stroke="#9E7D3B" strokeWidth="1" />
    </svg>
  );
}

/**
 * 03 / The Rig — The Structural Gantry & Test Harness
 * Heavy industrial truss with continuous build loop and deterministic verification calipers.
 */
function GantryHarnessSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="rigDots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.7" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#rigDots)" />

      {/* Structural Gantry Legs / Truss Base */}
      <line x1="20" y1="98" x2="100" y2="98" stroke="#1E2024" strokeWidth="2" />
      <line x1="20" y1="98" x2="60" y2="24" stroke="#1E2024" strokeWidth="1.8" />
      <line x1="100" y1="98" x2="60" y2="24" stroke="#1E2024" strokeWidth="1.8" />

      {/* Internal Structural Cross-Truss */}
      <line x1="36" y1="68" x2="84" y2="68" stroke="#9E7D3B" strokeWidth="1.2" />
      <line x1="36" y1="68" x2="60" y2="98" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="84" y1="68" x2="60" y2="98" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="48" y1="46" x2="72" y2="46" stroke="#9E7D3B" strokeWidth="1" />

      {/* The Central Continuous Build Loop (Software Factory Engine) */}
      <circle cx="60" cy="64" r="16" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* 3 Telemetry Gate Pins */}
      <circle cx="60" cy="48" r="2.5" fill="#1E2024" />
      <circle cx="74" cy="72" r="2.5" fill="#9E7D3B" />
      <circle cx="46" cy="72" r="2.5" fill="#9E7D3B" />

      {/* Operator PC Pipeline Crown (Rig-in-a-Box Hub) */}
      <polygon points="60,18 66,26 54,26" fill="#9E7D3B" stroke="#1E2024" strokeWidth="1" />
      <circle cx="60" cy="24" r="1.5" fill="#FAF6EE" />

      {/* Caliper Verification Base Rule with Tolerance Ticks */}
      <line x1="28" y1="102" x2="92" y2="102" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="34" y1="100" x2="34" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="47" y1="100" x2="47" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="60" y1="99" x2="60" y2="105" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="73" y1="100" x2="73" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="86" y1="100" x2="86" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
      <text x="60" y="112" fontSize="5.2" fill="#68645C" textAnchor="middle" fontFamily="monospace" fontWeight="bold">RIG-IN-A-BOX</text>
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

interface CollectivePillar {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  systemName: string;
  systemRole: string;
  spot: "constellation" | "blocks" | "gantry";
  body: string;
  provocation: string;
  bullets: string[];
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
  actionLabel: string;
}

const COLLECTIVES: CollectivePillar[] = [
  {
    num: "01",
    tag: "DOMAIN 01 / THE ENTERPRISE",
    actionLabel: "Collaborate on B.O.S.S.",
    title: "The Enterprise",
    subtitle: "Domain Truth & Process Constellations",
    systemName: "B.O.S.S.",
    systemRole: "Business Operating System Specification",
    spot: "constellation",
    body: "Enterprise procedures capture the happy path, but the real operating logic lives in Mary's desktop spreadsheet and unwritten dock exceptions. Slabs of software get bought at the executive level; the company runs on tacit judgment that was never codified. You cannot prompt an AI agent with what was never written down.",
    provocation: "Never automate a stated process until you have audited the actual operational truth.",
    bullets: [
      "The 6-radial process constellation (P2P, O2C, P2M, S2S, D2R, MDM)",
      "Mary's loading dock spreadsheet vs. executive slide decks",
      "Governed by B.O.S.S. (stated vs. actual delta audits)",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Brief: Mary's Sheet & Polanyi",
    topicKey: "01 / The Enterprise & B.O.S.S. (Domain Truth & Schemas)",
  },
  {
    num: "02",
    tag: "DOMAIN 02 / THE WORKFLOW",
    actionLabel: "Collaborate on FlowCraft",
    title: "The Workflow",
    subtitle: "Human-Agent Synthesis at the Instance Level",
    systemName: "FlowCraft",
    systemRole: "Instance Operational Runtime",
    spot: "blocks",
    body: "Where does SaaS end and genuine agentic operations begin? Can a legacy ERP like SAP or Oracle ever truly be an agentic system, or are businesses trapped in monolithic upgrade cycles? Real enterprise agentics requires an instance-level operating system where humans and agents share master data (MDM), permissions, and memory.",
    provocation: "Most enterprises don't need another chatbot in a tab; they need human-agent synthesis running across their brownfield records.",
    bullets: [
      "Modular workflow blocks at the concrete shop-floor instance level",
      "Master Data Management (MDM) and operational memory",
      "Operationalized in FlowCraft (human-agent instance runtime)",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Brief: The SaaS/ERP Divide & Runtime",
    topicKey: "02 / The Workflow & FlowCraft (Human-Agent Runtime & MDM)",
  },
  {
    num: "03",
    tag: "DOMAIN 03 / THE FACTORY",
    actionLabel: "Collaborate on The Rig",
    title: "The Factory",
    subtitle: "Software That Builds Software & Rig-in-a-Box",
    systemName: "The Rig",
    systemRole: "Autonomous Software Factory",
    spot: "gantry",
    body: "The frontier is splitting: external software factories generate code from the outside, while internal droids automate tickets. But true velocity requires putting the power of the pipeline directly on the operator's PC—Rig-in-a-box—feeding a collective without leaking data or losing auditability.",
    provocation: "A prompt demo is fragile; an enterprise software factory requires deterministic caller gates, test harnesses, and verifiable telemetry.",
    bullets: [
      "Structural gantry test harness and deterministic build loop",
      "Rig-in-a-box: power of the pipeline directly on the operator's PC",
      "Engineered in The Rig (autonomous software factory)",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Brief: The Software Factory & The Seam",
    topicKey: "03 / The Factory & The Rig (Software Factory & Rig-in-a-Box)",
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
          source: "learn-through-the-work-collective",
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
          <a href="#the-collectives">02 / The Collective</a>
          <a href="#open-systems">03 / Shared Architecture</a>
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
      <section id="the-collectives" className={s.triadSection}>
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>02 / Learn and Build</p>
            <h2>The Collective<span>.</span></h2>
            <p className={s.triadDek}>
              One collective for builders, peers, and curious practitioners exploring live enterprise reality. Three interlocking systems—B.O.S.S., FlowCraft, and The Rig—operating as one happy family. Specialize in one system, or collaborate across all three.
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
                      {c.spot === "gantry" && <GantryHarnessSpot />}
                    </div>
                    <span className={s.triadNumTag}>{c.tag}</span>
                  </div>

                  <h3 className={s.triadCardTitle}>{c.title}</h3>
                  <div className={s.triadCardSubtitle}>{c.subtitle}</div>
                  <p className={s.triadCardBody}>{c.body}</p>

                  <div className={s.triadProvocation}>
                    <span className={s.triadProvocationLabel}>OPERATIONAL PROVOCATION</span>
                    <p className={s.triadProvocationText}>&ldquo;{c.provocation}&rdquo;</p>
                  </div>

                  <ul className={s.triadPointsList}>
                    {c.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
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
          SECTION 03: OPEN SYSTEMS & SHARED ARCHITECTURE (LIMELIGHT)
          B.O.S.S. · FlowCraft · The Rig in the Limelight
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection}>
        <div className={s.limelightInner}>
          <div className={s.limelightHead}>
            <p className={s.eyebrow}>03 / Shared Architecture</p>
            <h2>Three Open Systems. Built to Collaborate<span>.</span></h2>
            <p className={s.limelightDek}>
              From the genesis of The Rig, B.O.S.S., and FlowCraft, the goal was never to hoard a proprietary silo. It was to build a complete, verifiable operating contraption—and open it up for peers, builders, and curious people who want to build something incredible together.
            </p>
          </div>

          <div className={s.limelightGrid}>
            <div className={s.limelightCard}>
              <div>
                <span className={s.limelightBadge}>OPEN SPECIFICATION · DOMAIN TRUTH</span>
                <h3 className={s.limelightCardTitle}>B.O.S.S.</h3>
                <div className={s.limelightCardSubtitle}>Business Operating System Specification</div>
                <p className={s.limelightCardBody}>
                  Slabs of enterprise software get bought at the executive level, but the company runs on Mary's unwritten desktop spreadsheet. B.O.S.S. models the delta between stated executive happy paths and actual physical dock reality so agents execute on truth, not fiction.
                </p>
              </div>
              <div className={s.limelightCollaborationBox}>
                <span className={s.limelightCollabLabel}>OPEN TO BUILD TOGETHER</span>
                <p className={s.limelightCollabText}>
                  Standardized operational schemas, exception audit harnesses, and tacit knowledge discovery templates.
                </p>
              </div>
            </div>

            <div className={s.limelightCard}>
              <div>
                <span className={s.limelightBadge}>OPERATIONAL RUNTIME · HUMAN + AGENT</span>
                <h3 className={s.limelightCardTitle}>FlowCraft</h3>
                <div className={s.limelightCardSubtitle}>Instance-Level Operating System</div>
                <p className={s.limelightCardBody}>
                  Bridging the divide between static SaaS tools and living agentic operations. FlowCraft provides the instance-level operating runtime where humans and autonomous agents execute tasks together with shared Master Data (MDM), boundary governance, and live permissions.
                </p>
              </div>
              <div className={s.limelightCollaborationBox}>
                <span className={s.limelightCollabLabel}>OPEN TO BUILD TOGETHER</span>
                <p className={s.limelightCollabText}>
                  Workflow connectors, permission policies, and Master Data state machine runtimes.
                </p>
              </div>
            </div>

            <div className={s.limelightCard}>
              <div>
                <span className={s.limelightBadge}>SOFTWARE FACTORY · RIG-IN-A-BOX</span>
                <h3 className={s.limelightCardTitle}>The Rig</h3>
                <div className={s.limelightCardSubtitle}>Autonomous Software Factory</div>
                <p className={s.limelightCardBody}>
                  Moving beyond chat prompts and fragile sandboxes. The Rig puts the power of a 13-cell autonomous build pipeline directly on the operator's PC—running deterministic test harnesses, caller gates, and verified telemetry that feeds into a collective.
                </p>
              </div>
              <div className={s.limelightCollaborationBox}>
                <span className={s.limelightCollabLabel}>OPEN TO BUILD TOGETHER</span>
                <p className={s.limelightCollabText}>
                  Local developer harnesses, multi-agent skills, and sovereign pipeline toolchains.
                </p>
              </div>
            </div>
          </div>

          <div className={s.limelightBanner}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>THE COLLECTIVE CALL // PEER COLLABORATION</p>
              <h3>Twenty years on the enterprise floor. Over three years inside the runtime. Built to share and build together.</h3>
              <p>
                Not a proprietary silo, and not a sales pitch. B.O.S.S., FlowCraft, and The Rig exist because applied agentics requires real architecture, tested against live dock reality. Whether you want to specialize in one system or collaborate across the entire stack—the schemas, runtimes, and local developer harnesses are open to explore, test, and build together.
              </p>
            </div>
            <a href="#conversation" className={s.limelightBannerCta}>
              <span>Join the Collective &rarr;</span>
            </a>
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
