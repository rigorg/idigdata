// Generated from approved Operations public export. Do not edit outcome copy here.
// Revision: outcome-catalog-2026-10-09; SHA256: 1d813b300cda3467b4203e0c9159f91b10fc01c98fd998f033c67258084f887a; 60 outcomes, ten per category.

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
    "id": "bs_existing_value",
    "domainId": "business_systems",
    "name": "Get more operating value from the systems you already pay for.",
    "tagline": "Resolve underused capabilities, duplicate tools, and recurring workarounds before adding another platform.",
    "situation": "Application spend has grown while employees still bridge gaps by hand.",
    "deliverables": []
  },
  {
    "id": "bs_selection_partners",
    "domainId": "business_systems",
    "name": "Choose systems and partners against how your business actually works.",
    "tagline": "Turn operating needs, exceptions, and ownership requirements into demonstrations and delivery commitments buyers can compare.",
    "situation": "Product presentations drive selection ahead of the work people need to accomplish.",
    "deliverables": []
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "business_systems",
    "name": "Modernize ERP around the business you need to run next.",
    "tagline": "Separate necessary operating differences from inherited workarounds, then align configuration, integration, and adoption.",
    "situation": "An ERP replacement risks reproducing old complexity or losing business rules people depend on.",
    "deliverables": []
  },
  {
    "id": "bs_connect_applications",
    "domainId": "business_systems",
    "name": "Make business systems exchange information people can rely on.",
    "tagline": "Connect applications around clear records of authority, tested interfaces, and visible handling of failed exchanges.",
    "situation": "Teams reconcile conflicting statuses or re-enter the same information across applications.",
    "deliverables": []
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "business_systems",
    "name": "Bring acquired businesses into a connected operating environment.",
    "tagline": "Decide what to retain, integrate, replace, or consolidate based on how the combined company must operate.",
    "situation": "Acquired businesses use different applications and cannot coordinate key activities or reporting.",
    "deliverables": []
  },
  {
    "id": "bs_carve_out",
    "domainId": "business_systems",
    "name": "Give a separating business the systems to operate on its own.",
    "tagline": "Plan application, data, access, and service transitions around the business activities that must continue on Day 1.",
    "situation": "A divestiture or transition-service exit has a deadline, shared dependencies, and unclear operating ownership.",
    "deliverables": []
  },
  {
    "id": "bs_operations_support",
    "domainId": "business_systems",
    "name": "Make production, warehouse, and maintenance systems fit the work.",
    "tagline": "Connect planning, inventory, quality, traceability, and maintenance around real operating constraints and exceptions.",
    "situation": "Office assumptions in system design do not match what plant and warehouse teams must do.",
    "deliverables": []
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "business_systems",
    "name": "Bring the new system into service with the business ready to use it.",
    "tagline": "Join data, interfaces, testing, people, support, and fallback planning into one accountable cutover.",
    "situation": "Technical completion is being mistaken for readiness to operate.",
    "deliverables": []
  },
  {
    "id": "bs_lifecycle_control",
    "domainId": "business_systems",
    "name": "Keep application change from becoming operational disruption.",
    "tagline": "Make upgrades, releases, validation, and retirement part of a business-owned application lifecycle.",
    "situation": "Changes accumulate without clear impact assessment, regression testing, or retirement decisions.",
    "deliverables": []
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "business_systems",
    "name": "Let agents work across enterprise systems within agreed limits.",
    "tagline": "Build the interfaces and authorized actions that let software use existing applications without losing business control.",
    "situation": "An agent demonstration works in isolation but cannot safely read or act in enterprise systems.",
    "deliverables": []
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge",
    "name": "Give every team the same meaning for the records that run the business.",
    "tagline": "Align customer, supplier, item, and other master records with clear definitions, stewardship, and change rules.",
    "situation": "Teams disagree because identifiers, definitions, and maintenance practices differ across systems.",
    "deliverables": []
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge",
    "name": "Move the data the business needs with a clear reconciliation.",
    "tagline": "Preserve required records and history through tested conversion, validation, and explicit treatment of exceptions.",
    "situation": "A system change could lose context, carry bad records forward, or leave balances unexplained.",
    "deliverables": []
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge",
    "name": "Put company data under a foundation the business can own and use.",
    "tagline": "Connect fragmented sources with understandable lineage, quality checks, and governed access for reporting and software.",
    "situation": "Critical information is trapped in applications or stitched together differently for every request.",
    "deliverables": []
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge",
    "name": "Make business answers repeatable without rebuilding the report.",
    "tagline": "Give teams shared measures, traceable sources, and usable analysis they can refresh and explore themselves.",
    "situation": "Meetings rely on recurring spreadsheet assembly and competing definitions of performance.",
    "deliverables": []
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge",
    "name": "Make company knowledge easy to find, trust, and keep current.",
    "tagline": "Organize procedures, policies, decisions, and operating guidance around the people responsible for maintaining them.",
    "situation": "Employees cannot distinguish current guidance from outdated files or personal copies.",
    "deliverables": []
  },
  {
    "id": "dk_preserve_memory",
    "domainId": "data_knowledge",
    "name": "Keep operating knowledge when people and systems move on.",
    "tagline": "Capture the reasoning, exceptions, and history the business would otherwise lose during turnover or modernization.",
    "situation": "A few people or legacy applications hold knowledge that others cannot reconstruct.",
    "deliverables": []
  },
  {
    "id": "dk_rag_search",
    "domainId": "data_knowledge",
    "name": "Give people useful AI answers they can check against company sources.",
    "tagline": "Connect enterprise search and retrieval to approved information, permissions, source references, and honest handling of uncertainty.",
    "situation": "A generic assistant produces fluent answers without enough business context or verifiable support.",
    "deliverables": []
  },
  {
    "id": "dk_ai_data_readiness",
    "domainId": "data_knowledge",
    "name": "Prepare business information for the work you want AI to do.",
    "tagline": "Assess the specific use case against data quality, permissions, context, and the rules for reading or changing information.",
    "situation": "An AI initiative was selected without knowing whether its required information is usable or authorized.",
    "deliverables": []
  },
  {
    "id": "dk_operating_rules",
    "domainId": "data_knowledge",
    "name": "Turn the business's unwritten rules into requirements software can use.",
    "tagline": "Work with the people doing the job to make exceptions, decisions, and Mary's spreadsheet logic explicit before building or automating.",
    "situation": "A specification describes the formal process but misses the knowledge that makes the real operation work.",
    "deliverables": []
  },
  {
    "id": "dk_operational_diagnostics",
    "domainId": "data_knowledge",
    "name": "Find where delays, waste, and rework are costing the business.",
    "tagline": "Use operating data and frontline knowledge to distinguish symptoms from causes and identify changes worth pursuing.",
    "situation": "Leaders see disappointing results but cannot identify which handoff, constraint, or data problem drives them.",
    "deliverables": []
  },
  {
    "id": "fs_reconciliation",
    "domainId": "financial_systems",
    "name": "Make operational activity and financial records agree.",
    "tagline": "Connect source transactions, subledgers, and the general ledger with visible exceptions and Finance-owned judgments.",
    "situation": "The books and the operation tell different stories and reconciliations depend on personal workarounds.",
    "deliverables": []
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "financial_systems",
    "name": "Make close timely, repeatable, and easier to explain.",
    "tagline": "Improve record quality, reconciliations, ownership, and supporting evidence so Finance spends less effort reconstructing the period.",
    "situation": "Month-end depends on heroic effort, late adjustments, or undocumented spreadsheet steps.",
    "deliverables": []
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "financial_systems",
    "name": "Bring acquired entities into a financial structure Finance can run.",
    "tagline": "Align accounts, mappings, intercompany records, and reporting while preserving the history needed to explain the transition.",
    "situation": "Acquisitions have left incompatible ledgers and inconsistent reporting definitions.",
    "deliverables": []
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "financial_systems",
    "name": "Catch invoice errors before they become approved costs.",
    "tagline": "Compare charges with orders, receipts, contracts, and prior transactions; route discrepancies to Finance for a decision.",
    "situation": "Duplicate, mismatched, or unsupported charges are hard to detect before approval.",
    "deliverables": []
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "financial_systems",
    "name": "Keep financial control intact while systems and processes change.",
    "tagline": "Carry approvals, access separation, reconciliation, and audit evidence into the new operating environment.",
    "situation": "Transformation changes financial workflows faster than their controls and evidence are updated.",
    "deliverables": []
  },
  {
    "id": "fs_unified_cfo_view",
    "domainId": "financial_systems",
    "name": "Give Finance one explainable view of business performance.",
    "tagline": "Connect entity results, consolidation, eliminations, and management reporting under Finance-approved rules.",
    "situation": "Executives receive different totals and cannot trace consolidated results back to their source.",
    "deliverables": []
  },
  {
    "id": "fs_budget_forecast_actuals",
    "domainId": "financial_systems",
    "name": "Keep the forecast connected to how the business is performing.",
    "tagline": "Link operating drivers, actuals, assumptions, and revisions so leaders can see what changed and respond.",
    "situation": "Planning models lag the operation or cannot explain the difference between forecast and actual results.",
    "deliverables": []
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "financial_systems",
    "name": "Get commercial, supply, and Finance teams working from one operating plan.",
    "tagline": "Join demand, capacity, inventory, and financial implications so tradeoffs are made together rather than passed between functions.",
    "situation": "Sales targets, production schedules, inventory decisions, and cash expectations do not align.",
    "deliverables": []
  },
  {
    "id": "fs_working_capital",
    "domainId": "financial_systems",
    "name": "Make cash tied up in the operation visible and actionable.",
    "tagline": "Connect inventory, receivables, payables, and timing assumptions so owners can address the drivers of working capital.",
    "situation": "Cash pressure is visible at the bank but difficult to trace to inventory and transaction behavior.",
    "deliverables": []
  },
  {
    "id": "fs_abc_profitability",
    "domainId": "financial_systems",
    "name": "Show where the business earns margin and where it loses it.",
    "tagline": "Connect products, customers, and services to costs using agreed drivers and transparent assumptions.",
    "situation": "Reported revenue masks cost-to-serve differences and teams cannot explain margin leakage.",
    "deliverables": []
  },
  {
    "id": "it_modern_dept",
    "domainId": "it_ot_operations",
    "name": "Build an IT function the business can depend on and grow with.",
    "tagline": "Align people, service ownership, skills, and provider relationships with the operation and the technology coming next.",
    "situation": "IT is organized around inherited tools and reactive support rather than the business it now serves.",
    "deliverables": []
  },
  {
    "id": "it_infra_modernization",
    "domainId": "it_ot_operations",
    "name": "Give the operation infrastructure that can carry its next stage.",
    "tagline": "Improve networks, compute, cloud, and workplace environments against actual performance, resilience, and cost needs.",
    "situation": "Growth, distributed sites, or new workloads expose infrastructure constraints.",
    "deliverables": []
  },
  {
    "id": "it_dependable_support",
    "domainId": "it_ot_operations",
    "name": "Get technology problems to the right people before work stalls.",
    "tagline": "Make support coverage, service priorities, and escalation match the offices, shifts, and sites that use it.",
    "situation": "Employees and production teams lose time chasing support or cannot get help when their shift needs it.",
    "deliverables": []
  },
  {
    "id": "it_agentic_runtime",
    "domainId": "it_ot_operations",
    "name": "Put agentic work into an environment the company can operate.",
    "tagline": "Establish deployment, observability, cost visibility, support, and recovery for the agents and automations the business uses.",
    "situation": "Promising automation depends on a developer's workstation or an environment nobody owns.",
    "deliverables": []
  },
  {
    "id": "it_security_remediation",
    "domainId": "it_ot_operations",
    "name": "Reduce security exposure through verified corrective work.",
    "tagline": "Prioritize weaknesses by business impact, coordinate qualified specialists, and verify remediation rather than closing tickets on assertion.",
    "situation": "Findings accumulate without clear ownership, business priorities, or evidence of correction.",
    "deliverables": []
  },
  {
    "id": "it_access_control",
    "domainId": "it_ot_operations",
    "name": "Give people and agents the access their work requires.",
    "tagline": "Manage identities, permissions, privileged access, and lifecycle changes across employees, vendors, partners, and software agents.",
    "situation": "Access is overextended, difficult to review, or disconnected from actual responsibility.",
    "deliverables": []
  },
  {
    "id": "it_monitoring_response",
    "domainId": "it_ot_operations",
    "name": "Make detection lead to coordinated incident response.",
    "tagline": "Connect monitoring with named responders, business escalation, evidence retention, and tested response actions.",
    "situation": "Alerts exist, but teams do not know who acts or how to coordinate a consequential incident.",
    "deliverables": []
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "it_ot_operations",
    "name": "Know how the business will recover when a critical service fails.",
    "tagline": "Join backups and restoration dependencies to business priorities, recovery objectives, and team responsibilities.",
    "situation": "Recovery is assumed from backup success but has not been tested against an actual business interruption.",
    "deliverables": []
  },
  {
    "id": "it_plant_responsibilities",
    "domainId": "it_ot_operations",
    "name": "Give IT, plant teams, and vendors a clear way to work together.",
    "tagline": "Agree service ownership, access, maintenance windows, and change responsibilities around production constraints.",
    "situation": "Plant and corporate teams share technology dependencies but have conflicting assumptions about responsibility.",
    "deliverables": []
  },
  {
    "id": "it_plant_floor_connect",
    "domainId": "it_ot_operations",
    "name": "Connect plant information without compromising production control.",
    "tagline": "Work with plant and control-system owners to connect operational data through segmented, supportable interfaces.",
    "situation": "Business reporting needs plant data, but connection changes could create unacceptable production or safety risk.",
    "deliverables": []
  },
  {
    "id": "ld_roadmap",
    "domainId": "leadership_direction",
    "name": "Turn business priorities into a transformation the company can deliver.",
    "tagline": "Connect the next business move to the systems, people, investment, and sequence needed to make it happen.",
    "situation": "Teams pursue disconnected projects and disagree about what comes first.",
    "deliverables": []
  },
  {
    "id": "ld_business_case",
    "domainId": "leadership_direction",
    "name": "Put technology investment behind a business result worth pursuing.",
    "tagline": "Compare value, operating cost, risk, and readiness before committing money or scaling an AI use case.",
    "situation": "Proposals promise innovation without explaining the operating result or the cost of running it.",
    "deliverables": []
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "leadership_direction",
    "name": "Make the delivery plan fit the people who must carry it.",
    "tagline": "Sequence initiatives around real capacity, operational duties, and partner commitments so priorities survive contact with the working week.",
    "situation": "The same people are committed to several transformations while still running the business.",
    "deliverables": []
  },
  {
    "id": "ld_partner_bench",
    "domainId": "leadership_direction",
    "name": "Build the team that can turn the plan into working change.",
    "tagline": "Bring internal expertise and delivery partners together around clear responsibilities, practical skills, and shared acceptance of the result.",
    "situation": "The plan assumes champions or specialists who have not been recruited, equipped, or given time to deliver.",
    "deliverables": []
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "leadership_direction",
    "name": "Get a stalled transformation back to credible delivery.",
    "tagline": "Diagnose the technical, commercial, and organizational obstacles; reset commitments around work the business can verify.",
    "situation": "A program consumes money but has lost trust, ownership, or a believable path to operation.",
    "deliverables": []
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "leadership_direction",
    "name": "Turn vendor commitments into results the business can accept.",
    "tagline": "Make scope, responsibilities, commercial milestones, and acceptance clear across software suppliers and implementation partners.",
    "situation": "Invoices and status reports keep arriving while responsibility for working results remains disputed.",
    "deliverables": []
  },
  {
    "id": "ld_stakeholder_alignment",
    "domainId": "leadership_direction",
    "name": "Get leaders and operating teams making the decisions delivery needs.",
    "tagline": "Translate operating realities and technical choices into shared priorities, clear decisions, and an honest view of value and risk.",
    "situation": "Executives, functions, and partners pursue different priorities or escalate the same unresolved decisions.",
    "deliverables": []
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "leadership_direction",
    "name": "Turn scattered AI experiments into a business program with a purpose.",
    "tagline": "Select use cases around real work, establish ownership, and direct investment toward changes the organization can adopt and support.",
    "situation": "Teams buy tools and run pilots without a shared view of value, duplication, or operational readiness.",
    "deliverables": []
  },
  {
    "id": "ld_ai_decision_rights",
    "domainId": "leadership_direction",
    "name": "Keep people accountable as software takes on more work.",
    "tagline": "Define what agents may do, who authorizes consequential actions, and how decisions and exceptions remain visible.",
    "situation": "AI capabilities expand faster than the business has agreed authority, responsibility, and limits.",
    "deliverables": []
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "leadership_direction",
    "name": "Make transformation value show up in everyday performance.",
    "tagline": "Track adoption and operating measures with the people responsible for the result, then act when the benefit is not materializing.",
    "situation": "Systems went live, but promised improvements are unclear and teams have reverted to workarounds.",
    "deliverables": []
  },
  {
    "id": "wa_handoffs",
    "domainId": "workflows_automation",
    "name": "Make work move between teams without re-entry and chasing.",
    "tagline": "Connect information, status, and responsibility so people know what is ready, what is missing, and who acts next.",
    "situation": "Work stalls between departments and employees use messages and spreadsheets to bridge gaps.",
    "deliverables": []
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "workflows_automation",
    "name": "Carry customer commitments through fulfillment, billing, and collection.",
    "tagline": "Connect sales, operations, and Finance around order status, exceptions, and the information each step needs.",
    "situation": "Orders lose context between sale, shipment, invoice, and follow-up, creating delays or disputes.",
    "deliverables": []
  },
  {
    "id": "wa_procure_to_pay",
    "domainId": "workflows_automation",
    "name": "Keep purchasing, receiving, and payment working as one process.",
    "tagline": "Connect requests, commitments, receipts, invoice exceptions, and approvals while preserving Finance's authority.",
    "situation": "Teams cannot see which purchases are authorized, received, disputed, or ready for payment.",
    "deliverables": []
  },
  {
    "id": "wa_mobile_capture",
    "domainId": "workflows_automation",
    "name": "Capture the work where it happens, in a form the business can use.",
    "tagline": "Give plant, warehouse, and field teams practical tools that fit the environment and return reliable information.",
    "situation": "Frontline activity is captured late, transcribed twice, or lost because the tool does not fit the job.",
    "deliverables": []
  },
  {
    "id": "wa_exception_routing",
    "domainId": "workflows_automation",
    "name": "Get stalled work to someone who can resolve it.",
    "tagline": "Detect missing information and broken handoffs, route the case to an accountable owner, and make escalation visible.",
    "situation": "Exceptions disappear into inboxes while orders, approvals, or customer commitments wait.",
    "deliverables": []
  },
  {
    "id": "wa_multi_site_process",
    "domainId": "workflows_automation",
    "name": "Make common processes work across sites without ignoring local reality.",
    "tagline": "Agree the shared process and deliberately retain variations required by products, customers, or local operations.",
    "situation": "Each site has a different workaround, or a central template fails at the plant that must use it.",
    "deliverables": []
  },
  {
    "id": "wa_supplier_cost_pricing",
    "domainId": "workflows_automation",
    "name": "Turn supplier cost changes into timely pricing decisions.",
    "tagline": "Show cost impact, route commercial review, and control approved updates across the systems people quote and sell from.",
    "situation": "Supplier changes arrive faster than pricing teams can assess margin impact and update selling information.",
    "deliverables": []
  },
  {
    "id": "wa_process_adoption",
    "domainId": "workflows_automation",
    "name": "Make the new way of working part of the working day.",
    "tagline": "Equip teams with practical training, usable procedures, support, and ownership of the process after launch.",
    "situation": "A technically complete solution is bypassed because people are unprepared, unconvinced, or unsupported.",
    "deliverables": []
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "workflows_automation",
    "name": "Put useful agentic work into everyday business use.",
    "tagline": "Build and test the workflow around real cases, human decisions, exceptions, and the people who must run it.",
    "situation": "An AI pilot looks capable but has not proved reliable use inside a working business process.",
    "deliverables": []
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "workflows_automation",
    "name": "Keep the work moving when automation reaches its limits.",
    "tagline": "Design human intervention, fallback, reconciliation, and restart into the workflow from the beginning.",
    "situation": "A failed agent or automation leaves work stranded or creates uncertainty about what already happened.",
    "deliverables": []
  }
];

export const LEGACY_OUTCOME_ALIASES: Record<string, string> = {
  "dk_cloud_migration_schema_integrity": "dk_data_foundation",
  "dk_institutional_knowledge_retention": "dk_preserve_memory",
  "dk_master_data_unification": "dk_master_records",
  "dk_self_service_bi": "dk_repeatable_analytics",
  "fs_automated_subledger_reconciliation": "fs_reconciliation",
  "fs_milestone_billing_revenue_recognition": "fs_invoice_discrepancies",
  "fs_month_end_close_acceleration": "fs_close_repeatability",
  "it_erp_selection_governance": "bs_selection_partners",
  "it_erp_vendor_turnaround": "bs_modernize_erp",
  "it_team_build_vendor_rightsizing": "it_modern_dept",
  "ld_board_visibility": "ld_stakeholder_alignment",
  "ld_fractional_cio_mandate": "ld_roadmap",
  "ld_ma_integration_flight_control": "ld_capacity_plan",
  "ld_sow_scope_audit": "ld_vendor_commitments",
  "wa_field_service_work_order_mesh": "wa_handoffs",
  "wa_shop_floor_mobile_tooling": "wa_mobile_capture",
  "wa_tms_freight_audit_bridge": "wa_supplier_cost_pricing"
};

export const PUBLIC_CATALOG_REVISION = {"version":"outcome-catalog-2026-10-09","public_hash":"1d813b300cda3467b4203e0c9159f91b10fc01c98fd998f033c67258084f887a","count":60};

export const RETIRED_OUTCOME_IDS: string[] = [];
