"use client";

import React, { useState } from "react";
import Link from "next/link";
import s from "./CollectiveView.module.css";

function EnterpriseHiveSpot() {
  return (
    <svg viewBox="0 0 120 120" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="plateDotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.8" fill="#DDD7C8" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#plateDotGrid)" />
      <g stroke="#9E7D3B" strokeWidth="1.2" fill="#FAF6EE" strokeLinejoin="round">
        <polygon points="60,48 70,54 70,66 60,72 50,66 50,54" fill="#F4EFE5" stroke="#1E2024" strokeWidth="1.5" />
        <polygon points="60,26 70,32 70,44 60,50 50,44 50,32" />
        <polygon points="79,37 89,43 89,55 79,61 69,55 69,43" />
        <polygon points="79,59 89,65 89,77 79,83 69,77 69,65" />
        <polygon points="60,70 70,76 70,88 60,94 50,88 50,76" />
        <polygon points="41,59 51,65 51,77 41,83 31,77 31,65" />
        <polygon points="41,37 51,43 51,55 41,61 31,55 31,43" />
      </g>
      <circle cx="60" cy="60" r="2.5" fill="#9E7D3B" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="8" y1="8" x2="8" y2="16" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="104" y2="112" stroke="#9E7D3B" strokeWidth="0.8" />
      <line x1="112" y1="112" x2="112" y2="104" stroke="#9E7D3B" strokeWidth="0.8" />
    </svg>
  );
}

export default function CollectiveView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    interest: "collaborate",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sent" | "recorded">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInterestSelect = (type: "collaborate" | "build") => {
    setFormState((prev) => ({ ...prev, interest: type }));
    const el = document.getElementById("correspondence");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          company: formState.company.trim(),
          role: "Collective Collaborator",
          message: [
            `[THE COLLECTIVE // INQUIRY]`,
            `Topic: ${formState.interest === "collaborate" ? "Peer Collaboration & Shared Patterns" : "Enterprise Build Inquiry (Sovereign System)"}`,
            ``,
            formState.message.trim(),
          ].join("\n"),
          interestType: "applied_agentics",
          source: "website-collective",
          _hp: "",
        }),
      });

      const data = await res.json();
      if ((res.ok || res.status === 202) && data.ok) {
        setSubmitStatus(data.notification === "sent" ? "sent" : "recorded");
      } else {
        throw new Error(data.error || "Failed to send message. Please try again or reach out directly.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.page}>
      {/* Hero Section */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <p className={s.eyebrow}>AN OPEN BUILDER COMMONS // SOVEREIGN RUNTIMES</p>
            <h1 className={s.heroTitle}>
              The Collective is About the People<span>.</span>
            </h1>
            <p className={s.heroDek}>
              Builders, developers, operators, and curious minds slinging code with autonomous agents—discovering, failing, and succeeding together.
            </p>

            <div className={s.leadBody}>
              <p style={{ marginBottom: "14px" }}>
                Every human operator can now build and direct their own software assets. In this era, humans and autonomous software agents work together inside common, configurable frameworks.
              </p>
              <p style={{ marginBottom: "14px" }}>
                Genuine enterprise improvement is an active human-agent learning loop: operators bringing their domain expertise and local iron to test, adapt, and deliver real outcomes on the shop floor.
              </p>
              <p style={{ marginBottom: "18px" }}>
                <strong>The operating rule is voluntary:</strong> Operators choose what to share. Other operators review and choose what to adopt. Business data and operational decisions stay strictly with their owners.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px", marginBottom: "20px" }}>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
                style={{ fontSize: "12px", padding: "10px 18px" }}
              >
                Join The Collective &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
                style={{ fontSize: "12px", padding: "10px 18px" }}
              >
                Discuss An Enterprise Build &rarr;
              </button>
              <Link
                href="/agentic-ai/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted)",
                  textDecoration: "underline",
                  padding: "10px 4px",
                }}
              >
                &larr; Read Agentic AI Field Theses
              </Link>
            </div>
          </div>

          <div className={s.heroVisual} aria-hidden="true">
            <div className={s.heroPlateFrame}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.plateInner}>
                <span className={s.plateTag}>THE COLLECTIVE • THREE INTERLOCKING SYSTEMS</span>
                <EnterpriseHiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>B.O.S.S.</strong>
                    <span>The Enterprise</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>FLOWCRAFT</strong>
                    <span>The Workflow</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>THE RIG</strong>
                    <span>The Factory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commons Learning Loop Bay */}
        <div className={s.heroBottomPlate}>
          <div className={s.commonsPlate}>
            <div className={s.commonsBar}>
              <span className={s.commonsTag}>THE JOINT HUMAN-AGENT LEARNING LOOP // COMMONS-01</span>
              <div className={s.commonsLive}>
                <span className={s.commonsLiveDot} />
                <span>SOVEREIGN IRON &bull; PATTERN COMMONS</span>
              </div>
            </div>

            <div className={s.commonsGrid}>
              {/* Col 1 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>01 // THE HUMAN SEAM</span>
                  <h3 className={s.commonsColTitle}>Operators, Builders &amp; Compute</h3>
                  <p className={s.commonsColText}>
                    Real people bringing their brainpower, plant-floor judgment, and private compute to the operational seam. Running on local iron in complete isolation: your data, your general ledger, your sovereignty.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>LOCAL IRON:</strong> Zero per-seat rent. Complete data custody.
                </div>
              </div>

              {/* Col 2 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>02 // THE SYNTHESIS LOOP</span>
                  <h3 className={s.commonsColTitle}>Humans + Autonomous Agents</h3>
                  <p className={s.commonsColText}>
                    Code building code. Humans and autonomous agents collaborating inside deterministic workflows: refining state machines, testing schemas, catching exceptions, and learning together through the zeros and ones.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>THE LEARNING LOOP:</strong> Not AI in a vacuum—a joint human-agent effort.
                </div>
              </div>

              {/* Col 3 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>03 // THE NETWORK EFFECT</span>
                  <h3 className={s.commonsColTitle}>The Pattern Commons</h3>
                  <p className={s.commonsColText}>
                    When an operator validates an edge-case ERP reconciliation or receiving pattern, they can choose to contribute that pattern back to the commons—allowing peer operators to review and adopt it.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>NETWORK EFFECT:</strong> Voluntary sharing compounding peer capability.
                </div>
              </div>
            </div>

            <div className={s.commonsBanner}>
              <p className={s.commonsBannerText}>
                <strong>Common Frameworks:</strong> Fully open source in spirit and architecture—configurable, sovereign, and severable, but tied back to a shared learning loop.
              </p>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
                style={{ padding: "10px 20px", fontSize: "12px", whiteSpace: "nowrap" }}
              >
                Join The Collective &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Three Systems */}
      <section className={s.systemsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>TWO ENTERPRISE BODIES OF WORK &amp; THE PATTERN COMMONS</p>
            <h2>An operator with a development shop<span>.</span></h2>
            <p>
              To make a collective work in practice, you need a deterministic stack. Two distinct, high-value enterprise software bodies of work, anchored by an open pattern commons.
            </p>
          </div>

          <div className={s.systemsGrid}>
            {/* System 1: B.O.S.S. */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>DOMAIN TRUTH &bull; COMMON DATA MODEL</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>Business Operating System Specification</div>
                <p className={s.systemBody}>
                  A unique, standalone body of enterprise work. Before touching a line of code, B.O.S.S. maps how the business actually runs: unwritten plant-floor judgment, Mary&rsquo;s edge-case scheduling spreadsheet, tacit SOPs, and cross-departmental exception rules. Most critically, B.O.S.S. synthesizes an authoritative, company-owned <strong>Common Data Model</strong> that bridges fragmented silos. Even before deploying autonomous agents, having an unambiguous common data model is one of the highest-leverage assets an enterprise can own.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>STANDALONE VALUE</span>
                <p className={s.systemUseCaseText}>
                  Domain truth &amp; common data model mapping. Exposes missing business rules, exception paths, and data silos before implementation.
                </p>
              </div>
            </div>

            {/* System 2: FlowCraft */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>OPERATIONAL RUNTIME &bull; OPERATOR SOVEREIGNTY</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>The Workflow Machine</div>
                <p className={s.systemBody}>
                  The live operational runtime. FlowCraft takes domain truth and executes it across an authoritative org and as many running firm instances as needed. It bridges legacy systems, databases, and autonomous agent swarms into composable workflow blocks. Crucially, FlowCraft honors <strong>total operator sovereignty</strong>: if an operator builds or improves a workflow—whether an ERP reconciliation or a dock-receiving state machine—it is entirely up to them whether they push that pattern back to the Collective or keep it private. Complete freedom.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Live multi-instance workflow orchestration. Runs composable workflow blocks with shared master data, state machines, and human authorization command.
                </p>
              </div>
            </div>

            {/* System 3: The Rig & Pattern Commons */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>SOFTWARE FACTORY &bull; THE LIVING COMMONS</span>
                <h3 className={s.systemTitle}>The Rig &amp; Commons</h3>
                <div className={s.systemSub}>The Machine That Builds the Machines</div>
                <p className={s.systemBody}>
                  The communal development shop and pattern commons. The Rig couples human operators with agentic build harnesses on local iron to fabricate living software assets. When connected to The Collective, the network effect ignites: workflow blocks updated in one org flow through to the other, through The Rig. The collective library compounds while your private data, ledgers, and transactions remain strictly within your operational boundary.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>NETWORK COMPOUNDING</span>
                <p className={s.systemUseCaseText}>
                  Asset fabrication &amp; cross-org pattern flow. Builds on local iron, pushing verified operational blueprints down across the collective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Architectural Principles // Sovereign, Severable, Communal */}
      <section className={s.flywheelSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>THE FOUNDATIONAL PRINCIPLES // KUMBAYA OF BUILDERS</p>
            <h2>Built for people. Grounded in the enterprise<span>.</span></h2>
            <p>
              Three core commitments govern the architecture: complete sovereignty on private iron, a joint human-agent learning loop, and a pattern commons where one success lifts everyone.
            </p>
          </div>

          <div className={s.flywheelGrid}>
            {/* Principle 1 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>01 // SOVEREIGN &amp; SEVERABLE</span>
                <h3 className={s.flywheelTitle}>Private Iron &amp; Built-In Factory</h3>
                <p className={s.flywheelText}>
                  Each enterprise org is self-contained and carries its own built-in development factory. Take an org and run it entirely on your own private iron—with complete data isolation, zero cloud locks, and zero SaaS per-seat taxes. If you ever choose to disconnect from the collective, your software runs uninterrupted.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>OPERATOR COMMAND</span>
                <p className={s.flywheelBoxText}>
                  Your compute, your database, your rules. Severable from day one without vendor entanglements.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>02 // JOINT LEARNING LOOP</span>
                <h3 className={s.flywheelTitle}>Slinging Zeros &amp; Ones Together</h3>
                <p className={s.flywheelText}>
                  The Collective is not a passive software package. It is an active learning community where operators, engineers, and curious minds sling code with autonomous agents. We test on real floor realities, discover together, fail together, and deliver real outcomes through deterministic workflows.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>HUMAN-AGENT SYNTHESIS</span>
                <p className={s.flywheelBoxText}>
                  Joint brainpower and local compute replacing the fantasy of zero-human automation.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>03 // THE NETWORK EFFECT</span>
                <h3 className={s.flywheelTitle}>One Success is Everybody&rsquo;s Success</h3>
                <p className={s.flywheelText}>
                  When one builder solves an edge-case ERP reconciliation, builds a custom freight variance checker, or refines a receiving state machine, that verified pattern flows to the commons. The entire network gets smarter and more resilient with every deployed workflow block.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>OPEN PATTERN COMMONS</span>
                <p className={s.flywheelBoxText}>
                  Shared patterns compound across all rigs while business records remain 100% private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Grounded Results / Practical Proof */}
      <section className={s.blueprintsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>OPERATIONAL BLUEPRINTS // INTENT = OUTCOME</p>
            <h2>Tested on operational patterns. Illustrative reference designs<span>.</span></h2>
            <p>
              The Collective is an applied operational lab. When domain mapping (B.O.S.S.), code fabrication (The Rig), and workflow execution (FlowCraft) work together, working sovereign systems take shape:
            </p>
          </div>

          <div className={s.blueprintsGrid}>
            {/* Practical Example 1 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>REFERENCE ARCHETYPE // FRONTLINE OPERATIONS</span>
              <h3 className={s.blueprintTitle}>Frontline Billing &amp; Work-Order State Machine</h3>
              <p className={s.blueprintText}>
                An automotive shop or specialty service business runs accounting on QuickBooks, but job tracking, mechanic schedules, parts ordering, and customer sign-offs live on whiteboards and text messages.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S.</strong> maps the shop&rsquo;s pricing tiers, labor rules, and bay scheduling invariants in days.</li>
                <li><strong>The Rig</strong> fabricates and verifies custom QuickBooks connectors and mobile work-order state machines.</li>
                <li><strong>FlowCraft</strong> executes the runtime—tracking bay throughput, notifying technicians, and updating QuickBooks.</li>
                <li><strong>Outcome:</strong> A working operational blueprint Dave&rsquo;s shop can own and evolve. Zero per-seat rent.</li>
              </ul>
            </div>

            {/* Practical Example 2 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>REFERENCE ARCHETYPE // MANUFACTURING &amp; SUPPLY</span>
              <h3 className={s.blueprintTitle}>Sovereign Purchasing &amp; Receiving System</h3>
              <p className={s.blueprintText}>
                A multi-facility producer struggles with purchase order exception loops, invoice variances, and slow dock handoffs, facing multi-million-dollar ERP consulting quotes to fix it.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S.</strong> codifies the unwritten receiving rules, freight variance tolerances, and 3-way match logic.</li>
                <li><strong>The Rig</strong> tests automated reconciliation agents against historical edge-case ledger records.</li>
                <li><strong>FlowCraft</strong> orchestrates human approvals and autonomous PO matching across warehouse and finance.</li>
                <li><strong>Outcome:</strong> A sovereign purchasing architecture with full audit trails, owned by the enterprise.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Two Doors of Interaction */}
      <section className={s.doorsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>TWO DOORS // ENTERING THE SEAM</p>
            <h2>How to take part<span>.</span></h2>
            <p>
              Whether you are a builder who wants to run a Rig and collaborate in the collective, or an enterprise looking for a working sovereign system.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Build Together */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>PATH 01 // OPEN COMMONS &amp; PEER COLLABORATION</p>
                <h3 className={s.doorTitle}>Join the Collective. Build with us.</h3>
                <p className={s.doorBody}>
                  For software builders, systems architects, and technical operators who want to build real enterprise agentics. Run a Rig on your own iron, explore open schemas, test local developer harnesses, and collaborate with us on verified, severable workflow blocks. We are looking for passionate builders to pull the pieces together, share our zeros and ones, and create something durable together.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
              >
                <span>Join the Collective &rarr;</span>
              </button>
            </div>

            {/* Door 2: Custom Build */}
            <div className={s.doorCard}>
              <div>
                <p className={s.doorEyebrow}>PATH 02 // SOVEREIGN ENTERPRISE BUILD</p>
                <h3 className={s.doorTitle}>Commission a sovereign system for your enterprise.</h3>
                <p className={s.doorBody}>
                  For business owners, operations leaders, and CIOs who need custom, production-grade agentic systems without multi-year ERP delays or runaway SaaS fees. We map your domain truth through B.O.S.S., fabricate your custom workflow blocks through The Rig, and deploy a turnkey FlowCraft org on your private infrastructure.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
              >
                <span>Discuss an Enterprise Build &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Direct Correspondence */}
      <section id="correspondence" className={s.formSection}>
        <div className={s.formBox}>
          <div className={s.formHead}>
            <p className={s.eyebrow} style={{ marginBottom: "6px" }}>DIRECT CORRESPONDENCE</p>
            <h3>Connect with the Collective<span>.</span></h3>
            <p>
              Send a note directly to Robert. Whether you are curious about running a local Rig or evaluating a sovereign enterprise system.
            </p>
          </div>

          {submitStatus !== "idle" ? (
            <div className={`${s.statusMessage} ${s.statusSuccess}`}>
              <strong>
                {submitStatus === "sent" ? "Message received and dispatched." : "Message recorded in custody queue."}
              </strong>
              <p style={{ margin: "6px 0 0 0" }}>
                Thank you for reaching out. Robert reads all correspondence personally and will follow up directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div className={`${s.statusMessage} ${s.statusError}`}>
                  {errorMsg}
                </div>
              )}

              <div className={s.formField}>
                <label htmlFor="name" className={s.fieldLabel}>
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. David Miller"
                  className={s.fieldInput}
                />
              </div>

              <div className={s.formField}>
                <label htmlFor="email" className={s.fieldLabel}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@company.com"
                  className={s.fieldInput}
                />
              </div>

              <div className={s.formField}>
                <label htmlFor="company" className={s.fieldLabel}>
                  Organization / Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. Acme Manufacturing or Independent Builder"
                  className={s.fieldInput}
                />
              </div>

              <div className={s.formField}>
                <label htmlFor="interest" className={s.fieldLabel}>
                  Primary Area of Collaboration
                </label>
                <select
                  id="interest"
                  value={formState.interest}
                  onChange={(e) => setFormState({ ...formState, interest: e.target.value as "collaborate" | "build" })}
                  className={s.fieldSelect}
                >
                  <option value="collaborate">Join The Collective // Open Source Collaboration &amp; Shared Patterns</option>
                  <option value="build">Commission a Sovereign System // Enterprise Build</option>
                </select>
                <p className={s.fieldHelp}>
                  {formState.interest === "collaborate"
                    ? "Collaborate on open schemas, test local developer harnesses, and build shared patterns."
                    : "Commission an enterprise-owned, private-iron operational system for your business."}
                </p>
              </div>

              <div className={s.formField}>
                <label htmlFor="message" className={s.fieldLabel}>
                  Your Message or Technical Focus
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about the operational problem you are solving, your technical setup, or what you would like to build together..."
                  className={s.fieldTextarea}
                />
              </div>

              <button type="submit" disabled={submitting} className={s.submitBtn}>
                {submitting ? "Transmitting..." : "Send Correspondence →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Reciprocal bridge back to Agentic AI */}
      <div style={{ textAlign: "center", padding: "40px 24px 20px", borderTop: "1px solid var(--line)" }}>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>
          Looking for the underlying operational theses?{" "}
          <Link href="/agentic-ai/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}>
            Read Dispatches from the Operational Seam &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
