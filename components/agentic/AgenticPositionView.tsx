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
      <circle cx="60" cy="60" r="2.5" fill="#9E7D3B" />
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
      <rect x="10" y="10" width="100" height="100" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
      <rect x="20" y="24" width="46" height="72" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="24" y1="36" x2="62" y2="36" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="46" x2="62" y2="46" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="56" x2="62" y2="56" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="66" x2="62" y2="66" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="76" x2="62" y2="76" stroke="#DDD7C8" strokeWidth="1" />
      <line x1="24" y1="86" x2="62" y2="86" stroke="#DDD7C8" strokeWidth="1" />
      <text x="43" y="32" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">80% CODE</text>
      
      <rect x="66" y="24" width="34" height="72" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <text x="83" y="32" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">20% FLOOR</text>

      <line x1="66" y1="20" x2="66" y2="100" stroke="#9E7D3B" strokeWidth="2.5" strokeDasharray="3 2" />
      <circle cx="66" cy="60" r="5" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.5" />
      <circle cx="66" cy="60" r="2" fill="#9E7D3B" />
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
      <rect x="12" y="14" width="96" height="92" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
      <rect x="22" y="24" width="76" height="52" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="22" y1="36" x2="98" y2="36" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="22" y1="48" x2="98" y2="48" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="22" y1="60" x2="98" y2="60" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="42" y1="24" x2="42" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="64" y1="24" x2="64" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      <line x1="82" y1="24" x2="82" y2="76" stroke="#DDD7C8" strokeWidth="0.8" />
      <rect x="44" y="38" width="18" height="8" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="0.8" />
      <path d="M 60 76 L 60 94 M 56 90 L 60 94 L 64 90" stroke="#9E7D3B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="98" r="4" fill="#1E2024" />
      <circle cx="60" cy="98" r="1.5" fill="#FAF6EE" />
      <text x="60" y="20" fontSize="7" fill="#68645C" textAnchor="middle" fontFamily="monospace">TACIT KNOWLEDGE</text>
    </svg>
  );
}

// ============================================================================
// THE THREE ETHOS PILLARS (THE ENTERPRISE · THE WORKFLOW · THE FACTORY)
// ============================================================================

interface EthosPillar {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  spot: "polanyi" | "beehive" | "seam";
  body: string;
  provocation: string;
  bullets: string[];
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
}

const PILLARS: EthosPillar[] = [
  {
    num: "01",
    tag: "01 / DOMAIN TRUTH",
    title: "The Enterprise",
    subtitle: "People · Data · Systems · Ground Reality",
    spot: "polanyi",
    body: "Enterprise procedures capture the happy path, but the real operating logic lives in Mary's desktop spreadsheet and unwritten dock exceptions. Slabs of software get bought at the executive level; the company runs on tacit judgment that was never codified. You cannot prompt an AI agent with what was never written down.",
    provocation: "Never automate a stated process until you have audited the actual operational truth.",
    bullets: [
      "Slabs of software vs. Mary's loading dock spreadsheet",
      "The 20-year transformation arc: People, Data, Systems",
      "Cleverly backed by B.O.S.S. (stated vs. actual delta audits)",
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Field Note: Mary's Sheet & Polanyi",
    topicKey: "The Enterprise: Domain Truth & Mary's Sheet",
  },
  {
    num: "02",
    tag: "02 / OPERATIONAL SEAM",
    title: "The Workflow",
    subtitle: "Human-Agent Synthesis · SaaS vs. ERP",
    spot: "beehive",
    body: "Where does SaaS end and genuine agentic operations begin? Can a legacy ERP like SAP or Oracle ever truly be an agentic system, or are businesses trapped in monolithic upgrade cycles? Real enterprise agentics requires an instance-level operating system where humans and agents share master data (MDM), permissions, and memory.",
    provocation: "Most enterprises don't need another chatbot in a tab; they need human-agent synthesis running across their brownfield records.",
    bullets: [
      "The divide between static SaaS and dynamic agentic instances",
      "Master Data Management (MDM) and operational memory",
      "Cleverly backed by FlowCraft (instance operational runtime)",
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Field Note: The Application Layer & ERP",
    topicKey: "The Workflow: SaaS vs Agentics & Human Synthesis",
  },
  {
    num: "03",
    tag: "03 / THE BUILD LOOP",
    title: "The Factory",
    subtitle: "Software That Builds Software · Rig-in-a-Box",
    spot: "seam",
    body: "The frontier is splitting: external software factories generate code from the outside, while internal droids automate tickets. But true velocity requires putting the power of the pipeline directly on the operator's PC—Rig-in-a-box—feeding a collective without leaking data or losing auditability.",
    provocation: "A prompt demo is fragile; an enterprise software factory requires deterministic caller gates, test harnesses, and verifiable telemetry.",
    bullets: [
      "Putting the build pipeline directly on the operator's PC",
      "Deterministic test harnesses over chat prompt hallucinations",
      "Cleverly backed by The Rig (13-cell autonomous software factory)",
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Field Note: The Delivery Seam & Factories",
    topicKey: "The Factory: Software That Builds Software & Rig-in-a-Box",
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
  const [topic, setTopic] = useState("The Enterprise: Domain Truth & Mary's Sheet");
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
              Where a 20-year enterprise systems arc meets two years inside the agentic runtime.
            </p>
            <p className={s.heroLead}>
              Macro venture capital views enterprise transformation from financial altitude; the physical floor runs on unwritten reality. Between executive slide decks and automated software factories, every enterprise deployment succeeds or fails in the operational seam between code and the physical dock. This is where I build, question, and learn through the work.
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
          <a href="#systems-arc">01 / The Systems Arc</a>
          <a href="#three-pillars">02 / The Three Pillars</a>
          <a href="#the-block">03 / The Block Connection</a>
          <a href="#conversation">04 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE SYSTEMS ARC (THE FOUR WAVES)
          Pride of place directly under hero
          ==================================================================== */}
      <section id="systems-arc" className={s.fourWavesSection}>
        <div className={s.fourWavesInner}>
          <div className={s.fourWavesHead}>
            <p className={s.eyebrow}>01 / Historical Foundation</p>
            <h2>The Four Waves of Enterprise Technology<span>.</span></h2>
            <p className={s.fourWavesDek}>
              I have lived through every one of these waves across 50 enterprise implementations. Agentics is not an overnight replacement for company memory—it is the fourth wave operating directly across the foundation of the first three.
            </p>
          </div>

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
              A 20-year arc: from mainframes and client-server, to relational ERPs, to SaaS silos, to sovereign applied agentics.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE THREE PILLARS (1 · 2 · 3 ACROSS THE SCREEN)
          The Enterprise · The Workflow · The Factory
          ==================================================================== */}
      <section id="three-pillars" className={s.triadSection}>
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>02 / Ethos &amp; Practice</p>
            <h2>The Enterprise. The Workflow. The Factory<span>.</span></h2>
            <p className={s.triadDek}>
              Three interdependent layers where enterprise technology actually succeeds or fails. Not software being sold—an authentic expression of domain experience, lived inquiries from the floor, and working runtimes.
            </p>
          </div>

          <div className={s.triadGrid}>
            {PILLARS.map((p) => (
              <article key={p.num} className={s.triadCard} id={`pillar-${topicSlug(p.title)}`}>
                <div>
                  <div className={s.triadCardSpot}>
                    <div className={s.triadSpotFrame}>
                      {p.spot === "polanyi" && <PolanyiSheetSpot />}
                      {p.spot === "beehive" && <BeehiveSpot />}
                      {p.spot === "seam" && <SeamJointSpot />}
                    </div>
                    <span className={s.triadNumTag}>{p.tag}</span>
                  </div>

                  <h3 className={s.triadCardTitle}>{p.title}</h3>
                  <div className={s.triadCardSubtitle}>{p.subtitle}</div>
                  <p className={s.triadCardBody}>{p.body}</p>

                  <div className={s.triadProvocation}>
                    <span className={s.triadProvocationLabel}>OPERATIONAL PROVOCATION</span>
                    <p className={s.triadProvocationText}>&ldquo;{p.provocation}&rdquo;</p>
                  </div>

                  <ul className={s.triadPointsList}>
                    {p.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className={s.triadActions}>
                  <Link href={p.fieldNoteHref} className={s.triadReadBtn}>
                    <span>{p.fieldNoteLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleSelectTopic(p.topicKey)}
                    className={s.triadDiscussBtn}
                  >
                    <span>Discuss {p.title}</span>
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
          SECTION 03: THE BLOCK CONNECTION
          Direct sovereign bridge to the 60 catalog outcomes
          ==================================================================== */}
      <section id="the-block" className={s.seamSection}>
        <div className={s.seamInner}>
          <div className={s.blockConnectionCard}>
            <div className={s.blockConnectionBody}>
              <p className={s.eyebrow} style={{ margin: 0 }}>FLOWCRAFT &amp; DIGOPS · SOVEREIGN ASSETS</p>
              <h3>The Block: 60 Proven Leadership &amp; Enterprise Outcomes</h3>
              <p>
                Every architectural principle in this publication is backed by operational catalog outcomes—from custom enterprise agentic software (Category 07) to digital transformation cutovers. Explore the live, read-only catalog projected directly from Operations (:3300).
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
          SECTION 04: DIRECT CORRESPONDENCE
          Private reader exchange straight to Rob's desk
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>04 / Direct Correspondence</p>
            <h2>Continue the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              Have a thought, an operational challenge from your own floor, or a perspective on The Enterprise, The Workflow, or The Factory? Send me a note. It comes directly to my desk, and I will reply personally.
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
                    Focal Domain / Topic
                  </label>
                  <select
                    id="reader-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={s.select}
                    disabled={status === "submitting"}
                  >
                    <option value="The Enterprise: Domain Truth & Mary's Sheet">
                      01 / The Enterprise: Domain Truth &amp; Mary's Sheet
                    </option>
                    <option value="The Workflow: SaaS vs Agentics & Human Synthesis">
                      02 / The Workflow: SaaS vs Agentics &amp; Human Synthesis
                    </option>
                    <option value="The Factory: Software That Builds Software & Rig-in-a-Box">
                      03 / The Factory: Software That Builds Software &amp; Rig-in-a-Box
                    </option>
                    <option value="General inquiry on applied agentics">
                      General inquiry on applied agentics &amp; systems
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
                    placeholder="Share what you are navigating in your enterprise, a question on where agentics breaks on the physical floor, or thoughts on The Enterprise, The Workflow, or The Factory..."
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
