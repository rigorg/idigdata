"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import { useTheme, ThemeToggle } from "@/lib/theme";

// Delivery Standard: 1 Block = 2 to 4 Weeks. Time for deliverable.
// Voice: engineering firm ("We", "Our team"); Robert Paddock is named as the lead under "Who does the work."
// Zero dollars ($), zero phone numbers, ASCII hyphens only.
// NO external brand names (no Upwork, no RFP labels).

type Archetype = {
  id: string;
  title: string;
  badge: string;
  summary: string;
  domains: string[];
  systems: string[];
  authority: "advisory" | "supervised" | "bounded";
  velocity: "ondemand" | "batch" | "realtime";
  enablement: "turnkey" | "training" | "hypercare";
};

const ARCHETYPES: Archetype[] = [
  {
    id: "billing_recon",
    title: "Billing & Reconciliation",
    badge: "FINANCIAL INTEGRITY",
    summary:
      "Ingests bank transactions, invoices, and ERP records; detects discrepancies; drafts journal entries for controller sign-off.",
    domains: ["financial_billing"],
    systems: ["PostgreSQL", "QuickBooks", "NetSuite", "Email / Inbound Webhooks"],
    authority: "supervised",
    velocity: "batch",
    enablement: "training",
  },
  {
    id: "ops_dispatcher",
    title: "Operations Dispatcher",
    badge: "WORKFLOW ORCHESTRATION",
    summary:
      "Triages customer/vendor communications, interrogates CRM & SQL records, drafts contextual replies, and stages approved updates.",
    domains: ["customer_vendor_ops"],
    systems: ["Salesforce", "PostgreSQL", "Slack", "Zendesk"],
    authority: "supervised",
    velocity: "realtime",
    enablement: "training",
  },
  {
    id: "knowledge_pipeline",
    title: "Knowledge & Contract Ops",
    badge: "DOCUMENT INTELLIGENCE",
    summary:
      "Extracts structured terms from messy contracts and SOPs; delivers cited answers; triggers audit webhooks.",
    domains: ["knowledge_docs"],
    systems: ["PostgreSQL", "Document Stores / S3", "Slack", "REST API"],
    authority: "advisory",
    velocity: "ondemand",
    enablement: "turnkey",
  },
  {
    id: "data_drift_agent",
    title: "Data Sync & Drift Agent",
    badge: "DATA PIPELINE",
    summary:
      "Monitors cross-database sync, detects schema drift, and executes remediation within strictly bounded parameter caps.",
    domains: ["data_sync"],
    systems: ["PostgreSQL", "Snowflake", "Custom REST API"],
    authority: "bounded",
    velocity: "batch",
    enablement: "hypercare",
  },
];

const DOMAIN_OPTIONS = [
  { id: "financial_billing", label: "Financial & Billing Reconciliation" },
  { id: "customer_vendor_ops", label: "Customer & Vendor Operations" },
  { id: "knowledge_docs", label: "Knowledge, Policies & Contracts" },
  { id: "data_sync", label: "Data Pipelines & Cross-System Sync" },
  { id: "devops_engineering", label: "Engineering & Internal Tooling" },
  { id: "bespoke_workflow", label: "Custom Operational Workflows" },
];

const SYSTEM_CATEGORIES = [
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Snowflake", "BigQuery", "Supabase", "MongoDB"],
  },
  {
    category: "ERP & Accounting",
    items: ["NetSuite", "QuickBooks", "SAP S/4HANA", "Dynamics 365", "Xero", "Custom ERP"],
  },
  {
    category: "CRM & Service",
    items: ["Salesforce", "HubSpot", "Zendesk", "Jira", "Freshdesk"],
  },
  {
    category: "Comms & Interfaces",
    items: ["Slack", "Microsoft Teams", "Email / Inbound Webhooks", "Custom Web Portal", "Headless API"],
  },
  {
    category: "Protocols & Gateways",
    items: ["Model Context Protocol (MCP)", "REST / OpenAPI", "GraphQL", "Event Streams / Kafka"],
  },
];

const ENABLEMENT_OPTIONS = [
  {
    id: "turnkey",
    label: "Turnkey System Delivery Only",
    badge: "SOFTWARE ONLY",
    desc: "Working system delivered with automated tests and architecture runbook. Internal team operates and maintains.",
  },
  {
    id: "training",
    label: "Team Training & Operator Handover",
    badge: "RECOMMENDED",
    desc: "Dedicated operator walkthroughs, edge-case training, and live administrative handover sessions.",
  },
  {
    id: "hypercare",
    label: "Post-Launch Hypercare & Monitoring",
    badge: "FULL ENABLEMENT",
    desc: "Active post-go-live observation, exception triage, query tuning, and operational support.",
  },
];

// Accepted door copy, carried verbatim from the former /owned-software/ door.
const WHERE_IT_HELPS: { heading: string; text: string }[] = [
  {
    heading: "Enterprise transformation management",
    text: "Planning, milestones, cutover dependencies, and delivery evidence through go-live.",
  },
  {
    heading: "Governed software delivery",
    text: "Traceable decisions, testing and delivery evidence, and human authorization.",
  },
  {
    heading: "Workflows across people and systems",
    text: "Company-owned data, defined permissions, and human judgment at consequential steps.",
  },
];

export default function CustomAgenticScopingPage() {
  const { isLight } = useTheme();

  // Scoping state
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);
  const [selectedDomains, setSelectedDomains] = useState<string[]>(["financial_billing"]);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([
    "PostgreSQL",
    "NetSuite",
    "Slack",
  ]);
  const [customSystemInput, setCustomSystemInput] = useState("");
  const [authority, setAuthority] = useState<"advisory" | "supervised" | "bounded">("supervised");
  const [scale, setScale] = useState<"solo" | "team" | "dept" | "enterprise">("team");
  const [velocity, setVelocity] = useState<"ondemand" | "batch" | "realtime">("batch");
  const [deployment, setDeployment] = useState<"client_vpc" | "on_prem" | "managed">("client_vpc");
  const [enablement, setEnablement] = useState<"turnkey" | "training" | "hypercare">("training");
  const [situationText, setSituationText] = useState("");

  // Contact / Submission state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "recorded" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Archetype selection handler
  const handleApplyArchetype = (arch: Archetype) => {
    setSelectedArchetype(arch.id);
    setSelectedDomains(arch.domains);
    setSelectedSystems(arch.systems);
    setAuthority(arch.authority);
    setVelocity(arch.velocity);
    setEnablement(arch.enablement);
  };

  const toggleDomain = (id: string) => {
    setSelectedArchetype(null);
    setSelectedDomains((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleSystem = (sys: string) => {
    setSelectedArchetype(null);
    setSelectedSystems((prev) =>
      prev.includes(sys) ? prev.filter((s) => s !== sys) : [...prev, sys]
    );
  };

  const handleAddCustomSystem = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customSystemInput.trim();
    if (clean && !selectedSystems.includes(clean)) {
      setSelectedSystems((prev) => [...prev, clean]);
      setCustomSystemInput("");
    }
  };

  // Readiness Score calculation
  const readiness = useMemo(() => {
    let score = 0;
    if (selectedDomains.length > 0) score += 20;
    if (selectedSystems.length > 0) score += Math.min(25, selectedSystems.length * 8);
    if (authority) score += 20;
    if (scale && velocity && deployment) score += 15;
    if (enablement) score += 10;
    if (situationText.trim().length > 20) score += 10;
    return Math.min(100, score);
  }, [selectedDomains, selectedSystems, authority, scale, velocity, deployment, enablement, situationText]);

  // Structured Markdown Brief Generator
  const generatedBrief = useMemo(() => {
    const domainLabels = selectedDomains
      .map((id) => DOMAIN_OPTIONS.find((d) => d.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const authorityLabel =
      authority === "advisory"
        ? "Tier 1: Read-Only Copilot (Agent drafts, human executes)"
        : authority === "supervised"
        ? "Tier 2: Supervised Execution (Agent prepares write actions, human approves)"
        : "Tier 3: Bounded Autonomous Action (Hard threshold limits, exception escalation)";

    const velocityLabel =
      velocity === "ondemand"
        ? "On-Demand Queries"
        : velocity === "batch"
        ? "Scheduled Batch (Daily / Periodic)"
        : "Real-time Event-Driven (Streaming / Webhooks)";

    const scaleLabel =
      scale === "solo"
        ? "Solo Operator"
        : scale === "team"
        ? "Core Team (2 to 10 Seats)"
        : scale === "dept"
        ? "Department (10 to 50 Seats)"
        : "Enterprise-wide (50+ Seats)";

    const deploymentLabel =
      deployment === "client_vpc"
        ? "Customer Cloud VPC (AWS / GCP / Azure)"
        : deployment === "on_prem"
        ? "On-Premises / Private Cloud"
        : "idigdata Managed Isolated VPC";

    const enablementLabel =
      enablement === "turnkey"
        ? "Turnkey System Delivery Only (No training needed)"
        : enablement === "training"
        ? "Team Training & Operator Handover"
        : "Post-Launch Hypercare & Operational Monitoring";

    return [
      `# CUSTOM AGENTIC DEVELOPMENT SCOPE BRIEF`,
      `Delivery Standard: Scoped in Time Blocks (2 to 4 Weeks per deliverable)`,
      `Engineering Posture: Professional Software Firm (Production Architecture, Not Vibe Coded)`,
      ``,
      `## 1. Operating Domains & Objectives`,
      domainLabels || "Custom Domain Not Specified",
      ``,
      `## 2. Integration Surface & Connected Systems`,
      selectedSystems.length > 0 ? selectedSystems.map((s) => `- ${s}`).join("\n") : "- None selected yet",
      ``,
      `## 3. Human-in-the-Loop & Authority Model`,
      `- Model: ${authorityLabel}`,
      ``,
      `## 4. Execution Scale & Infrastructure`,
      `- Velocity: ${velocityLabel}`,
      `- User Scale: ${scaleLabel}`,
      `- Deployment Target: ${deploymentLabel}`,
      ``,
      `## 5. Enablement & Post-Launch Operations`,
      `- Handover Posture: ${enablementLabel}`,
      ``,
      `## 6. Operating Context & Problem Statement`,
      situationText.trim() ? situationText.trim() : "(No specific situation notes supplied)",
    ].join("\n");
  }, [selectedDomains, selectedSystems, authority, velocity, scale, deployment, enablement, situationText]);

  // Copy to clipboard (Clean button without third-party names)
  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generatedBrief);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 3000);
    } catch {
      // ignore
    }
  };

  // Submit Scoping Proposal
  const handleSubmitBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please supply both your name and working email.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("submitting");

    const payload = {
      name: contactName.trim(),
      email: contactEmail.trim(),
      company: contactCompany.trim(),
      role: "Custom Agentic Scope Buyer",
      message: [
        `[CUSTOM AGENTIC SCOPING BRIEF]`,
        `Readiness Score: ${readiness}%`,
        ``,
        generatedBrief,
      ].join("\n"),
      interestType: "applied_agentics" as const,
      source: "website-block-custom" as const,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if ((res.ok || res.status === 202) && data?.ok) {
        setSubmitStatus(data.notification === "sent" ? "success" : "recorded");
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data?.error || "Unable to transmit scoping brief. Please retry.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network connection issue. Please retry or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 antialiased flex flex-col justify-between ${
        isLight
          ? "bg-[#FBF9F4] text-[#142840] selection:bg-amber-400 selection:text-slate-900"
          : "bg-[#060c16] text-slate-100 selection:bg-amber-400 selection:text-slate-950"
      }`}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute -top-[10%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[140px] transition-all duration-700 ease-out ${
            isLight ? "opacity-15 bg-amber-300/40" : "opacity-20 bg-amber-500/15"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-5">
        {/* ==================================================================== */}
        {/* TOP CONTROL BAR: LOGO, BREADCRUMB, DELIVERY STANDARD & THEME        */}
        {/* ==================================================================== */}
        <header
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b pb-2.5 pt-1 ${
            isLight ? "border-[#E2DCD2]" : "border-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link href="/block/" className="hover:opacity-85 transition-opacity" title="Return to The Block">
              <TheBlockLogo
                size="sm"
                variant="monochrome"
                className={isLight ? "text-[#142840]" : "text-white"}
                showWordmark={true}
              />
            </Link>
            <span className={`text-xs font-mono hidden sm:inline ${isLight ? "text-slate-400" : "text-slate-500"}`}>
              /
            </span>
            <Link
              href="/block/"
              className={`text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                isLight ? "text-[#142840]/70 hover:text-[#142840]" : "text-slate-300 hover:text-white"
              }`}
            >
              <span>← Return to Outcomes Storefront</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${
                isLight
                  ? "bg-[#F3ECE0] border-amber-300 text-[#142840] shadow-2xs"
                  : "bg-amber-400/10 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>1 Block = 2 to 4 Weeks</span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        {/* ==================================================================== */}
        {/* HERO: TIGHT & HIGH-IMPACT (WE ARE NOT VIBE CODERS)                  */}
        {/* ==================================================================== */}
        <section className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
            <span>THE BLOCK</span>
            <span>·</span>
            <span>CUSTOM AGENTIC DEVELOPMENT</span>
            <span>·</span>
            <span>SCOPING BRIEF</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight leading-tight">
              Professional Agentic Systems. <span className="text-amber-600 dark:text-amber-400">Scoped in Time Blocks.</span>
            </h1>
            <span className="text-xs font-mono text-slate-500 shrink-0">
              2 to 4 Weeks per deliverable module
            </span>
          </div>

          <p
            className={`max-w-3xl text-xs sm:text-sm leading-relaxed ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            We are not vibe coders. We are an engineering firm with decades in enterprise software, systems
            integration, and production agentics. Configure your technical brief below to structure your time blocks
            and receive an executable proposal.
          </p>
        </section>

        {/* ==================================================================== */}
        {/* WHERE AGENTIC SOFTWARE CAN HELP + WHO DOES THE WORK                  */}
        {/* ==================================================================== */}
        <section
          className={`p-4 rounded-xl border flex flex-col gap-3 ${
            isLight ? "bg-white/80 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
          }`}
        >
          <div className="flex flex-col gap-1 border-b pb-2 border-slate-200/60 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Where agentic software can help
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              Build agentic software that uses your company knowledge to carry out work within the permissions you set.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {WHERE_IT_HELPS.map((row) => (
              <div
                key={row.heading}
                className={`p-3 rounded-lg border flex flex-col gap-1 ${
                  isLight ? "bg-stone-50/60 border-slate-200" : "bg-slate-950/40 border-slate-800"
                }`}
              >
                <h3 className="text-xs font-serif font-bold">{row.heading}</h3>
                <p className={`text-[11px] leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {row.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 pt-2 border-t border-slate-200/60 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Who does the work.
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              Robert Paddock leads every block. He brings in named specialists for the agreed scope, and the work is
              carried by people and agents under his command.
            </p>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* COMPACT ARCHETYPE PRESET STRIP (HORIZONTAL QUICK-LOAD)               */}
        {/* ==================================================================== */}
        <div
          className={`p-2.5 sm:p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
            isLight ? "bg-amber-50/50 border-amber-200/80" : "bg-slate-900/30 border-white/10"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              Archetypes:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ARCHETYPES.map((arch) => {
                const isSelected = selectedArchetype === arch.id;
                return (
                  <button
                    key={arch.id}
                    type="button"
                    onClick={() => handleApplyArchetype(arch)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      isSelected
                        ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                        : isLight
                        ? "bg-white border border-slate-200 text-slate-700 hover:border-amber-400"
                        : "bg-slate-800 border border-slate-700 text-slate-200 hover:border-amber-400"
                    }`}
                  >
                    {arch.title}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedArchetype && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 italic hidden md:inline">
                {ARCHETYPES.find((a) => a.id === selectedArchetype)?.summary}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArchetype(null)}
                className="text-amber-600 dark:text-amber-400 hover:underline shrink-0"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* ==================================================================== */}
        {/* MAIN 2-COLUMN WORKSPACE: SCOPING INSTRUMENT + SUMMARY               */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* LEFT COLUMN: COMPACT SCOPING MODULES (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* MODULE 1: PROBLEM DOMAIN & INTEGRATION SURFACE */}
            <div
              className={`p-4 rounded-xl border flex flex-col gap-3 ${
                isLight ? "bg-white/80 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-2 border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  01 / Problem Domain &amp; Systems Core
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {selectedDomains.length} domains · {selectedSystems.length} systems
                </span>
              </div>

              {/* Domains Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {DOMAIN_OPTIONS.map((opt) => {
                  const active = selectedDomains.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleDomain(opt.id)}
                      className={`text-left px-2.5 py-1.5 rounded-lg border text-[11px] font-mono transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? isLight
                            ? "bg-amber-100/70 border-amber-500 text-slate-950 font-bold"
                            : "bg-amber-500/20 border-amber-400 text-amber-200 font-bold"
                          : isLight
                          ? "bg-stone-50/60 border-slate-200 text-slate-700 hover:border-slate-300"
                          : "bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span className="truncate">{opt.label}</span>
                      <span className="ml-1 text-[10px] text-amber-600">{active ? "✓" : "+"}</span>
                    </button>
                  );
                })}
              </div>

              {/* Systems Category Chips */}
              <div className="flex flex-col gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                {SYSTEM_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase w-28 shrink-0">
                      {cat.category}:
                    </span>
                    <div className="flex flex-wrap gap-1 flex-1">
                      {cat.items.map((sys) => {
                        const active = selectedSystems.includes(sys);
                        return (
                          <button
                            key={sys}
                            type="button"
                            onClick={() => toggleSystem(sys)}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                              active
                                ? isLight
                                  ? "bg-slate-900 text-white font-bold"
                                  : "bg-amber-400 text-slate-950 font-bold"
                                : isLight
                                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                : "bg-slate-800/60 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            {active ? `✓ ${sys}` : sys}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Custom System Write-in */}
                <form onSubmit={handleAddCustomSystem} className="flex gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="Add custom database or internal API..."
                    value={customSystemInput}
                    onChange={(e) => setCustomSystemInput(e.target.value)}
                    className={`flex-1 px-2.5 py-1 rounded-md text-xs font-mono border focus:outline-hidden ${
                      isLight
                        ? "bg-white border-slate-300 text-slate-800"
                        : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 cursor-pointer"
                  >
                    + Add
                  </button>
                </form>
              </div>
            </div>

            {/* MODULE 2: AUTHORITY MANDATE & SCALE PARAMETERS */}
            <div
              className={`p-4 rounded-xl border flex flex-col gap-3 ${
                isLight ? "bg-white/80 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-2 border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  02 / Human Authority &amp; System Scale
                </span>
                <span className="text-[11px] font-mono text-slate-500 capitalize">
                  {authority} execution
                </span>
              </div>

              {/* 3-Tier Authority Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  {
                    id: "advisory",
                    title: "Tier 1: Read-Only Copilot",
                    desc: "Agent analyzes & drafts recommendations. Zero write risk; human carries out actions.",
                  },
                  {
                    id: "supervised",
                    title: "Tier 2: Supervised Execution",
                    desc: "Agent stages transactions/edits; human reviews and approves in Slack or portal.",
                  },
                  {
                    id: "bounded",
                    title: "Tier 3: Bounded Autonomy",
                    desc: "Agent runs permitted happy-path actions within hard caps; escalates exceptions to human.",
                  },
                ].map((tier) => {
                  const active = authority === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setAuthority(tier.id as any)}
                      className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? isLight
                            ? "bg-amber-100/70 border-amber-500 shadow-2xs font-semibold"
                            : "bg-amber-500/20 border-amber-400 text-amber-200 font-semibold"
                          : isLight
                          ? "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          : "bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <span className="font-bold font-serif block text-xs mb-0.5">{tier.title}</span>
                        <p className={`text-[10px] leading-tight ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                          {tier.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 mt-1.5">
                        {active ? "Active ✓" : "Select"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Scale, Velocity, Deployment Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 border-t border-slate-200/60 dark:border-slate-800 text-xs font-mono">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase">Frequency</label>
                  <select
                    value={velocity}
                    onChange={(e) => setVelocity(e.target.value as any)}
                    className={`px-2 py-1 rounded border text-xs ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="ondemand">On-Demand Queries</option>
                    <option value="batch">Daily / Hourly Batch Run</option>
                    <option value="realtime">Continuous Event-Driven</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase">User Footprint</label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value as any)}
                    className={`px-2 py-1 rounded border text-xs ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="solo">Solo Operator</option>
                    <option value="team">Core Team (2–10 Seats)</option>
                    <option value="dept">Department (10–50 Seats)</option>
                    <option value="enterprise">Enterprise-wide (50+ Seats)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase">Deployment</label>
                  <select
                    value={deployment}
                    onChange={(e) => setDeployment(e.target.value as any)}
                    className={`px-2 py-1 rounded border text-xs ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="client_vpc">Client Cloud VPC</option>
                    <option value="on_prem">On-Premises / Air-Gapped</option>
                    <option value="managed">idigdata Managed VPC</option>
                  </select>
                </div>
              </div>
            </div>

            {/* MODULE 3: ENABLEMENT & POST-LAUNCH OPERATIONS */}
            <div
              className={`p-4 rounded-xl border flex flex-col gap-2.5 ${
                isLight ? "bg-white/80 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-2 border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  03 / Enablement, Training &amp; Operational Handover
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Time &amp; People Investment
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {ENABLEMENT_OPTIONS.map((opt) => {
                  const active = enablement === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setEnablement(opt.id as any)}
                      className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? isLight
                            ? "bg-amber-100/70 border-amber-500 shadow-2xs font-semibold"
                            : "bg-amber-500/20 border-amber-400 text-amber-200 font-semibold"
                          : isLight
                          ? "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          : "bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-bold text-amber-600">{opt.badge}</span>
                          {active && <span className="text-[10px] text-amber-600">✓</span>}
                        </div>
                        <span className="font-bold font-serif block text-xs leading-tight mb-1">{opt.label}</span>
                        <p className={`text-[10px] leading-tight ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                          {opt.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MODULE 4: OPERATING CONTEXT CANVAS */}
            <div
              className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isLight ? "bg-white/80 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  04 / Operating Reality &amp; Bottlenecks
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Tell us what needs to work
                </span>
              </div>

              {/* Quick prompt injection chips */}
              <div className="flex flex-wrap gap-1">
                {[
                  "+ Current Manual Bottleneck:",
                  "+ Where Previous Scripts Failed:",
                  "+ Required Human Sign-off Step:",
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setSituationText((prev) => `${prev ? `${prev}\n\n` : ""}${chip} `)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                      isLight
                        ? "bg-amber-100/80 text-amber-900 hover:bg-amber-200"
                        : "bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <textarea
                rows={3}
                value={situationText}
                onChange={(e) => setSituationText(e.target.value)}
                placeholder="Describe where the manual friction lives, the records involved, and what the agentic system must deliver in a 2 to 4 week block..."
                className={`w-full p-2.5 rounded-lg text-xs font-mono leading-relaxed border resize-y focus:outline-hidden ${
                  isLight
                    ? "bg-white border-slate-300 text-slate-800 placeholder-slate-400"
                    : "bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-600"
                }`}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: SCOPING SUMMARY & PROPOSAL INTAKE (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-4">
            <div
              className={`p-5 rounded-xl border flex flex-col gap-4 shadow-md ${
                isLight
                  ? "bg-gradient-to-b from-[#FDFBF7] to-[#F5ECE0] border-amber-300/80 text-slate-900"
                  : "bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/30 text-white"
              }`}
            >
              {/* SUMMARY HEADER (NO LEDGER JARGON) */}
              <div className="flex items-center justify-between border-b pb-2.5 border-amber-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">
                    Scoping Summary
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400">
                  Target: 1 Block (2–4 Wks)
                </span>
              </div>

              {/* READINESS METER */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">Architecture Readiness</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{readiness}% Complete</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                    style={{ width: `${readiness}%` }}
                  />
                </div>
              </div>

              {/* COMPACT SNAPSHOT STATS */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className={`p-2 rounded border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[9px] text-slate-400 block uppercase">Systems</span>
                  <span className="font-bold truncate">{selectedSystems.length} Connected</span>
                </div>
                <div className={`p-2 rounded border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[9px] text-slate-400 block uppercase">Mandate</span>
                  <span className="font-bold capitalize truncate">{authority}</span>
                </div>
                <div className={`p-2 rounded border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[9px] text-slate-400 block uppercase">Velocity</span>
                  <span className="font-bold capitalize truncate">{velocity}</span>
                </div>
                <div className={`p-2 rounded border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[9px] text-slate-400 block uppercase">Enablement</span>
                  <span className="font-bold capitalize truncate">{enablement}</span>
                </div>
              </div>

              {/* ONE-CLICK COPY (NO THIRD-PARTY BRAND NAMES) */}
              <button
                type="button"
                onClick={handleCopyBrief}
                className={`w-full py-2 px-3 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  copiedBrief
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : isLight
                    ? "bg-white/90 border-slate-300 hover:bg-white text-slate-800"
                    : "bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-white"
                }`}
              >
                <span>{copiedBrief ? "Scoping Brief Copied to Clipboard ✓" : "📋 Copy Scoping Brief"}</span>
              </button>

              {/* PROPOSAL INTAKE FORM */}
              <div className="border-t pt-3 border-amber-500/20 flex flex-col gap-2.5">
                <div className="flex flex-col">
                  <span className="text-xs font-serif font-bold">Request Scoping Proposal</span>
                  <span className="text-[11px] text-slate-500">
                    We scope in blocks: time modules to engineer and deliver the outcome.
                  </span>
                </div>

                {submitStatus === "success" || submitStatus === "recorded" ? (
                  <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex flex-col gap-1">
                    <span className="font-bold">Brief Transmitted ✓</span>
                    <p className="text-[11px] leading-relaxed">
                      {submitStatus === "success"
                        ? "Your scoping brief lands directly with Robert Paddock. We will review your architecture and return a scoped delivery proposal."
                        : "Your scoping brief was securely recorded. We will review your architecture and follow up directly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitBrief} className="flex flex-col gap-2">
                    {submitStatus === "error" && (
                      <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-mono">
                        {submitMessage}
                      </div>
                    )}

                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-serif font-bold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                      <span>{isSubmitting ? "Transmitting Brief…" : "Submit Scoping Brief"}</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-500 font-mono">
                      Direct principal review · Scope agreed before engagement begins
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* COMPACT FOOTER STRIP                                                 */}
        {/* ==================================================================== */}
        <footer
          className={`border-t pt-4 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono ${
            isLight ? "border-slate-300/60 text-slate-600" : "border-white/10 text-slate-400"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#142840] dark:text-white">THE BLOCK</span>
            <span>·</span>
            <span>Custom Agentic Systems</span>
            <span>·</span>
            <span>1 Block = 2 to 4 Weeks</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/block/" className="hover:underline">
              Outcomes Storefront ↗
            </Link>
            <Link href="/agentic-ai/" className="hover:underline">
              Agentic Weblog ↗
            </Link>
            <Link href="/contact/" className="hover:underline">
              Contact ↗
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
