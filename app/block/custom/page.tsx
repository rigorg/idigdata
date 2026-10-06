"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TheBlockLogo } from "@/components/TheBlockLogo";
import { useTheme, ThemeToggle } from "@/lib/theme";

// Delivery Standard: 1 Block = 2 to 4 Weeks. Time for deliverable.
// Voice: Collective sovereign engineering firm ("We", "Our team", "Our principals").
// Zero dollars ($), zero phone numbers, ASCII hyphens only.

type Archetype = {
  id: string;
  title: string;
  badge: string;
  summary: string;
  domains: string[];
  systems: string[];
  authority: "advisory" | "supervised" | "bounded";
  velocity: "ondemand" | "batch" | "realtime";
};

const ARCHETYPES: Archetype[] = [
  {
    id: "billing_recon",
    title: "Billing & Reconciliation Engine",
    badge: "FINANCIAL INTEGRITY",
    summary:
      "Ingests bank transactions, vendor invoices, and ERP records to detect discrepancies, draft matching journal entries, and present clean batches for controller approval.",
    domains: ["financial_billing"],
    systems: ["PostgreSQL", "QuickBooks", "NetSuite", "Email / Inbound Webhooks"],
    authority: "supervised",
    velocity: "batch",
  },
  {
    id: "ops_dispatcher",
    title: "Multi-System Operations Dispatcher",
    badge: "WORKFLOW ORCHESTRATION",
    summary:
      "Triage inbound customer or vendor communications, interrogates CRM and SQL data, drafts context-aware responses, and queues system updates for human sign-off.",
    domains: ["customer_vendor_ops"],
    systems: ["Salesforce", "PostgreSQL", "Slack", "Zendesk"],
    authority: "supervised",
    velocity: "realtime",
  },
  {
    id: "knowledge_pipeline",
    title: "Enterprise Knowledge & Contract Pipeline",
    badge: "DOCUMENT INTELLIGENCE",
    summary:
      "Extracts structured terms from messy contracts, PDFs, and internal SOPs. Answers operational questions with verified source citations and triggers audit webhooks.",
    domains: ["knowledge_docs"],
    systems: ["PostgreSQL", "Document Stores / S3", "Slack", "REST API"],
    authority: "advisory",
    velocity: "ondemand",
  },
  {
    id: "data_drift_agent",
    title: "Autonomous Data Sync & Drift Agent",
    badge: "DATA PIPELINE",
    summary:
      "Monitors cross-database synchronization, identifies data schema drift or orphaned records, and executes remediation within strictly bounded parameter caps.",
    domains: ["data_sync"],
    systems: ["PostgreSQL", "Snowflake", "Custom REST API"],
    authority: "bounded",
    velocity: "batch",
  },
];

const DOMAIN_OPTIONS = [
  {
    id: "financial_billing",
    label: "Financial, Billing & Reconciliation",
    desc: "Invoicing, automated match/exceptions, accounts payable, ledger integrity",
  },
  {
    id: "customer_vendor_ops",
    label: "Customer & Vendor Operations",
    desc: "Inbound triage, ticket synthesis, multi-system status verification, routing",
  },
  {
    id: "knowledge_docs",
    label: "Knowledge, Policies & Contract Extraction",
    desc: "Unstructured PDF/doc ingestion, cited Q&A, clause comparison, compliance audit",
  },
  {
    id: "data_sync",
    label: "Data Pipelines & Cross-System Sync",
    desc: "ETL validation, database reconciliation, entity resolution, drift monitoring",
  },
  {
    id: "devops_engineering",
    label: "Engineering & Internal Tooling",
    desc: "Codebase exploration, release verification, operational runbooks, MCP gateways",
  },
  {
    id: "bespoke_workflow",
    label: "Custom Operational Workflows",
    desc: "Bespoke business processes unique to your company-owned data core",
  },
];

const SYSTEM_CATEGORIES = [
  {
    category: "Databases & Warehouses",
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
    category: "Interfaces & Communication",
    items: ["Slack", "Microsoft Teams", "Email / Inbound Webhooks", "Custom Web Portal", "Headless API"],
  },
  {
    category: "Protocols & Gateways",
    items: ["Model Context Protocol (MCP)", "REST / OpenAPI", "GraphQL", "Event Streams / Kafka"],
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
    if (selectedSystems.length > 0) score += Math.min(30, selectedSystems.length * 10);
    if (authority) score += 20;
    if (scale && velocity && deployment) score += 15;
    if (situationText.trim().length > 30) score += 15;
    return Math.min(100, score);
  }, [selectedDomains, selectedSystems, authority, scale, velocity, deployment, situationText]);

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
        ? "On-Demand (Manual Trigger)"
        : velocity === "batch"
        ? "Scheduled Batch (Daily / Periodic)"
        : "Real-time Event-Driven (Webhooks / Continuous)";

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
        ? "On-Premises / Air-Gapped Private Cloud"
        : "idigdata Managed Isolated VPC";

    return [
      `# CUSTOM AGENTIC DEVELOPMENT SCOPE BRIEF`,
      `Standard: 1 Block (2 to 4 Weeks) · Time for Deliverable`,
      `Firm Posture: Senior Engineering Team · Production Architecture (Not Vibe Coded)`,
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
      `## 5. Operating Reality & Context Notes`,
      situationText.trim() ? situationText.trim() : "(No specific situation notes supplied)",
    ].join("\n");
  }, [selectedDomains, selectedSystems, authority, velocity, scale, deployment, situationText]);

  // Copy to clipboard
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
          className={`absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full blur-[140px] transition-all duration-700 ease-out ${
            isLight ? "opacity-15 bg-amber-300/40" : "opacity-20 bg-amber-500/15"
          }`}
        />
        <div
          className={`absolute bottom-[10%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[160px] ${
            isLight ? "bg-stone-200/50" : "bg-slate-900/40"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-8">
        {/* ==================================================================== */}
        {/* TOP CONTROL BAR: LOGO, BREADCRUMB, DELIVERY STANDARD & THEME        */}
        {/* ==================================================================== */}
        <header
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3.5 pt-1 ${
            isLight ? "border-[#E2DCD2]" : "border-white/10"
          }`}
        >
          <div className="flex items-center gap-4">
            <Link href="/block/" className="hover:opacity-85 transition-opacity" title="Return to The Block">
              <TheBlockLogo
                size="md"
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

          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${
                isLight
                  ? "bg-[#F3ECE0] border-amber-300 text-[#142840] shadow-xs"
                  : "bg-amber-400/10 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>1 Block = 2 to 4 Weeks</span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        {/* ==================================================================== */}
        {/* HERO: POSITIONING (WE ARE NOT VIBE CODERS)                           */}
        {/* ==================================================================== */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
            <span>THE BLOCK</span>
            <span>·</span>
            <span>CUSTOM AGENTIC DEVELOPMENT</span>
            <span>·</span>
            <span>SCOPING BRIEF</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.12]">
            Professional Agentic Systems. <br className="hidden sm:inline" />
            <span className="text-amber-600 dark:text-amber-400">Scoped &amp; Built in 2 to 4 Week Blocks.</span>
          </h1>

          <p
            className={`max-w-3xl text-base sm:text-lg leading-relaxed ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            We are not vibe coders. We are an engineering firm with decades in enterprise software, systems
            integration, and production agentics. Configure your custom system brief below, define your connected
            data core, and receive an executable delivery proposal.
          </p>
        </section>

        {/* ==================================================================== */}
        {/* GAMIFIED ARCHETYPE QUICK-STARTS                                      */}
        {/* ==================================================================== */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Step 0 / Or start with a proven system archetype
            </span>
            {selectedArchetype && (
              <button
                type="button"
                onClick={() => setSelectedArchetype(null)}
                className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline"
              >
                Clear archetype preset
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {ARCHETYPES.map((arch) => {
              const isSelected = selectedArchetype === arch.id;
              return (
                <button
                  key={arch.id}
                  type="button"
                  onClick={() => handleApplyArchetype(arch)}
                  className={`text-left p-4 rounded-xl border transition-all relative flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? isLight
                        ? "bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/20 shadow-sm"
                        : "bg-amber-950/20 border-amber-400 ring-2 ring-amber-400/20"
                      : isLight
                      ? "bg-white/80 border-slate-200 hover:border-amber-400/70 hover:bg-white shadow-xs"
                      : "bg-slate-900/40 border-slate-800 hover:border-amber-400/50 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-wider font-bold text-amber-600 dark:text-amber-400">
                      {arch.badge}
                    </span>
                    <h2 className="text-sm font-bold font-serif leading-snug">{arch.title}</h2>
                    <p className={`text-xs leading-relaxed line-clamp-3 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                      {arch.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono font-semibold">
                    <span className="text-slate-500">{arch.systems.length} systems</span>
                    <span className={isSelected ? "text-amber-600 dark:text-amber-400 font-bold" : "text-slate-400"}>
                      {isSelected ? "Active Preset ✓" : "Load Preset →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* MAIN 2-COLUMN WORKSPACE: THE SCOPING INSTRUMENT + LIVE LEDGER        */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: THE 5-STEP SCOPING INSTRUMENT (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* STEP 1: OPERATING DOMAINS */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${
                isLight ? "bg-white/70 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  01 / Operating Problem Space
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {selectedDomains.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOMAIN_OPTIONS.map((opt) => {
                  const active = selectedDomains.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleDomain(opt.id)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                        active
                          ? isLight
                            ? "bg-amber-100/60 border-amber-500 text-slate-900 font-semibold shadow-2xs"
                            : "bg-amber-500/20 border-amber-400 text-amber-200 font-semibold"
                          : isLight
                          ? "bg-stone-50/60 border-slate-200 text-slate-700 hover:border-slate-300"
                          : "bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs">{opt.label}</span>
                        <span
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                            active
                              ? "bg-amber-500 text-white"
                              : isLight
                              ? "border border-slate-300"
                              : "border border-slate-700"
                          }`}
                        >
                          {active && "✓"}
                        </span>
                      </div>
                      <p className={`text-[11px] leading-tight ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: INTEGRATION SURFACE */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${
                isLight ? "bg-white/70 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    02 / Integration Surface &amp; Data Core
                  </span>
                  <p className={`text-xs mt-0.5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                    Which systems, databases, and interfaces must the agentic workflow touch?
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {selectedSystems.length} Connected
                </span>
              </div>

              <div className="flex flex-col gap-3.5">
                {SYSTEM_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((sys) => {
                        const active = selectedSystems.includes(sys);
                        return (
                          <button
                            key={sys}
                            type="button"
                            onClick={() => toggleSystem(sys)}
                            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                              active
                                ? isLight
                                  ? "bg-slate-900 text-white font-bold shadow-xs ring-1 ring-slate-900"
                                  : "bg-amber-400 text-slate-950 font-bold shadow-xs ring-1 ring-amber-400"
                                : isLight
                                ? "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                                : "bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            {active ? `✓ ${sys}` : `+ ${sys}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Custom System Write-in */}
                <form onSubmit={handleAddCustomSystem} className="flex gap-2 mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <input
                    type="text"
                    placeholder="Add custom system or legacy database..."
                    value={customSystemInput}
                    onChange={(e) => setCustomSystemInput(e.target.value)}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-hidden focus:ring-1 focus:ring-amber-500 ${
                      isLight
                        ? "bg-white border-slate-300 text-slate-800"
                        : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 cursor-pointer"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>

            {/* STEP 3: AUTHORITY MODEL & HUMAN-IN-THE-LOOP */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${
                isLight ? "bg-white/70 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  03 / Authority Model &amp; Human Mandate
                </span>
                <p className={`text-xs mt-0.5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Where does human authority stand in the execution loop?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "advisory",
                    title: "Tier 1: Read-Only Copilot",
                    badge: "ZERO WRITE RISK",
                    desc: "Agent reads, queries, and synthesizes recommendations. Humans carry out every system write action.",
                  },
                  {
                    id: "supervised",
                    title: "Tier 2: Supervised Execution",
                    badge: "RECOMMENDED",
                    desc: "Agent drafts the exact transaction, update, or email. Human clicks 'Approve' or 'Reject' in Slack or web portal.",
                  },
                  {
                    id: "bounded",
                    title: "Tier 3: Bounded Autonomy",
                    badge: "CAPPED BOUNDARIES",
                    desc: "Agent executes standard happy paths within pre-set financial/record thresholds. Automatically escalates exceptions.",
                  },
                ].map((tier) => {
                  const active = authority === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setAuthority(tier.id as any)}
                      className={`text-left p-3.5 rounded-xl border text-xs flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                        active
                          ? isLight
                            ? "bg-amber-100/70 border-amber-500 shadow-sm ring-1 ring-amber-500"
                            : "bg-amber-500/20 border-amber-400 ring-1 ring-amber-400"
                          : isLight
                          ? "bg-white border-slate-200 hover:border-slate-300"
                          : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                          {tier.badge}
                        </span>
                        <span className="font-bold font-serif text-sm">{tier.title}</span>
                        <p className={`text-[11px] leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                          {tier.desc}
                        </p>
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${active ? "text-amber-600 dark:text-amber-400" : "text-slate-400"}`}>
                        {active ? "Selected Mandate ✓" : "Select Mandate"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: SCALE, VELOCITY & DEPLOYMENT */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${
                isLight ? "bg-white/70 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                04 / Scale, Velocity &amp; Infrastructure
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Velocity */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-500 uppercase">
                    Execution Frequency
                  </label>
                  <select
                    value={velocity}
                    onChange={(e) => setVelocity(e.target.value as any)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="ondemand">On-Demand Queries</option>
                    <option value="batch">Daily / Hourly Batch Run</option>
                    <option value="realtime">Continuous Real-time Stream</option>
                  </select>
                </div>

                {/* User Scale */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-500 uppercase">
                    Operator Footprint
                  </label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value as any)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="solo">Solo Operator</option>
                    <option value="team">Core Team (2 to 10 Seats)</option>
                    <option value="dept">Department (10 to 50 Seats)</option>
                    <option value="enterprise">Enterprise-wide (50+ Seats)</option>
                  </select>
                </div>

                {/* Deployment */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-500 uppercase">
                    Deployment Target
                  </label>
                  <select
                    value={deployment}
                    onChange={(e) => setDeployment(e.target.value as any)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                      isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                    }`}
                  >
                    <option value="client_vpc">Client Cloud VPC (AWS / GCP / Azure)</option>
                    <option value="on_prem">On-Premises / Air-Gapped Private</option>
                    <option value="managed">idigdata Managed Isolated VPC</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 5: THE CONTEXT CANVAS (OPERATING REALITY) */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-3 ${
                isLight ? "bg-white/70 border-[#E2DCD2]" : "bg-slate-900/30 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    05 / Operating Context Canvas
                  </span>
                  <p className={`text-xs mt-0.5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                    Describe your workflow bottleneck, edge cases, and what a successful 2 to 4 week deliverable looks like.
                  </p>
                </div>
              </div>

              {/* Quick prompt injection chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "+ Current Manual Bottleneck:",
                  "+ Where Previous Scripts Failed:",
                  "+ Key Human Approval Step:",
                  "+ Target Finish Line / Success:",
                ].map((promptChip) => (
                  <button
                    key={promptChip}
                    type="button"
                    onClick={() => setSituationText((prev) => `${prev ? `${prev}\n\n` : ""}${promptChip} `)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      isLight
                        ? "bg-amber-100/80 text-amber-900 hover:bg-amber-200"
                        : "bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
                    }`}
                  >
                    {promptChip}
                  </button>
                ))}
              </div>

              <textarea
                rows={5}
                value={situationText}
                onChange={(e) => setSituationText(e.target.value)}
                placeholder="Example: We reconcile thousands of vendor invoices against our NetSuite POs. Today, 3 people spend 20 hours a week resolving price and item-number mismatches. We need an agent that matches 90% of invoices, drafts journal entries in NetSuite, and sends high-dollar discrepancies to Slack for controller one-click approval..."
                className={`w-full p-3.5 rounded-xl text-xs font-mono leading-relaxed border resize-y focus:outline-hidden focus:ring-1 focus:ring-amber-500 ${
                  isLight
                    ? "bg-white border-slate-300 text-slate-800 placeholder-slate-400"
                    : "bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-600"
                }`}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: LIVE DELIVERY LEDGER & PROPOSAL SUBMISSION (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-6">
            {/* LIVE SCOPING LEDGER CARD */}
            <div
              className={`p-6 rounded-2xl border flex flex-col gap-5 shadow-lg ${
                isLight
                  ? "bg-gradient-to-b from-[#FDFBF7] to-[#F5ECE0] border-amber-300/80 text-slate-900"
                  : "bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/30 text-white"
              }`}
            >
              {/* LEDGER HEADER */}
              <div className="flex items-center justify-between border-b pb-3 border-amber-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">
                    Delivery Block Ledger
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  Target: 1 Block (2–4 Wks)
                </span>
              </div>

              {/* READINESS METER */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Architecture Definition</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{readiness}% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                    style={{ width: `${readiness}%` }}
                  />
                </div>
              </div>

              {/* LIVE SCOPE SUMMARY STATS */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                <div className={`p-2.5 rounded-lg border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[10px] text-slate-400 block uppercase">Domains</span>
                  <span className="font-bold">{selectedDomains.length} Selected</span>
                </div>
                <div className={`p-2.5 rounded-lg border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[10px] text-slate-400 block uppercase">Systems</span>
                  <span className="font-bold">{selectedSystems.length} Connected</span>
                </div>
                <div className={`p-2.5 rounded-lg border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[10px] text-slate-400 block uppercase">Mandate</span>
                  <span className="font-bold capitalize">{authority}</span>
                </div>
                <div className={`p-2.5 rounded-lg border ${isLight ? "bg-white/80 border-amber-200" : "bg-black/30 border-white/10"}`}>
                  <span className="text-[10px] text-slate-400 block uppercase">Velocity</span>
                  <span className="font-bold capitalize">{velocity}</span>
                </div>
              </div>

              {/* SYSTEM TAGS PREVIEW */}
              {selectedSystems.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Integration Footprint
                  </span>
                  <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                    {selectedSystems.map((s) => (
                      <span
                        key={s}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isLight
                            ? "bg-white border-slate-300 text-slate-800"
                            : "bg-slate-800 border-slate-700 text-slate-200"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* EXPORT ACTION: ONE-CLICK COPY RFP / MARKDOWN */}
              <button
                type="button"
                onClick={handleCopyBrief}
                className={`w-full py-2.5 px-3 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  copiedBrief
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : isLight
                    ? "bg-white/90 border-slate-300 hover:bg-white text-slate-800"
                    : "bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-white"
                }`}
              >
                <span>{copiedBrief ? "Brief Copied to Clipboard ✓" : "📋 Copy Scoping Brief for Upwork / RFP"}</span>
              </button>

              {/* PROPOSAL INTAKE FORM */}
              <div className="border-t pt-4 border-amber-500/20 flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-xs font-serif font-bold">Request Scoping Proposal</span>
                  <span className="text-[11px] text-slate-500">
                    Our principals review your architecture and return a deliverable block statement.
                  </span>
                </div>

                {submitStatus === "success" || submitStatus === "recorded" ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex flex-col gap-1.5">
                    <span className="font-bold text-sm">Brief Transmitted ✓</span>
                    <p className="text-[11px] leading-relaxed">
                      {submitStatus === "success"
                        ? "Your scoping brief lands directly in our principals' inbox. We will review your architecture and respond with a scoped delivery proposal."
                        : "Your scoping brief was securely recorded. We will review your architecture and follow up shortly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitBrief} className="flex flex-col gap-2.5">
                    {submitStatus === "error" && (
                      <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-mono">
                        {submitMessage}
                      </div>
                    )}

                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono border focus:outline-hidden ${
                        isLight ? "bg-white border-slate-300 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-200"
                      }`}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-serif font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                      <span>{isSubmitting ? "Transmitting Brief…" : "Submit Scoping Brief"}</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-500 font-mono mt-1">
                      Direct principal review · Scope agreed before engagement begins
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* FOOTER REASSURANCE STRIP                                             */}
        {/* ==================================================================== */}
        <footer
          className={`border-t pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isLight ? "border-slate-300/60 text-slate-600" : "border-white/10 text-slate-400"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#142840] dark:text-white">THE BLOCK</span>
            <span>·</span>
            <span>Custom Agentic Systems</span>
            <span>·</span>
            <span>1 Block = 2 to 4 Weeks</span>
          </div>

          <div className="flex items-center gap-4">
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
