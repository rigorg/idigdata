"use client";

import React, { useState, useMemo } from "react";

// ============================================================================
// THE STANDARD BLOCK CONFIGURATOR & MANDATE ARCHITECTURE
// An executive platform telling the full story of Robert Paddock's delivery model:
// - Elevated Compact Header: Executive Stance & The 3 Laws of Delivery
// - Dual-Mode Configurator:
//     [ Standard Blocks ] vs [ Applied Agentics ]
// - Center Zone: The Configurator Machine (Pillars on left, Telemetry Core on right)
// - Bottom Zone: Deterministic Architecture Synthesis, Blueprints & Free Review
// ============================================================================

export interface OutcomeItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  isCustom?: boolean;
}

export interface DomainCategory {
  id: "leadership" | "strategy" | "data" | "finance" | "operations";
  title: string;
  shortTitle: string;
  code: string;
  subtitle: string;
  essence: string;
  color: string;
  badge: string;
  catalog: OutcomeItem[];
}

export interface AgenticBuildItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  systems: string[];
  blockCount: number;
  highlight?: string;
  isCustom?: boolean;
}

const CATEGORY_ORDER = [
  "leadership",
  "strategy",
  "data",
  "finance",
  "operations",
] as const;

const INITIAL_CATEGORIES: Record<string, DomainCategory> = {
  leadership: {
    id: "leadership",
    title: "Fractional & Interim CIO Leadership",
    shortTitle: "Leadership",
    code: "FL",
    subtitle: "Interim executive steering, crisis triage, cutover war rooms, and vendor accountability",
    essence: "I take direct accountability above the vendors. Stalled initiatives, M&A integration, cutover war rooms, and vendor SOW resets stay aligned with the board.",
    color: "#142840",
    badge: "01 - Fractional & Interim CIO",
    catalog: [
      {
        id: "vit_governance_cadence",
        name: "Program Management & Cutover War Room Cadence",
        tagline: "Disciplined Delivery Rhythm",
        desc: "Establish weekly executive governance steering, daily cutover standups, and transparent burn-down dashboards for board visibility."
      },
      {
        id: "trn_crisis_triage",
        name: "Crisis Stabilization & Go-Live Remediation",
        tagline: "Direct Executive Interim Steering",
        desc: "Step directly into active project crises to stabilize stakeholder panic, protect core operations, and orchestrate a clean recovery."
      },
      {
        id: "trn_sow_reset",
        name: "SOW Scope Audit, De-risking & Contract Realignment",
        tagline: "Eliminating Billable Creep",
        desc: "Audit bloated vendor statements of work, strip non-essential deliverables, and realign commercial agreements around concrete milestone releases."
      },
      {
        id: "trn_integrator_remediation",
        name: "System Integrator Diagnostic & Cutover Governance",
        tagline: "Holding Integrators Accountable",
        desc: "Perform forensic analysis of stalled partner progress, replace ineffective partner management, and institute daily cutover flight control."
      },
      {
        id: "vit_vendor_scorecards",
        name: "Vendor SLA & Deliverable Enforcement Framework",
        tagline: "Tie Payments to Acceptance",
        desc: "Institute binding performance scorecards, milestone gating, and contract clauses tying software vendor disbursements directly to operational sign-off."
      },
    ]
  },
  strategy: {
    id: "strategy",
    title: "Enterprise Strategy & Target Operating Model",
    shortTitle: "Strategy & TOM",
    code: "ST",
    subtitle: "Pragmatic multi-year technology roadmaps, portfolio rationalization, and operational blueprints",
    essence: "I set a technology direction the business can execute, with leadership aligned on priorities, investment, and risk. Portfolio rationalization stops zombie spend.",
    color: "#854d0e",
    badge: "02 - Strategy & TOM",
    catalog: [
      {
        id: "dir_exec_roadmap",
        name: "Actionable Multi-Year Technology Roadmap",
        tagline: "Pragmatic Board-Approved Sequencing",
        desc: "Develop an executive technology strategy tied directly to revenue growth, operational margins, and pragmatic capital allocation."
      },
      {
        id: "dir_board_alignment",
        name: "Executive & Board Consensus Alignment",
        tagline: "Bridging Operations & Governance",
        desc: "Align CEOs, CFOs, and board committees on capital outlays, delivery risks, and measurable operational outcomes."
      },
      {
        id: "dir_portfolio_prioritization",
        name: "IT Portfolio Prioritization & Spend Rationalization",
        tagline: "Eliminating Zombie Initiatives",
        desc: "Conduct rigorous ROI triage across all active technology projects, killing low-yield initiatives to fund core modernization."
      },
      {
        id: "arc_target_operating_model",
        name: "Target Operating Model (TOM) & Org Design",
        tagline: "Structure Follows Strategy",
        desc: "Design the internal technology organization, capability matrices, and external partner ratios required to sustain long-term digital independence."
      },
      {
        id: "arc_system_blueprinting",
        name: "Enterprise Systems Blueprinting & Technical Due Diligence",
        tagline: "Cohesive Application Topology",
        desc: "Map current-state application friction, evaluate SaaS versus bespoke builds, and define immutable enterprise interface boundaries."
      },
    ]
  },
  data: {
    id: "data",
    title: "Core Enterprise Data & Cloud Migrations",
    shortTitle: "Data & Cloud",
    code: "CD",
    subtitle: "On-premises to cloud modernization, unified data schemas, and master data integrity",
    essence: "Legacy on-premises databases migrated cleanly into modern cloud structures. Clean data pipelines ensure enterprise systems run on verified truth.",
    color: "#1e3a8a",
    badge: "03 - Data & Cloud",
    catalog: [
      {
        id: "fnd_cloud_migration",
        name: "Cloud ERP & Database Migration Strategy",
        tagline: "Zero Data Loss Cutover",
        desc: "Architect and execute end-to-end migration from legacy on-premises databases and legacy ERP instances to cloud infrastructure with zero unplanned downtime."
      },
      {
        id: "fnd_common_data_model",
        name: "Common Data Schema & Enterprise Master Data Sync",
        tagline: "Single Source of Operational Truth",
        desc: "Establish unified entity definitions across ERP, CRM, and shop floor systems, eliminating duplicate item catalogs and reconciliation lag."
      },
      {
        id: "fnd_pipeline_etl",
        name: "Automated ETL Pipelines & Ingestion Engine",
        tagline: "Reliable Production Data Flows",
        desc: "Build fault-tolerant data pipelines with automatic error quarantine, transaction replay, and real-time ledger consistency monitoring."
      },
      {
        id: "fnd_data_warehouse",
        name: "Executive Analytics & Real-Time Operational Telemetry",
        tagline: "Actionable Board Dashboards",
        desc: "Deploy high-speed analytical data warehouses and automated executive dashboards delivering instantaneous operational visibility."
      },
    ]
  },
  finance: {
    id: "finance",
    title: "Financial Systems & Ledger Validation",
    shortTitle: "Ledger Validation",
    code: "FN",
    subtitle: "Automated financial close acceleration, balance validation, and auditable transaction flows",
    essence: "The books balance down to the penny. GAAP compliance, automated subledger reconciliation, and accelerated close cycles remove friction for the CFO.",
    color: "#14532d",
    badge: "04 - Ledger Validation",
    catalog: [
      {
        id: "fnd_financial_validation",
        name: "Financial Validation & General Ledger Integrity Check",
        tagline: "Penny-Level Balance Verification",
        desc: "Execute rigorous automated balancing between subledgers and general ledger, proving data fidelity for GAAP audits and tax authorities."
      },
      {
        id: "fnd_close_acceleration",
        name: "Financial Close Acceleration (18 Days to 4)",
        tagline: "Compressing Month-End Friction",
        desc: "Automate manual journal entries, bank reconciliations, and intercompany eliminations to compress financial close from weeks to four days."
      },
      {
        id: "ag_billing_system",
        name: "Milestone Billing & Revenue Recognition Engine",
        tagline: "Accelerating Cash Velocity",
        desc: "Implement automated percentage-of-completion progress billing tied directly to validated operational delivery milestones."
      },
      {
        id: "fnd_wms_compliance",
        name: "Regulatory Compliance, Tax & Audit Governance",
        tagline: "Automated Regulatory Posture",
        desc: "Incorporate automated compliance checkpoints for SOX, sales tax nexus, and industry regulations (TTB, SQF, OSHA) directly into transaction workflows."
      },
    ]
  },
  operations: {
    id: "operations",
    title: "Operational Workflows & Plant Floor Execution",
    shortTitle: "Operations",
    code: "OP",
    subtitle: "Shop floor mobile digitization, barcode tracking, warehouse execution, and supply chain bridges",
    essence: "Bridging enterprise software to the physical floor. Touch-first mobile workflows for bay technicians, warehouse crews, and field operations.",
    color: "#475569",
    badge: "05 - Operational Workflows",
    catalog: [
      {
        id: "ag_work_orders",
        name: "Mobile Shop Floor & Bay Work Orders (iPads + ERP)",
        tagline: "Eliminating Paper Work Orders",
        desc: "Deploy ruggedized touch-first iPad interfaces in service bays for technician time-tracking, live parts lookups, and instant accounting sync."
      },
      {
        id: "fnd_wms_execution",
        name: "Warehouse Management (WMS) & Barcode Automation",
        tagline: "Real-Time Inventory Precision",
        desc: "Institute handheld barcode scanning for receiving, directed putaway, picking, and shipping, bringing inventory accuracy above 99%."
      },
      {
        id: "ag_supply_chain_bridge",
        name: "Logistics, TMS & Freight Invoice Audit Core",
        tagline: "Autonomous Carrier Reconciliation",
        desc: "Connect Transportation Management Systems directly with General Ledger AP, auto-reconciling freight invoices against contractual rate sheets."
      },
      {
        id: "ag_customer_approval",
        name: "Automated Customer SMS Estimate Approvals",
        tagline: "Sub-15 Minute Job Sign-Off",
        desc: "Empower customers to review inspection photos, approve repair estimates, and submit digital deposits via SMS without phone-tag delays."
      },
    ]
  }
};

const AGENTIC_BUILDS_CATALOG: AgenticBuildItem[] = [
  {
    id: "ag_freight_audit",
    name: "Freight Invoice Mapping & Audit Core (TMS <-> ERP)",
    tagline: "Autonomous Rate Sheet & Accessorial Reconciliation",
    desc: "Ingests carrier EDI 210s and PDF invoices, matches against MercuryGate TMS contract rate cards, flags unauthorized detention and fuel surcharges, and posts verified vouchers to ERP AP without human intervention.",
    systems: ["MercuryGate TMS", "Business Central", "NetSuite", "EDI 210"],
    blockCount: 1,
    highlight: "TMS <-> ERP Audit Loop"
  },
  {
    id: "ag_bay_work_orders",
    name: "Shop Floor Bay iPad Work Orders to Accounting",
    tagline: "Touch-First Field Data Capture to Automated Invoicing",
    desc: "Ruggedized iPad interface for mechanics and bay techs. Clocks actual labor against tasks, scans parts barcodes, logs inspection notes, and drafts formatted invoices in QuickBooks/ERP the second the bay closes.",
    systems: ["QuickBooks", "Business Central", "iOS Bay iPads", "Barcode Scanners"],
    blockCount: 1,
    highlight: "Bay iPads to Ledger"
  },
  {
    id: "ag_customer_approval_loop",
    name: "Autonomous Customer SMS Estimate Approvals",
    tagline: "Sub-15 Minute Authorization with Webhook Event Triggers",
    desc: "Triggers secure mobile approval links via Twilio SMS when technicians submit estimates. Customers review photos, authorize scope variations with one tap, and submit card deposits, instantly unblocking shop bay work.",
    systems: ["Twilio SMS", "ERP API", "Webhook Sign-Off", "Deposit Gateway"],
    blockCount: 1,
    highlight: "Autonomous Authorization"
  },
  {
    id: "ag_milestone_cash",
    name: "Milestone WIP Acceleration & Billing Engine",
    tagline: "Automated Percentage-of-Completion Cash Accelerator",
    desc: "Monitors project milestones, engineer labor logs, and materials burn in Jira/DevOps, auto-calculates percentage-of-completion, and generates verified client progress invoices immediately upon milestone sign-off.",
    systems: ["OneStream", "NetSuite", "Business Central", "Jira / Azure DevOps"],
    blockCount: 1,
    highlight: "Milestone Revenue Recognition"
  },
  {
    id: "ag_sop_dispatch",
    name: "Multi-Carrier S&OP Logistics Bridge & Detention Audit",
    tagline: "Autonomous Dispatch & Accessorial Clawback",
    desc: "Bridges production schedules in John Galt with carrier dispatch in Infios WMS. Automatically logs dock arrival timestamps via geofencing to contest and claw back disputed carrier detention surcharges.",
    systems: ["John Galt S&OP", "Infios WMS", "MercuryGate TMS"],
    blockCount: 1,
    highlight: "S&OP Logistics Bridge"
  },
  {
    id: "ag_item_master_sync",
    name: "Master Data Catalog Synchronization Core",
    tagline: "Deduplication & Cross-Platform Schema Bridge",
    desc: "Scans disparate databases, supplier spreadsheets, and legacy ERP tables. Resolves duplicate SKU nomenclature, standardizes unit-of-measure conversions, and synchronizes a single item master record.",
    systems: ["1WorldSync", "GDSN", "SAP", "Business Central", "WMS"],
    blockCount: 1,
    highlight: "Master Catalog Unification"
  },
  {
    id: "ag_vendor_sla_gate",
    name: "Integrator SLA Enforcement & Code Drift Gate",
    tagline: "Automated Vendor Acceptance & Milestone Gating",
    desc: "Monitors outside software integrator commits, automated test coverage, and documentation deliveries against contractual SOW acceptance criteria before authorizing milestone disbursements.",
    systems: ["GitHub / GitLab", "JIRA", "Contract SOW Tracker"],
    blockCount: 1,
    highlight: "Contract & Deliverable Gating"
  }
];

const AVAILABLE_SYSTEMS = [
  "Microsoft Business Central",
  "MercuryGate TMS",
  "NetSuite",
  "QuickBooks",
  "iOS Bay iPads",
  "Twilio SMS",
  "OneStream",
  "John Galt S&OP",
  "Infios WMS",
  "GitHub / GitLab"
];

export default function StandardBlockConfigurator() {
  const [categories, setCategories] = useState<Record<string, DomainCategory>>(INITIAL_CATEGORIES);
  const [activeMode, setActiveMode] = useState<"mandate" | "agentic">("mandate");
  const [selectedOutcomes, setSelectedOutcomes] = useState<Record<string, boolean>>({});
  const [selectedAgenticBuilds, setSelectedAgenticBuilds] = useState<Record<string, boolean>>({});
  const [selectedSystems, setSelectedSystems] = useState<Record<string, boolean>>({
    "Microsoft Business Central": true,
    "QuickBooks": true,
    "iOS Bay iPads": true
  });
  const [governanceTier, setGovernanceTier] = useState<"tolerance" | "signoff" | "immutable">("signoff");
  const [concurrencySpeed, setConcurrencySpeed] = useState<number>(1);
  const [userContextNotes, setUserContextNotes] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [activeModalCatId, setActiveModalCatId] = useState<string | null>(null);
  const [customInputText, setCustomInputText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Mandate blocks calculation
  const categoryBlocks = useMemo(() => {
    const result: Record<string, number> = {};
    for (const catId of CATEGORY_ORDER) {
      const cat = categories[catId];
      if (!cat) {
        result[catId] = 0;
        continue;
      }
      const activeCount = cat.catalog.filter(it => selectedOutcomes[it.id]).length;
      result[catId] = activeCount > 0 ? Math.ceil(activeCount / 3) : 0;
    }
    return result;
  }, [categories, selectedOutcomes]);

  const mandateCalculatedBlocks = useMemo(() => {
    return Object.values(categoryBlocks).reduce((acc, val) => acc + val, 0);
  }, [categoryBlocks]);

  const agenticCalculatedBlocks = useMemo(() => {
    return Object.entries(selectedAgenticBuilds).reduce((acc, [id, selected]) => {
      if (!selected) return acc;
      const item = AGENTIC_BUILDS_CATALOG.find(b => b.id === id);
      return acc + (item ? item.blockCount : 1);
    }, 0);
  }, [selectedAgenticBuilds]);

  const totalCalculatedBlocks = useMemo(() => {
    if (activeMode === "mandate") return mandateCalculatedBlocks;
    return agenticCalculatedBlocks;
  }, [activeMode, mandateCalculatedBlocks, agenticCalculatedBlocks]);

  const totalActiveOutcomesCount = useMemo(() => {
    if (activeMode === "mandate") {
      return Object.values(selectedOutcomes).filter(Boolean).length;
    }
    return Object.values(selectedAgenticBuilds).filter(Boolean).length;
  }, [activeMode, selectedOutcomes, selectedAgenticBuilds]);

  const deliveryPacingEstimate = useMemo(() => {
    if (totalCalculatedBlocks === 0) return "Standby (Select Footprint)";
    if (totalCalculatedBlocks === 1) return "2 to 4 Weeks (Surgical Sprint)";
    if (totalCalculatedBlocks === 2) {
      return concurrencySpeed >= 2 ? "3 to 5 Weeks (Parallel Delivery)" : "4 to 8 Weeks (Sequential Delivery)";
    }
    if (totalCalculatedBlocks <= 4) {
      return concurrencySpeed >= 2 ? "6 to 8 Weeks (Parallel Streams)" : "8 to 14 Weeks (Sequential Waves)";
    }
    return concurrencySpeed === 3 ? "90 to 120 Days (Accelerated Sprint)" : "4 to 6 Months (Multi-Wave Program)";
  }, [totalCalculatedBlocks, concurrencySpeed]);

  const programClassification = useMemo(() => {
    if (activeMode === "agentic") {
      if (totalCalculatedBlocks === 0) return "Standby - Select Autonomous Workflows";
      if (totalCalculatedBlocks === 1) return "Surgical Agentic Build (2-to-4 Week Production Loop)";
      if (totalCalculatedBlocks === 2) return "Integrated Agentic Stream (2 Autonomous Connectors)";
      return "Enterprise Agentic Core (Full Multi-System Fleet)";
    }
    if (totalCalculatedBlocks === 0) return "Architecture Standby - Pick a Footprint";
    if (totalCalculatedBlocks === 1) return "Surgical Single Block (2-to-4 Week Focused Sprint)";
    if (totalCalculatedBlocks === 2) return "Focused Capability Pod (Rapid 2-Block Solution)";
    if (totalCalculatedBlocks <= 4) return "Multi-Category Program (Targeted Operating Model)";
    return "Enterprise Modernization Program (Full-Scale Mandate)";
  }, [activeMode, totalCalculatedBlocks]);

  const triggerCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 200);
  };

  const deterministicSynthesis = useMemo(() => {
    if (activeMode === "agentic") {
      if (totalCalculatedBlocks === 0) {
        return "Select one or more Applied Agentic Builds above. The engine will synthesize production boundaries, connected system APIs, and governance verification protocols.";
      }
      const activeBuildNames = AGENTIC_BUILDS_CATALOG
        .filter(b => selectedAgenticBuilds[b.id])
        .map(b => b.name);
      const activeSystems = Object.entries(selectedSystems)
        .filter(([_, sel]) => sel)
        .map(([name]) => name);

      return `Applied Agentic Architecture: Deploying ${totalCalculatedBlocks} surgical agentic build(s) (${activeBuildNames.join(", ")}) running directly across ${activeSystems.join(", ")}. Operating under ${governanceTier === "tolerance" ? "variance tolerance automation" : governanceTier === "signoff" ? "named executive sign-off gating" : "immutable client-ledger auditing"}. Zero proprietary vendor lock-in; 100% deployed to client-owned repositories.`;
    }

    if (totalCalculatedBlocks === 0) {
      return "Select a pre-configured footprint above, or toggle deliverables in the five enterprise categories on the left. The deterministic calculation engine will structure delivery pacing, architecture dependencies, and working deliverables.";
    }

    const activeCatTitles = CATEGORY_ORDER
      .filter(id => (categoryBlocks[id] || 0) > 0)
      .map(id => categories[id].shortTitle);

    const pillarSummary = activeCatTitles.join(", ");

    if (totalCalculatedBlocks === 1) {
      if (selectedOutcomes.ag_work_orders) {
        return "Operational Workflows: Touch-first work orders in the bay, with the ledger bridge beside them. 1 standard block, 2 to 4 weeks.";
      }
      if (selectedOutcomes.fnd_financial_validation || selectedOutcomes.ag_billing_system) {
        return "Financial Systems: The books are validated, and billing follows the work down to the penny. 1 standard block, 2 to 4 weeks.";
      }
      return `Targeted Single-Block Initiative: Delivering a focused, high-leverage capability in ${pillarSummary}. 1 Standard Block executed in a tight 2 to 4 week production sprint on client-owned systems.`;
    }

    if (totalCalculatedBlocks === 2) {
      if (selectedOutcomes.trn_sow_reset || selectedOutcomes.trn_integrator_remediation) {
        return "Executive Turnaround & Recovery: Forensic audit of vendor contracts, elimination of billable scope creep, and direct executive steering to restore stalled software deliverables. 2 Standard Blocks executed over 4 to 8 Weeks.";
      }
      return `Targeted multi-pillar engagement: Orchestrating complementary capabilities across ${pillarSummary}. 2 Standard Blocks structured for measurable operational cutover.`;
    }

    if (totalCalculatedBlocks <= 4) {
      return `Multi-pillar modernization: Integrating ${pillarSummary}. Eliminates departmental data silos, establishes clean ledger balance, and unifies operational handoffs across the business.`;
    }

    return `Comprehensive Enterprise Mandate: Orchestrating leadership, data migration, financial validation, and shop floor operational execution. 14 Standard Blocks structured into sequential delivery waves over 4 to 6 months.`;
  }, [activeMode, totalCalculatedBlocks, selectedAgenticBuilds, selectedSystems, governanceTier, categoryBlocks, categories, selectedOutcomes]);

  const jevAdvisoryNote = useMemo(() => {
    if (activeMode === "agentic") {
      if (totalCalculatedBlocks === 0) return "Agentic loop offline. Select workflow targets to engage API bridges.";
      if (selectedAgenticBuilds.ag_freight_audit && selectedAgenticBuilds.ag_bay_work_orders) {
        return "Cross-Domain Architecture: Bridging inbound transportation logistics with plant floor labor capture provides immediate bottom-line visibility for executive leadership.";
      }
      return "All agentic builds execute in client-owned repositories with continuous regression testing, strict variance controls, and full transaction lineage.";
    }

    if (totalCalculatedBlocks === 0) return "Advisory standby: Select a pre-configured footprint or choose individual deliverables.";
    if (totalCalculatedBlocks >= 10) {
      return "Executive Advisory Route: Full enterprise mandate scope detected. Best executed with designated core team leads and dedicated bi-weekly steering cadence.";
    }
    if (selectedOutcomes.fnd_cloud_migration && !selectedOutcomes.fnd_financial_validation) {
      return "Advisory Route: Database/ERP migrations require general ledger validation (FN) to ensure auditable financial integrity prior to cutover.";
    }
    return "Delivery Law: Every Standard Block delivers a working, company-owned capability in a 2-to-4 week cadence. No open-ended billing.";
  }, [activeMode, totalCalculatedBlocks, selectedAgenticBuilds, selectedOutcomes]);

  // Presets for Standard Blocks
  const applyShopBayPreset = () => {
    setSelectedOutcomes({
      ag_work_orders: true,
      fnd_financial_validation: true
    });
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  const applyMilestoneBillingPreset = () => {
    setSelectedOutcomes({
      ag_billing_system: true,
      fnd_financial_validation: true
    });
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  const applyTurnaroundPreset = () => {
    setSelectedOutcomes({
      trn_sow_reset: true,
      trn_integrator_remediation: true,
      trn_crisis_triage: true,
      vit_vendor_scorecards: true,
      dir_exec_roadmap: true
    });
    setConcurrencySpeed(2);
    triggerCalculate();
  };

  const applyCloudFoundationPreset = () => {
    setSelectedOutcomes({
      fnd_cloud_migration: true,
      fnd_common_data_model: true,
      fnd_financial_validation: true,
      fnd_wms_compliance: true,
      arc_target_operating_model: true,
      arc_system_blueprinting: true,
      vit_governance_cadence: true
    });
    setConcurrencySpeed(2);
    triggerCalculate();
  };

  const applyFullMandatePreset = () => {
    const full: Record<string, boolean> = {};
    for (const catId of CATEGORY_ORDER) {
      for (const item of categories[catId].catalog) {
        full[item.id] = true;
      }
    }
    setSelectedOutcomes(full);
    setConcurrencySpeed(3);
    triggerCalculate();
  };

  const applyClearAllMandate = () => {
    setSelectedOutcomes({});
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  // Presets for Applied Agentics
  const applyFreightAuditPreset = () => {
    setSelectedAgenticBuilds({
      ag_freight_audit: true,
      ag_item_master_sync: true
    });
    setSelectedSystems({
      "MercuryGate TMS": true,
      "Microsoft Business Central": true
    });
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  const applyAgenticShopPreset = () => {
    setSelectedAgenticBuilds({
      ag_bay_work_orders: true,
      ag_customer_approval_loop: true
    });
    setSelectedSystems({
      "QuickBooks": true,
      "Microsoft Business Central": true
    });
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  const applyFullAgenticPreset = () => {
    const full: Record<string, boolean> = {};
    for (const build of AGENTIC_BUILDS_CATALOG) {
      full[build.id] = true;
    }
    setSelectedAgenticBuilds(full);
    setConcurrencySpeed(2);
    triggerCalculate();
  };

  const applyClearAllAgentic = () => {
    setSelectedAgenticBuilds({});
    setConcurrencySpeed(1);
    triggerCalculate();
  };

  const toggleOutcome = (id: string) => {
    setSelectedOutcomes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAgenticBuild = (id: string) => {
    setSelectedAgenticBuilds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSystem = (sys: string) => {
    setSelectedSystems(prev => ({
      ...prev,
      [sys]: !prev[sys]
    }));
  };

  const addCustomOutcome = (catId: string) => {
    if (!customInputText.trim()) return;
    const newId = `custom_${Date.now()}`;
    const newItem: OutcomeItem = {
      id: newId,
      name: customInputText.trim(),
      tagline: "Custom Operational Deliverable",
      desc: "Tailored capability specified for this engagement architecture.",
      isCustom: true
    };
    setCategories(prev => {
      const cat = prev[catId];
      if (!cat) return prev;
      return {
        ...prev,
        [catId]: {
          ...cat,
          catalog: [...cat.catalog, newItem]
        }
      };
    });
    setSelectedOutcomes(prev => ({ ...prev, [newId]: true }));
    setCustomInputText("");
    setActiveModalCatId(null);
    triggerCalculate();
  };

  const executiveSummary = useMemo(() => {
    const lines: string[] = [];
    lines.push("================================================================================");
    lines.push("STANDARD BLOCK ARCHITECTURE - EXECUTIVE ENGAGEMENT DOSSIER");
    lines.push("================================================================================");
    lines.push(`MODE: ${activeMode === "mandate" ? "Standard Blocks" : "Applied Agentics"}`);
    lines.push(`TOTAL FOOTPRINT: ${totalCalculatedBlocks} Standard Blocks (${totalActiveOutcomesCount} active deliverables)`);
    lines.push(`ESTIMATED DELIVERY PACING: ${deliveryPacingEstimate}`);
    lines.push(`ENGAGEMENT ARCHETYPE: ${programClassification}`);
    lines.push("");

    if (activeMode === "mandate") {
      lines.push("CATEGORIES & SCOPED DELIVERABLES:");
      for (const catId of CATEGORY_ORDER) {
        const cat = categories[catId];
        const activeItems = cat.catalog.filter(it => selectedOutcomes[it.id]);
        if (activeItems.length > 0) {
          lines.push(`  * ${cat.title.toUpperCase()} (${categoryBlocks[catId]} Blocks):`);
          activeItems.forEach(it => {
            lines.push(`    - ${it.name} [${it.tagline}]`);
          });
        }
      }
    } else {
      lines.push("APPLIED AGENTIC BUILDS:");
      const activeBuilds = AGENTIC_BUILDS_CATALOG.filter(b => selectedAgenticBuilds[b.id]);
      activeBuilds.forEach(b => {
        lines.push(`  * ${b.name} (${b.blockCount} Block): ${b.tagline}`);
        lines.push(`    Connected: ${b.systems.join(", ")}`);
      });
      lines.push("");
      lines.push(`CONNECTED APPLICATION ESTATE: ${Object.keys(selectedSystems).filter(k => selectedSystems[k]).join(", ")}`);
      lines.push(`GOVERNANCE TIER: ${governanceTier.toUpperCase()}`);
    }

    lines.push("");
    lines.push("DETERMINISTIC ARCHITECTURE SYNTHESIS:");
    lines.push(deterministicSynthesis);
    lines.push("");
    lines.push(jevAdvisoryNote);

    if (userContextNotes.trim()) {
      lines.push("");
      lines.push("OPERATIONAL CONTEXT & CONSTRAINTS:");
      lines.push(userContextNotes.trim());
    }

    lines.push("");
    lines.push("THREE DELIVERY LAWS:");
    lines.push("1. Fixed Outcome - unambiguous working capability, zero open-ended billing.");
    lines.push("2. Company-Owned Asset - 100% code in your repositories, zero agency lock-in.");
    lines.push("3. 2-to-4 Week Pacing - surgical, production-ready cutovers.");
    lines.push("================================================================================");
    return lines.join("\n");
  }, [activeMode, totalCalculatedBlocks, totalActiveOutcomesCount, deliveryPacingEstimate, programClassification, categories, selectedOutcomes, categoryBlocks, selectedAgenticBuilds, selectedSystems, governanceTier, deterministicSynthesis, jevAdvisoryNote, userContextNotes]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(executiveSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentModalCategory = activeModalCatId ? categories[activeModalCatId] : null;

  const circleRadius = 64;
  const circumference = 2 * Math.PI * circleRadius;
  const maxBlocks = 14;
  const strokePercentage = Math.min(100, (totalCalculatedBlocks / maxBlocks) * 100);
  const strokeDashoffset = circumference - (strokePercentage / 100) * circumference;

  return (
    <div className="w-full min-h-screen text-[#1a1a1a] bg-graph-paper flex flex-col items-center select-none antialiased py-4 px-4 sm:px-6 lg:px-10">
      
      {/* TECHNICAL DUAL-GRID GRAPH PAPER BACKGROUND */}
      <style jsx global>{`
        .bg-graph-paper {
          background-color: #f6f3eb;
          background-image: 
            linear-gradient(rgba(165, 155, 135, 0.40) 1px, transparent 1px),
            linear-gradient(90deg, rgba(165, 155, 135, 0.40) 1px, transparent 1px),
            linear-gradient(rgba(165, 155, 135, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(165, 155, 135, 0.14) 1px, transparent 1px);
          background-size: 80px 80px, 80px 80px, 16px 16px, 16px 16px;
        }
      `}</style>

      {/* EXPANSIVE WIDESCREEN DRAFTING CANVAS (1520px - 1640px) */}
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] space-y-4">

        {/* ================================================================== */}
        {/* ZONE 1: ELEVATED COMPACT HEADER (High-Density, Configurator Front)  */}
        {/* ================================================================== */}
        <header className="bg-white/95 rounded-lg border border-[#d6cfc2] shadow-xs p-4 sm:p-5 backdrop-blur-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Left: Executive Identity & Mandate Premise */}
            <div className="space-y-1 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#f3ece0] border border-[#d6cfc2] text-[#142840] text-[11px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
                  Robert Paddock
                </span>
                <span className="text-xs font-mono text-stone-400">|</span>
                <span className="text-xs font-mono text-[#5a6978]">Enterprise Technology Leader</span>
              </div>

              <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#142840] tracking-tight leading-tight">
                "I lead enterprise technology from business decision to working operation."
              </h1>

              <p className="text-xs sm:text-sm text-[#243345] font-sans leading-relaxed">
                All businesses are uniquely standard. Configure the full mandate or targeted agentic builds in surgical 2-to-4 week sprints directly on client-owned code and systems.
              </p>
            </div>

            {/* Right: The Three Delivery Laws (Refined Architectural Badges) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#f7f5ee] text-[#142840]">
                <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
                <span className="font-bold">Law 01</span>
                <span className="text-[#5a6978] text-[11px]">Fixed Outcome</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#f7f5ee] text-[#142840]">
                <span className="w-1.5 h-1.5 bg-[#142840]"></span>
                <span className="font-bold">Law 02</span>
                <span className="text-[#5a6978] text-[11px]">Company-Owned</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#f7f5ee] text-[#142840]">
                <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
                <span className="font-bold">Law 03</span>
                <span className="text-[#5a6978] text-[11px]">2-to-4 Wks</span>
              </div>
            </div>

          </div>
        </header>

        {/* ================================================================== */}
        {/* ZONE 2: THE STAR OF THE SHOW - THE CONFIGURATOR MACHINE            */}
        {/* ================================================================== */}
        <main className="bg-white/95 rounded-lg border border-[#d6cfc2] shadow-sm p-5 sm:p-6 space-y-4 backdrop-blur-xs">
          
          {/* Machine Header: Architectural Segmented Control & Presets Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#e5dfd5]">
            
            {/* Mode Switcher - Sleek Architectural Tabs */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#5a6978] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
                Mode:
              </div>

              <div className="inline-flex p-1 rounded-sm bg-[#eee9df] border border-[#d6cfc2]">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode("mandate");
                    triggerCalculate();
                  }}
                  className={`px-4 py-2 rounded-2xs font-serif text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                    activeMode === "mandate"
                      ? "bg-[#142840] text-[#f7f5ee] shadow-xs"
                      : "text-[#243345] hover:text-[#0b1624]"
                  }`}
                >
                  {activeMode === "mandate" && <span className="w-1.5 h-1.5 bg-[#facc15] inline-block" />}
                  <span>Standard Blocks</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveMode("agentic");
                    triggerCalculate();
                  }}
                  className={`px-4 py-2 rounded-2xs font-serif text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                    activeMode === "agentic"
                      ? "bg-[#142840] text-[#f7f5ee] shadow-xs"
                      : "text-[#243345] hover:text-[#0b1624]"
                  }`}
                >
                  {activeMode === "agentic" && <span className="w-1.5 h-1.5 bg-[#facc15] inline-block" />}
                  <span>Applied Agentics</span>
                </button>
              </div>
            </div>

            {/* Presets Bar */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              <span className="text-[#5a6978] text-[10px] uppercase font-bold tracking-wider mr-1">Presets:</span>

              {activeMode === "mandate" ? (
                <>
                  <button
                    type="button"
                    onClick={applyShopBayPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Shop Bay Work Orders (1 Block)
                  </button>
                  <button
                    type="button"
                    onClick={applyMilestoneBillingPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Milestone Billing & Ledger Sync (1 Block)
                  </button>
                  <button
                    type="button"
                    onClick={applyTurnaroundPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Turnaround & SOW Reset (2 Blocks)
                  </button>
                  <button
                    type="button"
                    onClick={applyCloudFoundationPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Cloud ERP Core (3 Blocks)
                  </button>
                  <button
                    type="button"
                    onClick={applyFullMandatePreset}
                    className="px-3 py-1.5 rounded-sm border border-[#142840] bg-[#142840] hover:bg-[#0b1624] text-[#f7f5ee] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Full Mandate (14)
                  </button>
                  <button
                    type="button"
                    onClick={applyClearAllMandate}
                    className="px-2 py-1.5 rounded-sm border border-stone-300 bg-white hover:bg-stone-100 text-stone-600 transition font-mono text-[10px] uppercase cursor-pointer"
                  >
                    Reset (0)
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={applyFreightAuditPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Freight Invoice Mapping (1 Block)
                  </button>
                  <button
                    type="button"
                    onClick={applyAgenticShopPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] hover:bg-white text-[#142840] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Bay Work Orders & SMS (2 Blocks)
                  </button>
                  <button
                    type="button"
                    onClick={applyFullAgenticPreset}
                    className="px-3 py-1.5 rounded-sm border border-[#142840] bg-[#142840] hover:bg-[#0b1624] text-[#f7f5ee] transition font-semibold text-[11px] whitespace-nowrap cursor-pointer"
                  >
                    Full Agentic Operations Fleet
                  </button>
                  <button
                    type="button"
                    onClick={applyClearAllAgentic}
                    className="px-2 py-1.5 rounded-sm border border-stone-300 bg-white hover:bg-stone-100 text-stone-600 transition font-mono text-[10px] uppercase cursor-pointer"
                  >
                    Reset (0)
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Core Grid: Left 8 Columns = Pillars / Builds, Right 4 Columns = Capacity Telemetry Core */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

            {/* ============================================================ */}
            {/* LEFT 8 COLUMNS: INTERACTIVE SELECTION ENGINE                 */}
            {/* ============================================================ */}
            <div className="lg:col-span-8 space-y-4">

              {activeMode === "mandate" ? (
                /* MANDATE PILLARS LIST */
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5a6978] px-1">
                    <span>Select deliverables across the five enterprise categories:</span>
                    <span className="font-semibold text-[#142840]">
                      {totalActiveOutcomesCount} Selected &bull; {totalCalculatedBlocks} Standard Blocks
                    </span>
                  </div>

                  {CATEGORY_ORDER.map(catId => {
                    const cat = categories[catId];
                    const activeCount = cat.catalog.filter(it => selectedOutcomes[it.id]).length;
                    const blocksInCat = categoryBlocks[catId] || 0;

                    return (
                      <div
                        key={cat.id}
                        className={`rounded-lg border transition-all duration-150 ${
                          blocksInCat > 0
                            ? "bg-white border-[#142840] shadow-xs"
                            : "bg-[#fcfaf7] border-[#d6cfc2]"
                        }`}
                      >
                        {/* Category Card Header */}
                        <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5dfd5]">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span
                                className="px-2 py-0.5 rounded-2xs text-[10px] font-mono font-bold uppercase tracking-wider text-white"
                                style={{ backgroundColor: cat.color }}
                              >
                                {cat.code}
                              </span>
                              <span className="font-mono text-[11px] font-semibold text-[#5a6978]">
                                {cat.badge}
                              </span>
                              <h3 className="font-serif font-bold text-[#142840] text-base">
                                {cat.title}
                              </h3>
                            </div>
                            <p className="text-xs text-[#5a6978] font-sans">
                              {cat.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                            <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[#f7f5ee] border border-[#d6cfc2] text-[#142840] font-semibold">
                              {activeCount} active &bull; <strong>{blocksInCat} Block{blocksInCat === 1 ? "" : "s"}</strong>
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveModalCatId(cat.id)}
                              className="px-2.5 py-1 rounded-sm border border-dashed border-[#b48a05] hover:bg-[#fbf9f4] text-[11px] font-mono text-[#854d0e] transition cursor-pointer"
                            >
                              + Custom
                            </button>
                          </div>
                        </div>

                        {/* Deliverables Checklist Grid */}
                        <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cat.catalog.map(item => {
                            const isChecked = !!selectedOutcomes[item.id];
                            return (
                              <div
                                key={item.id}
                                onClick={() => {
                                  toggleOutcome(item.id);
                                  triggerCalculate();
                                }}
                                className={`p-2.5 rounded-sm border transition-all cursor-pointer flex items-start gap-2.5 text-xs ${
                                  isChecked
                                    ? "bg-[#fbf9f4] border-[#142840] shadow-xs"
                                    : "bg-white border-[#e5dfd5] hover:border-[#b48a05] hover:bg-[#fcfaf7]"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  className="mt-0.5 rounded-2xs border-[#d6cfc2] text-[#142840] focus:ring-[#142840] cursor-pointer pointer-events-none"
                                />
                                <div className="space-y-0.5">
                                  <div className="font-semibold text-[#142840] leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] font-mono font-medium text-[#854d0e]">
                                    {item.tagline}
                                  </div>
                                  <div className="text-[11px] text-[#5a6978] font-sans line-clamp-2 leading-relaxed">
                                    {item.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* APPLIED AGENTICS LIST */
                <div className="space-y-4">
                  {/* Explanatory Banner */}
                  <div className="bg-[#fbf9f4] rounded-lg p-3.5 border border-[#d6cfc2] text-xs font-sans text-[#243345] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#142840] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
                        Applied Agentic Deployment Engine
                      </div>
                      <p className="text-[#243345] font-medium">
                        Autonomous operational agents running directly on your existing enterprise application estate. No decade-long platform replacements. 100% company-owned code in your git repositories.
                      </p>
                    </div>
                    <div className="shrink-0 font-mono text-[11px] font-semibold bg-white px-3 py-1.5 rounded-sm border border-[#d6cfc2] text-[#142840]">
                      {totalActiveOutcomesCount} Active &bull; {totalCalculatedBlocks} Blocks
                    </div>
                  </div>

                  {/* Connected Systems Filter Strip */}
                  <div className="bg-white rounded-lg p-3 border border-[#d6cfc2] shadow-2xs space-y-2">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#5a6978] tracking-wider">
                      Connected Systems in Your Estate:
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {AVAILABLE_SYSTEMS.map(sys => {
                        const isConnected = !!selectedSystems[sys];
                        return (
                          <button
                            key={sys}
                            type="button"
                            onClick={() => toggleSystem(sys)}
                            className={`px-2.5 py-1 rounded-sm text-[11px] font-mono transition cursor-pointer ${
                              isConnected
                                ? "bg-[#142840] border border-[#142840] text-[#f7f5ee] font-semibold"
                                : "bg-[#fbf9f4] border border-[#d6cfc2] text-[#243345] hover:bg-[#eee9df]"
                            }`}
                          >
                            {isConnected ? "[+] " : "- "}
                            {sys}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Agentic Builds Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {AGENTIC_BUILDS_CATALOG.map(build => {
                      const isSelected = !!selectedAgenticBuilds[build.id];
                      return (
                        <div
                          key={build.id}
                          onClick={() => {
                            toggleAgenticBuild(build.id);
                            triggerCalculate();
                          }}
                          className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                            isSelected
                              ? "bg-white border-[#142840] shadow-sm ring-1 ring-[#142840]"
                              : "bg-[#fcfaf7] border-[#d6cfc2] hover:border-[#142840] hover:bg-white"
                          }`}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="px-2 py-0.5 rounded-2xs text-[10px] font-mono font-bold uppercase bg-[#f3ece0] text-[#142840] border border-[#d6cfc2]">
                                {build.blockCount} Standard Block
                              </span>
                              <span className="font-mono text-[10px] text-[#5a6978] font-semibold bg-[#f7f5ee] px-2 py-0.5 rounded-2xs border border-[#d6cfc2]">
                                2-to-4 Wks
                              </span>
                            </div>

                            <div className="font-serif font-bold text-[#142840] text-sm">
                              {build.name}
                            </div>

                            <div className="text-[11px] font-mono font-medium text-[#854d0e]">
                              {build.tagline}
                            </div>

                            <p className="text-xs text-[#5a6978] font-sans leading-relaxed">
                              {build.desc}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#e5dfd5] space-y-1.5">
                            {build.highlight ? (
                              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#854d0e]">
                                [{build.highlight}]
                              </div>
                            ) : null}

                            <div className="flex flex-wrap items-center gap-1">
                              {build.systems.map(s => (
                                <span key={s} className="px-1.5 py-0.5 bg-[#f3ece0] rounded-2xs text-[9px] font-mono text-[#243345]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Governance Tier Selector */}
                  <div className="bg-white rounded-lg p-3.5 border border-[#d6cfc2] shadow-2xs space-y-2">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#5a6978] tracking-wider">
                      Autonomous Governance &amp; Human-in-the-Loop Gate:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setGovernanceTier("tolerance")}
                        className={`p-2.5 rounded-sm border text-left cursor-pointer transition ${
                          governanceTier === "tolerance"
                            ? "bg-[#fbf9f4] border-[#142840] text-[#142840] font-semibold"
                            : "bg-[#fcfaf7] border-[#d6cfc2] text-[#5a6978] hover:bg-white"
                        }`}
                      >
                        <div className="font-mono text-xs font-bold text-[#142840]">Variance Tolerance</div>
                        <div className="text-[10px] text-[#5a6978] font-sans mt-0.5">
                          Autonomous execution within strict predefined variance bounds; escalates exceptions.
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setGovernanceTier("signoff")}
                        className={`p-2.5 rounded-sm border text-left cursor-pointer transition ${
                          governanceTier === "signoff"
                            ? "bg-[#fbf9f4] border-[#142840] text-[#142840] font-semibold"
                            : "bg-[#fcfaf7] border-[#d6cfc2] text-[#5a6978] hover:bg-white"
                        }`}
                      >
                        <div className="font-mono text-xs font-bold text-[#142840]">Executive Sign-Off Gate</div>
                        <div className="text-[10px] text-[#5a6978] font-sans mt-0.5">
                          Agent prepares full verified dossier; named manager authorizes before ledger post.
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setGovernanceTier("immutable")}
                        className={`p-2.5 rounded-sm border text-left cursor-pointer transition ${
                          governanceTier === "immutable"
                            ? "bg-[#fbf9f4] border-[#142840] text-[#142840] font-semibold"
                            : "bg-[#fcfaf7] border-[#d6cfc2] text-[#5a6978] hover:bg-white"
                        }`}
                      >
                        <div className="font-mono text-xs font-bold text-[#142840]">Immutable Audit Trail</div>
                        <div className="text-[10px] text-[#5a6978] font-sans mt-0.5">
                          Every prompt, token, source row, and API write logged to company-owned tamper-evident ledger.
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* ============================================================ */}
            {/* RIGHT 4 COLUMNS: CAPACITY TELEMETRY CORE (Command Center)    */}
            {/* ============================================================ */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-4">

              {/* Real-Time Telemetry Dial Card */}
              <div className="bg-[#142840] text-white rounded-lg p-5 shadow-md space-y-4 border border-slate-700">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#facc15] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#facc15]"></span>
                    Capacity Telemetry Core
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Deterministic Math
                  </div>
                </div>

                {/* Dial Visualizer */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
                      {/* Background track */}
                      <circle
                        cx="80"
                        cy="80"
                        r={circleRadius}
                        stroke="#203a5c"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      {/* Active meter */}
                      <circle
                        cx="80"
                        cy="80"
                        r={circleRadius}
                        stroke={totalCalculatedBlocks > 0 ? "#facc15" : "#475569"}
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-300 ease-out"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-mono font-bold tracking-tight text-white">
                        {totalCalculatedBlocks}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                        Standard Block{totalCalculatedBlocks === 1 ? "" : "s"}
                      </span>
                      <span className="text-[9px] font-mono text-[#facc15] font-semibold mt-0.5">
                        {totalActiveOutcomesCount} Outcome{totalActiveOutcomesCount === 1 ? "" : "s"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="bg-[#0b1624] p-2.5 rounded-sm border border-slate-800">
                    <div className="text-[10px] uppercase text-slate-400">Pacing</div>
                    <div className="text-[#facc15] font-bold truncate text-[11px] mt-0.5">
                      {deliveryPacingEstimate}
                    </div>
                  </div>
                  <div className="bg-[#0b1624] p-2.5 rounded-sm border border-slate-800">
                    <div className="text-[10px] uppercase text-slate-400">Program Shape</div>
                    <div className="text-slate-200 font-semibold truncate text-[11px] mt-0.5">
                      {programClassification}
                    </div>
                  </div>
                </div>

                {/* Concurrency Speed Slider */}
                <div className="bg-[#0b1624] p-3 rounded-sm border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[10px] uppercase">Execution Pacing:</span>
                    <span className="text-[#facc15] font-semibold">
                      {concurrencySpeed === 1 ? "Sequential (1 Stream)" : concurrencySpeed === 2 ? "Parallel (2 Streams)" : "Accelerated (3 Streams)"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 font-mono text-[11px]">
                    <button
                      type="button"
                      onClick={() => setConcurrencySpeed(1)}
                      className={`py-1 rounded-2xs text-center transition cursor-pointer ${
                        concurrencySpeed === 1
                          ? "bg-[#facc15] text-[#142840] font-bold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      Sequential
                    </button>
                    <button
                      type="button"
                      onClick={() => setConcurrencySpeed(2)}
                      className={`py-1 rounded-2xs text-center transition cursor-pointer ${
                        concurrencySpeed === 2
                          ? "bg-[#facc15] text-[#142840] font-bold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      Parallel
                    </button>
                    <button
                      type="button"
                      onClick={() => setConcurrencySpeed(3)}
                      className={`py-1 rounded-2xs text-center transition cursor-pointer ${
                        concurrencySpeed === 3
                          ? "bg-[#facc15] text-[#142840] font-bold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      Accelerated
                    </button>
                  </div>
                </div>

                {/* Dynamic Advisory Route Line */}
                <div className="p-2.5 rounded-sm bg-[#0b1624] border border-slate-800 text-[11px] font-mono text-slate-300 leading-relaxed">
                  {jevAdvisoryNote}
                </div>

              </div>

              {/* Operational Context Intake for Rob's Free Proposal Review */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-[#d6cfc2] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-serif font-bold text-[#142840] text-sm">
                    Your Operational Context
                  </div>
                  <span className="px-2 py-0.5 rounded-2xs text-[10px] font-mono font-bold bg-[#f3ece0] text-[#142840] border border-[#d6cfc2]">
                    Free Executive Review
                  </span>
                </div>

                <p className="text-xs text-[#5a6978] font-sans leading-relaxed">
                  Add specific constraints, legacy database versions, ERP roadblocks, or partner friction. Robert will personally review and prepare a custom proposal.
                </p>

                <textarea
                  value={userContextNotes}
                  onChange={(e) => setUserContextNotes(e.target.value)}
                  placeholder="e.g. On-premise Dynamics NAV with custom extensions. Stalled cutover. Need shop bay mechanics logging work orders on iPads directly to QuickBooks..."
                  rows={3}
                  className="w-full text-xs font-sans p-3 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840] resize-none"
                />

                {/* Proposal Submission & Copy Actions */}
                <div className="space-y-2 pt-1">
                  <a
                    href={`/contact/?subject=${encodeURIComponent(
                      activeMode === "mandate"
                        ? `Standard Block Mandate Proposal (${totalCalculatedBlocks} Blocks)`
                        : `Applied Agentic Build Proposal (${totalCalculatedBlocks} Blocks)`
                    )}&context=${encodeURIComponent(userContextNotes)}`}
                    className="w-full py-2.5 px-4 rounded-sm bg-[#142840] hover:bg-[#0b1624] text-[#f7f5ee] font-sans font-semibold text-xs flex items-center justify-center gap-2 transition shadow-xs cursor-pointer text-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#facc15] inline-block" />
                    <span>Send for Free Proposal Review</span>
                    <span className="font-mono">&rarr;</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="w-full py-2 px-3 rounded-sm border border-[#d6cfc2] hover:border-[#142840] bg-white hover:bg-[#fbf9f4] font-mono text-xs text-[#142840] transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{copied ? "Dossier Copied to Clipboard" : "Copy Architectural Dossier"}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </main>

        {/* ================================================================== */}
        {/* ZONE 3: DETERMINISTIC PROOF & BLUEPRINTS                           */}
        {/* ================================================================== */}
        <section className="bg-white/95 rounded-lg border border-[#d6cfc2] shadow-xs p-6 space-y-6 backdrop-blur-xs">
          
          {/* Deterministic Architecture Synthesis */}
          <div className="space-y-2 border-b border-[#e5dfd5] pb-5">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-wider text-[#142840]">
              <span className="w-1.5 h-1.5 bg-[#b48a05]"></span>
              Deterministic Architecture Synthesis
            </div>
            <h3 className="font-serif font-bold text-[#142840] text-lg sm:text-xl">
              Execution Blueprint for Configured Footprint
            </h3>
            <p className="text-[#243345] text-sm font-sans leading-relaxed bg-[#f6f3eb] p-4 rounded-sm border border-[#d6cfc2]">
              {deterministicSynthesis}
            </p>
          </div>

          {/* 3 Real-World Delivery Blueprints */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#5a6978]">
              Real-World Delivery Blueprints (Proven Production Outcomes)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-[#f6f3eb] p-4 rounded-sm border border-[#d6cfc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#142840] bg-[#f3ece0] px-2 py-0.5 rounded-2xs">
                    1 Block &bull; 2-4 Wks
                  </span>
                  <span className="font-mono text-[10px] text-[#5a6978]">AEC / Automotive</span>
                </div>
                <div className="font-serif font-bold text-[#142840] text-sm">
                  Shop Bay Work Orders &amp; Accounting Sync
                </div>
                <p className="text-[#5a6978] text-xs font-sans leading-relaxed">
                  Touch-first digital work orders in service bays on iPads. Real-time parts lookup, technician labor clocking, and live bridge into QuickBooks invoices with zero manual re-keying.
                </p>
              </div>

              <div className="bg-[#f6f3eb] p-4 rounded-sm border border-[#d6cfc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#142840] bg-[#f3ece0] px-2 py-0.5 rounded-2xs">
                    2 Blocks &bull; 4-8 Wks
                  </span>
                  <span className="font-mono text-[10px] text-[#5a6978]">Food &amp; Beverage</span>
                </div>
                <div className="font-serif font-bold text-[#142840] text-sm">
                  Stalled ERP Recovery &amp; SOW Scope Reset
                </div>
                <p className="text-[#5a6978] text-xs font-sans leading-relaxed">
                  Stepping into an off-track software integrator implementation. Stripping billable scope creep, establishing cutover flight control, and enforcing payment milestones tied directly to working code.
                </p>
              </div>

              <div className="bg-[#f6f3eb] p-4 rounded-sm border border-[#d6cfc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#142840] bg-[#f3ece0] px-2 py-0.5 rounded-2xs">
                    1 Block &bull; 2-4 Wks
                  </span>
                  <span className="font-mono text-[10px] text-[#5a6978]">Logistics &amp; Supply Chain</span>
                </div>
                <div className="font-serif font-bold text-[#142840] text-sm">
                  Freight Invoice Mapping &amp; TMS AP Core
                </div>
                <p className="text-[#5a6978] text-xs font-sans leading-relaxed">
                  Autonomous ingestion of carrier EDI 210s and PDF invoices. Auto-mapping against MercuryGate contract rates and posting validated vouchers into ERP General Ledger with penny-level accuracy.
                </p>
              </div>

            </div>
          </div>

          {/* Architectural Comparison Matrix */}
          <div className="space-y-3 pt-2">
            <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#5a6978]">
              Architectural Comparison: Traditional Consulting vs Standard Block Architecture
            </div>

            <div className="overflow-x-auto rounded-sm border border-[#d6cfc2] bg-white">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#f6f3eb] text-[#142840] font-mono text-[10px] uppercase border-b border-[#d6cfc2]">
                  <tr>
                    <th className="p-3">Architectural Dimension</th>
                    <th className="p-3 text-[#5a6978]">Traditional Agency / Consulting</th>
                    <th className="p-3 text-[#142840] font-bold bg-[#f3ece0]">Standard Block Architecture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5dfd5] font-sans">
                  <tr>
                    <td className="p-3 font-semibold text-[#142840]">Commercial Contract</td>
                    <td className="p-3 text-[#5a6978]">Open-ended hourly billing with runaway budget creep.</td>
                    <td className="p-3 font-medium text-[#142840] bg-[#fbf9f4]">Fixed Outcome per Block. Unambiguous delivery boundary.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#142840]">Intellectual Property</td>
                    <td className="p-3 text-[#5a6978]">Proprietary vendor frameworks and captive cloud lock-in.</td>
                    <td className="p-3 font-medium text-[#142840] bg-[#fbf9f4]">100% Company-Owned Asset. Deployed in your repositories.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#142840]">Delivery Pacing</td>
                    <td className="p-3 text-[#5a6978]">Multi-year roadmaps with deferred go-live milestones.</td>
                    <td className="p-3 font-medium text-[#142840] bg-[#fbf9f4]">2-to-4 Week Surgical Sprints with immediate production cutover.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#142840]">Applied Agentics</td>
                    <td className="p-3 text-[#5a6978]">Isolated chatbot toys or ungrounded shadow AI.</td>
                    <td className="p-3 font-medium text-[#142840] bg-[#fbf9f4]">Production operational loops with named executive governance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Direct Executive Review Banner */}
          <div className="rounded-sm bg-[#142840] text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif font-bold text-base sm:text-lg">
                Ready for a Direct Executive Review?
              </div>
              <p className="text-xs text-slate-300 font-sans max-w-xl">
                Submit your operational context notes above. Robert Paddock will personally analyze the architectural boundary and return a concrete Standard Block proposal.
              </p>
            </div>
            <a
              href="/contact/"
              className="px-5 py-2.5 rounded-sm bg-[#facc15] hover:bg-[#eab308] text-[#142840] font-serif font-bold text-xs whitespace-nowrap transition shadow-xs cursor-pointer"
            >
              Start Direct Conversation &rarr;
            </a>
          </div>

        </section>

      </div>

      {/* CUSTOM INTAKE MODAL */}
      {currentModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-lg border border-[#d6cfc2] shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#e5dfd5] pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#854d0e]">
                  {currentModalCategory.badge}
                </span>
                <h3 className="font-serif font-bold text-[#142840] text-lg">
                  Add Custom {currentModalCategory.shortTitle} Deliverable
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCatId(null)}
                className="text-[#5a6978] hover:text-[#142840] font-mono text-sm cursor-pointer"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-[#5a6978] font-sans leading-relaxed">
              Describe a specialized operational deliverable, legacy database integration, or unique business rule for this category.
            </p>

            <input
              type="text"
              value={customInputText}
              onChange={(e) => setCustomInputText(e.target.value)}
              placeholder="e.g. Automated EDI Purchase Order Parsing to Business Central"
              className="w-full text-xs font-sans p-3 rounded-sm border border-[#d6cfc2] bg-[#fbf9f4] focus:outline-none focus:ring-1 focus:ring-[#142840] text-[#142840]"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addCustomOutcome(currentModalCategory.id);
                }
              }}
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveModalCatId(null)}
                className="px-3 py-1.5 rounded-sm border border-[#d6cfc2] text-xs font-mono text-[#5a6978] hover:bg-[#fbf9f4] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => addCustomOutcome(currentModalCategory.id)}
                className="px-4 py-1.5 rounded-sm bg-[#142840] hover:bg-[#0b1624] text-white text-xs font-serif font-bold cursor-pointer transition shadow-2xs"
              >
                Add Deliverable
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
