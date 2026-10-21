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
    subtitle: "What’s Old Is New, What’s New Is Old: Bad Data, Shadow IT, and the Mighty Excel Spreadsheet.",
    spot: "constellation",
    leadParagraphs: [
      <>
        Every company I walk into is standing on fifty years of accumulated technology. COBOL systems from the 1970s still carry the ledger, inventory, and payroll, and they set the transaction patterns companies run on today. Those got buried under &rsquo;90s ERPs and bolted to 2010s SaaS platforms, with a twenty-year-old shadow system humming in a corner that nobody dares touch because only one person knows how to fix it.{" "}
        <a
          href="https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner forecasts
        </a>{" "}
        that by 2027 more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals. I can tell you one reason without reading the report. The implementation goes live while the work between the screens is still sitting on a clipboard.
      </>,
      "For twenty years my toolkit was a laptop, an internet connection, and one question: show me how you actually do it today. I go to three places first. The CFO, because the books have to hold up under GAAP, statutory controls, and an audit trail you can defend. The Compliance Officer, for the legal and regulatory obligations the business cannot trade away. Then I follow Integrated Business Planning all the way down to the floor, where recorded state meets operating reality. The two almost never agree.",
    ],
    expandedParagraphs: [
      "Integrated Business Planning is the grown-up version of S&OP. It puts Finance and strategy in the same cadence as supply and operations. It exists because a business runs on two connected views of the same reality, and each view has its own clock and its own rules for what counts as true. Finance needs the books: accruals, postings, multi-entity consolidations, statutory controls, and a formal close that cannot be rushed or guessed. Operations needs the floor as it stands right now: volume, cases shipped, what is sitting in the bays, and whether Packaging Line 2 can actually run this morning. Both views have to reconcile to the same underlying events. In most companies, the only place they ever meet is a spreadsheet somebody rebuilds every month.",
      <>
        The consulting world calls that problem &ldquo;disparate silos.&rdquo; On the floor it means a workflow never actually flows. It stutters. An order enters one system, inventory sits in a second, freight lives in a third, and the per-seat, renewal-locked, data-behind-the-vendor-wall economics of most SaaS leave the software rigid exactly where the company&rsquo;s workflow needs to bend.{" "}
        <a
          href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          McKinsey&rsquo;s global AI research
        </a>{" "}
        shows roughly 80% of workers report personal productivity gains from AI tools, while fewer than 40% of enterprises see measurable EBIT impact from scaling workflows in production. I read that gap as a data-and-workflow gap. Talent was never the problem. The equalizer has reached the individual. It has not reached the enterprise, because the enterprise has no reconciled core to point it at. And ask any CFO what it takes just to corral the subscription sprawl: active users versus paid seats, contract dates, and now AI token usage on top of it. That has become a battle of its own.
      </>,
      "Connecting systems does not erase the hard trade-offs inside Integrated Business Planning. Competing commercial incentives, constrained line capacity, and tough allocation calls will always need human judgment. That part never bothered anyone I worked with. What breaks people is two weeks of nights and weekends on manual data plumbing just to find out where the disagreement actually is.",
      <>
        Sit in the customer seat across fifty implementations and fifteen full enterprise transformations, in the boardroom, in the war room, and on the loading dock at two in the morning, and you learn quickly that the data model is the easy part. Today, with Binary Intelligence, spinning up a clean schema is cheap. The table structure has never been what breaks a transformation. The workflow breaks it: the messy, interdependent logic of how an order, a line changeover, a quality hold, and a financial accrual actually move through a plant. You cannot white-sheet a manufacturing plant&rsquo;s workflows on a blank screen. The market is starting to wake up to that. The engineering leaders at{" "}
        <a
          href="https://www.linkedin.com/posts/vaibhav-vaibs-kumar-21083915_ifs-x-8090-the-role-of-ai-in-critical-infrastructure-activity-7505328390015631361-zqcv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          8090 and IFS recently underscored
        </a>{" "}
        the same point in their own discussions on critical infrastructure: the real gravity of heavy software lives in workflows and business invariants, not in data models. Twenty years in the customer&rsquo;s chair adds one more layer to that truth, and it is a layer you only see after go-live. Half of the real workflow is not inside the legacy system of record either. When the ERP screens froze, the living exceptions walked out the door, onto Mary&rsquo;s 6:30 AM clipboard and into Don&rsquo;s head.
      </>,
      "Those gaps are the seams. The work between the tasks is what people like Mary and Don carry every morning. Inside a legacy company, no one person can see the whole anymore. And yet I have more hope today than at any point in my career, because what is old is new, and what is new is old. With Binary Intelligence in the work, we do not have to put an exhausted team through a two-year root canal just to map where the business stands. We can sit beside the people doing the work, ask the same question I have always asked, and let Binary Intelligence organize the messy spreadsheets, compare the unwritten workflows against the system of record, and reconcile the data core. Then people get to spend their energy on the real operating decisions, which is what they wanted in the first place.",
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
          "From Mary's 6:30 AM clipboard next to an unbolted pump to Don WMS orchestrating fluid New York warehouse zones by the hour with colored Post-it notes.",
        fullText: [
          "Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily routines keep the operation standing. On the plant floor I call her Mary. She is a composite of real people from plant cutovers I have led, and every one of them would recognize her. Mary’s Sheet is a folded 11x17 Excel spreadsheet on a green metal clipboard at 6:30 AM. It knows Packaging Line 2 has its filling pump unbolted on the workbench twenty feet away, even while the new ERP screen shows green and ready. Mary does not think of this as heroic. She thinks of it as Tuesday.",
          "In tight New York warehouse quarters cobbled together over 30 to 40 years with almost no room to spare, it was Don. The crew called him Don WMS, because he was the warehouse management system. Four decades of bastardized item schemas, missing vendor labels, and mismatched department keys lived in his head. To keep product moving through those cramped bays, he used colored Post-it notes to mark fluid zones that shifted by the hour depending on what was coming in, what was being produced, and what was shipping out. One colored sticky told his crew what that patch of floor meant right now and what had to happen to the product sitting on it. It was brilliant.",
          "Transformation is personal for people like Mary and Don, because holding that fragile puzzle together is their pride and their purpose. Across frontline cutovers, the quiet worry that surfaces is almost always the same: 'Well, I guess I'm going to lose my job and have nothing to do.' The only honest answer is to give their judgment real weight in shaping what comes next. Mary helped define the exception rules and decided which floor checks still mattered once the morning spreadsheet gymnastics were gone. Nobody handed her that role from upstairs. She shaped it. We made Don co-architect of the unified item catalog and gave him live floor visibility on an iPad. He kept doing what he loved, walking the bays and working with his crew. The difference was that Don WMS now had a digital partner named DON.",
        ],
        signature: "Robert Paddock · Note from the Field 01-A",
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
          "In one consumer-products operation I stepped into, the monthly planning meeting spent its first forty minutes arguing over whose spreadsheet was right. Sales showed a promotional commitment in cases. Production scheduled the line in machine hours. Finance valued inventory on standard cost assumptions from two quarters back. Each team pulled CSVs on different days and massaged them in private tabs, so the master PowerPoint hid a basic operating reality: a packaging changeover and a supplier lead-time slip meant they were about to short a key retail account while building stock they did not need.",
          "Nobody in that room was a bad planner. They had spent Tuesday night until 10:00 PM just trying to make the columns tie out, and that left no time to look at the constraint on the floor. Once we reconciled the underlying item units, open purchase orders, and actual line rates before the meeting, the forty-minute argument over whose numbers were right simply went away. The hard commercial decision was still hard, as it always is: which orders to re-sequence and which customer to call. But the team finally had the time and the shared facts to make that call on Wednesday morning, with the people who could act on it in the room.",
        ],
        signature: "Robert Paddock · Note from the Field 01-B",
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
    tag: "CHAPTER TWO // THE OPERATING INSTANCE",
    actionLabel: "Share How You See This Shift",
    title: "Working with Intelligence",
    subtitle: "Humans and Agents Running the Workflows That Run the Business: The ERP Conversation, the SaaS Killer, and One Person With a Context Window.",
    spot: "blocks",
    leadParagraphs: [
      "Pick up the story five minutes after go-live. The business still has to run. Purchase orders have to cut, receiving has to post, payroll has to clear, approvals have to route, and the month has to close. This is the operating instance of the company, where humans and agents work together inside the workflows that execute the actual transactions. For thirty years that meant renting the work back from software: twenty SaaS point solutions charging per-seat tolls, a monolithic ERP whose screens froze at go-live, and a seven-figure change order every time the floor changed. This is the ERP conversation. It is also the SaaS killer.",
      "The alternative is one person and a context window, from the CEO to Mary on Packaging Line 2, working with agents directly on top of a reconciled data core and deterministic accounting rules. People and agents run the daily transactions together. When reality shifts on the floor, an operator proposes the change in plain language, a hard rule admits or refuses it, and the book remembers the outcome. The workflow and the book carry the memory of the business. The window is only the briefing.",
    ],
    expandedParagraphs: [
      "For the last thirty years, enterprise software treated go-live as the finish line. The rollout was declared done, the screens froze in place, and the business kept changing anyway. That pushed people straight back into spreadsheets, workarounds, and change orders. It did something worse to the people themselves. It trained experienced operators to work like data-entry clerks, clicking through fifteen tabs and copying numbers from one window to another. The ERP conversation every CFO is now having is whether that model survives contact with intelligence that can read the purchase order, check the receipt against it, and draft the journal entry on its own. I do not believe it does.",
      "What replaces it is an owned, bounded operating instance of the business, and I want to be specific about that, because a chatbot bolted onto the old screens does not qualify. It means a clean, reconciled data core. It means a proven ledger with GAAP, three-way match, spending limits, and statutory controls enforced as deterministic rules that live outside any model session. And it means the daily transaction workflows running on top, where people and agents do the work together. This is what I mean when I say the same context window serves the CEO and Mary on Packaging Line 2. The caliber of intelligence is identical. Nobody gets the cheap version. What differs is what each window is loaded with, what it is permitted to touch, and what it can change on its own, which is nothing. Mary's briefing carries Line 2's schedule, the history on her filling pump, and the rules of her role. The CEO's carries the consolidated close, the demand plan, and the allocation calls. Both can ask questions and propose changes in plain language. Neither window grants new spending or policy authority by itself.",
      "The distinction that matters most in this era gets the least airtime: the difference between a context window and institutional memory. The context window is a working briefing, assembled for the judgment at hand and gone when the session closes. Institutional memory is the durable record that stays in the book: the workflow definitions, the decisions, the outcomes, and the audit trail. Working with Binary Intelligence inside a live operation means keeping three acts separate that usually get blurred together. Running an established workflow in daily work. Proposing a change when floor reality shifts. Admitting that change under the company's rules. Propose in language. Admit by rule. Remember in the book. The operator knows her experience can improve how the workflow is designed. The CFO knows a plain-language request never becomes authority on its own.",
      <>
        In consumer tech, if a model gets something wrong, you negotiate with it in the next prompt. In a manufacturing plant or a financial close, the margin of error is zero and physical actions are irreversible. Once a batch is blended or a truck clears the dock, you cannot regenerate Tuesday, and even a journal reversal requires controlled authorization and leaves a permanent audit trail. The boardroom has a second concern that matters just as much:{" "}
        <a
          href="https://www.linkedin.com/posts/vaibhav-vaibs-kumar-21083915_8090-x-ifs-business-continuity-activity-7508631979610009600-Ab2f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          operational continuity
        </a>
        . An enterprise can never wire its core operations to a single third-party model vendor that could change its terms, suffer an outage, or pull the rug out from under the plant tomorrow. A business cannot go from Binary Intelligence to no intelligence overnight. So the institutional memory and the deterministic business invariants stay inside the company-owned book, and the context window is treated as a replaceable briefing that can route across commercial frontier models or self-hosted open-weight models. The company owns its continuity, no matter whose model is answering this week.
      </>,
      "The deep end of corporate finance is where this architecture earns its keep: Multi-Entity Management (MEM), financial consolidations, and intercompany eliminations. Suppose Plant West and Plant East belong to separate legal entities in the same consolidated group, and West transfers $142,500 of sub-assemblies to East. Both local books balance on their own. Roll them up naively and the parent company double-counts internal revenue, cost of goods sold, receivables, and payables, while leaving unrealized internal profit sitting in inventory. Both books can balance and the consolidation can still be wrong. Historically, standing up multi-entity intercompany eliminations with SOX Section 404 and PCAOB AS 2201 traceability took twelve to eighteen months of ERP consulting. When Binary Intelligence operates on top of a deterministic double-entry engine with SHA-256 cryptographic voucher chaining, the picture changes. Inter-instance transfers generate atomic elimination vouchers outside the model session. One-legged entries are refused before they touch the ledger. A forensic accountant can trace any consolidated line item straight back to the originating floor receipt, the git commit, and the hardware-key signature of the person who approved it. This is what 'get your auditors in the room early' looks like when you take it literally. The auditor is in the ledger. And because the governance is profile-driven, the same engine scales across the whole spectrum of business. A single-entity local shop can run with lightweight guardrails while its office manager shapes a new workflow over a month or two. A multi-entity public enterprise runs full intercompany eliminations, segregation of duties, and an audit sentry that can read everything and post nothing.",
      "An orchestrator is only as trustworthy as the loop it runs inside, and capturing an outcome does not automatically make a system smarter. A careless loop preserves a mistake and repeats it faster. Improvement has to be earned, and the cycle is plain (01 Intent → 02 Define → 03 Deliver → 04 Outcome ↻): people review the actual result against what was intended. They test a proposed adjustment against operating rules. They approve what holds up. The evidence stays in the book.",
      <>
        <a
          href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}
        >
          Gartner projects
        </a>{" "}
        that more than 40% of agentic AI projects will be canceled by the end of 2027, citing unclear business value, escalating costs, and inadequate risk controls. This October at IFS Unleashed, in a fireside chat with IFS CEO Mark Moffat, Chamath Palihapitiya made the companion point from the boardroom side: enterprises deploying AI agents need to get their auditors in the room early. When I set out to build a workspace that holds up under audit, statutory controls, and real floor exceptions, I ran into a hard truth. You cannot prompt your way to a system like that, and you cannot vibe code it either. To give people a machine where they can safely run and improve their workflows, somebody has to build the machine that builds that machine.
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
          "An argument over a beer with a senior executive at a major global ERP integrator, and why separating accounting math from 'forced history' changes the game.",
        fullText: [
          "Not long ago I sat down over a beer with a close friend I respect. He is a senior executive at one of the major global system integrators for tier-one ERPs, and we went at it from opposite sides of the table. His point was serious and earned. Tier-one ERPs encode thirty years and billions of dollars of statutory controls, GAAP consolidation, tax rules, and audit trails, and in that world a 99% probabilistic guess is a compliance failure. In his view, that regulatory moat guarantees the giant ERP vendors and the massive SI programs will always own the core.",
          "I have carried 50-plus implementations and 15 full enterprise transformations through cutover from the customer and operator side of that table, so I agreed with his premise on deterministic rules. I disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Where the legacy ERP world has trapped companies is in confusing accounting math with what I call forced history. The software only remembers the path its rigid screens allowed, never the path the business actually took on Mary's clipboard, and it charges a seven-figure change order whenever your reality shifts. So you keep the authoritative financial books and the required statutory controls in proven transaction systems. You enforce hard deterministic rules before any workflow change is admitted: double-entry invariants, three-way match tolerances, lot traceability, statutory validations. And the first workflows you build with agents are never the general ledger. They are the seams around the books. The unbolted pump. The item that will not scan. The planning reconciliation nobody has time to do.",
        ],
        signature: "Robert Paddock · Note from the Field 02-A",
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
          "Recently I sat in a working session with a group of regional business leaders who run real P&Ls. The question on the table was how people will actually work with agents five minutes after a system goes live. Of all the debates we had, the sharpest one centered on something that sounds dead simple on paper: approval workflows. In a real company, approvals are never simple. Add dollar limits, departmental budgets, multi-entity rules, and temporary delegations, and the standard SaaS approval engine turns into a tangled mess. Every one of them is 'configurable.' Every one of them seems to need a painful modification anyway.",
          "In that session we walked through what changes when you separate proposing a change, authorizing it by rule, and recording the outcome. First, propose in language. Instead of waiting on IT to rewire a routing tree, an authenticated leader states the delegation in plain words: 'Get me an approver from Department X. And while I'm on vacation next week, Sam from Finance will approve on my behalf.' Second, admit by rule. The model that understood that sentence is never the thing that admits the action. A deterministic policy check verifies whether Sam is eligible under the authority matrix, the dollar limits, and the dates. If a rule is crossed, the refusal is recorded outside the session, along with who would have been eligible. Third, remember in the book. Whatever happens, the decision, the evidence, and the rationale go into the durable record, so Finance, audit, and operations all see the exact same trail. The leaders in that room got it in about ten minutes. They had all lived the alternative.",
        ],
        signature: "Robert Paddock · Note from the Field 02-B",
        footerLabel: "PROPOSE IN LANGUAGE · ADMIT BY RULE · REMEMBER IN THE BOOK",
      },
    ],
    closingQuestion: "Giving people an operating instance where humans and agents run the transactions, and workflows are proposed in language and governed by hard rules, is the goal. What does it take underneath to build the foundry that makes that real?",
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
      "Not everybody goes to the machine that builds the machines, and they should not have to. Most people want to live in Chapter Two, inside the machine, working with intelligence to run and improve their workflows. But somebody has to build the foundry underneath that makes it possible, and a system that has to hold up under audit, statutory controls, and real floor exceptions does not come out of a prompt. Today our multi-harness engineering workshop runs daily in production for our own builds. The operating map and the workflow runtime it turns out run in our own shop first.",
      "Building at this level for three years taught me one rule above all. Discipline is the whole game, because an undisciplined agent behaves exactly like an undisciplined enterprise: green status on the surface, broken state underneath. Coordinating multiple AI harnesses in isolated lanes takes clear human intent at the top, agreement on the work before steel is cut, independent inspection of what actually changed, and a standing rule that no agent ever grades its own homework. That foundry is what it takes for the equalizer to hold up when a real CFO signs the close.",
    ],
    expandedParagraphs: [
      "When I wrote down the first ethos of our workshop over a year ago, I called it 'the machine that builds the machines.' I had not heard anyone talk about software factories yet. Over the past year I have watched other serious builders arrive at the same words on their own, and I take that as a good sign rather than a race. Anyone who moves past toy demos into real enterprise software runs into the same physical law. In the enterprise, the machine's job is a workflow. So when I say 'the machine that builds the machines that build the workflows,' I mean three layers working together. At the top are the daily operational workflows that operators and leaders use every day: approval routing, planning reconciliation, multi-entity consolidations, floor scheduling. Beneath that is the workflow runtime, where people and Binary Intelligence shape, test, and run those workflows on a reconciled data core. At the foundation is the engineering foundry that constructs and verifies that software: coordinated harnesses, strict lane boundaries, and durable build evidence that carries lessons from one release to the next.",
      "Why does that foundation need a disciplined foundry instead of a single coding assistant? Do the compound reliability math on multi-step systems. Reliability engineers call it Lusser's Law. Even if a single agent step is 95% accurate in isolation, a 10-step series workflow lands at 0.95 to the tenth power end to end, which is 59.8%. A 20-step build chain falls to 35.8%. Now add the part the math does not show. When the same model family both writes the code and grades the test output, the two share the same blind spots, and that 40% failure risk hides behind a confident green summary. That is how an unconstrained agent loop hits messy enterprise state and spirals into the multi-million-dollar token rework loops Chamath has been putting a figure on, without ever landing operable software.",
      "To break that trap, and to satisfy IT General Controls (ITGC) and the SOX Section 404 and PCAOB AS 2201 change-management standards, our foundry enforces Segregation of Duties inside the build loop itself (Build ⇄ Check → Land). Every unit of work begins with an agreed plan and an explicit file-fence boundary before steel is cut. Builder harnesses execute in isolated git worktrees, and they are structurally barred from grading their own homework. Before any change lands on main, it has to pass the deterministic invariant gates, meaning schema checks, double-entry balance assertions, and a full build verification. Then it has to pass an independent inspection by an opposing model family. The cryptographic commit receipt goes in the ledger. The rule a CFO already lives by applies to the code: the person who cuts the check does not reconcile the bank.",
      "Nobody puts that third layer in a keynote. It is late-night sessions, broken builds, and the painstaking craft of getting coordinated agents to produce software that holds up on a real plant floor or in a CFO's close. Two experiences from the inside defined my last three years. Falling down the Rabbit Hole in pure builder joy. And staying down there long enough to find what I call the Disco.",
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
          "There is a moment past midnight when the house is quiet and you realize you are building the software with your own hands. For twenty years I lived on plant floors, sat in cutover war rooms, and carried responsibility for enterprise transformations where the code always had to pass through a long chain of specs and developer handoffs. I owned the outcome. I never touched the build. Past midnight, in the context window, that chain is gone.",
          "When multi-harness agentic engineering clicked for me three years ago, I went all the way in. Thousands of hours, every day and late into the night. Watching coordinated harnesses turn decades of operational scar tissue into working data models and workflow logic felt electric. Better yet, operational memory changes what you catch in the code. One night an agent generated a clean-looking receiving-to-ledger workflow that assumed a supplier shipment always closes against a single purchase order line in one unit of measure. Years earlier I had watched a split-pallet partial receipt with a catch-weight variance freeze a loading dock during a real cutover. So I spotted the trap immediately and built the exception path before it ever touched a floor. For anyone who loves how businesses and systems fit together, this craft puts your hands directly on the build.",
        ],
        signature: "Robert Paddock · Note from the Field 03-A",
        footerLabel: "FLOOR EXPERIENCE · DIRECT SOFTWARE CRAFT",
      },
      {
        id: "fn-disco",
        rubric: "NOTE FROM THE FIELD 03-B // THROUGH THE HOUSE OF MIRRORS",
        stamp: "FINDING THE DISCO",
        title: "Stay Down Long Enough and You Find the Disco (The House of Mirrors)",
        excerpt:
          "The other side of midnight joy: confident green summaries over broken state, burning the whole machine and its state down multiple times, and locking in multi-harness discipline.",
        fullText: [
          "Here is the other side of that midnight joy, the part nobody puts in a keynote demo. If you stay down the rabbit hole long enough building real enterprise systems, the first thing agents teach you is how easy it is to lie to yourself. You find what I call the Disco: a house of mirrors under flashing lights.",
          "You can sit in a chair at two in the morning watching four green summaries agree with each other while the thing underneath them is broken. Every seat is polite. Every seat says it checked. It is the old war-room status report all over again, or Mary's ERP screen claiming Packaging Line 2 was ready while the pump sat on the workbench. The Disco is the moment you stop reading the summaries, open the files yourself, and realize the floor is not there. I burned the whole thing down. The machine, its state, and its assets. I did it more than once. Not long ago I watched a video of a young builder deep in the work, going through her very first burndown, and I had to laugh. Not at her. In recognition. Until you have torched your own floor at two in the morning with every status light green, you still believe a confident summary means the building is standing. That is the night a single source of truth stops being a slogan and becomes a law.",
          "Finding my way out of that house of mirrors meant learning to ask a harder question after the midnight demo. What actually changed? Where is it recorded? Can a separate harness fail it? Then it meant locking in four disciplines and never trading them away. Agree on the work before building. Give each agent a clear file-fenced boundary. Use independent checks that fit the change, including opposing-model verification, so no agent ever grades its own homework. Keep the evidence and the lessons with the work, so the next build starts from verified state and not from a blank page.",
        ],
        signature: "Robert Paddock · Note from the Field 03-B",
        footerLabel: "BUILD ⇄ CHECK → LAND · MULTI-HARNESS DISCIPLINE",
      },
    ],
    closingQuestion: "If you are building or transforming workflows right now, have you hit that gap between green status and real operating state, and what helped you find your way through it?",
    fieldNoteHref: "/agentic-ai/the-delivery-seam/",
    fieldNoteLabel: "Open Standalone Chapter Three Page",
    topicKey: "03 / Chapter Three: The Machine That Builds the Machines That Build the Workflows",
  },
];

/**
 * The Titan quote bubble (Chamath / Benioff / Factory.ai). Rendered in BOTH the
 * collapsed 3-column card (bottom cluster) and the expanded chapter view, so the
 * three substantiating voices are always visible on the overview.
 */
function TitanQuoteBlock({ quote }: { quote: TitanQuote }) {
  return (
    <div className={s.triadQuoteBlock}>
      <div className={s.triadQuoteMeta}>
        <span className={s.triadQuoteSpeaker}>{quote.speaker}</span>
        {quote.sourceUrl ? (
          <a
            href={quote.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={s.triadQuoteSource}
            style={{ textDecoration: "underline" }}
          >
            • {quote.source} &#8599;
          </a>
        ) : (
          <span className={s.triadQuoteSource}>• {quote.source}</span>
        )}
      </div>
      <blockquote className={s.triadQuoteText}>
        {quote.isQuoted === false ? quote.quote : <>&ldquo;{quote.quote}&rdquo;</>}
      </blockquote>
      <div className={s.triadQuoteRole}>{quote.role}</div>
    </div>
  );
}

function titanQuoteTag(quote: TitanQuote): string {
  return quote.isQuoted === false ? "ARCHITECTURAL PRINCIPLE // FIELD THESIS" : "INDUSTRY PERSPECTIVE // THE MACRO VIEW";
}

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
              Twenty-plus years of business leadership across fifty-plus enterprise implementations and fifteen full transformations. Three years building with my own hands inside the context window. One notebook on what happens when people, systems, and workflows meet Binary Intelligence.
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
                &ldquo;Artificial intelligence&rdquo; is the wrong name for what is happening. The whole world is still arguing about what to call it. I will keep it simple. It is intelligence. Nobody who has worked beside it can honestly deny that. And it is made of zeros and ones. So I call it what it is: <strong>Binary Intelligence</strong>.
              </p>
              <p className={s.seamHighlightQuote}>
                For twenty years I said all I needed to walk into any company and make serious outcomes happen was one man, a laptop, and an internet connection. Today I say it differently: <strong>one man and a context window.</strong> The same context window I am working in right now serves the CEO exactly as well as it serves the operator on Packaging Line 2. The great equalizer is here. Ain&rsquo;t that something?
              </p>
            </div>

            <p className={s.heroLead}>
              Across fifty-plus enterprise implementations over twenty-some years, the people I have worked beside wanted to do good work. The craft never exhausted them. The runaround did. A meeting exists because two systems don&rsquo;t talk. A handoff lives in somebody&rsquo;s inbox. A folded spreadsheet rides on a clipboard because the official screen does not match the physical floor. We are talking about people&rsquo;s livelihoods, their pride in their craft, and their quality of life at work. One belief has carried me through all of it: <strong>happy people and happy systems build each other.</strong>
            </p>
            <p className={s.heroLead}>
              Right now every one of us is trying to figure out how to work with this new reality, a new way of understanding, building, and creating with Binary Intelligence. Three years ago I closed the laptop chapter of my career and went to work inside the context window. Thousands of hours of it, building the software instead of implementing someone else&rsquo;s. The first lesson was humbling. <strong>Without clear workflows, reconciled data, and honest boundaries, agents fall into the same trap as legacy software:</strong> a confident green summary sitting on top of quietly broken state. I knew that screen. I had spent twenty years reading it on the plant floor.
            </p>
            <p className={s.heroLead}>
              <strong>This page is my notebook. Three connected chapters of one continuous story, and the doorway into{" "}
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
                  className={`${s.triadCard} ${isExpanded ? s.triadCardExpanded : s.triadCardCollapsed}`}
                  id={`collective-${topicSlug(c.title)}`}
                >
                  {/* HEAD: spot + chapter label + title + subtitle (height-locked across the 3 columns) */}
                  <div className={s.triadCardHead}>
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
                  </div>

                  {/* LEAD: the two balanced lead-in paragraphs (always visible), plus the rest when expanded */}
                  <div className={`${s.triadCardLead} ${isExpanded ? s.triadExpandedProse : ""}`}>
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

                  {/* Expanded View: Quote + Full Field Notes + Next Chapter Handoff */}
                  {isExpanded && (
                    <div style={{ marginTop: "22px" }}>
                      {c.titanQuote && (
                        <div className={s.triadExpandedProse}>
                          <div style={{ marginTop: "20px", marginBottom: "6px" }}>
                            <span className={s.triadSectionTag}>{titanQuoteTag(c.titanQuote)}</span>
                          </div>
                          <TitanQuoteBlock quote={c.titanQuote} />
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

                  {/* FOOT: bottom-locked cluster — quote bubble, INSIDE THIS CHAPTER preview, Read button, action bar.
                      margin-top:auto pins this cluster to the card bottom so it lines up across all three columns. */}
                  <div className={s.triadCardFoot}>
                    {!isExpanded && (
                      <>
                        {c.titanQuote && (
                          <div className={s.triadQuoteSlot}>
                            <span className={s.triadSectionTag} style={{ marginBottom: "6px" }}>
                              {titanQuoteTag(c.titanQuote)}
                            </span>
                            <TitanQuoteBlock quote={c.titanQuote} />
                          </div>
                        )}

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
                              <div className={s.triadNotePreviewTitle}>{fn.title}</div>
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
                <strong>Learn through the work</strong> is where I put these field observations into words. <strong>The Collective</strong> is the place I am building toward to compare notes, examine the workshop behind this work, and let what people and agents learn become useful for the next person, while each company keeps its own direction and control.
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
              For people who live close to the work, whether on the plant floor, in planning or Finance, in operations leadership, or building with agents. If you want to share an exception your systems don&rsquo;t capture, a place where two sets of numbers disagree, or a lesson from your own trip into the house of mirrors, send me a note. I read every message myself, and we can compare notes directly.
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
                    : "Your note was safely recorded. Direct email notification is unconfirmed on this environment. Write robert@idigdata.com directly if you need a same-day response."}
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
                    Topic <span style={{ fontWeight: 400, color: "var(--muted)" }}>(Optional, preselected when clicking from a chapter)</span>
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
