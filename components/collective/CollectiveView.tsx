"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./CollectiveView.module.css";

function EnterpriseHiveSpot() {
  return (
    <svg viewBox="0 0 240 240" className={s.spotSvg} aria-hidden="true">
      <defs>
        <pattern id="plateDotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="1.1" fill="#D5CEC0" />
        </pattern>
      </defs>
      {/* Warm ivory drafting paper background & subtle border */}
      <rect width="240" height="240" rx="2" fill="#FAF6EE" stroke="#DDD7C8" strokeWidth="1" />
      <rect x="8" y="8" width="224" height="224" fill="url(#plateDotGrid)" />

      {/* Outer sovereign orbital rings */}
      <circle cx="120" cy="120" r="96" fill="none" stroke="#9E7D3B" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.65" />
      <circle cx="120" cy="120" r="82" fill="none" stroke="#1E2024" strokeWidth="0.75" opacity="0.25" />

      {/* Crosshair axis ticks */}
      <line x1="120" y1="16" x2="120" y2="32" stroke="#9E7D3B" strokeWidth="1" opacity="0.6" />
      <line x1="120" y1="208" x2="120" y2="224" stroke="#9E7D3B" strokeWidth="1" opacity="0.6" />
      <line x1="16" y1="120" x2="32" y2="120" stroke="#9E7D3B" strokeWidth="1" opacity="0.6" />
      <line x1="208" y1="120" x2="224" y2="120" stroke="#9E7D3B" strokeWidth="1" opacity="0.6" />

      {/* 7-cell Enterprise Hive (scaled 2.2x to command the plate) */}
      <g stroke="#9E7D3B" strokeWidth="2" fill="#FAF6EE" strokeLinejoin="round">
        {/* Top cell */}
        <polygon points="120,40 142,53 142,79 120,92 98,79 98,53" />
        {/* Top-right cell */}
        <polygon points="162,64 184,77 184,103 162,116 140,103 140,77" />
        {/* Bottom-right cell */}
        <polygon points="162,112 184,125 184,151 162,164 140,151 140,125" />
        {/* Bottom cell */}
        <polygon points="120,136 142,149 142,175 120,188 98,175 98,149" />
        {/* Bottom-left cell */}
        <polygon points="78,112 100,125 100,151 78,164 56,151 56,125" />
        {/* Top-left cell */}
        <polygon points="78,64 100,77 100,103 78,116 56,103 56,77" />
        {/* Center sovereign core cell */}
        <polygon points="120,88 142,101 142,127 120,140 98,127 98,101" fill="#F4EFE5" stroke="#1E2024" strokeWidth="2.4" />
      </g>

      {/* Inner core ring & node points */}
      <circle cx="120" cy="114" r="14" fill="none" stroke="#9E7D3B" strokeWidth="1.2" />
      <circle cx="120" cy="114" r="4.5" fill="#1E2024" />
      <circle cx="120" cy="66" r="2.5" fill="#9E7D3B" />
      <circle cx="162" cy="90" r="2.5" fill="#9E7D3B" />
      <circle cx="162" cy="138" r="2.5" fill="#9E7D3B" />
      <circle cx="120" cy="162" r="2.5" fill="#9E7D3B" />
      <circle cx="78" cy="138" r="2.5" fill="#9E7D3B" />
      <circle cx="78" cy="90" r="2.5" fill="#9E7D3B" />

      {/* Corner calibration tick marks */}
      <path d="M 14 26 L 14 14 L 26 14" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 226 26 L 226 14 L 214 14" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 14 214 L 14 226 L 26 226" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 226 214 L 226 226 L 214 226" fill="none" stroke="#9E7D3B" strokeWidth="1.4" strokeLinecap="round" />
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
            <p className={s.eyebrow}>WHAT I HAVE BUILT // WORKING PROOF OF CONCEPT &amp; PATTERN COMMONS</p>
            <h1 className={s.heroTitle}>
              The Collective is About the People and the Patterns<span>.</span>
            </h1>
            <p className={s.heroDek}>
              An operator-led Agentic Development Company (The Rig) building enterprise foundation software (B.O.S.S.) and human-agentic runtime workflow blocks (FlowCraft) on a shared Data Spine.
            </p>

            <div className={s.leadBody}>
              <p style={{ marginBottom: "14px" }}>
                <strong>In plain business terms:</strong> before any enterprise can automate or scale workflows, it needs a clear map of its people, systems, and data—and a reliable way to build and run the workflows that connect them. Over the past three years, I built a working proof of concept across three connected layers:
              </p>
              <p style={{ marginBottom: "14px" }}>
                It starts with <strong>Function 1: the Agentic Development Company (The Rig)</strong>—a multi-agent software build environment where AI harnesses write and check code under human verification. The Rig built our <strong>Enterprise Foundation Asset (B.O.S.S.)</strong> to map how a business actually runs, and built our <strong>Human-Agentic Runtime System &amp; Workflow Blocks (FlowCraft)</strong> to execute daily operational workflows across a company-owned <strong>Data Spine</strong>.
              </p>
              <p style={{ marginBottom: "18px" }}>
                <strong>Wider participation and sharing:</strong> Each software layer follows a repeating <strong>Builder Org &rarr; Instance</strong> pattern (one builder organization maintaining the core asset and provisioning isolated instances for individual operations). Around that foundation, <strong>The Collective</strong> is where builders and operators can voluntarily share reusable workflow patterns while keeping their business data private.
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
                Discuss An Operating Problem &rarr;
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
                <span className={s.plateTag}>THE COLLECTIVE • BUILDER ORG &rarr; INSTANCE</span>
                <EnterpriseHiveSpot />
                <div className={s.plateMetrics}>
                  <div>
                    <strong>AGENTIC DEV CO.</strong>
                    <span>The Rig</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>FOUNDATION ASSET</strong>
                    <span>B.O.S.S.</span>
                  </div>
                  <div className={s.metricDivider} />
                  <div>
                    <strong>RUNTIME SYSTEM</strong>
                    <span>FlowCraft</span>
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
              <span className={s.commonsTag}>BUILDER ORG &rarr; INSTANCE ARCHITECTURE // WORKING PROOF OF CONCEPT</span>
              <div className={s.commonsLive}>
                <span className={s.commonsLiveDot} />
                <span>WORKING POC &bull; COMPANY CONTROL &amp; SHARED PATTERNS</span>
              </div>
            </div>

            <div className={s.commonsGrid}>
              {/* Col 1 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>01 // AGENTIC DEVELOPMENT COMPANY</span>
                  <h3 className={s.commonsColTitle}>The Rig (Multi-Harness Builder)</h3>
                  <p className={s.commonsColText}>
                    Function 1 is the Agentic Development Company: an operator-led multi-harness build environment (Claude Code, Codex, Antigravity, Grokbot) running in isolated git worktrees with deterministic test gates and human authorization.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>FUNCTION 1:</strong> Built both B.O.S.S. and FlowCraft.
                </div>
              </div>

              {/* Col 2 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>02 // FOUNDATION &amp; RUNTIME</span>
                  <h3 className={s.commonsColTitle}>B.O.S.S. + FlowCraft</h3>
                  <p className={s.commonsColText}>
                    <strong>B.O.S.S.</strong> maps enterprise systems, processes, people, and master data into a shared blueprint. <strong>FlowCraft</strong> executes human-agentic workflow blocks across builder organizations and operational instances.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>REPEATING PATTERN:</strong> Builder Org &rarr; Operational Instance.
                </div>
              </div>

              {/* Col 3 */}
              <div className={s.commonsCol}>
                <div>
                  <span className={s.commonsColTag}>03 // WIDER PARTICIPATION</span>
                  <h3 className={s.commonsColTitle}>The Pattern Commons</h3>
                  <p className={s.commonsColText}>
                    When a workflow block—such as a 3-way match, receiving check, or close reconciliation—is proven in practice, the reusable pattern can be shared with peer builders while company data stays private.
                  </p>
                </div>
                <div className={s.commonsColFoot}>
                  <strong>VOLUNTARY COMMONS:</strong> Private data; shared patterns.
                </div>
              </div>
            </div>

            <div className={s.commonsBanner}>
              <p className={s.commonsBannerText}>
                <strong>Company Ownership &amp; Control:</strong> Keep the systems of record that work, govern your own data spine, and build or adopt reusable workflow blocks with clear ownership.
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
            <p className={s.eyebrow}>THE ARCHITECTURE // WHAT IS BUILT &amp; HOW IT CONNECTS</p>
            <h2>One Builder Rig. Two Operating Systems. One Data Spine<span>.</span></h2>
            <p>
              The concentric blueprint below shows the exact structural relationship: <strong>The Agentic Development Company (The Rig)</strong> builds the <strong>Enterprise Foundation Asset (B.O.S.S.)</strong> and the <strong>Human-Agentic Runtime System &amp; Workflow Blocks (FlowCraft)</strong> around <strong>The Data Spine</strong>, while verified patterns compound through the outer <strong>Patterns Collective</strong>.
            </p>
          </div>

          {/* Medium-Scale Architectural Blueprint Plate */}
          <div className={s.blueprintPlateWrap}>
            <div className={s.blueprintPlateFrame}>
              <div className={s.plateCornerTL} />
              <div className={s.plateCornerTR} />
              <div className={s.plateCornerBL} />
              <div className={s.plateCornerBR} />
              <div className={s.blueprintPlateBar}>
                <span>ARCHITECTURAL PLATE // PATTERNS COLLECTIVE &bull; AGENTIC DEVELOPMENT COMPANY &bull; ENTERPRISE FOUNDATION ASSET &bull; HUMAN-AGENTIC RUNTIME SYSTEM &bull; WORKFLOW BLOCKS</span>
                <span>THE DATA SPINE</span>
              </div>
              <a
                href="/diagrams/collective-patterns-concentric-v67.png"
                target="_blank"
                rel="noreferrer"
                className={s.blueprintPlateLink}
                aria-label="Open the Collective Patterns and Data Spine blueprint in a new tab"
              >
                <Image
                  src="/diagrams/collective-patterns-concentric-v67.png"
                  alt="Patterns Collective, Agentic Development Company, Enterprise Foundation Asset, Human-Agentic Runtime System, Workflow Blocks, and The Data Spine"
                  width={640}
                  height={640}
                  className={s.blueprintPlateImg}
                  priority
                />
              </a>
            </div>
          </div>

          <div className={s.systemsGrid}>
            {/* System 1: The Rig */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>FUNCTION 01 &bull; AGENTIC DEVELOPMENT COMPANY</span>
                <h3 className={s.systemTitle}>The Rig</h3>
                <div className={s.systemSub}>Multi-Harness Agentic Development Company</div>
                <p className={s.systemBody}>
                  Function 1 is the <strong>Agentic Development Company</strong> (`rigorg/rig001`). It coordinates multiple AI coding harnesses (`CC`, `CX`, `AG`, `Grokbot`) in isolated git worktree lanes with AST calipers, automated test gates, and human authorization—and is the builder environment that constructed both <strong>B.O.S.S.</strong> and <strong>FlowCraft</strong>.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>BUILDER CAPABILITY</span>
                <p className={s.systemUseCaseText}>
                  Multi-harness software fabrication &amp; verification. Every unit is scoped, tested, and accepted by a human operator before landing.
                </p>
              </div>
            </div>

            {/* System 2: B.O.S.S. */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>FUNCTION 02 &bull; ENTERPRISE FOUNDATION ASSET</span>
                <h3 className={s.systemTitle}>B.O.S.S.</h3>
                <div className={s.systemSub}>Business Operating System Specification</div>
                <p className={s.systemBody}>
                  Built by The Rig (`rigorg/boss`), <strong>B.O.S.S.</strong> is the <strong>Enterprise Foundation Asset</strong>. Before custom workflows are written, B.O.S.S. maps a company&rsquo;s applications (<em>Systemverse</em>), core processes (<em>Six Constellations</em>), operating teams (<em>Beehive</em>), and master records into a company-owned <strong>Common Data Model</strong>.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>BUILDER ORG &rarr; INSTANCE</span>
                <p className={s.systemUseCaseText}>
                  The B.O.S.S. builder org maintains the mapping platform and provisions dedicated instances for individual enterprise estates.
                </p>
              </div>
            </div>

            {/* System 3: FlowCraft */}
            <div className={s.systemCard}>
              <div>
                <span className={s.systemBadge}>FUNCTION 03 &bull; HUMAN-AGENTIC RUNTIME &amp; WORKFLOW BLOCKS</span>
                <h3 className={s.systemTitle}>FlowCraft</h3>
                <div className={s.systemSub}>Human-Agentic Runtime System &amp; Workflow Blocks</div>
                <p className={s.systemBody}>
                  Built by The Rig (`rigorg/flowcraft`), <strong>FlowCraft</strong> is the <strong>Human-Agentic Runtime System</strong> that executes reusable <strong>Workflow Blocks</strong>. It connects existing ERPs, plant systems, data cores, and agents into governed operational workflows where people and agents contribute throughout <em>Intent, Define, Deliver, and Outcome</em>.
                </p>
              </div>
              <div className={s.systemUseCaseBox}>
                <span className={s.systemUseCaseLabel}>BUILDER ORG &rarr; INSTANCE</span>
                <p className={s.systemUseCaseText}>
                  The FlowCraft builder org maintains the runtime and reusable workflow blocks, deploying isolated instances (such as DigOps) for daily operations.
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
            <p className={s.eyebrow}>OPERATING PRINCIPLES // COMPANY CONTROL &amp; SHARED PATTERNS</p>
            <h2>Built for people. Grounded in the enterprise<span>.</span></h2>
            <p>
              Three commitments govern the work: company control over data and core workflows, human accountability across every stage of delivery, and voluntary pattern sharing across builders.
            </p>
          </div>

          <div className={s.flywheelGrid}>
            {/* Principle 1 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>01 // COMPANY CONTROL &amp; DATA CUSTODY</span>
                <h3 className={s.flywheelTitle}>Keep What Works, Own What Differentiates</h3>
                <p className={s.flywheelText}>
                  Operational sovereignty means the business controls its master data, workflow definitions, and decision rules. Keep the commercial systems of record that work, anchor them to a company-owned data spine, and build or adapt the workflows that differentiate the operation—with licensing, hosting, and ownership agreed explicitly.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>COMPANY CUSTODY</span>
                <p className={s.flywheelBoxText}>
                  Designed for company control, clear data custody, and severable workflow ownership.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>02 // HUMAN &amp; AGENTIC SYNTHESIS</span>
                <h3 className={s.flywheelTitle}>Intent &middot; Define &middot; Deliver &middot; Outcome</h3>
                <p className={s.flywheelText}>
                  People and agents contribute throughout every stage of the Outcome Loop, with human judgment and accountability guiding the work. Domain experts define operational reality, harnesses verify code against real constraints, and operators accept outcomes in daily use.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>ACCOUNTABLE DELIVERY</span>
                <p className={s.flywheelBoxText}>
                  Working software, retained business knowledge, and people equipped to keep improving.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className={s.flywheelCard}>
              <div>
                <span className={s.flywheelTag}>03 // THE PATTERN COMMONS</span>
                <h3 className={s.flywheelTitle}>Reusable Workflow Blueprints</h3>
                <p className={s.flywheelText}>
                  When a builder validates a reusable workflow block—such as a 3-way match, receiving variance check, or master-data reconciliation—the structural pattern can be shared with the Collective while company records remain completely private.
                </p>
              </div>
              <div className={s.flywheelBox}>
                <span className={s.flywheelBoxLabel}>VOLUNTARY SHARING</span>
                <p className={s.flywheelBoxText}>
                  Shared patterns reduce repeated work across participating builders while business data stays private.
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
            <p className={s.eyebrow}>ILLUSTRATIVE REFERENCE DESIGNS // INTENT &rarr; OUTCOME</p>
            <h2>How the three functions work together on operational problems<span>.</span></h2>
            <p>
              Illustrative reference designs showing how <strong>The Rig</strong> (Agentic Development Company), <strong>B.O.S.S.</strong> (Enterprise Foundation Asset), and <strong>FlowCraft</strong> (Human-Agentic Runtime System &amp; Workflow Blocks) combine in practice:
            </p>
          </div>

          <div className={s.blueprintsGrid}>
            {/* Practical Example 1 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>ILLUSTRATIVE REFERENCE DESIGN // FRONTLINE OPERATIONS</span>
              <h3 className={s.blueprintTitle}>Frontline Billing &amp; Work-Order Workflow Block</h3>
              <p className={s.blueprintText}>
                A specialty service or distribution operation runs accounting on an existing ledger while job tracking, schedules, parts, and customer sign-offs live on whiteboards and spreadsheets.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S. (Enterprise Foundation Asset)</strong> maps pricing tiers, labor rules, and scheduling constraints into a clean data contract.</li>
                <li><strong>The Rig (Agentic Development Company)</strong> builds and tests the ledger connectors and work-order state machines.</li>
                <li><strong>FlowCraft (Runtime &amp; Workflow Blocks)</strong> runs the daily workflow block—tracking progress, capturing approvals, and syncing accounting.</li>
                <li><strong>Target Outcome:</strong> A company-controlled workflow connecting frontline work and finance without tearing out the accounting ledger.</li>
              </ul>
            </div>

            {/* Practical Example 2 */}
            <div className={s.blueprintCard}>
              <span className={s.blueprintTag}>ILLUSTRATIVE REFERENCE DESIGN // MANUFACTURING &amp; SUPPLY</span>
              <h3 className={s.blueprintTitle}>Purchasing, Receiving &amp; 3-Way Match Workflow Block</h3>
              <p className={s.blueprintText}>
                A multi-facility producer faces purchase order exception loops, invoice variances, and slow dock handoffs across existing ERP and warehouse systems.
              </p>
              <ul className={s.blueprintList}>
                <li><strong>B.O.S.S. (Enterprise Foundation Asset)</strong> documents receiving rules, freight variance tolerances, and 3-way match logic across the Data Spine.</li>
                <li><strong>The Rig (Agentic Development Company)</strong> builds and verifies reconciliation logic against historical exception cases.</li>
                <li><strong>FlowCraft (Runtime &amp; Workflow Blocks)</strong> orchestrates human exception approvals and PO matching across warehouse and finance.</li>
                <li><strong>Target Outcome:</strong> Auditable purchasing and receiving workflows built around the systems of record that already work.</li>
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
              Whether you are a builder interested in multi-harness development and reusable workflow patterns, or an executive looking to solve an operating problem.
            </p>
          </div>

          <div className={s.doorsGrid}>
            {/* Door 1: Build Together */}
            <div className={`${s.doorCard} ${s.doorCardPrimary}`}>
              <div>
                <p className={s.doorEyebrow}>PATH 01 // PEER BUILDERS &amp; SHARED PATTERNS</p>
                <h3 className={s.doorTitle}>Join the Collective. Compare notes and patterns.</h3>
                <p className={s.doorBody}>
                  For software builders, systems architects, and technical operators building with agents. Exchange lessons on multi-harness development, enterprise schemas, and reusable workflow blocks.
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
          Looking for the underlying operational field notes?{" "}
          <Link href="/agentic-ai/" style={{ color: "var(--ink)", textDecoration: "underline", fontWeight: 600 }}>
            Read Dispatches from the Operational Seam &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
