"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import s from "./AgenticPositionView.module.css";

// ============================================================================
// THE THREE GEOMETRIC SYMBOLS (ARCHITECTURAL DRAFTING SVGs)
// ============================================================================

/**
 * 01 / Theme 01 — Transforming Zeros and Ones (The Seam & Sacred Hex)
 */
function ProcessConstellationSpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />
      <circle cx="24" cy="24" r="17" stroke="#9E7D3B" strokeWidth="0.8" strokeDasharray="2 2" />
      <polygon points="24,9 37,16.5 37,31.5 24,39 11,31.5 11,16.5" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="11" y1="24" x2="37" y2="24" stroke="#9E7D3B" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4.2" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.3" />
      <circle cx="24" cy="24" r="1.6" fill="#1E2024" />
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 02 / Theme 02 — People and Agents at Work (Human + Binary Synthesis)
 */
function WorkflowBlocksSpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />
      <circle cx="17" cy="24" r="10.5" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="17" cy="24" r="6.5" stroke="#9E7D3B" strokeWidth="1" strokeDasharray="2.5 1.5" />
      <circle cx="17" cy="24" r="2.2" fill="#1E2024" />
      <path d="M 31 15 L 39 19.5 L 39 28.5 L 31 33 L 23 28.5 L 23 19.5 Z" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.2" />
      <line x1="31" y1="15" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="39" y1="19.5" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <line x1="23" y1="19.5" x2="31" y2="24" stroke="#9E7D3B" strokeWidth="1" />
      <path d="M 24 19.5 L 28.5 24 L 24 28.5 L 19.5 24 Z" fill="#9E7D3B" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.2" fill="#FAF6EE" />
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 03 / Theme 03 — The Agentic Development Company (Multi-Harness Compass & Cube)
 */
function FactorySpot() {
  return (
    <svg viewBox="0 0 48 48" className={s.spotSvg} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="3" fill="#FAF6EE" stroke="#E2DCD0" strokeWidth="1" />
      <circle cx="24" cy="24" r="16" stroke="#1E2024" strokeWidth="0.9" opacity="0.4" />
      <polygon points="24,10 36,17 36,31 24,38 12,31 12,17" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.3" />
      <rect x="18.5" y="18.5" width="11" height="11" rx="1.5" transform="rotate(45 24 24)" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="3" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1" />
      <circle cx="24" cy="24" r="1.3" fill="#1E2024" />
      <path d="M 5 9 L 5 5 L 9 5" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 43 39 L 43 43 L 39 43" stroke="#9E7D3B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Ethereal Architectural Paper-Drafting Plate (Hero Centerpiece)
 * Replaces the commercial box chart with warm paper sacred geometry & compass drafting.
 */
function PeopleSystemsWorkflowSpot() {
  return (
    <div className={s.emblemSpot}>
      <a
        href="/diagrams/learn-through-work-paper-plate.svg"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Human & Binary Intelligence architectural paper plate at full size in a new tab"
        className={s.emblemLink}
      >
        <Image
          src="/diagrams/learn-through-work-paper-plate.svg"
          alt="Human & Binary Intelligence · People, Data, Systems, Workflows, Agents, and Patterns across 01 Intent, 02 Define, 03 Deliver, and 04 Outcome"
          width={880}
          height={760}
          unoptimized
          className={s.emblemImg}
          priority
        />
      </a>
      <div className={s.emblemCaption}>
        <strong className={s.emblemCaptionTitle}>The Seam &amp; The Continuous Loop</strong>
        <span className={s.emblemCaptionSubtitle}>01 Intent &middot; 02 Define &middot; 03 Deliver &middot; 04 Outcome &#8634;</span>
        <a
          href="/diagrams/learn-through-work-paper-plate.svg"
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
          Open Full Paper Drafting Plate &#8599;
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// THE THREE THEMES & FIELD NOTES SPECIFICATION
// ============================================================================

interface TitanQuote {
  speaker: string;
  role: string;
  source: string;
  sourceUrl?: string;
  isQuoted?: boolean;
  quote: string;
}

interface FieldNoteCard {
  id: string;
  rubric: string;
  stamp: string;
  title: string;
  excerpt: string;
  fullText: string[];
  signature: string;
  footerLabel: string;
}

interface CollectivePillar {
  num: string;
  tag: string;
  actionLabel: string;
  title: string;
  subtitle: string;
  spot: "constellation" | "blocks" | "factory";
  paragraphs: string[];
  titanQuote: TitanQuote;
  fieldNoteCards: FieldNoteCard[];
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
}

const COLLECTIVES: CollectivePillar[] = [
  {
    num: "01",
    tag: "THEME 01 // WHAT IS OLD IS NEW AGAIN",
    actionLabel: "Discuss This Theme",
    title: "Transforming Zeros and Ones",
    subtitle: "Why Most Large ERP Transformations Miss Expectations, the Space Between the Seams, and Why Agentics Still Comes Down to People, Data, Systems, and Workflows",
    spot: "constellation",
    paragraphs: [
      "Across twenty-plus years and more than fifty enterprise transformations—from AS/400s and client-server suites to modern cloud ERPs—one sobering pattern has held true: the majority of large ERP and digital transformations fall short of what the business was promised. You see the battle scars everywhere today, from executive boardrooms to frontline war stories shared across TikTok and LinkedIn. They rarely fail because the database couldn't add numbers. They fail between the seams—where siloed data, disparate systems, forty-year-old bastardized item schemas, and unwritten floor workarounds collide with stakeholder alignment and human change management.",
      "What is old is new again. Dropping AI agents onto a fractured enterprise stack does not bypass those seams; it makes them even more consequential. If you accelerate broken data models and unmapped cross-department handoffs at machine speed, you only automate the friction. Solving enterprise transformation in the agentic era still comes down to the same foundation—people, data, systems, and workflows—governing the space between the tasks and bringing the operators whose purpose is tied up in the old fragile system directly into the journey.",
    ],
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital · Co-Host, All-In",
      source: "“What AI spend does to headcount” (Oct 2, 2026)",
      sourceUrl: "https://research.socialcapital.com/p/ai-and-employment",
      isQuoted: true,
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    fieldNoteCards: [
      {
        id: "fn-mary",
        rubric: "NOTE FROM THE FIELD 01-A // THE PLANT FLOOR VS. THE DATABASE",
        stamp: "MARY'S SHEET",
        title: "Mary's Sheet & Why ERP Cutovers Miss the Floor",
        excerpt:
          "A composite portrait drawn from frontline manufacturing cutovers I have led: when the new ERP says Packaging Line 2 is green while mechanics have the filling pump unbolted on the bench, the plant runs on Mary's green metal clipboard—until you design around her truth.",
        fullText: [
          "Walk almost any manufacturing or brewing floor after a multimillion-dollar ERP go-live and you will find 'Mary's Sheet'—the folded 11x17 spreadsheet on a green metal clipboard keeping the operation running. Drawn from frontline supervisors I worked alongside across multiple plant cutovers, Mary's reality was always the same: in the database, Packaging Line 2 showed green and idle; twenty feet away on the concrete floor, mechanics had the filling pump unbolted on the bench to fix a weeping seal before logging the ticket.",
          "When we unified the scheduling and floor workflows around how the plant actually ran instead of forcing the floor to serve a rigid screen, the human side surfaced immediately: 'Well, I guess I'm going to lose my job and have nothing to do.' My answer was simple: 'You're going to have more important things to do, Mary.' Taking the clerical reconciliation off her shoulders freed her to walk the bays, spot issues early, and mentor the next generation of supervisors—a lesson that governs how I design human-in-the-loop agentic workflows today.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-A",
        footerLabel: "PEOPLE · DATA · SYSTEMS · WORKFLOWS",
      },
      {
        id: "fn-don",
        rubric: "NOTE FROM THE FIELD 01-B // UNIFYING 40 YEARS OF BASTARDIZED ITEM SCHEMAS",
        stamp: "DON WMS + DON",
        title: "Don WMS, the Unified Item Catalog & His Partner 'DON'",
        excerpt:
          "In tight New York quarters cobbled together over 30–40 years, Don held a fragile maze of bastardized item schemas and unlabeled vendor stock in his head. Making him part of the catalog journey gave Don WMS a partner on an iPad named 'DON'.",
        fullText: [
          "Long before agentics entered the vocabulary, we called him Don WMS. Don worked for a multi-location manufacturing and distribution company in New York, operating in tight city quarters cobbled together over 30–40 years where every inch of space was at a premium and constantly in movement. With bastardized 'smart' item schemas, third-party item translations, different internal department keys, and vendors shipping without proper labels, Don built a fragile system that worked—because he knew where every item, every location, and every person was.",
          "Transformation was hard on Don and his crew because knowing where everything sat was his identity and purpose. Making Don a co-architect of the unified item catalog—and designing the workflows so he still did what he loved to do, walking the floor around his people armed with real-time truth on an iPad—changed everything. He still touched base with everyone on the floor and double-checked with his new digital partner. It was still Don WMS, but Don WMS had a partner, DON—and that formative lesson is why every agentic workflow block we build today starts with the operator's domain pride.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-B",
        footerLabel: "STAKEHOLDER & CHANGE MANAGEMENT · UNIFIED DATA CORE",
      },
    ],
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Read Full Dispatch 01: Transforming Zeros & Ones",
    topicKey: "01 / Transforming Zeros & Ones: Mary's Sheet & Don WMS",
  },
  {
    num: "02",
    tag: "THEME 02 // THE NEW ENTERPRISE WORKFORCE",
    actionLabel: "Discuss This Theme",
    title: "People and Agents at Work",
    subtitle: "Deploying Intelligence Optimally, Challenging the Legacy ERP Hostage Model, and the Joy of Working on a Different Kind of Team",
    spot: "blocks",
    paragraphs: [
      "Agents are real, they are here, and we are at the beginning of a remarkable shift in how enterprises operate. While much of the outside commentary fixates on replacing people, the real frontier inside operating businesses is discovering how human judgment and agentic execution work together to deploy intelligence optimally. When that division of responsibility is designed well, people are emboldened to do the work they love, sharpen their domain craft, and experience the energy of working on a hybrid team where agents carry the repetitive synthesis and reconciliation.",
      "This human-agentic shift also forces a candid reckoning with the twenty-year SaaS and monolithic ERP model. Across major SaaS platforms, the clearest strategic direction is going headless—centering on metadata, governed business context, and deterministic API workflows rather than trapping users inside proprietary screens. Meanwhile, the legacy ERP model that held customer data and operational patterns captive is facing a practical alternative: combining deterministic accounting, tax, and audit controls with modular, agentic workflow blocks on a company-owned Data Spine.",
    ],
    titanQuote: {
      speaker: "Robert Paddock",
      role: "Practitioner Thesis · Deterministic Controls + Agentic Workflows",
      source: "Architectural Principle from 50+ Transformations",
      isQuoted: false,
      quote:
        "What separates a durable enterprise system from a fragile demo isn't the language model alone—it is the governed metadata, the deterministic accounting and compliance rules, and the company-owned data spine underneath the workflow blocks.",
    },
    fieldNoteCards: [
      {
        id: "fn-beer-erp",
        rubric: "NOTE FROM THE FIELD 02 // SPIRITED DEBATE OVER A BEER WITH A BIG-SI EXECUTIVE",
        stamp: "CAN AGENTICS BUILD AN ERP?",
        title: "Over a Beer: Can Agentics Build an Enterprise ERP?",
        excerpt:
          "A spirited argument over a beer with a close friend and senior executive at a major global ERP systems integrator. He argued that thirty years of deterministic audit controls and statutory edge cases can never be displaced; from the operator seat, that debate sharpened how we separate deterministic controls from agentic workflows.",
        fullText: [
          "Not long ago, I sat down over a beer with a friend I deeply respect—a senior executive at one of the giant global system integrators for tier-one ERPs. We got into a spirited debate from opposite sides of the table. His objection was serious and earned: enterprise ERPs encode thirty years of hard-won statutory, tax, multi-entity consolidation, and audit-trail rules where a 99% probabilistic guess is a compliance failure. In his view, that regulatory and control moat guarantees that giant software vendors and massive SI programs will always own the core.",
          "Coming from the customer and operator side of the table after carrying 50+ transformations through cutover, I agreed with his premise on deterministic controls—and disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Instead, you codify the deterministic rules—double-entry ledger invariants, three-way match tolerances, lot traceability, and statutory validations—inside a company-owned Data Spine, and use agentic workflow blocks to orchestrate the messy human and cross-system seams around them. You prove it one bounded workflow at a time—close acceleration, receiving reconciliation, catalog unification—until the hostage model loses its grip.",
        ],
        signature: "— Robert Paddock · Note from the Field 02",
        footerLabel: "DETERMINISTIC CONTROLS + AGENTIC WORKFLOW BLOCKS",
      },
    ],
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Read Full Dispatch 02: People & Agents at Work",
    topicKey: "02 / People and Agents at Work & The Enterprise ERP Debate",
  },
  {
    num: "03",
    tag: "THEME 03 // BEYOND PROMPTING & VIBE CODING",
    actionLabel: "Discuss This Theme",
    title: "The Agentic Development Company",
    subtitle: "What Happens When You Move Past Vibe Coding into Multi-Harness Software Engineering: Falling Down the Rabbit Hole and Finding Your Way Out of the Disco",
    spot: "factory",
    paragraphs: [
      "Pushing beyond single-prompt coding assistants into enterprise-grade agentic software development is a humbling, exhilarating ride. It is not prompt engineering, and it is not 'vibe coding' a prototype over a weekend. It requires operating an Agentic Development Company with real engineering governance: multiple frontier AI harnesses working in isolated lanes against explicit domain blueprints, strict file fences, automated test gates, cross-model verification, and human outcome accountability.",
      "Over the past three years, learning those lessons the hard way forged The Rig—our multi-harness builder workshop that we use to construct B.O.S.S. (our Canonical Enterprise Data Spine & 6 Constellations) and FlowCraft (our Agentic Workflow Runtime Engine). Agents write the code while human judgment governs architecture, capital discipline, and operational acceptance. Getting here meant living through two connected realities: falling down the Rabbit Hole in pure builder joy, and staying down there long enough to find the Disco.",
    ],
    titanQuote: {
      speaker: "Matan Grinberg & Eno Reyes",
      role: "Co-Founders, Factory (factory.ai)",
      source: "Factory · “The Software Factory”",
      sourceUrl: "https://factory.ai/news/the-software-factory",
      isQuoted: true,
      quote:
        "The incremental units of this system are AI agents. This system will be built by engineers, and in turn will build their software. This system is the software factory... We are building the machine that builds the machine.",
    },
    fieldNoteCards: [
      {
        id: "fn-rabbit-hole",
        rubric: "NOTE FROM THE FIELD 03-A // FALLING IN PURE BUILDER LOVE",
        stamp: "DOWN THE RABBIT HOLE",
        title: "Down the Rabbit Hole: The Joy of Building with Multi-Harness Agents",
        excerpt:
          "After twenty years of watching enterprise transformations bog down between strategy decks and slow handoffs, watching coordinated agent harnesses turn domain blueprints into working schemas and workflow blocks at midnight is pure builder joy.",
        fullText: [
          "There is an unmistakable joy to what this era gives a builder who has lived inside enterprise operations. After twenty years of carrying a clear mental model of how canonical data cores, financial ledgers, and plant-floor workflows ought to fit together—and watching traditional programs take eighteen months just to align requirements—falling down the rabbit hole of agentic development felt like stepping into a new world.",
          "Sitting at my desk at midnight watching multiple agent harnesses coordinate across an architectural blueprint—turning decades of operational patterns into working data models, financial controls, and workflow blocks at a pace I never thought I would see in my career—was exhilarating. I fell down that rabbit hole out of pure love for the craft.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-A",
        footerLabel: "BUILDER DISCOVERY · MULTI-HARNESS VELOCITY",
      },
      {
        id: "fn-disco",
        rubric: "NOTE FROM THE FIELD 03-B // THROUGH THE HOUSE OF MIRRORS",
        stamp: "FINDING THE DISCO",
        title: "Stay Down Long Enough and You Find the Disco (The House of Mirrors)",
        excerpt:
          "You fall down the rabbit hole in joy—and when you stay down there long enough building real enterprise systems, you hit the Disco: unverified green lights, burning code down to the ground, and building the harnesses and check gates required to walk out of the house of mirrors.",
        fullText: [
          "You fall down the rabbit hole in joy—and if you stay down there long enough building real enterprise software, you find the Disco. That is the hard reality nobody puts in a vendor demo: believing an agent's confident summary only to discover the underlying state never reconciled, burning a subsystem down to the ground and rebuilding it from scratch, and keeping your footing while model behaviors shift every week.",
          "Inside a complex codebase, unconstrained vibe coding turns the disco into a house of mirrors under flashing lights—agents looping, grading their own homework, and breaking downstream invariants. Walking out of that house of mirrors forced me to change my own discipline: enforcing strict file fences, requiring an opposing model family to verify every unit before it lands, and measuring accepted operational outcomes rather than raw token speed.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-B",
        footerLabel: "OUT OF THE HOUSE OF MIRRORS · THE RIG",
      },
    ],
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Read Full Dispatch 03: The Agentic Development Company",
    topicKey: "03 / The Agentic Development Company: Rabbit Hole & The Disco",
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
  const [topic, setTopic] = useState("Across the Three Themes");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "recorded" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [openNotes, setOpenNotes] = useState<Record<string, boolean>>({});

  function toggleFieldNote(id: string) {
    setOpenNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  }

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
              Where 20+ years of business leadership and 50+ enterprise transformations meet three years of hands-on agentic software development.
            </p>
            <p className={s.heroLead}>
              This is where I share what I see in the field—the patterns, the debates, and the lived reality of building at the intersection of enterprise operations and agentics. <strong>I call this era Binary Intelligence</strong> because it is still zeros and ones, now elevated to a level where human judgment can direct them at speed. Across plant-floor cutovers, unified data cores, and a multi-harness <strong>Agentic Development Company</strong>, <strong>people and agents contribute throughout <em>Intent, Define, Deliver, and Outcome</em>, with human judgment and accountability guiding the work</strong>.
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
                <span className={s.plateTag}>ARCHITECTURAL NOTEBOOK PLATE &bull; HUMAN + BINARY INTELLIGENCE</span>
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
                    <span>Intent &rarr; Outcome</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#field-briefs">01 / Three Core Themes &amp; Notes from the Field</a>
          <a href="#open-systems">02 / Lead-In to The Collective</a>
          <a href="#conversation">03 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE THREE CORE THEMES & NOTES FROM THE FIELD
          ==================================================================== */}
      <section id="field-briefs" className={s.triadSection}>
        <span id="systems-arc" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="the-collectives" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>01 / Three Core Themes &amp; Notes from the Field</p>
            <h2>What Is Old Is New, the New Workforce, and the Builder&rsquo;s Ride<span>.</span></h2>
            <p className={s.triadDek}>
              Three foundational theses on enterprise transformation and agentic software engineering—each grounded in personal notes from the field: from the plant floor, from a bar table with a global SI peer, and from midnight inside the builder&rsquo;s rabbit hole.
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

                  {/* Substantive Professional Theme Write-Up */}
                  <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {c.paragraphs.map((pText, idx) => (
                      <p key={idx} className={s.triadCardBody} style={{ margin: 0 }}>
                        {pText}
                      </p>
                    ))}
                  </div>

                  {/* Supporting Industry Corroboration / Macro Consensus */}
                  <div style={{ marginTop: "18px", marginBottom: "6px" }}>
                    <span className={s.triadSectionTag}>
                      {c.titanQuote.isQuoted === false ? "ARCHITECTURAL PRINCIPLE // FIELD THESIS" : "INDUSTRY PERSPECTIVE // THE MACRO VIEW"}
                    </span>
                  </div>
                  <div className={s.triadQuoteBlock}>
                    <div className={s.triadQuoteMeta}>
                      <span className={s.triadQuoteSpeaker}>{c.titanQuote.speaker}</span>
                      {c.titanQuote.sourceUrl ? (
                        <a
                          href={c.titanQuote.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={s.triadQuoteSource}
                          style={{ textDecoration: "underline" }}
                        >
                          • {c.titanQuote.source} &#8599;
                        </a>
                      ) : (
                        <span className={s.triadQuoteSource}>• {c.titanQuote.source}</span>
                      )}
                    </div>
                    <blockquote className={s.triadQuoteText}>
                      {c.titanQuote.isQuoted === false ? c.titanQuote.quote : <>&ldquo;{c.titanQuote.quote}&rdquo;</>}
                    </blockquote>
                    <div className={s.triadQuoteRole}>{c.titanQuote.role}</div>
                  </div>

                  {/* Notes from the Field (Excerpt + Expandable Drawer) */}
                  <div style={{ marginTop: "18px", marginBottom: "8px" }}>
                    <span className={s.triadSectionTag}>
                      NOTES FROM THE FIELD // {c.fieldNoteCards.length > 1 ? `${c.fieldNoteCards.length} FIELD NOTES` : "1 FIELD NOTE"}
                    </span>
                  </div>

                  {c.fieldNoteCards.map((fn) => {
                    const isOpen = !!openNotes[fn.id];
                    return (
                      <div key={fn.id} className={s.triadFieldNoteCard} style={{ marginTop: "10px" }}>
                        <div className={s.triadFieldNoteHead}>
                          <div className={s.triadFieldNoteRubric}>
                            <span className={s.triadFieldNoteDot} aria-hidden="true" />
                            <span>{fn.rubric}</span>
                          </div>
                          <span className={s.triadFieldNoteStamp}>{fn.stamp}</span>
                        </div>

                        <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--ink)", marginBottom: "6px", fontFamily: "var(--next-font-display), Georgia, serif" }}>
                          {fn.title}
                        </div>

                        {!isOpen ? (
                          <p className={s.triadFieldNoteText} style={{ marginBottom: "10px" }}>
                            {fn.excerpt}
                          </p>
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "10px" }}>
                            {fn.fullText.map((para, pIdx) => (
                              <p key={pIdx} className={s.triadFieldNoteText} style={{ margin: 0 }}>
                                {para}
                              </p>
                            ))}
                          </div>
                        )}

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", paddingTop: "8px", borderTop: "1px dashed var(--line)" }}>
                          <button
                            type="button"
                            onClick={() => toggleFieldNote(fn.id)}
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                              fontSize: "11.5px",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "var(--brass-dark)",
                              textDecoration: "underline",
                            }}
                          >
                            {isOpen ? "Close Field Note ▴" : "Open Full Field Note ▾"}
                          </button>
                          <span style={{ fontSize: "10.5px", color: "var(--muted)", fontFamily: "ui-monospace, monospace" }}>
                            {fn.signature}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={s.triadActions} style={{ marginTop: "20px" }}>
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
          SECTION 02: THE PATTERNS & THE COLLECTIVE GATEWAY
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection} style={{ padding: "56px 32px" }}>
        <div className={s.limelightInner}>
          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>02 / COMPARE LESSONS IN THE COLLECTIVE // SHARED PATTERNS &amp; LIVING WORKSHOP</p>
              <h3>Compare Notes with Operators, Domain Experts, and Agentic Builders.</h3>
              <p>
                Explore <strong>The Collective</strong>—where operators, domain experts, and builders share what works in the field, and where our live workshop (<strong>The Rig</strong>, <strong>B.O.S.S.</strong>, and <strong>FlowCraft</strong>) turns proven patterns into reusable <strong>Agentic Workflow Runtime Blocks</strong>.
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
          SECTION 03: DIRECT CORRESPONDENCE
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>03 / Direct Correspondence</p>
            <h2>Join the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              For builders, peers, and enterprise operators. Have a view on why ERP transformations miss the floor, whether agentics can build an enterprise ERP, or your own trip down the rabbit hole and into the disco? Send me a note—it comes straight to my desk.
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
                    <option value="Across the Three Themes">
                      Across the Three Themes
                    </option>
                    <option value="01 / Transforming Zeros & Ones: Mary's Sheet & Don WMS">
                      01 / Transforming Zeros &amp; Ones: What Is Old Is New, Mary&apos;s Sheet &amp; Don WMS
                    </option>
                    <option value="02 / People and Agents at Work & The Enterprise ERP Debate">
                      02 / People and Agents at Work &amp; Can Agentics Build an Enterprise ERP?
                    </option>
                    <option value="03 / The Agentic Development Company: Rabbit Hole & The Disco">
                      03 / The Agentic Development Company: Down the Rabbit Hole &amp; Finding the Disco
                    </option>
                    <option value="The Collective / Collaboration & Shared Patterns">
                      The Collective / Shared Patterns &amp; Workshop Architecture
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
                    placeholder="Share what you are navigating in your enterprise, your take on the ERP bar debate, or a note from your own trip down the agentic rabbit hole..."
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
                  <span className={s.submitMeta}>
                    Direct to Robert Paddock &middot; Private &amp; Confidential
                  </span>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={s.submitButton}
                  >
                    <span>{status === "submitting" ? "Sending Note..." : "Send Note to Robert"}</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <path d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
