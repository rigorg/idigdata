import Link from "next/link";
import styles from "./clients.module.css";
import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";
import ConstellationsFilm from "@/components/presence/ConstellationsFilm";
import BeehiveFilm from "@/components/presence/BeehiveFilm";

export const metadata: Metadata = {
  title: { absolute: "Experience | idigdata" },
  description:
    "Executive leadership, core enterprise systems, and applied agentics across 50+ implementations and 15 enterprise transformations at scale.",
  alternates: { canonical: "/experience/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/experience/",
    title: "Experience | idigdata",
    description:
      "Executive leadership, core enterprise systems, and applied agentics across 50+ implementations and 15 enterprise transformations at scale.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "Robert Paddock, Enterprise Technology Leader: experience" }],
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
    title: "Manufacturing & Plant Automation",
    tag: "MES — SCADA",
    rows: [
      "ProLeiT — Brewing & Process Automation MES",
      "Ignition — Industrial SCADA & Plant Floor Execution",
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
    desc: "Demand planning (S&OP), MRP, BOMs, plant SCADA/MES automation, scheduling, and batch traceability.",
  },
  {
    code: "S2S",
    name: "Systems that Support",
    tagline: "ERP + HR",
    desc: "The ERP side and the HR side. ERP runs all three primaries; HR/HCM is the people side none of those chains own. IT, cybersecurity, and productivity span with them.",
  },
  {
    code: "D2R",
    name: "Data to Report",
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
      <header className="p-section">
        <div className="page-well">
          <div className="hero-split">
            <div className="home-hero-copy">
              <p className="p-kicker">Experience</p>
              <h1 className="p-h1">{"The breadth to see how the pieces fit."}</h1>
              <p className="p-dek">
                {"I connect the boardroom, the business operation, and the software that makes it run. My career spans CIO responsibility and building a $130M operating business, across 50+ enterprise implementations and 15 scale transformations. When companies modernize, acquire, or deploy autonomous workflows, I bring client-side accountability to technology investment, delivery, and operating results."}
              </p>
              <p className="p-prose mt-4">
                {"Through Data Integration Group, I lead client-side transformation across people, data, applications, and delivery partners. Earlier partner-side solution architecture at Access IT gave me an inside view of how systems integrators, software vendors, and resellers scope and bill. I use both perspectives to eliminate waste, align delivery, and keep operations running."}
              </p>
            </div>
            <div className="home-watermark" aria-hidden="true">
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      {/* FOUR PILLARS OF ENTERPRISE LEADERSHIP */}
      <section className="p-section" id="executive-pillars" aria-labelledby="executive-pillars-title">
        <div className="page-well">
          <p className="p-kicker">Core Career Arc</p>
          <h2 className="p-h2" id="executive-pillars-title">Four pillars of enterprise leadership.</h2>
          <p className="p-prose mt-4">
            Executive accountability for business change and the systems that make it run. These four pillars combine boardroom governance, founder grit, deep enterprise application architecture, and hands-on agentic software development.
          </p>
          <div className="home-story mt-8">
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">01 // Scale &amp; Transformation</p>
              <h3 className="mt-2">Executive Transformation Leadership</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Sierra Nevada Brewing Co. · Interim CIO</p>
              <p className="p-prose mt-4">
                Led 26 months of architecture and implementation for an approximately $420M multi-site brewer. Rebuilt IS/IT and led 150 project participants across 25 task forces, consolidating 200+ fragmented systems into 25 connected platforms around a company-owned data core while plant and commercial operations continued without interruption.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">02 // Founder &amp; Builder</p>
              <h3 className="mt-2">Business Ownership &amp; Operating Software</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Timberline Architectural Openings · Founder, CEO &amp; CTO</p>
              <p className="p-prose mt-4">
                Founded and scaled an enterprise from $250K in first-year revenue to $130M by year ten, with full P&amp;L responsibility and 100+ employees. Personally engineered the proprietary enterprise software that powered estimating, engineering sales, purchasing, production, inventory, distribution, and finance.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">03 // The 20% Seam</p>
              <h3 className="mt-2">Core Systems Architecture &amp; Delivery</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Data Integration Group · Principal &amp; Solution Architect</p>
              <p className="p-prose mt-4">
                Across 50+ implementations and 15 scale transformations, bridging the critical operational seam where software meets physical work. Proven cutover leadership across Microsoft Dynamics 365, SAP S/4HANA, NetSuite, and OneStream—compressing post-acquisition close from 18 days to four and turning around troubled multi-million-dollar programs.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">04 // Frontier Runtime</p>
              <h3 className="mt-2">Applied Enterprise Agentics &amp; Software Factories</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">The Rig &amp; FlowCraft · Autonomous Systems Architecture</p>
              <p className="p-prose mt-4">
                Architecting, building, and operating production multi-agent runtimes with AST validation gates, deterministic caller contracts, and human authorization. Grounding autonomous workflows in company-owned data to turn tacit operational knowledge into executable, verifiable enterprise capacity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={"p-section " + styles.section} id="selected-clients" aria-labelledby="selected-clients-title">
        <div className="page-well">
          <h2 className={"p-h2 " + styles.title} id="selected-clients-title">Selected clients</h2>
          <dl className={styles.rows}>
            <div className={styles.row}>
              <dt>Food &amp; beverage</dt>
              <dd>
                <ul className={styles.names}>
                  <li>Sierra Nevada Brewing</li>
                  <li>Duckhorn</li>
                  <li>Foley Family Wine &amp; Spirits</li>
                  <li>Everytable</li>
                  <li>H.W. Greenham &amp; Sons</li>
                  <li>Valley Fine Foods</li>
                  <li>Scheid Vineyards</li>
                  <li>Rodney Strong Vineyards</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Architecture &amp; construction</dt>
              <dd>
                <ul className={styles.names}>
                  <li>SOM</li>
                  <li>HOK</li>
                  <li>Turner Construction</li>
                  <li>PCL Construction</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Hospitality &amp; sports</dt>
              <dd>
                <ul className={styles.names}>
                  <li>Wynn Resorts</li>
                  <li>MGM Resorts</li>
                  <li>San Jose Sharks</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Healthcare</dt>
              <dd>
                <ul className={styles.names}>
                  <li>HCA Healthcare</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">{"Selected transformation work"}</h2>
          <div className="executive-stories">
            <article>
              <h3>{"Customer data architecture & market intelligence"}</h3>
              <p className="p-prose mt-4">
                {"Unified customer touchpoints across direct-to-consumer, three-tier wholesale distribution, POS, and commercial accounts into a single, governed customer data model. Built identity resolution, depletion analytics, and margin-by-customer visibility—giving leadership accurate demand telemetry without the overhead of fragile marketing point tools."}
              </p>
            </article>
            <article>
              <h3>{"Financial integration after acquisition"}</h3>
              <p className="p-prose mt-4">
                {"Reduced financial close from 18 days to four in an 11-month transformation of a $350M post-acquisition business. Consolidated systems, reconciled master data, unified the chart of accounts, and integrated warehouses across entities and currencies."}
              </p>
            </article>
            <article>
              <h3>{"Recovery of an at-risk $8M ERP program"}</h3>
              <p className="p-prose mt-4">
                {"Led an executive mandate to turn around an at-risk $8M enterprise ERP program. Reset partner governance, restored delivery accountability, and brought business leadership and implementation partners back around clear ownership—recovering the program and saving $2M."}
              </p>
            </article>
            <article>
              <h3>{"Core systems modernization & API bridges"}</h3>
              <p className="p-prose mt-4">
                {"Led migration from legacy monoliths to modern enterprise platforms. Engineered company-owned API bridges connecting warehouse, manufacturing, and commercial systems with zero operational downtime."}
              </p>
            </article>
            <article>
              <h3>{"Integrated business planning and supply chain"}</h3>
              <p className="p-prose mt-4">
                {"Unified planning and supply-chain operations for a $200M multi-entity, multi-facility wine producer. Replaced spreadsheet and PowerPoint preparation for monthly meetings with continuously updated planning across acquired operations. Delivered purchasing and freight savings, improved inventory management, reduced SKUs, and strengthened labor scheduling and waste visibility."}
              </p>
            </article>
            <article>
              <h3>{"Enterprise platform co-development & shared IP"}</h3>
              <p className="p-prose mt-4">
                {"Brought together client, ERP partner, and custom software firm to design and build an integrated operations platform connecting legacy applications with ERP, WMS, and MES under a shared-IP model, negotiating pilot terms that eliminated software licensing charges for the client."}
              </p>
            </article>
          </div>
          <p className="home-more mt-8">
            <Link className="p-link" href="/agentic-ai/">
              {"Learn through the work: Dispatches from the Operational Seam →"}
            </Link>
          </p>
        </div>
      </section>

      <section className="p-section" id="seven-blocks" aria-labelledby="seven-blocks-title">
        <div className="page-well">
          <p className="p-kicker">The Seven Value Propositions</p>
          <h2 className="p-h2" id="seven-blocks-title">{"Six core disciplines at the seam—and the autonomous factory."}</h2>
          <p className="p-dek mt-3">
            {"My 20+ years systems arc across 50 enterprise implementations and 15 scale transformations maps into six operational disciplines. While frontier software factories generate code, these six areas represent the 20% operational seam where transformations actually succeed or fail. The seventh block is our sovereign agentic software factory—the engine that builds and operates them."}
          </p>

          <div className="home-cards mt-8">
            <article className="home-card">
              <p className="home-card-cat">{"Leadership, Direction & Transformation"}</p>
              <h3>{"Roadmaps & capital governance."}</h3>
              <p className="p-prose mt-4">
                {"Align executive priorities, vendor accountability, and technology investment into an executable flight of time."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">{"Business Systems & Integration"}</p>
              <h3>{"Core ERP, WMS & MES cutovers."}</h3>
              <p className="p-prose mt-4">
                {"Connect mission-critical business platforms with zero operational downtime and company-owned API bridges."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">{"IT Operations & Security"}</p>
              <h3>{"Plant continuity & infrastructure."}</h3>
              <p className="p-prose mt-4">
                {"Dependable enterprise networks, cybersecurity, OT plant floor execution, and scanner hardware across physical facilities."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">{"Data & Knowledge"}</p>
              <h3>{"Master data & Polanyi's paradox."}</h3>
              <p className="p-prose mt-4">
                {"Translate tribal shop-floor heuristics and Mary's 15-year unwritten spreadsheets into trusted enterprise data."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">{"Financial Systems"}</p>
              <h3>{"Ledger integrity & accelerated close."}</h3>
              <p className="p-prose mt-4">
                {"Reconciliation, margin visibility, and month-end close acceleration from 18 days to four across multiple entities."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">{"Workflows & Automation"}</p>
              <h3>{"Frontline handoffs & exception routing."}</h3>
              <p className="p-prose mt-4">
                {"Eliminate friction across order-to-cash and procure-to-pay with human authorization and resilient fallback."}
              </p>
              <Link className="p-link capability-link" href="/block/">{"Explore outcomes in The Block"}</Link>
            </article>
          </div>

          <div className="mt-8 p-6 rounded-xl border border-[#142840]/20 bg-[#142840]/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">
                  The Seventh Block // Applied Agentics
                </span>
                <span className="text-slate-400">·</span>
                <span className="font-mono text-xs text-slate-500">The Sovereign Software Factory</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142840] mt-1">
                The Rig, The B.O.S.S. &amp; FlowCraft
              </h3>
              <p className="p-prose mt-2">
                {"The Rig is our autonomous software factory—engineering, validating, and running multi-agent workflows with AST validation gates, deterministic caller contracts, and human authorization. While frontier software factories generate raw code mass, enterprise success depends on the operating leadership that connects autonomous code generation to physical shop-floor realities, brownfield cutovers, and human accountability. This exact apparatus stands up inside an operating enterprise—from multi-facility consumer goods to regulated process manufacturing—as a full operational seat running custom software."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link className="p-btn whitespace-nowrap" href="/block/custom/">
                {"Explore Custom Agentics"}
              </Link>
              <Link className="p-link whitespace-nowrap" href="/agentic-ai/">
                {"Read Field Dispatches →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">{"Executive leadership, grounded in operating experience"}</h2>
          <h3 className="executive-role">{"Sierra Nevada Brewing Co. | Chief Information Officer (Contract)"}</h3>
          <p className="p-prose mt-4">
            {"Owned technology strategy, investment, operations, data, cybersecurity, and governance for a multi-site brewer. Served on the executive leadership team and presented to the board."}
          </p>
          <p className="p-prose mt-4">
            {"Led modernization connecting enterprise systems around a common data core. Rebuilt IS/IT and led 150 project participants, coordinating 25 task forces across business functions, technical teams, and implementation partners. Change spanned finance, warehousing, manufacturing and planning, including laboratory systems, food safety, SQF, and TTB requirements."}
          </p>
          <h3 className="executive-role">{"Timberline | Business ownership and technology leadership"}</h3>
          <p className="p-prose mt-4">
            {"Founded and operated a contractor, manufacturer, and distributor of architectural openings. Grew revenue from $250K in year one to $130M by year 10, with P&L responsibility and 100+ employees. Built proprietary software connecting estimating, project delivery, purchasing, production, inventory, distribution, and finance."}
          </p>
          <p className="p-prose mt-4">
            {"Engaged multiple private equity firms on expansion financing; separately advised a PE team on troubled distributors, applying operating experience across ERP, warehouse, and shop-floor systems."}
          </p>
          <h3 className="executive-role">{"Access IT | Partner-side delivery"}</h3>
          <p className="p-prose mt-4">
            {"Led Microsoft Dynamics and ContractERP implementations across functional, technical, and solution architecture responsibilities, from requirements and customization through migration, integration, testing, cutover, and stabilization."}
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">{"Systems, workflows, and the people doing the work"}</h2>
          <p className="p-prose mt-4">
            {"All businesses are uniquely standard. The fundamentals are familiar; the people, constraints, and consequential exceptions shape the solution."}
          </p>
          <p className="p-prose mt-4">
            {"I work with the CFO and compliance officer, the functional leads, the developers and delivery partners, and the warehouse team using the scanners. The architecture has to support the work across those groups."}
          </p>
          <p className="p-prose mt-4">
            {"My enterprise application experience also includes electronic medical records (EMR/EHR)."}
          </p>
        </div>
      </section>

      <section className="p-section p-section--job">
        <div className="page-well">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="md:col-span-5">
              <p className="p-kicker">The systems</p>
              <h2 className="p-h2">The Systemverse, and the systems beside it.</h2>
              <p className="p-prose mt-4">
                Best practice where you are standard. Your sauce where you are not.
                The work is knowing which is which, then anchoring the systems to a
                company-owned data core.
              </p>
              <p className="p-prose mt-4">
                Sixteen functional domains form the application orbit around a
                company-owned data core. Each domain connects via explicit integration
                spokes, ensuring master records, operational telemetry, and business
                logic remain sovereign—never locked inside proprietary vendor clouds.
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diagrams/system-verse.svg?c=4"
                  alt="The Systemverse: company-owned data core at the center, systems around it"
                  className="w-full h-auto mx-auto block"
                />
                <p className="mt-2 text-left">
                  <a className="p-link text-xs" href="/diagrams/system-verse.svg?c=4" target="_blank" rel="noopener noreferrer">
                    Open the diagram
                  </a>
                </p>
                <div className="telemetry-badge !mt-3">
                  <HaloFilm
                    src="/media/systemverse-loop.mp4?c=2"
                    poster="/media/systemverse-poster.png?c=2"
                    label="Systemverse, in motion"
                    size={56}
                  />
                  <div>
                    <p className="font-vollkorn text-[13px] font-bold text-navy">
                      The estate picture, in motion
                    </p>
                    <p className="mt-0.5 text-[12px] text-[#243345]">
                      Gold routes from the data core to the systems that run the
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-12 font-vollkorn text-[26px] font-extrabold text-navy">
            Systems I have run.
          </h3>
          <p className="portfolio-sub">
            Contracts negotiated. Vendors run. Customer-side command.
          </p>
          <div className="estate-grid">
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
          <p className="p-prose mt-6">
            I have run the systems named above. SAP, Oracle financials,
            NetSuite, and JD Edwards are estates I can work across when the
            mandate sits on them. Oracle Primavera is scheduling and controls
            I have run.
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Process and people</p>
          <h2 className="p-h2" style={{ maxWidth: "20ch" }}>
            Six constellations, and the Beehive.
          </h2>
          <p className="p-prose">
            The Systemverse maps the software. The constellations map the
            process flows. The Beehive carries the people. The six flows cross
            the functional groups so accountability does not fall between
            vendor cracks.
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/six-constellations.svg?c=4"
                alt="The Six Process Constellations: P2P, O2C, P2M, S2S, D2R, MDM around the data core."
              />
              <p className="mt-3 text-left">
                <a className="p-link" href="/diagrams/six-constellations.svg?c=4" target="_blank" rel="noopener noreferrer">
                  Open the diagram
                </a>
              </p>
              <div className="telemetry-badge">
                <ConstellationsFilm size={72} />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The workflow rings, in motion
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    Each outer band is the workflow blocks in that
                    constellation.
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/beehive.svg"
                alt="The Beehive process flow map: six process flows crossing functional groups"
              />
              <p className="mt-3 text-left">
                <a className="p-link" href="/diagrams/beehive.svg" target="_blank" rel="noopener noreferrer">
                  Open the diagram
                </a>
              </p>
              <div className="telemetry-badge">
                <BeehiveFilm size={80} />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The people map, in motion
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    The six process flows crossing the functional groups.
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

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">{"Find the cause. Own the change. Check the result."}</h2>
          <p className="p-prose mt-4">
            {"I assess how people, data, and technology connect, identify the causes behind the friction, and agree priorities with the people responsible for the business. I align internal teams, vendors, and systems integrators around shared workflows and clear accountability."}
          </p>
          <p className="p-prose mt-4">
            {"Before delivery, we agree what success means and how to verify it. Through implementation and adoption, I keep financial integrity, compliance, and operational continuity in view."}
          </p>
        </div>
      </section>

      <section className="p-section" id="applied-agentics">
        <div className="page-well">
          <h2 className="p-h2">{"Applied agentics on the enterprise already running"}</h2>
          <p className="p-prose mt-4">
            {"I architect, develop, and deploy autonomous workflows on company-owned data foundations. Enterprise agentics requires more than a model and an API key—it requires deterministic caller boundaries, maintained company records, and human authority at consequential steps."}
          </p>
          <div className="home-scales">
            <article>
              <h3>{"Deterministic caller gates"}</h3>
              <p className="p-prose mt-4">
                {"Eliminating runaway token burn and endless rework loops. Workflows operate inside explicit schema contracts, read-only data sandboxes, and idempotent actions that execute deterministically against ERP, WMS, and operational APIs."}
              </p>
            </article>
            <article>
              <h3>{"Company-owned data cores"}</h3>
              <p className="p-prose mt-4">
                {"Grounding models on the enterprise's actual operating records—historical orders, contracts, batch traceability, and depletions. Connecting software to the unwritten operating judgment experienced people carry, rather than generic web training data."}
              </p>
            </article>
            <article>
              <h3>{"Human authorization in production"}</h3>
              <p className="p-prose mt-4">
                {"Agents synthesize context, audit thousands of transactions, and stage recommendations; accountable business leaders retain final authorization. Deployed logistics audit agents analyze carrier invoices against negotiated contracts, discovering significant annual billing discrepancies with complete human approval trails."}
              </p>
            </article>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
