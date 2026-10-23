import Link from "next/link";
import styles from "./clients.module.css";
import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";
import ConstellationsFilm from "@/components/presence/ConstellationsFilm";
import BeehiveFilm from "@/components/presence/BeehiveFilm";
import DiagramModal from "@/components/experience/DiagramModal";

export const metadata: Metadata = {
  title: { absolute: "Experience | idigdata" },
  description:
    "20+ years of CEO, CTO, and CIO business leadership, 50+ enterprise transformations through full-cycle implementations, and three years of hands-on agentic development across Data Integration Group, Sierra Nevada Brewing Co., Access IT, and Timberline Architectural Openings.",
  alternates: { canonical: "/experience/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/experience/",
    title: "Experience | idigdata",
    description:
      "20+ years of CEO, CTO, and CIO business leadership, 50+ enterprise transformations through full-cycle implementations, and three years of hands-on agentic development across Data Integration Group, Sierra Nevada Brewing Co., Access IT, and Timberline Architectural Openings.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "Robert Paddock, Enterprise Transformation Executive: experience" }],
  },
};

const estate = [
  {
    title: "Enterprise ERP",
    tag: "General Ledger",
    rows: [
      "Microsoft Dynamics 365",
      "SAP",
      "Oracle",
      "NetSuite",
    ],
  },
  {
    title: "Corporate Financial Planning",
    tag: "CPM / EPM",
    rows: [
      "OneStream — Enterprise CPM & Financial Close Consolidation",
      "Solver — Corporate Planning, Budgeting & Reporting",
    ],
  },
  {
    title: "Human Capital Management",
    tag: "HCM — People",
    rows: [
      "Workday — Enterprise HCM & Core Human Capital",
      "UKG — Workforce Management, Time & Labor, Payroll",
    ],
  },
  {
    title: "Manufacturing Systems & Plant Integration",
    tag: "Plant Data",
    rows: [
      "ProLeiT — Integration with Brewing & Process Systems",
      "Ignition — Integration with Plant Data & SCADA",
    ],
  },
  {
    title: "Supply Chain & Transportation",
    tag: "WMS — TMS — S&OP",
    rows: [
      "Infios — Warehouse Management System (WMS)",
      "MercuryGate — Transportation Management System (TMS)",
      "John Galt Solutions — Atlas Demand Planning & S&OP",
      "1WorldSync — Master Item Data & GDSN Network",
    ],
  },
  {
    title: "Engineering & Asset Lifecycle",
    tag: "PLM — EAM — AEC",
    rows: [
      "Aras — Product Lifecycle Management (PLM)",
      "Brightly Asset Essentials — Enterprise Asset Management (EAM / CMMS)",
      "Procore — Capital Project & Construction Management",
      "Oracle Primavera — Project scheduling and controls",
    ],
  },
  {
    title: "Customer Intelligence & Route to Market",
    tag: "Customer Data · Growth",
    rows: [
      "Salesforce — Enterprise CRM & Sales Cloud",
      "Customer Data Models & Identity Resolution",
      "VIP (Vermont Info Processing) — 3-Tier Distribution & Depletions",
      "NielsenIQ — Syndicated Retail & Market Measurement",
    ],
  },
  {
    title: "DTC Commerce & Point of Sale",
    tag: "Commerce — POS",
    rows: [
      "Commerce7 — Winery & Craft Beverage DTC, Clubs & Tasting Room POS",
      "Shopify — Enterprise Omnichannel eCommerce",
      "Toast — Hospitality, Taproom & Restaurant POS",
    ],
  },
  {
    title: "Data Core & Integration Spine",
    tag: "Data Core",
    rows: [
      "Databricks — Unified Lakehouse & Analytics",
      "Microsoft Fabric — Enterprise Data Fabric",
      "Azure Data Lake — Cloud Data Storage",
      "Boomi & Fivetran — iPaaS & Automated Data Pipelines",
      "Power BI — Executive Reporting & BI",
    ],
  },
  {
    title: "Legacy Systems & Modernization",
    tag: "Business Rules & Data",
    rows: [
      "AS/400, COBOL applications, mainframe and legacy SQL environments",
      "Business-rule mapping, migration, validation and reconciliation",
      "Integration with retained enterprise systems through ETL and APIs",
    ],
  },
] as const;

export default function ExperiencePage() {
  return (
    <PresenceShell>
      <header className="p-section p-section--tight">
        <div className="page-well">
          <div className="hero-split">
            <div className="home-hero-copy">
              <p className="p-kicker">Experience &middot; Executive Track Record</p>
              <h1 className="p-h1">The breadth to see how the pieces fit.</h1>
              <p className="p-dek">
                I connect people, systems, and workflows to shorten the path from intent to outcome.
              </p>
              <p className="p-prose mt-4">
                <strong>20+ years of business leadership, CEO, CTO, and CIO accountability, and three years of hands-on agentic development.</strong> Across 50+ enterprise transformations, I have led full-cycle implementations from migration and integration through testing, cutover, and go-live—shaping engagements, organizing delivery, and leading change into daily use through <strong>The Outcome Loop</strong> (<em>Intent, Define, Deliver, Outcome</em>).
              </p>
            </div>
            <div className="home-watermark" aria-hidden="true">
              <img
                src="/idigdata-mark.svg"
                alt=""
                style={{
                  display: "block",
                  width: "280px",
                  height: "280px",
                  opacity: 0.18,
                  transform: "rotate(12deg)",
                  border: "none",
                  borderRadius: 0,
                  boxShadow: "none",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* FOUR ROLES OF ENTERPRISE LEADERSHIP */}
      <section className="p-section" id="executive-pillars" aria-labelledby="executive-pillars-title">
        <div className="page-well">
          <p className="p-kicker">Career Record</p>
          <h2 className="p-h2" id="executive-pillars-title">Four distinct executive and operating roles.</h2>
          <p className="p-prose mt-3 max-w-[72ch]">
            Every role below reflects a distinct vantage point on enterprise transformation: founding and scaling an operating business, leading partner-side ERP implementations, serving as enterprise CIO for a multi-site producer, and leading independent transformation and agentic software delivery.
          </p>
          <div className="home-story mt-8">
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">01 // 2016–Present · Transformation &amp; Agentic Delivery</p>
              <h3 className="mt-2">Data Integration Group (idigdata)</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Founder and Principal, Enterprise Transformation</p>
              <p className="p-prose mt-3">
                Lead enterprise transformation for family-owned, private equity-backed, and post-acquisition businesses—carrying engagements from executive discovery and commercial scope through architecture, cutover, go-live, and frontline adoption.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Design and deliver modern application stacks spanning ERP, WMS, MES, planning, CRM, and finance around a company-owned data core.</li>
                <li>Lead migrations from AS/400, COBOL, mainframe, and legacy SQL environments—integrating retained applications while preserving business rules, reconciled data, and financial/regulatory controls.</li>
                <li>Align internal IT, operations, domain champions, and delivery partners through workflow prototyping, end-to-end testing, user acceptance, and cutover.</li>
                <li>Build and operate a multi-harness agentic engineering environment with independent review and human decision authority, turning enterprise knowledge into reusable workflows.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">02 // 2024–2026 · Enterprise CIO Mandate</p>
              <h3 className="mt-2">Sierra Nevada Brewing Co.</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Chief Information Officer (Contract)</p>
              <p className="p-prose mt-3">
                Served as CIO and executive leadership team member for a multi-site national brewer, accountable to the board for technology strategy, investment, operations, data, cybersecurity, and governance.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li><strong>Enterprise transformation:</strong> Led a 26-month transformation with 150+ participants across 25 task forces, consolidating business and plant systems around a company-owned data core through go-live and daily operations.</li>
                <li><strong>IT &amp; OT leadership:</strong> Rebuilt the internal IS/IT organization, modernized enterprise infrastructure and vendor accountability, and connected enterprise systems with plant operations and operational technology (OT).</li>
                <li><strong>Operational continuity:</strong> Maintained continuity and regulatory compliance across purchasing, order-to-cash, planning, manufacturing, warehousing, and finance—including LIMS, food safety, SQF, and TTB.</li>
                <li><strong>Applied agentics:</strong> Built an enterprise digital twin and transformation command system across 25 task forces—generating the 6 process constellations, 74 clusters, and 200+ workflow patterns with human decision authority.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">03 // 2012–2016 · Partner-Side ERP Implementation</p>
              <h3 className="mt-2">Access IT, Inc.</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Lead Consultant and Solution Architect</p>
              <p className="p-prose mt-3">
                Led partner-side Microsoft Dynamics NAV and ContractERP implementations for construction, distribution, manufacturing, and services clients.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Carried delivery from business requirements through custom application design, data migration, integration, testing, cutover, and stabilization.</li>
                <li>Bridged functional requirements and technical delivery across systems integrator, independent software vendor (ISV), and reseller roles.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">04 // 1996–2012 · Business Ownership &amp; Custom Software</p>
              <h3 className="mt-2">Timberline Architectural Openings</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Founder, CEO &amp; CTO</p>
              <p className="p-prose mt-3">
                Founded and scaled a contractor, manufacturer, and distributor of architectural openings, serving as CEO and CTO with full P&amp;L responsibility.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Grew revenue from $250K in year one to $130M by year ten, leading 100+ employees across commercial, manufacturing, distribution, and project operations.</li>
                <li>Connected engineered sales with custom fabrication, supply, and field installation for major resort and commercial builds in Las Vegas, Macau, and nationwide.</li>
                <li>Built proprietary software connecting estimating, project delivery, purchasing, production, inventory, and finance; engaged private equity on expansion financing and distributor turnarounds.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ENTERPRISE BREADTH · OPERATING DEPTH */}
      <section className={"p-section " + styles.section} id="selected-clients" aria-labelledby="selected-clients-title">
        <div className="page-well">
          <p className="p-kicker">Operating Foundations</p>
          <h2 className={"p-h2 " + styles.title} id="selected-clients-title">Enterprise breadth. Operating depth.</h2>
          <p className="p-prose mt-4 text-base lg:text-[17px] leading-relaxed text-[#142840]/90 max-w-[72ch]">
            Every enterprise is uniquely standard: the books must balance and the business must run. Across industries, financial control, regulatory compliance, and operating accountability form a common foundation. The work is knowing where to standardize, where the business differentiates, and how to connect people, systems, and workflows through a unified data core.
          </p>

          <div className={styles.domainsGrid}>
            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Manufacturing &amp; Industrial Distribution</h3>
              <p className={styles.domainText}>
                Purchasing through production, inventory, and delivery—where planning, costing, quality, traceability, and regulatory compliance must work inside daily floor execution.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Financial, Insurance &amp; Legal Services</h3>
              <p className={styles.domainText}>
                Transactions, policies, cases, and obligations moving through structured approvals—governed by risk management, information security, auditability, and financial control.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Healthcare &amp; Life Sciences</h3>
              <p className={styles.domainText}>
                Regulated clinical and facility operations—where infrastructure, life-safety compliance, quality, and end-to-end traceability support both the mission and the business.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Energy, Utilities &amp; Infrastructure</h3>
              <p className={styles.domainText}>
                Capital projects and critical assets across planning, construction, operation, and maintenance—connecting engineering controls, field safety, project costing, and service continuity.
              </p>
            </article>
          </div>

          <div className={styles.orgsBlock}>
            <p className={styles.orgsKicker}>Selected organizations and contributions</p>
            <div className={styles.orgsGrid}>
              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Gaming &amp; hospitality — Wynn Resorts · MGM Grand · Caesars</h3>
                <p className={styles.orgText}>
                  Complex project delivery across premier resort builds in Las Vegas, Macau, and nationwide—connecting sales engineering, architectural design, specialized manufacturing, distribution, and field installation.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Wine industry — Duckhorn · Foley · Scheid · Rodney Strong</h3>
                <p className={styles.orgText}>
                  Enterprise transformation across regulated multi-entity wineries—connecting winemaking, bottling, inventory, 3-tier distribution, and finance with TTB compliance and lot traceability.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Architectural, engineering &amp; construction — SOM · HOK · Turner · PCL</h3>
                <p className={styles.orgText}>
                  Specification, engineering coordination, and field delivery with tier-1 architects and general contractors—connecting design intent, submittals, estimating, custom fabrication, and site execution.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Healthcare &amp; life sciences — HCA Healthcare &amp; Regional Health Systems</h3>
                <p className={styles.orgText}>
                  Facility infrastructure and operational systems delivery across hospital networks—connecting project controls, life-safety and infection-control compliance, supply chain, and clinical facility continuity.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED TRANSFORMATION WORK */}
      <section className="p-section" id="selected-transformations" aria-labelledby="selected-transformations-title">
        <div className="page-well">
          <p className="p-kicker">Delivery track record</p>
          <h2 className="p-h2" id="selected-transformations-title">Selected transformation work</h2>
          <div className="home-story mt-8">
            <article>
              <h3>Multi-facility plant-floor &amp; warehouse integration</h3>
              <p className="p-prose mt-3">
                Integrated enterprise ERP, plant MES, and warehouse tracking with plant leaders and OT specialists to connect floor execution directly to business workflows.
              </p>
            </article>
            <article>
              <h3>Financial integration after acquisition</h3>
              <p className="p-prose mt-3">
                Cut financial close from 18 days to four in an 11-month transformation of a $350M post-acquisition business—unifying systems, master data, chart of accounts, and multi-entity warehouses.
              </p>
            </article>
            <article>
              <h3>Recovery of an off-track $10M ERP program</h3>
              <p className="p-prose mt-3">
                Stepped onto the customer’s side to rescue a stalled $10M ERP mandate—resetting partner governance, leading internal teams, and delivering into production for $8M ($2M saved).
              </p>
            </article>
            <article>
              <h3>Core systems modernization &amp; API bridges</h3>
              <p className="p-prose mt-3">
                Modernized heavily customized legacy software through company-owned API bridges, reconciled data pipelines, and staged cutovers without business disruption.
              </p>
            </article>
            <article>
              <h3>Integrated business planning and supply chain</h3>
              <p className="p-prose mt-3">
                Unified planning and supply chain for a $200M multi-facility wine producer—replacing manual monthly decks with continuous S&amp;OP, cutting freight and SKU costs, and improving inventory visibility.
              </p>
            </article>
            <article>
              <h3>Enterprise platform co-development &amp; shared IP</h3>
              <p className="p-prose mt-3">
                Aligned client, ERP partner, and custom software firm to build an integrated operations platform across legacy apps, ERP, WMS, and MES under a shared-IP model that eliminated recurring client licensing fees.
              </p>
            </article>
          </div>
          <div className="home-more mt-8 flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8">
            <Link className="p-link font-semibold text-[#142840]" href="/block/">
              Explore the 60 enterprise outcomes in The Block &rarr;
            </Link>
            <Link className="p-link text-slate-600" href="/agentic-ai/">
              Read field briefs from the operational seam &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* UNIFIED OPERATING ARCHITECTURE TRIAD (ALL THREE SIDE-BY-SIDE + DIRECTORY DRAWER) */}
      <section className="p-section p-section--job" id="operating-architecture">
        <div className="page-well">
          <div className="max-w-[76ch]">
            <p className="p-kicker">Operating Architecture</p>
            <h2 className="p-h2">Three views of how an enterprise works.</h2>
            <p className="p-prose mt-4">
              Every transformation connects three views around a company-owned data core: <strong>The Systemverse</strong> maps 20 system capability groups, <strong>The Six Process Constellations</strong> map recurring enterprise workflows, and <strong>The Beehive</strong> maps 18 functional groups and task forces with human decision authority. Best practice where you are standard; custom where you compete.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 items-stretch">
            {/* 1. THE SYSTEMVERSE */}
            <div className="command-plate !mt-0 !p-4 sm:!p-5 flex flex-col justify-between">
              <div>
                <div className="mb-3 text-left">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#9E7D3B]">
                    01 // The Systems
                  </p>
                  <p className="font-vollkorn text-[17px] font-bold text-navy mt-0.5">
                    The Systemverse
                  </p>
                  <p className="text-[13px] text-[#5A6978]">
                    20 capability groups around a company-owned Data Core.
                  </p>
                </div>
                <DiagramModal
                  src="/diagrams/system-verse.svg?v=family-approved-3"
                  alt="The Systemverse: twenty system capability groups connected through the Integration & Agentic Fabric to Master Data Management and a Common Data Model"
                  title="The Systemverse"
                  subtitle="20 system capability groups connected through one Integration, Agentic & Data Core"
                  triggerText="Open full diagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/diagrams/system-verse.svg?v=family-approved-3"
                    alt="The Systemverse: twenty system capability groups connected through the Integration & Agentic Fabric to Master Data Management and a Common Data Model"
                    className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </DiagramModal>
              </div>
              <div className="telemetry-badge !mt-3">
                <HaloFilm
                  src="/media/systemverse-loop.mp4?c=2"
                  poster="/media/systemverse-loop.png"
                  label="The Systemverse loop in motion"
                  size={64}
                  round
                />
                <div>
                  <p className="font-vollkorn text-[13px] font-bold text-navy">
                    The application orbit, in motion
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-[#243345]">
                    Data core gravity pulling 20 capability groups into one estate.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. THE SIX PROCESS CONSTELLATIONS */}
            <div className="command-plate !mt-0 !p-4 sm:!p-5 flex flex-col justify-between">
              <div>
                <div className="mb-3 text-left">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#9E7D3B]">
                    02 // The Workflows
                  </p>
                  <p className="font-vollkorn text-[17px] font-bold text-navy mt-0.5">
                    The Six Process Constellations
                  </p>
                  <p className="text-[13px] text-[#5A6978]">
                    Same six every company. Clusters and workflow blocks are yours.
                  </p>
                </div>
                <DiagramModal
                  src="/diagrams/six-constellations.svg?v=family-approved-3"
                  alt="Six process constellations around a shared Data & Agentic Core, with cluster bands and workflow-block segments."
                  title="The Six Process Constellations"
                  subtitle="Same six every company. Shared Data & Agentic Core. Each business's own clusters and workflow blocks."
                  triggerText="Open full diagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/diagrams/six-constellations.svg?v=family-approved-3"
                    alt="Six process constellations around a shared Data & Agentic Core, with cluster bands and workflow-block segments."
                    className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </DiagramModal>
              </div>
              <div className="telemetry-badge !mt-3">
                <ConstellationsFilm size={64} />
                <div>
                  <p className="font-vollkorn text-[13px] font-bold text-navy">
                    The workflow rings, in motion
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-[#243345]">
                    Broad arcs show process clusters; fine outer segments show workflow blocks.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. THE BEEHIVE */}
            <div className="command-plate !mt-0 !p-4 sm:!p-5 flex flex-col justify-between">
              <div>
                <div className="mb-3 text-left">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#9E7D3B]">
                    03 // The People
                  </p>
                  <p className="font-vollkorn text-[17px] font-bold text-navy mt-0.5">
                    The Beehive
                  </p>
                  <p className="text-[13px] text-[#5A6978]">
                    18 functional groups + shared Core crossed by the 6 flows.
                  </p>
                </div>
                <DiagramModal
                  src="/diagrams/beehive.svg?v=family-approved-3"
                  alt="The Beehive: eighteen functional groups plus a shared Data, Analytics & Knowledge Core, crossed by the six process flows"
                  title="The Beehive"
                  subtitle="18 functional groups + shared Data, Analytics & Knowledge Core — crossed by the 6 process flows."
                  triggerText="Open full diagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/diagrams/beehive.svg?v=family-approved-3"
                    alt="The Beehive: eighteen functional groups plus a shared Data, Analytics & Knowledge Core, crossed by the six process flows"
                    className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </DiagramModal>
              </div>
              <div className="telemetry-badge !mt-3">
                <BeehiveFilm size={64} />
                <div>
                  <p className="font-vollkorn text-[13px] font-bold text-navy">
                    The people map, in motion
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-[#243345]">
                    Functional groups configure into cross-workflow business task forces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <details className="group mt-8 rounded-xl border border-[#142840]/15 bg-[#142840]/[0.02] p-5 sm:p-6 transition-colors">
            <summary className="cursor-pointer list-none flex items-center justify-between font-serif text-lg font-bold text-[#142840] select-none">
              <span>View core systems &amp; platforms directory ({estate.length} functional domains)</span>
              <span className="text-xs font-mono uppercase bg-[#142840]/10 px-2.5 py-1 rounded text-[#142840] group-open:hidden">Expand Directory +</span>
              <span className="text-xs font-mono uppercase bg-[#142840]/10 px-2.5 py-1 rounded text-[#142840] hidden group-open:inline">Close Directory -</span>
            </summary>
            <div className="estate-grid mt-6">
              {estate.map((card) => (
                <article key={card.title} className="estate-card">
                  <div className="estate-head">
                    <span>{card.title}</span>
                    <span className="estate-tag">{card.tag}</span>
                  </div>
                  {card.rows.map((row) => (
                    <p key={row} className="estate-sys">
                      {row}
                    </p>
                  ))}
                </article>
              ))}
            </div>
            <p className="p-prose mt-6 text-sm text-[#142840]/75">
              Direct systems leadership and cutover delivery across Microsoft Dynamics 365, OneStream, JD Edwards, and enterprise platforms. Major tier-1 estates—including SAP, Oracle Financials, and NetSuite—are architectures I integrate and work across when the enterprise mandate sits on them. Oracle Primavera is project scheduling and controls I have run directly.
            </p>
            <p className="p-prose mt-3 text-sm text-[#142840]/75">
              My legacy modernization work connects business rules, data, and retained systems. For plant integration, I work with operational technology specialists who own the controls and physical processes.
            </p>
          </details>
        </div>
      </section>

      {/* FRONTIER PRODUCTION RUNTIMES BRIDGE */}
      <section className="p-section" id="applied-agentics">
        <div className="page-well">
          <div className="p-8 rounded-xl border border-[#142840]/20 bg-[#142840]/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <p className="p-kicker">Agentic Development &amp; Builder Architecture</p>
              <h2 className="p-h2 mt-1">Applied agentics on the enterprise already running.</h2>
              <p className="p-prose mt-4">
                Today, I build and operate a multi-harness Binary Intelligence engineering foundry that turns out enterprise discovery software and reusable human-agent workflow blocks on a shared data core. People and agents contribute throughout <em>Intent, Define, Deliver, and Outcome</em>—with human judgment guiding the work and each cycle preserving what was learned in a growing collective of business knowledge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link className="p-btn whitespace-nowrap" href="/collective/">
                Explore The Collective &rarr;
              </Link>
              <Link className="p-link whitespace-nowrap" href="/agentic-ai/">
                Read Field Briefs &rarr;
              </Link>
              <Link className="p-link whitespace-nowrap" href="/contact/">
                Start an Executive Conversation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
