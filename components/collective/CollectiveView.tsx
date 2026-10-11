"use client";

import React, { useState } from "react";
import Link from "next/link";
import s from "./CollectiveView.module.css";

export default function CollectiveView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    interest: "build",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInterestSelect = (type: "build" | "collaborate") => {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          source: "The Collective Storefront",
          topic: formState.interest === "build" 
            ? "Commission an Enterprise Agentic Build (Intent = Outcome)"
            : "Join The Collective // Peer Collaboration & Shared Patterns",
          message: formState.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again or reach out directly.");
      }

      setSubmitted(true);
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
          <p className={s.eyebrow}>SPEC-COL-01 // THE APPLIED AGENTIC COMMONS</p>
          <h1 className={s.heroTitle}>
            The Collective<span>.</span>
          </h1>
          <p className={s.heroDek}>
            Sovereign enterprise software. Built around how you actually work.
            Monolithic SaaS forces your business into someone else’s mold and taxes every seat.
            We build custom, company-owned operational software around your business—mapped in days,
            proven by test harnesses, and running on private iron. Run in isolation; grow through shared patterns.
          </p>

          {/* Architectural Diagram Bay */}
          <div className={s.specPlate}>
            <div className={s.specBar}>
              <span className={s.specTag}>ARCHITECTURE SPECIFICATION // SPEC-COL-01</span>
              <div className={s.specLive}>
                <span className={s.specLiveDot} />
                <span>SOVEREIGN NODE &bull; PATTERN COMMONS</span>
              </div>
            </div>

            <div className={s.diagramContainer}>
              <svg
                viewBox="0 0 960 480"
                className={s.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="The Collective Architecture: Sovereign Enterprise Iron connected to The Collective Pattern Commons"
              >
                {/* Background dot grid pattern */}
                <defs>
                  <pattern id="archGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="8" cy="8" r="0.75" fill="#DDD7C8" />
                  </pattern>
                  <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#9E7D3B" />
                  </marker>
                  <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E2024" />
                  </marker>
                </defs>

                <rect width="960" height="480" fill="url(#archGrid)" />

                {/* ========================================================
                    UPPER ENVELOPE: SOVEREIGN ENTERPRISE IRON
                    ======================================================== */}
                <rect x="40" y="24" width="880" height="268" rx="4" fill="#FAF6EE" stroke="#B8B0A0" strokeWidth="1.2" strokeDasharray="4 4" />
                
                {/* Envelope Corner Crosshairs */}
                <g stroke="#9E7D3B" strokeWidth="1">
                  <path d="M 34 24 L 46 24 M 40 18 L 40 30" />
                  <path d="M 914 24 L 926 24 M 920 18 L 920 30" />
                  <path d="M 34 292 L 46 292 M 40 286 L 40 298" />
                  <path d="M 914 292 L 926 292 M 920 286 L 920 298" />
                </g>

                {/* Envelope Tag */}
                <rect x="56" y="34" width="310" height="22" rx="2" fill="#EFE8D8" stroke="#DDD7C8" strokeWidth="1" />
                <text x="64" y="49" fill="#6C552F" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  SOVEREIGN ENTERPRISE PERIMETER // PRIVATE IRON
                </text>
                <text x="376" y="49" fill="#68645C" fontSize="10" fontFamily="monospace">
                  Zero Data Egress &bull; Absolute Privacy &bull; Local Execution
                </text>

                {/* Triad Connecting Vectors */}
                <g stroke="#DDD7C8" strokeWidth="1.5" strokeDasharray="2 2">
                  <line x1="480" y1="125" x2="250" y2="215" />
                  <line x1="480" y1="125" x2="710" y2="215" />
                  <line x1="250" y1="215" x2="710" y2="215" />
                </g>

                {/* Center Core: The Operational Seam */}
                <circle cx="480" cy="185" r="32" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1.5" />
                <circle cx="480" cy="185" r="26" fill="#F4EFE5" stroke="#DDD7C8" strokeWidth="1" />
                <text x="480" y="182" textAnchor="middle" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">OPERATIONAL</text>
                <text x="480" y="193" textAnchor="middle" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="700">SEAM</text>

                {/* Node 1: B.O.S.S. (North) */}
                <g transform="translate(370, 75)">
                  <rect width="220" height="66" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="220" height="4" fill="#9E7D3B" />
                  <text x="14" y="22" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">DOMAIN TRUTH &amp; SCHEMAS</text>
                  <text x="14" y="40" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">B.O.S.S.</text>
                  <text x="14" y="55" fill="#68645C" fontSize="10" fontFamily="sans-serif">Rapid domain mapping &amp; unwritten rules</text>
                </g>

                {/* Node 2: THE RIG (Southwest) */}
                <g transform="translate(140, 185)">
                  <rect width="220" height="66" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="220" height="4" fill="#1E2024" />
                  <text x="14" y="22" fill="#68645C" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">AUTONOMOUS SOFTWARE FACTORY</text>
                  <text x="14" y="40" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">The Rig</text>
                  <text x="14" y="55" fill="#68645C" fontSize="10" fontFamily="sans-serif">Local 13-cell pipeline &amp; test harnesses</text>
                </g>

                {/* Node 3: FLOWCRAFT (Southeast) */}
                <g transform="translate(600, 185)">
                  <rect width="220" height="66" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="220" height="4" fill="#9E7D3B" />
                  <text x="14" y="22" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">OPERATIONAL RUNTIME</text>
                  <text x="14" y="40" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">FlowCraft</text>
                  <text x="14" y="55" fill="#68645C" fontSize="10" fontFamily="sans-serif">Human-agent execution &amp; live state</text>
                </g>

                {/* ========================================================
                    CONDUIT: BIDIRECTIONAL PATTERN FLOW
                    ======================================================== */}
                <g stroke="#9E7D3B" strokeWidth="1.5">
                  <line x1="450" y1="292" x2="450" y2="352" strokeDasharray="3 3" markerEnd="url(#arrowDown)" />
                </g>
                <text x="350" y="326" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="end">
                  CONTRIBUTE ANONYMIZED PATTERNS &rarr;
                </text>

                <g stroke="#1E2024" strokeWidth="1.5">
                  <line x1="510" y1="352" x2="510" y2="292" strokeDasharray="3 3" markerEnd="url(#arrowUp)" />
                </g>
                <text x="610" y="326" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="start">
                  &larr; PULL PRE-VERIFIED PATTERNS
                </text>

                {/* ========================================================
                    LOWER PLATE: THE COLLECTIVE PATTERN COMMONS
                    ======================================================== */}
                <rect x="80" y="360" width="800" height="96" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                <rect x="80" y="360" width="800" height="24" fill="#1E2024" />
                
                <text x="96" y="376" fill="#FAF6EE" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  THE COLLECTIVE PATTERN COMMONS // PEER BUILDER EXCHANGE
                </text>
                <text x="864" y="376" textAnchor="end" fill="#D4C29A" fontSize="9" fontFamily="monospace">
                  NO PRIVATE DATA &bull; PATTERNS ONLY
                </text>

                <g transform="translate(100, 394)">
                  {/* Pattern 1 */}
                  <rect x="0" y="0" width="230" height="50" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="12" y="18" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">01 / DOMAIN SCHEMAS</text>
                  <text x="12" y="34" fill="#1E2024" fontSize="11" fontFamily="sans-serif">B.O.S.S. Operational Schemas</text>
                  <text x="12" y="44" fill="#68645C" fontSize="8" fontFamily="monospace">Exceptions, Invariants, Limits</text>

                  {/* Pattern 2 */}
                  <rect x="265" y="0" width="230" height="50" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="277" y="18" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">02 / WORKFLOW BLOCKS</text>
                  <text x="277" y="34" fill="#1E2024" fontSize="11" fontFamily="sans-serif">FlowCraft Composable WFBs</text>
                  <text x="277" y="44" fill="#68645C" fontSize="8" fontFamily="monospace">State Machines, Connectors</text>

                  {/* Pattern 3 */}
                  <rect x="530" y="0" width="230" height="50" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="542" y="18" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">03 / TEST HARNESSES</text>
                  <text x="542" y="34" fill="#1E2024" fontSize="11" fontFamily="sans-serif">The Rig Caller Fixtures</text>
                  <text x="542" y="44" fill="#68645C" fontSize="8" fontFamily="monospace">Deterministic Verification Gates</text>
                </g>
              </svg>
            </div>

            <div className={s.specCaption}>
              <div>
                <strong>Sovereign Execution on Private Iron:</strong> Your operational ledgers, transactions, customer records, and physical telemetry stay 100% inside your perimeter. No cloud extraction, no vendor lock-in.
              </div>
              <div>
                <strong>The Pattern Commons:</strong> What is shared across the collective is patterns, not data. Proven domain schemas, composable workflow blocks, and deterministic test harnesses refined on real operating floors.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Three Systems (The Zeros & Ones) */}
      <section className={s.systemsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>THE SOFTWARE CONTRAPTION // THREE INTERLOCKING SYSTEMS</p>
            <h2>The actual software. The zeros and ones<span>.</span></h2>
            <p>
              The Collective is not a theoretical whitepaper. It is living software built from over 20 years on enterprise plant floors and three years inside the autonomous runtime.
            </p>
          </div>

          <div className={s.systemsGrid}>
            {/* System 1: B.O.S.S. */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>DOMAIN TRUTH &bull; SPECIFICATION</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>Business Operating System Specification</div>
                <p className={s.systemBody}>
                  SaaS products sell happy-path illusions. Real companies run on tribal knowledge, edge-case spreadsheets, and thirty years of frontline experience. B.O.S.S. rapidly maps that domain truth—capturing business rules, exception boundaries, and operational invariants into machine-actionable schemas.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>CORE USE CASE</span>
                <p className={s.systemUseCaseText}>
                  Rapid domain onboarding. Translates unwritten shop-floor heuristics into unambiguous data contracts and decision boundaries.
                </p>
              </div>
            </div>

            {/* System 2: FlowCraft */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>OPERATIONAL RUNTIME &bull; HUMAN + AGENT</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>Instance-Level Operating System</div>
                <p className={s.systemBody}>
                  The live operational runtime. FlowCraft bridges static databases, legacy ledgers, and autonomous agent swarms. It coordinates human operators and software agents side-by-side with shared Master Data (MDM), live permissions, boundary governance, and audit trails.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>CORE USE CASE</span>
                <p className={s.systemUseCaseText}>
                  State machine execution. Runs custom workflows around tools like QuickBooks, ERPs, or WMS without renting per-seat SaaS tools.
                </p>
              </div>
            </div>

            {/* System 3: The Rig */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>SOFTWARE FACTORY &bull; DETERMINISTIC TEST</span>
                <h3 className={s.systemTitle}>The Rig</h3>
                <div className={s.systemSub}>Autonomous Software Factory</div>
                <p className={s.systemBody}>
                  Eliminates fragile prompt-and-pray development. The Rig puts a 13-cell autonomous build pipeline on the operator’s PC—running multi-agent synthesis, deterministic caller gates, and verified test harnesses that prove code behaves correctly before release.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>CORE USE CASE</span>
                <p className={s.systemUseCaseText}>
                  Code fabrication and proof. Builds, tests, and verifies custom operational blocks on local developer iron.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What We Build (Intent = Outcome) */}
      <section className={s.blueprintsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>PROVEN BLUEPRINTS // INTENT = OUTCOME DELIVERED</p>
            <h2>Enterprise agentic contraptions built for you<span>.</span></h2>
            <p>
              Whether you are a specialized operator running on QuickBooks or a mid-market manufacturer running complex enterprise ledgers, we build sovereign software around the business you actually have.
            </p>
          </div>

          <div className={s.blueprintsGrid}>
            {/* Blueprint 1 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>OPERATIONAL BLUEPRINT // SPECIALIZED OPERATOR</span>
              <h3 className={s.blueprintTitle}>The Frontline Operations &amp; Billing Engine</h3>
              <p className={s.blueprintText}>
                <strong>The Situation:</strong> An automotive repair shop or specialized service provider runs accounting on QuickBooks, but actual work orders, mechanic bay schedules, supplier parts quotes, and customer sign-offs live on whiteboards and text messages. Generic industry SaaS charges hundreds a month and doesn't match their reality.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S. Domain Mapping:</strong> Rapidly codifies markup logic, labor scheduling invariants, and estimate thresholds.</li>
                <li><strong>The Rig Code Fabrication:</strong> Fabricates custom QuickBooks connectors, work-order state machines, and mobile authorization links.</li>
                <li><strong>FlowCraft Live Runtime:</strong> Runs the shop autonomously—tracking bay throughput, syncing invoices, and alerting mechanics.</li>
                <li><strong>Result:</strong> A sovereign, company-owned operating contraption delivered in a single flight. Zero per-seat rent.</li>
              </ul>
            </div>

            {/* Blueprint 2 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>ENTERPRISE BLUEPRINT // MANUFACTURING &amp; SUPPLY</span>
              <h3 className={s.blueprintTitle}>The Sovereign Enterprise Purchasing System</h3>
              <p className={s.blueprintText}>
                <strong>The Situation:</strong> A multi-facility manufacturer struggles with purchase order exception loops, invoice discrepancies, and slow receiving handoffs. Enterprise ERP consultants quote millions and two years of disruption to fix it.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S. Rules Extraction:</strong> Codifies real-world 3-way matching tolerances, freight variances, and receiving handoffs.</li>
                <li><strong>The Rig Verification Gates:</strong> Tests and proves autonomous audit agents against historical ledger discrepancies.</li>
                <li><strong>FlowCraft Instance Execution:</strong> Orchestrates human approvals and autonomous PO reconciliations across warehouse and finance.</li>
                <li><strong>Result:</strong> Closes the operational seam in weeks, not years, with complete financial audibility and zero vendor lock-in.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Two Doors of Interaction */}
      <section className={s.doorsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>ENGAGEMENT DOORS // TWO WAYS TO INTERACT</p>
            <h2>How to engage with The Collective<span>.</span></h2>
            <p>
              You can commission a custom sovereign build for your organization, or you can join peer practitioners building and sharing patterns together.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Commission a Build */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>DOOR 01 // COMMISSION AN ENTERPRISE BUILD</p>
                <h3 className={s.doorTitle}>Have something built for your enterprise.</h3>
                <p className={s.doorBody}>
                  Bring me your operational bottleneck, your legacy ledger, or your manual spreadsheet seam. We use B.O.S.S. to map domain truth, The Rig to fabricate and verify the code, and FlowCraft to deploy a sovereign, working system in a defined delivery flight.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={s.doorBtn}
              >
                <span>Commission an Enterprise Build &rarr;</span>
              </button>
            </div>

            {/* Door 2: Join the Collective */}
            <div className={s.doorCard}>
              <div>
                <p className={s.doorEyebrow}>DOOR 02 // PEER COLLABORATION</p>
                <h3 className={s.doorTitle}>Build and learn together in The Collective.</h3>
                <p className={s.doorBody}>
                  For software builders, systems architects, and technical operators. Explore open schemas, run FlowCraft runtimes on your own iron, test local developer harnesses, and contribute verified workflow blocks to the collective pattern library.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
              >
                <span>Join the Collective &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Direct Correspondence */}
      <section id="correspondence" className={s.formSection}>
        <div className={s.formBox}>
          <div className={s.formHead}>
            <p className={s.eyebrow}>DIRECT CORRESPONDENCE // ROB PADDOCK</p>
            <h3>Start the conversation.</h3>
            <p>
              Direct to my desk. Tell me about your operational challenge or your interest in the collective, and I will reply personally.
            </p>
          </div>

          {submitted ? (
            <div className={`${s.statusMessage} ${s.statusSuccess}`}>
              <strong>Message received.</strong> Thank you for reaching out. I have received your note and will review it and reply directly to your email shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div className={`${s.statusMessage} ${s.statusError}`}>
                  {errorMsg}
                </div>
              )}

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  className={s.fieldInput}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="email">Work Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  className={s.fieldInput}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                />
              </div>

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="company">Company / Organization *</label>
                <input
                  id="company"
                  type="text"
                  required
                  className={s.fieldInput}
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="Your organization"
                />
              </div>

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="interest">Primary Interest</label>
                <select
                  id="interest"
                  className={s.fieldSelect}
                  value={formState.interest}
                  onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                >
                  <option value="build">Commission a Custom Sovereign Build (Intent = Outcome)</option>
                  <option value="collaborate">Join The Collective // Peer Collaboration &amp; Shared Patterns</option>
                </select>
              </div>

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="message">Your Situation or Project Scope *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className={s.fieldTextarea}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the workflow you want built, the systems involved, or how you would like to collaborate..."
                />
                <p className={s.fieldHelp}>
                  Mention any specific systems in the loop (e.g., QuickBooks, NetSuite, PostgreSQL, plant-floor telemetry).
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={s.submitBtn}
              >
                {submitting ? "Sending to Rob's Desk..." : "Send Dispatch Directly to Rob &rarr;"}
              </button>
            </form>
          )}
        </div>
      </section>

      
    </div>
  );
}
