// Generated from approved Operations public export. Do not edit outcome copy here.
// Revision: outcome-catalog-2026-10-10; SHA256: 93edfc7c334a17109267f5277603a1d2ef9bd198c2df873a3ef76b69e30565a3; 60 outcomes, ten per category.

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
    "essence": "End-to-end handoff elimination, order-to-cash, three-way invoice matching, shop-floor capture, and resilient automation."
  }
];

export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "bs_existing_value",
    "domainId": "business_systems",
    "name": "Application Value & Simplification",
    "tagline": "Improve the systems you already own and consolidate tools that add cost without enough operating value.",
    "situation": "Scope: Map application use and operating needs against licenses, interfaces, and support cost. Improve selected capabilities and retire agreed duplication safely.\n\nWhat you receive: An application value and simplification assessment. Implemented improvements and a controlled retirement plan.\n\nCompletion: Users complete the agreed work in the retained applications; redundant tools and workarounds have an explicit disposition.\n\nBoundaries: License cancellation, data retention, and vendor termination require authorized decisions; cost reduction depends on actual contractual options.",
    "deliverables": []
  },
  {
    "id": "bs_selection_partners",
    "domainId": "business_systems",
    "name": "Software & Partner Selection",
    "tagline": "Lead a selection process that tests software and delivery partners against your business requirements and implementation needs.",
    "situation": "Scope: Translate operating requirements into representative selection scenarios. Assess product gaps, delivery approach, lifecycle cost, and partner responsibilities.\n\nWhat you receive: A requirements and evaluation pack. A recommendation with scenario evidence, gaps, and delivery assumptions.\n\nCompletion: Decision-makers can compare candidates against the same business scenarios and understand the consequences of the selected option.\n\nBoundaries: Selection does not certify every module or guarantee implementation success; vendor claims remain subject to demonstration and contract terms.",
    "deliverables": []
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "business_systems",
    "name": "ERP Implementation & Modernization",
    "tagline": "Deliver ERP change from operating requirements and design through migration, go-live, and stabilization.",
    "situation": "Scope: Lead operating requirements, design decisions, migration, integrations, testing, and rollout. Coordinate cutover and stabilization with business and specialist implementation owners.\n\nWhat you receive: An implementation plan with design and configuration decisions. Reconciled migration, business acceptance, and stabilization records.\n\nCompletion: Business owners accept agreed end-to-end ERP scenarios and the live service has clear support and exception ownership.\n\nBoundaries: Hands-on product configuration and specialist modules are assigned explicitly; broad ERP leadership is not a claim to every vendor certification.",
    "deliverables": []
  },
  {
    "id": "bs_connect_applications",
    "domainId": "business_systems",
    "name": "Systems Integration Delivery",
    "tagline": "Implement reliable connections between applications so information moves without repeated entry and conflicting records.",
    "situation": "Scope: Define system-of-record boundaries, interface rules, and reconciliation. Implement agreed exchanges with validation, monitoring, and recoverable failures.\n\nWhat you receive: Interface mappings and ownership rules. Working integrations with reconciliation checks and recovery instructions.\n\nCompletion: Representative records move correctly between systems; failed exchanges are detected and safely reprocessed without duplicate business effects.\n\nBoundaries: Access, vendor API limits, and supported interfaces determine feasible scope; changes to source applications require their owners' agreement.",
    "deliverables": []
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "business_systems",
    "name": "Acquisition Integration Delivery",
    "tagline": "Bring acquired businesses into connected systems, shared information, and coordinated operations.",
    "situation": "Scope: Map retained applications, cross-entity processes, and information boundaries. Deliver phased integration and consolidation with operating owners.\n\nWhat you receive: A target application and data integration plan. Implemented cross-entity scenarios and transition ownership.\n\nCompletion: The agreed cross-entity business scenarios run with reconciled information and clear ownership of retained and integrated services.\n\nBoundaries: Legal entity design, deal commitments, and accounting treatment remain with their accountable owners; integration does not imply every system must be replaced.",
    "deliverables": []
  },
  {
    "id": "bs_carve_out",
    "domainId": "business_systems",
    "name": "Carve-Out & Separation Delivery",
    "tagline": "Deliver the systems, data, and service transitions a separating business needs to operate independently.",
    "situation": "Scope: Identify separation boundaries, Day 1 needs, and transition-service dependencies. Deliver data and service transitions with rehearsed operational readiness.\n\nWhat you receive: A separation roadmap and dependency exit register. Day 1 readiness, fallback, and handover evidence.\n\nCompletion: Critical standalone scenarios are rehearsed; business owners accept remaining risks and transition-service exit responsibilities.\n\nBoundaries: Exit dates depend on negotiated agreements, access rights, and supplier readiness; legal separation decisions are outside the technical delivery mandate.",
    "deliverables": []
  },
  {
    "id": "bs_operations_support",
    "domainId": "business_systems",
    "name": "Plant & Warehouse Systems Implementation",
    "tagline": "Implement production, inventory, and maintenance systems around the work people actually perform.",
    "situation": "Scope: Map actual scheduling, inventory, quality, and maintenance scenarios. Coordinate application implementation, interfaces, devices, and user acceptance.\n\nWhat you receive: A frontline requirements and scenario pack. Implemented application workflows and operating support guidance.\n\nCompletion: Frontline owners complete agreed scenarios in the working environment and can resolve the expected exceptions.\n\nBoundaries: Machine-control and safety-system changes require qualified engineering owners; business application delivery is not PLC or safety certification.",
    "deliverables": []
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "business_systems",
    "name": "Cutover & Go-Live Leadership",
    "tagline": "Coordinate the transition into live operation with clear readiness decisions, recovery plans, and post-launch support.",
    "situation": "Scope: Integrate data, interfaces, access, user readiness, support, and timed cutover tasks. Rehearse go/no-go decisions, recovery triggers, and post-launch stabilization.\n\nWhat you receive: A cutover runbook and readiness evidence pack. Recovery decision criteria and a stabilization ownership roster.\n\nCompletion: The rehearsal meets agreed critical scenarios; authorized owners make the launch decision with visible risks and recovery options.\n\nBoundaries: No cutover is represented as incapable of failure; outage tolerance, rollback feasibility, and launch authority are agreed explicitly.",
    "deliverables": []
  },
  {
    "id": "bs_lifecycle_control",
    "domainId": "business_systems",
    "name": "Application Upgrade & Lifecycle Delivery",
    "tagline": "Deliver upgrades, replacements, and retirements with tested dependencies and a controlled transition for the business.",
    "situation": "Scope: Assess application dependencies and retained information. Deliver testing, release sequencing, user transition, and controlled retirement.\n\nWhat you receive: A lifecycle transition plan and dependency inventory. Regression results, data retention disposition, and support handover.\n\nCompletion: The replacement or upgrade passes agreed business regression checks; retired services have no unowned required dependency.\n\nBoundaries: Vendor support limitations, records retention, and contractual termination remain explicit constraints on the transition.",
    "deliverables": []
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "business_systems",
    "name": "Enterprise Agent Integration",
    "tagline": "Connect AI agents to existing enterprise systems with authorized access, tested actions, and clear operating limits.",
    "situation": "Scope: Design agent interfaces around authorized reads, permitted actions, and source-system rules. Implement validation, approval, traceability, and failure handling.\n\nWhat you receive: A bounded agent integration and permission map. Tested business actions with human intervention and audit paths.\n\nCompletion: An agreed cross-application scenario completes with correct permissions and authorized actions; denied and failed cases behave safely.\n\nBoundaries: Agents receive only agreed authority; vendor access restrictions and human approvals are not bypassed to make a demonstration work.",
    "deliverables": []
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge",
    "name": "Master Data Management",
    "tagline": "Establish consistent customer, supplier, product, and account records with clear ownership and maintenance rules.",
    "situation": "Scope: Define authoritative records, matching rules, cross-references, stewardship, and change approval. Clean and reconcile agreed record populations and establish maintenance controls.\n\nWhat you receive: A master-data model and stewardship rules. Reconciled records, exception dispositions, and change procedures.\n\nCompletion: Owners accept representative reconciliations and demonstrate how future duplicates or changes will be handled.\n\nBoundaries: The scope covers agreed record domains; business definitions and source-system ownership require the client's accountable decisions.",
    "deliverables": []
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge",
    "name": "Data Migration & Reconciliation",
    "tagline": "Migrate required data and history with tested conversions, reconciled results, and accountable resolution of exceptions.",
    "situation": "Scope: Profile sources and define conversion, cleansing, reconciliation, and retention rules. Rehearse migration and route discrepancies to accountable business owners.\n\nWhat you receive: A mapping and migration runbook. Reconciled trial loads, exception logs, and acceptance evidence.\n\nCompletion: Owners reconcile agreed record counts, balances, and sample histories; unresolved differences have an approved treatment.\n\nBoundaries: Records cannot be reconstructed without adequate sources; retention duties and acceptance tolerances are agreed before migration.",
    "deliverables": []
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge",
    "name": "Business Data Integration",
    "tagline": "Bring fragmented information together into a dependable foundation for reporting, applications, and AI.",
    "situation": "Scope: Connect agreed sources with lineage, refresh, quality checks, and ownership. Implement governed access and usable interfaces for downstream consumers.\n\nWhat you receive: A working data integration foundation. Source mappings, refresh monitoring, and access documentation.\n\nCompletion: Agreed datasets refresh reliably and users can trace material values to their sources and accountable owners.\n\nBoundaries: The foundation serves defined business uses; data rights, source availability, and quality limitations remain explicit.",
    "deliverables": []
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge",
    "name": "Reporting & Analytics Delivery",
    "tagline": "Deliver shared measures and repeatable business answers that teams can trace, refresh, and use.",
    "situation": "Scope: Define shared measures and source rules with business owners. Deliver repeatable reporting, refresh, drill-through, and user enablement.\n\nWhat you receive: A governed measure dictionary and reporting dataset. Usable reports with refresh and reconciliation checks.\n\nCompletion: Different users reproduce agreed measures from the same sources and explain material differences without rebuilding the calculation.\n\nBoundaries: Analysis reflects agreed definitions and source quality; a dashboard does not by itself establish causal explanation or financial assurance.",
    "deliverables": []
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge",
    "name": "Enterprise Knowledge Management",
    "tagline": "Organize company knowledge so people can find current guidance and know who maintains it.",
    "situation": "Scope: Organize knowledge around actual work, accountable authors, access, and review cycles. Implement findability and maintenance processes for agreed content.\n\nWhat you receive: A structured knowledge collection and ownership model. Search, review, and publication workflows.\n\nCompletion: Users find current answers to representative work questions and identify who maintains each source.\n\nBoundaries: Content owners remain responsible for accuracy and approval; restricted material retains its access boundaries.",
    "deliverables": []
  },
  {
    "id": "dk_preserve_memory",
    "domainId": "data_knowledge",
    "name": "Operational Knowledge Capture",
    "tagline": "Preserve the experience, decisions, and exceptions the business could lose when people or systems change.",
    "situation": "Scope: Elicit decisions, exceptions, and reasoning from experienced staff and historical sources. Package knowledge for the people inheriting the work.\n\nWhat you receive: An operating knowledge and exception record. Transition walkthroughs and successor validation evidence.\n\nCompletion: Successors can perform or explain agreed critical scenarios without depending on the departing person or retired system.\n\nBoundaries: Capture is limited by access to knowledgeable people and reliable records; uncertainty and conflicting accounts are recorded rather than invented away.",
    "deliverables": []
  },
  {
    "id": "dk_rag_search",
    "domainId": "data_knowledge",
    "name": "Enterprise AI Search",
    "tagline": "Implement AI-assisted search that gives employees useful answers linked to permitted company sources.",
    "situation": "Scope: Implement retrieval, source references, permissions, freshness, and insufficient-evidence behavior. Evaluate answers against representative business questions and misuse cases.\n\nWhat you receive: A bounded enterprise search service. A source-grounded evaluation set and maintenance procedures.\n\nCompletion: Agreed questions receive supported answers with usable references; restricted or unsupported questions behave according to policy.\n\nBoundaries: The system assists judgment and does not guarantee every answer; sensitive decisions retain designated human review.",
    "deliverables": []
  },
  {
    "id": "dk_ai_data_readiness",
    "domainId": "data_knowledge",
    "name": "AI Data & Context Readiness",
    "tagline": "Prepare the information, definitions, access, and context an AI use case needs to perform useful work.",
    "situation": "Scope: Assess required sources, definitions, access, quality, freshness, and decision context. Prepare agreed datasets and resolve or explicitly assign readiness gaps.\n\nWhat you receive: A use-case readiness assessment. Prepared information, context definitions, and an owned gap plan.\n\nCompletion: The intended use case passes agreed information and access checks, with unresolved limitations visible before deployment.\n\nBoundaries: Readiness is specific to the use case; a prepared dataset does not establish general AI capability or unlimited reuse rights.",
    "deliverables": []
  },
  {
    "id": "dk_operating_rules",
    "domainId": "data_knowledge",
    "name": "Business Rules & Requirements Discovery",
    "tagline": "Translate the real operation, including unwritten rules and spreadsheet logic, into requirements software can use.",
    "situation": "Scope: Work with frontline and business owners to expose decision rules, normal cases, and exceptions. Translate them into testable requirements and acceptance examples.\n\nWhat you receive: A business-rule and exception model. An implementation-ready requirements and acceptance pack.\n\nCompletion: Business owners validate representative normal and exception cases and agree how ambiguous decisions will be resolved.\n\nBoundaries: Discovery does not replace policy authority; unresolved rules and disagreements are assigned to named decision-makers before implementation.",
    "deliverables": []
  },
  {
    "id": "dk_operational_diagnostics",
    "domainId": "data_knowledge",
    "name": "Operational Performance Analysis",
    "tagline": "Identify the causes of delays, waste, and rework so the business can target improvements where they matter.",
    "situation": "Scope: Trace process steps and operating data with the people doing the work. Establish baselines, test contributing explanations, and prioritize interventions.\n\nWhat you receive: A performance baseline and cause analysis. An improvement backlog with owners and measurement plans.\n\nCompletion: Operating owners validate the evidence, contributing causes, and measures for judging the first agreed intervention.\n\nBoundaries: A diagnosis distinguishes evidence from hypothesis; savings and causal claims require subsequent validation rather than assumed correlation.",
    "deliverables": []
  },
  {
    "id": "fs_reconciliation",
    "domainId": "financial_systems",
    "name": "Operational & Financial Reconciliation",
    "tagline": "Connect operating transactions to financial records so differences become visible, explainable, and resolvable.",
    "situation": "Scope: Define matching logic, tolerances, source ownership, and exception treatment with Finance. Implement repeatable reconciliations and accountable investigation.\n\nWhat you receive: A reconciliation design and working controls. Exception queues with traceable source evidence.\n\nCompletion: Finance accepts agreed reconciliations and can explain or assign each remaining difference.\n\nBoundaries: Accounting judgments and final adjustments remain with authorized Finance owners; matching logic does not replace accounting signoff.",
    "deliverables": []
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "financial_systems",
    "name": "Financial Close Improvement",
    "tagline": "Implement a more dependable close with clearer ownership, stronger reconciliations, and less manual reconstruction.",
    "situation": "Scope: Map the close sequence and strengthen task ownership, reconciliations, and evidence. Implement a repeatable calendar and exception escalation.\n\nWhat you receive: A close operating plan and responsibility matrix. Working reconciliations, task controls, and supporting records.\n\nCompletion: An agreed close cycle completes against its calendar with traceable balances and an owned exception list.\n\nBoundaries: The engagement improves process and systems; statutory reporting judgments and independent audit opinions remain outside its mandate.",
    "deliverables": []
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "financial_systems",
    "name": "Acquisition Finance Integration",
    "tagline": "Integrate accounts, entity structures, and intercompany records while preserving the history Finance needs.",
    "situation": "Scope: Map accounts and entity relationships with Finance and preserve historical traceability. Implement agreed opening, intercompany, and consolidation scenarios.\n\nWhat you receive: Account and entity mappings with Finance decisions. Reconciled transition records and integration test evidence.\n\nCompletion: Finance validates opening mappings, intercompany treatment, and representative consolidated reporting against source history.\n\nBoundaries: Tax, legal entity, and accounting policy decisions require qualified owners; technical integration does not determine their treatment.",
    "deliverables": []
  },
  {
    "id": "fs_spend_payment_controls",
    "domainId": "financial_systems",
    "name": "Spend Approval & Payment Controls",
    "tagline": "Implement clear spending authority and payment controls so commitments and approvals remain visible and traceable.",
    "situation": "Scope: Define spending thresholds, approval ownership, segregation, and payment-release controls. Implement the agreed authorization workflow with Finance and procurement owners.\n\nWhat you receive: A spending and payment authority matrix. Configured approval paths, exception handling, and reviewable records.\n\nCompletion: Representative normal, exceptional, and restricted commitments follow the correct approval route before authorized payment release.\n\nBoundaries: This does not execute payments or confer bank authority; commercial terms, financial policy, and release permissions remain with authorized owners.",
    "deliverables": []
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "financial_systems",
    "name": "Financial Controls Through Change",
    "tagline": "Preserve approvals, separation of duties, and audit evidence as systems, workflows, and AI capabilities change.",
    "situation": "Scope: Map critical controls to new applications, integrations, workflows, and agent actions. Test authorization, separation of duties, and evidence retention through the transition.\n\nWhat you receive: A control-to-change mapping and responsibility record. Control test results and an owned remediation list.\n\nCompletion: Finance and control owners validate agreed scenarios and can trace approvals and changes across the new process.\n\nBoundaries: Control design supports oversight; it is not an independent audit opinion or a blanket compliance certification.",
    "deliverables": []
  },
  {
    "id": "fs_unified_cfo_view",
    "domainId": "financial_systems",
    "name": "Consolidated Financial Reporting",
    "tagline": "Deliver a consistent view across entities with traceable adjustments, eliminations, and reporting rules.",
    "situation": "Scope: Define reporting structures, mappings, consolidation rules, and eliminations. Deliver reconciled reporting with visible source and adjustment lineage.\n\nWhat you receive: A consolidated reporting model. Traceable reports and reconciliation procedures.\n\nCompletion: Finance reconciles the consolidated view to entity records and explains material adjustments and eliminations.\n\nBoundaries: Reporting follows Finance-approved policies; the work does not independently establish accounting or tax treatment.",
    "deliverables": []
  },
  {
    "id": "fs_budget_forecast_actuals",
    "domainId": "financial_systems",
    "name": "Budgeting & Forecasting Systems",
    "tagline": "Connect budgets and forecasts to operating drivers and actual results so Finance can explain changes and respond.",
    "situation": "Scope: Connect actuals, planning assumptions, drivers, versions, and approval cadence. Implement forecast updates and explainable variance analysis.\n\nWhat you receive: A budgeting and forecasting model or configured system. Driver mappings, version controls, and variance views.\n\nCompletion: Owners reconcile actuals and explain forecast revisions through explicit assumptions and operating drivers.\n\nBoundaries: Forecasts remain estimates; targets and financial commitments are approved by Finance and business leadership.",
    "deliverables": []
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "financial_systems",
    "name": "Integrated Business Planning",
    "tagline": "Bring sales, supply, operations, and Finance together around one achievable operating plan.",
    "situation": "Scope: Define shared planning inputs, constraints, timing, and decision ownership. Implement a planning cycle that resolves material conflicts.\n\nWhat you receive: A cross-functional planning model and cadence. An owned operating plan with constraint and decision records.\n\nCompletion: An agreed cycle produces one plan whose assumptions, constraints, and required decisions are understood by participating owners.\n\nBoundaries: The process exposes tradeoffs; it cannot remove physical capacity, supplier, market, or funding constraints by assumption.",
    "deliverables": []
  },
  {
    "id": "fs_working_capital",
    "domainId": "financial_systems",
    "name": "Working Capital Visibility",
    "tagline": "Connect inventory, receivables, and payables to show where cash is tied up and who can act.",
    "situation": "Scope: Connect financial balances to operational drivers and accountable teams. Build views and routines for reviewing controllable cash actions.\n\nWhat you receive: A reconciled working-capital view. An action register linking drivers, owners, and review dates.\n\nCompletion: Finance validates the view and operating owners agree actions on the largest relevant drivers.\n\nBoundaries: Cash-release estimates depend on actual actions and commercial conditions; supplier terms and collection decisions remain authorized business choices.",
    "deliverables": []
  },
  {
    "id": "fs_abc_profitability",
    "domainId": "financial_systems",
    "name": "Profitability & Cost-to-Serve Analysis",
    "tagline": "Reveal where products, customers, and services earn margin and where the cost of serving them erodes it.",
    "situation": "Scope: Connect operating activity and financial cost to agreed allocation rules. Test representative profitability and cost-to-serve scenarios with Finance.\n\nWhat you receive: A profitability model with visible assumptions. Decision views and reconciled sample calculations.\n\nCompletion: Finance validates source totals and representative allocations; decision-makers can explain the drivers behind material margins.\n\nBoundaries: Allocation is a model requiring agreed assumptions; it does not imply exact causation or replace financial accounting policy.",
    "deliverables": []
  },
  {
    "id": "it_modern_dept",
    "domainId": "it_ot_operations",
    "name": "IT Operating Model & Leadership",
    "tagline": "Organize IT people, services, and partners to support the business you run today and the capabilities you need next.",
    "situation": "Scope: Define service ownership, internal capability, partner coverage, and investment priorities. Establish practical governance and performance review with the business.\n\nWhat you receive: An IT operating model and responsibility map. A capability, sourcing, and service improvement plan.\n\nCompletion: Critical services have accountable owners, support coverage, escalation, and a funded plan for material capability gaps.\n\nBoundaries: Organizational design informs hiring and supplier decisions; employment, budgets, and contracting remain with authorized leaders.",
    "deliverables": []
  },
  {
    "id": "it_infra_modernization",
    "domainId": "it_ot_operations",
    "name": "Infrastructure & Cloud Migration",
    "tagline": "Deliver infrastructure transitions with tested dependencies, service continuity, and clear operational handover.",
    "situation": "Scope: Map workloads, dependencies, capacity, security requirements, and recovery needs. Deliver migration waves with validation and operational handover.\n\nWhat you receive: A workload migration and dependency plan. Tested transition records, operating documentation, and recovery procedures.\n\nCompletion: Representative workloads meet agreed service and recovery checks, with monitoring and ownership transferred to the operating team.\n\nBoundaries: Migration does not assume every workload belongs in the cloud; provider limits, application compatibility, and agreed outage windows constrain delivery.",
    "deliverables": []
  },
  {
    "id": "it_dependable_support",
    "domainId": "it_ot_operations",
    "name": "Service & Support Improvement",
    "tagline": "Implement support that reaches the right people across your sites, shifts, and critical business activities.",
    "situation": "Scope: Define service coverage, incident priority, routing, and escalation. Implement support processes and useful operating measures with service owners.\n\nWhat you receive: A support coverage and routing model. Working incident workflows and a service improvement baseline.\n\nCompletion: Representative incidents reach the right responders; users see status and service restoration is verified with the affected operation.\n\nBoundaries: Coverage and response targets depend on agreed staffing and contracts; an advisory engagement does not imply an unstaffed around-the-clock service.",
    "deliverables": []
  },
  {
    "id": "it_agentic_runtime",
    "domainId": "it_ot_operations",
    "name": "AI Runtime Operations",
    "tagline": "Put business AI into a supported environment with monitoring, cost visibility, controlled deployment, and recovery.",
    "situation": "Scope: Establish deployment, monitoring, access, usage and cost visibility, intervention, and recovery. Assign support ownership for the agreed agentic workloads.\n\nWhat you receive: A configured runtime operating model. Dashboards, runbooks, and tested stop, restore, and release procedures.\n\nCompletion: The agreed workload can be deployed, observed, interrupted, recovered, and handed to a named service owner.\n\nBoundaries: Runtime reliability and cost targets depend on workload, providers, and infrastructure; no unlimited autonomous execution or guaranteed provider availability is implied.",
    "deliverables": []
  },
  {
    "id": "it_security_remediation",
    "domainId": "it_ot_operations",
    "name": "Security Remediation Delivery",
    "tagline": "Coordinate security improvements around business exposure and verify that corrective work resolves the identified weaknesses.",
    "situation": "Scope: Prioritize exposure and coordinate remediation with security and service owners. Track fixes, appropriate retesting, and residual-risk decisions.\n\nWhat you receive: An accountable remediation backlog. Verification evidence and a residual-risk register.\n\nCompletion: Agreed corrective work is completed and retested by appropriate owners; unresolved exposure has an explicit accepted disposition.\n\nBoundaries: Specialist testing, certification, and regulatory authorization require qualified owners; coordination does not claim independent penetration-testing accreditation.",
    "deliverables": []
  },
  {
    "id": "it_access_control",
    "domainId": "it_ot_operations",
    "name": "Identity & Access Management",
    "tagline": "Implement access controls that keep employee, partner, and agent permissions aligned with their responsibilities.",
    "situation": "Scope: Define access ownership and role permissions across joiner, mover, leaver, and agent lifecycles. Implement approvals, revocation, and periodic review for agreed systems.\n\nWhat you receive: An access model and approval matrix. Working lifecycle controls and access-review evidence.\n\nCompletion: Representative access grants, changes, removals, and restricted agent actions pass agreed authorization checks.\n\nBoundaries: System-owner approval and identity-provider capabilities constrain implementation; privileged access is not expanded without accountable authorization.",
    "deliverables": []
  },
  {
    "id": "it_monitoring_response",
    "domainId": "it_ot_operations",
    "name": "Incident Response Readiness",
    "tagline": "Establish and exercise a coordinated response so teams know who acts, what matters, and when to escalate.",
    "situation": "Scope: Define severity, escalation, communication, containment decisions, and restoration ownership. Exercise realistic incident scenarios and close gaps.\n\nWhat you receive: An incident response playbook and contact model. Exercise evidence and corrective actions.\n\nCompletion: A representative exercise shows timely escalation, named decision-makers, coordinated recovery, and retained incident evidence.\n\nBoundaries: Legal notification, forensic investigation, and regulated incident duties remain with appropriately authorized specialists and executives.",
    "deliverables": []
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "it_ot_operations",
    "name": "Disaster Recovery & Business Continuity",
    "tagline": "Prove that critical technology services can be restored in the sequence and time the business requires.",
    "situation": "Scope: Map critical services and restore dependencies to business priorities. Plan and exercise backup recovery, restoration sequencing, and operating continuity.\n\nWhat you receive: A service recovery plan with agreed objectives. Restore-test evidence and an owned gap register.\n\nCompletion: An agreed recovery exercise demonstrates restoration of required services and records any unmet time or data objectives.\n\nBoundaries: Recovery commitments depend on architecture, backup integrity, staffing, and agreed investment; planning alone is not proof of recoverability.",
    "deliverables": []
  },
  {
    "id": "it_plant_responsibilities",
    "domainId": "it_ot_operations",
    "name": "IT & Plant Operations Coordination",
    "tagline": "Establish clear ownership for technology support, access, maintenance, and changes affecting production.",
    "situation": "Scope: Map ownership for plant systems, access, support, maintenance, and changes. Establish escalation and coordinated change windows with production owners.\n\nWhat you receive: A plant technology responsibility map. Support, access, and change procedures agreed across teams.\n\nCompletion: Representative support and maintenance cases reach the right owners without ambiguity, and production-impacting changes follow the agreed approval path.\n\nBoundaries: Engineering and safety authorities retain responsibility for machine controls and safe operation; IT coordination does not override production safeguards.",
    "deliverables": []
  },
  {
    "id": "it_plant_floor_connect",
    "domainId": "it_ot_operations",
    "name": "Plant Connectivity & Protection",
    "tagline": "Connect shop-floor information to business systems through controlled interfaces that respect production requirements.",
    "situation": "Scope: Define required signals, interfaces, ownership, and permitted traffic. Coordinate controlled connectivity and validation with plant engineering and security owners.\n\nWhat you receive: A plant-to-business interface and access design. Validated data exchanges and operating monitoring procedures.\n\nCompletion: Agreed production information reaches its business destination with verified access boundaries and a known response to interface failure.\n\nBoundaries: Changes to controllers, safety systems, or production networks require their qualified owners; physical process behavior is outside an information-interface mandate.",
    "deliverables": []
  },
  {
    "id": "ld_roadmap",
    "domainId": "leadership_direction",
    "name": "Transformation Program Delivery",
    "tagline": "Lead business and technology change from agreed priorities through implementation and measurable operating results.",
    "situation": "Scope: Define the target operating result and sequence releases around business dependencies. Lead delivery governance, implementation decisions, and transition into use.\n\nWhat you receive: An owned delivery roadmap with business measures. Release acceptance and operating handover records.\n\nCompletion: Sponsors approve priorities and owners; an agreed release is accepted against business scenarios and measured after launch.\n\nBoundaries: Investment approvals and operating policy remain with the accountable executives; schedule and benefits depend on agreed resources and scope.",
    "deliverables": []
  },
  {
    "id": "ld_business_case",
    "domainId": "leadership_direction",
    "name": "Technology & AI Investment Planning",
    "tagline": "Build an investment plan around business value, delivery cost, and the organization's ability to make it work.",
    "situation": "Scope: Compare practical options, total operating cost, delivery risk, and organizational readiness. Define value assumptions, decision criteria, and staged funding choices.\n\nWhat you receive: A decision-ready investment case and option comparison. A staged investment plan with assumptions and review points.\n\nCompletion: The sponsor can explain the chosen option, cost assumptions, expected operating result, and conditions for continuing or stopping.\n\nBoundaries: This is investment planning and delivery advice, not a guaranteed financial return or independent financial valuation.",
    "deliverables": []
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "leadership_direction",
    "name": "Program Planning & Delivery Control",
    "tagline": "Keep scope, resources, dependencies, and decisions coordinated so the program moves toward its commitments.",
    "situation": "Scope: Build an integrated schedule covering scope, resource capacity, dependencies, and decision deadlines. Track changes and resolve conflicts with responsible owners.\n\nWhat you receive: An integrated delivery baseline and dependency register. Capacity decisions, change records, and milestone reporting.\n\nCompletion: Critical dependencies have owners and dates; the next delivery interval has funded capacity and agreed acceptance criteria.\n\nBoundaries: Planning exposes resource gaps; staffing authority, funding, and supplier commitments require their owners' approval.",
    "deliverables": []
  },
  {
    "id": "ld_partner_bench",
    "domainId": "leadership_direction",
    "name": "Implementation Team Leadership",
    "tagline": "Bring internal teams and delivery partners together to deliver a solution the business can accept and operate.",
    "situation": "Scope: Identify delivery roles and capability gaps; establish accountable work ownership. Coordinate internal experts and partners through design, testing, and operational handover.\n\nWhat you receive: A responsibility and capability coverage plan. Team working agreements and an implementation acceptance plan.\n\nCompletion: Critical responsibilities have coverage; the combined team demonstrates an agreed end-to-end business scenario and supports its handover.\n\nBoundaries: The engagement does not promise an instant team of specialists; hiring, contracting, and employment decisions remain with the client.",
    "deliverables": []
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "leadership_direction",
    "name": "Transformation Recovery",
    "tagline": "Diagnose a stalled program, resolve the obstacles, and restore a credible path to delivery.",
    "situation": "Scope: Diagnose delivery, technical, commercial, and decision-making obstacles. Reset the achievable scope and lead a bounded recovery milestone.\n\nWhat you receive: A documented recovery assessment and prioritized action plan. Reset commitments with owners, acceptance conditions, and escalation.\n\nCompletion: The sponsor accepts the recovery baseline and sees a completed milestone supported by operating evidence.\n\nBoundaries: Recovery may require changing scope, suppliers, funding, or dates; those decisions are explicit rather than hidden promises to recover everything.",
    "deliverables": []
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "leadership_direction",
    "name": "Vendor & Partner Delivery",
    "tagline": "Hold suppliers and implementation partners accountable for working results, clear responsibilities, and agreed milestones.",
    "situation": "Scope: Translate statements of work into demonstrable delivery obligations. Coordinate acceptance, corrective action, and commercial escalation with contract owners.\n\nWhat you receive: A milestone and acceptance matrix. Supplier issue, obligation, and decision records.\n\nCompletion: Business owners can accept or reject the agreed milestones using evidence; remaining obligations have named owners and resolution paths.\n\nBoundaries: Legal interpretation and contract amendments remain with authorized commercial and legal owners; supplier performance cannot be guaranteed.",
    "deliverables": []
  },
  {
    "id": "ld_stakeholder_alignment",
    "domainId": "leadership_direction",
    "name": "Executive & Operational Alignment",
    "tagline": "Turn competing priorities into clear decisions shared by executives, delivery teams, and the people running the business.",
    "situation": "Scope: Surface conflicting priorities and translate technical choices into business consequences. Establish decisions, accountable ownership, and useful executive and board reporting.\n\nWhat you receive: A decision and stakeholder map. A reporting cadence showing progress, value assumptions, risks, and required decisions.\n\nCompletion: Priority conflicts have recorded decisions; operating owners and executives can explain the agreed next steps and escalation path.\n\nBoundaries: Alignment does not replace executive authority or board oversight; unresolved disagreements remain visible for the accountable decision-maker.",
    "deliverables": []
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "leadership_direction",
    "name": "Enterprise AI Program Delivery",
    "tagline": "Turn scattered AI initiatives into a coordinated program that delivers useful capabilities across the business.",
    "situation": "Scope: Select and sequence business-owned use cases across teams. Coordinate evaluation, integration, adoption, and decisions to expand or stop.\n\nWhat you receive: An AI delivery portfolio with owners and measures. Shared delivery stages and operating acceptance criteria.\n\nCompletion: An agreed use case enters supported operation; remaining initiatives have explicit owners, dependencies, and scale decisions.\n\nBoundaries: Use-case selection is tied to available data and operating permission; enterprise-wide savings or autonomous operation are not presumed.",
    "deliverables": []
  },
  {
    "id": "ld_ai_decision_rights",
    "domainId": "leadership_direction",
    "name": "AI Governance & Accountability",
    "tagline": "Establish who owns AI decisions, what agents may do, and where human judgment and approval remain essential.",
    "situation": "Scope: Define permitted actions, human approval points, escalation, and evidence retention. Translate decision rights into testable operating controls.\n\nWhat you receive: An agent authority and approval matrix. Representative control tests and an intervention procedure.\n\nCompletion: Permitted, denied, and escalated actions behave as agreed and can be traced to a responsible owner.\n\nBoundaries: This establishes practical governance; it does not confer a regulatory certification or transfer legal accountability to software.",
    "deliverables": []
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "leadership_direction",
    "name": "Business Value Realization",
    "tagline": "Carry transformation beyond go-live by measuring adoption, resolving gaps, and delivering the intended business improvements.",
    "situation": "Scope: Connect intended benefits to an agreed baseline, adoption measures, and business owners. Investigate shortfalls and lead corrective delivery after launch.\n\nWhat you receive: A benefits measurement and ownership plan. An adoption review and prioritized corrective backlog.\n\nCompletion: Business owners can compare actual use and operating measures to the baseline and verify the result of agreed corrective work.\n\nBoundaries: Attribution and improvement targets are agreed with owners; claimed gains must be supported by actual measures rather than assumed from go-live.",
    "deliverables": []
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "workflows_automation",
    "name": "Three-Way Invoice Matching",
    "tagline": "Automate matching across purchase orders, receipts, and invoices, routing discrepancies for review before payment approval.",
    "situation": "Scope: Match purchase orders, receipts, and invoices using approved tolerances and exception rules. Route differences with supporting records to authorized reviewers.\n\nWhat you receive: A working three-way matching workflow. Exception categories, reviewer routing, and reconciliation tests.\n\nCompletion: Representative matched, partial, duplicate, and discrepant cases are handled correctly and remain traceable before payment approval.\n\nBoundaries: The scope is three-way matching and its exceptions, not replacement of the entire procure-to-pay process; Finance retains payment authority.",
    "deliverables": []
  },
  {
    "id": "wa_handoffs",
    "domainId": "workflows_automation",
    "name": "Cross-Team Workflow Automation",
    "tagline": "Connect tasks, information, and ownership so work moves between teams without repeated entry and chasing.",
    "situation": "Scope: Map cross-team handoffs and identify repeated entry and missing decisions. Implement the agreed workflow, shared context, and next-owner routing.\n\nWhat you receive: A working cross-team workflow. Handoff rules, visible status, and exception procedures.\n\nCompletion: Representative cases cross each agreed handoff with the required information and one accountable next owner.\n\nBoundaries: Automation is limited to agreed handoffs and system access; unresolved business decisions remain assigned to people rather than silently inferred.",
    "deliverables": []
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "workflows_automation",
    "name": "Order-to-Cash Implementation",
    "tagline": "Connect customer orders through fulfillment, billing, and collection with visible status and accountable exception handling.",
    "situation": "Scope: Connect agreed stages and source-system status across order-to-cash. Implement exception ownership and reconciliation at the critical handoffs.\n\nWhat you receive: An integrated order-to-cash workflow. Stage ownership, status views, and exception tests.\n\nCompletion: Representative orders and exceptions can be traced through the agreed stages with reconciled status and accountable action.\n\nBoundaries: Commercial terms, credit policy, revenue treatment, and collection authority remain with their business owners.",
    "deliverables": []
  },
  {
    "id": "wa_mobile_capture",
    "domainId": "workflows_automation",
    "name": "Mobile & Frontline Workflows",
    "tagline": "Implement practical tools that capture reliable information where the work happens.",
    "situation": "Scope: Design capture with actual users, devices, connectivity, and validation needs. Implement agreed mobile or field workflows and their system interfaces.\n\nWhat you receive: A usable frontline capture application or configuration. Validation rules, sync behavior, and user support guidance.\n\nCompletion: Users complete representative tasks in the real setting; required records reach the intended system and failed submissions are recoverable.\n\nBoundaries: Device availability, offline requirements, safety practices, and source-system access are agreed explicitly before rollout.",
    "deliverables": []
  },
  {
    "id": "wa_exception_routing",
    "domainId": "workflows_automation",
    "name": "Exception Management",
    "tagline": "Route blocked work to the right person with the context, authority, and escalation needed to resolve it.",
    "situation": "Scope: Define exception types, accountable owners, escalation, and permitted resolution actions. Implement routing and visible resolution history.\n\nWhat you receive: An exception workflow and responsibility map. Escalation rules and a resolution audit trail.\n\nCompletion: Representative exceptions reach the correct owner with supporting context and escalate when the agreed conditions are met.\n\nBoundaries: Routing does not grant decision authority; financial, policy, or operational exceptions remain with designated approvers.",
    "deliverables": []
  },
  {
    "id": "wa_multi_site_process",
    "domainId": "workflows_automation",
    "name": "Multi-Site Process Implementation",
    "tagline": "Roll out common processes across locations while preserving the differences the operation genuinely requires.",
    "situation": "Scope: Define the common process and document justified site variations. Deliver staged rollout, local acceptance, and cross-site support ownership.\n\nWhat you receive: A shared process standard and variation register. Site rollout plans, acceptance records, and support procedures.\n\nCompletion: Participating sites complete agreed common scenarios and explicitly validate their required variations.\n\nBoundaries: Standardization is not imposed on incompatible legal, safety, or physical operating requirements; these constraints receive explicit treatment.",
    "deliverables": []
  },
  {
    "id": "wa_supplier_cost_pricing",
    "domainId": "workflows_automation",
    "name": "Supplier Cost & Pricing Automation",
    "tagline": "Connect supplier cost changes to margin review and approved pricing updates across selling systems.",
    "situation": "Scope: Connect approved cost feeds to impact calculation, margin review, and price authorization. Implement controlled updates and effective-date reconciliation.\n\nWhat you receive: A cost-to-price change workflow. Impact views, approval records, and publication checks.\n\nCompletion: A representative cost change produces a reviewed impact and an authorized price update with a traceable effective date.\n\nBoundaries: Pricing strategy and customer commitments remain business decisions; the workflow does not autonomously approve margin or contractual exceptions.",
    "deliverables": []
  },
  {
    "id": "wa_process_adoption",
    "domainId": "workflows_automation",
    "name": "Implementation Adoption & Stabilization",
    "tagline": "Help teams adopt the new workflow, resolve launch issues, and establish dependable daily operation.",
    "situation": "Scope: Identify adoption barriers with users and operating owners. Coordinate practical training, launch support, issue resolution, and stabilization measures.\n\nWhat you receive: Role-based work guidance and enablement sessions. An adoption and stabilization backlog with support handover.\n\nCompletion: Users perform agreed scenarios under normal conditions and remaining adoption gaps have named owners and support paths.\n\nBoundaries: Adoption requires business participation and management decisions; attendance at training alone is not represented as successful adoption.",
    "deliverables": []
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "workflows_automation",
    "name": "AI Pilot to Production",
    "tagline": "Turn a promising AI pilot into a working business process with integrations, human decisions, and support in place.",
    "situation": "Scope: Integrate the use case with business systems, human decisions, evaluation, and service ownership. Run representative operating and failure cases before rollout.\n\nWhat you receive: A production-ready bounded workflow. Operating evaluation results, controls, and support guidance.\n\nCompletion: Business users and service owners accept the workflow against agreed normal, exceptional, and recovery scenarios.\n\nBoundaries: Production scope is bounded to the validated use case; pilot performance does not justify unrestricted use or universal accuracy claims.",
    "deliverables": []
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "workflows_automation",
    "name": "Automation Recovery & Human Handoffs",
    "tagline": "Build workflows that make failures visible, preserve completed work, and allow people to intervene and restart safely.",
    "situation": "Scope: Design state tracking, validation, human intervention, reconciliation, and safe retries. Implement and exercise the recovery paths for agreed failure modes.\n\nWhat you receive: A recoverable workflow with explicit handoff points. Failure drills and restart instructions.\n\nCompletion: An agreed failure drill preserves completed work, exposes unresolved state, and demonstrates controlled restart without duplicate business effects.\n\nBoundaries: Recoverability depends on source-system capabilities and defined failure modes; the design does not promise recovery from every possible outage.",
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

export const PUBLIC_CATALOG_REVISION = {"version":"outcome-catalog-2026-10-10","public_hash":"93edfc7c334a17109267f5277603a1d2ef9bd198c2df873a3ef76b69e30565a3","count":60};

export const RETIRED_OUTCOME_IDS: string[] = ["dk_self_service_bi","ld_board_visibility","wa_procure_to_pay"];
