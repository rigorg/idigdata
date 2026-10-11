---
title: "Mary's Sheet & Polanyi's Paradox: The Unwritten Truth of Enterprise Operations"
date: 2026-10-10
slug: marys-sheet
description: "Why automated AI code generators fail without the unwritten operational truth buried in Mary's loading dock spreadsheet."
topic: "Domain Reality"
---

# Mary's Sheet & Polanyi's Paradox: The Unwritten Truth of Enterprise Operations

Every enterprise transformation begins in an air-conditioned boardroom with a pristine slide deck. 

The vendor outlines the happy path: modern cloud ERP, automated workflows, single-pane visibility, and instant transaction clearing. The project sponsors nod in unison. Ten million, twenty million, fifty million dollars are committed.

Sixteen months later, the cutover date arrives. The executive steering committee cuts the ribbon, flips the switch on the new system of record, and watches the loading dock grind to a dead halt.

Trucks back up down the interstate. Forklifts sit idling in the aisles. Shipments are quarantined in system purgatory. Why? Because the enterprise software captured the official operating procedure, but the actual enterprise runs on **Mary's Sheet**.

---

## 1. The Paradox of the Loading Dock

In 1966, chemist and philosopher Michael Polanyi formulated a deceptively simple observation that explains almost every enterprise IT catastrophe of the last forty years:

> *"We can know more than we can tell."*

This is **Polanyi's Paradox**. It describes the vast body of human tacit knowledge—the intuition, physical muscle memory, context-dependent judgments, and uncodified rules that guide real work. You know how to ride a bicycle, but you cannot write a mathematical formula that enables someone else to balance on two wheels. You recognize a familiar face in a crowd of thousands in milliseconds, but you cannot explain to an engineer the exact geometric tolerances of that recognition.

In industrial operations and enterprise supply chains, Polanyi's paradox is not an academic philosophy. It is physical reality.

Walk into any distribution center, manufacturing plant, or fulfillment hub with twenty or thirty years of operating history. In the corner of dock four, behind three monitors and stacks of clipboards, sits Mary. 

Mary does not have "Architect" or "Director of Supply Chain Optimization" on her badge. But Mary has been running that dock for eighteen years. And on Mary's desktop lives an Excel spreadsheet named `DOCK_MASTER_RECON_FINAL_v4_DO_NOT_DELETE.xlsx`.

That spreadsheet contains macros written in 2011, conditional formatting that turns purple when vendor lot codes mismatch, and seventeen custom tabs that handle the physical friction the ERP was never designed to perceive:
- Which suppliers consistently under-ship by 4% on hot days because pallet shrink-wrap stretches.
- Which carrier trailers have damaged rear roll-doors that cannot dock at bay 12.
- How to route split-pallet temperature-sensitive pharmaceuticals when the receiving cooler drops three degrees below target.
- Who to call at the customer's receiving office when a bill of lading is missing a customs seal on a Friday afternoon.

None of this operating logic exists in the corporate SAP instance. None of it is documented in the company's standard operating procedures. None of it was shared with the Big-4 consulting analysts who conducted ninety-minute process discovery interviews during Phase One.

The ERP documents the *stated reality*. Mary's spreadsheet manages the *actual reality*.

---

## 2. Why Generative AI Crashes into the Floor

Today, the technology industry is swept up in a new wave of breathless vendor claims: *Autonomous Software Factories*, *LLM Coding Droids*, *One-Prompt Custom Applications*.

The venture narrative argues that because large language models can generate 80% to 90% of syntactically valid code directly from requirements, enterprise systems integrators and packaged software suites will be rendered obsolete overnight. Simply point an agentic code generator at a Jira ticket or an operational handbook, and out comes an enterprise-grade application.

This thesis suffers from a fatal blind spot: **an AI agent can only synthesize what has been codified into tokens.**

If an operating rule exists only in Mary's head, or in an unshared macro running on an isolated desktop PC, no model on earth can prompt it into existence. When an autonomous coding factory generates software against documented corporate procedures, it builds a flawless, lightning-fast execution engine for a business that *does not exist*.

The generated code executes the theoretical happy path with terrifying speed:
- It automatically marks shipments received without verifying physical pallet stability.
- It auto-matches purchase orders while ignoring unwritten trade discount rebates.
- It triggers automated supplier re-orders based on corrupted master data.

When you automate a broken or incomplete process at high velocity, you do not achieve digital transformation. You achieve **automated operational chaos**.

---

## 3. Stated Reality vs. Actual Operational Truth

Over twenty years and more than fifty enterprise system implementations—fifteen enterprise transformations at scale—I have watched this exact pattern repeat across four technological generations: Client/Server, Dot-Com, Cloud ERP, and now Agentic AI.

The fatal mistake is always the same: mistaking the executive slide deck for shop floor reality.

In every enterprise, there are two distinct operating systems:

```
+-------------------------------------------------------------+
|                      STATED REALITY                         |
|   Official Org Charts · Vendor Slide Decks · SAP Blueprints |
|                 "The 20 Implementation Champions"           |
+-------------------------------------------------------------+
                               |
                               |  THE REALITY GAP
                               |  (Unmapped Exceptions & Tribal Rules)
                               v
+-------------------------------------------------------------+
|                      ACTUAL REALITY                         |
|   Mary's Loading Dock Sheet · Shadow Access DBs · Hotfixes   |
|                 "150 People Across 25 Task Forces"          |
+-------------------------------------------------------------+
```

When enterprise software vendors sell to C-suites, they sell to *Stated Reality*. They promise that adopting the "vanilla industry standard template" will align the business with world-class practices. 

In practice, standardizing on generic templates does not improve the business—it erases the proprietary operational workarounds that constitute the company's real commercial moat. And to prevent total operational collapse after go-live, frontline workers quietly create shadow spreadsheets to keep goods moving off the dock.

The dirty secret of enterprise IT is that **the global supply chain runs on shadow spreadsheets.**

---

## 4. The B.O.S.S. Protocol: Unearthing the Tacit Truth

If you want to build durable, self-healing agentic systems that actually work in production, you cannot start with prompt engineering or code generation. You must start by discovering and codifying tacit operational reality.

At DigOps and FlowCraft, we developed the **Business Operating System Specification (B.O.S.S.)** to solve this exact problem before writing a line of code.

The B.O.S.S. protocol enforces three non-negotiable disciplines:

### 1. Sit with Mary on the Dock
You do not discover operational reality in a conference room over catered lunch. You discover it by standing in steel-toed boots on the receiving dock at 6:30 AM, watching how physical exceptions are actually routed when the scanner beeps red. You find Mary, you review her spreadsheet line by line, and you listen to why she built each workaround.

### 2. Map the Exception Seams
Eighty percent of enterprise value is created in exception handling. Anyone can automate a clean, standard transaction. The test of an enterprise system is how it behaves when the barcode is torn, the manifest is short, and the supplier has gone bankrupt. We map every unwritten exception gate into explicit decision records.

### 3. Translate Tacit Truth into Verifiable Runtime Fences
Once tacit rules are excavated, we don't dump them into a sprawling, unconstrained prompt for an LLM to guess at. We translate them into **deterministic boundary fences**:
- Hard state machines that require human verification before ledger commitment.
- Immutable audit checkpoints that preserve operational context across handoffs.
- Isolated execution cells that prevent rogue agent retries from polluting production master data.

---

## 5. The Real Future of Enterprise Agentics

The future of enterprise software does not belong to external coding factories that generate disposable code from slides. Nor does it belong to twenty-year-old monolithic ERP suites that force living businesses into rigid templates.

The future belongs to **sovereign, operator-governed agentic runtimes**: systems that respect the human beings who run the floor, capture the tacit wisdom accumulated over decades of operational battle, and wrap that wisdom in disciplined, auditable software that people can understand, trust, and steer.

Building syntax has become cheap. Anyone with an API key can prompt a model to write code.

**Operational architecture has never been more expensive.**

At DigOps, we map these exception seams into bounded execution scopes within [The Block](/block/)—ensuring agentic software serves the business rather than creating operational chaos.

Before you prompt your next agent, walk down to the dock. Find Mary. Look at her sheet. That is where your transformation actually begins.
