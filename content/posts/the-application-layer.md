---
title: "Chapter Two: Working with Intelligence — Where People Run, Propose, and Govern Workflows"
date: 2026-10-20
slug: the-application-layer
description: "Where People Run, Propose, and Govern Workflows — Living Memory, the Context Workspace, and Decisions That Stay in the Book."
topic: "Chapter Two // Memory & The Runtime Workspace"
---

# Chapter Two: Working with Intelligence

*Where People Run, Propose, and Govern Workflows — Living Memory, the Context Workspace, and Decisions That Stay in the Book.*

Pick up the story five minutes after go-live. Most business leaders and operators do not want to live inside a software foundry. They don't want to manage deployment pipelines or build the machine that builds the machines. They want to be **in the machine—working with intelligence on top of data they trust.**

In the agentic era, the most important distinction is one almost nobody talks about: **the difference between a context window and institutional memory.** A context window is a working briefing, not the system of record: it is assembled for the judgment at hand, while institutional memory is the durable record—the decisions, the outcomes, and the audit trail—that remains in the book after the session closes.

---

## 1. Running, Proposing, and Authorizing — And How Improvement Is Earned

For the last thirty years, enterprise software treated go-live as the finish line. Once the initial rollout was declared finished, the screens froze in place while the business kept changing—forcing people right back into spreadsheets, sporadic workarounds, and seven-figure change orders. Worse, software trained experienced operators to work like data-entry clerks: clicking through fifteen tabs and copying numbers from one window to another.

Working with intelligence inside a live operation requires separating three distinct acts that often get blurred together:
1. **Running** an established workflow in daily work,
2. **Proposing** a change when floor reality shifts, and
3. **Authorizing** that change under the company's rules.

An operator knows their experience can improve how the workflow is designed; a CFO knows that a plain-language request in a workspace never grants new spending or policy authority on its own.

And capturing an outcome does not automatically make a system smarter—a careless loop can preserve a mistake and repeat it faster. Improvement is earned through a disciplined cycle (**01 Intent → 02 Define → 03 Deliver → 04 Outcome ↻**): people review the actual result against what was intended, test a proposed adjustment against operating rules, approve what holds up, and retain the evidence in the book.

When I set out to build that kind of workspace so it holds up under audit, statutory controls, and real floor exceptions, I ran into a hard truth: **you cannot prompt or "vibe code" a system like that.** To give people a machine where they can safely run and improve their workflows, somebody has to build the machine that builds that machine.

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

*Giving people a workspace where workflows can be run, proposed, and governed by hard rules is the goal—so what does it take underneath to build the foundry that makes that real?*

---

### Continue Reading the Series
- ← Previous: **[Chapter One: How Businesses Actually Run — What’s Old Is New, What’s New Is Old](/agentic-ai/marys-sheet/)**
- → Next: **[Chapter Three: The Machine That Builds the Machines That Build the Workflows](/agentic-ai/the-delivery-seam/)**
