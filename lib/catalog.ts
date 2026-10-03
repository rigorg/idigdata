// ============================================================================
// THE 6 CORE OUTCOME CONFIGURATORS · PUBLIC DATA CATALOG (lib/catalog.ts)
// Synthesized consensus across Grok, CX, CC, and AG:
// 1. Leadership, Direction & Transformation (LD) · 10 outcomes
// 2. Business Systems & Integration (BS) · 10 outcomes (ERP, WMS, MES, HRM, EAM, CRM)
// 3. IT/OT Operations & Security (IT) · 10 outcomes (Modern IT, Cyber, Plant OT)
// 4. Data & Knowledge (DK) · 9 outcomes (Records, Analytics, Institutional Memory)
// 5. Financial Systems (FS) · 10 outcomes (Controls, EPM, ABC)
// 6. Workflows & Automation (WA) · 10 outcomes (Handoffs, O2C, P2P, Resilience)
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
    "name": "IT/OT Operations & Security",
    "subtitle": "Modernize the IT function to support reliable business operations, connected plants, and governed agentic capabilities.",
    "essence": "Dependable infrastructure, operational resilience, qualified cyber coordination, and plant-floor OT."
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
    "outcome": "An executable technology and transformation roadmap aligned across business priorities, investment, ownership, and delivery sequencing.",
    "deliverables": [
      "Executable technology roadmap",
      "Investment & sequencing matrix",
      "Executive ownership charter"
    ],
    "inclusions": [
      "Priority alignment",
      "Sequencing & dependency mapping",
      "Executive steering cadence"
    ],
    "exclusions": [
      "Direct vendor legal contracting"
    ],
    "tags": [
      "leadership",
      "roadmap",
      "strategy",
      "executive"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_business_case",
    "domainId": "leadership_direction",
    "name": "Make investment decisions with a clear business case.",
    "tagline": "Understand expected value, cost, risk, and organizational readiness.",
    "situation": "Technology proposals lack credible financial justification, risk assessment, or evaluation of organizational readiness.",
    "outcome": "Clear, decision-ready business cases detailing expected value, total cost, operational risk, and organizational readiness.",
    "deliverables": [
      "Investment business case model",
      "Risk & readiness evaluation",
      "Value realization scorecard"
    ],
    "inclusions": [
      "Cost/benefit modeling",
      "Risk assessment",
      "Readiness gating"
    ],
    "exclusions": [
      "Formal audit certifications"
    ],
    "tags": [
      "business-case",
      "roi",
      "investment",
      "finance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_capacity_plan",
    "domainId": "leadership_direction",
    "name": "Turn competing initiatives into a plan that fits available capacity.",
    "tagline": "Resolve resource conflicts, dependencies, and tradeoffs across teams and partners.",
    "situation": "Too many concurrent projects creating resource bottlenecks, missed deadlines, and employee burnout.",
    "outcome": "A prioritized portfolio delivery plan that resolves dependencies and matches initiative scope to actual organizational capacity.",
    "deliverables": [
      "Capacity & resource allocation model",
      "Cross-initiative dependency map",
      "Tradeoff & de-scoping plan"
    ],
    "inclusions": [
      "Resource bottleneck analysis",
      "Capacity leveling",
      "Dependency resolution"
    ],
    "exclusions": [
      "Staff hiring and recruitment execution"
    ],
    "tags": [
      "capacity-planning",
      "portfolio-management",
      "resource-allocation"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_partner_bench",
    "domainId": "leadership_direction",
    "name": "Build the organization and partner bench to deliver.",
    "tagline": "Establish the capabilities, responsibilities, and working relationships the business needs.",
    "situation": "Internal skill gaps or misaligned external contractors impeding transformation delivery.",
    "outcome": "Target organizational design, key role charters, and a vetted partner bench aligned to delivery requirements.",
    "deliverables": [
      "Capability gap analysis",
      "Role responsibility charters",
      "Partner evaluation & onboarding framework"
    ],
    "inclusions": [
      "Role definitions",
      "Partner capability evaluation",
      "Delivery accountability matrix"
    ],
    "exclusions": [
      "Legal employment contracts"
    ],
    "tags": [
      "team-building",
      "partner-management",
      "org-design"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_stalled_turnaround",
    "domainId": "leadership_direction",
    "name": "Get a stalled transformation moving again.",
    "tagline": "Resolve obstacles, reset commitments, and restore delivery accountability.",
    "situation": "Transformation initiative has lost momentum, exceeded budget, or encountered political and technical impasses.",
    "outcome": "Identified root causes, unblocked critical paths, reset milestones, and restored delivery momentum and accountability.",
    "deliverables": [
      "Turnaround diagnostic report",
      "Reset delivery roadmap",
      "Weekly governance cadence"
    ],
    "inclusions": [
      "Obstacle triage",
      "Commitment reset",
      "Executive flight control"
    ],
    "exclusions": [
      "Litigation support"
    ],
    "tags": [
      "turnaround",
      "troubled-projects",
      "recovery"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_vendor_commitments",
    "domainId": "leadership_direction",
    "name": "Get vendors working to clear delivery and commercial commitments.",
    "tagline": "Align scope, quality, responsibilities, and acceptance of results.",
    "situation": "Software vendors and system integrators delivering subpar work, disputing scope, or accumulating billing without results.",
    "outcome": "Restructured vendor statements of work, clarified acceptance criteria, and tied commercial payments to working milestones.",
    "deliverables": [
      "Forensic vendor contract audit",
      "Milestone acceptance scorecard",
      "Vendor SLA remediation plan"
    ],
    "inclusions": [
      "SOW forensic review",
      "Milestone acceptance gating",
      "Vendor accountability charter"
    ],
    "exclusions": [
      "Formal legal representation"
    ],
    "tags": [
      "vendor-management",
      "sow-audit",
      "contract-negotiation"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_board_visibility",
    "domainId": "leadership_direction",
    "name": "Give executives and the board a clear view of progress, value, and risk.",
    "tagline": "Establish useful reporting and a regular rhythm for decisions and accountable action.",
    "situation": "Board and executive leadership lack trustworthy, concise visibility into technology risk, spend, and delivery progress.",
    "outcome": "Executive dashboards and a structured reporting rhythm providing transparent visibility into delivery progress, value, and risk.",
    "deliverables": [
      "Executive KPI reporting deck",
      "Risk & decision register",
      "Monthly steering committee rhythm"
    ],
    "inclusions": [
      "Executive reporting pack",
      "Decision governance framework",
      "Risk register"
    ],
    "exclusions": [
      "External financial audit attestations"
    ],
    "tags": [
      "board-reporting",
      "governance",
      "executive-steering"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_ai_coordination",
    "domainId": "leadership_direction",
    "name": "Turn scattered AI experiments into a coordinated business program.",
    "tagline": "Prioritize use cases, establish shared practices, and connect investment to measurable value.",
    "situation": "Fragmented, ad-hoc AI pilots across departments without shared standards, security controls, or measurable business return.",
    "outcome": "A coordinated enterprise AI portfolio prioritizing high-impact use cases, shared infrastructure, and clear ROI tracking.",
    "deliverables": [
      "Enterprise AI opportunity backlog",
      "Use-case prioritization matrix",
      "AI program governance framework"
    ],
    "inclusions": [
      "Use-case prioritization",
      "Portfolio ROI tracking",
      "Shared infrastructure guidelines"
    ],
    "exclusions": [
      "Custom model training from scratch"
    ],
    "tags": [
      "ai-strategy",
      "ai-governance",
      "innovation"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_ai_decision_rights",
    "domainId": "leadership_direction",
    "name": "Decide what AI may do independently and what people must decide.",
    "tagline": "Establish decision rights, review points, escalation, and accountability.",
    "situation": "Ambiguity over AI boundaries, hallucination risks, liability, and when human oversight is mandatory.",
    "outcome": "Clear authority matrices, decision thresholds, escalation pathways, and review checkpoints between AI action and human approval.",
    "deliverables": [
      "Decision rights & authority matrix",
      "Human-in-the-loop review policy",
      "Escalation & exception protocols"
    ],
    "inclusions": [
      "Decision authority matrix",
      "Human review thresholds",
      "Escalation boundaries"
    ],
    "exclusions": [
      "Legal compliance liability sign-off"
    ],
    "tags": [
      "ai-ethics",
      "governance",
      "decision-rights"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "ld_benefits_realization",
    "domainId": "leadership_direction",
    "name": "Know whether transformation delivered its intended benefits.",
    "tagline": "Track adoption and operating results with business owners, then address gaps.",
    "situation": "New systems deployed but user adoption lags, promised savings fail to materialize, and operating benefits are unmeasured.",
    "outcome": "Post-implementation value tracking with operational owners, adoption telemetry, and corrective action for benefit realization gaps.",
    "deliverables": [
      "Benefit realization tracking dashboard",
      "Adoption audit report",
      "Value gap remediation plan"
    ],
    "inclusions": [
      "Operational value tracking",
      "Adoption gap triage",
      "Remediation planning"
    ],
    "exclusions": [
      "Guaranteed market profit outcomes"
    ],
    "tags": [
      "benefits-realization",
      "adoption",
      "change-management"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_existing_value",
    "domainId": "business_systems",
    "name": "Get more value from the business systems you already own.",
    "tagline": "Address underused capabilities, duplicate applications and licenses, workarounds, and unnecessary complexity.",
    "situation": "Significant investment in enterprise software undermined by manual workarounds, duplicate SaaS tools, and underutilized modules.",
    "outcome": "Rationalized application portfolio, eliminated duplicate software spend, decommissioned workarounds, and unlocked dormant native features.",
    "deliverables": [
      "Application capability audit",
      "License & duplicate SaaS rationalization plan",
      "Feature adoption roadmap"
    ],
    "inclusions": [
      "Capability gap analysis",
      "Duplicate software identification",
      "Native feature enablement"
    ],
    "exclusions": [
      "Vendor licensing legal disputes"
    ],
    "tags": [
      "application-rationalization",
      "cost-optimization",
      "erp-optimization"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_selection_partners",
    "domainId": "business_systems",
    "name": "Choose applications and delivery partners that fit your business.",
    "tagline": "Translate operating needs into selection criteria, delivery expectations, and ownership.",
    "situation": "Impending RFP or software selection at risk of vendor hype, unrealistic estimates, and mismatched architectures.",
    "outcome": "Objective selection criteria based on operational reality, rigorous partner evaluation, and de-risked delivery agreements.",
    "deliverables": [
      "Business requirements specification",
      "Vendor evaluation scorecard",
      "RFP & SOW negotiation guide"
    ],
    "inclusions": [
      "Operational requirements definition",
      "Vendor scoring matrix",
      "SOW negotiation advisory"
    ],
    "exclusions": [
      "Sole commercial procurement decision rights"
    ],
    "tags": [
      "software-selection",
      "partner-selection",
      "rfp"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_modernize_erp",
    "domainId": "business_systems",
    "name": "Modernize ERP without rebuilding every old workaround.",
    "tagline": "Align processes, configuration, integration, and adoption around the intended operating model.",
    "situation": "ERP upgrade or implementation bogged down by attempts to recreate decades of legacy custom code and workarounds.",
    "outcome": "Clean core ERP implementation aligned with industry best practices, standardized business processes, and streamlined customization.",
    "deliverables": [
      "Process standardization blueprint",
      "Core configuration specification",
      "Customization retirement plan"
    ],
    "inclusions": [
      "Standard operating model alignment",
      "Clean core governance",
      "Custom code de-scoping"
    ],
    "exclusions": [
      "Proprietary third-party ERP source code modification"
    ],
    "tags": [
      "erp-modernization",
      "clean-core",
      "process-alignment"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_connect_applications",
    "domainId": "business_systems",
    "name": "Connect enterprise applications around shared business information.",
    "tagline": "Establish reliable exchanges across ERP, WMS, MES, HRM/HCM, EAM, and CRM, with clear systems of record.",
    "situation": "Siloed enterprise systems causing manual re-keying, data drift, and broken processes between operations and corporate.",
    "outcome": "Robust integration architecture connecting ERP, WMS, MES, HRM, EAM, and CRM with clearly designated systems of record.",
    "deliverables": [
      "Enterprise integration architecture map",
      "System of record definition matrix",
      "API & data exchange specification"
    ],
    "inclusions": [
      "Cross-system data flow mapping",
      "System of record designation",
      "Integration pattern design"
    ],
    "exclusions": [
      "Hardware cable installations"
    ],
    "tags": [
      "integration",
      "enterprise-architecture",
      "api",
      "systems-of-record"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_ma_consolidation",
    "domainId": "business_systems",
    "name": "Bring acquired businesses onto a connected application landscape.",
    "tagline": "Decide what to consolidate, retain, replace, or integrate.",
    "situation": "M&A activity leaves a chaotic sprawl of incompatible ERPs, CRM instances, and operational tools across entities.",
    "outcome": "Structured post-merger systems integration roadmap balancing consolidation speed, operational continuity, and synergies.",
    "deliverables": [
      "Acquisition systems integration playbook",
      "Platform consolidation matrix",
      "Migration timeline & budget"
    ],
    "inclusions": [
      "Application rationalization",
      "Migration sequencing",
      "Master data harmonization plan"
    ],
    "exclusions": [
      "Legal entity corporate filing"
    ],
    "tags": [
      "m-and-a",
      "systems-consolidation",
      "integration-playbook"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_carve_out",
    "domainId": "business_systems",
    "name": "Separate business systems while preserving essential operations and records.",
    "tagline": "Plan application, interface, access, and data transitions for a divestiture or carve-out.",
    "situation": "Divestiture requires cleanly severing shared enterprise applications and data without violating TSAs or stopping operations.",
    "outcome": "Tested transition plan for systems, interfaces, security boundaries, and historical data to achieve operational independence.",
    "deliverables": [
      "Carve-out systems separation plan",
      "Data extraction & boundary protocol",
      "TSA exit roadmap"
    ],
    "inclusions": [
      "TSA dependency mapping",
      "Data separation plan",
      "System clone and isolate strategy"
    ],
    "exclusions": [
      "Definitive legal purchase agreements"
    ],
    "tags": [
      "carve-out",
      "divestiture",
      "tsa-exit"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_operations_support",
    "domainId": "business_systems",
    "name": "Give manufacturing, warehouse, and maintenance teams applications that support the work.",
    "tagline": "Connect scheduling, inventory, traceability, quality, equipment maintenance, and fulfillment.",
    "situation": "Frontline teams rely on paper, whiteboards, or clunky legacy terminals because enterprise software fails to match floor workflows.",
    "outcome": "Connected frontline operational tooling linking production scheduling, warehouse inventory, lot traceability, and maintenance.",
    "deliverables": [
      "Operational workflow gap analysis",
      "Shop-floor & warehouse interface blueprint",
      "Tooling rollout plan"
    ],
    "inclusions": [
      "Floor workflow mapping",
      "Operational interface design",
      "Inventory/maintenance alignment"
    ],
    "exclusions": [
      "Physical material handling equipment supply"
    ],
    "tags": [
      "manufacturing",
      "warehouse",
      "mes",
      "wms",
      "maintenance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_cutover_readiness",
    "domainId": "business_systems",
    "name": "Prepare an implementation for cutover and stable operation.",
    "tagline": "Address integration, testing, business readiness, ownership, cutover planning, and post-launch support.",
    "situation": "Approaching go-live date with unverified data migrations, untested integrations, and unprepared business users.",
    "outcome": "Rigorous cutover rehearsal, operational readiness gating, clear run-rate criteria, and hypercare support organization.",
    "deliverables": [
      "Cutover minute-by-minute runbook",
      "Go/no-go readiness scorecard",
      "Hypercare operating charter"
    ],
    "inclusions": [
      "Go/no-go criteria",
      "Cutover dry run execution",
      "Hypercare escalation planning"
    ],
    "exclusions": [
      "Unlimited 24/7 staffing without agreed shifts"
    ],
    "tags": [
      "cutover",
      "go-live",
      "readiness",
      "hypercare"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_lifecycle_control",
    "domainId": "business_systems",
    "name": "Keep applications effective and controlled as the business changes.",
    "tagline": "Manage upgrades, improvements, required validation, and retirement with business owners.",
    "situation": "Enterprise applications degrade over time due to uncontrolled customizations, unpatched versions, and technical debt.",
    "outcome": "Application lifecycle management framework governing upgrades, regulatory validation, change control, and scheduled retirement.",
    "deliverables": [
      "Application lifecycle policy",
      "Upgrade & validation schedule",
      "Technical debt retirement register"
    ],
    "inclusions": [
      "Change governance protocol",
      "Release calendar design",
      "Validation compliance framework"
    ],
    "exclusions": [
      "Direct vendor patch authorship"
    ],
    "tags": [
      "lifecycle-management",
      "compliance",
      "change-control"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "bs_agentic_workflows",
    "domainId": "business_systems",
    "name": "Make enterprise applications ready to support agentic workflows.",
    "tagline": "Establish usable interfaces, controlled actions, and integration patterns around existing systems.",
    "situation": "Autonomous agents and automation scripts cannot interact safely with legacy enterprise applications without breaking data integrity.",
    "outcome": "Secure API endpoints, controlled execution boundaries, idempotency safeguards, and audit trails enabling agents to operate with enterprise systems.",
    "deliverables": [
      "Agentic integration architecture",
      "Action boundary & permission policy",
      "Audit logging & rollback mechanism"
    ],
    "inclusions": [
      "API access surface design",
      "Execution safety guardrails",
      "State mutation logging"
    ],
    "exclusions": [
      "Unbounded autonomous financial transaction rights"
    ],
    "tags": [
      "agentic-workflows",
      "api-readiness",
      "enterprise-ai"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_modern_dept",
    "domainId": "it_ot_operations",
    "group": "IT modernization and service operations",
    "name": "Build an IT department equipped for the business you are becoming.",
    "tagline": "Modernize its operating model, skills, services, and provider relationships—including support for AI and agentic systems.",
    "situation": "IT viewed as a slow, reactive cost center unable to support modern digital initiatives, cloud, or agentic capabilities.",
    "outcome": "A modernized IT operating model with clear service ownership, contemporary skills, agile delivery, and scalable vendor partnerships.",
    "deliverables": [
      "IT operating model blueprint",
      "Staff skill development & staffing plan",
      "Service delivery catalog"
    ],
    "inclusions": [
      "Operating model redesign",
      "Service catalog definition",
      "Vendor partner alignment"
    ],
    "exclusions": [
      "Staff union negotiation"
    ],
    "tags": [
      "it-modernization",
      "operating-model",
      "org-design"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_infra_modernization",
    "domainId": "it_ot_operations",
    "group": "IT modernization and service operations",
    "name": "Modernize infrastructure around performance, resilience, and growth.",
    "tagline": "Improve networks, compute, storage, cloud services, and end-user environments, with visibility into capacity and cost.",
    "situation": "Aging on-premises servers, fragile network links, and uncontrolled cloud spending creating outages and performance bottlenecks.",
    "outcome": "Resilient hybrid infrastructure with optimized networks, secure cloud landing zones, and clear capacity and cost transparency.",
    "deliverables": [
      "Infrastructure architecture roadmap",
      "Cloud cost & capacity optimization audit",
      "Resilience & redundancy plan"
    ],
    "inclusions": [
      "Cloud & on-prem assessment",
      "Network topology review",
      "Capacity & spend modeling"
    ],
    "exclusions": [
      "Physical hardware disposal"
    ],
    "tags": [
      "infrastructure",
      "cloud",
      "networks",
      "resilience"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_dependable_support",
    "domainId": "it_ot_operations",
    "group": "IT modernization and service operations",
    "name": "Make technology support dependable for offices and production.",
    "tagline": "Establish service ownership, coverage, escalation, and response around operating priorities.",
    "situation": "Unresolved helpdesk tickets, production-floor support delays, and lack of clear escalation during critical operating hours.",
    "outcome": "Dependable 24/7 support workflows, clear service ownership, rapid incident response, and transparent ticket escalation.",
    "deliverables": [
      "Service desk operating charter",
      "Severity escalation matrix",
      "Incident response SLA dashboard"
    ],
    "inclusions": [
      "Escalation tier design",
      "Support coverage mapping",
      "SLA monitoring setup"
    ],
    "exclusions": [
      "Direct tier-1 helpdesk call answering"
    ],
    "tags": [
      "service-desk",
      "incident-management",
      "operations-support"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_agentic_runtime",
    "domainId": "it_ot_operations",
    "group": "IT modernization and service operations",
    "name": "Give agentic systems a controlled, supportable operating environment.",
    "tagline": "Establish runtime environments, monitoring, deployment practices, support ownership, and recovery procedures.",
    "situation": "AI models and automated scripts running on unmanaged machines with no monitoring, access control, or disaster recovery.",
    "outcome": "Production runtime environment with containerization, observability, deployment pipelines, support ownership, and auto-recovery.",
    "deliverables": [
      "Agentic runtime infrastructure specification",
      "Monitoring & alert runbooks",
      "Disaster recovery failover plan"
    ],
    "inclusions": [
      "Containerized runtime architecture",
      "Telemetry and health checks",
      "Automated restart runbooks"
    ],
    "exclusions": [
      "AI model training compute procurement"
    ],
    "tags": [
      "agentic-runtime",
      "devops",
      "observability",
      "ai-infrastructure"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_security_remediation",
    "domainId": "it_ot_operations",
    "group": "Cybersecurity and resilience",
    "name": "Identify security weaknesses and verify agreed remediation.",
    "tagline": "Coordinate vulnerability assessments and penetration testing with qualified specialists, prioritize findings, and verify corrections through appropriate retesting.",
    "situation": "Unknown exposure to cyber threats, unpatched vulnerabilities, or audit findings lacking practical remediation oversight.",
    "outcome": "Coordinated independent vulnerability assessments, risk-prioritized remediation roadmaps, and verified corrective retesting.",
    "deliverables": [
      "Security vulnerability remediation matrix",
      "Third-party assessment oversight report",
      "Retest verification sign-off"
    ],
    "inclusions": [
      "Third-party pen-test coordination",
      "Remediation prioritization",
      "Corrective retest oversight"
    ],
    "exclusions": [
      "Offensive in-house black-hat pen-testing"
    ],
    "tags": [
      "cybersecurity",
      "vulnerability-management",
      "pen-testing"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_access_control",
    "domainId": "it_ot_operations",
    "group": "Cybersecurity and resilience",
    "name": "Control access across employees, partners, vendors, and agents.",
    "tagline": "Establish appropriate identities, permissions, lifecycle management, and access reviews.",
    "situation": "Excessive user permissions, orphaned accounts from ex-employees, unmonitored vendor logins, and ungoverned agent keys.",
    "outcome": "Unified identity governance, role-based access control (RBAC), automated offboarding, and regular auditable access reviews.",
    "deliverables": [
      "Identity & access governance policy",
      "RBAC role matrix",
      "Automated provisioning/deprovisioning runbook"
    ],
    "inclusions": [
      "Identity lifecycle design",
      "RBAC matrix",
      "Access certification workflow"
    ],
    "exclusions": [
      "Commercial identity provider software licenses"
    ],
    "tags": [
      "iam",
      "access-control",
      "identity-governance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_monitoring_response",
    "domainId": "it_ot_operations",
    "group": "Cybersecurity and resilience",
    "name": "Make security monitoring and incident response operational.",
    "tagline": "Define monitoring coverage, response responsibilities, escalation, and retained evidence.",
    "situation": "Security alerts go unnoticed or lack actionable response playbooks when an actual compromise or anomaly occurs.",
    "outcome": "Operationalized security monitoring (SIEM/MDR), defined response protocols, clear team responsibilities, and immutable evidence retention.",
    "deliverables": [
      "Security monitoring coverage map",
      "Incident response playbook",
      "Evidence retention & forensics protocol"
    ],
    "inclusions": [
      "Monitoring coverage scoping",
      "Incident playbook creation",
      "Forensic retention protocols"
    ],
    "exclusions": [
      "Legal attorney-client privilege defense"
    ],
    "tags": [
      "security-operations",
      "soc",
      "incident-response",
      "siem"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_disaster_recovery",
    "domainId": "it_ot_operations",
    "group": "Cybersecurity and resilience",
    "name": "Establish and test recovery for critical business and plant services.",
    "tagline": "Connect business continuity and disaster recovery plans with backups, restoration dependencies, recovery priorities, and team responsibilities.",
    "situation": "Disaster recovery plans exist only on paper; backups have never been restored, and recovery time objectives (RTO) are unknown.",
    "outcome": "Validated business continuity and disaster recovery framework with tested immutable backups, verified restore times, and assigned teams.",
    "deliverables": [
      "BCP/DR operational playbook",
      "Backup restoration test report",
      "RTO/RPO SLA verification register"
    ],
    "inclusions": [
      "Recovery time objective (RTO) mapping",
      "Backup restoration rehearsal",
      "Team responsibility matrix"
    ],
    "exclusions": [
      "Disaster declaration insurance claims"
    ],
    "tags": [
      "disaster-recovery",
      "business-continuity",
      "backups",
      "resilience"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_plant_responsibilities",
    "domainId": "it_ot_operations",
    "group": "Operational technology and IT/OT coordination",
    "name": "Get IT and plant technology teams operating from shared responsibilities.",
    "tagline": "Align ownership, support, vendor access, maintenance windows, and change practices around production needs.",
    "situation": "Friction between corporate IT and manufacturing plant teams over scheduled outages, security patches, and plant floor changes.",
    "outcome": "Shared IT/OT governance charter aligning support coverage, maintenance windows, change control, and vendor access to production schedules.",
    "deliverables": [
      "IT/OT joint operating charter",
      "Plant maintenance window schedule",
      "Change management protocol for production"
    ],
    "inclusions": [
      "Maintenance window alignment",
      "Change approval protocol",
      "Vendor floor access controls"
    ],
    "exclusions": [
      "Direct equipment mechanical repairs"
    ],
    "tags": [
      "it-ot",
      "plant-governance",
      "manufacturing-it"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "it_plant_floor_connect",
    "domainId": "it_ot_operations",
    "group": "Operational technology and IT/OT coordination",
    "name": "Connect plant-floor technology to business systems through controlled information flows.",
    "tagline": "Coordinate PLC-connected equipment and industrial networks with plant teams and qualified specialists, accounting for segmentation, safety, and recovery responsibilities.",
    "situation": "Plant equipment is isolated from business systems or connected haphazardly without network segmentation, risking plant security.",
    "outcome": "Secure, segmented industrial network architecture bridging PLCs and SCADA to enterprise business systems with fail-safe boundaries.",
    "deliverables": [
      "Industrial network segmentation architecture",
      "PLC-to-ERP data bridge design",
      "Plant network security baseline"
    ],
    "inclusions": [
      "Purdue model network design",
      "PLC data exchange scoping",
      "Safety isolation guardrails"
    ],
    "exclusions": [
      "Direct PLC ladder logic authoring"
    ],
    "tags": [
      "industrial-automation",
      "scada",
      "plc",
      "ot-security"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_master_records",
    "domainId": "data_knowledge",
    "group": "Trusted records and data foundations",
    "name": "Get teams and systems working from consistent business records.",
    "tagline": "Align master data, definitions, stewardship, and maintenance rules.",
    "situation": "Duplicate customer accounts, conflicting item masters, and mismatched vendor records creating operational friction and reporting errors.",
    "outcome": "Unified master data management (MDM) framework with clear definitions, assigned data stewards, and automated validation rules.",
    "deliverables": [
      "Master data governance charter",
      "Data definition dictionary",
      "Deduplication & standardization pipeline"
    ],
    "inclusions": [
      "Master data dictionary",
      "Stewardship assignment",
      "Validation rules"
    ],
    "exclusions": [
      "Manual row-by-row data entry"
    ],
    "tags": [
      "master-data",
      "data-governance",
      "data-quality"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_data_migration",
    "domainId": "data_knowledge",
    "group": "Trusted records and data foundations",
    "name": "Move required data with a clear record of what reconciles and what does not.",
    "tagline": "Preserve necessary history through tested migration, validation, and documented exceptions.",
    "situation": "Data migration during system replacement at risk of corrupting historical records, losing audit trails, or delaying cutover.",
    "outcome": "Tested, repeatable data migration pipeline with comprehensive reconciliation reports, validation sign-offs, and documented exceptions.",
    "deliverables": [
      "Migration extraction/transformation script library",
      "Automated reconciliation audit report",
      "Legacy exception register"
    ],
    "inclusions": [
      "Automated reconciliation matching",
      "Exception documentation",
      "Audit trail validation"
    ],
    "exclusions": [
      "Permanent storage of discarded legacy data"
    ],
    "tags": [
      "data-migration",
      "reconciliation",
      "etl"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_data_foundation",
    "domainId": "data_knowledge",
    "group": "Trusted records and data foundations",
    "name": "Build a company-owned data foundation across fragmented systems.",
    "tagline": "Connect sources with clear lineage, quality checks, and governed access.",
    "situation": "Valuable business history locked in proprietary vendor silos, disparate databases, and inaccessible spreadsheets.",
    "outcome": "A company-owned cloud data warehouse/lakehouse with automated ingestion, traceable data lineage, and role-based access control.",
    "deliverables": [
      "Data warehouse architecture",
      "Automated ETL/ELT pipelines",
      "Data lineage and dictionary catalog"
    ],
    "inclusions": [
      "Data warehouse design",
      "Ingestion pipeline setup",
      "Lineage documentation"
    ],
    "exclusions": [
      "Third-party cloud infrastructure hosting charges"
    ],
    "tags": [
      "data-warehouse",
      "data-foundation",
      "cloud-data"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_repeatable_analytics",
    "domainId": "data_knowledge",
    "group": "Analytics and insight",
    "name": "Answer business questions without rebuilding the report every time.",
    "tagline": "Establish repeatable analytics and business intelligence for operating and customer decisions, with agreed measures and traceable sources.",
    "situation": "Analysts and managers spending days rebuilding spreadsheet reports each month with conflicting calculations and untraceable sources.",
    "outcome": "Automated, reliable business intelligence reporting models with standardized metric definitions and drill-down traceability.",
    "deliverables": [
      "Semantic business reporting layer",
      "Core operational dashboards",
      "Metric definition handbook"
    ],
    "inclusions": [
      "Semantic layer design",
      "Dashboard automation",
      "KPI calculation standard"
    ],
    "exclusions": [
      "Ad-hoc bespoke spreadsheet modeling on request"
    ],
    "tags": [
      "bi",
      "analytics",
      "reporting",
      "dashboards"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_self_service_bi",
    "domainId": "data_knowledge",
    "group": "Analytics and insight",
    "name": "Give teams self-service analytics without competing versions of the truth.",
    "tagline": "Enable people to explore information using shared definitions, governed access, and understandable limitations.",
    "situation": "Business users unable to answer basic questions without waiting for IT, leading to unauthorized shadow databases.",
    "outcome": "Governed self-service analytics environment allowing business users to explore vetted data models safely without conflicting numbers.",
    "deliverables": [
      "Self-service reporting model",
      "User training & query templates",
      "Data access governance policy"
    ],
    "inclusions": [
      "Curated self-service models",
      "User access controls",
      "Vetted template catalog"
    ],
    "exclusions": [
      "Unrestricted production database access"
    ],
    "tags": [
      "self-service-bi",
      "data-enablement",
      "governance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_knowledge_base",
    "domainId": "data_knowledge",
    "group": "Company knowledge and institutional memory",
    "name": "Build a knowledge base people can find, trust, and maintain.",
    "tagline": "Organize procedures, business rules, documentation, and expertise with clear ownership.",
    "situation": "Company SOPs, operational guides, and business rules scattered across shared drives, wikis, and local folders, quickly becoming obsolete.",
    "outcome": "Centralized, searchable corporate knowledge base with clear content ownership, review cadences, and verified documentation.",
    "deliverables": [
      "Knowledge management architecture",
      "SOP template and curation workflow",
      "Content ownership register"
    ],
    "inclusions": [
      "Knowledge structure design",
      "Ownership model",
      "Search indexing setup"
    ],
    "exclusions": [
      "Authoring every department SOP from scratch"
    ],
    "tags": [
      "knowledge-base",
      "sop",
      "documentation"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_preserve_memory",
    "domainId": "data_knowledge",
    "group": "Company knowledge and institutional memory",
    "name": "Preserve institutional knowledge before people, systems, or processes move on.",
    "tagline": "Capture decisions, operating history, lessons, and context at risk of being lost.",
    "situation": "Retirement, turnover, or system decommissioning threatening decades of unwritten operating wisdom and critical institutional memory.",
    "outcome": "Structured capture and indexing of tacit knowledge, critical business decisions, operational history, and key vendor relationships.",
    "deliverables": [
      "Institutional knowledge capture playbook",
      "Recorded expert interviews & decision logs",
      "Searchable operational archive"
    ],
    "inclusions": [
      "Interview methodologies",
      "Decision log structuring",
      "Archive creation"
    ],
    "exclusions": [
      "Retention of non-business personal notes"
    ],
    "tags": [
      "institutional-memory",
      "knowledge-retention",
      "succession"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_rag_search",
    "domainId": "data_knowledge",
    "group": "Company knowledge and institutional memory",
    "name": "Ask questions of company knowledge and see the supporting sources.",
    "tagline": "Use enterprise search and retrieval-augmented generation—RAG—with tested retrieval and clear handling of insufficient evidence.",
    "situation": "Employees waste hours looking for answers across PDFs, policies, and emails, or receive inaccurate answers from generic AI.",
    "outcome": "Enterprise retrieval-augmented generation (RAG) system answering natural language questions with verified citations to source documents.",
    "deliverables": [
      "Enterprise RAG pipeline",
      "Document chunking and vector index",
      "Citation & insufficient-evidence guardrail"
    ],
    "inclusions": [
      "RAG indexing pipeline",
      "Source citation enforcement",
      "Insufficient-evidence fallback"
    ],
    "exclusions": [
      "Unvetted public web scraping"
    ],
    "tags": [
      "rag",
      "enterprise-search",
      "ai-knowledge"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "dk_ai_data_readiness",
    "domainId": "data_knowledge",
    "group": "Company knowledge and institutional memory",
    "name": "Prepare company information for responsible AI and agent use.",
    "tagline": "Address readiness, permissions, privacy, quality, and the rules for retrieving and updating knowledge.",
    "situation": "Unstructured enterprise documents contain confidential data, PII, or contradictory rules that cause AI systems to leak data or fail.",
    "outcome": "Data preparation pipeline establishing permission filtering, PII redaction, content quality checks, and ingestion rules for AI agents.",
    "deliverables": [
      "AI data readiness assessment",
      "Permission & redaction filter rules",
      "Agent ingestion & update protocols"
    ],
    "inclusions": [
      "PII redaction filtering",
      "Permission boundary checks",
      "Content quality scoring"
    ],
    "exclusions": [
      "Legal compliance warranty"
    ],
    "tags": [
      "ai-readiness",
      "data-privacy",
      "security",
      "agent-governance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_reconciliation",
    "domainId": "financial_systems",
    "group": "Financial operations and controls",
    "name": "Resolve the differences holding up reconciliation.",
    "tagline": "Connect operational records, subledgers, and the general ledger, with finance retaining accounting judgments and posting approvals.",
    "situation": "Persistent discrepancies between operational systems (WMS, TMS, billing) and the general ledger causing manual spreadsheet reconciliations.",
    "outcome": "Automated subledger-to-GL reconciliation identifying variances at transaction level, while finance retains full approval over adjustments.",
    "deliverables": [
      "Automated reconciliation matching rules",
      "Variance analysis dashboard",
      "Posting adjustment workflow"
    ],
    "inclusions": [
      "Matching rule definition",
      "Variance drilldown",
      "Approval workflow setup"
    ],
    "exclusions": [
      "Signing off on statutory tax filings"
    ],
    "tags": [
      "reconciliation",
      "general-ledger",
      "subledgers",
      "accounting"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_close_repeatability",
    "domainId": "financial_systems",
    "group": "Financial operations and controls",
    "name": "Make financial close more repeatable and easier to explain.",
    "tagline": "Improve records, reconciliations, responsibilities, and supporting evidence.",
    "situation": "Month-end close is stressful, takes 15+ days, relies on heroics, and produces numbers that are difficult to audit or explain.",
    "outcome": "Standardized, repeatable close checklist, automated journal entries, clear role accountability, and complete audit-ready workpapers.",
    "deliverables": [
      "Close calendar & task management system",
      "Automated recurring entry templates",
      "Audit workpaper repository"
    ],
    "inclusions": [
      "Close calendar streamlining",
      "Workpaper standardization",
      "Checklist automation"
    ],
    "exclusions": [
      "Acting as external statutory auditor"
    ],
    "tags": [
      "month-end-close",
      "financial-reporting",
      "close-acceleration"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_ma_financial_structure",
    "domainId": "financial_systems",
    "group": "Financial operations and controls",
    "name": "Bring acquired entities into a coherent financial structure.",
    "tagline": "Align accounts, mappings, intercompany records, and reporting requirements.",
    "situation": "Acquisitions running on separate charts of accounts, creating convoluted manual rollups, intercompany disputes, and delayed reporting.",
    "outcome": "Unified enterprise chart of accounts, automated account mapping, standardized intercompany reconciliations, and consolidated reporting.",
    "deliverables": [
      "Enterprise chart of accounts blueprint",
      "Account mapping crosswalk",
      "Intercompany elimination workflow"
    ],
    "inclusions": [
      "COA harmonization",
      "Account mapping crosswalk",
      "Intercompany elimination design"
    ],
    "exclusions": [
      "Legal tax restructuring advice"
    ],
    "tags": [
      "m-and-a",
      "chart-of-accounts",
      "consolidation",
      "intercompany"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_invoice_discrepancies",
    "domainId": "financial_systems",
    "group": "Financial operations and controls",
    "name": "Catch invoice and charge discrepancies before approval.",
    "tagline": "Surface mismatches and duplicates for finance to review against business records.",
    "situation": "Duplicate invoices, incorrect contract rates, fuel surcharges, and unapproved vendor billings slipping through manual AP approvals.",
    "outcome": "Automated pre-approval invoice audit matching vendor charges against POs, receiving records, and contracts with exception queues.",
    "deliverables": [
      "Automated invoice 3-way matching rules",
      "Discrepancy review queue",
      "Vendor billing audit report"
    ],
    "inclusions": [
      "Automated matching rules",
      "Exception queue design",
      "Variance tolerance thresholds"
    ],
    "exclusions": [
      "Manual payment disbursement execution"
    ],
    "tags": [
      "ap-automation",
      "invoice-audit",
      "discrepancies",
      "internal-controls"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_preserve_controls",
    "domainId": "financial_systems",
    "group": "Financial operations and controls",
    "name": "Preserve financial controls through systems change.",
    "tagline": "Carry approvals, reconciliation, and traceability into the new operating environment.",
    "situation": "ERP migration or process automation threatens to bypass segregation of duties, delegation of authority, and audit trails.",
    "outcome": "Verified financial internal controls architecture carrying segregation of duties, approval matrices, and SOX/audit traceability into the new system.",
    "deliverables": [
      "Internal controls matrix",
      "Segregation of duties (SoD) rulebook",
      "System change audit verification"
    ],
    "inclusions": [
      "SoD conflict analysis",
      "Approval matrix configuration",
      "Audit trail verification"
    ],
    "exclusions": [
      "Formal external SOX attestations"
    ],
    "tags": [
      "internal-controls",
      "sod",
      "compliance",
      "audit"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_unified_cfo_view",
    "domainId": "financial_systems",
    "group": "Enterprise Performance Management, Planning & Profitability",
    "name": "Give the CFO a unified view of financial performance across the business.",
    "tagline": "Connect consolidation, eliminations, and management reporting through Enterprise Performance Management—EPM—with finance approving accounting rules.",
    "situation": "CFO and executive team lack a single consolidated view of performance across divisions, currencies, and entities without manual consolidation.",
    "outcome": "Enterprise Performance Management (EPM) platform connecting multi-entity consolidations, automated eliminations, and executive financial dashboards.",
    "deliverables": [
      "EPM consolidation model",
      "Automated elimination logic",
      "Executive financial reporting suite"
    ],
    "inclusions": [
      "EPM consolidation design",
      "Automated eliminations",
      "CFO executive reporting pack"
    ],
    "exclusions": [
      "Manual bookkeeping entries"
    ],
    "tags": [
      "epm",
      "cfo-reporting",
      "consolidation",
      "financial-performance"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_budget_forecast_actuals",
    "domainId": "financial_systems",
    "group": "Enterprise Performance Management, Planning & Profitability",
    "name": "Connect budgeting and forecasting to actual business performance.",
    "tagline": "Link operating drivers, assumptions, actuals, and revisions to the consolidated financial picture.",
    "situation": "Static annual budgets disconnected from day-to-day operations, making dynamic re-forecasting slow and error-prone.",
    "outcome": "Driver-based rolling forecast linking sales, headcount, and production actuals directly to dynamic financial projections.",
    "deliverables": [
      "Driver-based financial planning model",
      "Rolling forecast templates",
      "Budget-to-actual variance reporting"
    ],
    "inclusions": [
      "Driver model design",
      "Rolling forecast cadence",
      "Variance reporting automation"
    ],
    "exclusions": [
      "Providing formal investment brokerage advice"
    ],
    "tags": [
      "fp-and-a",
      "budgeting",
      "forecasting",
      "variance-analysis"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_integrated_planning",
    "domainId": "financial_systems",
    "group": "Enterprise Performance Management, Planning & Profitability",
    "name": "Bring demand, supply, inventory, and finance into one planning process.",
    "tagline": "Establish integrated business planning with commercial, operating, and finance leaders making coordinated decisions.",
    "situation": "Commercial, operations, and finance teams operating from competing demand projections, causing inventory write-downs and stockouts.",
    "outcome": "Integrated Business Planning (IBP / S&OP) cadence aligning demand forecasts, supply constraints, inventory targets, and financial plans.",
    "deliverables": [
      "IBP operating cadence & governance",
      "Integrated consensus planning model",
      "Executive S&OP meeting pack"
    ],
    "inclusions": [
      "IBP process design",
      "Demand/supply consensus model",
      "Meeting rhythm definition"
    ],
    "exclusions": [
      "Assuming commercial sales quota risk"
    ],
    "tags": [
      "ibp",
      "s-and-op",
      "demand-planning",
      "inventory-optimization"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_working_capital",
    "domainId": "financial_systems",
    "group": "Enterprise Performance Management, Planning & Profitability",
    "name": "Make working capital and cash needs visible.",
    "tagline": "Connect inventory, receivables, payables, and operating assumptions to the financial outlook.",
    "situation": "Cash surprises and working capital crunches due to hidden inventory buildup, slow collections, and unpredictable payment timing.",
    "outcome": "13-week cash forecasting model and working capital management dashboard tracking Days Sales Outstanding (DSO), DPO, and inventory turnover.",
    "deliverables": [
      "13-week direct cash forecast model",
      "Working capital analytics dashboard",
      "AR collections & AP payment pacing playbook"
    ],
    "inclusions": [
      "13-week cash model",
      "Working capital metrics dashboard",
      "Payment timing playbook"
    ],
    "exclusions": [
      "Providing commercial credit or loan guarantees"
    ],
    "tags": [
      "working-capital",
      "cash-flow",
      "treasury",
      "dso"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "fs_abc_profitability",
    "domainId": "financial_systems",
    "group": "Enterprise Performance Management, Planning & Profitability",
    "name": "Understand the cost and profitability of products, customers, and services.",
    "tagline": "Apply Activity-Based Costing—ABC—with agreed cost drivers, allocations, and visible assumptions to support pricing and operating decisions.",
    "situation": "Averaged cost allocations hide unprofitable customers, loss-making product SKUs, and true cost-to-serve in production and distribution.",
    "outcome": "Practical Activity-Based Costing (ABC) model revealing true product margins, customer profitability, and cost-to-serve to guide pricing decisions.",
    "deliverables": [
      "Activity-based cost allocation model",
      "Customer & SKU profitability matrix",
      "Margin optimization recommendations"
    ],
    "inclusions": [
      "Cost driver allocation model",
      "Customer/SKU profitability matrix",
      "Assumptions documentation"
    ],
    "exclusions": [
      "Multi-year academic accounting rebuilds"
    ],
    "tags": [
      "activity-based-costing",
      "profitability",
      "cost-to-serve",
      "pricing-strategy"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_handoffs",
    "domainId": "workflows_automation",
    "name": "Move work between teams without repeated entry and chasing.",
    "tagline": "Connect information, status, responsibilities, and handoffs.",
    "situation": "Work stalls between departments due to email chains, lost attachments, redundant data re-entry, and missing status visibility.",
    "outcome": "Connected cross-functional workflow automating task handoffs, status tracking, notifications, and clear ownership between teams.",
    "deliverables": [
      "Cross-departmental process blueprint",
      "Automated workflow orchestration",
      "Task & status tracking dashboard"
    ],
    "inclusions": [
      "Handoff mapping",
      "Workflow automation design",
      "Status dashboard"
    ],
    "exclusions": [
      "Custom code development outside agreed scope"
    ],
    "tags": [
      "workflow-automation",
      "handoffs",
      "efficiency"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_order_to_cash",
    "domainId": "workflows_automation",
    "name": "Connect order-to-cash across sales, fulfillment, and finance.",
    "tagline": "Make progress and exceptions visible from customer commitment through billing.",
    "situation": "Orders delayed, miscommunicated between sales and fulfillment, or billed incorrectly due to fragmented order-to-cash handoffs.",
    "outcome": "Integrated order-to-cash workflow providing real-time visibility from customer order through warehouse fulfillment, shipping, and accurate invoice generation.",
    "deliverables": [
      "Order-to-cash process architecture",
      "Fulfillment & billing automation",
      "Exception and block resolution queue"
    ],
    "inclusions": [
      "End-to-end O2C process mapping",
      "Order block automation",
      "Billing handoff integration"
    ],
    "exclusions": [
      "Direct freight carrier driving/delivery"
    ],
    "tags": [
      "order-to-cash",
      "fulfillment",
      "billing",
      "revenue-operations"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_procure_to_pay",
    "domainId": "workflows_automation",
    "name": "Connect procure-to-pay across purchasing, receiving, and finance.",
    "tagline": "Align requests, orders, receipts, exceptions, and approvals.",
    "situation": "Maverick spending, lost receiving receipts, and delayed payments caused by disconnected procurement and accounting processes.",
    "outcome": "Streamlined procure-to-pay workflow aligning purchase requisitions, automated approvals, receiving validation, and three-way invoice matching.",
    "deliverables": [
      "Procure-to-pay workflow specification",
      "Approval routing engine",
      "Receiving confirmation interface"
    ],
    "inclusions": [
      "Requisition to PO automation",
      "Approval rules engine",
      "Receiving matching setup"
    ],
    "exclusions": [
      "Commercial vendor pricing renegotiation"
    ],
    "tags": [
      "procure-to-pay",
      "purchasing",
      "ap",
      "approval-workflow"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_mobile_capture",
    "domainId": "workflows_automation",
    "name": "Capture work where it happens.",
    "tagline": "Give shop-floor, warehouse, and field teams practical ways to record activity and return usable information.",
    "situation": "Field technicians, shop-floor operators, and warehouse staff recording data on clipboards, resulting in delayed and inaccurate records.",
    "outcome": "Mobile and barcode-enabled interfaces designed for frontline workers to capture maintenance, inventory moves, and quality inspections in real time.",
    "deliverables": [
      "Mobile frontline capture interface",
      "Barcode/RFID integration specification",
      "Offline data synchronization mechanism"
    ],
    "inclusions": [
      "Mobile screen workflow design",
      "Barcode scanning integration",
      "Offline sync logic"
    ],
    "exclusions": [
      "Ruggedized device hardware procurement"
    ],
    "tags": [
      "mobile-capture",
      "field-service",
      "shop-floor",
      "barcoding"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_exception_routing",
    "domainId": "workflows_automation",
    "name": "Get operational exceptions to someone who can resolve them.",
    "tagline": "Route stuck handoffs and missing information to named owners with clear escalation.",
    "situation": "Exceptions (pricing disputes, stockouts, shipping holds) sit unaddressed in queues, delaying orders and frustrating customers.",
    "outcome": "Automated exception detection and intelligent routing directly to named operational owners with SLA-based escalation timers.",
    "deliverables": [
      "Exception taxonomy & routing rules",
      "Operational resolution queue",
      "Escalation timer & alert framework"
    ],
    "inclusions": [
      "Exception taxonomy",
      "Routing rules engine",
      "Escalation timer configuration"
    ],
    "exclusions": [
      "Assuming operational responsibility for customer disputes"
    ],
    "tags": [
      "exception-handling",
      "workflow-routing",
      "sla"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_multi_site_process",
    "domainId": "workflows_automation",
    "name": "Establish a common way of working across sites.",
    "tagline": "Agree shared processes while retaining necessary local variations.",
    "situation": "Multiple manufacturing plants or distribution centers operating completely different processes, preventing shared labor and standardized reporting.",
    "outcome": "Harmonized operational standards across multi-site operations, establishing common workflows while accommodating legitimate local regulations and facility layouts.",
    "deliverables": [
      "Multi-site operating standard",
      "Facility variation matrix",
      "Cross-site process audit framework"
    ],
    "inclusions": [
      "Standard workflow harmonization",
      "Permitted local variation matrix",
      "Process audit criteria"
    ],
    "exclusions": [
      "Facility construction layout planning"
    ],
    "tags": [
      "multi-site",
      "standardization",
      "operational-excellence"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_supplier_cost_pricing",
    "domainId": "workflows_automation",
    "name": "Connect supplier cost changes to informed pricing decisions.",
    "tagline": "Show the impact, route changes for business review, and control approved updates.",
    "situation": "Supplier price increases and raw material surcharges erode operating margins because customer price updates lag by months.",
    "outcome": "Automated workflow analyzing margin impact of supplier cost changes, routing price adjustment proposals to commercial leadership, and updating pricing schedules upon approval.",
    "deliverables": [
      "Margin impact calculation engine",
      "Commercial review & approval workflow",
      "Automated price schedule update interface"
    ],
    "inclusions": [
      "Margin impact analysis logic",
      "Review routing workflow",
      "Price schedule update mechanism"
    ],
    "exclusions": [
      "Guaranteed market gross margin outcomes"
    ],
    "tags": [
      "pricing-workflow",
      "margin-protection",
      "cost-passthrough"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_process_adoption",
    "domainId": "workflows_automation",
    "name": "Make new processes part of everyday operations.",
    "tagline": "Include training, adoption measures, operational handover, and owners equipped to run and improve the process.",
    "situation": "New systems and automated workflows abandoned by staff after consultants leave because training was theoretical and ongoing ownership was undefined.",
    "outcome": "Comprehensive operational handover with practical role-specific training, adoption telemetry, standard operating runbooks, and empowered internal process owners.",
    "deliverables": [
      "Operational training curriculum",
      "Process adoption monitoring telemetry",
      "Handover charter and runbooks"
    ],
    "inclusions": [
      "Role-specific training guides",
      "Usage telemetry tracking",
      "Internal owner handover"
    ],
    "exclusions": [
      "Permanent outsourced staff management"
    ],
    "tags": [
      "adoption",
      "change-management",
      "operational-handover"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_ai_pilot_to_scale",
    "domainId": "workflows_automation",
    "name": "Move AI-enabled work from pilot into everyday use.",
    "tagline": "Establish performance checks, human review, exception handling, adoption, and practical operating support.",
    "situation": "AI prototypes succeed in demos but fail in everyday operations due to edge cases, lack of human review protocols, and absent support structures.",
    "outcome": "Hardened operational workflow transitioning AI pilots into production with automated confidence checks, human review queues, fallback mechanisms, and user support.",
    "deliverables": [
      "Production AI operating protocol",
      "Human-in-the-loop review queue",
      "Model drift and accuracy monitoring dashboard"
    ],
    "inclusions": [
      "Confidence thresholding rules",
      "Human review queue integration",
      "Operational support runbook"
    ],
    "exclusions": [
      "Guaranteeing 100% autonomous accuracy without human review"
    ],
    "tags": [
      "ai-adoption",
      "production-ai",
      "human-in-the-loop"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  },
  {
    "id": "wa_recoverable_automation",
    "domainId": "workflows_automation",
    "name": "Keep business work recoverable when automation fails.",
    "tagline": "Establish fallback procedures, authorized manual intervention, reconciliation, and recovery.",
    "situation": "Automated integrations and batch processes fail silently, leaving half-processed transactions and halting operations with no way to recover manually.",
    "outcome": "Resilient workflow architecture with transaction isolation, automated error logging, authorized manual override capabilities, and audited replay/reconciliation mechanisms.",
    "deliverables": [
      "Automation resilience architecture",
      "Manual override & exception protocol",
      "Transaction reconciliation & replay tool"
    ],
    "inclusions": [
      "Idempotent retry architecture",
      "Manual intervention protocol",
      "Replay/audit mechanism"
    ],
    "exclusions": [
      "Third-party cloud infrastructure SLA guarantees"
    ],
    "tags": [
      "resilience",
      "automation-recovery",
      "manual-override",
      "error-handling"
    ],
    "kind": "finite",
    "deliveryMode": "lead"
  }
];

// Backward compatibility map for legacy test IDs
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
