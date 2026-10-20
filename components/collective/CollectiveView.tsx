"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./CollectiveView.module.css";

/**
 * Hexagonal Rosette & Braided Orbital Spot on Warm Paper
 * Accompanies the opening invitation with continuity, care, and human-agent connection.
 */
function EnterpriseHiveSpot() {
  return (
    <svg viewBox="0 0 280 280" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="plateDotGrid" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="0.95" fill="#CFC7B6" />
        </pattern>
        <pattern id="hexFineHatch" width="5" height="5" patternTransform="rotate(35 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#9E7D3B" strokeWidth="0.55" opacity="0.32" />
        </pattern>
        <radialGradient id="hivePaperGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FFFDF8" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#FAF6EE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#EFE8D8" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Warm ivory drafting paper background & subtle border */}
      <rect width="280" height="280" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
      <rect width="280" height="280" fill="url(#hivePaperGlow)" />
      <rect x="8" y="8" width="264" height="264" fill="url(#plateDotGrid)" />

      {/* Fine Drafting Axis Hairlines */}
      <g stroke="#9E7D3B" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4">
        <line x1="140" y1="14" x2="140" y2="266" />
        <line x1="14" y1="140" x2="266" y2="140" />
        <line x1="45" y1="45" x2="235" y2="235" />
        <line x1="235" y1="45" x2="45" y2="235" />
      </g>

      {/* Outer Orbital Weave */}
      <circle cx="140" cy="140" r="118" fill="none" stroke="#1E2024" strokeWidth="0.6" opacity="0.28" />
      <circle cx="140" cy="140" r="112" fill="none" stroke="#9E7D3B" strokeWidth="0.95" strokeDasharray="3 4" opacity="0.7" />
      <ellipse cx="140" cy="140" rx="116" ry="104" transform="rotate(22 140 140)" fill="none" stroke="#9E7D3B" strokeWidth="0.7" opacity="0.48" />
      <ellipse cx="140" cy="140" rx="116" ry="104" transform="rotate(-22 140 140)" fill="none" stroke="#1E2024" strokeWidth="0.55" opacity="0.25" />
      <circle cx="140" cy="140" r="95" fill="none" stroke="#1E2024" strokeWidth="0.7" opacity="0.28" />

      {/* Connecting Lines */}
      <g stroke="#9E7D3B" strokeWidth="0.6" opacity="0.4" fill="none">
        <polygon points="140,45 222,92.5 222,187.5 140,235 58,187.5 58,92.5" />
        <polygon points="187.5,58 235,140 187.5,222 92.5,222 45,140 92.5,58" stroke="#1E2024" opacity="0.25" />
      </g>

      {/* Outer Orbital Pattern Nodes */}
      <g fill="#FAF6EE" stroke="#1E2024" strokeWidth="1">
        <circle cx="140" cy="28" r="4" />
        <circle cx="140" cy="28" r="1.4" fill="#9E7D3B" stroke="none" />
        <circle cx="237" cy="84" r="4" />
        <circle cx="237" cy="84" r="1.4" fill="#9E7D3B" stroke="none" />
        <circle cx="237" cy="196" r="4" />
        <circle cx="237" cy="196" r="1.4" fill="#9E7D3B" stroke="none" />
        <circle cx="140" cy="252" r="4" />
        <circle cx="140" cy="252" r="1.4" fill="#9E7D3B" stroke="none" />
        <circle cx="43" cy="196" r="4" />
        <circle cx="43" cy="196" r="1.4" fill="#9E7D3B" stroke="none" />
        <circle cx="43" cy="84" r="4" />
        <circle cx="43" cy="84" r="1.4" fill="#9E7D3B" stroke="none" />
      </g>

      {/* 7-Cell Rosette */}
      <g stroke="#9E7D3B" strokeWidth="1.7" fill="#FAF6EE" strokeLinejoin="round">
        {/* Top cell */}
        <polygon points="140,56 164,70 164,98 140,112 116,98 116,70" />
        <polygon points="140,60 160,72 160,96 140,108 120,96 120,72" fill="url(#hexFineHatch)" stroke="none" />
        {/* Top-right cell */}
        <polygon points="185,82 209,96 209,124 185,138 161,124 161,96" />
        <polygon points="185,86 205,98 205,122 185,134 165,122 165,98" fill="url(#hexFineHatch)" stroke="none" />
        {/* Bottom-right cell */}
        <polygon points="185,134 209,148 209,176 185,190 161,176 161,148" />
        <polygon points="185,138 205,150 205,174 185,186 165,174 165,150" fill="url(#hexFineHatch)" stroke="none" />
        {/* Bottom cell */}
        <polygon points="140,160 164,174 164,202 140,216 116,202 116,174" />
        <polygon points="140,164 160,176 160,200 140,212 120,200 120,176" fill="url(#hexFineHatch)" stroke="none" />
        {/* Bottom-left cell */}
        <polygon points="95,134 119,148 119,176 95,190 71,176 71,148" />
        <polygon points="95,138 115,150 115,174 95,186 75,174 75,150" fill="url(#hexFineHatch)" stroke="none" />
        {/* Top-left cell */}
        <polygon points="95,82 119,96 119,124 95,138 71,124 71,96" />
        <polygon points="95,86 115,98 115,122 95,134 75,122 75,98" fill="url(#hexFineHatch)" stroke="none" />
        {/* Center cell */}
        <polygon points="140,108 164,122 164,150 140,164 116,150 116,122" fill="#F4EFE5" stroke="#1E2024" strokeWidth="2.2" />
      </g>

      {/* Spokes Between Center and Surrounding Cells */}
      <g stroke="#1E2024" strokeWidth="0.9" opacity="0.55">
        <line x1="140" y1="116" x2="140" y2="92" />
        <line x1="160" y1="124" x2="178" y2="114" />
        <line x1="160" y1="148" x2="178" y2="158" />
        <line x1="140" y1="156" x2="140" y2="180" />
        <line x1="120" y1="148" x2="102" y2="158" />
        <line x1="120" y1="124" x2="102" y2="114" />
      </g>

      {/* Inner core ring & node points */}
      <circle cx="140" cy="136" r="15" fill="#FAF6EE" stroke="#9E7D3B" strokeWidth="1.3" />
      <circle cx="140" cy="136" r="5" fill="#1E2024" />
      <circle cx="140" cy="136" r="1.8" fill="#FAF6EE" />

      <circle cx="140" cy="84" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />
      <circle cx="185" cy="110" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />
      <circle cx="185" cy="162" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />
      <circle cx="140" cy="188" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />
      <circle cx="95" cy="162" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />
      <circle cx="95" cy="110" r="3.2" fill="#FAF6EE" stroke="#1E2024" strokeWidth="1.1" />

      {/* Corner calibration tick marks */}
      <path d="M 14 28 L 14 14 L 28 14" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 266 28 L 266 14 L 252 14" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 14 252 L 14 266 L 28 266" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 266 252 L 266 266 L 252 266" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
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
            `Topic: ${formState.interest === "collaborate" ? "Compare Notes & Shared Patterns" : "Discuss an Operating Problem"}`,
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
      {/* ====================================================================
          HERO: PEOPLE FIRST ("What we learn should carry forward.")
          ==================================================================== */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <p className={s.eyebrow}>THE COLLECTIVE</p>
            <h1 className={s.heroTitle}>
              What we learn should carry forward<span>.</span>
            </h1>
            <p className={s.heroDek}>
              People and agents, learning through the work—and leaving something useful for the next person.
            </p>

            <div className={s.leadBody}>
              <p style={{ marginBottom: "12px" }}>
                I&rsquo;ve spent most of my working life next to people who know things their systems don&rsquo;t. They know why a number needs a second look, when a plan won&rsquo;t hold, and who to call when the screen says everything is fine. A lot of what keeps a business running lives in those people, and almost none of it is written down anywhere a system can read.
              </p>
              <p style={{ marginBottom: "12px" }}>
                I don&rsquo;t think that knowledge has to walk out the door when the project ends or the person moves on. It can be given a form someone else can read, question, and improve. Agents are good at the writing-down and the carrying. People bring the judgment, the reasons, and the memory of what actually happened on the floor.
              </p>
              <p style={{ marginBottom: "16px" }}>
                That&rsquo;s what the Collective is. I&rsquo;ve got some patterns and three working systems from a few thousand hours in this, and I&rsquo;m opening the door. Not a product, not a pitch. A place to compare notes, build together, and leave the next person a better place to start. Every company keeps its own records and its own direction. If that sounds like your kind of work, write me.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px", marginBottom: "16px", alignItems: "center" }}>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
                style={{ fontSize: "12px", padding: "10px 18px" }}
              >
                Compare notes with Robert &rarr;
              </button>
              <Link
                href="/agentic-ai/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink)",
                  textDecoration: "underline",
                  padding: "10px 6px",
                }}
              >
                Learn through the work &rarr;
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
                <span className={s.plateTag}>THE COLLECTIVE ROSETTE &bull; PEOPLE &#8644; AGENTS &#8644; PATTERNS</span>
                <EnterpriseHiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>PEOPLE</strong>
                    <span>Knowing the Work</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>AGENTS</strong>
                    <span>Working Together</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>PATTERNS</strong>
                    <span>Shared by Choice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            FOLLOWING SECTION: A SMALL EXAMPLE BEFORE THE SYSTEMS
            ==================================================================== */}
        <div className={s.heroBottomPlate}>
          <div className={s.commonsPlate}>
            <div className={s.commonsBar}>
              <span className={s.commonsTag}>01 / HOW A LESSON TRAVELS</span>
              <div className={s.commonsLive}>
                <span className={s.commonsLiveDot} />
                <span>SHARED BY CHOICE &bull; YOUR COMPANY KEEPS ITS RECORDS</span>
              </div>
            </div>

            <div style={{ padding: "24px 28px 18px", borderBottom: "1px solid var(--line)" }}>
              <h2
                style={{
                  fontFamily: "var(--next-font-display), Georgia, serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  margin: "0 0 12px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                A lesson can travel without taking the business with it<span>.</span>
              </h2>
              <p style={{ fontSize: "15.5px", lineHeight: 1.72, color: "var(--ink)", margin: "0 0 12px 0", maxWidth: "880px" }}>
                An approval that looks like one click on the screen may depend on someone being out, a spending limit, and a decision made last month. Working through that exception teaches you a better way to build the workflow. With permission, that lesson becomes a pattern another team can pick up and adapt. Their plant is different. Their rules are different. The lesson still gives them a better place to begin.
              </p>
              <p style={{ fontSize: "15.5px", lineHeight: 1.72, color: "var(--muted)", margin: 0, maxWidth: "880px" }}>
                Sharing is a choice, every time. Before a pattern leaves, it&rsquo;s reviewed for anything confidential. The team receiving it decides whether it fits. Nobody gives anything up to learn from each other.
              </p>
            </div>

            <div className={s.commonsGrid}>
              {/* Col 1 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>01 // UNDERSTAND &amp; SHAPE</span>
                  <h3 className={s.commonsColTitle}>The People Who Know the Work</h3>
                  <p className={s.commonsColText}>
                    Not months of interviews that end in a binder on a shelf. The people who actually do the work sit with agents in a working session, dig into why the exception happens, and shape a workflow they can see and argue with.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>HUMAN JUDGMENT:</strong> People set the purpose and the boundary.
                </div>
              </div>

              {/* Col 2 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>02 // REVIEW, TEST &amp; APPROVE</span>
                  <h3 className={s.commonsColTitle}>Prove It on Real Rules</h3>
                  <p className={s.commonsColText}>
                    The workflow runs against the real operating rules. People check what came out against what was meant, test the fix, approve what holds, and keep the evidence for next time.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>THE RULE:</strong> Propose in language. Admit by rule. Remember in the book.
                </div>
              </div>

              {/* Col 3 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>03 // SHARE BY CHOICE</span>
                  <h3 className={s.commonsColTitle}>A Better Place to Begin</h3>
                  <p className={s.commonsColText}>
                    Your company decides what, if anything, leaves the building. When a team shares a reviewed pattern, another team can read it, question it, and decide whether to adapt it.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>DELIBERATE CHOICE:</strong> Sharing and adopting are both your call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE SYSTEMS (B.O.S.S., FLOWCRAFT, THE RIG) — ONE SPINE, ONE LOOP
          ==================================================================== */}
      <section className={s.systemsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>02 / THE SYSTEMS</p>
            <h2>Three systems, one set of patterns<span>.</span></h2>
            <p>
              If you read the three chapters on{" "}
              <Link href="/agentic-ai/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}>
                Learn through the work
              </Link>
              , you&rsquo;ve already met these. <strong>Chapter One</strong> is where a business actually stands right now: that&rsquo;s <strong>B.O.S.S.</strong> <strong>Chapter Two</strong> is the business running every day with intelligence in the loop: that&rsquo;s <strong>FlowCraft.</strong> <strong>Chapter Three</strong> is the machine that builds the machines: that&rsquo;s <strong>The Rig.</strong> None of them is a pitch. They&rsquo;re the systems our own operation runs on, built on a few core patterns that have held up in real work. Each one tracks at the same level: an <strong>org</strong>, the <strong>instance</strong> of it that&rsquo;s actually running, the <strong>assets</strong> that instance holds, and the <strong>outcomes</strong> it produces. And every outcome runs the same loop: <strong>intent, define, build, outcome</strong>, with the outcome read back against the intent. That&rsquo;s the part that&rsquo;s ours. The rest I&rsquo;d rather show you than write up.
            </p>
          </div>

          <div className={s.systemsGrid} style={{ marginBottom: "36px" }}>
            {/* System 1 (Chapter One): B.O.S.S. */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>CHAPTER ONE // WHERE THE BUSINESS STANDS</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>The Front End of Everything &middot; Living Digital Twin</div>
                <p className={s.systemBody}>
                  Where a company finds out where it actually stands right now. The people who know the work map how the business really runs: orders, purchasing, production, inventory, service, master data. B.O.S.S. finds the data, organizes it, and builds a living digital twin you can read, question, and test against. From that twin you build the workflows an agentic operation needs, from where you stand, not from a slide. Project and change management live here too. And once the live instance is running, B.O.S.S. is what watches it.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>FROM THE WORK // ONE REAL BUSINESS, TWINNED</span>
                <p className={s.systemUseCaseText}>
                  Twenty-two operating domains and a 55-step order-to-cash-to-GL reference map, built while the business kept running. The twin is the instance. Every record on it is an asset with an owner, every reconciliation is an outcome you can check, and the live workflows get read back against that same map.
                </p>
              </div>
            </div>

            {/* System 2 (Chapter Two): FlowCraft */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>CHAPTER TWO // THE BUSINESS AS IT RUNS</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>The Live Operating Instance</div>
                <p className={s.systemBody}>
                  The operating instance of an operating company. This is where the real transactions run every day: purchase orders, payroll, receiving, approvals, close. Agents assemble the briefing and do the heavy lifting. Hard rules hold the policy and accounting lines. A real, authenticated person makes the call, and the permanent record goes in the book. Every workflow is built from where you stand in B.O.S.S., and B.O.S.S. watches it as it runs. We run our own company on it.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>FROM THE WORK // RUNNING THE REAL TRANSACTIONS</span>
                <p className={s.systemUseCaseText}>
                  Built for the workflows a company actually runs on—purchase orders, payroll, receiving, approvals, and close. Named workflow blocks an instance can run: one owner at a time, a receipt on every step, and the outcome read back against the intent that started it. Policy checks sit outside the model session, so the model can&rsquo;t talk its way past them.
                </p>
              </div>
            </div>

            {/* System 3 (Chapter Three): The Rig */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>CHAPTER THREE // THE FOUNDRY</span>
                <h3 className={s.systemTitle}>The Rig</h3>
                <div className={s.systemSub}>The Machine That Builds the Machines</div>
                <p className={s.systemBody}>
                  The foundry under the other two. Builders and several agent harnesses, from more than one vendor, design, build, and check software together. The work is agreed before anyone builds. Each harness gets a lane, shared comms, and a memory that outlasts the session. Independent checks, including an opposing model where the contract requires it, are recorded before anything lands. Lessons stay with the work. Same loop: intent, define, build, outcome. Here it&rsquo;s pointed at the building itself. B.O.S.S. and FlowCraft came out of it.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>FROM THE WORK // THIS SITE</span>
                <p className={s.systemUseCaseText}>
                  Several AI harnesses from different vendors, each in its own lane, working one shared ledger of agreed work, with an opposing model checking before anything lands. This site, B.O.S.S., and FlowCraft were all built and reviewed that way.
                </p>
              </div>
            </div>
          </div>

          {/* Master Architectural Paper-Drafting Plate (Placed After the Human Idea, Example, and Workshop Intro) */}
          <div className={s.blueprintPlateWrap}>
            <div className={s.blueprintPlateFrame} style={{ maxWidth: "1040px" }}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.blueprintPlateBar}>
                <span>ARCHITECTURAL DRAFTING PLATE // PEOPLE &amp; AGENTS &bull; B.O.S.S., FLOWCRAFT &amp; THE RIG &bull; PATTERNS SHARED BY CHOICE</span>
                <span>CONTINUOUS OUTCOME LOOP</span>
              </div>
              <Link
                href="/collective/plate/"
                className={s.blueprintPlateLink}
                aria-label="Open the Collective architectural paper plate at full size"
              >
                <Image
                  src="/diagrams/collective-living-paper-plate.svg"
                  alt="Architectural drafting plate showing people and agents learning through the work across B.O.S.S., FlowCraft, and The Rig"
                  width={1120}
                  height={830}
                  unoptimized
                  className={s.blueprintPlateImg}
                  style={{ maxWidth: "100%", height: "auto" }}
                  priority
                />
              </Link>
              <div style={{ textAlign: "center", padding: "10px 16px 4px" }}>
                <Link
                  href="/collective/plate/"
                  style={{
                    fontSize: "11.5px",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--brass-dark)",
                    textDecoration: "underline",
                  }}
                >
                  Open Full Architectural Plate &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: TWO DOORS OF INTERACTION (WHAT HAPPENS WHEN YOU WRITE)
          ==================================================================== */}
      <section className={s.doorsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>03 / WHAT HAPPENS WHEN YOU WRITE</p>
            <h2>Start with a straight conversation<span>.</span></h2>
            <p>
              You write to me. I read it myself. We compare what you&rsquo;re seeing in your work with what I&rsquo;m seeing in mine, and figure out whether there&rsquo;s something worth doing together. If you want in on the Collective, that&rsquo;s how you get in.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Compare Notes */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>PATH 01 // PEOPLE WHO LIVE CLOSE TO THE WORK</p>
                <h3 className={s.doorTitle}>Compare notes.</h3>
                <p className={s.doorBody}>
                  Plant floor, planning, Finance, running operations, or building with agents. Bring what you&rsquo;re learning, a workflow exception you&rsquo;re stuck on, or questions about how B.O.S.S., FlowCraft, and The Rig are built. If you&rsquo;ve got patterns of your own, even better.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
              >
                <span>Compare notes with Robert &rarr;</span>
              </button>
            </div>

            {/* Door 2: Operating Problem */}
            <div className={s.doorCard}>
              <div>
                <p className={s.doorEyebrow}>PATH 02 // WORKING THROUGH A REAL SEAM</p>
                <h3 className={s.doorTitle}>Talk through an operating problem.</h3>
                <p className={s.doorBody}>
                  For owners and operations leaders with a place where the official systems and the daily reality don&rsquo;t match. Tell me where the work between the screens is stuck. We&rsquo;ll look at it together and see if there&rsquo;s a practical first step worth testing.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
              >
                <span>Discuss an operating problem &rarr;</span>
              </button>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "28px",
              marginBottom: 0,
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--ink)",
              fontFamily: "var(--next-font-display), Georgia, serif",
            }}
          >
            That&rsquo;s it. Some patterns, three systems, and an open door. Write me.
          </p>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: DIRECT CORRESPONDENCE
          ==================================================================== */}
      <section id="correspondence" className={s.formSection}>
        <div className={s.formBox}>
          <div className={s.formHead}>
            <p className={s.eyebrow} style={{ marginBottom: "6px" }}>DIRECT CORRESPONDENCE</p>
            <h3>Write to Robert<span>.</span></h3>
            <p>
              Every note comes straight to my desk and is not publicly posted. I reply personally so we can compare notes and see what makes sense to do next.
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
                  Reply Email
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
                  Organization / Role <span style={{ fontWeight: 400, color: "var(--muted)" }}>(Optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. Plant Supervisor, Planning Analyst, CFO, or Builder"
                  className={s.fieldInput}
                />
              </div>

              <div className={s.formField}>
                <label htmlFor="interest" className={s.fieldLabel}>
                  Topic <span style={{ fontWeight: 400, color: "var(--muted)" }}>(Optional)</span>
                </label>
                <select
                  id="interest"
                  value={formState.interest}
                  onChange={(e) => setFormState({ ...formState, interest: e.target.value as "collaborate" | "build" })}
                  className={s.fieldSelect}
                >
                  <option value="collaborate">Compare notes // People, agents &amp; patterns in the work</option>
                  <option value="build">Talk through an operating problem // A real workflow or data seam</option>
                </select>
                <p className={s.fieldHelp}>
                  {formState.interest === "collaborate"
                    ? "Compare notes on what you're seeing in the work, a pattern you're testing, or how B.O.S.S., FlowCraft, and The Rig fit together."
                    : "Tell me where the work between the screens is stuck and what a better day for your team would look like."}
                </p>
              </div>

              <div className={s.formField}>
                <label htmlFor="message" className={s.fieldLabel}>
                  Your Note, Exception, or Question
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe an exception on your floor, a disagreement between two sets of numbers, or something that failed when you tested agents against real work..."
                  className={s.fieldTextarea}
                />
              </div>

              <button type="submit" disabled={submitting} className={s.submitBtn}>
                {submitting ? "Sending..." : "Send Note to Robert →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Reciprocal bridge back to Agentic AI */}
      <div style={{ textAlign: "center", padding: "40px 24px 20px", borderTop: "1px solid var(--line)" }}>
        <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>
          Want to read the three chapters and field notes that led here?{" "}
          <Link href="/agentic-ai/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}>
            Learn through the work &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
