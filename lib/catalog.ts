// ============================================================================
// THE 6 CORE OUTCOME CONFIGURATORS · PUBLIC DATA CATALOG (lib/catalog.ts)
// Generated from verified export out/outcome-catalog.json (version 2026-10-05-v4-consensus)
// 1. Leadership, Direction & Transformation (LD) · 10 outcomes
// 2. Business Systems & Integration (BS) · 10 outcomes
// 3. IT Operations & Security (IT) · 10 outcomes
// 4. Data & Knowledge (DK) · 8 outcomes (dk_self_service_bi superseded)
// 5. Financial Systems (FS) · 10 outcomes
// 6. Workflows & Automation (WA) · 10 outcomes
// Total: 58 canonical outcomes across 6 faces
// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// Delivery Standard: 1 Block = 2 to 4 Weeks.
// ============================================================================

export interface CatalogDomain {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  essence: string;
  appGroups?: string;
}

export interface CatalogItem {
  id: string;
  domainId: string;
  group?: string;
  name: string;
  tagline: string;
  situation: string;
  outcome?: string;
  kind?: 'finite' | 'ongoing';
  deliveryMode?: 'lead' | 'run' | 'build' | 'combined';
  deliverables: string[];
  inclusions?: string[];
  exclusions?: string[];
  tags?: string[];
}

export const PUBLIC_OUTCOME_DOMAINS: CatalogDomain[] = [
  {
    "id": "leadership_direction",
    "code": "LD",
    "name": "Leadership, Direction & Transformation",
    "subtitle": "Turn business priorities into an executable roadmap, accountable delivery, and measurable improvement.",
    "essence": "Align priorities, investment, ownership, and sequencing across teams and executive partners."
  },
  {
    "id": "business_systems",
    "code": "BS",
    "name": "Business Systems & Integration",
    "subtitle": "Get more value from enterprise applications and make them work together.",
    "essence": "Connect ERP, WMS, MES, HRM/HCM, EAM, and CRM around shared operational truth.",
    "appGroups": "ERP—Enterprise Resource Planning · WMS—Warehouse Management · MES—Manufacturing Execution · HRM/HCM—Human Resources and Human Capital Management · EAM—Enterprise Asset Management · CRM—Customer Relationship Management"
  },
  {
    "id": "it_ot_operations",
    "code": "IT",
    "name": "IT Operations & Security",
    "subtitle": "Maintain dependable enterprise infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    "essence": "Dependable infrastructure, cybersecurity, and operational continuity across business and plant systems; the plant floor's controllers are coordinated with their owners, not authored."
  },
  {
    "id": "data_knowledge",
    "code": "DK",
    "name": "Data & Knowledge",
    "subtitle": "Turn business records, operating history, and company knowledge into trusted information people and agents can use.",
    "essence": "Master data integrity, repeatable analytics, institutional memory retention, and RAG."
  },
  {
    "id": "financial_systems",
    "code": "FS",
    "name": "Financial Systems",
    "subtitle": "Protect financial integrity and give the CFO a unified view of performance, planning, and profitability.",
    "essence": "Reconciliation, accelerated close, auditable controls, unified EPM, and Activity-Based Costing."
  },
  {
    "id": "workflows_automation",
    "code": "WA",
    "name": "Workflows & Automation",
    "subtitle": "Connect work across people and applications—and make improved ways of working stick.",
    "essence": "End-to-end handoff elimination, order-to-cash, procure-to-pay, shop-floor capture, and resilient automation."
  }
];

export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "ld_roadmap",
    "domainId": "leadership_direction",
    "name": "Build a technology and transformation roadmap the business can execute.",
    "tagline": "Align priorities, investment, ownership, and sequencing.",
    "situation": "Unclear technology priorities, competing initiatives, or lack of executive alignment around capital investment.",
    "deliverables": [
      "Executable technology roadmap",
      "Investment & sequencing matrix",
      "Executive ownership charter"
    ],
    "inclusions": []
  },
  {
    "id": "ld_business_case",
    "domainId": "leadership_direction",
    "name": "Make investment decisions with a clear business case.",
    "tagline": "Understand expected value, cost, risk, and organizational readiness.",
    "situation": "Technology proposals lack credible financial justification, risk assessment, or evaluation of organizational readiness.",
    "deliverables": [
      "Investment business case model",
      "Risk & readiness evaluation",
      "Value realization scorecard"
    ],
    "inclusions": []
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "leadership_direction",
    "name": "Turn competing initiatives into a plan that fits available capacity.",
    "tagline": "Resolve resource conflicts, dependencies, and tradeoffs across teams and partners.",
    "situation": "Too many concurrent projects creating resource bottlenecks, missed deadlines, and employee burnout.",
    "deliverables": [
      "Capacity & resource allocation model",
      "Cross-initiative dependency map",
      "Tradeoff & de-scoping plan"
    ],
    "inclusions": []
  },
  {
    "id": "ld_partner_bench",
    "domainId": "leadership_direction",
    "name": "Build the team and partner bench to deliver.",
    "tagline": "Establish the capabilities, responsibilities, and working relationships the business needs.",
    "situation": "Internal skill gaps or misaligned external contractors impeding transformation delivery.",
    "deliverables": [
      "Capability gap analysis",
      "Role responsibility charters",
      "Partner evaluation & onboarding framework"
    ],
    "inclusions": []
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "leadership_direction",
    "name": "Get a stalled transformation moving again.",
    "tagline": "Resolve obstacles, reset commitments, and restore delivery accountability.",
    "situation": "Transformation initiative has lost momentum, exceeded budget, or encountered political and technical impasses.",
    "deliverables": [
      "Turnaround diagnostic report",
      "Reset delivery roadmap",
      "Weekly governance cadence"
    ],
    "inclusions": []
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "leadership_direction",
    "name": "Hold vendors to their delivery and commercial commitments.",
    "tagline": "Align scope, quality, responsibilities, and acceptance of results.",
    "situation": "Software vendors and system integrators delivering subpar work, disputing scope, or accumulating billing without results.",
    "deliverables": [
      "Vendor scope and commitment review",
      "Milestone acceptance scorecard",
      "Vendor delivery correction plan"
    ],
    "inclusions": []
  },
  {
    "id": "ld_board_visibility",
    "domainId": "leadership_direction",
    "name": "Give executives and the board a clear view of progress, value, and risk.",
    "tagline": "Establish useful reporting and a regular rhythm for decisions and accountable action.",
    "situation": "Board and executive leadership lack trustworthy, concise visibility into technology risk, spend, and delivery progress.",
    "deliverables": [
      "Executive KPI reporting deck",
      "Risk & decision register",
      "Monthly steering committee rhythm"
    ],
    "inclusions": []
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "leadership_direction",
    "name": "Turn scattered AI experiments into a coordinated business program.",
    "tagline": "Prioritize use cases, establish shared practices, and connect investment to measurable value.",
    "situation": "Fragmented, ad-hoc AI pilots across departments without shared standards, security controls, or measurable business return.",
    "deliverables": [
      "Enterprise AI opportunity backlog",
      "Use-case prioritization matrix",
      "AI program governance framework"
    ],
    "inclusions": []
  },
  {
    "id": "ld_ai_decision_rights",
    "domainId": "leadership_direction",
    "name": "Set clear limits and human approvals for AI actions.",
    "tagline": "Establish decision rights, review points, escalation, and accountability.",
    "situation": "Ambiguity over AI boundaries, hallucination risks, liability, and when human oversight is mandatory.",
    "deliverables": [
      "Decision rights & authority matrix",
      "Human-in-the-loop review policy",
      "Escalation & exception protocols"
    ],
    "inclusions": []
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "leadership_direction",
    "name": "Know whether transformation delivered its intended benefits.",
    "tagline": "Track adoption and operating results with business owners, then address gaps.",
    "situation": "New systems deployed but user adoption lags, promised savings fail to materialize, and operating benefits are unmeasured.",
    "deliverables": [
      "Benefit realization tracking dashboard",
      "Adoption audit report",
      "Value gap remediation plan"
    ],
    "inclusions": []
  },
  {
    "id": "bs_existing_value",
    "domainId": "business_systems",
    "name": "Get more value from the business systems you already own.",
    "tagline": "Address underused capabilities, duplicate applications and licenses, workarounds, and unnecessary complexity.",
    "situation": "Significant investment in enterprise software undermined by manual workarounds, duplicate SaaS tools, and underutilized modules.",
    "deliverables": [
      "Application capability audit",
      "License & duplicate SaaS rationalization plan",
      "Feature adoption roadmap"
    ],
    "inclusions": []
  },
  {
    "id": "bs_selection_partners",
    "domainId": "business_systems",
    "name": "Choose applications and delivery partners that fit your business.",
    "tagline": "Translate operating needs into selection criteria, delivery expectations, and ownership.",
    "situation": "Impending RFP or software selection at risk of vendor hype, unrealistic estimates, and mismatched architectures.",
    "deliverables": [
      "Business requirements specification",
      "Vendor evaluation scorecard",
      "RFP & SOW negotiation guide"
    ],
    "inclusions": []
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "business_systems",
    "name": "Modernize ERP without rebuilding every old workaround.",
    "tagline": "Align processes, configuration, integration, and adoption around the intended operating model.",
    "situation": "ERP upgrade or implementation bogged down by attempts to recreate decades of legacy custom code and workarounds.",
    "deliverables": [
      "Process standardization blueprint",
      "Core configuration specification",
      "Customization retirement plan"
    ],
    "inclusions": []
  },
  {
    "id": "bs_connect_applications",
    "domainId": "business_systems",
    "name": "Connect enterprise applications around shared business information.",
    "tagline": "Establish reliable exchanges across ERP, WMS, MES, HRM/HCM, EAM, and CRM, with clear systems of record.",
    "situation": "Siloed enterprise systems causing manual re-keying, data drift, and broken processes between operations and corporate.",
    "deliverables": [
      "Enterprise integration architecture map",
      "System of record definition matrix",
      "API & data exchange specification"
    ],
    "inclusions": []
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "business_systems",
    "name": "Bring acquired businesses onto a connected application landscape.",
    "tagline": "Decide what to consolidate, retain, replace, or integrate.",
    "situation": "M&A activity leaves a chaotic sprawl of incompatible ERPs, CRM instances, and operational tools across entities.",
    "deliverables": [
      "Acquisition systems integration playbook",
      "Platform consolidation matrix",
      "Migration timeline & budget"
    ],
    "inclusions": []
  },
  {
    "id": "bs_carve_out",
    "domainId": "business_systems",
    "name": "Separate business systems while preserving essential operations and records.",
    "tagline": "Plan application, interface, access, and data transitions for a divestiture or carve-out.",
    "situation": "A divestiture or restructuring requires separating shared applications and records while essential operations continue.",
    "deliverables": [
      "Carve-out systems separation plan",
      "Data extraction & boundary protocol",
      "Shared-service exit roadmap"
    ],
    "inclusions": []
  },
  {
    "id": "bs_operations_support",
    "domainId": "business_systems",
    "name": "Give plant, warehouse, and maintenance teams systems that fit the work.",
    "tagline": "Connect scheduling, inventory, traceability, quality, equipment maintenance, and fulfillment.",
    "situation": "Frontline teams rely on paper, whiteboards, or clunky legacy terminals because enterprise software fails to match floor workflows.",
    "deliverables": [
      "Operational workflow gap analysis",
      "Shop-floor & warehouse interface blueprint",
      "Tooling rollout plan"
    ],
    "inclusions": []
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "business_systems",
    "name": "Prepare an implementation for cutover and stable operation.",
    "tagline": "Address integration, testing, business readiness, ownership, cutover planning, and post-launch support.",
    "situation": "Approaching go-live date with unverified data migrations, untested integrations, and unprepared business users.",
    "deliverables": [
      "Cutover and recovery runbook",
      "Go/no-go readiness scorecard",
      "Hypercare operating charter"
    ],
    "inclusions": []
  },
  {
    "id": "bs_lifecycle_control",
    "domainId": "business_systems",
    "name": "Keep business applications reliable through upgrades and change.",
    "tagline": "Manage upgrades, improvements, required validation, and retirement with business owners.",
    "situation": "Enterprise applications degrade over time due to uncontrolled customizations, unpatched versions, and technical debt.",
    "deliverables": [
      "Application lifecycle policy",
      "Upgrade & validation schedule",
      "Technical debt retirement register"
    ],
    "inclusions": []
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "business_systems",
    "name": "Make enterprise applications ready for software that does work across them.",
    "tagline": "Establish usable interfaces, controlled actions, and integration patterns around existing systems.",
    "situation": "Autonomous agents and automation scripts cannot interact safely with legacy enterprise applications without breaking data integrity.",
    "deliverables": [
      "Agentic integration architecture",
      "Action boundary & permission policy",
      "Audit logging & rollback mechanism"
    ],
    "inclusions": []
  },
  {
    "id": "it_modern_dept",
    "domainId": "it_ot_operations",
    "name": "Build an IT department equipped for the business you are becoming.",
    "tagline": "Modernize its operating model, skills, services, and provider relationships\u2014including support for AI and agentic systems.",
    "situation": "IT viewed as a slow, reactive cost center unable to support modern digital initiatives, cloud, or agentic capabilities.",
    "deliverables": [
      "IT operating model blueprint",
      "Staff skill development & staffing plan",
      "Service delivery catalog"
    ],
    "inclusions": []
  },
  {
    "id": "it_infra_modernization",
    "domainId": "it_ot_operations",
    "name": "Modernize infrastructure around performance, resilience, and growth.",
    "tagline": "Improve networks, compute, storage, cloud services, and end-user environments, with visibility into capacity and cost.",
    "situation": "Aging on-premises servers, fragile network links, and uncontrolled cloud spending creating outages and performance bottlenecks.",
    "deliverables": [
      "Infrastructure architecture roadmap",
      "Cloud cost & capacity optimization audit",
      "Resilience & redundancy plan"
    ],
    "inclusions": []
  },
  {
    "id": "it_dependable_support",
    "domainId": "it_ot_operations",
    "name": "Make technology support dependable for offices and production.",
    "tagline": "Establish service ownership, coverage, escalation, and response around operating priorities.",
    "situation": "Unresolved helpdesk tickets, production-floor support delays, and lack of clear escalation during critical operating hours.",
    "deliverables": [
      "Service desk operating charter",
      "Severity escalation matrix",
      "Incident response SLA dashboard"
    ],
    "inclusions": []
  },
  {
    "id": "it_agentic_runtime",
    "domainId": "it_ot_operations",
    "name": "Give automated work a controlled, supportable operating environment.",
    "tagline": "Establish runtime environments, monitoring, deployment practices, support ownership, and recovery procedures.",
    "situation": "AI models and automated scripts running on unmanaged machines with no monitoring, access control, or disaster recovery.",
    "deliverables": [
      "Agentic runtime infrastructure specification",
      "Monitoring & alert runbooks",
      "Disaster recovery failover plan"
    ],
    "inclusions": []
  },
  {
    "id": "it_security_remediation",
    "domainId": "it_ot_operations",
    "name": "Identify security weaknesses and verify agreed remediation.",
    "tagline": "Coordinate vulnerability assessments and penetration testing with qualified specialists, prioritize findings, and verify corrections through appropriate retesting.",
    "situation": "Unknown exposure to cyber threats, unpatched vulnerabilities, or audit findings lacking practical remediation oversight.",
    "deliverables": [
      "Security vulnerability remediation matrix",
      "Third-party assessment oversight report",
      "Retest evidence and unresolved-findings record"
    ],
    "inclusions": []
  },
  {
    "id": "it_access_control",
    "domainId": "it_ot_operations",
    "name": "Control access across employees, partners, vendors, and agents.",
    "tagline": "Establish appropriate identities, permissions, lifecycle management, and access reviews.",
    "situation": "Excessive user permissions, orphaned accounts from ex-employees, unmonitored vendor logins, and ungoverned agent keys.",
    "deliverables": [
      "Identity & access governance policy",
      "RBAC role matrix",
      "Automated provisioning/deprovisioning runbook"
    ],
    "inclusions": []
  },
  {
    "id": "it_monitoring_response",
    "domainId": "it_ot_operations",
    "name": "Make security monitoring and incident response operational.",
    "tagline": "Define monitoring coverage, response responsibilities, escalation, and retained evidence.",
    "situation": "Security alerts go unnoticed or lack actionable response playbooks when an actual compromise or anomaly occurs.",
    "deliverables": [
      "Security monitoring coverage map",
      "Incident response playbook",
      "Evidence retention & forensics protocol"
    ],
    "inclusions": []
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "it_ot_operations",
    "name": "Establish and test recovery for critical business and plant services.",
    "tagline": "Connect business continuity and disaster recovery plans with backups, restoration dependencies, recovery priorities, and team responsibilities.",
    "situation": "Disaster recovery plans exist only on paper; backups have never been restored, and recovery time objectives (RTO) are unknown.",
    "deliverables": [
      "BCP/DR operational playbook",
      "Backup restoration test report",
      "Recovery objectives and test-results register"
    ],
    "inclusions": []
  },
  {
    "id": "it_plant_responsibilities",
    "domainId": "it_ot_operations",
    "name": "Get IT and plant teams working from one set of responsibilities.",
    "tagline": "Align ownership, support, vendor access, maintenance windows, and change practices around production needs.",
    "situation": "Friction between corporate IT and manufacturing plant teams over scheduled outages, security patches, and plant floor changes.",
    "deliverables": [
      "IT/OT joint operating charter",
      "Plant maintenance window schedule",
      "Change management protocol for production"
    ],
    "inclusions": []
  },
  {
    "id": "it_plant_floor_connect",
    "domainId": "it_ot_operations",
    "name": "Connect plant-floor technology to business systems through controlled information flows.",
    "tagline": "Connect PLCs, SCADA, and MES to business systems with segmentation, safety, and recovery in the design.",
    "situation": "Plant equipment is isolated from business systems or connected haphazardly without network segmentation, risking plant security.",
    "deliverables": [
      "IT/OT information-flow and responsibility map",
      "PLC-to-ERP data bridge design",
      "Specialist-reviewed access and recovery requirements"
    ],
    "inclusions": []
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge",
    "name": "Get teams and systems working from consistent business records.",
    "tagline": "Align master data, definitions, stewardship, and maintenance rules.",
    "situation": "Duplicate customer accounts, conflicting item masters, and mismatched vendor records creating operational friction and reporting errors.",
    "deliverables": [
      "Master data governance charter",
      "Data definition dictionary",
      "Deduplication & standardization pipeline"
    ],
    "inclusions": []
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge",
    "name": "Move required data with a clear record of what reconciles and what does not.",
    "tagline": "Preserve necessary history through tested migration, validation, and documented exceptions.",
    "situation": "Data migration during system replacement at risk of corrupting historical records, losing audit trails, or delaying cutover.",
    "deliverables": [
      "Migration extraction/transformation script library",
      "Automated reconciliation audit report",
      "Legacy exception register"
    ],
    "inclusions": []
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge",
    "name": "Build a company-owned data foundation across fragmented systems.",
    "tagline": "Connect sources with clear lineage, quality checks, and governed access.",
    "situation": "Valuable business history locked in proprietary vendor silos, disparate databases, and inaccessible spreadsheets.",
    "deliverables": [
      "Data warehouse architecture",
      "Automated ETL/ELT pipelines",
      "Data lineage and dictionary catalog"
    ],
    "inclusions": []
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge",
    "name": "Answer business questions without rebuilding the report every time.",
    "tagline": "Establish repeatable analytics and business intelligence for operating and customer decisions, with agreed measures and traceable sources.",
    "situation": "Analysts and managers spending days rebuilding spreadsheet reports each month with conflicting calculations and untraceable sources.",
    "deliverables": [
      "Semantic business reporting layer",
      "Core operational dashboards",
      "Metric definition handbook"
    ],
    "inclusions": []
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge",
    "name": "Build a knowledge base people can find, trust, and maintain.",
    "tagline": "Organize procedures, business rules, documentation, and expertise with clear ownership.",
    "situation": "Company SOPs, operational guides, and business rules scattered across shared drives, wikis, and local folders, quickly becoming obsolete.",
    "deliverables": [
      "Knowledge management architecture",
      "SOP template and curation workflow",
      "Content ownership register"
    ],
    "inclusions": []
  },
  {
    "id": "dk_preserve_memory",
    "domainId": "data_knowledge",
    "name": "Preserve institutional knowledge before people, systems, or processes move on.",
    "tagline": "Capture decisions, operating history, lessons, and context at risk of being lost.",
    "situation": "Retirement, turnover, or system decommissioning threatening decades of unwritten operating wisdom and critical institutional memory.",
    "deliverables": [
      "Institutional knowledge capture playbook",
      "Captured operating rules and decision history",
      "Searchable operational archive"
    ],
    "inclusions": []
  },
  {
    "id": "dk_rag_search",
    "domainId": "data_knowledge",
    "name": "Ask questions of company knowledge and see the supporting sources.",
    "tagline": "Use enterprise search and retrieval with tested sources and clear handling of insufficient evidence.",
    "situation": "Employees waste hours looking for answers across PDFs, policies, and emails, or receive inaccurate answers from generic AI.",
    "deliverables": [
      "Enterprise RAG pipeline",
      "Document chunking and vector index",
      "Citation & insufficient-evidence guardrail"
    ],
    "inclusions": []
  },
  {
    "id": "dk_ai_data_readiness",
    "domainId": "data_knowledge",
    "name": "Prepare company information for responsible AI and agent use.",
    "tagline": "Address readiness, permissions, privacy, quality, and the rules for retrieving and updating knowledge.",
    "situation": "Unstructured enterprise documents contain confidential data, PII, or contradictory rules that cause AI systems to leak data or fail.",
    "deliverables": [
      "AI data readiness assessment",
      "Permission & redaction filter rules",
      "Agent ingestion & update protocols"
    ],
    "inclusions": []
  },
  {
    "id": "fs_reconciliation",
    "domainId": "financial_systems",
    "name": "Reconcile operational and financial records with clear exceptions.",
    "tagline": "Connect operational records, subledgers, and the general ledger, with finance retaining accounting judgments and posting approvals.",
    "situation": "Persistent discrepancies between operational systems (WMS, TMS, billing) and the general ledger causing manual spreadsheet reconciliations.",
    "deliverables": [
      "Automated reconciliation matching rules",
      "Variance analysis dashboard",
      "Posting adjustment workflow"
    ],
    "inclusions": []
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "financial_systems",
    "name": "Make financial close more repeatable and easier to explain.",
    "tagline": "Improve records, reconciliations, responsibilities, and supporting evidence.",
    "situation": "Month-end close is stressful, takes 15+ days, relies on heroics, and produces numbers that are difficult to audit or explain.",
    "deliverables": [
      "Close calendar & task management system",
      "Automated recurring entry templates",
      "Audit workpaper repository"
    ],
    "inclusions": []
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "financial_systems",
    "name": "Bring acquired entities into a coherent financial structure.",
    "tagline": "Align accounts, mappings, intercompany records, and reporting requirements.",
    "situation": "Acquisitions running on separate charts of accounts, creating convoluted manual rollups, intercompany disputes, and delayed reporting.",
    "deliverables": [
      "Enterprise chart of accounts blueprint",
      "Account mapping crosswalk",
      "Intercompany elimination workflow"
    ],
    "inclusions": []
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "financial_systems",
    "name": "Catch invoice and charge discrepancies before approval.",
    "tagline": "Surface mismatches and duplicates for finance to review against business records.",
    "situation": "Duplicate invoices, incorrect contract rates, fuel surcharges, and unapproved vendor billings slipping through manual AP approvals.",
    "deliverables": [
      "Automated invoice 3-way matching rules",
      "Discrepancy review queue",
      "Vendor billing audit report"
    ],
    "inclusions": []
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "financial_systems",
    "name": "Keep the business audit-ready through systems change.",
    "tagline": "Carry approvals, reconciliation, and traceability into the new operating environment.",
    "situation": "ERP migration or process automation threatens to bypass segregation of duties, delegation of authority, and audit trails.",
    "deliverables": [
      "Internal controls matrix",
      "Segregation of duties (SoD) rulebook",
      "System change audit verification"
    ],
    "inclusions": []
  },
  {
    "id": "fs_unified_cfo_view",
    "domainId": "financial_systems",
    "name": "Give the CFO a unified view of financial performance across the business.",
    "tagline": "Connect consolidation, eliminations, and management reporting, with finance approving the accounting rules.",
    "situation": "CFO and executive team lack a single consolidated view of performance across divisions, currencies, and entities without manual consolidation.",
    "deliverables": [
      "EPM consolidation model",
      "Automated elimination logic",
      "Executive financial reporting suite"
    ],
    "inclusions": []
  },
  {
    "id": "fs_budget_forecast_actuals",
    "domainId": "financial_systems",
    "name": "Connect budgeting and forecasting to actual business performance.",
    "tagline": "Link operating drivers, assumptions, actuals, and revisions to the consolidated financial picture.",
    "situation": "Static annual budgets disconnected from day-to-day operations, making dynamic re-forecasting slow and error-prone.",
    "deliverables": [
      "Driver-based financial planning model",
      "Rolling forecast templates",
      "Budget-to-actual variance reporting"
    ],
    "inclusions": []
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "financial_systems",
    "name": "Bring demand, supply, inventory, and finance into one planning process.",
    "tagline": "Establish integrated business planning with commercial, operating, and finance leaders making coordinated decisions.",
    "situation": "Commercial, operations, and finance teams operating from competing demand projections, causing inventory write-downs and stockouts.",
    "deliverables": [
      "IBP operating cadence & governance",
      "Integrated consensus planning model",
      "Executive S&OP meeting pack"
    ],
    "inclusions": []
  },
  {
    "id": "fs_working_capital",
    "domainId": "financial_systems",
    "name": "Make working capital and cash needs visible.",
    "tagline": "Connect inventory, receivables, payables, and operating assumptions to the financial outlook.",
    "situation": "Cash surprises and working capital crunches due to hidden inventory buildup, slow collections, and unpredictable payment timing.",
    "deliverables": [
      "13-week direct cash forecast model",
      "Working capital analytics dashboard",
      "AR collections & AP payment pacing playbook"
    ],
    "inclusions": []
  },
  {
    "id": "fs_abc_profitability",
    "domainId": "financial_systems",
    "name": "Understand the cost and profitability of products, customers, and services.",
    "tagline": "Know what products, customers, and services actually cost, with agreed drivers and visible assumptions.",
    "situation": "Averaged cost allocations hide unprofitable customers, loss-making product SKUs, and true cost-to-serve in production and distribution.",
    "deliverables": [
      "Activity-based cost allocation model",
      "Customer & SKU profitability matrix",
      "Margin optimization recommendations"
    ],
    "inclusions": []
  },
  {
    "id": "wa_handoffs",
    "domainId": "workflows_automation",
    "name": "Move work between teams without repeated entry and chasing.",
    "tagline": "Connect information, status, responsibilities, and handoffs.",
    "situation": "Work stalls between departments due to email chains, lost attachments, redundant data re-entry, and missing status visibility.",
    "deliverables": [
      "Cross-departmental process blueprint",
      "Automated workflow orchestration",
      "Task & status tracking dashboard"
    ],
    "inclusions": []
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "workflows_automation",
    "name": "Connect order-to-cash across sales, fulfillment, and finance.",
    "tagline": "Make progress and exceptions visible from customer commitment through billing.",
    "situation": "Orders delayed, miscommunicated between sales and fulfillment, or billed incorrectly due to fragmented order-to-cash handoffs.",
    "deliverables": [
      "Order-to-cash process architecture",
      "Fulfillment & billing automation",
      "Exception and block resolution queue"
    ],
    "inclusions": []
  },
  {
    "id": "wa_procure_to_pay",
    "domainId": "workflows_automation",
    "name": "Connect procure-to-pay across purchasing, receiving, and finance.",
    "tagline": "Align requests, orders, receipts, exceptions, and approvals.",
    "situation": "Maverick spending, lost receiving receipts, and delayed payments caused by disconnected procurement and accounting processes.",
    "deliverables": [
      "Procure-to-pay workflow specification",
      "Approval routing engine",
      "Receiving confirmation interface"
    ],
    "inclusions": []
  },
  {
    "id": "wa_mobile_capture",
    "domainId": "workflows_automation",
    "name": "Capture frontline work accurately where it happens.",
    "tagline": "Give shop-floor, warehouse, and field teams practical ways to record activity and return usable information.",
    "situation": "Field technicians, shop-floor operators, and warehouse staff recording data on clipboards, resulting in delayed and inaccurate records.",
    "deliverables": [
      "Mobile frontline capture interface",
      "Barcode/RFID integration specification",
      "Offline data synchronization mechanism"
    ],
    "inclusions": []
  },
  {
    "id": "wa_exception_routing",
    "domainId": "workflows_automation",
    "name": "Get operational exceptions to someone who can resolve them.",
    "tagline": "Route stuck handoffs and missing information to named owners with clear escalation.",
    "situation": "Exceptions (pricing disputes, stockouts, shipping holds) sit unaddressed in queues, delaying orders and frustrating customers.",
    "deliverables": [
      "Exception taxonomy & routing rules",
      "Operational resolution queue",
      "Escalation timer & alert framework"
    ],
    "inclusions": []
  },
  {
    "id": "wa_multi_site_process",
    "domainId": "workflows_automation",
    "name": "Establish a common way of working across sites.",
    "tagline": "Agree shared processes while retaining necessary local variations.",
    "situation": "Multiple manufacturing plants or distribution centers operating completely different processes, preventing shared labor and standardized reporting.",
    "deliverables": [
      "Multi-site operating standard",
      "Facility variation matrix",
      "Cross-site process audit framework"
    ],
    "inclusions": []
  },
  {
    "id": "wa_supplier_cost_pricing",
    "domainId": "workflows_automation",
    "name": "Connect supplier cost changes to informed pricing decisions.",
    "tagline": "Show the impact, route changes for business review, and control approved updates.",
    "situation": "Supplier price increases and raw material surcharges erode operating margins because customer price updates lag by months.",
    "deliverables": [
      "Margin impact calculation engine",
      "Commercial review & approval workflow",
      "Automated price schedule update interface"
    ],
    "inclusions": []
  },
  {
    "id": "wa_process_adoption",
    "domainId": "workflows_automation",
    "name": "Make new processes part of everyday operations.",
    "tagline": "Include training, adoption measures, operational handover, and owners equipped to run and improve the process.",
    "situation": "New systems and automated workflows abandoned by staff after consultants leave because training was theoretical and ongoing ownership was undefined.",
    "deliverables": [
      "Operational training curriculum",
      "Process adoption monitoring telemetry",
      "Handover charter and runbooks"
    ],
    "inclusions": []
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "workflows_automation",
    "name": "Move AI-enabled work from pilot into everyday use.",
    "tagline": "Establish performance checks, human review, exception handling, adoption, and practical operating support.",
    "situation": "AI prototypes succeed in demos but fail in everyday operations due to edge cases, lack of human review protocols, and absent support structures.",
    "deliverables": [
      "Production AI operating protocol",
      "Human-in-the-loop review queue",
      "Model drift and accuracy monitoring dashboard"
    ],
    "inclusions": []
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "workflows_automation",
    "name": "Keep business work recoverable when automation fails.",
    "tagline": "Establish fallback procedures, authorized manual intervention, reconciliation, and recovery.",
    "situation": "Automated integrations and batch processes fail silently, leaving half-processed transactions and halting operations with no way to recover manually.",
    "deliverables": [
      "Automation resilience architecture",
      "Manual override & exception protocol",
      "Transaction reconciliation & replay tool"
    ],
    "inclusions": []
  }
];

export const LEGACY_OUTCOME_ALIASES: Record<string, string> = {
  "ld_sow_scope_audit": "ld_vendor_commitments",
  "ld_fractional_cio_mandate": "ld_roadmap",
  "ld_ma_integration_flight_control": "ld_capacity_plan",
  "it_erp_selection_governance": "bs_selection_partners",
  "it_erp_vendor_turnaround": "bs_modernize_erp",
  "it_team_build_vendor_rightsizing": "it_modern_dept",
  "dk_master_data_unification": "dk_master_records",
  "dk_cloud_migration_schema_integrity": "dk_data_foundation",
  "dk_institutional_knowledge_retention": "dk_preserve_memory",
  "fs_automated_subledger_reconciliation": "fs_reconciliation",
  "fs_month_end_close_acceleration": "fs_close_repeatability",
  "fs_milestone_billing_revenue_recognition": "fs_invoice_discrepancies",
  "wa_shop_floor_mobile_tooling": "wa_mobile_capture",
  "wa_tms_freight_audit_bridge": "wa_supplier_cost_pricing",
  "wa_field_service_work_order_mesh": "wa_handoffs"
};
