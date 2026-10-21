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

const constellations = [
  {
    code: "P2P",
    name: "Procure to Pay",
    tagline: "Inbound value chain",
    desc: "Supplier lifecycle, purchase requisitions, PO dispatch, three-way matching, receiving, and accounts payable.",
  },
  {
    code: "O2C",
    name: "Order to Cash",
    tagline: "Outbound value chain",
    desc: "Customer master, pricing engines, order entry, depletions, fulfillment, billing, and accounts receivable.",
  },
  {
    code: "P2M",
    name: "Plan to Manufacture",
    tagline: "Transformation core",
    desc: "Demand planning (S&OP), MRP, BOMs, integration with plant MES and SCADA, scheduling, and batch traceability.",
  },
  {
    code: "S2S",
    name: "Systems to Support",
    tagline: "ERP + HR",
    desc: "The ERP side and the HR side. ERP runs all three primaries; HR/HCM is the people side none of those chains own. IT, cybersecurity, and productivity span with them.",
  },
  {
    code: "D2R",
    name: "Data to Reporting",
    tagline: "Analytics + awareness",
    desc: "Corporate planning, executive BI, financial consolidation, margin telemetry, and statutory reporting.",
  },
  {
    code: "MDM",
    name: "Master Data Management",
    tagline: "Cross-cutting foundation",
    desc: "Item master, customer master, vendor master, chart of accounts, and governance across the estate. The missing link I keep finding on transformations.",
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
              <p className="p-prose mt-4">
                Lead enterprise transformation for family-owned, private equity-backed, and post-acquisition businesses, carrying commercial commitments from opportunity and contract through delivery and frontline adoption. Work with business, finance, and compliance leaders to carry regulatory requirements, financial controls, and traceability into system design, testing, and daily operations.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Shape engagements through executive discovery, sales engineering, solution design, and contracts, with clear scope, partner responsibilities, and financial accountability.</li>
                <li>Align internal IT, operations, and domain champions around business priorities. Carry workflow prototypes through end-to-end testing, user acceptance, cutover, and go-live.</li>
                <li>Design and lead delivery of modern application stacks spanning ERP, warehouse management (WMS), manufacturing execution (MES), planning, customer relationship management (CRM), and finance around a company-owned data core.</li>
                <li>Lead migration from legacy environments, including AS/400, COBOL applications, mainframe, and legacy SQL systems, integrating retained applications and preserving essential business rules and reconciled data.</li>
                <li>Build and operate an agentic development environment with independent review and human decision authority, turning enterprise knowledge into reusable workflows that customer teams can run and keep improving.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">02 // 2024–2026 · Enterprise CIO Mandate</p>
              <h3 className="mt-2">Sierra Nevada Brewing Co.</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Chief Information Officer (Contract)</p>
              <p className="p-prose mt-4">
                Served as CIO and executive leadership team member for a multi-site brewer, responsible for technology strategy, investment, operations, data, cybersecurity, and governance, with reporting to the board.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li><strong>Enterprise transformation:</strong> Led a 26-month enterprise transformation with 150+ project participants across 25 task forces, directing architecture and implementation to consolidate business and plant systems around a company-owned data core. Aligned executive sponsors, functional leaders, and delivery partners—establishing the organizational and technical foundation to carry the company through go-live and sustain ongoing operations.</li>
                <li><strong>IT leadership:</strong> Rebuilt the internal IS/IT organization, modernized enterprise IT, established vendor accountability, and worked with plant leaders and operational technology (OT) specialists to connect enterprise systems with plant operations.</li>
                <li><strong>Operational continuity:</strong> Maintained operational continuity and addressed regulatory requirements across purchasing, order-to-cash, planning, manufacturing, warehousing, and finance, including laboratory systems, food safety, SQF, and TTB compliance.</li>
                <li><strong>Applied agentics:</strong> Built an enterprise mapping digital twin and transformation command system across 25 task forces to support discovery, prototyping, and implementation—generating the 6 process constellations, 74 clusters, and 200+ workflow patterns around the company-owned data core with human decision authority.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">03 // 2012–2016 · Partner-Side ERP Implementation</p>
              <h3 className="mt-2">Access IT, Inc.</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Lead Consultant and Solution Architect</p>
              <p className="p-prose mt-4">
                Led partner-side Microsoft Dynamics NAV and ContractERP implementations for construction, distribution, manufacturing, and services clients.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Carried delivery from business requirements through testing, cutover, and stabilization, coordinating customer teams and technical delivery partners.</li>
                <li>Designed application customizations, data migrations, and integrations around customer workflows.</li>
                <li>Worked across systems integrator, independent software vendor, and reseller roles, connecting functional requirements with technical delivery.</li>
              </ul>
            </article>

            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7D3B]">04 // 1996–2012 · Business Ownership &amp; Custom Software</p>
              <h3 className="mt-2">Timberline Architectural Openings</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Founder, CEO &amp; CTO</p>
              <p className="p-prose mt-4">
                Founded and scaled a contractor, manufacturer, and distributor of architectural openings, serving as CEO and CTO with full P&amp;L responsibility.
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[#142840]/85 list-disc pl-5">
                <li>Grew revenue from $250K in year one to $130M by year ten, leading 100+ employees across commercial, manufacturing, distribution, and project operations.</li>
                <li>Connected engineered sales with manufacturing, supply, and installation for projects in Las Vegas and Macau.</li>
                <li>Built proprietary software connecting estimating, project delivery, purchasing, production, inventory, distribution, and finance.</li>
                <li>Engaged private equity on expansion financing and separately advised a private equity team on troubled distributors.</li>
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
            Every enterprise is uniquely standard: the books must balance and the business must run. Across industries, financial control, regulatory compliance, and operating accountability form a common foundation. The work is knowing which patterns to standardize, where the business differentiates, and how to connect people, systems, and workflows through a unified data core.
          </p>

          <div className={styles.domainsGrid}>
            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Manufacturing &amp; Industrial Distribution</h3>
              <p className={styles.domainText}>
                Items move from purchasing through production, inventory, and delivery—where planning, costing, quality, traceability, and regulatory compliance must work inside daily floor execution.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Financial, Insurance &amp; Legal Services</h3>
              <p className={styles.domainText}>
                Transactions, policies, cases, and obligations move through structured approvals—where risk management, information security, auditability, and financial accountability govern every workflow.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Healthcare &amp; Life Sciences</h3>
              <p className={styles.domainText}>
                Healthcare facilities and regulated operations depend on tightly connected workflows—where facility infrastructure, operational systems delivery, life-safety compliance, quality, and traceability support both the mission and the business.
              </p>
            </article>

            <article className={styles.domainItem}>
              <h3 className={styles.domainHeading}>Energy, Utilities &amp; Infrastructure</h3>
              <p className={styles.domainText}>
                Assets and capital projects move through planning, construction, operation, and maintenance—connecting engineering controls, field safety, project costing, and continuity of service.
              </p>
            </article>
          </div>

          <div className={styles.orgsBlock}>
            <p className={styles.orgsKicker}>Selected organizations and contributions</p>
            <div className={styles.orgsGrid}>
              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Gaming &amp; hospitality — Wynn Resorts · MGM Grand · Caesars</h3>
                <p className={styles.orgText}>
                  Complex project delivery across premier resort destinations in Las Vegas, Macau, and across the United States. Connected sales engineering, architectural design, specialized manufacturing, distribution, and field labor—integrating sequencing and project controls to align commercial commitments with site execution.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Wine industry — Duckhorn · Foley · Scheid · Rodney Strong</h3>
                <p className={styles.orgText}>
                  Enterprise systems and transformation across regulated multi-entity wine operations. Connected winemaking, bottling, inventory, 3-tier distribution, and financial operations—weaving compliance and traceability into the shared industry patterns and unique production rules of each winery.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Architectural, engineering &amp; construction — SOM · HOK · Turner · PCL</h3>
                <p className={styles.orgText}>
                  Specification, engineering coordination, and field delivery across major commercial and institutional builds with tier-1 architects and general contractors. Connected design intent, submittals, estimating, specialized fabrication, scheduling, and site execution from blueprint to turnover.
                </p>
              </article>

              <article className={styles.orgCard}>
                <h3 className={styles.orgTitle}>Healthcare &amp; life sciences — HCA Healthcare &amp; Regional Health Systems</h3>
                <p className={styles.orgText}>
                  Healthcare facility infrastructure and operational systems delivery across hospital networks and medical environments. Connected project controls, life-safety and infection-control compliance, supply chain, and operational workflows where facility continuity and regulatory traceability are non-negotiable.
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
              <p className="p-prose mt-4">
                Led integration between enterprise systems, plant MES, and warehouse tracking, working with plant leaders and operational technology specialists to connect production information with business workflows.
              </p>
            </article>
            <article>
              <h3>Financial integration after acquisition</h3>
              <p className="p-prose mt-4">
                Reduced financial close from 18 days to four in an 11-month transformation of a $350M post-acquisition business—consolidating systems, master data, chart of accounts, and multi-entity warehouses.
              </p>
            </article>
            <article>
              <h3>Recovery of an off-track $10M ERP program</h3>
              <p className="p-prose mt-4">
                Stepped onto the customer’s side to rescue an off-track $10M enterprise ERP mandate—resetting partner governance, leading internal teams, and delivering the program into production for $8M ($2M saved).
              </p>
            </article>
            <article>
              <h3>Core systems modernization &amp; API bridges</h3>
              <p className="p-prose mt-4">
                Led modernization of heavily customized legacy software through company-owned API bridges, with reconciled data, staged cutovers, and clear ownership of business continuity.
              </p>
            </article>
            <article>
              <h3>Integrated business planning and supply chain</h3>
              <p className="p-prose mt-4">
                Unified planning and supply chain for a $200M multi-facility wine producer—replacing manual monthly decks with continuous S&amp;OP, cutting freight and SKU costs, and improving inventory and labor visibility.
              </p>
            </article>
            <article>
              <h3>Enterprise platform co-development &amp; shared IP</h3>
              <p className="p-prose mt-4">
                Aligned client, ERP partner, and custom software firm to build an integrated operations platform across legacy apps, ERP, WMS, and MES under a shared-IP model that eliminated client licensing fees.
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

      {/* THREE VIEWS OF HOW AN ENTERPRISE WORKS */}
      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Operating Architecture</p>
          <h2 className="p-h2">Three views of how an enterprise works</h2>
          <p className="p-prose mt-4 text-base lg:text-[17px] leading-relaxed text-[#142840]/90 max-w-[72ch]">
            The framework unifies people, systems, and workflows around a company-owned data core: <strong>The Systemverse</strong> maps applications and dependencies, <strong>the six constellations</strong> map recurring workflows, and <strong>The Beehive</strong> maps operating people and ownership. I work across those views—from the CFO and functional leads to delivery partners and the warehouse team using the scanners—turning operating knowledge into clear requirements, verifiable success criteria, and accountable delivery.
          </p>
        </div>
      </section>

      {/* THE SYSTEMVERSE PLATE & DIRECTORY */}
      <section className="p-section p-section--job">
        <div className="page-well">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-5">
              <p className="p-kicker">The systems</p>
              <h2 className="p-h2">The Systemverse, and the systems beside it.</h2>
              <p className="p-prose mt-4">
                Best practice where you are standard; custom where you compete. The work is knowing which is which, then anchoring operational systems to a company-owned data core so master records, business rules, and operating logic remain under company control.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="command-plate !mt-0">
                <div className="mb-3 text-left">
                  <p className="font-vollkorn text-[17px] font-bold text-navy">
                    The Systemverse
                  </p>
                  <p className="text-[13px] text-[#5A6978]">
                    Company-owned data core at the center. Systems around it.
                  </p>
                </div>
                <DiagramModal
                  src="/diagrams/system-verse.svg?v=family-approved-1"
                  alt="The Systemverse: sixteen system capability groups surrounding Master Data Management and a Common Data Model"
                  title="The Systemverse"
                  subtitle="Company-owned data core at the center, systems around it"
                  triggerText="Open the diagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/diagrams/system-verse.svg?v=family-approved-1"
                    alt="The Systemverse: sixteen system capability groups surrounding Master Data Management and a Common Data Model"
                    className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </DiagramModal>
                <div className="telemetry-badge !mt-3">
                  <HaloFilm
                    src="/media/systemverse-loop.mp4?c=2"
                    poster="/media/systemverse-loop.png"
                    label="The Systemverse loop in motion"
                    size={72}
                    round
                  />
                  <div>
                    <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                      The application orbit, in motion
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#243345]">
                      Visualizing data core gravity pulling functional applications into one connected estate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <details className="group mt-10 rounded-xl border border-[#142840]/15 bg-[#142840]/[0.02] p-5 sm:p-6 transition-colors">
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

      {/* SIX CONSTELLATIONS & THE BEEHIVE */}
      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Process and people</p>
          <h2 className="p-h2" style={{ maxWidth: "20ch" }}>
            Six constellations, and the Beehive.
          </h2>
          <p className="p-prose">
            The Beehive presents twelve primary functional groups. Each business shapes them into its own groups and workflow task forces. Domain experts, people and agents contribute across workflows, with explicit human decision authority and accountability. Standard patterns guide discovery; the business determines its own configuration.
          </p>

          <div className="twin-command-grid">
            <div className="command-plate">
              <div className="mb-3 text-left">
                <p className="font-vollkorn text-[17px] font-bold text-navy">
                  The six constellations
                </p>
                <p className="text-[13px] text-[#5A6978]">
                  Same six every company. The mix is yours.
                </p>
              </div>
              <DiagramModal
                src="/diagrams/six-constellations.svg?v=family-approved-1"
                alt="Six constellations around a shared data core, with cluster bands and workflow-block segments."
                title="The Six Process Constellations"
                subtitle="Same six every company. The mix is yours."
                triggerText="Open the diagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diagrams/six-constellations.svg?v=family-approved-1"
                  alt="Six constellations around a shared data core, with cluster bands and workflow-block segments."
                  className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                />
              </DiagramModal>
              <div className="telemetry-badge">
                <ConstellationsFilm size={72} />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The workflow rings, in motion
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    Broad ring segments show clusters; fine outer segments show their workflow blocks.
                  </p>
                </div>
              </div>
            </div>

            <div className="command-plate">
              <div className="mb-3 text-left">
                <p className="font-vollkorn text-[17px] font-bold text-navy">
                  The Beehive
                </p>
                <p className="text-[13px] text-[#5A6978]">
                  How work crosses functions, from floor to board.
                </p>
              </div>
              <DiagramModal
                src="/diagrams/beehive.svg?v=family-approved-1"
                alt="The Beehive manufacturing reference: functional domains adapted into business groups and workflow task forces"
                title="The Beehive Process Flow"
                subtitle="How work crosses functions, from floor to board."
                triggerText="Open the diagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diagrams/beehive.svg?v=family-approved-1"
                  alt="The Beehive manufacturing reference: functional domains adapted into business groups and workflow task forces"
                  className="w-full h-auto mx-auto block cursor-pointer hover:opacity-95 transition-opacity"
                />
              </DiagramModal>
              <div className="telemetry-badge">
                <BeehiveFilm size={80} />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The people map, in motion
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    Functional domains become the business’s own workflow task forces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="constellations-grid mt-10">
            {constellations.map((c) => (
              <article key={c.code} className="constellation-card">
                <div className="flex items-baseline justify-between gap-2 border-b border-[#142840]/10 pb-2">
                  <span className="font-vollkorn text-[20px] font-black text-navy">
                    {c.code}
                  </span>
                  <span className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                    {c.tagline}
                  </span>
                </div>
                <h3 className="mt-3 font-vollkorn text-[16px] font-bold text-navy">
                  {c.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-[#334155]">
                  {c.desc}
                </p>
              </article>
            ))}
          </div>
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
