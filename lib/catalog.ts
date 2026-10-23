// Generated from approved Operations public export. Do not edit outcome copy here.
// Revision: outcome-catalog-2026-10-15-v6; SHA256: cbdd56e3d877f51474f7bf8f10280ee9391f12f9db8cc3a803c5c2e270639be5; 60 outcomes, ten per category.

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
    "id": "cs_enterprise_opportunities",
    "domainId": "commercial_solution",
    "name": "Enterprise Opportunities Worth Pursuing",
    "tagline": "Decide which enterprise opportunities justify investment based on operating need, readiness, strategic fit and delivery capability.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_executive_sponsorship",
    "domainId": "commercial_solution",
    "name": "An Enterprise Engagement Backed by an Accountable Sponsor",
    "tagline": "Establish executive ownership, funding authority and business priorities before committing delivery resources.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_solution_engineering",
    "domainId": "commercial_solution",
    "name": "Operating Needs Translated into a Credible Solution Design",
    "tagline": "Turn discovery findings into a solution approach with clear dependencies, delivery responsibilities and measurable value.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_business_case",
    "domainId": "commercial_solution",
    "name": "An Investment Case Executives Can Defend",
    "tagline": "Make costs, benefits, risks, alternatives and assumptions clear enough for an informed investment decision.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_solution_proof",
    "domainId": "commercial_solution",
    "name": "Solution Value Demonstrated Before Commitment",
    "tagline": "Test the proposed solution against representative workflows, data and constraints before making a larger commitment.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_product_commercialization",
    "domainId": "commercial_solution",
    "name": "A Product Offering Enterprises Can Buy and Adopt",
    "tagline": "Give an enterprise offering clear use cases, value, packaging, implementation requirements and support commitments.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_engagement_scope",
    "domainId": "commercial_solution",
    "name": "An Engagement Scoped to Deliver Its Promise",
    "tagline": "Agree the result, scope, milestones, acceptance criteria and customer responsibilities before work begins.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_commercial_terms",
    "domainId": "commercial_solution",
    "name": "Commercial Terms That Support Successful Delivery",
    "tagline": "Align pricing, obligations, dependencies and risk allocation with what both parties can deliver.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_enterprise_close",
    "domainId": "commercial_solution",
    "name": "Complex Enterprise Engagements Brought to Signed Agreement",
    "tagline": "Resolve buying concerns and lead solution and commercial negotiations through to agreement within the agreed mandate.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "cs_sales_delivery_handoff",
    "domainId": "commercial_solution",
    "name": "Customer Commitments Carried from Sale into Delivery",
    "tagline": "Carry the business intent, obligations and success measures into accountable delivery ownership.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "td_transformation_delivery",
    "domainId": "transformation_delivery",
    "name": "Business Priorities Realized in Daily Operations",
    "tagline": "Put executive leadership behind the full transformation, from agreed direction through implementation, adoption and operating results.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_roadmap",
    "domainId": "transformation_delivery",
    "name": "A Transformation Roadmap the Business Can Execute",
    "tagline": "Sequence investment and change around business dependencies, readiness, capacity and achievable milestones.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_partner_bench",
    "domainId": "transformation_delivery",
    "name": "Teams Built to Own Delivery",
    "tagline": "Build and lead internal teams and partners with the capability, authority and accountability to carry the work.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "transformation_delivery",
    "name": "A Delivery Plan Backed by Resources and Decisions",
    "tagline": "Coordinate people, dependencies, milestones and decisions against an achievable delivery baseline.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "transformation_delivery",
    "name": "Stalled Transformation Back on Course",
    "tagline": "Diagnose the obstacles, reset the delivery baseline and demonstrate a recovery milestone.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_stakeholder_alignment",
    "domainId": "transformation_delivery",
    "name": "Leaders and Operators Aligned on the Work",
    "tagline": "Resolve competing priorities through shared decisions, operating ownership and clear executive communication.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "transformation_delivery",
    "name": "Partners Accountable for Working Results",
    "tagline": "Tie vendor commitments to demonstrable results, acceptance evidence and corrective action.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "transformation_delivery",
    "name": "AI Investments with Clear Business Priorities and Success Measures",
    "tagline": "Prioritize business-owned AI use cases with clear measures and decisions to continue, expand or stop.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "transformation_delivery",
    "name": "Business Value Verified and Delivery Improved After Go-Live",
    "tagline": "Measure operating results against the business case, correct shortfalls and carry proven lessons into subsequent delivery.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "proposed_regulated_operations",
    "domainId": "transformation_delivery",
    "name": "SOC 2 and Regulatory Readiness with Traceable Evidence",
    "tagline": "Prepare the controls, operating records and accountable evidence needed for the agreed SOC 2 examination or industry-specific review.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "as_enterprise_architecture",
    "domainId": "architecture_systems",
    "name": "An Enterprise Architecture Grounded in How the Business Works",
    "tagline": "Connect people, rules, workflows, data and applications in a practical target architecture and transition path.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_existing_value",
    "domainId": "architecture_systems",
    "name": "An Application Landscape with Less Duplication and Complexity",
    "tagline": "Improve useful systems and remove unnecessary duplication, interfaces and workarounds while preserving required behavior.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_selection_partners",
    "domainId": "architecture_systems",
    "name": "Software and Partners Proven Against Operating Requirements",
    "tagline": "Evaluate software and delivery partners against real operating scenarios, exceptions, lifecycle costs and responsibilities.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "architecture_systems",
    "name": "ERP That Supports Daily Operations",
    "tagline": "Lead ERP requirements, migration, integration, testing and stabilization around end-to-end business operations.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_connect_applications",
    "domainId": "architecture_systems",
    "name": "Connected Systems with Reconciled Transactions",
    "tagline": "Establish dependable exchanges between systems with validation, exception ownership and safe recovery.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "as_legacy_modernization",
    "domainId": "architecture_systems",
    "name": "Legacy Systems Modernized Without Losing Essential Business Rules",
    "tagline": "Make embedded rules and dependencies explicit, then verify essential behavior through staged modernization.",
    "situation": "Scope: Map embedded business rules and dependencies, reconcile source data, and sequence migration or integration with retained systems. Relevant environments may include COBOL applications, AS/400, mainframe and legacy SQL systems.\n\nWhat you receive: A modernization scope, mapped rules and data, acceptance examples, and a staged transition plan.\n\nCompletion: Agreed business behavior and data reconcile through end-to-end testing and user acceptance, with ownership for cutover, recovery and ongoing operation.",
    "deliverables": []
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "architecture_systems",
    "name": "Acquired Businesses Operating Together",
    "tagline": "Integrate applications, information and cross-entity operations in phases with accountable business owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_carve_out",
    "domainId": "architecture_systems",
    "name": "A Separated Business Ready to Operate",
    "tagline": "Deliver the systems, data and service transitions needed for a rehearsed first day of independent operation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_operations_support",
    "domainId": "architecture_systems",
    "name": "Plant and Warehouse Applications That Fit the Work",
    "tagline": "Align production, inventory, quality, maintenance and warehouse applications with frontline tasks, traceability and exceptions.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "architecture_systems",
    "name": "A Rehearsed, Business-Ready Go-Live",
    "tagline": "Bring data, interfaces, people, support and recovery together for a controlled go-live decision and transition.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge_financial",
    "name": "Consistent Master Data with Accountable Owners",
    "tagline": "Reconcile customer, supplier, product and account records with clear stewardship and maintenance rules.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge_financial",
    "name": "Migrated Data Reconciled to Its Source",
    "tagline": "Rehearse conversion and validate balances, record populations, history and exceptions with business owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge_financial",
    "name": "A Company-Owned Data Foundation for People and Agents",
    "tagline": "Connect company information with traceable sources, quality checks, governed access and reliable refresh.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge_financial",
    "name": "Enterprise Memory People and Agents Can Use",
    "tagline": "Preserve operating knowledge, decisions and lessons in maintained sources that remain usable as people and systems change.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_operating_rules",
    "domainId": "data_knowledge_financial",
    "name": "Operating Rules Turned into Testable Requirements",
    "tagline": "Translate frontline knowledge, legacy behavior and spreadsheet logic into validated rules and acceptance examples.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge_financial",
    "name": "Business Reporting and Answers from Trusted, Traceable Sources",
    "tagline": "Give people reporting, analysis and AI-assisted answers with agreed definitions, source traceability and visible uncertainty.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "data_knowledge_financial",
    "name": "A Reliable Financial Close with Reconciled Balances",
    "tagline": "Connect operating transactions to the books with a repeatable close calendar and accountable reconciliation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "data_knowledge_financial",
    "name": "Consolidated Financial Reporting Across Entities",
    "tagline": "Align account structures, consolidation rules and intercompany treatment while preserving historical traceability.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "data_knowledge_financial",
    "name": "Integrated Planning with Budgets, Forecasts and Actuals",
    "tagline": "Connect sales, supply, operations and Finance through shared assumptions, budgets, forecasts and explainable variances.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_working_capital",
    "domainId": "data_knowledge_financial",
    "name": "Working Capital and Profitability Connected to Operating Decisions",
    "tagline": "Link inventory, receivables, payables and cost-to-serve to decisions on cash and profitability with named owners.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_build_specification",
    "domainId": "agentic_workflows",
    "name": "A Build-Ready Software Specification with Clear Interfaces and Tests",
    "tagline": "Define the software boundaries, interfaces, dependencies and acceptance tests needed to build an agreed solution.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_factory_implementation",
    "domainId": "agentic_workflows",
    "name": "A Governed Delivery Pipeline for Agent-Built Software",
    "tagline": "Establish scoped agent assignments, execution boundaries, independent checks, correction and delivery evidence.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_custom_delivery",
    "domainId": "agentic_workflows",
    "name": "Company-Owned Software the Team Can Operate and Evolve",
    "tagline": "Deliver a bounded solution with reviewable code, tests, deployment guidance and the knowledge to maintain it.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "agentic_workflows",
    "name": "Agents Connected to Systems with Controlled Authority",
    "tagline": "Connect agents to enterprise applications through permitted actions, validation, approvals and traceable failure handling.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fa_software_verification",
    "domainId": "agentic_workflows",
    "name": "Agent-Built Software Verified Against Operating Scenarios and Rules",
    "tagline": "Test generated changes against business requirements, integrations, data behavior and failure conditions before acceptance.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_handoffs",
    "domainId": "agentic_workflows",
    "name": "Connected Workflows with Clear Handoffs and Ownership",
    "tagline": "Connect human and automated work with the context, decisions and exception routing each next owner needs.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "agentic_workflows",
    "name": "Orders Connected Through Fulfillment, Billing and Collection",
    "tagline": "Make order-to-cash status traceable and reconciled, with accountable action at critical handoffs.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "agentic_workflows",
    "name": "Purchase Orders, Receipts and Invoices Matched with Controlled Approvals",
    "tagline": "Connect purchase orders, receipts and invoices through agreed matching rules, discrepancy review and traceable authorization.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "agentic_workflows",
    "name": "AI Pilots Turned into Supported Business Operations",
    "tagline": "Carry validated AI use cases into daily operation with integration, evaluated behavior, support ownership, monitoring, cost visibility and recovery.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "agentic_workflows",
    "name": "Automation That Can Recover or Hand Work to a Person",
    "tagline": "Preserve completed work, expose exceptions and exercise controlled retries or human intervention.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_modern_dept",
    "domainId": "technology_operations",
    "name": "An IT Organization Accountable for Service, Investment and Risk",
    "tagline": "Align internal IT, business leaders and delivery partners around service ownership, investment priorities and accountable execution.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_infra_modernization",
    "domainId": "technology_operations",
    "name": "Modernized Infrastructure with Tested Service Continuity",
    "tagline": "Modernize agreed workloads with tested dependencies, security, recovery and operational handover.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_dependable_support",
    "domainId": "technology_operations",
    "name": "Reliable IT Services Across Sites and Shifts",
    "tagline": "Put infrastructure, networks, end-user services and support under clear ownership, monitoring and incident management.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_monitoring_response",
    "domainId": "technology_operations",
    "name": "Security Monitoring and Incident Response Ready to Operate",
    "tagline": "Establish accountable monitoring, escalation, containment decisions and exercised incident response with the appropriate teams and providers.",
    "situation": "Scope: Define severity, escalation, communication, containment decisions, and restoration ownership. Exercise realistic incident scenarios and close gaps.\n\nWhat you receive: An incident response playbook and contact model. Exercise evidence and corrective actions.\n\nCompletion: A representative exercise shows timely escalation, named decision-makers, coordinated recovery, and retained incident evidence.\n\nBoundaries: Legal notification, forensic investigation, and regulated incident duties remain with appropriately authorized specialists and executives.",
    "deliverables": []
  },
  {
    "id": "it_access_control",
    "domainId": "technology_operations",
    "name": "Access and Agent Authority Matched to Responsibility",
    "tagline": "Define and test employee, partner and agent permissions, approval boundaries and revocation.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_security_remediation",
    "domainId": "technology_operations",
    "name": "Security Gaps Closed and Retested",
    "tagline": "Close prioritized security gaps, verify the fixes and assign accountable decisions on remaining exposure.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "technology_operations",
    "name": "Critical Services Restored Through a Practiced Response",
    "tagline": "Practice incident coordination, backup recovery, communications and restoration against agreed business scenarios.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "it_plant_floor_connect",
    "domainId": "technology_operations",
    "name": "Plant Information Connected to Enterprise Workflows",
    "tagline": "Connect production information with business systems through validated interfaces, working with plant engineering and OT owners.",
    "situation": "Scope: Define required signals, interfaces, ownership, and permitted traffic. Coordinate controlled connectivity and validation with plant engineering and security owners.\n\nWhat you receive: A plant-to-business interface and access design. Validated data exchanges and operating monitoring procedures.\n\nCompletion: Agreed production information reaches its business destination with verified access boundaries and a known response to interface failure.\n\nBoundaries: Changes to controllers, safety systems, or production networks require their qualified owners; physical process behavior is outside an information-interface mandate.",
    "deliverables": []
  },
  {
    "id": "wa_process_adoption",
    "domainId": "technology_operations",
    "name": "Teams Ready to Operate New Processes Across Sites",
    "tagline": "Equip teams with practical training, frontline tools, local readiness and support through stabilization.",
    "situation": "",
    "deliverables": []
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "technology_operations",
    "name": "Financial and Operating Controls Preserved Through Change",
    "tagline": "Keep spending authority, payment approvals, separation of duties and transaction evidence effective as systems change.",
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

export const PUBLIC_CATALOG_REVISION = {"version":"outcome-catalog-2026-10-15-v6","public_hash":"cbdd56e3d877f51474f7bf8f10280ee9391f12f9db8cc3a803c5c2e270639be5","count":60};

export const RETIRED_OUTCOME_IDS: string[] = ["bs_lifecycle_control","dk_ai_data_readiness","dk_operational_diagnostics","dk_preserve_memory","dk_rag_search","dk_self_service_bi","fa_engineering_context","fa_execution_control","fa_harness_integration","fa_legacy_modernization","fa_multi_agent_delivery","fa_release_recovery","fs_abc_profitability","fs_budget_forecast_actuals","fs_reconciliation","fs_spend_payment_controls","fs_unified_cfo_view","ld_ai_decision_rights","ld_board_visibility","wa_exception_routing","wa_mobile_capture","wa_multi_site_process","wa_procure_to_pay","wa_supplier_cost_pricing"];
