"use client";

import React, { useState } from "react";
import Link from "next/link";
import s from "./CollectiveView.module.css";

export default function CollectiveView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    interest: "collaborate",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          source: "The Collective",
          topic: formState.interest === "collaborate"
            ? "The Collective // Peer Collaboration & Shared Patterns"
            : "Enterprise Build Inquiry // Custom Sovereign System",
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
          <p className={s.eyebrow}>THE OPERATIONAL SEAM // A LIVING EXPERIMENT</p>
          <h1 className={s.heroTitle}>
            The Collective<span>.</span>
          </h1>
          <p className={s.heroDek}>
            We are at a unique juncture in technology. Agentics is arriving, and we have picked our lane: the enterprise.
          </p>
          <div style={{ maxWidth: "860px", color: "var(--ink)", fontSize: "16px", lineHeight: "1.7", marginBottom: "36px" }}>
            <p style={{ marginBottom: "14px" }}>
              Not to build another closed silo, rent another software seat, or push generic chatbots into meetings. 
              We are here to figure out something much more interesting: <strong>how people and autonomous systems actually work together in the business you have.</strong>
            </p>
            <p style={{ marginBottom: "14px" }}>
              It is about the sharing, the sovereignty, and the patterns. Running in complete isolation on your own iron—where your data, your ledgers, and your customer relationships remain 100% private—while connecting to a larger collective that feeds each other. The &ldquo;what if?&rdquo; The joy of building. Being part of something that helps define how work gets done at a truly historic moment in computing.
            </p>
          </div>

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
                viewBox="0 0 1000 530"
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
                  <marker id="flowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#9E7D3B" />
                  </marker>
                  <marker id="darkFlowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#1E2024" />
                  </marker>
                </defs>

                <rect width="1000" height="530" fill="url(#archGrid)" />

                {/* ========================================================
                    UPPER ENVELOPE: SOVEREIGN ENTERPRISE IRON
                    ======================================================== */}
                <rect x="30" y="16" width="940" height="294" rx="4" fill="#FAF6EE" stroke="#B8B0A0" strokeWidth="1.2" strokeDasharray="4 4" />
                
                {/* Corner Crosshairs */}
                <g stroke="#9E7D3B" strokeWidth="1">
                  <path d="M 24 16 L 36 16 M 30 10 L 30 22" />
                  <path d="M 964 16 L 976 16 M 970 10 L 970 22" />
                  <path d="M 24 310 L 36 310 M 30 304 L 30 316" />
                  <path d="M 964 310 L 976 310 M 970 304 L 970 316" />
                </g>

                {/* Perimeter Header Badge */}
                <rect x="46" y="26" width="370" height="22" rx="2" fill="#EFE8D8" stroke="#DDD7C8" strokeWidth="1" />
                <text x="56" y="41" fill="#6C552F" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  SOVEREIGN ENTERPRISE PERIMETER // PRIVATE IRON
                </text>
                <text x="430" y="41" fill="#68645C" fontSize="10" fontFamily="monospace">
                  100% Private &bull; Zero External Data Egress &bull; Local Execution
                </text>

                {/* Vector Flow Lines Between Nodes */}
                <g stroke="#DDD7C8" strokeWidth="1.5" strokeDasharray="3 3">
                  {/* Top to Southwest */}
                  <line x1="380" y1="134" x2="270" y2="188" markerEnd="url(#flowArrow)" />
                  {/* Southwest to Center Rosette */}
                  <line x1="370" y1="227" x2="456" y2="227" markerEnd="url(#flowArrow)" />
                  {/* Center Rosette to Southeast */}
                  <line x1="544" y1="227" x2="628" y2="227" markerEnd="url(#flowArrow)" />
                  {/* Southeast back to Top */}
                  <line x1="730" y1="188" x2="620" y2="134" markerEnd="url(#flowArrow)" />
                </g>

                {/* Vector Flow Text Labels */}
                <text x="280" y="156" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="600">
                  SCHEMAS &amp; INVARIANTS ↙
                </text>
                <text x="413" y="218" textAnchor="middle" fill="#6C552F" fontSize="8" fontFamily="monospace" fontWeight="700">
                  VERIFIED CODE &rarr;
                </text>
                <text x="586" y="218" textAnchor="middle" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="700">
                  &rarr; LIVE STATE
                </text>
                <text x="710" y="156" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="600">
                  ↖ LIVE EXCEPTIONS
                </text>

                {/* Center Rosette: The Operational Seam / The Flash Spot */}
                <g transform="translate(500, 227)">
                  {/* Outer sight ring */}
                  <circle cx="0" cy="0" r="42" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1.8" />
                  <circle cx="0" cy="0" r="34" fill="#F4EFE5" stroke="#DDD7C8" strokeWidth="1" strokeDasharray="2 2" />
                  
                  {/* Crosshair ticks */}
                  <line x1="-48" y1="0" x2="-43" y2="0" stroke="#9E7D3B" strokeWidth="1" />
                  <line x1="43" y1="0" x2="48" y2="0" stroke="#9E7D3B" strokeWidth="1" />
                  <line x1="0" y1="-48" x2="0" y2="-43" stroke="#9E7D3B" strokeWidth="1" />
                  <line x1="0" y1="43" x2="0" y2="48" stroke="#9E7D3B" strokeWidth="1" />
                  <circle cx="0" cy="0" r="4" fill="#9E7D3B" />

                  {/* Centered label block */}
                  <text x="0" y="-12" textAnchor="middle" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="800" letterSpacing="0.12em">
                    THE FLASH SPOT
                  </text>
                  <text x="0" y="3" textAnchor="middle" fill="#1E2024" fontSize="9.5" fontFamily="serif" fontWeight="700">
                    INTENT &bull; OUTCOME
                  </text>
                  <text x="0" y="16" textAnchor="middle" fill="#68645C" fontSize="7" fontFamily="monospace">
                    The Living Seam
                  </text>
                </g>

                {/* ========================================================
                    NODE 1: NORTH - DOMAIN TRUTH & INVARIANTS (B.O.S.S.)
                    ======================================================== */}
                <g transform="translate(340, 56)">
                  <rect width="320" height="76" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="320" height="4" fill="#9E7D3B" />
                  <rect x="215" y="8" width="95" height="15" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="262" y="19" textAnchor="middle" fill="#6C552F" fontSize="8" fontFamily="monospace" fontWeight="700">SPEC // B.O.S.S.</text>
                  
                  <text x="14" y="22" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">OPERATIONAL TRUTH &amp; INVARIANTS</text>
                  <text x="14" y="41" fill="#1E2024" fontSize="14" fontFamily="serif" fontWeight="700">Unwritten Operating Reality</text>
                  <text x="14" y="56" fill="#68645C" fontSize="10" fontFamily="sans-serif">Mary&rsquo;s sheet &bull; Exception limits &bull; Floor heuristics</text>
                  <text x="14" y="68" fill="#9E7D3B" fontSize="8" fontFamily="monospace">&rarr; Codifies Tacit Knowledge into Deterministic Schemas</text>
                </g>

                {/* ========================================================
                    NODE 2: SOUTHWEST - FABRICATION & PROOF (THE RIG)
                    ======================================================== */}
                <g transform="translate(60, 188)">
                  <rect width="310" height="78" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="310" height="4" fill="#1E2024" />
                  <rect x="195" y="8" width="105" height="15" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="247" y="19" textAnchor="middle" fill="#1E2024" fontSize="8" fontFamily="monospace" fontWeight="700">FACTORY // THE RIG</text>

                  <text x="14" y="22" fill="#68645C" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">AUTONOMOUS SOFTWARE BUILD</text>
                  <text x="14" y="41" fill="#1E2024" fontSize="14" fontFamily="serif" fontWeight="700">Deterministic Fabrication</text>
                  <text x="14" y="56" fill="#68645C" fontSize="10" fontFamily="sans-serif">13-cell pipeline &bull; Caller gates &bull; Local developer iron</text>
                  <text x="14" y="68" fill="#6C552F" fontSize="8" fontFamily="monospace">&rarr; Proves Code on Developer PC Prior to Release</text>
                </g>

                {/* ========================================================
                    NODE 3: SOUTHEAST - OPERATIONAL RUNTIME (FLOWCRAFT)
                    ======================================================== */}
                <g transform="translate(630, 188)">
                  <rect width="310" height="78" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="310" height="4" fill="#9E7D3B" />
                  <rect x="185" y="8" width="115" height="15" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="242" y="19" textAnchor="middle" fill="#6C552F" fontSize="8" fontFamily="monospace" fontWeight="700">RUNTIME // FLOWCRAFT</text>

                  <text x="14" y="22" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">HUMAN + AGENT WORKFLOW RUNTIME</text>
                  <text x="14" y="41" fill="#1E2024" fontSize="14" fontFamily="serif" fontWeight="700">Live Operating State &amp; MDM</text>
                  <text x="14" y="56" fill="#68645C" fontSize="10" fontFamily="sans-serif">Shared Master Data &bull; Live permissions &bull; Audit ledger</text>
                  <text x="14" y="68" fill="#9E7D3B" fontSize="8" fontFamily="monospace">&rarr; Orchestrates Swarms Across Existing Business Ledgers</text>
                </g>

                {/* ========================================================
                    MID-PLANE: VERTICAL PATTERN CONDUIT
                    ======================================================== */}
                <g stroke="#9E7D3B" strokeWidth="1.5">
                  <line x1="455" y1="312" x2="455" y2="372" strokeDasharray="3 3" markerEnd="url(#arrowDown)" />
                </g>
                <text x="440" y="346" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="end">
                  CONTRIBUTE ANONYMIZED PATTERNS &rarr;
                </text>

                <g stroke="#1E2024" strokeWidth="1.5">
                  <line x1="545" y1="372" x2="545" y2="312" strokeDasharray="3 3" markerEnd="url(#arrowUp)" />
                </g>
                <text x="560" y="346" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="start">
                  &larr; PULL PRE-VERIFIED PATTERNS
                </text>

                {/* ========================================================
                    LOWER BASE: THE COLLECTIVE PATTERN COMMONS
                    ======================================================== */}
                <rect x="30" y="376" width="940" height="136" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                <rect x="30" y="376" width="940" height="26" fill="#1E2024" />
                
                <text x="46" y="393" fill="#FAF6EE" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  THE COLLECTIVE PATTERN COMMONS // PEER BUILDER EXCHANGE
                </text>
                <text x="954" y="393" textAnchor="end" fill="#D4C29A" fontSize="9" fontFamily="monospace">
                  NO PRIVATE DATA &bull; PATTERNS, SCHEMAS &amp; HARNESSES ONLY
                </text>

                <g transform="translate(46, 412)">
                  {/* Pattern 1 */}
                  <g transform="translate(0, 0)">
                    <rect width="290" height="88" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="88" fill="#9E7D3B" />
                    <text x="14" y="19" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">01 / DOMAIN SCHEMAS</text>
                    <text x="14" y="37" fill="#1E2024" fontSize="13" fontFamily="serif" fontWeight="700">Operational Schemas</text>
                    <text x="14" y="54" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">Standard exception tolerances, pricing limits,</text>
                    <text x="14" y="68" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">and inventory balance invariants.</text>
                    <text x="14" y="80" fill="#9E7D3B" fontSize="7.5" fontFamily="monospace">SPEC PROTOCOL</text>
                  </g>

                  {/* Pattern 2 */}
                  <g transform="translate(309, 0)">
                    <rect width="290" height="88" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="88" fill="#9E7D3B" />
                    <text x="14" y="19" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">02 / WORKFLOW BLOCKS</text>
                    <text x="14" y="37" fill="#1E2024" fontSize="13" fontFamily="serif" fontWeight="700">Composable WFBs</text>
                    <text x="14" y="54" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">Accounting connectors and state machines</text>
                    <text x="14" y="68" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">for mobile mechanic dispatch &amp; PO match.</text>
                    <text x="14" y="80" fill="#9E7D3B" fontSize="7.5" fontFamily="monospace">FLOWCRAFT RUNTIME</text>
                  </g>

                  {/* Pattern 3 */}
                  <g transform="translate(618, 0)">
                    <rect width="290" height="88" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="88" fill="#1E2024" />
                    <text x="14" y="19" fill="#68645C" fontSize="9" fontFamily="monospace" fontWeight="700">03 / TEST HARNESSES</text>
                    <text x="14" y="37" fill="#1E2024" fontSize="13" fontFamily="serif" fontWeight="700">Deterministic Caller Fixtures</text>
                    <text x="14" y="54" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">Multi-agent verification test suites and edge-case</text>
                    <text x="14" y="68" fill="#68645C" fontSize="9.5" fontFamily="sans-serif">benchmarks proven on real shop floors.</text>
                    <text x="14" y="80" fill="#1E2024" fontSize="7.5" fontFamily="monospace">RIG VERIFICATION</text>
                  </g>
                </g>
              </svg>
            </div>

            <div className={s.specCaption}>
              <div>
                <strong>Sovereign Execution on Private Iron:</strong> Your operational ledgers, transactions, customer records, and physical telemetry stay 100% inside your perimeter. Run in isolation with complete data privacy.
              </div>
              <div>
                <strong>The Pattern Commons:</strong> What connects us is patterns, not data. Proven domain schemas, composable workflow blocks, and deterministic test harnesses refined through real-world work.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Three Systems */}
      <section className={s.systemsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>THE WORKING CONTRAPTION // THREE INTERLOCKING SYSTEMS</p>
            <h2>How the systems work together<span>.</span></h2>
            <p>
              To make a collective work in practice, you need a deterministic stack. Three open systems, tested on live enterprise floors, designed to fit together seamlessly.
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
                  Every business runs on unwritten plant-floor judgment, Mary&rsquo;s edge-case scheduling spreadsheet, and thirty years of experience that never made it into the software manual. B.O.S.S. maps that domain truth—capturing business rules, exception boundaries, and operational invariants into clear, machine-actionable schemas.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Rapid domain onboarding. Turns tacit human heuristics into unambiguous schemas so agents understand real constraints before touching anything.
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
                  The live operational runtime. FlowCraft bridges existing systems, databases, and autonomous agent swarms. It orchestrates humans and agents side-by-side with shared Master Data (MDM), live permissions, state machines, and complete audit trails.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Live execution. Coordinates daily tasks, runs custom workflows around ledgers like QuickBooks or ERPs, and keeps humans in authorization command.
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
                  Moving beyond fragile prompt-and-pray development. The Rig puts a 13-cell autonomous build pipeline on the operator’s PC—running multi-agent synthesis, deterministic caller gates, and verified test harnesses that prove code behaves correctly before release.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Code fabrication and proof. Builds, tests, and verifies custom operational blocks on local developer iron before plant-floor release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Grounded Results / Practical Proof (Sprinkled in naturally) */}
      <section className={s.blueprintsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>REAL-WORLD PROOF // INTENT = OUTCOME</p>
            <h2>Proven in production. Not a theoretical concept<span>.</span></h2>
            <p>
              The Collective is about open exploration, but it produces concrete, working results today. When you combine domain mapping (B.O.S.S.), code fabrication (The Rig), and live runtime execution (FlowCraft), real systems get built in weeks:
            </p>
          </div>

          <div className={s.blueprintsGrid}>
            {/* Practical Example 1 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>PRACTICAL USE CASE // FRONTLINE OPERATIONS</span>
              <h3 className={s.blueprintTitle}>Frontline Billing &amp; Work-Order State Machine</h3>
              <p className={s.blueprintText}>
                An automotive shop or specialty service business runs accounting on QuickBooks, but job tracking, mechanic schedules, parts ordering, and customer sign-offs live on whiteboards and text messages.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S.</strong> maps the shop&rsquo;s pricing tiers, labor rules, and bay scheduling invariants in days.</li>
                <li><strong>The Rig</strong> fabricates and verifies custom QuickBooks connectors and mobile work-order state machines.</li>
                <li><strong>FlowCraft</strong> executes the runtime—tracking bay throughput, notifying technicians, and updating QuickBooks.</li>
                <li><strong>Outcome:</strong> A sovereign system Dave owns completely. Zero per-seat rent.</li>
              </ul>
            </div>

            {/* Practical Example 2 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>PRACTICAL USE CASE // MANUFACTURING &amp; SUPPLY</span>
              <h3 className={s.blueprintTitle}>Sovereign Purchasing &amp; Receiving System</h3>
              <p className={s.blueprintText}>
                A multi-facility producer struggles with purchase order exception loops, invoice variances, and slow dock handoffs, facing multi-million-dollar ERP consulting quotes to fix it.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S.</strong> codifies the unwritten receiving rules, freight variance tolerances, and 3-way match logic.</li>
                <li><strong>The Rig</strong> tests automated reconciliation agents against historical edge-case ledger records.</li>
                <li><strong>FlowCraft</strong> orchestrates human approvals and autonomous PO matching across warehouse and finance.</li>
                <li><strong>Outcome:</strong> A company-owned purchasing contraption delivered in weeks with full audit trails.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Two Ways to Engage */}
      <section className={s.doorsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>TWO DOORS // ENTERING THE SEAM</p>
            <h2>How to take part<span>.</span></h2>
            <p>
              Whether you want to build and explore together as part of the collective, or need a working sovereign system built for your enterprise.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Build Together */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>PATH 01 // PEER COLLABORATION</p>
                <h3 className={s.doorTitle}>Build and learn together in The Collective.</h3>
                <p className={s.doorBody}>
                  For software builders, systems architects, and technical operators who want to define what enterprise agentics can be. Explore open schemas, run runtimes on your own iron, test local developer harnesses, and contribute verified workflow blocks to the collective library.
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
                <h3 className={s.doorTitle}>Have a system built for your enterprise.</h3>
                <p className={s.doorBody}>
                  Have an operational bottleneck, a legacy ledger, or a broken manual workflow? We use B.O.S.S. to map domain truth, The Rig to fabricate and verify the code, and FlowCraft to deploy a living, sovereign system around how your team actually works.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
              >
                <span>Explore a Custom Build &rarr;</span>
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
              Direct to my desk. Tell me what you are working on, an operational seam you are trying to solve, or how you would like to collaborate.
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
                <label className={s.fieldLabel} htmlFor="interest">What brings you here?</label>
                <select
                  id="interest"
                  className={s.fieldSelect}
                  value={formState.interest}
                  onChange={(e) => setFormState({ ...formState, interest: e.target.value as "collaborate" | "build" })}
                >
                  <option value="collaborate">Join The Collective // Peer Collaboration &amp; Shared Patterns</option>
                  <option value="build">Commission a Custom Sovereign Build (Intent = Outcome)</option>
                </select>
              </div>

              <div className={s.formField}>
                <label className={s.fieldLabel} htmlFor="message">Your Note or Situation *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className={s.fieldTextarea}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me what you are building, the systems involved, or where you want to collaborate..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={s.submitBtn}
              >
                {submitting ? "Sending to Rob's Desk..." : "Send Note Directly to Rob &rarr;"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
