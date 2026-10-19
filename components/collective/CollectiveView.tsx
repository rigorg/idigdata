"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./CollectiveView.module.css";

/**
 * Upgraded Ethereal Hexagonal Rosette & Braided Orbital Spot on Warm Paper
 * Keeps the beloved 7-cell hexagonal hive essence while enriching it with
 * sacred geometry constellation lines, cross-hatched facets, and braided
 * orbital rings representing Rig ⇄ Builder Orgs ⇄ Instance WFBs ⇄ Collective.
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

      {/* Outer Ethereal Braided Orbital Weave (The Pattern Collective) */}
      <circle cx="140" cy="140" r="118" fill="none" stroke="#1E2024" strokeWidth="0.6" opacity="0.28" />
      <circle cx="140" cy="140" r="112" fill="none" stroke="#9E7D3B" strokeWidth="0.95" strokeDasharray="3 4" opacity="0.7" />
      <ellipse cx="140" cy="140" rx="116" ry="104" transform="rotate(22 140 140)" fill="none" stroke="#9E7D3B" strokeWidth="0.7" opacity="0.48" />
      <ellipse cx="140" cy="140" rx="116" ry="104" transform="rotate(-22 140 140)" fill="none" stroke="#1E2024" strokeWidth="0.55" opacity="0.25" />
      <circle cx="140" cy="140" r="95" fill="none" stroke="#1E2024" strokeWidth="0.7" opacity="0.28" />

      {/* 12-Point Sacred Geometry Star Connecting Collective Nodes to Inner Hive */}
      <g stroke="#9E7D3B" strokeWidth="0.6" opacity="0.4" fill="none">
        <polygon points="140,45 222,92.5 222,187.5 140,235 58,187.5 58,92.5" />
        <polygon points="187.5,58 235,140 187.5,222 92.5,222 45,140 92.5,58" stroke="#1E2024" opacity="0.25" />
      </g>

      {/* Outer Orbital Pattern Nodes (Instance Workflow Blocks Returning Patterns) */}
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

      {/* 7-Cell Enterprise Hive (Rig Core + Builder Orgs + Instance WFBs) */}
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
        {/* Center sovereign core cell (THE RIG) */}
        <polygon points="140,108 164,122 164,150 140,164 116,150 116,122" fill="#F4EFE5" stroke="#1E2024" strokeWidth="2.2" />
      </g>

      {/* Bi-Directional Spokes Between Center Core (The Rig) and Surrounding Cells (Builder Orgs & WFBs) */}
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
            <p className={s.eyebrow}>THE PATTERN COLLECTIVE // OPERATORS, DOMAIN EXPERTS &amp; AGENTIC BUILDERS</p>
            <h1 className={s.heroTitle}>
              The Collective is Where People, Builder Orgs, and Workflow Patterns Compound<span>.</span>
            </h1>
            <p className={s.heroDek}>
              An open working exchange for operators, domain experts, and agentic builders sharing what actually survives cutover—paired with a look inside our living workshop (<strong>The Rig</strong>, <strong>B.O.S.S.</strong>, and <strong>FlowCraft</strong>).
            </p>

            <div className={s.leadBody}>
              <p style={{ marginBottom: "12px" }}>
                <strong>Why The Collective exists:</strong> across 20+ years and 50+ enterprise transformations, I watched companies repeatedly hit the same walls—ERP cutovers that miss the plant floor (<em>Mary&rsquo;s Sheet</em>), 40-year bastardized item catalogs that trap veteran operators (<em>Don WMS</em>), and monolithic software suites that hold customer data and operational patterns hostage.
              </p>
              <p style={{ marginBottom: "16px" }}>
                <strong>How we work together:</strong> you do not have to adopt our stack to take part. Practitioners bring real operating problems, compare workflow and data patterns directly with me, and trade hard-won lessons from the field. Inside our own workshop, <strong>The Rig</strong> (our multi-harness Agentic Development Company) exchanges patterns bi-directionally with our two <strong>Builder Orgs</strong>—<strong>B.O.S.S.</strong> and <strong>FlowCraft</strong>—which provision dedicated <strong>Operational Instances</strong> running modular <strong>Agentic Workflow Runtime Blocks (`WFBs`)</strong> on a company-owned <strong>Data Spine</strong>.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px", marginBottom: "16px" }}>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
                style={{ fontSize: "12px", padding: "10px 18px" }}
              >
                Compare Notes with Robert &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
                style={{ fontSize: "12px", padding: "10px 18px" }}
              >
                Discuss an Operating Problem &rarr;
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
                &larr; Read Learn Through the Work
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
                <span className={s.plateTag}>THE COLLECTIVE ROSETTE &bull; PEERS &#8644; WORKSHOP &#8644; PATTERNS</span>
                <EnterpriseHiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>THE RIG</strong>
                    <span>Agentic Dev Co.</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>BUILDER ORGS</strong>
                    <span>B.O.S.S. &amp; FlowCraft</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>INSTANCES</strong>
                    <span>Agentic WFBs</span>
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
              <span className={s.commonsTag}>HOW PATTERNS COMPOUND // FIELD PRACTITIONERS &#8644; THE RIG &amp; BUILDER ORGS &#8644; INSTANCE WORKFLOW BLOCKS</span>
              <div className={s.commonsLive}>
                <span className={s.commonsLiveDot} />
                <span>TWO-WAY PATTERN MOVEMENT &bull; PRIVATE RECORDS STAY IN CUSTODY</span>
              </div>
            </div>

            <div className={s.commonsGrid}>
              {/* Col 1 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>01 // THE RIG &#8644; THE BUILDER ORGS</span>
                  <h3 className={s.commonsColTitle}>Bi-Directional Builder Fabrication</h3>
                  <p className={s.commonsColText}>
                    <strong>The Rig</strong> (our multi-harness Agentic Development Company across `CC`, `CX`, `AG`, and `Grokbot`) equips and evolves our two <strong>Builder Orgs</strong>—<strong>B.O.S.S.</strong> and <strong>FlowCraft</strong>. Engineering patterns, Riff &amp; Council stress-tests, and AST gates move from The Rig into the Builder Orgs, and every improvement forged in the Builder Orgs flows right back into The Rig.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>TWO-WAY ENGINE:</strong> The Rig &#8644; B.O.S.S. &amp; FlowCraft Builder Orgs.
                </div>
              </div>

              {/* Col 2 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>02 // BUILDER ORGS &rarr; OPERATIONAL INSTANCES</span>
                  <h3 className={s.commonsColTitle}>Spawning Agentic Workflow Runtime Blocks</h3>
                  <p className={s.commonsColText}>
                    The <strong>B.O.S.S.</strong> and <strong>FlowCraft</strong> Builder Orgs provision dedicated <strong>Operational Instances</strong> (paired 1-for-1 for an enterprise architecture, or standalone like our live <strong>DigOps</strong> instance). Each instance executes modular <strong>Agentic Workflow Runtime Blocks (`WFBs`)</strong> anchored on a company-owned <strong>Data Spine</strong>.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>LIVE RUNTIME:</strong> Builder Orgs spawn Instance Workflow Blocks (`WFBs`).
                </div>
              </div>

              {/* Col 3 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>03 // INSTANCE WFBs &rarr; THE PATTERN COLLECTIVE</span>
                  <h3 className={s.commonsColTitle}>Distilling Reusable Patterns</h3>
                  <p className={s.commonsColText}>
                    When a workflow block—whether a unified item catalog cross-walk, a 3-way match state machine, or a multi-harness executive blueprint room—is refined inside an <strong>Operational Instance</strong>, we strip private company records and return the reusable structural pattern to <strong>The Pattern Collective</strong>.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>CUSTODY BOUNDARY:</strong> Private records stay in custody; structural patterns compound.
                </div>
              </div>
            </div>

            <div className={s.commonsBanner}>
              <p className={s.commonsBannerText}>
                <strong>Direct Peer Exchange:</strong> Have a thorny data seam, an ERP cutover lesson, or an agentic workflow pattern you are testing? Send a note directly to Robert to compare notes.
              </p>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
                style={{ padding: "10px 20px", fontSize: "12px", whiteSpace: "nowrap" }}
              >
                Compare Notes with Robert &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Architecture Paper-Drafting Plate */}
      <section className={s.systemsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>INSIDE THE WORKSHOP // ARCHITECTURAL PAPER PLATE</p>
            <h2>How Peer Lessons and Workshop Patterns Move Across The Rig, Builder Orgs, and Instance Workflow Blocks<span>.</span></h2>
            <p>
              Drafted on warm parchment paper, the architectural plate below traces both layers of <strong>The Collective</strong>: at the top, how operators, domain experts, and builders bring real work to forge and share patterns; below, how our own workshop moves those patterns between <strong>The Rig</strong>, the <strong>B.O.S.S.</strong> and <strong>FlowCraft Builder Orgs</strong>, and <strong>Operational Instances</strong> running <strong>Agentic Workflow Runtime Blocks (`WFBs`)</strong> on <strong>The Data Spine</strong>.
            </p>
          </div>

          {/* Master Architectural Paper-Drafting Plate */}
          <div className={s.blueprintPlateWrap}>
            <div className={s.blueprintPlateFrame} style={{ maxWidth: "1040px" }}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.blueprintPlateBar}>
                <span>ARCHITECTURAL DRAFTING PLATE // PEER PATTERN LOOP &bull; THE RIG &#8644; B.O.S.S. &amp; FLOWCRAFT BUILDER ORGS &bull; INSTANCE WORKFLOW RUNTIME BLOCKS</span>
                <span>THE DATA SPINE</span>
              </div>
              <a
                href="/diagrams/collective-living-paper-plate.svg"
                target="_blank"
                rel="noreferrer"
                className={s.blueprintPlateLink}
                aria-label="Open the Living Pattern Collective architectural paper plate in a new tab"
              >
                <Image
                  src="/diagrams/collective-living-paper-plate.svg"
                  alt="The Pattern Collective peer loop and living workshop showing The Rig, B.O.S.S. and FlowCraft Builder Orgs, and Operational Instances running Agentic Workflow Runtime Blocks on The Data Spine"
                  width={1120}
                  height={820}
                  unoptimized
                  className={s.blueprintPlateImg}
                  style={{ maxWidth: "100%", height: "auto" }}
                  priority
                />
              </a>
            </div>
          </div>

          <div className={s.systemsGrid}>
            {/* System 1: The Rig */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>WORKSHOP APEX &bull; AGENTIC DEVELOPMENT COMPANY</span>
                <h3 className={s.systemTitle}>The Rig</h3>
                <div className={s.systemSub}>Multi-Harness Builder &amp; Pattern Foundry (`RIG001`)</div>
                <p className={s.systemBody}>
                  Coordinates multiple frontier coding harnesses (`CC`, `CX`, `AG`, `Grokbot`) in isolated git worktree lanes with Riff rooms, Council &amp; Advisory stress-testing, AST calipers, opposing-model verification (`Build ⇄ Check → Land`), and human command. Moves engineering patterns into the Builder Orgs and receives verified builder improvements back.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>RIG &#8644; BUILDER ORGS</span>
                <p className={s.systemUseCaseText}>
                  Equips each domain asset with its own Builder Org so software is built, verified, and evolved under human authority.
                </p>
              </div>
            </div>

            {/* System 2: B.O.S.S. Builder Org & Instances */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>BUILDER ORG 01 &bull; CANONICAL ENTERPRISE DATA SPINE</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>10-Workflow-Block Transformation &amp; Pattern System</div>
                <p className={s.systemBody}>
                  Maps how the business runs and structures full-cycle enterprise transformation across <strong>10 Workflow Blocks</strong>: mobilizing stakeholders and domain champions in the <em>7-Cell Beehive</em>, generating the SOW, governing budgets and token burn in <em>Project Financials (PFS)</em>, reconciling the <em>Common Data Core</em>, and linking <em>6 Enterprise Constellations</em> (423 reference workflows across Operations, Finance, Workforce, Asset, Supply Chain, and Governance &amp; IT).
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>BUILDER ORG &rarr; INSTANCE</span>
                <p className={s.systemUseCaseText}>
                  Provisions B.O.S.S. instances that supply canonical schemas, mapped process graphs, and deterministic control rules to FlowCraft.
                </p>
              </div>
            </div>

            {/* System 3: FlowCraft Builder Org & Instance WFBs */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>BUILDER ORG 02 &bull; HUMAN-AGENTIC RUNTIME ENGINE</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>Agentic Workflow Runtime Blocks (`WFBs`) on the Data Spine</div>
                <p className={s.systemBody}>
                  Forges and runs modular <strong>Agentic Workflow Runtime Blocks (`WFBs`)</strong> across existing ERPs, plant systems, and the company-owned <strong>Data Spine</strong>. Guided by our 80/20 design principle—where agents handle repeatable preparation and reconciliation while <strong>IT teams and domain champions</strong> govern the 20% exceptions and judgment—it powers live Operational Instances like <strong>DigOps</strong>.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>INSTANCE WFBs &rarr; COLLECTIVE</span>
                <p className={s.systemUseCaseText}>
                  Runtime lessons and verified WFB blueprints are distilled back into the Builder Orgs and The Pattern Collective.
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
            <p className={s.eyebrow}>LIVE &amp; REFERENCE PATTERNS // WORKFLOW BLOCKS IN PRACTICE</p>
            <h2>How Operational Instances and Reference Patterns work<span>.</span></h2>
            <p>
              Here is how the <strong>Rig &#8644; Builder Org &#8644; Operational Instance</strong> architecture operates today in our own live company instance (<strong>DigOps</strong>) and how we structure a paired enterprise reference pattern:
            </p>
          </div>

          <div className={s.blueprintsGrid}>
            {/* Practical Example 1: DigOps Live Instance */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>LIVE OPERATIONAL INSTANCE // DATA INTEGRATION GROUP (DIGOPS)</span>
              <h3 className={s.blueprintTitle}>DigOps Operational Instance (Live Internal Operations)</h3>
              <p className={s.blueprintText}>
                To walk the walk, my own company—<strong>Data Integration Group (`DigOps`)</strong>—runs as a live Operational Instance provisioned from the <strong>FlowCraft Builder Org</strong> on <strong>The Rig</strong>.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>Modular Workflow Runtime Blocks (`WFBs`)</strong> power our commercial pipeline, executive discovery rooms, technical dossier synthesis, and multi-harness Riff &amp; Council review loops.</li>
                <li><strong>Connected to Operator Glass &amp; The Rig</strong> so every asset edit, opposing-model check, and decision gate is recorded with full lineage.</li>
                <li><strong>Pattern Return Loop:</strong> Reusable room templates, review councils, and verification gates proven inside DigOps are distilled back into the FlowCraft Builder Org for future instances.</li>
              </ul>
            </div>

            {/* Practical Example 2: Paired B.O.S.S. + FlowCraft Reference Pattern */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>ENTERPRISE REFERENCE PATTERN // PAIRED B.O.S.S. + FLOWCRAFT ARCHITECTURE</span>
              <h3 className={s.blueprintTitle}>Applying the Lessons of Mary&rsquo;s Sheet &amp; Don WMS Today</h3>
              <p className={s.blueprintText}>
                How our formative field lessons from <em>Mary&rsquo;s Sheet</em> and <em>Don WMS</em> are architected today as a paired <strong>B.O.S.S. + FlowCraft</strong> reference pattern for manufacturing and distribution:
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S. Blueprint &amp; Data Core:</strong> Mobilizes frontline supervisors and warehouse veterans inside the 7-Cell Beehive to reconcile legacy item schemas, third-party translations, and cross-department handoffs across the 6 Enterprise Constellations.</li>
                <li><strong>FlowCraft Workflow Runtime Blocks:</strong> Turns those canonical schemas and deterministic rules into role-scoped <strong>Agentic Workflow Runtime Blocks</strong> (floor-truth scheduling, iPad item cross-walk partner, 3-way match, and close reconciliation) on the company&rsquo;s Data Spine.</li>
                <li><strong>Custody &amp; Pattern Return:</strong> Designed so private inventory, pricing, and financial records remain inside the customer&rsquo;s environment while reusable structural schemas compound the Collective.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Two Doors of Interaction */}
      <section className={s.doorsSection}>
        <div className={s.sectionInner}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>TWO DOORS // DIRECT CONVERSATION WITH ROBERT</p>
            <h2>How to take part<span>.</span></h2>
            <p>
              Participation starts with a direct conversation—whether you are an operator, domain expert, or builder who wants to compare notes and patterns, or an executive looking to solve an operating problem.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Build Together */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>PATH 01 // OPERATORS, DOMAIN EXPERTS &amp; BUILDERS</p>
                <h3 className={s.doorTitle}>Compare notes and patterns with Robert.</h3>
                <p className={s.doorBody}>
                  For enterprise operators, domain experts, systems architects, and agentic builders. Send a note to compare a workflow block, data seam, or cutover lesson directly with Robert—or walk through how patterns move between The Rig, B.O.S.S., and FlowCraft.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("collaborate")}
                className={s.doorBtn}
              >
                <span>Compare Notes with Robert &rarr;</span>
              </button>
            </div>

            {/* Door 2: Enterprise Collaboration */}
            <div className={s.doorCard}>
              <div>
                <p className={s.doorEyebrow}>PATH 02 // ENTERPRISE TRANSFORMATION &amp; WORKFLOWS</p>
                <h3 className={s.doorTitle}>Bring an operating problem. Build with us.</h3>
                <p className={s.doorBody}>
                  For business owners, operations leaders, and executives who need systems and workflows built around how their company actually runs. Bring where the work is stuck—we will scope a practical outcome and carry it into daily use.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInterestSelect("build")}
                className={`${s.doorBtn} ${s.doorBtnSecondary}`}
              >
                <span>Discuss an Operating Problem &rarr;</span>
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
            <h3>Connect with Robert<span>.</span></h3>
            <p>
              Send a note directly to Robert regarding builder collaboration, workflow patterns, or an enterprise transformation mandate.
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
                  <option value="collaborate">Join The Collective // Peer Builder Collaboration &amp; Shared Patterns</option>
                  <option value="build">Explore an Enterprise Collaboration // Address an Operating Problem</option>
                </select>
                <p className={s.fieldHelp}>
                  {formState.interest === "collaborate"
                    ? "Collaborate on multi-harness development, enterprise schemas, and reusable workflow patterns."
                    : "Work directly with Robert to scope a consequential operating challenge and deliver working outcomes."}
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
          Looking for the underlying operational field theses and field notes?{" "}
          <Link href="/agentic-ai/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}>
            Read Learn Through the Work &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
