---
title: "The Application Layer: Workflows, Agentic Champions, and the Controversial ERP Question"
date: 2026-10-10
slug: the-application-layer
description: "Why Salesforce is right about workflows, why agentic champions need an enterprise framework, and why the enterprise will build its own ERP."
topic: "Architecture & Systems"
---

# The Application Layer: Workflows, Agentic Champions, and the Controversial ERP Question

For thirty years, the enterprise software industry has operated on a single, unchallenged theological doctrine:

> *"Never, under any circumstances, build your own ERP. You must buy SAP, Oracle, Microsoft Dynamics 365, or NetSuite. The books are sacred. Compliance is too complex. Buy the platform, hire a Big-4 systems integrator, and conform your business to the software."*

Over twenty years, across 50+ enterprise implementations and 15 enterprise transformations at scale, I lived on the front lines of that doctrine. I watched companies spend $20 million, $50 million, sometimes $100 million buying into that promise. 

And in every single case, the exact same story unfolded:
The business spent three years and millions in change orders heavily customizing the software to match how they actually operated. The custom code turned the monolith into a brittle black box that could never be upgraded. And on the plant floor, in the warehouse, and across daily scheduling, **the real business still ran on Mary's spreadsheets and shadow databases.**

Today, we are in the middle of a massive new technology wave. Silicon Valley claims "autonomous AI agents" will solve this by wrapping conversational chat around legacy systems.

They are missing the plot. But Salesforce—surprisingly—has touched on something real. 

To understand where enterprise agentics is actually going, you have to look at the world of workflows, the rise of "agentic champions," the growing frontline rebellion against SaaS bloat, and the most controversial question in enterprise computing today:

**Can an enterprise build its own ERP?**

---

## 1. Where Salesforce Has a Point: Workflows Over Chatbots

Let's give credit where credit is due: Marc Benioff and the Salesforce team have made a direct, necessary callout.

When Salesforce launched Agentforce at Dreamforce, Benioff took direct aim at the first wave of enterprise AI: *"Copilot is really the new Microsoft Clippy... DIY AI is a science project. What matters isn't the model—it's the metadata and the workflows."*

**He is completely right.**

The technology industry spent two years trying to convince business leaders that an LLM in a browser sidebar was the future of work. It isn't. Enterprise work is not conversational trivia. Enterprise work is **consequential action**:
- Allocating $400,000 of constrained raw materials across competing plant lines.
- Committing a legally binding purchase order to an international supplier.
- Executing an inventory movement that triggers excise tax and customs reporting.
- Reconciling multi-currency accounts receivable against disputed bank settlements.

You cannot prompt a chatbot to do that. An LLM generating probabilities in a vacuum will hallucinate an inventory reservation or approve an un-vetted discount at machine speed.

Salesforce understands that consequential work requires **workflows**: structured triggers, data context, metadata boundaries, security rules, and state transitions.

Where Salesforce and the enterprise SaaS oligopoly diverge from operational reality is the perimeter:
Salesforce believes the entire enterprise should live inside their proprietary cloud walled garden—charging $500 per user per month, plus consumption fees per conversation, while expecting your entire operational core to bend to their schema.

In the real world, the enterprise is a brownfield archipelago. A CRM does not run a bottling line. It does not manage cellar tank clean-in-place cycles. It does not control AS/400 warehouse racks. 

The value is in the workflow—but the enterprise cannot surrender its operational sovereignty to a single vendor's toll booth.

---

## 2. The "Agentic Champions" Phenomenon & The Missing Framework

Pick up any recent industry rag—Gartner, Forrester, TechCrunch, CIO.com—and you will encounter the latest enterprise buzzword: **"Agentic Champions."**

The premise is straightforward: inside every organization, there are forward-thinking domain experts, operational analysts, system administrators, and frontline engineers who are the ideal builders. They understand the tribal logic of the business. They know where the handoffs break. Armed with modern AI developer tools, they don't want to wait 18 months in an IT backlog queue to automate a three-way invoice reconciliation. They want to build workflows now.

They are right to want this. The enterprise must take direct responsibility for its own workflows.

**But here is the hard truth: you cannot unleash agentic champions without an Agentic Enterprise Framework.**

Without a rigorous framework, enterprise agentics rapidly degenerates into high-risk chaos:
- **Uncontrolled Token Spend & Invoice Jump Scares**: An enthusiastic team connects an unbounded agent swarm to an internal API; an unhandled exception triggers a recursive query loop that racks up $30,000 in model token charges over a weekend.
- **Un-Audited State Mutation**: An agent modifies inventory records across two systems without an immutable transactional boundary, corrupting the physical-to-digital balance.
- **Security & Schema Drift**: Prompts expose sensitive supplier pricing and personnel data to third-party model endpoints without provenance tracking.

The problem is not the ambition of the champions. **The problem is the absence of an industrial framework.**

To empower enterprise champions, organizations need deterministic scaffolding:
1. **State Isolation**: Every workflow runs in a self-contained runtime cell with explicit boundaries and instant rollback.
2. **Caller Gates & Authority Verification**: An agent can research, synthesize, and draft a transaction, but it cannot mutate state without explicit cryptographic or human sign-off.
3. **Deterministic Verifiers Over Chat Prompts**: Workflows are validated against strict AST calipers and database schemas, not conversational vibes.

When champions have a deterministic framework, they stop being rogue tinkerers and become sovereign software builders.

---

## 3. The Frontline Rebellion: SaaS Bloat and the TikTok Groundswell

While vendor keynotes celebrate seamless AI futures, a very different conversation is happening on the ground.

Open TikTok, Reddit (r/sysadmin, r/programming), or tech forums, and you will find an explosion of frontline frustration. Software engineers, junior sysadmins, and operational managers are openly rebelling against the absurdity of modern enterprise software:

- **The SaaS Seat Tax**: Enterprises paying tens of millions in recurring subscriptions for bloated platforms where 80% of the features are unused, while every basic API call, webhook, or workflow step is metered with additional consumption fees.
- **AI Demo Glamour vs. Production Reality**: TikToks dissecting the gulf between vendor stage demos (where an AI agent effortlessly fixes a supply chain hiccup in two clicks) and the reality on Monday morning (where the software crashes because a legacy SAP table had a null field).
- **The "Integrations Are Hell" Rant**: Frontline workers expressing exhaustion over spending their careers acting as "human API middleware"—manually copy-pasting data between five different enterprise applications because the vendor-promised integrations require a $250,000 consulting retainer to configure.

Workers are tired of paying for software that treats them as captive subscribers while failing to solve their everyday operational bottlenecks.

This groundswell is not cynical noise; it is an early tremor of a massive tectonic shift. 

Enterprises are waking up to the fact that they have outsourced their core operational intelligence to software vendors whose economic interest is to maximize complexity and lock-in.

---

## 4. The Controversial Question: Can the Enterprise Build Its Own ERP?

This brings us to the most controversial, high-stakes question in modern technology:

**Can a group of talented enterprise people build their own ERP?**

Mention this in a room of traditional CIOs or Big-4 consulting partners, and you will be met with immediate panic and fierce pushback:
- *"An ERP is the bedrock of the general ledger!"*
- *"What about GAAP, IFRS, and SOX compliance?"*
- *"What about multi-state sales tax, customs, and regulatory reporting?"*
- *"You will destroy the audit trail!"*

These objections are real. The financial books are the bedrock of the company. They must be trusted, immutable, and fully compliant with regulatory bodies.

**And yet, I am absolutely of the mind that enterprises will build their own ERPs.**

The legacy ERP giants—SAP, Oracle, Microsoft Dynamics 365, NetSuite—are at extreme jeopardy of this exact pivotal shift. 

Here is why:

### 1. The Core Patterns Are Already Solved
At its foundational computational level, an ERP is not black magic. It is a collection of well-known, battle-tested software patterns:
- **The Double-Entry General Ledger**: Credits, debits, immutable journal entries, and balance invariance (assets = liabilities + equity). This is basic computer science and deterministic math.
- **Order-to-Cash (O2C)**: A state machine governing orders, credit checks, reservations, fulfillment, shipping, and invoicing.
- **Procure-to-Pay (P2P)**: Requisitions, purchase orders, goods receipts, and three-way invoice matching.
- **Inventory Balance & Valuation**: Real-time ledgers tracking SKU lots, locations, costs (FIFO/LIFO/Average), and movements.

These patterns are well-documented, open, and mathematically deterministic. They do not require a $50 million proprietary codebase from 1994.

### 2. Specialized Pluggable Services for High-Churn Compliance
The hardest part of an ERP was historically the regulatory and tax churn: tracking thousands of municipal tax codes, customs rates, and changing payroll laws.

Today, that churn has been decoupled. You do not rely on your core ERP to compute sales tax; you plug in specialized tax engines like Avalara or Vertex via clean APIs. You do not write banking protocols from scratch; you connect to modern settlement APIs. 

The regulatory layer is pluggable; the operational core belongs to the business.

### 3. The Brownfield Customization Lie
The traditional justification for buying commercial ERP was that you were buying "standardized industry best practices." 

In reality, no mature company runs on standard templates. Every company has unique operational moats: how they blend ingredients, how they pack containers, how they route custom freight, how they schedule certified labor.

When you buy SAP or NetSuite, you spend 60% of your budget paying consultants to butcher the software with custom code so it accommodates your moat. You end up with a bespoke system anyway—except you don't own the source code, you can't inspect the database, you can't run local tests, and you pay a massive licensing tax for the privilege.

### 4. Common Frameworks & Agentic Assembly
With modern event-driven architectures, open schemas, and agentic build harnesses, a tight enterprise team—a CIO, a systems architect, and three talented domain builders—can assemble, verify, and run an operational ERP tailored exactly to how their business operates.

The patterns are already there. The frameworks are emerging. And the economics are indisputable.

---

## 5. Architectural Sovereignty: Owning the Core

This is what we mean by **Architectural Sovereignty**.

You do not achieve agility by replacing an on-premise monolith with a closed cloud monolith. You achieve agility by taking back ownership of your data core, your workflow definitions, and your delivery history.

At DigOps and FlowCraft, we structure this through **The Block**:
- **Bounded Engagements**: Fixed-duration, outcome-driven architectures that eliminate runaway consulting retainers.
- **The Sovereign Core**: Building company-owned data pipelines and workflow engines that run across your existing brownfield systems.
- **Deterministic Agentic Governance**: Equipping your internal champions with the runtime fences, caller gates, and test harnesses required to build safe, auditable enterprise workflows.

Salesforce is right: the future is workflows. 

The industry rags are right: agentic champions will drive the next wave. 

The TikTok engineers are right: the current SaaS tax is unsustainable.

And the enterprise will build its own operational core—because in an era of intelligent software machines, **the company that owns its workflows owns its destiny.**
