// Generated from approved Operations public export. Do not edit outcome copy here.
// Revision: outcome-catalog-2026-10-13-v5; SHA256: 02056777d9487bc3cfdf497c39ac8741d853330d2c2303232ec8c2e5fe8692b8; 60 outcomes, ten per category.

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
    "id": "commercial_solution",
    "code": "CS",
    "name": "Commercial & Solution Leadership",
    "subtitle": "Turn business priorities into qualified enterprise opportunities, defensible investment cases, and agreed commercial scope.",
    "essence": "Enterprise opportunity alignment, sponsor commitment, solution architecture, and commercial agreement execution."
  },
  {
    "id": "transformation_delivery",
    "code": "TD",
    "name": "Enterprise Transformation & Delivery Leadership",
    "subtitle": "Carry transformation mandates into measurable business results with clear executive ownership and team delivery.",
    "essence": "Align priorities, investment, cross-functional delivery teams, and floor adoption across executive partners."
  },
  {
    "id": "architecture_systems",
    "code": "AS",
    "name": "Enterprise Architecture & Business Systems",
    "subtitle": "Connect core enterprise platforms and physical operations around shared operational truth.",
    "essence": "Connect ERP, WMS, MES, HRM/HCM, EAM, and CRM around physical workflows with operating continuity.",
    "appGroups": "ERP\u2014Enterprise Resource Planning \u00b7 WMS\u2014Warehouse Management \u00b7 MES\u2014Manufacturing Execution \u00b7 HRM/HCM\u2014Human Resources \u00b7 EAM\u2014Enterprise Asset Management \u00b7 CRM\u2014Customer Relationship Management"
  },
  {
    "id": "data_knowledge_financial",
    "code": "DK",
    "name": "Data, Knowledge & Financial Systems",
    "subtitle": "Turn company data, operating history, and financial records into trusted information people and agents can act on.",
    "essence": "Master data integrity, accelerated close, auditable controls, unified reporting, and enterprise memory for people and agents."
  },
  {
    "id": "agentic_workflows",
    "code": "AW",
    "name": "Agentic Software & Workflow Delivery",
    "subtitle": "Build custom agentic software and workflow automation around how frontline operators actually work.",
    "essence": "Deterministic agent pipelines, AST calipers, human authorization gates, and operational handoff elimination."
  },
  {
    "id": "technology_operations",
    "code": "OC",
    "name": "Technology Operations, Adoption & Control",
    "subtitle": "Maintain dependable multi-site infrastructure, cybersecurity, and operational continuity across business and plant systems.",
    "essence": "Dependable infrastructure, cybersecurity, and operational continuity across business and plant systems; coordinated with plant floor owners."
  }
];

export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "fa_build_specification",
    "domainId": "agentic_workflows",
    "name": "Enterprise Intent Turned into Buildable Work",
    "tagline": "Break a bounded business problem into specifications, interfaces, dependencies, operating rules, and tests that define acceptable behavior.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_factory_implementation",
    "domainId": "agentic_workflows",
    "name": "A Controlled Path from Agent Work to Usable Software",
    "tagline": "Establish scoped assignments, execution boundaries, independent checks, correction, integration, and delivery evidence for an agreed development workflow.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_custom_delivery",
    "domainId": "agentic_workflows",
    "name": "Company-Owned Software the Team Can Operate and Evolve",
    "tagline": "Build a bounded solution around enterprise workflows and hand over reviewable code, tests, deployment guidance, ownership, and operating knowledge.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "agentic_workflows",
    "name": "Agents Connected to Systems with Controlled Authority",
    "tagline": "Integrate agents with existing applications through permitted reads and actions, validation, approvals, traceability, and failure handling.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_software_verification",
    "domainId": "agentic_workflows",
    "name": "Agent-Built Changes Verified Against Business Reality",
    "tagline": "Evaluate generated changes against business scenarios, source requirements, integrations, data behavior, and failure conditions before acceptance.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_handoffs",
    "domainId": "agentic_workflows",
    "name": "Work Moving Across Teams with Clear Ownership",
    "tagline": "Connect human and automated tasks with the context, decisions, next-owner routing, and exceptions needed for end-to-end work. Examples include routing supplier-cost changes through approved pricing decisions and downstream updates.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "agentic_workflows",
    "name": "Orders Connected Through Fulfillment, Billing and Collection",
    "tagline": "Implement traceable order-to-cash workflows with reconciled status and accountable action at critical handoffs.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "agentic_workflows",
    "name": "Purchasing and Payment Workflows with Controlled Exceptions",
    "tagline": "Connect purchase orders, receipts, and supplier invoices through approved matching rules, discrepancy review, and traceable authorization; scope the engagement to an agreed process or exception pattern.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "agentic_workflows",
    "name": "AI Pilots Turned into Supported Business Workflows",
    "tagline": "Carry a validated use case through system integration, evaluated behavior, business ownership, user readiness, and supported operation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "agentic_workflows",
    "name": "Automation That Can Recover or Hand Work to a Person",
    "tagline": "Preserve completed work, expose unresolved state, route exceptions, and exercise controlled retries or human intervention.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_enterprise_opportunities",
    "domainId": "commercial_solution",
    "name": "Enterprise Opportunities Aligned to Business Need and Delivery Capability",
    "tagline": "Identify enterprises where the operating need, strategic fit, investment readiness, and available delivery capability justify pursuing an engagement.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_executive_sponsorship",
    "domainId": "commercial_solution",
    "name": "An Enterprise Engagement Backed by an Accountable Sponsor",
    "tagline": "Establish executive ownership, decision and funding authority, business priorities, and organizational commitment before committing delivery resources.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_solution_engineering",
    "domainId": "commercial_solution",
    "name": "Customer Needs Translated into a Credible Solution",
    "tagline": "Connect discovery findings to a solution approach, dependencies, delivery responsibilities, and measurable business value.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_business_case",
    "domainId": "commercial_solution",
    "name": "An Investment Case Executives Can Defend",
    "tagline": "Make costs, benefits, risks, alternatives, and assumptions clear enough to support an informed buying decision.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_solution_proof",
    "domainId": "commercial_solution",
    "name": "Solution Value Demonstrated in the Customer\u2019s Business",
    "tagline": "Use representative customer workflows, data, and constraints in demonstrations or bounded proofs of value to test the proposed solution before commitment.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_product_commercialization",
    "domainId": "commercial_solution",
    "name": "A Product Offering Enterprises Can Buy and Adopt",
    "tagline": "Help a product team turn its capabilities into an enterprise offering with clear use cases, value, packaging, implementation requirements, support, and commercial boundaries.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_engagement_scope",
    "domainId": "commercial_solution",
    "name": "An Engagement Scoped to Deliver Its Promise",
    "tagline": "Define the result, inclusions, exclusions, milestones, acceptance, customer responsibilities, and change process before commitment.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_commercial_terms",
    "domainId": "commercial_solution",
    "name": "Commercial Terms That Support Successful Delivery",
    "tagline": "Align pricing, responsibilities, dependencies, risk allocation, and acceptance with what both parties can deliver.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_enterprise_close",
    "domainId": "commercial_solution",
    "name": "Complex Enterprise Engagements Brought to Close",
    "tagline": "Lead solution and commercial discussions through negotiation, resolution of buying concerns, and agreement, independently or alongside a commercial leader within the agreed mandate.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_sales_delivery_handoff",
    "domainId": "commercial_solution",
    "name": "Customer Commitments Carried from Sale into Delivery",
    "tagline": "Transfer the business intent, decisions, obligations, and success measures into accountable delivery ownership.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge_financial",
    "name": "Consistent Master Data with Accountable Owners",
    "tagline": "Reconcile customer, supplier, product, and account records and establish stewardship and maintenance rules.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge_financial",
    "name": "Migrated Data Reconciled to Its Source",
    "tagline": "Rehearse conversion and validate agreed balances, record populations, history, and exception treatment with business owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge_financial",
    "name": "A Company-Owned Data Foundation for People and Agents",
    "tagline": "Connect enterprise information with traceable sources, quality checks, governed access, reliable refresh, and accountable ownership, including the context agents are permitted to use.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge_financial",
    "name": "Enterprise Memory People and Agents Can Use",
    "tagline": "Capture operating knowledge, decisions, business rules, exceptions, and lessons in maintained sources with permissions, provenance, and ownership, so they remain usable when people or systems change.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_operating_rules",
    "domainId": "data_knowledge_financial",
    "name": "Operating Rules Turned into Testable Requirements",
    "tagline": "Translate frontline knowledge, legacy behavior, spreadsheet logic, and exceptions into business-validated requirements and acceptance examples.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge_financial",
    "name": "Business Answers Supported by Authorized Sources",
    "tagline": "Deliver reporting, analysis, or AI-assisted retrieval with agreed definitions, source traceability, access controls, and visible uncertainty.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "data_knowledge_financial",
    "name": "A Reliable Financial Close with Reconciled Balances",
    "tagline": "Connect operating transactions to the books and establish a close calendar, reconciliations, and accountable resolution of differences.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "data_knowledge_financial",
    "name": "Consolidated Financial Reporting Across Entities",
    "tagline": "Align account structures, acquired-entity records, consolidation rules, intercompany treatment, and historical traceability.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "data_knowledge_financial",
    "name": "Integrated Planning with Budgets, Forecasts and Actuals",
    "tagline": "Align sales, supply, operations, and Finance around shared assumptions, constraints, budgets, forecasts, and explainable variances.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_working_capital",
    "domainId": "data_knowledge_financial",
    "name": "Working Capital and Profitability the Business Can Act On",
    "tagline": "Connect inventory, receivables, payables, and cost-to-serve with financial results to identify owned actions on working capital and profitability.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "as_enterprise_architecture",
    "domainId": "architecture_systems",
    "name": "An Enterprise Architecture Grounded in How the Business Works",
    "tagline": "Map people, operating rules, workflows, data, applications, and dependencies into a target architecture and transition path.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_existing_value",
    "domainId": "architecture_systems",
    "name": "A Simpler Application Landscape That Works Better",
    "tagline": "Improve useful systems, remove agreed duplication, and reduce unnecessary interfaces and workarounds without losing required behavior.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_selection_partners",
    "domainId": "architecture_systems",
    "name": "Software and Partners Proven Against Operating Requirements",
    "tagline": "Evaluate products and delivery partners against representative business scenarios, exceptions, lifecycle costs, and implementation responsibilities.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "architecture_systems",
    "name": "ERP That Supports Daily Operations",
    "tagline": "Lead requirements, migration, integrations, testing, cutover, and stabilization around the enterprise\u2019s end-to-end operating scenarios.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_connect_applications",
    "domainId": "architecture_systems",
    "name": "Connected Systems with Reconciled Transactions",
    "tagline": "Establish system-of-record boundaries and dependable exchanges with validation, exception ownership, monitoring, and safe recovery.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "as_legacy_modernization",
    "domainId": "architecture_systems",
    "name": "Legacy Systems Modernized with Essential Behavior Preserved",
    "tagline": "Make operating rules and dependencies explicit, then lead staged replacement or modernization with representative behavior checks.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "architecture_systems",
    "name": "Acquired Businesses Operating Together",
    "tagline": "Connect applications, information, and cross-entity operations through a phased integration with accountable business owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_carve_out",
    "domainId": "architecture_systems",
    "name": "A Separated Business Ready to Operate",
    "tagline": "Deliver the agreed systems, data, service transitions, and rehearsed Day 1 capabilities for independent operation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_operations_support",
    "domainId": "architecture_systems",
    "name": "Plant and Warehouse Systems That Fit the Work",
    "tagline": "Implement production, inventory, quality, maintenance, and warehouse capabilities around real frontline tasks and exceptions.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "architecture_systems",
    "name": "A Rehearsed, Business-Ready Go-Live",
    "tagline": "Bring data, interfaces, people, access, support, recovery, and go/no-go decisions together for a controlled transition.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "td_transformation_delivery",
    "domainId": "transformation_delivery",
    "name": "Business Priorities Carried into Operating Results",
    "tagline": "Lead the transformation mandate from agreed direction through implementation, adoption, and evaluation of operating results.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_roadmap",
    "domainId": "transformation_delivery",
    "name": "A Transformation Roadmap the Business Can Execute",
    "tagline": "Sequence investment and change around business dependencies, readiness, capacity, and achievable milestones.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_partner_bench",
    "domainId": "transformation_delivery",
    "name": "Teams Built to Own Delivery",
    "tagline": "Build and lead internal teams and delivery partners with the capability, decision rights, and accountability to carry the work.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "transformation_delivery",
    "name": "Delivery Commitments Backed by Capacity and Decisions",
    "tagline": "Coordinate resources, dependencies, milestones, decisions, and scope changes against an achievable delivery baseline.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "transformation_delivery",
    "name": "Stalled Transformation Back on Course",
    "tagline": "Diagnose technical, organizational, and commercial obstacles, reset the baseline, and deliver a demonstrable recovery milestone.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_stakeholder_alignment",
    "domainId": "transformation_delivery",
    "name": "Leaders and Operators Aligned on the Work",
    "tagline": "Resolve conflicting priorities and establish shared decisions, operating ownership, and useful executive and board communication.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "transformation_delivery",
    "name": "Partners Accountable for Working Results",
    "tagline": "Connect vendor obligations to demonstrable milestones, acceptance evidence, corrective action, and commercial escalation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "transformation_delivery",
    "name": "AI Investment Directed toward Useful Business Capabilities",
    "tagline": "Select and sequence business-owned AI use cases, with evaluation criteria and explicit decisions to continue, expand, or stop.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "transformation_delivery",
    "name": "Business Value Verified After Go-Live",
    "tagline": "Compare adoption and operating results with the agreed baseline, then lead corrective work where benefits fall short.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "td_delivery_learning",
    "domainId": "transformation_delivery",
    "name": "Delivery Experience Turned into Better Methods",
    "tagline": "Convert customer feedback, recurring failures, and successful delivery practices into reusable methods, standards, and product improvements for the delivery organization.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_modern_dept",
    "domainId": "technology_operations",
    "name": "An IT Organization Accountable to the Business",
    "tagline": "Establish service ownership, internal capability, partner coverage, investment priorities, and an operating cadence tied to business needs.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_infra_modernization",
    "domainId": "technology_operations",
    "name": "Infrastructure Transitions with Services Intact",
    "tagline": "Move or modernize agreed workloads with tested dependencies, security, recovery, monitoring, and operational handover.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_dependable_support",
    "domainId": "technology_operations",
    "name": "Support That Reaches the People Doing the Work",
    "tagline": "Align support coverage, incident routing, escalation, and service restoration with sites, shifts, and critical operations.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_agentic_runtime",
    "domainId": "technology_operations",
    "name": "AI Workloads the Business Can Operate and Support",
    "tagline": "Establish monitoring, cost visibility, deployment, intervention, recovery, and named service ownership for bounded agentic workloads.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_access_control",
    "domainId": "technology_operations",
    "name": "Access and Agent Authority Matched to Responsibility",
    "tagline": "Define and test employee, partner, and agent permissions, revocation, approval boundaries, and separation of reasoning from execution authority.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_security_remediation",
    "domainId": "technology_operations",
    "name": "Security Gaps Closed and Retested",
    "tagline": "Coordinate prioritized remediation, appropriate retesting, and accountable decisions on remaining exposure.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "technology_operations",
    "name": "Critical Services Restored Through a Practiced Response",
    "tagline": "Exercise incident coordination, backup recovery, restoration dependencies, communications, and business continuity against agreed scenarios.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_plant_responsibilities",
    "domainId": "technology_operations",
    "name": "Production Technology with Clear Ownership and Boundaries",
    "tagline": "Coordinate IT and plant engineering around support, controlled connectivity, maintenance, and production-impacting changes.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_process_adoption",
    "domainId": "technology_operations",
    "name": "Teams Ready to Operate New Processes Across Sites",
    "tagline": "Deliver practical training, frontline tools, local readiness, staged adoption at the agreed sites, and stabilization with named operating owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "technology_operations",
    "name": "Financial and Operating Controls Preserved Through Change",
    "tagline": "Keep spending authority, payment approvals, separation of duties, review, and transaction evidence effective as software and agentic workflows change.",
    "situation": "",
    "deliverables": []
  }
];

export const LEGACY_OUTCOME_ALIASES: Record<string, string> = {
  "bs_erp_migration": "bs_modernize_erp",
  "bs_mes_scada_bridge": "bs_connect_applications",
  "bs_wms_tms_integration": "bs_connect_applications",
  "dk_ai_rag_foundation": "dk_data_foundation",
  "dk_analytics_reporting_cadence": "dk_repeatable_analytics",
  "dk_bi_data_lakehouse_governance": "dk_repeatable_analytics",
  "dk_business_rules_codification": "dk_operating_rules",
  "dk_master_data_governance": "dk_master_records",
  "dk_self_service_bi": "dk_repeatable_analytics",
  "fs_fast_close_reconciliation": "fs_close_repeatability",
  "fs_margin_leakage_telemetry": "fs_working_capital",
  "fs_unified_chart_of_accounts": "fs_ma_financial_structure",
  "it_cyber_incident_response": "it_disaster_recovery",
  "it_erp_selection_governance": "bs_selection_partners",
  "it_erp_vendor_turnaround": "bs_modernize_erp",
  "it_team_build_vendor_rightsizing": "it_modern_dept",
  "ld_board_visibility": "ld_stakeholder_alignment",
  "ld_fractional_cio_mandate": "ld_roadmap",
  "ld_ma_integration_flight_control": "ld_capacity_plan",
  "ld_sow_scope_audit": "ld_vendor_commitments",
  "wa_field_service_work_order_mesh": "wa_handoffs"
};

export const PUBLIC_CATALOG_REVISION = {
  "version": "outcome-catalog-2026-10-13-v5",
  "public_hash": "02056777d9487bc3cfdf497c39ac8741d853330d2c2303232ec8c2e5fe8692b8",
  "count": 60
};

export const RETIRED_OUTCOME_IDS: string[] = ["bs_lifecycle_control", "dk_ai_data_readiness", "dk_operational_diagnostics", "dk_preserve_memory", "dk_rag_search", "dk_self_service_bi", "fa_engineering_context", "fa_execution_control", "fa_harness_integration", "fa_legacy_modernization", "fa_multi_agent_delivery", "fa_release_recovery", "fs_abc_profitability", "fs_budget_forecast_actuals", "fs_reconciliation", "fs_spend_payment_controls", "fs_unified_cfo_view", "it_monitoring_response", "it_plant_floor_connect", "ld_ai_decision_rights", "ld_board_visibility", "wa_exception_routing", "wa_mobile_capture", "wa_multi_site_process", "wa_procure_to_pay", "wa_supplier_cost_pricing"];
