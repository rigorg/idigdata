---
title: "Chapter Two: Working with Intelligence — Humans and Agents Running the Workflows That Run the Business"
date: 2026-10-20
slug: the-application-layer
description: "Humans and Agents Running the Workflows That Run the Business — The ERP Conversation, the SaaS Killer, and One Person With a Context Window."
topic: "Chapter Two // The Operating Instance"
---

# Chapter Two: Working with Intelligence

*Humans and Agents Running the Workflows That Run the Business — The ERP Conversation, the SaaS Killer, and One Person With a Context Window.*

Pick up the story five minutes after go-live. The business still has to run. Purchase orders have to cut, receiving has to post, payroll has to clear, approvals have to route, and the month has to close. This is the **operating instance of the company**, where humans and agents work together inside the workflows that execute the actual transactions. For thirty years that meant renting the work back from software: twenty SaaS point solutions charging per-seat tolls, a monolithic ERP whose screens froze at go-live, and a seven-figure change order every time the floor changed. **This is the ERP conversation, and it is the SaaS killer.**

The alternative is **one person and a context window**, from the CEO to Mary on Packaging Line 2, working with agents directly on top of a reconciled data core and deterministic accounting rules. People and agents run the daily transactions together. When reality shifts on the floor, an operator proposes the change in plain language, a hard rule admits or refuses it, and the book remembers the outcome. The workflow and the book carry the memory of the business. The window is only the briefing.

---

## 1. The ERP Conversation, the Operating Instance & How Improvement Is Earned

For the last thirty years, enterprise software treated go-live as the finish line. The rollout was declared done, the screens froze in place, and the business kept changing, which pushed people straight back into spreadsheets, sporadic workarounds, and change orders. Worse, the software trained experienced operators to work like data-entry clerks, clicking through fifteen tabs and copying numbers from one window to another. The economics were just as rigid: per-seat licenses for twenty disconnected point solutions, renewal lock-in, and the company's own transaction data trapped behind each vendor's wall. The ERP conversation every CFO is now having is whether that model survives contact with intelligence that can read the purchase order, check the receipt against it, and draft the journal entry on its own. **I do not believe it does.**

What replaces it is not a chatbot bolted onto the old screens. It is an **owned, bounded operating instance of the business**:

- a clean, reconciled data core;
- a proven ledger with GAAP, three-way match, spending limits, and statutory controls enforced as **deterministic rules outside any model session**; and
- the daily transaction workflows running on top, where **people and agents do the work together**.

This is what I mean when I say the same context window serves the CEO and Mary on Packaging Line 2. **The caliber of intelligence is identical. Nobody gets the cheap version.** What differs is what each window is loaded with, what it is permitted to touch, and what it can change on its own, which is nothing. Mary's briefing carries Line 2's schedule, the history on her filling pump, and the rules of her role. The CEO's carries the consolidated close, the demand plan, and the allocation calls. Both can ask, reason, and propose in plain language. Neither window grants new spending or policy authority by itself.

That is why the most important distinction in the agentic era is one almost nobody talks about: **the difference between a context window and institutional memory.** The context window is a working briefing assembled for the judgment at hand. Institutional memory is the durable record—the workflow definitions, decisions, outcomes, and audit trail—that remains in the book after the session closes.

Working with intelligence inside a live operation means keeping three acts separate that usually get blurred together:
1. **Running** an established workflow in daily work,
2. **Proposing** a change when floor reality shifts, and
3. **Admitting** that change under the company's rules.

**Propose in language. Admit by rule. Remember in the book.** The operator knows her experience can improve how the workflow is designed. The CFO knows a plain-language request never becomes authority on its own.

An orchestrator is only as trustworthy as the loop it runs inside, and capturing an outcome does not automatically make a system smarter. A careless loop preserves a mistake and repeats it faster. Improvement is earned through a disciplined cycle (**01 Intent → 02 Define → 03 Deliver → 04 Outcome ↻**): people review the actual result against what was intended, test a proposed adjustment against operating rules, approve what holds up, and retain the evidence in the book.

There is a reason [Gartner projects](https://www.gartner.com/en/newsroom) that **more than 40% of agentic AI projects will be canceled by the end of 2027** due to unclear business value, escalating token costs, and inadequate risk controls. It is the same reason that this October at IFS Unleashed, in a fireside chat with IFS CEO Mark Moffat, Chamath Palihapitiya warned that enterprises deploying AI agents need to get their auditors in the room early. When I set out to build a workspace that holds up under audit, statutory controls, and real floor exceptions, I ran into a hard truth: **you cannot prompt or "vibe code" a system like that.** To give people a machine where they can safely run and improve their workflows, somebody has to build the machine that builds that machine.

> *"In the Agentic Enterprise, AI acts as an orchestrator, pulling together the right capabilities with the right context so that everything works in concert—people and AI achieving more than either could alone. What matters isn’t just the model—it’s the metadata, the business context, and the deterministic enterprise workflows."*
> — **Marc Benioff**, Chair & CEO, Salesforce ([*Dreamforce · The Agentic Enterprise*](https://www.salesforce.com/news/))

---

## 2. Note from the Field 02-A — Over a Beer with a Big-SI Executive: Can Agentics Build an Enterprise ERP?

> **NOTE FROM THE FIELD 02-A // DETERMINISTIC CONTROLS VS. FORCED HISTORY**
> Not long ago, I sat down over a beer with a close friend I respect—a senior executive at one of the major global system integrators for tier-one ERPs. We got into a spirited debate from opposite sides of the table. His point was serious and earned: tier-one ERPs encode thirty years and billions of dollars of statutory controls, GAAP consolidation, tax rules, and audit trails where a 99% probabilistic guess is a compliance failure. In his view, that regulatory moat guarantees that giant ERP vendors and massive SI programs will always own the core.
>
> Coming from the customer and operator side of the table after carrying 50+ transformations through cutover, I agreed with his premise on deterministic rules—and disagreed with his conclusion. You never ask a language model to improvise debits and credits or invent tax rules. Where the legacy ERP world has trapped companies is confusing *accounting math* with *forced history*—where the software only remembers the path its rigid screens allowed, not the path the business actually took on Mary's clipboard, and charges seven-figure change orders whenever your reality shifts. You keep authoritative financial books and required statutory controls in proven transaction systems, and enforce hard deterministic rules (double-entry invariants, 3-way match tolerances, lot traceability, and statutory validations) before any workflow change is admitted. The first workflows you build with agents are never the general ledger; they are the seams around the books—the unbolted pump, the item that will not scan, and the planning reconciliation.
> — Robert Paddock · Note from the Field 02-A (`OVER A BEER: ERP DEBATE`)

---

## 3. Note from the Field 02-B — The Approval Workflow Paradox

> **NOTE FROM THE FIELD 02-B // DESIGN EXPLORATION WITH REGIONAL LEADERS: THE APPROVAL WORKFLOW PARADOX**
> Recently, I sat in a working session with a group of regional business leaders who run real P&Ls, exploring how people will actually work with agents five minutes after a system goes live. Out of all the debates we had, one of the sharpest centered on something that sounds dead simple on paper: **approval workflows**. In a real company, approvals are never simple. Once you factor in dollar limits, departmental budgets, multi-entity rules, and temporary delegations, standard SaaS approval engines turn into a tangled mess—they are all "configurable," yet they always seem to require painful modifications.
>
> In that design session, we walked through how the dynamic changes when you separate proposing a change, authorizing it by rule, and recording the outcome:
> 1. **Propose in language** — instead of waiting on IT to rewire a routing tree, an authenticated leader states the requested delegation in plain language: *"Get me an approver from Department X—and while I’m on vacation next week, Sam from Finance will approve on my behalf."*
> 2. **Admit by rule** — the model that understood the sentence is never the thing that admits the action; a deterministic policy check verifies whether Sam is eligible under the authority matrix, dollar limits, and dates (and records a refusal outside the session if a rule is crossed).
> 3. **Remember in the book** — whatever happens, the decision, evidence, and rationale go into the durable record so Finance, audit, and operations all see the exact same trail.
> — Robert Paddock · Note from the Field 02-B (`APPROVALS & CONTEXT`)

---

*Giving people an operating instance where humans and agents run the transactions, and workflows are proposed in language and governed by hard rules, is the goal—so what does it take underneath to build the foundry that makes that real?*

---

### Continue Reading the Series
- ← Previous: **[Chapter One: How Businesses Actually Run — What’s Old Is New, What’s New Is Old](/agentic-ai/marys-sheet/)**
- → Next: **[Chapter Three: The Machine That Builds the Machines That Build the Workflows](/agentic-ai/the-delivery-seam/)**
