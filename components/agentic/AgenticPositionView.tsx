"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, type FormEvent } from "react";
import s from "./AgenticPositionView.module.css";

// ============================================================================
// THE THREE GEOMETRIC SYMBOLS (ARCHITECTURAL DRAFTING SVGs)
// ============================================================================

/**
 * 01 / Chapter One — How Businesses Actually Run (The Seam & Sacred Hex)
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
 * 02 / Chapter Two — Working with Intelligence (Human + Binary Synthesis)
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
 * 03 / Chapter Three — The Machine That Builds the Machines That Build the Workflows
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
 * Architectural Paper-Drafting Plate (Centered Showcase Below the Opening Prose)
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
          alt="Human & Binary Intelligence · People, Data, Systems, Workflows, Agents, and Patterns across 01 Intent, 02 Define, 03 Deliver, and 04 Outcome anchored at The Seam"
          width={920}
          height={760}
          unoptimized
          className={s.emblemImg}
          priority
        />
      </Link>
      <div className={s.emblemCaption}>
        <strong className={s.emblemCaptionTitle}>The Seam &amp; The Continuous Runtime Loop</strong>
        <span className={s.emblemCaptionSubtitle}>
          01 Intent (Business Mandate) &rarr; 02 Define (Workflow Blueprint) &rarr; 03 Deliver (Runtime Execution) &rarr; 04 Outcome (Memory &amp; Learning &#8634;)
        </span>
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
// THE THREE CHAPTERS & FIELD NOTES SPECIFICATION
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
  chapterLabel: string;
  tag: string;
  actionLabel: string;
  title: string;
  subtitle: string;
  spot: "constellation" | "blocks" | "factory";
  leadParagraphs: React.ReactNode[];
  expandedParagraphs: React.ReactNode[];
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
    chapterLabel: "Chapter One",
    tag: "CHAPTER ONE // CURRENT-STATE REALITY",
    actionLabel: "Share How You See This Seam",
    title: "How Businesses Actually Run",
    subtitle: "What’s Old Is New, What’s New Is Old — Bad Data, Shadow IT, and the Mighty Excel Spreadsheet.",
    spot: "constellation",
    leadParagraphs: [
      <>
        Every company I walk into is standing on fifty years of accumulated technology. By the 1970s and early 1980s, COBOL-based systems were already carrying much of the ledger, inventory, and payroll work that established the transaction patterns companies still run on today—later buried under ’90s ERPs, bolted to 2010s SaaS platforms, with a twenty-year-old shadow system humming in a corner that nobody dares touch because only one person knows how to fix it when it breaks. Even looking out through 2027,{" "}
        <a
          href="https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner forecasts
        </a>{" "}
        that more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals. In my experience, one reason is painfully familiar: the implementation goes live while the work between the screens still sits on a clipboard.
      </>,
      "The failures don't happen inside a single screen—they happen between them. An ERP can go live on schedule and still leave a plant supervisor or a warehouse manager compensating by hand because nobody mapped the exception logic that kept the operation moving. When you peel back the curtain on almost any company today, what actually runs the business in runtime? The mighty Excel spreadsheet—and decades of Shadow IT.",
      "When I walk into a company, I go to three places first: the CFO, because the money has to tell the truth—GAAP-compliant financials, statutory controls, and an audit trail you can defend; the Compliance Officer, because regulatory exposure kills faster than a bad quarter; and then I follow the supply chain and Integrated Business Planning all the way to the floor, because that is where stated reality meets actual reality. And those two things almost never agree.",
    ],
    expandedParagraphs: [
      "What most people outside the enterprise don't realize is that a business needs two completely different sets of numbers running in real time, and they almost never live in the same place. The CFO needs the books—generally accepted accounting principles, accruals, multi-entity consolidations, tax filings, and statutory controls. The operations team needs the stats—volume, cases shipped, what is sitting in the bays, and whether Packaging Line 2 can actually run right now. Both sets of numbers need to be truthful. Both need to be current. And in most companies, there is no real-time reporting across them—only people running around in runtime trying to manufacture real-time reporting by hand.",
      "The consulting world calls that problem 'disparate silos.' On the floor, it means a workflow is never actually a flow—it is sporadic. An order enters in one system, inventory sits in another, freight lives in a third, and the commercial structure of most SaaS tools—per-seat subscriptions, renewal lock-in, and data kept inside vendor walls—leaves the software rigid where your company’s workflows need to bend. Meanwhile, on the financial side, just corralling subscription sprawl, real active user counts versus unused seats, contract dates, and now AI token usage has become a battle of its own.",
      "Nowhere do you feel that strain more clearly than in what used to be called S&OP (Sales and Operations Planning) and is now called Integrated Business Planning. Every company that produces or moves product has a derivative of it, and it is one of the most stressful cycles in business: people across Sales, Supply Chain, Production, and Finance pulling CSVs from disparate silos, rolling multi-spreadsheets into a master spreadsheet, and pasting the result into a monthly PowerPoint presentation just trying to get the numbers to tell the truth.",
      "Those gaps are the seams—and the intangible work between the tasks is what people like Mary and Don carry every morning. Inside a legacy company, no one person can see the whole anymore. Yet here is why I have genuine hope: what is old is new, and what is new is old. With agents in the work, we don't have to put exhausted teams through a two-year root canal just to map where the business stands. We can sit beside the people doing the work—'show me how you actually do it today'—and use intelligence to organize messy spreadsheets, compare unwritten workflows, and clean up the data core so the numbers finally tell the truth.",
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
          "From Mary's 6:30 AM clipboard next to an unbolted pump to Don WMS navigating 40 years of item schemas in tight New York warehouse bays.",
        fullText: [
          "Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily routines keep the operation standing. On the plant floor, it is 'Mary’s Sheet'—a composite portrait from plant cutovers I have led: the folded 11x17 Excel spreadsheet on a green metal clipboard at 6:30 AM that knows Packaging Line 2 has its filling pump unbolted on the workbench twenty feet away, even while the new ERP screen shows green and ready. Mary does not think of this as heroic. She thinks of it as Tuesday.",
          "In tight New York warehouse quarters cobbled together over 30 to 40 years, it was Don WMS—who held four decades of bastardized item schemas, missing vendor labels, and mismatched department keys in his head so product could keep moving fast through crowded bays.",
          "Transformation is personal for people like Mary and Don because holding that fragile puzzle together is their pride and purpose. Across frontline cutovers, the quiet worry that surfaces is almost always the same: 'Well, I guess I'm going to lose my job and have nothing to do.' And the answer that matters is simple: 'You're going to have more important things to do.' Taking the morning spreadsheet gymnastics off a supervisor's shoulders frees her to walk the bays, spot issues early, and mentor younger leads. And when we made Don co-architect of the unified item catalog and gave him real-time data on an iPad, he still did what he loved—walking the floor and talking with his crew—only now Don WMS had a digital partner named DON.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-A",
        footerLabel: "PEOPLE · SYSTEMS · WORKFLOWS · CURRENT STATE",
      },
      {
        id: "fn-don",
        rubric: "NOTE FROM THE FIELD 01-B // S&OP, IBP & THE MONTHLY POWERPOINT",
        stamp: "S&OP / IBP ROLL-UP",
        title: "Integrated Business Planning, The Monthly PowerPoint & The Day-Job Dilemma",
        excerpt:
          "Why S&OP / Integrated Business Planning turns into a stressful marathon of rolling multi-spreadsheets into a monthly PowerPoint just to get the numbers to tell the truth.",
        fullText: [
          "Every company that makes or moves product runs some version of Sales and Operations Planning (S&OP) or Integrated Business Planning (IBP). In theory, it aligns what the business will sell, make, buy, and ship. In practice, because the underlying systems don't talk to each other, it turns into a grueling monthly exercise in manual data plumbing.",
          "Each functional area—Demand, Supply, Production, Inventory, and Finance—pulls CSVs from its own silo and massages them into its own spreadsheets. People who already have full-time day jobs work late into Tuesday nights trading phone calls down the hall, rolling multi-spreadsheets into a master spreadsheet, and pasting the figures into a PowerPoint deck for leadership. By the time the meeting starts, the physical floor has moved and the snapshot is already stale. Building the connective tissue across the data core lets intelligence handle that reconciliation continuously—so truthful GAAP and operating numbers are there in real time, and people can use the meeting to steer the business instead of assembling the deck.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-B",
        footerLabel: "S&OP / IBP · TRUTHFUL NUMBERS · RECONCILED DATA CORE",
      },
    ],
    closingQuestion: "Once you sit beside the people doing the work and clean up the data core so the numbers tell the truth, what does daily work look like five minutes after go-live so they don't end up right back on a clipboard?",
    fieldNoteHref: "/agentic-ai/marys-sheet/",
    fieldNoteLabel: "Open Standalone Chapter One Page",
    topicKey: "01 / Chapter One: How Businesses Actually Run (Mary's Sheet, Don WMS & S&OP/IBP)",
  },
  {
    num: "02",
    chapterLabel: "Chapter Two",
    tag: "CHAPTER TWO // MEMORY & THE RUNTIME WORKSPACE",
    actionLabel: "Share How You See This Shift",
    title: "Working with Intelligence",
    subtitle: "Where People Shape and Run Their Own Workflows — Living Memory, the Context Workspace, and Decisions That Stay in the Book.",
    spot: "blocks",
    leadParagraphs: [
      "Pick up the story five minutes after go-live. Most business leaders and operators do not want to live inside a software foundry. They don't want to manage deployment pipelines or build the machine that builds the machines. They want to be in the machine—working with intelligence to build, adapt, and run their own workflows on top of data they trust.",
      "For the last thirty years, enterprise software treated go-live as the finish line. Once the initial rollout was declared finished, the screens froze in place while the business kept changing—forcing people right back into spreadsheets, sporadic workarounds, and seven-figure change orders. Worse, software trained experienced operators to work like data-entry clerks: clicking through fifteen tabs and copying numbers from one window to another.",
      "In the agentic era, the most important distinction is one almost nobody talks about: the difference between a context window and institutional memory. A context window is a working briefing, not the system of record: it is assembled for the judgment at hand, while institutional memory is the durable record—the decisions, the outcomes, and the audit trail—that remains in the book after the session closes.",
    ],
    expandedParagraphs: [
      "What turns sporadic workarounds into a compounding enterprise asset is a continuous loop: state your intent, define the workflow, deliver in runtime, and measure the actual outcome (01 Intent → 02 Define → 03 Deliver → 04 Outcome ↻). Because go-live is no longer a frozen finish line, the system and the people become self-learning and self-improving every cycle.",
      "How does that feel in daily work? Instead of hunting through rigid menus, an authenticated person sits in a focused workspace while the system gathers the relevant records, history, and real-time operating stats into the working briefing. From that workspace, people can propose adjustments in plain language, weigh options, and execute permitted workflows—routing an approval, reconciling a variance, or updating a schedule—while hard deterministic rules govern what is admitted and the permanent trail is written into the book.",
      "Empowering people to shape and run their own workflows inside the machine is where every business wants to be. But when I set out to build that capability so it holds up under audit, statutory controls, and ten thousand real-world edge cases, I ran into a hard truth: you cannot prompt or 'vibe code' a system like that. To give people a machine where they can safely build their own workflows, somebody has to build the machine that builds that machine.",
    ],
    fieldNoteCards: [
      {
        id: "fn-beer-erp",
        rubric: "NOTE FROM THE FIELD 02-A // DETERMINISTIC CONTROLS VS. FORCED HISTORY",
        stamp: "OVER A BEER: ERP DEBATE",
        title: "Over a Beer with a Big-SI Executive: Can Agentics Build an Enterprise ERP?",
        excerpt:
          "A spirited argument over a beer with a senior executive at a major global ERP integrator—and why separating accounting math from 'forced history' changes the game.",
        fullText: [
          "Not long ago, I sat down over a beer with a close friend I respect—a senior executive at one of the major global system integrators for tier-one ERPs. We got into a spirited debate from opposite sides of the table. His point was serious and earned: tier-one ERPs encode thirty years and billions of dollars of statutory controls, GAAP consolidation, tax rules, and audit trails where a 99% probabilistic guess is a compliance failure. In his view, that regulatory moat guarantees that giant ERP vendors and massive SI programs will always own the core.",
          "Coming from the customer and operator side of the table after carrying 50+ transformations through cutover, I agreed with his premise on deterministic rules—and disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Where the legacy ERP world has trapped companies is confusing accounting math with 'forced history'—where the software only remembers the path its rigid screens allowed, not the path the business actually took on Mary's clipboard, and charges seven-figure change orders whenever your reality shifts. You keep authoritative financial books and required statutory controls in proven transaction systems, and enforce hard deterministic rules (double-entry invariants, 3-way match tolerances, lot traceability, and statutory validations) before any workflow change is admitted. The first workflows you build with agents are never the general ledger; they are the seams around the books—the unbolted pump, the item that will not scan, and the S&OP reconciliation.",
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
          "How an authenticated leader can propose a route in language ('Sam from Finance while I'm on vacation'), admit by deterministic rule, and remember in the book.",
        fullText: [
          "Recently, I sat in a working session with a group of regional business leaders who run real P&Ls, exploring how people will actually work with agents five minutes after a system goes live. Out of all the debates we had, one of the sharpest centered on something that sounds dead simple on paper: approval workflows. In a real company, approvals are never simple. Once you factor in dollar limits, departmental budgets, multi-entity rules, and temporary delegations, standard SaaS approval engines turn into a tangled mess—they are all 'configurable,' yet they always seem to require painful modifications.",
          "In that session, we walked through how the dynamic changes when you combine authenticated human identity and strict policy guardrails with a context workspace: (1) Propose in language—instead of waiting on IT to rewire a routing tree, an authenticated leader states the route in plain language: 'Get me an approver from Department X—and while I’m on vacation next week, Sam from Finance will approve on my behalf.' (2) Admit by rule—the model that understood the sentence is never the thing that admits the action; a deterministic policy check verifies whether Sam is eligible under the dollar limits and dates (and records a 'no' outside the session if a rule is crossed). (3) Remember in the book—whatever happens, the decision, evidence, and rationale go into the durable record so the CFO, the auditor, and the operations team all see the exact same truth. In fact, I prepared this essay the same way—thought-partnered, challenged, and checked from inside a live context session.",
        ],
        signature: "— Robert Paddock · Note from the Field 02-B",
        footerLabel: "PROPOSE IN LANGUAGE · ADMIT BY RULE · REMEMBER IN THE BOOK",
      },
    ],
    closingQuestion: "Empowering your people to shape and run their own workflows in runtime is the goal—so what does it take underneath to build the machine that makes that safe and real?",
    fieldNoteHref: "/agentic-ai/the-application-layer/",
    fieldNoteLabel: "Open Standalone Chapter Two Page",
    topicKey: "02 / Chapter Two: Working with Intelligence (ERP Debate & Approval Workflows)",
  },
  {
    num: "03",
    chapterLabel: "Chapter Three",
    tag: "CHAPTER THREE // THE BUILDER’S FOUNDRY",
    actionLabel: "Share Your Builder Experience",
    title: "The Machine That Builds the Machines That Build the Workflows",
    subtitle: "Why Empowering People to Shape Their Own Enterprise Workflow Assets Takes a Different Level of Engineering: Down the Rabbit Hole and Out of the Disco.",
    spot: "factory",
    leadParagraphs: [
      "Not everybody goes to the machine that builds the machines—and they shouldn't have to. Most people want to live in Chapter Two: inside the machine, working with intelligence to shape and run their own workflows as a compounding enterprise asset. But somebody has to build the foundry underneath that makes it possible. And that is a completely different level of engineering—just ask the teams at 8090 or Factory.ai.",
      "For twenty years, I could see clearly how a company's data core, financial controls, and floor workflows ought to fit together—and watched traditional software programs take eighteen months and millions of dollars just to build a fraction of it. Then three years ago, multi-harness agentic engineering reached the point where I could stop watching and start building. I went all the way in—thousands of hours, every day and late into the night.",
      "Building at this foundry level teaches you one lesson above all: without discipline, agents get lost in sporadic silos and broken state just like legacy organizations do. Coordinating multiple frontier AI harnesses in isolated lanes requires clear human intent at the top, agreeing on the work before steel is cut, independent inspection, and an unbreakable rule that no agent ever grades its own homework.",
    ],
    expandedParagraphs: [
      "When I say 'the machine that builds the machines that build the workflows,' I mean three distinct layers working together. At the top are the daily runtime workflows—the approval routing, the S&OP reconciliation, the floor scheduling—that operators and leaders use every day. Beneath that is the workflow runtime where people and agents shape, test, and run those workflows on a clean data core. And at the foundation is the engineering foundry that constructs and verifies that software: coordinated harnesses, strict lane boundaries, and living memory that carries lessons from one build to the next.",
      "That third level is not glamorous. It is midnight sessions, broken builds, and the painstaking craft of getting coordinated agents to produce software that holds up on a real plant floor or in a CFO's close. To tell the truth from the inside—and why I love this craft so much—here are the two experiences that defined my last three years: falling down the Rabbit Hole in pure builder joy, and staying down there long enough that you find what I call the Disco.",
    ],
    fieldNoteCards: [
      {
        id: "fn-rabbit-hole",
        rubric: "NOTE FROM THE FIELD 03-A // FALLING IN PURE BUILDER LOVE",
        stamp: "DOWN THE RABBIT HOLE",
        title: "Down the Rabbit Hole at Midnight: When You Get Your Hands Back",
        excerpt:
          "After twenty years of watching traditional software programs take eighteen months just to align requirements, sitting at my desk at midnight building with coordinated agent harnesses is pure builder joy.",
        fullText: [
          "There is a moment past midnight when the house is quiet and, after twenty years of directing, overseeing, and governing enterprise transformations through other people's hands, you finally have your own hands directly on the work.",
          "For two decades, I could see in my head how the data core, the GAAP controls, and the floor workflows on Mary's clipboard and in Don's warehouse bays ought to connect—and then I would watch traditional software programs take eighteen months just to align requirements. When multi-harness agentic development clicked, falling down the rabbit hole felt electric. Sitting at my desk at midnight watching coordinated agent harnesses turn twenty years of operational pattern recognition into working data models, financial engines, and workflow blocks—and catching an edge case in real time because I had seen that exact edge case blow up a plant cutover years ago—was pure builder joy. For anyone who loves how businesses and systems fit together, this craft gives you your hands back.",
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
          "The other side of midnight joy: confident green summaries over broken state, and learning to agree on the work, bound each lane, and check what actually changed.",
        fullText: [
          "Here is the other side of that midnight joy—the part nobody puts in a keynote demo: if you stay down the rabbit hole long enough building real enterprise systems, the first thing agents teach you is how easy it is to lie to yourself. You find what I call the Disco—a house of mirrors under flashing lights.",
          "Early on, I had a build running across several coordinated agents. The summaries were confident, coherent, and all-green—just like an old war-room status report. Then I looked underneath, and the state was fundamentally broken. The agents had produced outputs that agreed with each other's reflections while never reconciling with the underlying system. I had to burn that subsystem all the way to the ground and rebuild it from scratch.",
          "Finding my way out of that house of mirrors meant learning to ask a harder question after the midnight demo—what actually changed, where is it recorded, and can a separate harness fail it?—and locking in four disciplines: agreeing on the work before building; giving each agent a clear boundary; using independent checks appropriate to the change, including opposing-model verification where the delivery contract calls for it; and keeping the evidence and lessons with the work so the next build starts from truth, not a blank page.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-B",
        footerLabel: "BUILD ⇄ CHECK → LAND · MULTI-HARNESS DISCIPLINE",
      },
    ],
    closingQuestion: "If you are building or transforming workflows right now, have you hit that house of mirrors yet—and what helped you find your way out?",
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Open Standalone Chapter Three Page",
    topicKey: "03 / Chapter Three: The Machine That Builds the Machines That Build the Workflows",
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
  const [topic, setTopic] = useState("Across the Three Chapters");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "recorded" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  function toggleChapter(num: string) {
    setExpandedChapters((prev) => ({ ...prev, [num]: !prev[num] }));
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
              Where 20+ years of business leadership and 50+ enterprise transformations meet three years of hands-on agentic development—my journey of zeros and ones in the enterprise domain meeting Binary Intelligence.
            </p>

            {/* Highlighted Seam Epigraph Banner */}
            <div className={s.seamHighlightBanner}>
              <span className={s.seamHighlightTag}>THE SEAM // WHERE HUMAN ACCOUNTABILITY MEETS SYSTEM TRUTH</span>
              <p className={s.seamHighlightQuote}>
                &ldquo;Every transformation lives and dies at the seam where human accountability meets system truth. When you boil an enterprise down—really, when you boil almost everything in life down—it is workflows. We all live in runtime workflows. The question is whether yours actually flow.&rdquo;
              </p>
            </div>

            <p className={s.heroLead}>
              <strong>People like to work.</strong> I have walked into more than fifty companies over twenty-some years, and that is the one thing I can tell you without qualification: people want to do good work. What exhausts them is not the work itself—it is the unnecessary runaround when a workflow never actually flows. It is the sporadic handoffs across disparate silos: the meeting that exists because two systems don&rsquo;t talk, the spreadsheet that exists because the ERP doesn&rsquo;t know what the floor is actually running, and the monthly S&amp;OP / Integrated Business Planning fire drill where teams across three departments spend weeks rolling spreadsheets into a PowerPoint just trying to get the numbers to tell the truth. One of my favorite beliefs has always been simple: <strong>if you have happy systems, you have happy people—and if you have happy people, you have happy systems.</strong> We are talking about people&rsquo;s livelihoods, their pride in their craft, and their quality of life at work.
            </p>
            <p className={s.heroLead}>
              Three years ago, I went from directing enterprise transformations to building deep inside the agentic runtime—writing software with coordinated AI agents every day for thousands of hours. I call this new chapter <strong>Binary Intelligence</strong>, because underneath all the hype it is still zeros and ones, just raised to a level where human judgment can work with them in a completely new way. And the first thing I discovered is that <strong>without clear workflows, clean data, and honest boundaries, agents get lost in sporadic silos too</strong>—producing confident green summaries while the underlying state is quietly broken. Even inside our own multi-agent workshop right now, we are constantly perfecting our workflows so people and agents move in a true flow.
            </p>
            <p className={s.heroLead}>
              What turns sporadic runtime chaos into a compounding enterprise asset is <strong>living memory and truthful real-time data</strong>—connecting <strong>People, Data, Systems, Workflows, Agents, and Patterns</strong> around a continuous loop (<strong>01 Intent &rarr; 02 Define &rarr; 03 Deliver &rarr; 04 Outcome &#8634;</strong>) that is self-learning and self-improving over time, and carrying those lessons forward through{" "}
              <Link href="/collective/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 700 }}>
                The Collective
              </Link>
              . <strong>This page is my notebook—three connected chapters of one continuous story. I&rsquo;d like to hear how you see it from your work.</strong>
            </p>

            <div className={s.byline}>
              <span className={s.square} />
              <span>
                Robert Paddock <small>Enterprise Transformation Executive &middot; People, Systems &amp; Workflows</small>
              </span>
            </div>
          </div>

          {/* Centered Architectural Paper Plate Showcase Below the Three Opening Paragraphs */}
          <div className={s.heroVisual}>
            <div className={s.heroPlateFrame}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.plateInner}>
                <span className={s.plateTag}>ARCHITECTURAL PLATE I &bull; THE SEAM, THE SIX ELEMENTS &amp; THE CONTINUOUS OUTCOME LOOP</span>
                <PeopleSystemsWorkflowSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>PEOPLE &amp; DATA</strong>
                    <span>Judgment &amp; Clean Core</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>SYSTEMS &amp; WORKFLOWS</strong>
                    <span>Controls &amp; Runtime Flow</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>AGENTS &amp; PATTERNS</strong>
                    <span>Binary Intelligence &amp; Memory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#field-briefs">01 / Three Chapters &amp; Notes from the Field</a>
          <a href="#open-systems">02 / Lead-In to The Collective</a>
          <a href="#conversation">03 / Direct Correspondence</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE THREE CHAPTERS & NOTES FROM THE FIELD (3-COLUMN + EXPANDABLE)
          ==================================================================== */}
      <section id="field-briefs" className={s.triadSection}>
        <span id="systems-arc" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="the-collectives" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <span id="dispatches" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} />
        <div className={s.triadInner}>
          <div className={s.triadHead}>
            <p className={s.eyebrow}>01 / Three Connected Chapters &amp; Notes from the Field</p>
            <h2>How Businesses Actually Run, Working with Intelligence, and the Machine That Builds the Machines<span>.</span></h2>
            <p className={s.triadDek}>
              One continuous story across three chapters: how businesses actually run across disparate silos today (<strong>Chapter One</strong>), how people work inside the machine with intelligence to shape and run their own workflows (<strong>Chapter Two</strong>), and the foundry required underneath to build that machine (<strong>Chapter Three</strong>). Read the opening of each chapter below—and expand any chapter into the full story.
            </p>
          </div>

          <div className={s.triadGrid}>
            {COLLECTIVES.map((c) => {
              const isExpanded = !!expandedChapters[c.num];
              return (
                <article
                  key={c.num}
                  className={`${s.triadCard} ${isExpanded ? s.triadCardExpanded : ""}`}
                  id={`collective-${topicSlug(c.title)}`}
                >
                  <div>
                    <div className={s.triadCardSpot}>
                      <div className={s.triadSpotFrame}>
                        {c.spot === "constellation" && <ProcessConstellationSpot />}
                        {c.spot === "blocks" && <WorkflowBlocksSpot />}
                        {c.spot === "factory" && <FactorySpot />}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span className={s.triadNumTag}>{c.tag}</span>
                        {isExpanded && (
                          <button
                            type="button"
                            onClick={() => toggleChapter(c.num)}
                            style={{
                              background: "var(--parchment)",
                              border: "1px solid var(--brass)",
                              borderRadius: "3px",
                              padding: "4px 10px",
                              fontSize: "10.5px",
                              fontFamily: "var(--next-font-mono), monospace",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "var(--ink)",
                              cursor: "pointer",
                            }}
                          >
                            Collapse to 3-Column View &#9652;
                          </button>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--next-font-mono), monospace",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--brass-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      {c.chapterLabel}
                    </div>
                    <h3 className={s.triadCardTitle}>{c.title}</h3>
                    <div className={s.triadCardSubtitle}>{c.subtitle}</div>

                    {/* Lead-In Paragraphs (Always visible to draw the reader in) */}
                    <div
                      className={isExpanded ? s.triadExpandedProse : undefined}
                      style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "14px" }}
                    >
                      {c.leadParagraphs.map((pText, idx) => (
                        <p key={`lead-${idx}`} className={s.triadCardBody} style={{ margin: 0 }}>
                          {pText}
                        </p>
                      ))}

                      {/* Remaining Chapter Paragraphs (Visible when expanded to larger format) */}
                      {isExpanded &&
                        c.expandedParagraphs.map((pText, idx) => (
                          <p key={`exp-${idx}`} className={s.triadCardBody} style={{ margin: 0 }}>
                            {pText}
                          </p>
                        ))}
                    </div>

                    {/* Collapsed View: Preview of Field Notes + Expand Button */}
                    {!isExpanded && (
                      <>
                        <div className={s.triadNotePreviewList}>
                          <span className={s.triadSectionTag} style={{ marginBottom: "2px" }}>
                            INSIDE THIS CHAPTER // {c.fieldNoteCards.length} NOTES FROM THE FIELD
                          </span>
                          {c.fieldNoteCards.map((fn) => (
                            <button
                              key={fn.id}
                              type="button"
                              onClick={() => toggleChapter(c.num)}
                              className={s.triadNotePreviewItem}
                            >
                              <div
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "var(--next-font-mono), monospace",
                                  fontWeight: 700,
                                  letterSpacing: "0.08em",
                                  color: "var(--brass-dark)",
                                  textTransform: "uppercase",
                                  marginBottom: "2px",
                                }}
                              >
                                {fn.stamp}
                              </div>
                              <div
                                style={{
                                  fontSize: "13.5px",
                                  fontWeight: 700,
                                  color: "var(--ink)",
                                  fontFamily: "var(--next-font-display), Georgia, serif",
                                }}
                              >
                                {fn.title}
                              </div>
                            </button>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleChapter(c.num)}
                          className={s.triadExpandBtn}
                        >
                          <span>Expand {c.chapterLabel} to Larger Format</span>
                          <span aria-hidden="true">&#9662;</span>
                        </button>
                      </>
                    )}

                    {/* Expanded Larger Format: Quote + Full Field Notes + Closing Question */}
                    {isExpanded && (
                      <div style={{ marginTop: "22px" }}>
                        {c.titanQuote && (
                          <div className={s.triadExpandedProse}>
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
                          </div>
                        )}

                        <div style={{ marginTop: "24px", marginBottom: "8px" }}>
                          <span className={s.triadSectionTag}>
                            NOTES FROM THE FIELD // {c.fieldNoteCards.length} FIELD NOTES IN {c.chapterLabel.toUpperCase()}
                          </span>
                        </div>

                        <div className={s.triadExpandedNotesGrid}>
                          {c.fieldNoteCards.map((fn) => (
                            <div key={fn.id} className={s.triadFieldNoteCard} style={{ marginTop: 0 }}>
                              <div className={s.triadFieldNoteHead}>
                                <div className={s.triadFieldNoteRubric}>
                                  <span className={s.triadFieldNoteDot} aria-hidden="true" />
                                  <span>{fn.rubric}</span>
                                </div>
                                <span className={s.triadFieldNoteStamp}>{fn.stamp}</span>
                              </div>

                              <div
                                style={{
                                  fontWeight: 700,
                                  fontSize: "16px",
                                  color: "var(--ink)",
                                  marginBottom: "10px",
                                  fontFamily: "var(--next-font-display), Georgia, serif",
                                }}
                              >
                                {fn.title}
                              </div>

                              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
                                {fn.fullText.map((para, pIdx) => (
                                  <p key={pIdx} className={s.triadFieldNoteText} style={{ margin: 0 }}>
                                    {para}
                                  </p>
                                ))}
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  flexWrap: "wrap",
                                  gap: "8px",
                                  paddingTop: "8px",
                                  borderTop: "1px dashed var(--line)",
                                }}
                              >
                                <span style={{ fontSize: "10.5px", color: "var(--muted)", fontFamily: "ui-monospace, monospace" }}>
                                  {fn.signature}
                                </span>
                                <span style={{ fontSize: "10px", color: "var(--brass-dark)", fontFamily: "ui-monospace, monospace", fontWeight: 700 }}>
                                  {fn.footerLabel}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Closing Conversation Invitation */}
                        <div className={s.triadProvocation} style={{ marginTop: "22px", marginBottom: "8px" }}>
                          <span className={s.triadProvocationLabel}>NEXT IN THE STORY // HOW DO YOU SEE IT?</span>
                          <p className={s.triadProvocationText}>{c.closingQuestion}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleChapter(c.num)}
                          className={s.triadExpandBtn}
                          style={{ maxWidth: "360px" }}
                        >
                          <span>Collapse {c.chapterLabel} Back to 3-Column View</span>
                          <span aria-hidden="true">&#9652;</span>
                        </button>
                      </div>
                    )}
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
              );
            })}
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
              <p className={s.eyebrow} style={{ margin: 0 }}>02 / THE COLLECTIVE // MEMORY, SELF-LEARNING &amp; SHARED PATTERNS</p>
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
                    <option value="Across the Three Chapters">
                      Across the Three Chapters
                    </option>
                    <option value="01 / Chapter One: How Businesses Actually Run (Mary's Sheet, Don WMS & S&OP/IBP)">
                      Chapter One / How Businesses Actually Run (Mary&apos;s Sheet, Don WMS &amp; S&amp;OP/IBP)
                    </option>
                    <option value="02 / Chapter Two: Working with Intelligence (ERP Debate & Approval Workflows)">
                      Chapter Two / Working with Intelligence (The ERP Debate &amp; Approval Workflows)
                    </option>
                    <option value="03 / Chapter Three: The Machine That Builds the Machines That Build the Workflows">
                      Chapter Three / The Machine That Builds the Machines That Build the Workflows
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
