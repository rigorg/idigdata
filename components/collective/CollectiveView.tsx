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
          <p className={s.eyebrow}>AN ORGANIZING COLLECTIVE // OPEN SOURCE &amp; SOVEREIGN</p>
          <h1 className={s.heroTitle}>
            The Collective<span>.</span>
          </h1>
          <p className={s.heroDek}>
            The Collective brings together the enterprise agentic systems I am building and an invitation to develop them with other practitioners.
          </p>
          <div style={{ maxWidth: "860px", color: "var(--ink)", fontSize: "16px", lineHeight: "1.7", marginBottom: "36px" }}>
            <p style={{ marginBottom: "14px" }}>
              Every human operator can now be their own software factory. The Rig couples an experienced operator with agentic build harnesses to map, fabricate, and run systems that match how an enterprise actually functions.
            </p>
            <p style={{ marginBottom: "14px" }}>
              Software is not a static purchase or a rented seat. It is an <strong>org-instance structure</strong> with a continuous learning loop. Authoritative orgs map domain truth and execute operations, while firm instances run the daily work.
            </p>
            <p style={{ marginBottom: "14px" }}>
              <strong>What works today:</strong> deterministic developer harnesses running on local iron, structured schema boundaries that isolate sensitive ledgers, and verified workflow blocks.
            </p>
            <p style={{ marginBottom: "14px" }}>
              <strong>What we are developing:</strong> open pattern sharing across sovereign orgs, composable multi-seat collaboration, and severable enterprise architectures that reduce recurring vendor lock-in.
            </p>
            <p style={{ marginBottom: "14px" }}>
              <strong>We are not claiming we have it all figured out. This is the seed.</strong> We are pulling the pieces together, and we are looking for passionate builders to join the collective. I am sharing the architecture, the runtimes, and the harnesses so we can collaborate, build open patterns, and create something durable together.
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
                viewBox="0 0 1200 724"
                className={s.diagramSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="The Collective Sovereign Architecture: Private Iron connected to the Collective Pattern Commons"
              >
                {/* Precision background drafting grid */}
                <defs>
                  <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="12" cy="12" r="0.75" fill="#DDD7C8" />
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
                </defs>

                <rect width="1200" height="724" fill="url(#archGrid)" />

                {/* ========================================================
                    UPPER ENVELOPE: SOVEREIGN ENTERPRISE IRON PERIMETER
                    ======================================================== */}
                <rect x="40" y="20" width="1120" height="434" rx="6" fill="#FAF6EE" stroke="#B8B0A0" strokeWidth="1.5" strokeDasharray="6 4" />
                
                {/* Engineering Corner Crosshairs */}
                <g stroke="#9E7D3B" strokeWidth="1.2">
                  <path d="M 32 20 L 48 20 M 40 12 L 40 28" />
                  <path d="M 1152 20 L 1168 20 M 1160 12 L 1160 28" />
                  <path d="M 32 454 L 48 454 M 40 446 L 40 462" />
                  <path d="M 1152 454 L 1168 454 M 1160 446 L 1160 462" />
                </g>

                {/* Perimeter Header Badges */}
                <rect x="56" y="32" width="340" height="24" rx="2" fill="#1E2024" />
                <text x="68" y="48" fill="#FAF6EE" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  SOVEREIGN HUMAN FACTORY // PRIVATE IRON
                </text>
                
                <rect x="760" y="32" width="260" height="24" rx="2" fill="#FFFFFF" stroke="#DDD7C8" />
                <circle cx="774" cy="44" r="4" fill="#16A34A" />
                <text x="786" y="47.5" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="600">
                  Private Iron &bull; Sovereign &amp; Severable
                </text>

                <text x="1144" y="48" textAnchor="end" fill="#9E7D3B" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                  SPEC // SPEC-COL-01
                </text>

                {/* ========================================================
                    VECTOR CONDUITS BETWEEN NODES
                    ======================================================== */}
                {/* Top to Southwest Factory */}
                <path d="M 480 140 L 290 258" stroke="#B8B0A0" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(315, 185)">
                  <rect width="120" height="20" rx="2" fill="#FAF6EE" stroke="#DDD7C8" />
                  <text x="60" y="14" textAnchor="middle" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                    SCHEMAS &#8601;
                  </text>
                </g>

                {/* Top to Center Rosette (Intent Conduit) */}
                <path d="M 600 140 L 600 166" stroke="#9E7D3B" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(565, 145)">
                  <rect width="70" height="18" rx="2" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="0.8" />
                  <text x="35" y="13" textAnchor="middle" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="700">
                    INTENT &darr;
                  </text>
                </g>

                {/* Southwest Factory to Center Rosette */}
                <path d="M 380 300 L 470 300" stroke="#6C552F" strokeWidth="1.8" markerEnd="url(#flowArrow)" />
                <g transform="translate(388, 289)">
                  <rect width="80" height="22" rx="2" fill="#FAF6EE" stroke="#DDD7C8" />
                  <text x="40" y="15" textAnchor="middle" fill="#6C552F" fontSize="8" fontFamily="monospace" fontWeight="700">
                    VERIFIED &rarr;
                  </text>
                </g>

                {/* Center Rosette to Southeast Runtime */}
                <path d="M 730 300 L 814 300" stroke="#9E7D3B" strokeWidth="1.8" markerEnd="url(#flowArrow)" />
                <g transform="translate(734, 289)">
                  <rect width="78" height="22" rx="2" fill="#FAF6EE" stroke="#DDD7C8" />
                  <text x="39" y="15" textAnchor="middle" fill="#9E7D3B" fontSize="8" fontFamily="monospace" fontWeight="700">
                    &rarr; RUNTIME
                  </text>
                </g>

                {/* Southeast Runtime Feedback to Top Node */}
                <path d="M 910 258 L 720 140" stroke="#B8B0A0" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#flowArrow)" />
                <g transform="translate(765, 185)">
                  <rect width="120" height="20" rx="2" fill="#FAF6EE" stroke="#DDD7C8" />
                  <text x="60" y="14" textAnchor="middle" fill="#9E7D3B" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                    &#8598; FEEDBACK
                  </text>
                </g>

                {/* ========================================================
                    NODE 1: NORTH - DOMAIN TRUTH & SPECIFICATION (B.O.S.S.)
                    ======================================================== */}
                <g transform="translate(420, 60)">
                  <rect width="360" height="80" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="360" height="4" fill="#9E7D3B" />
                  
                  {/* Badge */}
                  <rect x="254" y="10" width="94" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="301" y="23" textAnchor="middle" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="700">B.O.S.S.</text>
                  
                  <text x="16" y="23" fill="#9E7D3B" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    01 // DOMAIN TRUTH
                  </text>
                  <text x="16" y="47" fill="#1E2024" fontSize="17" fontFamily="serif" fontWeight="700">
                    Unwritten Operating Reality
                  </text>
                  <text x="16" y="66" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    Frontline heuristics codified into deterministic schemas
                  </text>
                </g>

                {/* ========================================================
                    NODE 2: SOUTHWEST - AUTONOMOUS SOFTWARE FACTORY (THE RIG)
                    ======================================================== */}
                <g transform="translate(60, 258)">
                  <rect width="320" height="84" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="320" height="4" fill="#1E2024" />

                  {/* Badge */}
                  <rect x="220" y="10" width="90" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="265" y="23" textAnchor="middle" fill="#1E2024" fontSize="9" fontFamily="monospace" fontWeight="700">THE RIG</text>

                  <text x="16" y="23" fill="#68645C" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    02 // SOFTWARE FACTORY
                  </text>
                  <text x="16" y="48" fill="#1E2024" fontSize="18" fontFamily="serif" fontWeight="700">
                    Autonomous Build &amp; Proof
                  </text>
                  <text x="16" y="68" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    Deterministic fabrication verified against caller test gates
                  </text>
                </g>

                {/* ========================================================
                    NODE 3: SOUTHEAST - OPERATIONAL RUNTIME (FLOWCRAFT)
                    ======================================================== */}
                <g transform="translate(820, 258)">
                  <rect width="320" height="84" rx="4" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                  <rect x="0" y="0" width="320" height="4" fill="#9E7D3B" />

                  {/* Badge */}
                  <rect x="206" y="10" width="104" height="18" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="0.8" />
                  <text x="258" y="23" textAnchor="middle" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="700">FLOWCRAFT</text>

                  <text x="16" y="23" fill="#9E7D3B" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                    03 // AGENTIC RUNTIME
                  </text>
                  <text x="16" y="48" fill="#1E2024" fontSize="18" fontFamily="serif" fontWeight="700">
                    Live Execution &amp; State
                  </text>
                  <text x="16" y="68" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                    Human + agent workflows orchestrating existing ledgers
                  </text>
                </g>

                {/* ========================================================
                    CONCENTRIC FOCAL DIAL (DIAMETER = 250px)
                    - TOP CROWN PLAQUE: Intent = Outcome
                    - INNER CORE DISC: Delivered / Deterministic Proof
                    - ZERO JARGON: 'The Flash Spot' and 'The Living Seam' removed
                    ======================================================== */}
                <g transform="translate(600, 300)">
                  {/* Outer Bezel (r=125) */}
                  <circle cx="0" cy="0" r="125" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="2" />
                  
                  {/* Outer Chapter Track (r=113) */}
                  <circle cx="0" cy="0" r="113" fill="none" stroke="#DDD7C8" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Calibrated Radial Dial Ticks */}
                  <g stroke="#9E7D3B" strokeWidth="1.2">
                    {/* Cardinal Major Marks */}
                    <line x1="0" y1="-125" x2="0" y2="-115" />
                    <line x1="0" y1="115" x2="0" y2="125" />
                    <line x1="-125" y1="0" x2="-115" y2="0" />
                    <line x1="115" y1="0" x2="125" y2="0" />
                    {/* Diagonal Minor Marks */}
                    <line x1="-88" y1="-88" x2="-81" y2="-81" />
                    <line x1="81" y1="-81" x2="88" y2="-88" />
                    <line x1="-88" y1="88" x2="-81" y2="81" />
                    <line x1="81" y1="81" x2="88" y2="88" />
                  </g>

                  {/* Middle Annular Track (r=88) */}
                  <circle cx="0" cy="0" r="88" fill="#FDFCFA" stroke="#DDD7C8" strokeWidth="1.2" />
                  <circle cx="0" cy="0" r="68" fill="none" stroke="#DDD7C8" strokeWidth="1" strokeDasharray="4 3" />

                  {/* TOP CROWN PLAQUE: INTENT = OUTCOME */}
                  <g transform="translate(0, -114)">
                    <rect x="-85" y="-13" width="170" height="26" rx="13" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1.5" />
                    <text x="0" y="5" textAnchor="middle" fill="#1E2024" fontSize="13" fontFamily="serif" fontWeight="700" letterSpacing="0.02em">
                      Intent = Outcome
                    </text>
                  </g>

                  {/* Inner Core Disc (r=56) */}
                  <circle cx="0" cy="0" r="56" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1.8" />
                  <circle cx="0" cy="0" r="48" fill="none" stroke="#EFECE4" strokeWidth="1" strokeDasharray="2 2" />

                  {/* CENTER ANNUNCIATOR: SHIPPED */}
                  <g transform="translate(0, -6)">
                    <rect x="-44" y="-11" width="88" height="22" rx="3" fill="#0D542B" stroke="#16A34A" strokeWidth="1" />
                    {/* Glowing status radar ping */}
                    <circle cx="-28" cy="0" r="5" fill="none" stroke="#4ADE80" strokeWidth="0.6" strokeOpacity="0.5" />
                    <circle cx="-28" cy="0" r="2.5" fill="#4ADE80" />
                    <text x="6" y="3.5" textAnchor="middle" fill="#FAF6EE" fontSize="10" fontFamily="monospace" fontWeight="800" letterSpacing="0.18em">
                      SHIPPED
                    </text>
                  </g>

                  {/* VERIFICATION AXIOM */}
                  <text x="0" y="21" textAnchor="middle" fill="#1E2024" fontSize="10.5" fontFamily="serif" fontWeight="700">
                    Deterministic Proof
                  </text>
                  <text x="0" y="34" textAnchor="middle" fill="#6C552F" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
                    VERIFIED RUNTIME
                  </text>

                  {/* Cardinal Crosshair Pointers (outside the rim connecting to conduit lines) */}
                  <line x1="-135" y1="0" x2="-125" y2="0" stroke="#9E7D3B" strokeWidth="1.5" />
                  <line x1="125" y1="0" x2="135" y2="0" stroke="#9E7D3B" strokeWidth="1.5" />
                </g>

                {/* ========================================================
                    MID-PLANE: VERTICAL PATTERN CONDUITS (SOVEREIGN <-> COMMONS)
                    ======================================================== */}
                <g stroke="#9E7D3B" strokeWidth="1.5">
                  <line x1="510" y1="454" x2="510" y2="520" strokeDasharray="3 3" markerEnd="url(#arrowDown)" />
                </g>
                <g transform="translate(320, 474)">
                  <rect width="170" height="22" rx="2" fill="#FFFFFF" stroke="#9E7D3B" strokeWidth="1" />
                  <text x="85" y="15" textAnchor="middle" fill="#6C552F" fontSize="9" fontFamily="monospace" fontWeight="700">
                    SHARE PATTERNS &darr;
                  </text>
                  <text x="85" y="32" textAnchor="middle" fill="#68645C" fontSize="8.5" fontFamily="sans-serif">
                    Zero Private Data
                  </text>
                </g>

                <g stroke="#1E2024" strokeWidth="1.5">
                  <line x1="690" y1="520" x2="690" y2="454" strokeDasharray="3 3" markerEnd="url(#arrowUp)" />
                </g>
                <g transform="translate(710, 474)">
                  <rect width="170" height="22" rx="2" fill="#1E2024" />
                  <text x="85" y="15" textAnchor="middle" fill="#FAF6EE" fontSize="9" fontFamily="monospace" fontWeight="700">
                    &uarr; PULL PATTERNS
                  </text>
                  <text x="85" y="32" textAnchor="middle" fill="#68645C" fontSize="8.5" fontFamily="sans-serif">
                    Pre-Verified Blocks &amp; Harnesses
                  </text>
                </g>

                {/* ========================================================
                    LOWER BASE: THE COLLECTIVE PATTERN COMMONS
                    ======================================================== */}
                <rect x="40" y="524" width="1120" height="160" rx="6" fill="#FFFFFF" stroke="#1E2024" strokeWidth="1.5" />
                <rect x="40" y="524" width="1120" height="28" fill="#1E2024" />
                
                <text x="56" y="542" fill="#FAF6EE" fontSize="10.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.1em">
                  THE COLLECTIVE PATTERN COMMONS // PEER BUILDER EXCHANGE (OPEN SOURCE)
                </text>
                <text x="1144" y="542" textAnchor="end" fill="#D4C29A" fontSize="9.5" fontFamily="monospace" fontWeight="600">
                  OPEN SOURCE &bull; ANONYMIZED PATTERNS &bull; ZEROS AND ONES
                </text>

                <g transform="translate(56, 564)">
                  {/* Pattern Card 1 */}
                  <g transform="translate(0, 0)">
                    <rect width="344" height="104" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="104" fill="#9E7D3B" />
                    <text x="16" y="20" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">
                      01 // DOMAIN SCHEMAS
                    </text>
                    <text x="16" y="42" fill="#1E2024" fontSize="15" fontFamily="serif" fontWeight="700">
                      Operational Invariants
                    </text>
                    <text x="16" y="63" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      Tolerances, price limits &amp; inventory balance rules
                    </text>
                    <text x="16" y="86" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      SPEC // B.O.S.S.
                    </text>
                  </g>

                  {/* Pattern Card 2 */}
                  <g transform="translate(372, 0)">
                    <rect width="344" height="104" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="104" fill="#9E7D3B" />
                    <text x="16" y="20" fill="#9E7D3B" fontSize="9" fontFamily="monospace" fontWeight="700">
                      02 // WORKFLOW BLOCKS
                    </text>
                    <text x="16" y="42" fill="#1E2024" fontSize="15" fontFamily="serif" fontWeight="700">
                      Composable WFBs
                    </text>
                    <text x="16" y="63" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      QuickBooks, ERP connectors &amp; dispatch state machines
                    </text>
                    <text x="16" y="86" fill="#6C552F" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      RUNTIME // FLOWCRAFT
                    </text>
                  </g>

                  {/* Pattern Card 3 */}
                  <g transform="translate(744, 0)">
                    <rect width="344" height="104" rx="3" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
                    <rect width="4" height="104" fill="#1E2024" />
                    <text x="16" y="20" fill="#68645C" fontSize="9" fontFamily="monospace" fontWeight="700">
                      03 // TEST HARNESSES
                    </text>
                    <text x="16" y="42" fill="#1E2024" fontSize="15" fontFamily="serif" fontWeight="700">
                      Caller Fixtures
                    </text>
                    <text x="16" y="63" fill="#68645C" fontSize="11" fontFamily="sans-serif">
                      Multi-agent verification suites &amp; edge-case test gates
                    </text>
                    <text x="16" y="86" fill="#1E2024" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                      FACTORY // THE RIG
                    </text>
                  </g>
                </g>
              </svg>
            </div>

            <div className={s.specCaption}>
              <div>
                <strong>Org-Instance Sovereignty &amp; Built-In Factory:</strong> The Rig creates the org-instance structure. B.O.S.S. and FlowCraft each hold an authoritative org and spawn as many firm instances as needed. Each org is designed with built-in development harnesses—architected to be severable and runnable on private iron to minimize vendor dependencies.
              </div>
              <div>
                <strong>The Workflow Block Network Effect:</strong> The patterns are driven through composable workflow blocks (WFBs). When connected to The Collective, workflow blocks updated in one org flow through to the other, through The Rig. The collective library compounds while private data and ledgers remain within your operational boundary.
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
              To make a collective work in practice, you need a deterministic stack. Three systems designed to work together, grounding twenty years of plant-floor operating experience into modern agentic runtimes.
            </p>
          </div>

          <div className={s.systemsGrid}>
            {/* System 1: B.O.S.S. */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>DOMAIN TRUTH &bull; SPECIFICATION (ORG)</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>Business Operating System Specification</div>
                <p className={s.systemBody}>
                  Every business runs on unwritten plant-floor judgment, Mary&rsquo;s edge-case scheduling spreadsheet, and thirty years of experience that never made it into the software manual. B.O.S.S. is the authoritative specification org that maps and digitally twins that domain truth—capturing business rules, exception boundaries, and operational invariants into clear, machine-actionable schemas. An enterprise can take a B.O.S.S. org and run it entirely on their own private iron; it carries its own built-in factory inside.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Domain mapping &amp; specification. Turns tacit human heuristics into unambiguous schemas so agents understand real operating constraints before touching anything.
                </p>
              </div>
            </div>

            {/* System 2: FlowCraft */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>OPERATIONAL RUNTIME &bull; ORG &amp; INSTANCES</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>Workflow Operating System</div>
                <p className={s.systemBody}>
                  The live operational runtime. FlowCraft structures execution across an authoritative org and as many running firm instances as the business requires. It bridges existing systems, databases, and autonomous agent swarms—composing named workflow blocks into isolated, severable companies that actually run, with shared Master Data (MDM), live permissions, state machines, and complete audit trails.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Live execution across instances. Runs composable workflow blocks around ledgers like QuickBooks or ERPs, keeping humans in authorization command.
                </p>
              </div>
            </div>

            {/* System 3: The Rig */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>SOFTWARE FACTORY &bull; BUILDS THE MACHINES</span>
                <h3 className={s.systemTitle}>The Rig</h3>
                <div className={s.systemSub}>The Machine That Builds The Machines</div>
                <p className={s.systemBody}>
                  The Rig creates living assets of value. It is the machine that builds the machines that build assets—and builds the machines that can build themselves. The Rig provisions the org-instance structure for B.O.S.S. and FlowCraft, runs multi-seat synthesis, deterministic caller gates, and verified test harnesses. When workflow blocks are updated in one org, they flow through to the other, through The Rig.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>HOW IT IS USED</span>
                <p className={s.systemUseCaseText}>
                  Asset fabrication &amp; cross-org flow. Builds, tests, and verifies custom operational blocks on local developer iron, and distributes updated workflow blocks across the collective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Architectural Flywheel // Org-Instance & The Workflow Block Commons */}
      <section className={s.flywheelSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>THE ARCHITECTURAL FLYWHEEL // ORG-INSTANCE &amp; WORKFLOW BLOCK FLOW</p>
            <h2>Machines that build themselves. Patterns that flow<span>.</span></h2>
            <p>
              Two foundational principles govern the architecture: complete sovereignty on private iron through the org-instance model, and compound capability through workflow block flow across The Collective.
            </p>
          </div>

          <div className={s.flywheelGrid}>
            {/* Flywheel Card 1 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>01 // ORG-INSTANCE STRUCTURE</span>
                <h3 className={s.flywheelTitle}>The Machine That Builds the Machines</h3>
                <p className={s.flywheelText}>
                  The Rig does not just generate scripts; it creates living assets of value. It is the machine that builds the machines that build assets—and builds the machines that can build themselves. The Rig designs and provisions the <strong>org-instance structure</strong>: both B.O.S.S. and FlowCraft each maintain an authoritative org, and spin up as many running firm instances as needed.
                </p>
                <p className={s.flywheelText}>
                  Every org carries its own <strong>built-in software factory</strong>. It is completely sovereign and severable from day one: an enterprise can take a B.O.S.S. or FlowCraft org and run it entirely on their own private iron, operating autonomously with its own internal build capability.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>BUILT-IN FACTORY // PRIVATE IRON</span>
                <p className={s.flywheelBoxText}>
                  Each org is self-contained. Take an org and run it yourself on private iron—it has its own built-in factory, zero cloud locks, and zero per-seat rent.
                </p>
              </div>
            </div>

            {/* Flywheel Card 2 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>02 // THE PATTERN COMMONS</span>
                <h3 className={s.flywheelTitle}>Workflow Blocks Flow Through The Rig</h3>
                <p className={s.flywheelText}>
                  The collective&rsquo;s patterns are mainly driven through <strong>Workflow Blocks (WFBs)</strong>—modular, verified operational building blocks for accounting connectors, inventory state machines, and frontline dispatch.
                </p>
                <p className={s.flywheelText}>
                  When an org stays a part of The Collective, the network effect ignites: <strong>workflow blocks that get updated in one org, flow through to the other, through The Rig</strong>. When one builder solves an edge-case ERP reconciliation or refines a receiving state machine, that verified pattern flows to every rig in the collective.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>COMPOUND CAPABILITY // OPEN COMMONS</span>
                <p className={s.flywheelBoxText}>
                  Patterns compound across all rigs while your accounting ledgers, transactions, and customer relationships remain 100% private and sovereign.
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
            <p className={s.eyebrow}>OPERATIONAL BLUEPRINTS // INTENT = OUTCOME</p>
            <h2>Tested on operational patterns. Practical proof<span>.</span></h2>
            <p>
              The Collective is an applied operational lab. When you combine domain mapping (B.O.S.S.), code fabrication (The Rig), and runtime execution (FlowCraft), working sovereign systems take shape:
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
                <li><strong>Outcome:</strong> A working operational blueprint Dave's shop can own and evolve. Zero per-seat rent.</li>
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

      {/* Section: Two Ways to Engage */}
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
                <p className={s.doorEyebrow}>PATH 01 // OPEN SOURCE &amp; PEER COLLABORATION</p>
                <h3 className={s.doorTitle}>Join the Collective. Build with us.</h3>
                <p className={s.doorBody}>
                  For software builders, systems architects, and technical operators who want to build real enterprise agentics. Run a Rig on your own iron, explore open schemas, test local developer harnesses, and collaborate with us on verified, severable workflow blocks. We are looking for passionate builders to pull the pieces together, share our zeros and ones, and create something special.
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
                  Have an operational bottleneck, an unyielding legacy ERP, or a mission-critical workflow trapped on whiteboards? We use B.O.S.S. to map domain truth, The Rig to fabricate and verify the code, and FlowCraft to deploy a living, sovereign system around how your team actually works. Zero per-seat rent. You own the code.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
                <Link
                  href="/block/"
                  className={`${s.doorBtn} ${s.doorBtnSecondary}`}
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                >
                  <span>Explore Delivery Blocks &rarr;</span>
                </Link>
                <button
                  type="button"
                  onClick={() => handleInterestSelect("build")}
                  className={s.doorBtn}
                  style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--border)" }}
                >
                  <span>Direct Note to Rob &rarr;</span>
                </button>
              </div>
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
              Direct to my desk. Tell me what you are building, an operational problem you are trying to solve, or why you want to collaborate in the collective.
            </p>
          </div>

          {submitStatus === "sent" || submitStatus === "recorded" ? (
            <div className={`${s.statusMessage} ${s.statusSuccess}`}>
              {submitStatus === "sent" ? (
                <>
                  <strong>Message received.</strong> Thank you for reaching out. Your note has been sent directly to Rob. He will review it and reply directly to your email shortly.
                </>
              ) : (
                <>
                  <strong>Note recorded.</strong> Thank you for reaching out. Your note has been safely recorded. Direct email notification is unconfirmed on this environment — write robert@idigdata.com directly if you need a same-day response.
                </>
              )}
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
                  <option value="collaborate">Join The Collective // Open Source Collaboration &amp; Shared Patterns</option>
                  <option value="build">Commission a Sovereign Enterprise Build (Zero Per-Seat Rent)</option>
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
                {submitting ? "Sending to Rob's Desk..." : "Send Note Directly to Rob →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
