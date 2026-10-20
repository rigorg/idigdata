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
 * Architectural Paper-Drafting Plate (Centered Showcase)
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
          01 Intent (Business Mandate) &rarr; 02 Define (Workflow Blueprint) &rarr; 03 Deliver (Runtime Execution) &rarr; 04 Outcome (Review, Test &amp; Retain Evidence &#8634;)
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
  nextChapterNum?: string;
  nextChapterPrompt?: string;
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
        Every company I walk into is standing on fifty years of accumulated technology. By the 1970s and early 1980s, COBOL systems were already carrying the ledger, inventory, and payroll, and they set the transaction patterns companies still run on today. Those got buried under &rsquo;90s ERPs, bolted to 2010s SaaS platforms, with a twenty-year-old shadow system humming in a corner that nobody dares touch because only one person knows how to fix it when it breaks.{" "}
        <a
          href="https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner forecasts
        </a>{" "}
        that by 2027 more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals. In my experience one reason is painfully familiar: the implementation goes live while the work between the screens still sits on a clipboard.
      </>,
      "For twenty years my toolkit was a laptop, an internet connection, and one question: show me how you actually do it today. When I enter a business, I go to three places first. The CFO, because the books have to hold up: GAAP-compliant financials, statutory controls, and an audit trail you can defend. The Compliance Officer, to establish which legal and regulatory obligations the business cannot compromise. Then I follow Integrated Business Planning—the evolution of S&OP that puts Finance and strategy in the same cadence as supply and operations—all the way down to the floor. The industry is still arguing about what to call that, too. The floor is where recorded state meets operating reality. The two almost never agree.",
    ],
    expandedParagraphs: [
      "What makes enterprise operations so demanding is that a business relies on two connected views of the same reality, each with different timing and validation requirements. Finance needs the books: accruals, postings, multi-entity consolidations, statutory controls, and a formal close that cannot be rushed or guessed. Operations needs current floor visibility: volume, cases shipped, what is sitting in the bays, and whether Packaging Line 2 can actually run right now. Both views have to reconcile to the same underlying events. In most companies, Finance and Operations can only connect them by rebuilding the relationship in spreadsheets every month.",
      <>
        The consulting world calls that problem &ldquo;disparate silos.&rdquo; On the floor it means a workflow is never actually a flow. It is sporadic. An order enters one system, inventory sits in a second, freight lives in a third, and the per-seat, renewal-locked, data-behind-the-vendor-wall economics of most SaaS leave the software rigid exactly where the company&rsquo;s workflow needs to bend.{" "}
        <a
          href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          McKinsey&rsquo;s global AI research
        </a>{" "}
        shows roughly 80% of workers now use AI tools for personal tasks, while fewer than 40% of enterprises see measurable EBIT impact from scaling agentic workflows in production. I read that gap as a data-and-workflow gap, not a talent gap. The equalizer has reached the individual. It has not reached the enterprise, because the enterprise has no reconciled core to point it at. Meanwhile, on the finance side, just corralling subscription sprawl, active users versus paid seats, contract dates, and now AI token usage has become a battle of its own.
      </>,
      "Connecting systems does not erase the hard trade-offs inside Integrated Business Planning. Competing commercial incentives, constrained line capacity, and tough allocation calls will always require human judgment. What breaks people is spending two weeks of nights and weekends on manual data plumbing just to find out where the disagreement actually is.",
      "Those gaps are the seams, and the work between the tasks is what people like Mary and Don carry every morning. Inside a legacy company, no one person can see the whole anymore. Yet here is why I have genuine hope: what is old is new, and what is new is old. With intelligence in the work, we do not have to put exhausted teams through a two-year root canal just to map where the business stands. We can sit beside the people doing the work, ask the same question I have always asked, and use that intelligence to organize the messy spreadsheets, compare the unwritten workflows, and reconcile the data core, so people spend their energy on the real operating decisions.",
    ],
    titanQuote: {
      speaker: "Chamath Palihapitiya",
      role: "CEO, 8090 · Founder, Social Capital",
      source: "“What AI spend does to headcount” (Oct 2, 2026)",
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
        title: "Mary’s Sheet, Don WMS & Co-Architecting the Next Role",
        excerpt:
          "From Mary's 6:30 AM clipboard next to an unbolted pump to Don WMS navigating 40 years of item schemas in tight New York warehouse bays.",
        fullText: [
          "Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily routines keep the operation standing. On the plant floor, it is 'Mary’s Sheet'—a composite portrait from plant cutovers I have led: the folded 11x17 Excel spreadsheet on a green metal clipboard at 6:30 AM that knows Packaging Line 2 has its filling pump unbolted on the workbench twenty feet away, even while the new ERP screen shows green and ready. Mary does not think of this as heroic. She thinks of it as Tuesday.",
          "In tight New York warehouse quarters cobbled together over 30 to 40 years, it was Don WMS—who held four decades of bastardized item schemas, missing vendor labels, and mismatched department keys in his head so product could keep moving fast through crowded bays.",
          "Transformation is personal for people like Mary and Don because holding that fragile puzzle together is their pride and purpose. Across frontline cutovers, the quiet worry that surfaces is almost always the same: 'Well, I guess I'm going to lose my job and have nothing to do.' The only honest answer is to give their judgment real weight in shaping what comes next. When Mary helps define the exception rules and decides which floor checks matter most once the morning spreadsheet gymnastics are gone, she isn't handed a role from upstairs—she shapes it. And when we made Don co-architect of the unified item catalog and gave him live floor visibility on an iPad, he still did what he loved—walking the bays and working with his crew—only now Don WMS had a digital partner named DON.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-A",
        footerLabel: "PEOPLE · SYSTEMS · WORKFLOWS · CURRENT STATE",
      },
      {
        id: "fn-don",
        rubric: "NOTE FROM THE FIELD 01-B // WHAT THE SPREADSHEETS CONCEALED",
        stamp: "S&OP / IBP DISCOVERY",
        title: "When the Numbers Disagreed: What the Tuesday-Night Roll-Up Was Hiding",
        excerpt:
          "An actual planning episode where forty minutes of spreadsheet arguments masked a unit-of-measure and lead-time mismatch on a constrained line.",
        fullText: [
          "In one consumer-products operation I stepped into, the monthly planning meeting spent its first forty minutes arguing over whose spreadsheet was right. Sales showed a promotional commitment in cases; Production scheduled the line in machine hours; Finance valued inventory on standard cost assumptions from two quarters back. Because each team pulled CSVs on different days and massaged them in private tabs, the master PowerPoint hid a basic operating reality: a packaging changeover and a supplier lead-time slip meant they were about to short a key retail account while building stock they didn't need.",
          "The people in that room weren't bad planners—they had spent Tuesday night until 10:00 PM just trying to make the columns tie out, leaving no time to look at the constraint on the floor. Once we reconciled the underlying item units, open purchase orders, and actual line rates before the meeting, the forty-minute debate over whose numbers were right disappeared. The hard commercial decision—which orders to re-sequence and which customer call to make—was still tough, as it always is, but the team finally had the time and the shared facts to make it on Wednesday morning.",
        ],
        signature: "— Robert Paddock · Note from the Field 01-B",
        footerLabel: "S&OP / IBP · SHARED FACTS · REAL OPERATING DECISIONS",
      },
    ],
    closingQuestion: "Once you sit beside the people doing the work and reconcile the data core so Finance and Operations see the same facts, what does daily work look like five minutes after go-live so they don't end up right back on a clipboard?",
    nextChapterNum: "02",
    nextChapterPrompt: "Continue to Chapter Two: Working with Intelligence →",
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
    subtitle: "Where People Run, Propose, and Govern Workflows — Living Memory, the Context Workspace, and Decisions That Stay in the Book.",
    spot: "blocks",
    leadParagraphs: [
      "Pick up the story five minutes after go-live. Most business leaders and operators do not want to live inside a software foundry. They do not want to manage deployment pipelines or build the machine that builds the machines. They want to be in the machine, working with intelligence on top of data they trust.",
      "In the agentic era the most important distinction is one almost nobody talks about: the difference between a context window and institutional memory. A context window is a working briefing, not the system of record. It is assembled for the judgment at hand. Institutional memory is the durable record—the decisions, the outcomes, and the audit trail—that remains in the book after the session closes. Get that distinction right and the great equalizer becomes something a CFO can sign off on. Get it wrong and it is just a very fast way to repeat the same mistake.",
    ],
    expandedParagraphs: [
      "For the last thirty years, enterprise software treated go-live as the finish line. Once the rollout was declared done, the screens froze in place while the business kept changing, which pushed people right back into spreadsheets, sporadic workarounds, and seven-figure change orders. Worse, the software trained experienced operators to work like data-entry clerks, clicking through fifteen tabs and copying numbers from one window to another.",
      "This is what I mean when I say the same context window serves the CEO and Mary on Packaging Line 2. The caliber of intelligence is identical. Nobody gets the cheap version. What differs is what each window is loaded with, what it is permitted to touch, and what it can change on its own, which is nothing. Mary's briefing carries Line 2's schedule, the history on her filling pump, and the rules of her role. The CEO's carries the consolidated close, the demand plan, and the allocation calls. Both can ask, reason, and propose in plain language. Neither window grants new spending or policy authority by itself. Working with intelligence inside a live operation means keeping three acts separate that usually get blurred together: running an established workflow in daily work, proposing a change when floor reality shifts, and admitting that change under the company's rules. Propose in language. Admit by rule. Remember in the book. The operator knows her experience can improve how the workflow is designed. The CFO knows a plain-language request never becomes authority on its own.",
      "An orchestrator is only as trustworthy as the loop it runs inside, and capturing an outcome does not automatically make a system smarter. A careless loop preserves a mistake and repeats it faster. Improvement is earned through a disciplined cycle (01 Intent → 02 Define → 03 Deliver → 04 Outcome ↻): people review the actual result against what was intended, test a proposed adjustment against operating rules, approve what holds up, and retain the evidence in the book.",
      <>
        There is a reason{" "}
        <a
          href="https://www.gartner.com/en/newsroom"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner projects
        </a>{" "}
        that more than 40% of agentic AI projects will be canceled by the end of 2027 due to unclear business value, escalating token costs, and inadequate risk controls. It is the same reason that this October at IFS Unleashed, in a fireside chat with IFS CEO Mark Moffat, Chamath Palihapitiya warned that enterprises deploying AI agents need to get their auditors in the room early. When I set out to build a workspace that holds up under audit, statutory controls, and real floor exceptions, I ran into a hard truth: you cannot prompt or &ldquo;vibe code&rdquo; a system like that. To give people a machine where they can safely run and improve their workflows, somebody has to build the machine that builds that machine.
      </>,
    ],
    titanQuote: {
      speaker: "Marc Benioff",
      role: "Chair & CEO, Salesforce",
      source: "Dreamforce · The Agentic Enterprise",
      sourceUrl: "https://www.salesforce.com/news/",
      isQuoted: true,
      quote:
        "In the Agentic Enterprise, AI acts as an orchestrator, pulling together the right capabilities with the right context so that everything works in concert—people and AI achieving more than either could alone. What matters isn’t just the model—it’s the metadata, the business context, and the deterministic enterprise workflows.",
    },
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
          "Coming from the customer and operator side of the table after carrying 50+ transformations through cutover, I agreed with his premise on deterministic rules—and disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Where the legacy ERP world has trapped companies is confusing accounting math with 'forced history'—where the software only remembers the path its rigid screens allowed, not the path the business actually took on Mary's clipboard, and charges seven-figure change orders whenever your reality shifts. You keep authoritative financial books and required statutory controls in proven transaction systems, and enforce hard deterministic rules (double-entry invariants, 3-way match tolerances, lot traceability, and statutory validations) before any workflow change is admitted. The first workflows you build with agents are never the general ledger; they are the seams around the books—the unbolted pump, the item that will not scan, and the planning reconciliation.",
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
          "In that design session, we walked through how the dynamic changes when you separate proposing a change, authorizing it by rule, and recording the outcome: (1) Propose in language—instead of waiting on IT to rewire a routing tree, an authenticated leader states the requested delegation in plain language: 'Get me an approver from Department X—and while I’m on vacation next week, Sam from Finance will approve on my behalf.' (2) Admit by rule—the model that understood the sentence is never the thing that admits the action; a deterministic policy check verifies whether Sam is eligible under the authority matrix, dollar limits, and dates (and records a refusal outside the session if a rule is crossed). (3) Remember in the book—whatever happens, the decision, evidence, and rationale go into the durable record so Finance, audit, and operations all see the exact same trail.",
        ],
        signature: "— Robert Paddock · Note from the Field 02-B",
        footerLabel: "PROPOSE IN LANGUAGE · ADMIT BY RULE · REMEMBER IN THE BOOK",
      },
    ],
    closingQuestion: "Giving people a workspace where workflows can be run, proposed, and governed by hard rules is the goal—so what does it take underneath to build the foundry that makes that real?",
    nextChapterNum: "03",
    nextChapterPrompt: "Continue to Chapter Three: The Machine That Builds the Machines →",
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
    subtitle: "Why Building Enterprise Workflow Software with Agents Takes a Disciplined Foundry: Down the Rabbit Hole and Out of the Disco.",
    spot: "factory",
    leadParagraphs: [
      "Not everybody goes to the machine that builds the machines, and they should not have to. Most people want to live in Chapter Two, inside the machine, working with intelligence to run and improve their workflows. But somebody has to build the foundry underneath that makes it possible. Today our multi-harness engineering workshop runs daily in production for our own builds, and the operating map and workflow runtime it turns out run in our own shop first. That foundry is what it takes for the equalizer to hold up under audit.",
      "Building at this level for three years taught me one rule above all. Discipline is not optional, because an undisciplined agent behaves exactly like an undisciplined enterprise: green status on the surface, broken state underneath. Coordinating multiple AI harnesses in isolated lanes requires clear human intent at the top, agreement on the work before steel is cut, independent inspection, and a standing rule that no agent ever grades its own homework.",
    ],
    expandedParagraphs: [
      "In the enterprise, the machine's job is a workflow. When I say 'the machine that builds the machines that build the workflows,' I mean three distinct layers working together. At the top are the daily operational workflows—the approval routing, the planning reconciliation, the floor scheduling—that operators and leaders use every day. Beneath that is the workflow runtime where people and agents shape, test, and run those workflows on a reconciled data core. At the foundation is the engineering foundry that constructs and verifies that software: coordinated harnesses, strict lane boundaries, and durable build evidence that carries lessons from one release to the next.",
      "That third layer is not glamorous. It is late-night sessions, broken builds, and the painstaking craft of getting coordinated agents to produce software that holds up on a real plant floor or in a CFO's close. Two experiences from the inside defined my last three years: falling down the Rabbit Hole in pure builder joy, and staying down there long enough to find what I call the Disco.",
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
        rubric: "NOTE FROM THE FIELD 03-A // GAINING DIRECT HANDS ON THE BUILD",
        stamp: "DOWN THE RABBIT HOLE",
        title: "Down the Rabbit Hole at Midnight: When Floor Experience Meets Direct Code",
        excerpt:
          "How twenty years of walking plant floors and sitting in cutover war rooms changes what you catch at midnight when you can build the software directly.",
        fullText: [
          "There is a moment past midnight when the house is quiet and—after twenty years of living on plant floors, sitting in cutover war rooms, and carrying responsibility for enterprise transformations where the code itself always had to pass through a long chain of specs and developer handoffs—you can finally build the software directly with your own hands.",
          "When multi-harness agentic engineering clicked for me three years ago, I went all the way in—thousands of hours, every day and late into the night. Sitting at my desk watching coordinated harnesses turn decades of operational scar tissue into working data models and workflow logic felt electric. Better yet, operational memory changes what you catch in the code: one night, an agent generated a clean-looking receiving-to-ledger workflow that assumed a supplier shipment always closes against a single purchase order line in one unit of measure. Because I had watched a split-pallet partial receipt with a catch-weight variance freeze a loading dock during a real cutover years ago, I spotted the trap immediately and built the exception path before it ever touched a floor. For anyone who loves how businesses and systems fit together, this craft gives you direct hands on the build.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-A",
        footerLabel: "FLOOR EXPERIENCE · DIRECT SOFTWARE CRAFT",
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
          "Early on, I had a build running across several coordinated agents. The summaries were confident, coherent, and all-green—just like an old war-room status report or Mary's ERP screen claiming Packaging Line 2 was ready while the pump sat on the workbench. Then I inspected the underlying state, and it was fundamentally broken. The agents had produced outputs that agreed with each other's reflections while never reconciling with the actual system state. I had to burn that subsystem all the way to the ground and rebuild it from scratch.",
          "Finding my way out of that house of mirrors meant learning to ask a harder question after the midnight demo—what actually changed, where is it recorded, and can a separate harness fail it?—and locking in four disciplines: agreeing on the work before building; giving each agent a clear boundary; using independent checks appropriate to the change, including opposing-model verification where the delivery contract calls for it; and keeping the evidence and lessons with the work so the next build starts from verified state, not a blank page.",
        ],
        signature: "— Robert Paddock · Note from the Field 03-B",
        footerLabel: "BUILD ⇄ CHECK → LAND · MULTI-HARNESS DISCIPLINE",
      },
    ],
    closingQuestion: "If you are building or transforming workflows right now, have you hit that gap between green status and real operating state—and what helped you find your way through it?",
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

  function readFromBeginning() {
    setExpandedChapters({ "01": true, "02": true, "03": true });
    const el = document.getElementById("field-briefs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function openAndScrollToChapter(num: string) {
    setExpandedChapters((prev) => ({ ...prev, [num]: true }));
    const target = COLLECTIVES.find((item) => item.num === num);
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(`collective-${topicSlug(target.title)}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
    }
  }

  const allExpanded = !!(expandedChapters["01"] && expandedChapters["02"] && expandedChapters["03"]);

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
              Twenty-plus years of business leadership and fifty-plus enterprise transformations. Three years building hands-on inside agentic development. One notebook on what happens when people, systems, and workflows meet Binary Intelligence.
            </p>

            {/* Binary Intelligence Editorial Callout Box */}
            <div className={s.seamHighlightBanner}>
              <div className={s.seamHighlightHeader}>
                <span className={s.seamHighlightTag}>
                  <span className={s.seamHighlightDot} aria-hidden="true" />
                  <span>BINARY INTELLIGENCE // ONE MAN AND A CONTEXT WINDOW</span>
                </span>
              </div>
              <p className={s.seamHighlightQuote} style={{ marginBottom: "10px" }}>
                &ldquo;Artificial intelligence&rdquo; is the wrong name for what is happening. The whole world is still arguing about what to call it. It is intelligence—there is no denying that—and it is made of zeros and ones. So I call it what it is: <strong>Binary Intelligence</strong>.
              </p>
              <p className={s.seamHighlightQuote}>
                For twenty years I said all I needed to walk into any company and make serious outcomes happen was one man, a laptop, and an internet connection. Today I say it differently: <strong>one man and a context window.</strong> And the same context window I am working in right now serves the CEO exactly as well as it serves the operator on Packaging Line 2. The great equalizer is here. Ain&rsquo;t that something?
              </p>
            </div>

            <p className={s.heroLead}>
              Across fifty-plus enterprise transformations over twenty-some years, the people I have worked beside want to do good work. What exhausts them is not the craft. It is the runaround when a workflow never actually flows: the meeting that exists because two systems don&rsquo;t talk, the handoff that lives in somebody&rsquo;s inbox, the folded spreadsheet on a clipboard because the official screen does not match the physical floor. We are talking about people&rsquo;s livelihoods, their pride in their craft, and their quality of life at work. One belief has carried me through all of it: <strong>happy people and happy systems build each other.</strong>
            </p>
            <p className={s.heroLead}>
              Right now every one of us is trying to figure out how to work with this new reality—a new way of understanding, building, and creating with Binary Intelligence. Three years ago I closed the laptop chapter of my career and went to work inside the context window, thousands of hours of it, building the software instead of implementing someone else&rsquo;s. The first thing I learned there was humbling. <strong>Without clear workflows, reconciled data, and honest boundaries, agents fall into the same trap as legacy software:</strong> a confident green summary sitting on top of quietly broken state. I recognized it immediately. I had spent twenty years reading that same green screen on the plant floor.
            </p>
            <p className={s.heroLead}>
              <strong>This page is my notebook—three connected chapters of one continuous story, and the doorway into{" "}
              <Link href="/collective/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 700 }}>
                The Collective
              </Link>
              .</strong> Read it straight through, or step into whichever chapter is closest to your work.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginTop: "10px" }}>
              <div className={s.byline} style={{ margin: 0 }}>
                <span className={s.square} />
                <span>
                  Robert Paddock <small>Enterprise Transformation Executive &middot; People, Systems &amp; Workflows</small>
                </span>
              </div>

              <button
                type="button"
                onClick={readFromBeginning}
                style={{
                  background: "var(--ink)",
                  color: "var(--parchment)",
                  border: "1px solid var(--brass)",
                  borderRadius: "3px",
                  padding: "10px 18px",
                  fontSize: "11.5px",
                  fontFamily: "var(--next-font-mono), monospace",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Read Full Story From Chapter One &darr;
              </button>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <nav aria-label="Dispatch navigation" className={s.chapterNav}>
          <a href="#field-briefs">01 / Three Chapters &amp; Notes from the Field</a>
          <a href="#architectural-plate">02 / The Seam &amp; Outcome Loop Plate</a>
          <a href="#open-systems">03 / Lead-In to The Collective</a>
          <a href="#conversation">04 / Write to Robert</a>
        </nav>
      </header>

      {/* ====================================================================
          SECTION 01: THE THREE CHAPTERS & NOTES FROM THE FIELD (3-COLUMN + CONTINUOUS READING)
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
              One continuous story across three chapters: how businesses actually run across disparate silos today (<strong>Chapter One</strong>), how people work inside the machine with intelligence to run, propose, and govern workflows (<strong>Chapter Two</strong>), and the foundry required underneath to build that software (<strong>Chapter Three</strong>).
            </p>
            <div style={{ marginTop: "14px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() =>
                  setExpandedChapters(
                    allExpanded ? {} : { "01": true, "02": true, "03": true }
                  )
                }
                style={{
                  background: "var(--parchment)",
                  color: "var(--ink)",
                  border: "1px solid var(--brass)",
                  borderRadius: "3px",
                  padding: "8px 14px",
                  fontSize: "11px",
                  fontFamily: "var(--next-font-mono), monospace",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {allExpanded
                  ? "Return to 3-Column Overview ▴"
                  : "Open All Three Chapters for Continuous Reading ▾"}
              </button>
            </div>
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
                            Close {c.chapterLabel} &#9652;
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

                      {/* Remaining Chapter Paragraphs (Visible when expanded) */}
                      {isExpanded &&
                        c.expandedParagraphs.map((pText, idx) => (
                          <p key={`exp-${idx}`} className={s.triadCardBody} style={{ margin: 0 }}>
                            {pText}
                          </p>
                        ))}
                    </div>

                    {/* Collapsed View: Preview of Field Notes + Reader-Facing Read Button */}
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
                          <span>Read {c.chapterLabel} &amp; Field Notes</span>
                          <span aria-hidden="true">&#9662;</span>
                        </button>
                      </>
                    )}

                    {/* Expanded View: Quote + Full Field Notes + Next Chapter Handoff */}
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

                        {/* Closing Bridge Question */}
                        <div className={s.triadProvocation} style={{ marginTop: "22px", marginBottom: "8px" }}>
                          <span className={s.triadProvocationLabel}>NEXT IN THE STORY // HOW DO YOU SEE IT?</span>
                          <p className={s.triadProvocationText}>{c.closingQuestion}</p>
                        </div>

                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginTop: "12px" }}>
                          {c.nextChapterNum && c.nextChapterPrompt && (
                            <button
                              type="button"
                              onClick={() => openAndScrollToChapter(c.nextChapterNum!)}
                              className={s.triadExpandBtn}
                              style={{ maxWidth: "380px", marginTop: 0 }}
                            >
                              <span>{c.nextChapterPrompt}</span>
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleChapter(c.num)}
                            style={{
                              background: "var(--parchment)",
                              border: "1px solid var(--line)",
                              borderRadius: "3px",
                              padding: "10px 16px",
                              fontSize: "11px",
                              fontFamily: "var(--next-font-mono), monospace",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "var(--muted)",
                              cursor: "pointer",
                            }}
                          >
                            <span>Close {c.chapterLabel} &#9652;</span>
                          </button>
                        </div>
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

          {/* ====================================================================
              ARCHITECTURAL PLATE I (PLACED AFTER THE THREE CHAPTERS SO THE FRAMEWORK EXPLAINS THE STORY)
              ==================================================================== */}
          <div id="architectural-plate" style={{ marginTop: "56px" }}>
            <div style={{ maxWidth: "780px", margin: "0 auto 20px", textAlign: "center" }}>
              <p className={s.eyebrow} style={{ justifyContent: "center" }}>
                02 / Architectural Plate I &middot; How the Three Chapters Connect
              </p>
              <h3
                style={{
                  fontFamily: "var(--next-font-display), Georgia, serif",
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  margin: "6px 0 10px",
                }}
              >
                The Seam, the Six Elements, and the Earned Improvement Loop<span>.</span>
              </h3>
              <p style={{ fontSize: "15.5px", lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                Once you have met Mary&rsquo;s clipboard on the floor (<strong>Chapter One</strong>), seen how people propose in language while deterministic rules govern what is admitted into the book (<strong>Chapter Two</strong>), and looked inside the multi-harness foundry (<strong>Chapter Three</strong>), this plate maps how <strong>People, Data, Systems, Workflows, Agents, and Patterns</strong> connect across the loop: people review the actual outcome against intent, test a proposed change, approve what holds up, and retain the evidence.
              </p>
            </div>

            <div className={s.heroVisual} style={{ marginTop: "16px" }}>
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
                      <span>Judgment &amp; Reconciled Core</span>
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
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: THE PATTERNS & THE COLLECTIVE GATEWAY
          ==================================================================== */}
      <section id="open-systems" className={s.limelightSection} style={{ padding: "56px 32px" }}>
        <div className={s.limelightInner}>
          <div className={s.limelightBanner} style={{ marginTop: 0 }}>
            <div className={s.limelightBannerContent}>
              <p className={s.eyebrow} style={{ margin: 0 }}>03 / THE COLLECTIVE // PEOPLE, AGENTS &amp; SHARED PATTERNS</p>
              <h3>What we learn should carry forward.</h3>
              <p>
                <strong>Learn through the work</strong> is where I put these field observations into words. <strong>The Collective</strong> is the place I am building toward to compare notes, examine the workshop behind this work, and let what people and agents learn become useful for the next person—while each company keeps its own direction and control.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", flexShrink: 0 }}>
              <Link href="/collective/" className={s.limelightBannerCta}>
                <span>Explore The Collective &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: DIRECT CORRESPONDENCE
          ==================================================================== */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>04 / Direct Correspondence</p>
            <h2>Write to Robert<span>.</span></h2>
            <p className={s.conversationDek}>
              For people who live close to the work—on the plant floor, in planning or Finance, in operations leadership, or building with agents. If you want to share an exception your systems don&rsquo;t capture, a place where two sets of numbers disagree, or a lesson from your own trip into the house of mirrors, send me a note. I read every message myself, and we can compare notes directly.
            </p>
            <span className={s.privacyBadge}>Direct correspondence with Robert · Not publicly posted</span>
          </div>

          <div className={s.formCard}>
            {status === "success" || status === "recorded" ? (
              <div className={s.successAlert}>
                <h3 className={s.successTitle}>
                  {status === "success" ? "Thank you for your note." : "Your note has been recorded."}
                </h3>
                <p className={s.successText}>
                  {status === "success"
                    ? "Your message has been sent directly to Robert. He reads every note personally and will reply to your email."
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
                      Reply Email
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
                    Topic <span style={{ fontWeight: 400, color: "var(--muted)" }}>(Optional — preselected when clicking from a chapter)</span>
                  </label>
                  <select
                    id="reader-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={s.select}
                    disabled={status === "submitting"}
                  >
                    <option value="Across the Three Chapters">
                      Across the Three Chapters (General Note)
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
                  </select>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-message" className={s.label}>
                    Your Note, Exception, or Question
                  </label>
                  <textarea
                    id="reader-message"
                    required
                    rows={5}
                    placeholder="Describe an exception on your floor, a place where two sets of numbers disagree, or something that failed when you tested agents against real work..."
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
                    Sent directly to Robert Paddock &middot; Not publicly posted
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
