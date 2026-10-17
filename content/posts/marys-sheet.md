---
title: "Mary's Sheet & Why 70% of ERPs Miss Expectations"
date: 2026-10-10
slug: marys-sheet
description: "Why over 70% of ERP initiatives fail to fully meet their business-case goals—and why layering agentics on top of enterprise systems still starts with people, data, systems, and workflows."
topic: "Field Dispatch 01 // Why 70% of ERPs Miss Expectations"
---

# Mary's Sheet & Why 70% of ERPs Miss Expectations

Across the industry, [Gartner predicts](https://www.gartner.com/en/documents/5697891) that **more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals**. Too many of them begin the exact same way: in an air-conditioned boardroom with a pristine slide deck.

The vendor outlines the happy path: modern cloud systems, automated workflows, single-pane visibility, and instant transaction clearing. The steering committee nods in unison. Ten million, twenty million, fifty million dollars are committed.

When a program treats transformation as a software install rather than aligning **people, data, systems, and workflows**, the cutover date arrives and collides with the physical plant floor.

Why? Because the enterprise software captured only the official, sanitized operating procedure—while the day-to-day operation still depends on **Mary's Sheet**. And today, as companies rush to layer agentics on top of their enterprise stack, it is the **exact same problem**: people, data, systems, and workflows.

---

## 1. Why 70% of ERPs Fall Short—And Why Agentics Sits on the Same Foundation

In the emerging conversation around enterprise AI and software delivery, **8090** and plant-floor operators alike point to the chasm between **Stated Reality** and **Actual Reality**: much of a company's real operating logic lives in unwritten parameters, exception handling, and frontline habits that automated database scrapers never see.

When over 70% of enterprise ERP programs struggle to realize their business-case goals, it is rarely a failure of computational horsepower or database bandwidth. Putting AI agents on top of disconnected systems does not magically fix that gap—it simply accelerates whatever foundation is underneath.

The breakdown happens because enterprises are fractured into disparate information silos. Each department maintains its own partial view of the world: supply chain looks at forward forecasts, brewing looks at fermentation kinetics, packaging looks at line speed, and finance looks at cleared invoices. Without a unified, company-owned common data model connecting **people, systems, and workflows**, frontline supervisors bridge the gap by hand.

Traditional software projects try to paper over these fractures by formalizing Standard Operating Procedures (SOPs). But SOPs describe how an organization *wishes* it functioned on its best day. Stated reality is the sanitized diagram on the corporate intranet.

**Actual reality is what happens when a packaging pump fails at 2:00 AM on a Friday before a holiday weekend.**

Actual reality lives in the unwritten parameters, the cross-department handoffs, and the frontline judgment of operators who know where the official software has blind spots.

---

## 2. Thirty Years of Tribal Truth on the Plant Floor

To illustrate how this plays out on the floor, consider **Mary**—a composite portrait drawn from frontline schedulers and plant coordinators across multi-facility brewing and manufacturing operations.

Every morning at 6:30 AM, Mary arrives on the floor with a green metal clipboard holding three tightly folded 11x17 ledger spreadsheets.

Those sheets capture the unwritten operating core of the facility:
- Which operators hold active pasteurizer or centrifuge certifications.
- Which crew members need light-duty or rotational assignments on a given shift.
- How overtime balances and shift rotations affect line coverage.
- Which packaging crew works best together on tight line changeovers.
- The operational coordination with the cellar team when a tank requires extended caustic wash cycles between specialty runs.

Mary acts as the human node holding together the multi-variable puzzle of production scheduling, maintenance windows, and quality compliance.

Through multiple enterprise software generations, spreadsheets like Mary's outlast official systems of record whenever the software ignores how the floor actually runs.

---

## 3. The Maintenance Exception: What Data Never Picks Up

The fundamental limitation of pure data engineering and unsupervised coding agents is rooted in **Polanyi's Paradox**:

> *"We know more than we can tell."*
> — Michael Polanyi, *The Tacit Dimension*

Data can be organized, stored in warehouses, indexed in vector stores, and visualized on executive monitors. But data only records transactions that have already been entered. **Data cannot pick up what lives unrecorded between the seams.**

As code generation accelerates, enterprise value concentrates in the physical operational seam. An AI agent in a data center can query database records and declare packaging line 2 "idle and green." It cannot walk the concrete floor, see a maintenance crew inspecting a weeping mechanical seal, or read a note on a maintenance bench before the work order is keyed into the terminal.

Consider how a typical floor exception unfolds in this composite scenario:
1. The maintenance system still shows packaging line 2 as "idle and available."
2. The scheduling engine sees an open production slot and routes a rush order of seasonal ale to line 2.
3. In the database, the workflow clears with a green checkmark.

On the physical floor, line 2 is down for a seal replacement that hasn't been logged at the terminal across the building yet.

The schedule collision is caught because Mary walks past maintenance on her morning rounds, sees the pump on the bench, knows the rush order is coming, and coordinates across teams:
- She aligns maintenance and packaging on the realistic window.
- She re-routes the rush run to an available line before brewing transfers the batch.
- She assigns certified operators to cover the changeover.

> **SEAM LOG 01-A // ILLUSTRATIVE FLOOR COMPOSITE: THE CLIPBOARD VS. THE DATABASE**
> Picture the multi-million-dollar enterprise software reporting packaging line 2 as green, idle, and ready—while twenty feet away on the physical floor, mechanics have unbolted a filling pump to replace a weeping seal before logging the ticket at the terminal.
>
> No AI agent scraping databases alone can catch an unlogged physical exception. Only floor visibility, connected operational workflows, and cross-department coordination prevent a costly mistake.

**No AI agent scraping database records alone could catch that.** Only human presence, connected floor workflows, and cross-department trust close the gap.

```
STATED ENTERPRISE (DATABASE)
- Status: Green / Line 2 Idle
- Schedule: 911 Rush Batch Ready
- ERP Record: All Systems Clear
          |
          v
ACTUAL OPERATING FLOOR
- Pump Unbolted 20 Minutes Prior
- Weeping Mechanical Seal Failed
- Note on Maintenance Bench
          |
          v
THE OPERATIONAL SEAM (COMPOSITE SCENARIO)
- Mary's Clipboard & Floor Presence
- Rush Batch Re-Routed Before Transfer
- Illustrative Example: 4,000 Gal. Saved
```

---

## 4. "You're Going to Have More Important Things to Do, Mary"

Continuing this composite scenario into cutover—as automated operational scheduling replaces the daily spreadsheet shuffle—captures a human moment that recurs across nearly every plant-floor transformation. Mary walks into the office without her green metal clipboard. For thirty years, that clipboard had been an extension of her arms. Without it, her hands look empty.

She sits down and voices the quiet fear shared by experienced coordinators everywhere:

> *"Well, I guess I'm going to lose my job and have nothing to do."*

That sentence carries the weight of every enterprise transformation that ever failed its people.

For three decades, coordinators like Mary carry the operational weight of the facility on their shoulders. If a rest cycle is miscalculated, an expired certification is missed, or an informal note from the cellar is overlooked—packaging lines stall and the coordinator takes the hit. 

When experienced operators spend decades serving as human middleware—hunched over paper ledgers for hours a day, transcribing shift codes, and firefighting exceptions—it is natural to feel that clerical exhaustion is their security.

The response that matters most at cutover is simple:

> *"You're going to have more important things to do, Mary."*

When software takes over the deterministic rules—the certification matching, the overtime constraints, the live feeds between tank status and packaging lines—it does not eliminate frontline leaders. It liberates them.

Instead of spending the day reconciling spreadsheets, an experienced coordinator's work shifts from clerical firefighting to operational leadership:

- **Mentoring the Next Generation**: Taking younger supervisors under their wing and teaching what no standard operating procedure codifies: how cellar and packaging teams communicate under pressure, which crews handle tight line changeovers best, and how the plant adapts when production spikes.
- **Walking the Floor with Presence**: Instead of racing against the shift whistle with a pencil and eraser, walking the packaging bays and cellar decks—noticing mechanical issues early, speaking with mechanics before teardowns begin, and spotting fatigue before it becomes a safety incident.
- **Protecting Frontline Standards**: Ensuring rotational assignments are handled fairly, operators advance through certifications, and physical floor realities are represented clearly.

That is the real test of enterprise software. 

> **SEAM LOG 01-B // ILLUSTRATIVE FLOOR COMPOSITE: HUMAN ELEVATION**
> When software is built around how the floor actually works—absorbing the hours of clerical data re-entry required to reconcile ERP blind spots—frontline coordinators aren't displaced. They are elevated.
>
> Instead of clerical reconciliation, they can spend their mornings walking the floor, mentoring younger supervisors, and solving cross-department bottlenecks before they happen. That is the goal of the operational seam: technology that takes the clerical weight off human shoulders so human expertise and leadership can lead.

Bad software treats people as disposable data conduits—and stumbles when uncodified reality hits the floor. Good operational architecture absorbs the clerical machinery so the people on the floor can exercise judgment, build trust, mentor others, and lead.

```
CLERICAL ABSORPTION (SYSTEM)
- Deterministic Rule Processing
- Cross-System Data Sync
- Certification & Rest Logic
- Real-Time Tank Telemetry
          |
          v
HUMAN ELEVATION (OPERATOR)
- Walk the Packaging Floor
- Mentor Next-Gen Supervisors
- Spot Maintenance Issues Early
- Lead Cross-Team Coordination
```

---

## 5. Why Generative AI and "Coding Droids" Crash Into the Plant Floor

Today, the technology industry is swept up in another wave of breathless claims: *Autonomous AI Agents*, *LLM Coding Droids*, and *Zero-Human Software Factories*.

The narrative claims that because frontier models can generate syntactically valid code from text prompts, enterprise systems and operational architects are obsolete. Point an agent at an API or documentation, and the agent will run the company.

This thesis suffers from the exact same blind spot that undermined monolithic ERPs: **an AI agent can only execute on rules and context that have been captured and structured.**

When an autonomous agent builds software solely against sanitized operating procedures, it builds an execution engine for an idealized version of the business.

The AI will schedule an operator for a changeover because the personnel system says they are on shift—unaware that the operator's pasteurizer certification expired yesterday, or that the CIP sanitation crew is still running caustic rinse through tank 14.

When you automate an incomplete model of reality at machine speed, you don't achieve digital transformation. You create **automated operational friction**.

---

## 6. Three Principles of the Operational Seam

Enterprise agentics succeeds by building governed runtime scaffolding around the people who run the operation:

1. **Walk the Floor Before Writing Code**: You do not discover operational reality in a conference room alone, and you do not discover it through automated database introspection alone. You discover it on the floor, watching how physical exceptions are handled when a pump fails or an ingredient is delayed. You understand why the spreadsheets exist.
2. **Preserve the Human Connection Fabric**: A dashboard can display throughput; it cannot replace cross-department coordination when a line mechanic pulls a pump while a rush schedule change is underway. Map tacit judgment, exception handoffs, and decision boundaries explicitly.
3. **Build Governed Workflow Blocks, Not Unbounded Chatbots**: Once tacit rules are understood, translate them into structured workflow blocks with clear state rules, human authorization gates, and company-controlled data custody.

---

### The Operational Trilogy
**Field Dispatch 01 // Mary's Sheet & Why 70% of ERPs Miss Expectations**: Uncovering the unwritten reality of Mary's sheet is the first step. Once you capture how work actually happens on the floor, you confront the next operational question: what happens when people are directly empowered with agents.

→ Continue to **[Field Dispatch 02: People and Agents at Work: Empowered Workflows & The Sovereign Substrate](/agentic-ai/the-application-layer/)**
