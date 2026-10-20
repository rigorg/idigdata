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
      <Link
        href="/agentic-ai/plate/"
        aria-label="Open the Human & Binary Intelligence architectural paper plate at full size"
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
      </Link>
      <div className={s.emblemCaption}>
        <strong className={s.emblemCaptionTitle}>The Seam &amp; The Continuous Loop</strong>
        <span className={s.emblemCaptionSubtitle}>01 Intent &middot; 02 Define &middot; 03 Deliver &middot; 04 Outcome &#8634;</span>
        <Link
          href="/agentic-ai/plate/"
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
          Open Full Paper Drafting Plate &rarr;
        </Link>
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
  paragraphs: React.ReactNode[];
  titanQuote?: TitanQuote;
  fieldNoteCards: FieldNoteCard[];
  closingQuestion: string;
  fieldNoteHref: string;
  fieldNoteLabel: string;
  topicKey: string;
}

const COLLECTIVES: CollectivePillar[] = [
  {
    num: "01",
    tag: "CHAPTER 01 // PEOPLE, SYSTEMS & WORKFLOWS · CURRENT-STATE REALITY",
    actionLabel: "Share How You See This Seam",
    title: "What’s Old Is New, What’s New Is Old",
    subtitle: "Bad Data, Shadow IT, and the Mighty Excel Spreadsheet: How Businesses Actually Run.",
    spot: "constellation",
    paragraphs: [
      "The ERP says the work is scheduled. The person on the floor knows the machine cannot run. Somewhere between those two facts sits a spreadsheet, a phone call, and someone making sure the business gets through the day.",
      <>
        If you want to understand why enterprise AI is both so exciting and so misunderstood right now, you have to look at the fifty-year road that brought us here. By the 1970s and early 1980s, COBOL-based systems were already carrying much of the ledger, inventory, and payroll work that established the transaction patterns companies still run on today. Then came the big ERP wave, promising one integrated system to run the entire enterprise. Even looking out through 2027,{" "}
        <a
          href="https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner forecasts
        </a>{" "}
        that more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals. In my experience, one reason is painfully familiar: the implementation goes live while the work between the screens still sits on a clipboard. Alongside those ERPs came massive CapEx implementation budgets for armies of system integrators and implementation partners who somehow never quite seem to leave.
      </>,
      "Then the SaaS revolution rolled in. SaaS brought useful point tools, but in my experience, the commercial structure of most platforms—per-seat subscriptions, renewal lock-in, and data kept inside vendor walls—often leaves the software rigid where your company’s actual workflows need to bend.",
      "So what happened on the ground? Because a business is a living machine that has to make money every single day—buying, producing, selling, shipping, paying bills, making payroll, and navigating multi-entity, multi-location taxes and regulations—people had to find a way to make the machine work. When you peel back the curtain on almost any company today, what actually runs the business? The mighty Excel spreadsheet—and decades of Shadow IT.",
      "To get their jobs done, functional departments had to build their own spreadsheet bridges or go out and buy their own departmental software. Over ten, twenty, or thirty years, companies accumulated custom programs, partner portals, and Shadow IT projects that got siloed, forgotten about, or left exposed. I’ve found twenty-year-old shadow systems humming away in a corner that nobody in leadership even knows exist—except the one guy who quietly fixes it whenever it breaks. Meanwhile, on the financial side, just corralling the sprawl of subscription costs, real active user counts versus unused seats, contract term dates, and now AI token usage has become a full-time battle of its own.",
      "Those gaps are the seams—and the intangible work between the tasks is what people like Mary and Don carry every morning. Inside a legacy company, no one person can see the whole anymore. They structurally can’t—from the IT department to the functional domains, it has grown into too big of a collective tangle over the decades, sitting on top of the same root problem we have fought since the beginning: bad, disconnected data. Yet the people inside those domains show up every day and perform quiet heroics—both in the physical world and with zeros and ones—just to keep the business moving. And when a company finally decides to transform, those exact same people, who already have a full-time day job keeping the lights on, get pulled into a command-and-control marathon of project management, stakeholder alignment, and change management when up-to-date SOPs barely exist.",
      "Here is why I have genuine hope for where we are going: what is old is new, and what is new is old. The fundamentals are still People, Systems, and Workflows—and cleaning up the data core. But with agents in the work, we no longer have to put people through a two-year root canal just to map where the business stands. We can sit beside the people doing the work—'show me how you do it today'—and use intelligence to accelerate the heavy lifting: organizing source material from messy spreadsheets and forgotten Shadow IT tools, comparing unwritten workflows, and surfacing inconsistencies for your people to validate.",
    ],
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital",
      source: "“What AI spend does to headcount”",
      sourceUrl: "https://research.socialcapital.com/p/ai-and-employment",
      isQuoted: true,
      quote:
        "A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong.",
    },
    fieldNoteCards: [
      {
        id: "fn-mary",
        rubric: "NOTE FROM THE FIELD 01-A // HEROICS ON THE PHYSICAL FLOOR",
        stamp: "MARY'S SHEET & DON WMS",
        title: "Mary’s Sheet, Don WMS & His Partner 'DON'",
        excerpt:
          "Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily heroics keep the operation running—from Mary's 6:30 AM clipboard next to an unbolted pump to Don WMS navigating 40 years of item schemas in tight New York warehouse bays.",
        fullText: [
          "Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily heroics keep the operation running. On the plant floor, it is 'Mary’s Sheet'—a composite portrait from plant cutovers I have led: the folded 11x17 Excel spreadsheet on a green metal clipboard at 6:30 AM that knows Packaging Line 2 has its filling pump unbolted on the workbench twenty feet away, even while the new ERP screen shows green and ready.",
          "In tight New York warehouse quarters cobbled together over 30 to 40 years, it was Don WMS—who held four decades of bastardized item schemas, missing vendor labels, and mismatched department keys in his head so product could keep moving fast through crowded bays.",
          "Transformation is emotional for people like Mary and Don because holding that fragile puzzle together is their pride and purpose. Across frontline cutovers, the quiet worry that surfaces is almost always the same: 'Well, I guess I'm going to lose my job and have nothing to do.' And the answer that matters is simple: 'You're going to have more important things to do.' Taking the morning spreadsheet gymnastics off a supervisor's shoulders frees her to walk the bays, spot issues early, and mentor younger leads. And when we made Don co-architect of the unified item catalog and gave him real-time data on an iPad, he still did what he loved—walking the floor and talking with his crew—only now Don WMS had a digital partner named DON.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-A",
        footerLabel: "PEOPLE · SYSTEMS · WORKFLOWS · CURRENT STATE",
      },
      {
        id: "fn-don",
        rubric: "NOTE FROM THE FIELD 01-B // HEROICS IN THE HALLWAY & EXCEL",
        stamp: "TUESDAY NIGHT IBP",
        title: "“Integrated Business Planning” & The Day-Job Dilemma",
        excerpt:
          "In practice, 'Integrated Business Planning' usually isn't integrated at all—it is a group of dedicated people with full-time day jobs working late into a Tuesday night wrestling CSVs and Excel sheets so Wednesday's numbers make sense.",
        fullText: [
          "Heroics don't just happen next to unbolted pumps or loading docks; they happen in office hallways, on phone calls, and in conference rooms just to keep one set of numbers standing. Look at what most companies call 'Integrated Business Planning.' In practice, it usually isn't integrated at all—it is a group of dedicated people who already have full-time day jobs working late into a Tuesday night, exporting CSVs, trading phone calls down the hall, and wrestling Excel sheets across Sales, Production, Inventory, and Finance just to cobble together numbers that make sense for Wednesday's meeting.",
          "The irony is that by the time Wednesday's meeting wraps up, the physical floor has moved and Tuesday night's spreadsheet is already out of date. When you organize the underlying data core and let intelligence handle that pre-meeting reconciliation continuously, people stop spending their evenings assembling numbers for a meeting—and actually get to use the meeting to guide the business.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-B",
        footerLabel: "HALLWAY HEROICS · SHADOW IT · RECONCILED DATA CORE",
      },
    ],
    closingQuestion: "That’s what I’m seeing in the current-state seams. Where do you see the biggest gaps between official systems and daily reality in your operation?",
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Open Standalone Essay 01: What’s Old Is New, What’s New Is Old",
    topicKey: "01 / What's Old Is New: Mary's Sheet, Don WMS & Shadow IT",
  },
  {
    num: "02",
    tag: "CHAPTER 02 // PEOPLE, SYSTEMS & WORKFLOWS · MEMORY & THE CONTEXT WORKSPACE",
    actionLabel: "Share How You See This Shift",
    title: "Working with Intelligence: Memory, Context, and the New Daily Reality",
    subtitle: "What Happens When Institutional Memory, System Connectivity, and Human Judgment Come Together in One Workspace.",
    spot: "blocks",
    paragraphs: [
      "Once you sit beside the people doing the work and start untangling those current-state seams with them, a big question opens up: What does daily work actually look like on the other side?",
      "For the last thirty years, enterprise software treated 'go-live' as the finish line. Once the initial rollout was declared finished, the screens froze in place while the business kept changing—forcing people right back into spreadsheets, workarounds, and costly change orders. Worse, software trained humans to work like data-entry clerks: clicking through fifteen different tabs, hunting for reports, and copying numbers from one window to another.",
      "In the agentic era, the history is gathered when you sit down, and the decision is still in the book after you close the laptop. What sits underneath a well-architected business is living institutional memory: your structured records, your historical decisions, your operational history, and the map of how your systems and workflows connect. Because go-live is no longer a frozen finish line, you can compare what you intended against the actual outcome, learn what happened, and let both the people and the system get sharper every cycle.",
      "How do people actually interact with that intelligence? Instead of hunting through rigid menus, the person works in a focused workspace—whether a role-tuned screen on the floor or an interactive session like the one on my desk right now—while the system assembles the relevant records, history, and a second view of the same facts into the agent's context window. A context window is a working briefing, not the system of record: it is assembled for the judgment at hand, while institutional memory is the durable record that remains in the book after the session closes. From that workspace, an authenticated human can weigh options, reach consensus, and take permitted actions—writing the decision into the system of record, dispatching an email, routing an approval, or drafting a report—with the permanent trail recorded outside the session.",
    ],
    fieldNoteCards: [
      {
        id: "fn-beer-erp",
        rubric: "NOTE FROM THE FIELD 02-A // DETERMINISTIC CONTROLS VS. FORCED HISTORY",
        stamp: "OVER A BEER: ERP DEBATE",
        title: "Over a Beer with a Big-SI Executive: Can Agentics Build an Enterprise ERP?",
        excerpt:
          "A spirited argument over a beer with a close friend and senior executive at a major global ERP systems integrator—and why separating deterministic accounting controls from 'forced history' lets companies regain control of their workflows.",
        fullText: [
          "Not long ago, I sat down over a beer with a close friend I respect—a senior executive at one of the major global system integrators for tier-one ERPs. We got into a spirited debate from opposite sides of the table. His point was serious and earned: tier-one ERPs encode thirty years and billions of dollars of statutory controls, multi-entity consolidation, tax rules, and audit trails where a 99% probabilistic guess is a compliance failure. In his view, that regulatory moat guarantees that giant ERP vendors and massive SI programs will always own the core.",
          "Coming from the customer and operator side of the table after carrying 50+ transformations through cutover, I agreed with his premise on deterministic rules—and disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Where the legacy ERP world has trapped companies is confusing accounting math with 'forced history'—where the software only remembers the path its rigid screens allowed, not the path the business actually took on Mary's clipboard, and charges seven-figure change orders whenever your reality shifts. You keep authoritative financial books and required statutory controls in proven transaction systems, and enforce hard deterministic rules (double-entry invariants, 3-way match tolerances, lot traceability, and statutory validations) before any workflow change is admitted. The first workflows you build with agents are never the general ledger; they are the seams the ERP already lies about—the unbolted pump, the item that will not scan, and the Tuesday-night reconciliation.",
        ],
        signature: "— Robert Paddock · Note from the Field 02-A",
        footerLabel: "PROVEN LEDGER · DETERMINISTIC CONTROLS · BOUNDED WORKFLOWS",
      },
      {
        id: "fn-context-window",
        rubric: "NOTE FROM THE FIELD 02-B // DESIGN EXPLORATION WITH REGIONAL LEADERS",
        stamp: "APPROVALS & CONTEXT",
        title: "The Approval Workflow Paradox",
        excerpt:
          "Why approval workflows sound simple on paper but turn into a tangled mess in standard SaaS—and how an authenticated leader can propose a route in language ('Sam from Finance while I'm on vacation'), admit by deterministic rule, and remember in the book.",
        fullText: [
          "Recently, I sat in a working session with a group of regional business leaders, exploring how people will actually work with agents five minutes after a system goes live. Out of all the debates we had, one of the most interesting centered on something that sounds dead simple on paper: approval workflows. In a real company, approvals are never simple. Once you factor in dollar limits, departmental budgets, multi-entity rules, and temporary delegations, standard SaaS approval engines turn into a tangled mess—they are all 'configurable,' yet they always seem to require painful modifications.",
          "In that session, we explored how the dynamic changes when you combine authenticated human identity and strict policy guardrails with a context workspace. Instead of waiting on IT to rewire a rigid routing tree, an authenticated leader can state the route in plain language: 'Get me an approver from Department X—and while I’m on vacation next week, Sam from Finance will approve on my behalf.' Here is the rule that makes that safe: the model that understood the sentence must not be the thing that admits the action. The model proposes the route in language, a deterministic policy check verifies whether Sam is eligible under the dollar limits and dates (and records a 'no' outside the session if a rule is crossed), and the permanent audit trail is written into the book. Propose in language, admit by rule, remember in the book. In fact, I prepared this essay the same way—thought-partnered, challenged, and checked from inside a live context session.",
        ],
        signature: "— Robert Paddock · Note from the Field 02-B",
        footerLabel: "PROPOSE IN LANGUAGE · ADMIT BY RULE · REMEMBER IN THE BOOK",
      },
    ],
    closingQuestion: "Where do rigid screens or tangled approval trees slow your team down the most today?",
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Open Standalone Essay 02: Working with Intelligence",
    topicKey: "02 / Working with Intelligence: ERP Debate & Approval Workflows",
  },
  {
    num: "03",
    tag: "CHAPTER 03 // PEOPLE, SYSTEMS & WORKFLOWS · THE BUILDER’S FOUNDRY",
    actionLabel: "Share Your Builder Experience",
    title: "The Machine That Builds the Machines—and the Workflows They Run",
    subtitle: "Moving Past Prompting and Vibe Coding into Multi-Harness Engineering: Falling Down the Rabbit Hole in Pure Builder Joy—and Finding Your Way Out of the Disco.",
    spot: "factory",
    paragraphs: [
      "Across the tech world today, you hear frontier builders talk about 'building the machine that builds the machine'—software factories where AI agents help engineers build software. On the operations side of the house, our work has to land on the plant and office floor. The thing worth building is the machine that builds the workflows the business actually runs.",
      "Over the past three years, I have spent thousands of hours hands-on in this new wave of software engineering. Building real enterprise systems with agents is a very different discipline from prompt engineering or weekend 'vibe coding.' Even inside an agentic workshop, everything comes right back to People, Systems, and Workflows. Coordinating multiple frontier AI harnesses in isolated lanes requires the same operational discipline as running a great plant: clear human intent and architectural command at the top, stress-testing specifications before steel is cut, automated inspection, and an accountability rule that nobody signs their own release and no agent grades its own homework.",
      "When people talk about 'software factories' from the outside, they often make it sound clinical and effortless. To tell the truth from the inside—and why I love this craft so much—I want to share two connected experiences I’ve had building this way: falling down the Rabbit Hole in pure joy, and staying down there long enough that you find what I call the Disco.",
    ],
    fieldNoteCards: [
      {
        id: "fn-rabbit-hole",
        rubric: "NOTE FROM THE FIELD 03-A // FALLING IN PURE BUILDER LOVE",
        stamp: "DOWN THE RABBIT HOLE",
        title: "Down the Rabbit Hole at Midnight: When You Get Your Hands Back",
        excerpt:
          "The human in this field note is me: after twenty years of watching traditional software programs take eighteen months just to align requirements, sitting at my desk at midnight watching coordinated agent harnesses turn operational blueprints into working systems is pure builder joy.",
        fullText: [
          "The human in this field note is me. For twenty years as an operator and transformation leader, I could see clearly in my head how a company's data core, its financial controls, and its floor workflows ought to fit together—and then I would watch traditional software programs take eighteen months just to align requirements and build a fraction of it.",
          "When multi-harness agentic development clicked, falling down the rabbit hole felt like stepping into a new world. Sitting at my desk at midnight watching coordinated agent harnesses turn decades of operational patterns into working data models, financial engines, and workflows at a pace I never thought I would see in my career was pure builder joy. For anyone who loves how businesses and systems fit together, this craft gives you your hands back.",
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
          "Here is the other side of that midnight joy: stay down the rabbit hole long enough building real systems and you find the Disco—confident green summaries over broken state, and learning to agree on the work, bound each lane, and check what actually changed.",
        fullText: [
          "Here is the other side of that midnight joy: if you stay down the rabbit hole long enough building real enterprise systems, you find what I call the Disco—a house of mirrors under flashing lights. That is the part nobody puts in a demo: believing an agent's confident green summary only to discover the underlying state never reconciled, having to burn a subsystem all the way down to the ground and rebuild it from scratch, and keeping your footing while model behaviors shift every week.",
          "Deep inside a real codebase, unconstrained vibe coding turns into one step forward, two steps sideways, with agents generously grading their own homework while breaking downstream rules. The hard part was learning to ask a less exciting question after the midnight demo: what actually changed, where is it recorded, and can a separate harness fail it? Finding my way out of that house of mirrors meant agreeing on the work before building, giving each agent a clear boundary, using independent checks appropriate to the change—including opposing-model verification where the delivery contract calls for it—and keeping the evidence and lessons with the work.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-B",
        footerLabel: "BUILD ⇄ CHECK → LAND · MULTI-HARNESS DISCIPLINE",
      },
    ],
    closingQuestion: "If you are building with agents right now, I’d love to know: have you hit that house of mirrors yet, and what helped you find your way out?",
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Open Standalone Essay 03: The Machine That Builds the Workflows",
    topicKey: "03 / The Machine That Builds the Workflows: Rabbit Hole & The Disco",
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
  const [openNotes, setOpenNotes] = useState<Record<string, boolean>>({
    "fn-mary": true,
    "fn-don": true,
    "fn-beer-erp": true,
    "fn-context-window": true,
    "fn-rabbit-hole": true,
    "fn-disco": true,
  });

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
              Robert Paddock <span>/</span> Field Web Log: People, Systems &amp; Workflows
            </p>
            <h1 className={s.mastheadTitle}>
              Learn through the work<span>.</span>
            </h1>
            <p className={s.dek}>
              Where 20+ years of business leadership and 50+ enterprise transformations meet three years of hands-on agentic development.
            </p>
            <p className={s.heroLead}>
              I started this weblog to have an honest conversation about something that touches almost everyone’s working life today: how people, systems, and workflows actually fit together—and what changes now that agents are actually in the work. <strong>I call this new chapter Binary Intelligence</strong>—because underneath all the hype, it is still zeros and ones, just raised to a level where human judgment can work with them in a completely new way.
            </p>
            <p className={s.heroLead} style={{ marginTop: "12px" }}>
              These are three connected reflections from my years in the field, paired with short notes about the real people I’ve met along the way—including my own midnight trips down the builder rabbit hole. One of my favorite beliefs has always been simple: <strong>if you have happy systems, you have happy people—and if you have happy people, you have happy systems.</strong> We are talking about people’s livelihoods, their pride in their craft, and their quality of life at work. <strong>This is what I’m seeing from the work. I’d like to hear what you’re seeing in yours.</strong>
            </p>
            <div className={s.byline}>
              <span className={s.square} />
              <span>
                Robert Paddock <small>Enterprise Transformation Executive &middot; People, Systems &amp; Workflows</small>
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
                    <strong>PEOPLE &amp; AGENTS</strong>
                    <span>Context Workspace</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>OUTCOME LOOP</strong>
                    <span>Intent &rarr; Outcome &#8634;</span>
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
            <h2>What’s Old Is New, Working with Intelligence, and the Machine That Builds the Workflows<span>.</span></h2>
            <p className={s.triadDek}>
              Three connected field theses on <strong>People, Systems, and Workflows</strong>: what people do today that official systems cannot see, what changes when institutional memory and permitted actions meet in a context workspace, and what it takes to build that capability without believing our own demos.
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
                  <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {c.paragraphs.map((pText, idx) => (
                      <p key={idx} className={s.triadCardBody} style={{ margin: 0 }}>
                        {pText}
                      </p>
                    ))}
                  </div>

                  {/* Supporting Industry Corroboration / Macro Consensus */}
                  {c.titanQuote && (
                    <>
                      <div style={{ marginTop: "20px", marginBottom: "6px" }}>
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
                    </>
                  )}

                  {/* Notes from the Field (Excerpt + Expandable Drawer) */}
                  <div style={{ marginTop: "22px", marginBottom: "8px" }}>
                    <span className={s.triadSectionTag}>
                      NOTES FROM THE FIELD // {c.fieldNoteCards.length > 1 ? `${c.fieldNoteCards.length} FIELD NOTES` : "1 FIELD NOTE"}
                    </span>
                  </div>

                  {c.fieldNoteCards.map((fn) => {
                    const isOpen = !!openNotes[fn.id];
                    return (
                      <div key={fn.id} className={s.triadFieldNoteCard} style={{ marginTop: "12px" }}>
                        <div className={s.triadFieldNoteHead}>
                          <div className={s.triadFieldNoteRubric}>
                            <span className={s.triadFieldNoteDot} aria-hidden="true" />
                            <span>{fn.rubric}</span>
                          </div>
                          <span className={s.triadFieldNoteStamp}>{fn.stamp}</span>
                        </div>

                        <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--ink)", marginBottom: "6px", fontFamily: "var(--next-font-display), Georgia, serif" }}>
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

                  {/* Closing Conversation Invitation (Placed After Field Notes) */}
                  <div className={s.triadProvocation} style={{ marginTop: "20px", marginBottom: "4px" }}>
                    <span className={s.triadProvocationLabel}>OPEN CONVERSATION // HOW DO YOU SEE IT?</span>
                    <p className={s.triadProvocationText}>{c.closingQuestion}</p>
                  </div>
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
              <p className={s.eyebrow} style={{ margin: 0 }}>02 / THE COLLECTIVE // PEOPLE &amp; AGENTS LEARNING THROUGH THE WORK</p>
              <h3>What we learn should carry forward.</h3>
              <p>
                <strong>Learn through the work</strong> is where I put these field observations into words. <strong>The Collective</strong> is the place I am working toward to compare notes, build together, and let what people and agents learn through the work become useful for the next person—while each company keeps its own direction and control.
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
                    What are you writing about?
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
                    <option value="01 / What's Old Is New: Mary's Sheet, Don WMS & Shadow IT">
                      01 / What&apos;s Old Is New, What&apos;s New Is Old: Mary&apos;s Sheet, Don WMS &amp; Shadow IT
                    </option>
                    <option value="02 / Working with Intelligence: ERP Debate & Approval Workflows">
                      02 / Working with Intelligence: The ERP Debate &amp; Approval Workflows
                    </option>
                    <option value="03 / The Machine That Builds the Workflows: Rabbit Hole & The Disco">
                      03 / The Machine That Builds the Workflows: Down the Rabbit Hole &amp; Finding the Disco
                    </option>
                    <option value="The Collective / Collaboration & Shared Patterns">
                      The Collective / People, Agents &amp; Shared Patterns
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
