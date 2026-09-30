// ============================================================================
// THE 5 CORE OUTCOME BLOCKS · PUBLIC DATA CATALOG (lib/catalog.ts)
// Reconciled under Capo and CX COR mandate:
// 1. Leadership & Direction (LD)
// 2. IT & Business Systems (IT)
// 3. Data & Knowledge (DK)
// 4. Financial Systems (FS)
// 5. Workflows & Automation (WA)
// Governance & Controls crosscuts across all five domains as quality/audit gates.
// Strictly: 0 dollars ($), 0 phone numbers, ASCII hyphens only.
// ============================================================================

export interface CatalogDomain {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  essence: string;
}

export interface CatalogItem {
  id: string;
  domainId: string;
  name: string;
  tagline: string;
  situation: string;
  outcome: string;
  kind: 'finite' | 'ongoing';
  deliveryMode: 'lead' | 'run' | 'build' | 'combined';
  deliverables: string[];
  inclusions: string[];
  exclusions: string[];
  tags: string[];
}

export const PUBLIC_OUTCOME_DOMAINS: CatalogDomain[] = [
  {
    "id": "leadership_direction",
    "code": "LD",
    "name": "Leadership & Direction",
    "subtitle": "Priorities, executive ownership, team capability, and accountable delivery",
    "essence": "Bring decisions, people, vendors, and delivery responsibilities together around the business priorities."
  },
  {
    "id": "it_business_systems",
    "code": "IT",
    "name": "IT & Business Systems",
    "subtitle": "ERP, warehouse systems, platform choices, and reliable services",
    "essence": "Make selected business systems work for the people who depend on them, with tested changes and clear operating ownership."
  },
  {
    "id": "data_knowledge",
    "code": "DK",
    "name": "Data & Knowledge",
    "subtitle": "Consistent records, traceable reporting, and usable business information",
    "essence": "Connect the information the business needs, resolve conflicting definitions, and give the company the means to maintain it."
  },
  {
    "id": "financial_systems",
    "code": "FS",
    "name": "Financial Systems",
    "subtitle": "Reconciliation, invoice review, and reporting across entities",
    "essence": "Make financial records easier to reconcile and explain, with visible exceptions and finance retaining accounting and approval decisions."
  },
  {
    "id": "workflows_automation",
    "code": "WA",
    "name": "Workflows & Automation",
    "subtitle": "Practical workflows across people, devices, and business systems",
    "essence": "Reduce repeated entry and broken handoffs with tested workflows, clear permissions, and a way to recover when something fails."
  }
];

export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "ld_sow_scope_audit",
    "domainId": "leadership_direction",
    "name": "Know what your vendor is delivering and what needs to change",
    "tagline": "Vendor scope and accountability",
    "situation": "The work your vendor reports does not match what the business can use, and responsibility for the gaps is disputed.",
    "outcome": "Review the disputed scope, responsibilities and delivery evidence; establish a practical basis for resetting the engagement. Success check: An agreed scope and responsibility record, documented gaps, and a review process for accepting delivery.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Scope and responsibility record with delivery evidence",
      "Prioritized gaps and recommended changes",
      "Acceptance checklist for reviewing vendor delivery",
      "Any contract or payment changes require agreement by the parties"
    ],
    "inclusions": [
      "Review of the agreed statements of work and delivery records",
      "Vendor and business-owner review of unresolved gaps"
    ],
    "exclusions": [
      "Contract changes and commercial terms remain subject to agreement by the parties; legal advice is separate."
    ],
    "tags": [
      "vendor-management",
      "sow-audit",
      "turnaround",
      "cio-leadership",
      "governance"
    ]
  },
  {
    "id": "ld_fractional_cio_mandate",
    "domainId": "leadership_direction",
    "name": "Give technology priorities an accountable executive owner",
    "tagline": "Executive technology ownership",
    "situation": "Technology priorities, investment decisions, and delivery responsibilities need an accountable executive owner.",
    "outcome": "Own technology direction, investment priorities, vendors, and internal capability through a fractional or full executive mandate. Success check: agreed decision rights and responsibilities, with progress reviewed against business priorities.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Technology priorities, investment plan, and decision rights",
      "Team and vendor responsibilities with progress measures",
      "Leadership reporting at an agreed review frequency",
      "Ongoing responsibilities and executive or fractional engagement form agreed together"
    ],
    "inclusions": [
      "Fractional leadership or a full executive mandate, with responsibilities and engagement form agreed",
      "Budget, team, and platform leadership within that mandate"
    ],
    "exclusions": [
      "Responsibilities outside the agreed mandate require a separate decision."
    ],
    "tags": [
      "fractional-cio",
      "executive-mandate",
      "operating-cadence",
      "board-reporting",
      "leadership"
    ]
  },
  {
    "id": "ld_tech_team_restructuring",
    "domainId": "leadership_direction",
    "name": "Build an IT function the business can rely on",
    "tagline": "Internal team capability",
    "situation": "Your team is stretched, key responsibilities are unclear, or outside providers hold knowledge the business needs internally.",
    "outcome": "Clarify responsibilities, address capability gaps, and establish how the team delivers and improves its service. Success check: Named service owners, an agreed operating model and evidence the team can carry the assigned responsibilities.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Service ownership and team responsibility map",
      "Capability gaps, role needs, and development priorities",
      "Operating guidance and checks that the team can perform the agreed work"
    ],
    "inclusions": [
      "Capability assessment and team coaching",
      "Hiring criteria and service measures agreed with leadership"
    ],
    "exclusions": [
      "Recruitment, staffing changes, and sustained leadership require an agreed continuing mandate."
    ],
    "tags": [
      "team-building",
      "tom",
      "internal-capability",
      "sla",
      "people"
    ]
  },
  {
    "id": "ld_post_merger_integration",
    "domainId": "leadership_direction",
    "name": "Bring acquired businesses onto a workable common operating foundation",
    "tagline": "Connected operations after acquisition",
    "situation": "Acquired businesses use different systems, data definitions, and access arrangements, making shared operations difficult.",
    "outcome": "Prioritize systems and data integration around how the combined business needs to operate. Success check: Agreed processes and data reconcile across the selected entities; remaining differences and responsibilities are explicit.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Integration priorities and dependency map for selected entities",
      "System and data changes with reconciliation results",
      "Readiness, cutover, and recovery plan agreed with operating owners",
      "Cutover timing and continuity arrangements based on readiness"
    ],
    "inclusions": [
      "Phased integration leadership and delivery oversight",
      "Application, data, identity, and vendor dependencies within the selected scope"
    ],
    "exclusions": [
      "Timing depends on access, decisions, and readiness; cutovers need agreed continuity arrangements."
    ],
    "tags": [
      "m-and-a",
      "integration",
      "consolidation",
      "identity-management"
    ]
  },
  {
    "id": "ld_board_advisory_cyber",
    "domainId": "leadership_direction",
    "name": "Make technology risk understandable and give action a clear owner",
    "tagline": "Technology risk and resilience",
    "situation": "Leadership needs a clear view of technology risks, their business effects, and who is taking action.",
    "outcome": "Connect material technology and resilience risks to business decisions, accountable owners and follow-through. Success check: Leadership can see current risks, accepted decisions, owners and evidence from agreed resilience checks.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Business risk register with decisions and accountable owners",
      "Leadership brief with evidence and unresolved questions",
      "Agreed recovery exercises, findings, and remediation priorities",
      "Specialist testing and monitoring scoped separately"
    ],
    "inclusions": [
      "Risk reviews and incident-response planning",
      "Follow-through on agreed actions and resilience checks"
    ],
    "exclusions": [
      "Specialist security testing, remediation, and ongoing monitoring are separately scoped; this is not a formal assurance opinion."
    ],
    "tags": [
      "board-advisory",
      "cyber-risk",
      "disaster-recovery",
      "governance"
    ]
  },
  {
    "id": "ld_troubled_program_recovery",
    "domainId": "leadership_direction",
    "name": "Get a stalled technology initiative moving again",
    "tagline": "Program recovery",
    "situation": "A technology initiative has stalled, costs keep growing, and the team cannot agree what is blocking usable delivery.",
    "outcome": "Identify the causes, reset decisions and responsibilities, and lead an agreed recovery sequence. Success check: A credible recovery baseline, named owners and working evidence against revised milestones.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Cause and dependency assessment with recovery priorities",
      "Revised milestones, responsibilities, and readiness checks",
      "Cutover, fallback, and early support plan where needed",
      "Delivery responsibilities and dates agreed after diagnosis"
    ],
    "inclusions": [
      "Recovery leadership and coordination of the agreed delivery team",
      "Review of working evidence against revised milestones"
    ],
    "exclusions": [
      "Implementation responsibilities and recovery dates are agreed after diagnosis and readiness review."
    ],
    "tags": [
      "program-recovery",
      "cutover-flight-control",
      "turnaround",
      "governance",
      "critical-path"
    ]
  },
  {
    "id": "ld_milestone_delivery_gating",
    "domainId": "leadership_direction",
    "name": "Know whether the work is ready before accepting delivery",
    "tagline": "Evidence before acceptance",
    "situation": "Progress reports show activity, but the business lacks evidence that the delivered work is ready to use.",
    "outcome": "Establish acceptance criteria and review evidence at the points where the business commits to the next step. Success check: Each agreed milestone has an owner, observable checks and an explicit acceptance or exception decision.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Milestone acceptance criteria and named decision owners",
      "Business test scenarios with results and unresolved exceptions",
      "Readiness record showing acceptance, rejection, or conditions",
      "Commercial terms remain subject to the existing agreement"
    ],
    "inclusions": [
      "Acceptance process setup and continuing delivery reviews",
      "Business testing and release-decision coordination"
    ],
    "exclusions": [
      "Acceptance decisions do not automatically change payment or contract terms."
    ],
    "tags": [
      "governance",
      "stage-gate",
      "milestone-acceptance",
      "uat"
    ]
  },
  {
    "id": "it_cloud_erp_migration",
    "domainId": "it_business_systems",
    "name": "Modernize ERP without carrying every old workaround forward",
    "tagline": "ERP modernization",
    "situation": "Your ERP is hard to upgrade because business rules depend on old customizations and workarounds.",
    "outcome": "Assess existing customizations, decide what to retain or replace, and deliver an agreed migration sequence. Success check: Critical business scenarios work in the target environment; data and cutover exceptions are reconciled or explicitly accepted.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Customization inventory with retain, replace, or retire decisions",
      "Target process and integration design for the agreed migration",
      "Business-scenario tests, data reconciliation, and cutover plan"
    ],
    "inclusions": [
      "Migration leadership and coordination of configuration, integration, and testing",
      "Readiness and recovery planning for selected processes"
    ],
    "exclusions": [
      "Platform licenses and implementation responsibilities are agreed separately; the migration is scoped in phases."
    ],
    "tags": [
      "cloud-erp",
      "migration",
      "technical-debt",
      "modernization"
    ]
  },
  {
    "id": "it_erp_vendor_selection",
    "domainId": "it_business_systems",
    "name": "Choose a system and delivery partner against your real business needs",
    "tagline": "System and partner selection",
    "situation": "Competing software demonstrations make it difficult to tell which platform and delivery partner fit the way your business works.",
    "outcome": "Compare options using priority workflows, operational constraints and delivery responsibilities. Success check: A documented selection decision supported by demonstrations, evaluated gaps, costs and dependencies.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Prioritized business requirements and operating constraints",
      "Demonstration scenarios and comparative evaluation of gaps and costs",
      "Selection recommendation with implementation dependencies and responsibilities"
    ],
    "inclusions": [
      "Requirements discovery and structured vendor evaluation",
      "Decision support for the business and procurement team"
    ],
    "exclusions": [
      "Procurement and contract approval remain company decisions; implementation is a separate scope."
    ],
    "tags": [
      "erp-selection",
      "rfp",
      "vendor-evaluation",
      "contract-negotiation"
    ]
  },
  {
    "id": "it_wms_supply_chain_optimization",
    "domainId": "it_business_systems",
    "name": "Connect warehouse and shipping workflows",
    "tagline": "Warehouse and shipping handoffs",
    "situation": "Receiving, picking, inventory, and shipping records do not stay aligned as orders move through the warehouse.",
    "outcome": "Improve agreed receiving, fulfillment and shipping handoffs across the selected systems. Success check: Representative orders and inventory movements complete correctly; exceptions are visible and operating owners can resolve them.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Agreed warehouse and shipping workflow changes",
      "Selected system integrations with order and inventory test results",
      "Exception-handling instructions and operating ownership"
    ],
    "inclusions": [
      "Workflow mapping, configuration, and integration within selected systems",
      "Operating-team checks using representative orders and stock movements"
    ],
    "exclusions": [
      "Hardware, physical layout changes, and performance targets depend on the agreed scope and baseline."
    ],
    "tags": [
      "wms",
      "supply-chain",
      "logistics",
      "warehouse-operations"
    ]
  },
  {
    "id": "it_infrastructure_cloud_stability",
    "domainId": "it_business_systems",
    "name": "Find and address the causes of unreliable technology services",
    "tagline": "Service reliability",
    "situation": "Recurring outages, slow systems, or unclear alerts interrupt work, and the underlying causes remain unresolved.",
    "outcome": "Assess failure patterns and operating dependencies, then implement agreed reliability improvements. Success check: Agreed service checks, recovery exercises and alert handling demonstrate the changes; unresolved risks have owners.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Failure and dependency assessment with prioritized improvements",
      "Agreed configuration or performance changes with before-and-after checks",
      "Recovery and alert-handling instructions with named owners",
      "Ongoing support and service targets agreed separately"
    ],
    "inclusions": [
      "Assessment and delivery oversight of selected reliability improvements",
      "Service checks and recovery exercises matched to operating needs"
    ],
    "exclusions": [
      "Ongoing support, hosting, and service targets require separate agreement."
    ],
    "tags": [
      "cloud-infrastructure",
      "high-availability",
      "database-tuning",
      "finops"
    ]
  },
  {
    "id": "dk_master_data_governance",
    "domainId": "data_knowledge",
    "name": "Get teams and systems working from consistent business records",
    "tagline": "Consistent business records",
    "situation": "Teams and systems use conflicting customer, supplier, or item records, creating rework and reconciliation problems.",
    "outcome": "Resolve agreed master-data conflicts and establish ownership and validation for future changes. Success check: Priority records pass agreed rules; conflicting records are reconciled or have documented exceptions and owners.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Business definitions and named data owners",
      "Matched and corrected priority records with an exception log",
      "Validation rules and instructions for maintaining records"
    ],
    "inclusions": [
      "Data profiling, matching, and correction within the selected record set",
      "Owner review of exceptions and future-change controls"
    ],
    "exclusions": [
      "Record scope and correction decisions require business owners; continuing data stewardship stays with the company."
    ],
    "tags": [
      "mdm",
      "data-quality",
      "deduplication",
      "data-governance"
    ]
  },
  {
    "id": "dk_legacy_data_migration",
    "domainId": "data_knowledge",
    "name": "Move the data you need with a record of what reconciles",
    "tagline": "Traceable data migration",
    "situation": "A system change puts required history, business records, and opening balances at risk of becoming inaccessible or inconsistent.",
    "outcome": "Extract, transform and validate agreed historical and operational data for its target use. Success check: Control totals and representative records reconcile under agreed checks; exclusions and exceptions are documented.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Source-to-target mapping and transformation rules",
      "Repeatable migration steps with validation checkpoints",
      "Reconciliation results, documented exclusions, and unresolved exceptions"
    ],
    "inclusions": [
      "Extraction, transformation, and rehearsal for agreed sources and periods",
      "Control totals and representative-record checks with business owners"
    ],
    "exclusions": [
      "Missing source records and unresolved differences need explicit decisions before acceptance."
    ],
    "tags": [
      "data-migration",
      "etl",
      "data-integrity",
      "historical-data"
    ]
  },
  {
    "id": "dk_executive_bi_warehouse",
    "domainId": "data_knowledge",
    "name": "Answer business questions with information you can trace",
    "tagline": "Reporting you can trace",
    "situation": "Reports disagree, definitions vary, and leaders cannot trace a number to the records behind it.",
    "outcome": "Connect selected sources and deliver reporting based on agreed business definitions. Success check: Users can answer agreed questions, trace figures to sources, and see freshness and known limitations.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Agreed business definitions and source ownership",
      "Connected data and reports for priority business questions",
      "Checks of figures, refresh timing, access, and known limitations"
    ],
    "inclusions": [
      "Selected source integration and reporting design",
      "User review against agreed questions and source records"
    ],
    "exclusions": [
      "Source coverage, reporting scope, and refresh frequency are agreed before expanding the platform."
    ],
    "tags": [
      "bi",
      "data-warehouse",
      "powerbi",
      "executive-analytics"
    ]
  },
  {
    "id": "fs_subledger_gl_reconciliation",
    "domainId": "financial_systems",
    "name": "Find the differences that are holding up reconciliation",
    "tagline": "Reconciliation exceptions",
    "situation": "Finance spends the close tracking down differences between operational records, subledgers, and the general ledger.",
    "outcome": "Match agreed operational and financial records, expose differences, and route exceptions for review. Success check: Finance can explain reconciled balances and outstanding exceptions and can operate the review process.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Matching rules and reconciliation results for selected accounts",
      "Exception review workflow with owners and supporting records",
      "Operating instructions and finance acceptance checks",
      "Accounting judgments and posting approvals retained by finance"
    ],
    "inclusions": [
      "Selected record matching and exception routing",
      "Finance review of reconciled balances and outstanding differences"
    ],
    "exclusions": [
      "Finance retains accounting judgments and posting approval; audit opinions are outside this scope."
    ],
    "tags": [
      "gl-reconciliation",
      "subledger",
      "month-end-close",
      "financial-controls"
    ]
  },
  {
    "id": "fs_freight_audit_subledger",
    "domainId": "financial_systems",
    "name": "Catch freight-invoice exceptions before payment approval",
    "tagline": "Freight invoice review",
    "situation": "Carrier charges are hard to verify against shipments and rates before invoices reach payment approval.",
    "outcome": "Compare selected carrier invoices with shipping records and agreed rates, then surface exceptions. Success check: Representative matches and mismatches behave as expected; reviewers can trace findings and approve or reject exceptions.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Invoice and shipment matching for agreed formats and carriers",
      "Rate checks and traceable exception reports",
      "Reviewer workflow tested with matching and disputed charges",
      "Dispute and payment decisions retained by authorized reviewers"
    ],
    "inclusions": [
      "Selected invoice, rate, and shipment data integration",
      "Exception routing for finance and logistics review"
    ],
    "exclusions": [
      "Requires usable rate and shipment records; reviewers retain dispute and payment decisions."
    ],
    "tags": [
      "freight-audit",
      "tms",
      "carrier-invoicing",
      "cost-recovery"
    ]
  },
  {
    "id": "fs_multi_entity_consolidation",
    "domainId": "financial_systems",
    "name": "Bring entity reporting together with visible reconciliation",
    "tagline": "Reporting across entities",
    "situation": "Separate entity records and intercompany differences make consolidated reporting difficult to explain and review.",
    "outcome": "Align agreed entity mappings and support intercompany matching and consolidation workflows. Success check: Finance validates selected entity totals, mappings and elimination rules; exceptions and approval responsibilities are explicit.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Agreed entity, account, and currency mappings",
      "Intercompany matching and elimination rules reviewed by finance",
      "Consolidated reports with reconciliation and exception records",
      "Accounting rules and posting approvals retained by finance"
    ],
    "inclusions": [
      "Configuration and integration for selected entities and reporting needs",
      "Finance validation of totals, mappings, and elimination rules"
    ],
    "exclusions": [
      "Finance approves accounting treatment and postings; statutory filings are separate."
    ],
    "tags": [
      "intercompany",
      "consolidation",
      "financial-reporting",
      "accounting"
    ]
  },
  {
    "id": "wf_paperless_shop_floor",
    "domainId": "workflows_automation",
    "name": "Capture shop-floor work where it happens",
    "tagline": "Shop-floor records",
    "situation": "Work progress, labor, and material use are recorded on paper and re-entered later, leaving business systems behind the work.",
    "outcome": "Give the selected team a practical way to record progress and send validated information to the business system. Success check: Representative work is recorded once, validated, traceable and recoverable when a connection or posting fails.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Interface for the selected team to record agreed work events",
      "Validated transfer to the business system with failure handling",
      "User instructions and tests of recording, posting, and recovery"
    ],
    "inclusions": [
      "Workflow mapping, system integration, and team training",
      "Device, connectivity, and safety constraints assessed before design"
    ],
    "exclusions": [
      "Hardware procurement and changes beyond the selected work process are separately agreed."
    ],
    "tags": [
      "workflows",
      "shop-floor",
      "paperless",
      "mes",
      "client-owned"
    ]
  },
  {
    "id": "wf_agentic_invoice_matching",
    "domainId": "workflows_automation",
    "name": "Turn incoming invoices into reviewable, matched records",
    "tagline": "Invoice matching and review",
    "situation": "People read incoming invoices, enter the same details, and manually check purchase orders and receipts.",
    "outcome": "Extract invoice details, match against agreed purchasing and receipt data, and route uncertain cases to a reviewer. Success check: Correct matches, mismatches and uncertain extraction cases pass agreed tests; approvals and actions remain traceable.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Extraction for agreed invoice formats and source channels",
      "Purchase-order and receipt matching with uncertain cases routed for review",
      "Traceable approval steps and tests of matches, errors, and failed actions",
      "Posting and payment approvals retained by finance"
    ],
    "inclusions": [
      "Invoice extraction and deterministic transaction checks",
      "Permissions and exception handling agreed with finance"
    ],
    "exclusions": [
      "Finance retains posting and payment approval; automated payment execution is outside this scope."
    ],
    "tags": [
      "workflows",
      "automation",
      "accounts-payable",
      "three-way-match",
      "client-owned"
    ]
  },
  {
    "id": "wf_mobile_field_dispatch",
    "domainId": "workflows_automation",
    "name": "Keep field work connected to the business",
    "tagline": "Field work and records",
    "situation": "Field teams cannot consistently see assigned work or return completed job and parts records to the business.",
    "outcome": "Provide the selected team with assigned work, status capture and a reliable way to return completed records. Success check: Field scenarios, duplicate submissions and connectivity failures are tested; records reconcile after recovery.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Selected field workflow with assigned work and status capture",
      "Record return and reconciliation with duplicate and failure handling",
      "Field tests and operating guidance for agreed devices and connectivity",
      "Offline operation included only when explicitly scoped"
    ],
    "inclusions": [
      "Mobile workflow and selected system integration",
      "Connectivity and conflicting-update scenarios included in acceptance checks"
    ],
    "exclusions": [
      "Offline operation and its recovery rules are included only when explicitly scoped."
    ],
    "tags": [
      "workflows",
      "field-service",
      "offline-sync",
      "mobile",
      "client-owned"
    ]
  },
  {
    "id": "wf_supplier_catalog_sync",
    "domainId": "workflows_automation",
    "name": "See supplier cost changes before updating your prices",
    "tagline": "Supplier cost and price review",
    "situation": "Supplier files arrive in different formats, making it hard to see cost changes and their effect before updating prices.",
    "outcome": "Ingest agreed supplier formats, compare changes and present their effect for business review. Success check: Representative changes and invalid inputs are handled correctly; approved updates are traceable and recoverable.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Import and validation for agreed supplier formats",
      "Cost-change comparison and effect on selected prices or quotes",
      "Staged updates with approval, traceability, and recovery checks",
      "Price decisions and live-update approvals retained by the business"
    ],
    "inclusions": [
      "Selected file ingestion and margin calculations using agreed rules",
      "Tests of valid changes, duplicates, and invalid inputs"
    ],
    "exclusions": [
      "Pricing and margin decisions remain with the business; live updates require approval."
    ],
    "tags": [
      "workflows",
      "pricing",
      "margin-protection",
      "supplier-sync",
      "client-owned"
    ]
  }
];
