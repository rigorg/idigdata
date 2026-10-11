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
                viewBox="0 0 1360 840"
                className={s.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="The Collective Sovereign Architecture: Private Iron connected to the Collective Pattern Commons"
              >
                {/* Background dot grid pattern */}
                <defs>
                  <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.8" fill="#DDD7C8" />
                  </pattern>
                  <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#9E7D3B" />
                  </marker>
                  <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E2024" />
                  </marker>
                  <marker id="flowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#9E7D3B" />
                  </marker>
                  <marker id="darkFlowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#1E2024" />
                  </marker>
                </defs>

                <rect width="1360" height="840" fill="url(#archGrid)" />

                {/* ========================================================
                    UPPER ENVELOPE: SOVEREIGN ENTERPRISE IRON PERIMETER
                    ======================================================== */}
                <rect x="30" y="24" width="1300" height="470" rx="4" fill="#FAF6EE" stroke="#B8B0A0" strokeWidth="1.5" strokeDasharray="6 4" />
                
                {/* Corner Crosshairs */}
                <g stroke="#9E7D3B" strokeWidth="1.2">
                  <path d="M 22 24 L 38 24 M 30 16 L 30 32" />
                  <path d="M 1322 24 L 1338 24 M 1330 16 L 1330 32" />
                  <path d="M 22 494 L 38 494 M 30 486 L 30 502" />
                  <path d="M 1322 494 L 1338 494 M 1330 486 L 1330 502" />
                </g>

                {/* Perimeter Header Plate */}
                <rect x="46" y="38" width="460" height="26" rx="2" fill="#1E2024" />
                <text x="58" y="55" fill="#FAF6EE" fontSize="10.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.1em">
                  SOVEREIGN ENTERPRISE PERIMETER // LOCAL PRIVATE IRON
                </text>
                
                <circle cx="525" cy="51" r="4.5" fill="#16A34A" />
                <text x="536" y="55" fill="#68645C" fontSize="10.5" fontFamily="monospace">
                  100% Private Execution &bull; Zero External Data Egress &bull; Air-Gapped From Public AI
                </text>

                <text x="1310" y="55" textAnchor="end" fill="#9E7D3B" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  SPECIFICATION: SPEC-COL-01
                </text>

                {/* ========================================================
                    VECTOR FLOW CONDUITS BETWEEN NODES
                    ======================================================== */}
                {/* Top Node to Southwest Factory */}
                <path d="M 540 196 L 340 275" stroke="#B8B0A0" strokeWidth="1.8" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(370, 222)">
                  <rect width="168" height="22" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="84" y="15" textAnchor="middle" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">
                    SCHEMAS &amp; INVARIANTS &#8601;
                  </text>
                </g>

                {/* Top Node Direct to Center Rosette (Contract Intent) */}
                <path d="M 680 196 L 680 274" stroke="#9E7D3B" strokeWidth="1.8" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(685, 230)">
                  <text x="6" y="10" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">
                    CONTRACT INTENT &darr;
                  </text>
                </g>

                {/* Southwest Factory to Center Rosette */}
                <path d="M 490 338 L 616 338" stroke="#6C552F" strokeWidth="2" markerEnd="url(#flowArrow)" />
                <g transform="translate(506, 316)">
                  <rect width="94" height="20" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="47" y="14" textAnchor="middle" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                    VERIFIED WFBs &rarr;
                  </text>
                </g>

                {/* Center Rosette to Southeast Runtime */}
                <path d="M 744 338 L 866 338" stroke="#9E7D3B" strokeWidth="2" markerEnd="url(#flowArrow)" />
                <g transform="translate(756, 316)">
                  <rect width="94" height="20" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="47" y="14" textAnchor="middle" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                    &rarr; LIVE DEPLOY
                  </text>
                </g>

                {/* Southeast Runtime Feedback to Top Node */}
                <path d="M 1020 275 L 820 196" stroke="#B8B0A0" strokeWidth="1.8" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(830, 222)">
                  <rect width="176" height="22" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                  <text x="88" y="15" textAnchor="middle" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">
                    &#8598; TELEMETRY &amp; EXCEPTIONS
                  </text>
                </g>

                {/* ========================================================
                    NODE 1: NORTH - DOMAIN TRUTH & SPECIFICATION (B.O.S.S.)
                    ======================================================== */}
                <g transform="translate(450, 78)">
                  <rect width="460" height="118" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="460" height="5" fill="#9E7D3B" />
                  
                  {/* Badge */}
                  <rect x="336" y="10" width="114" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="393" y="23" textAnchor="middle" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="700">SPEC // B.O.S.S.</text>
                  
                  <text x="18" y="24" fill="#9E7D3B" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    01 // DOMAIN TRUTH &amp; SPECIFICATION
                  </text>
                  <text x="18" y="48" fill="#1E2024" fontSize="18" fontFamily="serif" fontWeight="700">
                    Unwritten Operating Reality
                  </text>

                  {/* Traced elements */}
                  <circle cx="24" cy="68" r="2.5" fill="#9E7D3B" />
                  <text x="34" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">INPUT:</tspan> Mary&rsquo;s sheet heuristics &bull; Exception limits &bull; Unwritten shop-floor judgment
                  </text>

                  <circle cx="24" cy="88" r="2.5" fill="#1E2024" />
                  <text x="34" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">OUTPUT:</tspan> Deterministic Domain Schemas &bull; Typed Contract Invariants &bull; Tolerance Gates
                  </text>

                  <text x="18" y="108" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                    &rarr; CODIFIES TACIT ENTERPRISE KNOWLEDGE INTO MACHINE-VERIFIABLE CONTRACTS
                  </text>
                </g>

                {/* ========================================================
                    NODE 2: SOUTHWEST - AUTONOMOUS SOFTWARE FACTORY (THE RIG)
                    ======================================================== */}
                <g transform="translate(50, 275)">
                  <rect width="440" height="126" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="440" height="5" fill="#1E2024" />

                  {/* Badge */}
                  <rect x="312" y="10" width="118" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="371" y="23" textAnchor="middle" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="700">FACTORY // THE RIG</text>

                  <text x="18" y="24" fill="#68645C" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    02 // AUTONOMOUS SOFTWARE FACTORY
                  </text>
                  <text x="18" y="48" fill="#1E2024" fontSize="18" fontFamily="serif" fontWeight="700">
                    Deterministic Fabrication &amp; Proof
                  </text>

                  {/* Traced elements */}
                  <circle cx="24" cy="68" r="2.5" fill="#1E2024" />
                  <text x="34" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">PROCESS:</tspan> 13-cell multi-agent build pipeline &bull; Runs on local developer PC iron
                  </text>

                  <circle cx="24" cy="88" r="2.5" fill="#16A34A" />
                  <text x="34" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">PROOF:</tspan> Automated caller fixtures &amp; historic edge-case benchmarks proven prior to release
                  </text>

                  <text x="18" y="112" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                    &rarr; EMITS PRE-VERIFIED WORKFLOW BLOCKS (WFBs) &bull; ZERO TRIAL-AND-ERROR IN PROD
                  </text>
                </g>

                {/* ========================================================
                    NODE 3: SOUTHEAST - OPERATIONAL RUNTIME (FLOWCRAFT)
                    ======================================================== */}
                <g transform="translate(870, 275)">
                  <rect width="440" height="126" rx="3" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="440" height="5" fill="#9E7D3B" />

                  {/* Badge */}
                  <rect x="302" y="10" width="128" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="366" y="23" textAnchor="middle" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="700">RUNTIME // FLOWCRAFT</text>

                  <text x="18" y="24" fill="#9E7D3B" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    03 // HUMAN + AGENT WORKFLOW RUNTIME
                  </text>
                  <text x="18" y="48" fill="#1E2024" fontSize="18" fontFamily="serif" fontWeight="700">
                    Live Operating State &amp; MDM
                  </text>

                  {/* Traced elements */}
                  <circle cx="24" cy="68" r="2.5" fill="#9E7D3B" />
                  <text x="34" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">INTEGRATION:</tspan> Non-invasive bridges to ERPs, QuickBooks, databases &amp; plant telemetry
                  </text>

                  <circle cx="24" cy="88" r="2.5" fill="#16A34A" />
                  <text x="34" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    <tspan fontWeight="700" fill="#1E2024">GOVERNANCE:</tspan> Master Data Management (MDM) &bull; Human authority &bull; Immutable audit ledger
                  </text>

                  <text x="18" y="112" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                    &rarr; ORCHESTRATES HUMAN &amp; AGENT SWARMS DIRECTLY ACROSS EXISTING LEDGERS
                  </text>
                </g>

                {/* ========================================================
                    CENTER ROSETTE: THE FLASH SPOT // INTENT = OUTCOME
                    ======================================================== */}
                <g transform="translate(680, 338)">
                  {/* Outer sight ring */}
                  <circle cx="0" cy="0" r="58" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="2.2" />
                  <circle cx="0" cy="0" r="48" fill="#FDFCFA" stroke="#DDD7C8" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="0" cy="0" r="36" fill="#F4EFE5" stroke="#9E7D3B" strokeWidth="1" />
                  
                  {/* Crosshair ticks */}
                  <line x1="-66" y1="0" x2="-59" y2="0" stroke="#9E7D3B" strokeWidth="1.5" />
                  <line x1="59" y1="0" x2="66" y2="0" stroke="#9E7D3B" strokeWidth="1.5" />
                  <line x1="0" y1="-66" x2="0" y2="-59" stroke="#9E7D3B" strokeWidth="1.5" />
                  <line x1="0" y1="59" x2="0" y2="66" stroke="#9E7D3B" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="4.5" fill="#9E7D3B" />

                  {/* Centered label block */}
                  <text x="0" y="-14" textAnchor="middle" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="800" letterSpacing="0.14em">
                    THE FLASH SPOT
                  </text>
                  <text x="0" y="4" textAnchor="middle" fill="#1E2024" fontSize="11" fontFamily="serif" fontWeight="700">
                    INTENT = OUTCOME
                  </text>
                  <text x="0" y="16" textAnchor="middle" fill="#16A34A" fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    DELIVERED
                  </text>
                  <text x="0" y="27" textAnchor="middle" fill="#68645C" fontSize="7.5" fontFamily="sans-serif" fontStyle="italic">
                    The Living Seam
                  </text>
                </g>

                {/* ========================================================
                    MID-PLANE: VERTICAL PATTERN CONDUITS (SOVEREIGN <-> COMMONS)
                    ======================================================== */}
                <g stroke="#9E7D3B" strokeWidth="2">
                  <line x1="580" y1="494" x2="580" y2="564" strokeDasharray="4 4" markerEnd="url(#arrowDown)" />
                </g>
                <g transform="translate(340, 514)">
                  <rect width="224" height="22" rx="2" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1" />
                  <text x="112" y="15" textAnchor="middle" fill="#6C552F" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                    CONTRIBUTE ANONYMIZED PATTERNS &rarr;
                  </text>
                  <text x="112" y="32" textAnchor="middle" fill="#68645C" fontSize="8.5" fontFamily="sans-serif">
                    Zero Private Data &bull; No Credentials &bull; No Client Records
                  </text>
                </g>

                <g stroke="#1E2024" strokeWidth="2">
                  <line x1="780" y1="564" x2="780" y2="494" strokeDasharray="4 4" markerEnd="url(#arrowUp)" />
                </g>
                <g transform="translate(796, 514)">
                  <rect width="224" height="22" rx="2" fill="#1E2024" />
                  <text x="112" y="15" textAnchor="middle" fill="#FAF6EE" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                    &larr; PULL PRE-VERIFIED PATTERNS
                  </text>
                  <text x="112" y="32" textAnchor="middle" fill="#68645C" fontSize="8.5" fontFamily="sans-serif">
                    Battle-Tested Blocks &bull; Deterministic Edge-Case Harnesses
                  </text>
                </g>

                {/* ========================================================
                    LOWER BASE: THE COLLECTIVE PATTERN COMMONS
                    ======================================================== */}
                <rect x="30" y="570" width="1300" height="236" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="2" />
                <rect x="30" y="570" width="1300" height="34" fill="#1E2024" />
                
                <text x="50" y="592" fill="#FAF6EE" fontSize="11.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.1em">
                  THE COLLECTIVE PATTERN COMMONS // PEER BUILDER EXCHANGE
                </text>
                <text x="1310" y="592" textAnchor="end" fill="#D4C29A" fontSize="10.5" fontFamily="monospace" fontWeight="600">
                  PUBLIC COMMONS &bull; ANONYMIZED SCHEMAS, COMPOSABLE WFBs &amp; TEST HARNESSES ONLY
                </text>

                <g transform="translate(50, 620)">
                  {/* Pattern Card 1 */}
                  <g transform="translate(0, 0)">
                    <rect width="395" height="166" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="5" height="166" fill="#9E7D3B" />
                    <text x="18" y="24" fill="#9E7D3B" fontSize="10" fontFamily="monospace" fontWeight="700">
                      COMMONS PATTERN 01 // SCHEMAS
                    </text>
                    <text x="18" y="48" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">
                      Operational Domain Schemas
                    </text>
                    <text x="18" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Standard exception tolerances, freight limits &amp; 3-way match rules
                    </text>
                    <text x="18" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Multi-site inventory balance invariants &amp; unwritten heuristics
                    </text>
                    <text x="18" y="112" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Standardized typed models with zero proprietary company data
                    </text>
                    <rect x="18" y="132" width="148" height="18" rx="2" fill="#EFE8D8" stroke="#DDD7C8" strokeWidth="0.8" />
                    <text x="92" y="145" textAnchor="middle" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      SPEC PROTOCOL // B.O.S.S.
                    </text>
                  </g>

                  {/* Pattern Card 2 */}
                  <g transform="translate(425, 0)">
                    <rect width="395" height="166" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="5" height="166" fill="#9E7D3B" />
                    <text x="18" y="24" fill="#9E7D3B" fontSize="10" fontFamily="monospace" fontWeight="700">
                      COMMONS PATTERN 02 // WORKFLOWS
                    </text>
                    <text x="18" y="48" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">
                      Composable Workflow Blocks
                    </text>
                    <text x="18" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Pre-verified QuickBooks, NetSuite, SAP &amp; Postgres connector blocks
                    </text>
                    <text x="18" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Frontline billing state machines &amp; mobile dispatch routing workflows
                    </text>
                    <text x="18" y="112" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Human-in-the-loop authorization gates with audit loggers
                    </text>
                    <rect x="18" y="132" width="168" height="18" rx="2" fill="#EFE8D8" stroke="#DDD7C8" strokeWidth="0.8" />
                    <text x="102" y="145" textAnchor="middle" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      RUNTIME ENGINE // FLOWCRAFT
                    </text>
                  </g>

                  {/* Pattern Card 3 */}
                  <g transform="translate(850, 0)">
                    <rect width="395" height="166" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="5" height="166" fill="#1E2024" />
                    <text x="18" y="24" fill="#68645C" fontSize="10" fontFamily="monospace" fontWeight="700">
                      COMMONS PATTERN 03 // HARNESSES
                    </text>
                    <text x="18" y="48" fill="#1E2024" fontSize="16" fontFamily="serif" fontWeight="700">
                      Deterministic Caller Fixtures
                    </text>
                    <text x="18" y="72" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Multi-agent verification suites testing edge cases on dirty data
                    </text>
                    <text x="18" y="92" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Invariant boundary stress-tests &amp; adversarial prompt filters
                    </text>
                    <text x="18" y="112" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      &bull; Deterministic regression benchmarks runnable on developer PCs
                    </text>
                    <rect x="18" y="132" width="160" height="18" rx="2" fill="#EFE8D8" stroke="#DDD7C8" strokeWidth="0.8" />
                    <text x="98" y="145" textAnchor="middle" fill="#1E2024" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      FACTORY GATES // THE RIG
                    </text>
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
