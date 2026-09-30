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
    "subtitle": "Executive technology steering, vendor accountability, SOW de-risking, and operating alignment",
    "essence": "I take direct accountability above the software vendors. Stalled initiatives, M&A integration, cutover flight control, and vendor SOW resets stay aligned with executive leadership."
  },
  {
    "id": "it_business_systems",
    "code": "IT",
    "name": "IT & Business Systems",
    "subtitle": "ERP selection & cutover, core platform modernization, infrastructure reliability, and vendor SLA enforcement",
    "essence": "Building purpose-built IT capability and modernizing the core enterprise stack. Reducing external consulting dependency while keeping platforms reliable and secure."
  },
  {
    "id": "data_knowledge",
    "code": "DK",
    "name": "Data & Knowledge",
    "subtitle": "Unified enterprise schemas, master data integrity, cloud migrations, and proprietary company know-how",
    "essence": "Legacy data migrated cleanly into client-owned cloud structures. Common data models ensure business systems operate from a single source of truth."
  },
  {
    "id": "financial_systems",
    "code": "FS",
    "name": "Financial Systems",
    "subtitle": "Month-end close acceleration, balance validation, freight audit, and auditable transaction flows",
    "essence": "The books balance to the penny. GAAP compliance, automated subledger reconciliation, and accelerated close cycles remove friction for the CFO."
  },
  {
    "id": "workflows_automation",
    "code": "WA",
    "name": "Workflows & Automation",
    "subtitle": "Cross-platform process automation, supplier price sync, mobile execution, and workflow acceleration",
    "essence": "Eliminating manual handoffs and recurring operational bottlenecks. Resilient, audited automation pipelines connect your core systems without fragile custom code."
  }
];

export const PUBLIC_CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "ld_sow_scope_audit",
    "domainId": "leadership_direction",
    "name": "SOW Scope Audit, De-risking & Vendor Realignment",
    "tagline": "Eliminating Billable Scope Creep",
    "situation": "Stalled vendor implementation, scope creep, or ballooning hourly billables with disputed deliverables.",
    "outcome": "Audited SOWs, stripped low-yield deliverables, and restructured vendor contracts with payments tied to working operational milestones.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Forensic SOW audit report and financial exposure analysis",
      "Contract renegotiation amendment and milestone acceptance framework",
      "Vendor delivery scorecard and weekly governance charter"
    ],
    "inclusions": [
      "Vendor contract analysis",
      "Delivery milestone gating",
      "Steering committee governance"
    ],
    "exclusions": [
      "Formal legal representation (client counsel provides final legal signature)"
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
    "name": "Fractional CIO & Operating Executive Mandate",
    "tagline": "Accountable Leadership Across People, Systems & Vendors",
    "situation": "Growing mid-market business requires strategic technology leadership at executive altitude without full-time executive overhead.",
    "outcome": "Embedded leadership across internal IT, software development, data security, and strategic platform direction with direct board reporting.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Annual technology operating plan and multi-year investment roadmap",
      "Monthly technology steering committee briefs and board KPI pack",
      "IT department organization structure and role accountability charters"
    ],
    "inclusions": [
      "Executive steering",
      "Team coaching",
      "Budget ownership",
      "Platform strategy"
    ],
    "exclusions": [
      "Full-time permanent employment"
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
    "name": "IT Function Modernization & Capability Restructuring",
    "tagline": "Purpose-Built Internal Capability",
    "situation": "Technology department bottlenecked, overly reliant on fragmented outside contractors, or lacking standard operating procedures.",
    "outcome": "Restructured internal technology team, insourced core platform capabilities, and established binding service level agreements.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Target Operating Model (TOM) and organizational structure",
      "Job family definitions, role scorecards, and performance rubrics",
      "Internal IT service catalog and SLA commitment schedules"
    ],
    "inclusions": [
      "Team skills matrix",
      "Hiring rubric design",
      "Leadership coaching",
      "SLA governance"
    ],
    "exclusions": [
      "Direct payroll liability"
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
    "name": "Post-Merger Technology Integration & Harmonization",
    "tagline": "Day-One Continuity to Unified Operations",
    "situation": "Acquired business running disparate software stacks, overlapping SaaS licenses, and conflicting master data schemas.",
    "outcome": "Harmonized technology stack, unified domain security, consolidated licensing, and unified reporting without business interruption.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "100-Day M&A technology integration flight plan",
      "SaaS license audit and consolidation synergy schedule",
      "Unified Active Directory / IAM security cutover playbook"
    ],
    "inclusions": [
      "Application rationalization",
      "Network federation",
      "Vendor contract novation"
    ],
    "exclusions": [
      "Antitrust regulatory filings"
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
    "name": "Board Advisory, Cyber Resilience & Technology Risk",
    "tagline": "Pragmatic Risk Governance Without Paralysis",
    "situation": "Audit committee and board require independent verification of technology risk, ransomware preparedness, and disaster recovery.",
    "outcome": "Established pragmatic cyber risk governance, tested disaster recovery runbooks, and delivered quarterly board risk attestations.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Quarterly Board Technology & Cyber Risk Briefing Dossier",
      "Disaster recovery table-top exercise results and remediation backlog",
      "Cyber insurance policy qualification audit and compliance roadmap"
    ],
    "inclusions": [
      "Board advisory",
      "Risk register ownership",
      "Incident response planning"
    ],
    "exclusions": [
      "24/7 outsourced SOC monitoring"
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
    "name": "Troubled Technology Program Recovery & Flight Control",
    "tagline": "Stopping Runaway Spend & Bringing It Home",
    "situation": "Enterprise ERP or digital program is months late, significantly over budget, business confidence is shaken, and go-live date is missed.",
    "outcome": "Reset expectations with leadership, established fixed-date go-live flight control, resolved critical blockers, and completed stable cutover.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Forensic program health assessment and realistic critical-path timeline",
      "Cutover Flight Control Command Center with minute-by-minute runbooks",
      "Business continuity fallback procedures and hypercare triage process"
    ],
    "inclusions": [
      "Flight control governance",
      "Cutover command center",
      "Hypercare triage leadership"
    ],
    "exclusions": [
      "Taking physical responsibility for historical vendor negligence damages"
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
    "name": "Delivery Milestone Gating & Scope Defense Governance",
    "tagline": "Protecting Capital Through Rigorous Acceptance",
    "situation": "Software projects continuously expanding in scope while vendors claim progress based on billable hours rather than working systems.",
    "outcome": "Strict stage-gate delivery governance where milestones require verifiable operational acceptance and user testing.",
    "kind": "ongoing",
    "deliveryMode": "run",
    "deliverables": [
      "Stage-gate governance policy and milestone sign-off criteria",
      "Operational user acceptance testing (UAT) script repository",
      "Executive release readiness scorecard with formal go/no-go gates"
    ],
    "inclusions": [
      "Stage-gate policy design",
      "UAT governance",
      "Go/No-Go facilitation"
    ],
    "exclusions": [
      "Writing low-level unit test code for vendor proprietary modules"
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
    "name": "Cloud ERP Migration & Customization Audit",
    "tagline": "Escaping Technical Debt & Vendor Lock-in",
    "situation": "Aging on-premise ERP heavily customized with brittle code, creating upgrade paralysis and operational risk.",
    "outcome": "Audited legacy custom modifications, pruned non-standard extensions, and migrated business logic cleanly to cloud ERP.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Legacy customization audit and disposition catalog (Keep / Prune / Replace)",
      "Target cloud ERP architecture blueprint and extension specification",
      "Phased cutover flight plan and parallel run test scripts"
    ],
    "inclusions": [
      "Customization audit",
      "Cloud architecture blueprint",
      "Cutover governance"
    ],
    "exclusions": [
      "ERP recurring software subscription licenses"
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
    "name": "Objective ERP Platform & Implementation Partner Selection",
    "tagline": "Unbiased Selection Without Reseller Commissions",
    "situation": "Leadership overwhelmed by aggressive ERP software sales reps and biased implementation partners pushing preferred platforms.",
    "outcome": "Rigorous, requirements-grounded platform RFP and partner scoring matrix ensuring the right fit at fair market pricing.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Requirements traceability matrix across core operational processes",
      "RFP response scorecard and scripted vendor demonstration scenarios",
      "Partner contract negotiation terms and price benchmark report"
    ],
    "inclusions": [
      "Requirements scoring",
      "Demo script governance",
      "Partner price negotiation"
    ],
    "exclusions": [
      "Accepting vendor kickbacks or commission fees"
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
    "name": "Warehouse Management (WMS) & Order Routing Alignment",
    "tagline": "Eliminating Bottlenecks from Dock to Carrier",
    "situation": "Warehouse fulfillment suffering from mis-picks, slow order processing, and poor inventory visibility across multiple distribution centers.",
    "outcome": "Optimized WMS directed-putaway, batch pick-and-pack logic, and real-time carrier shipping integration.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Directed picking and zone-allocation workflow specifications",
      "Barcode scanner hardware configuration and ergonomic layout map",
      "WMS-to-ERP real-time inventory ledger posting bridge"
    ],
    "inclusions": [
      "WMS workflow design",
      "Scanner integration",
      "Carrier label generation"
    ],
    "exclusions": [
      "Physical warehouse racking installation"
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
    "name": "Enterprise Cloud Infrastructure & High-Availability Audit",
    "tagline": "Uninterrupted Operations 24/7/365",
    "situation": "Recurring unplanned system outages, sluggish database queries during peak shift, and unmonitored cloud spending.",
    "outcome": "Stabilized cloud infrastructure, resolved database locks, rightsized cloud workloads, and implemented proactive anomaly alerting.",
    "kind": "finite",
    "deliveryMode": "lead",
    "deliverables": [
      "Infrastructure single-point-of-failure (SPOF) forensic audit",
      "SQL database index optimization and lock contention remediation plan",
      "Cloud FinOps right-sizing report optimizing resource spend"
    ],
    "inclusions": [
      "Cloud architecture review",
      "Database performance tuning",
      "FinOps optimization"
    ],
    "exclusions": [
      "Direct cloud hosting consumption costs"
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
    "name": "Master Data Harmonization & Deduplication (MDM)",
    "tagline": "Clean Records Before They Hit the Ledger",
    "situation": "Customer, vendor, and item catalogs contaminated by duplicates, inconsistent naming, and conflicting attributes across legacy databases.",
    "outcome": "Cleansed and deduplicated master data catalog with enforced business validation rules preventing future contamination.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Master data dictionary and attribute naming taxonomy",
      "Automated record matching and deduplication transformation scripts",
      "Pre-save validation rule engine for item and customer creation"
    ],
    "inclusions": [
      "Data profiling",
      "Deduplication algorithms",
      "Validation schema rules"
    ],
    "exclusions": [
      "Manual data entry of thousands of missing vendor tax IDs"
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
    "name": "Legacy ERP Historical Data Extraction & Migration",
    "tagline": "Orderly Cutover Without Data Loss",
    "situation": "Migrating off legacy proprietary database to modern systems; concern over data truncation, lost audit history, or broken balances.",
    "outcome": "Automated ETL extraction pipelines, historical balance tie-outs, and auditable reconciliation matrices confirming data integrity.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Source-to-target field mapping specifications with transformation rules",
      "Automated repeatable ETL pipelines with staging schema checkpoints",
      "Data migration audit report reconciled against historical general ledgers"
    ],
    "inclusions": [
      "Automated migration scripts",
      "Reconciliation balance tie-outs",
      "Cutover dry runs"
    ],
    "exclusions": [
      "Data entry of missing source system historical transactions"
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
    "name": "Unified Analytics Data Warehouse & Executive PowerBI",
    "tagline": "Single Source of Operating Truth",
    "situation": "Executive team waiting weeks after month-end for fragmented spreadsheet reports with conflicting revenue and inventory numbers.",
    "outcome": "Automated modern cloud data warehouse with scheduled refreshes, unified business semantic models, and real-time executive PowerBI dashboards.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Dimensional data warehouse schema (Star Schema / Fact-Dimension models)",
      "Automated daily ELT pipelines synchronizing ERP, CRM, and eCommerce data",
      "Executive PowerBI operational scorecard with automated drill-down capabilities"
    ],
    "inclusions": [
      "Data warehouse architecture",
      "Automated pipelines",
      "Executive dashboards"
    ],
    "exclusions": [
      "PowerBI client tenant licensing fees"
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
    "name": "Subledger to General Ledger Automated Reconciliation",
    "tagline": "The Books Balance to the Penny",
    "situation": "Month-end close delayed because inventory subledger, AP clearing, and unbilled orders do not balance to the general ledger balance sheet.",
    "outcome": "Automated reconciliation pipelines identifying matching discrepancies, transaction timing issues, and clearing variance journals.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Automated daily subledger-to-GL variance detection engine",
      "Exception alert workflow flagging unposted or mismatched transactions",
      "Audit trail report documenting automated reconciliation rules and ledger entries"
    ],
    "inclusions": [
      "Inventory, AP, and AR subledger reconciliation logic",
      "Automated alert triggers"
    ],
    "exclusions": [
      "Manual dispute arbitration between client and suppliers"
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
    "name": "Automated TMS Freight Audit & Carrier Invoicing Subledger",
    "tagline": "Stopping Freight Surcharges & Billing Leakage",
    "situation": "Heavy logistics spend with hundreds of weekly carrier invoices containing disputed accessorial fees, duplicate billings, and wrong fuel rates.",
    "outcome": "Automated freight audit engine matching carrier invoices against dispatch bills of lading and contracted rate tariffs before AP approval.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Carrier electronic invoice parser and rate table validation engine",
      "Three-way match logic between shipping manifest, signed POD, and carrier bill",
      "Automated AP voucher generation with auto-short-pay of disputed accessorials"
    ],
    "inclusions": [
      "EDI / invoice ingestion",
      "Tariff audit engine",
      "AP voucher generation"
    ],
    "exclusions": [
      "Legal carrier freight claims filing"
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
    "name": "Multi-Entity Consolidation & Intercompany Elimination Engine",
    "tagline": "Unified Books Across Corporate Entities",
    "situation": "Corporate parent with multiple operating entities struggling with manual spreadsheet consolidation, mismatched intercompany AR/AP, and currency translations.",
    "outcome": "Automated intercompany transaction balancing, elimination journal generation, and real-time consolidated P&L and Balance Sheet reporting.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Intercompany reconciliation matrix and automated balancing rules",
      "Automated elimination journal generation script for month-end close",
      "Consolidated financial statement workbook tied directly to entity GLs"
    ],
    "inclusions": [
      "Consolidation schema design",
      "Elimination rule automation",
      "Reporting templates"
    ],
    "exclusions": [
      "Statutory country-specific tax filing preparation"
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
    "name": "Shop Floor Work Orders & Direct ERP Posting",
    "tagline": "Paperless Shop Floor Execution",
    "situation": "Assembly and maintenance technicians using paper travelers; labor hours, parts consumption, and completed serial numbers keyed in manually days later.",
    "outcome": "Custom company-owned mobile interface deployed in shop bays, capturing job progress and posting directly to ERP without paper travelers.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Mobile tablet interface for shop floor execution",
      "Real-time bidirectional ERP API integration for work order status",
      "Zero-install deployment architecture on standard tablets"
    ],
    "inclusions": [
      "Shop floor workflow mapping",
      "ERP API integration",
      "User training"
    ],
    "exclusions": [
      "Hardware procurement"
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
    "name": "Automated AP Invoice Extraction & 3-Way Reconciliation",
    "tagline": "Eliminating Routine Clerical Processing",
    "situation": "Accounting department overwhelmed by hundreds of supplier PDF invoices in email inbox requiring manual reading, PO matching, and data entry.",
    "outcome": "Automated background ingestion pipeline reading email attachments, extracting line-item prices, matching to POs, and staging approved vouchers.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Automated AP email ingestion and document parser",
      "Three-way line-item matching against purchase orders and receipts",
      "ERP voucher staging pipeline with exception review workflow"
    ],
    "inclusions": [
      "Invoice parser",
      "Three-way match logic",
      "Exception handling"
    ],
    "exclusions": [
      "Direct bank disbursement execution without human approval"
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
    "name": "Field Technician Mobile Dispatch & Offline Inventory Sync",
    "tagline": "Reliable Execution in Remote Environments",
    "situation": "Field service technicians operating in remote customer sites with intermittent cellular service; cannot access central systems to log work or parts.",
    "outcome": "Offline-capable mobile web application that caches service tickets locally, records labor and truck inventory, and auto-syncs when connectivity returns.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Offline-capable mobile application with local storage",
      "Conflict-resolution synchronization engine reconciling mobile edits with central ERP",
      "Customer digital sign-off and instant service summary generator"
    ],
    "inclusions": [
      "Mobile dispatch workflows",
      "Offline sync logic",
      "Field inventory tracking"
    ],
    "exclusions": [
      "Native app store distribution licensing"
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
    "name": "Supplier Price Sheet Ingestion & Gross Margin Analyzer",
    "tagline": "Protecting Margins in Volatile Markets",
    "situation": "Suppliers sending weekly price sheets in disparate spreadsheets; sales teams quoting outdated costs, eroding gross margins across customer orders.",
    "outcome": "Automated supplier catalog ingestion service calculating margin impacts, flagging cost spikes, and staging ERP price book updates.",
    "kind": "finite",
    "deliveryMode": "build",
    "deliverables": [
      "Supplier file parser accepting spreadsheet and EDI price lists",
      "Gross-margin delta simulation report highlighting affected customer quotes",
      "Staged ERP price book update feeder with review gating"
    ],
    "inclusions": [
      "File ingestion scripts",
      "Margin variance calculation",
      "Staged price updates"
    ],
    "exclusions": [
      "Unsupervised live price book commits without client approval"
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
