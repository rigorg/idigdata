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
              <h1 className="p-h1">The breadth to see how the pieces fit.</h1>
              <p className="p-dek">
                I connect the boardroom, the business operation, and the software that makes it run.
              </p>
              <p className="p-prose mt-4">
                Twenty years of leadership connecting business ownership, CIO governance, and hands-on systems architecture across 50+ enterprise implementations and 15 scale transformations. When companies modernize, acquire, or deploy autonomous workflows, I bridge the delivery seam between software generation and live operations—bringing accountable execution to people, data, systems, and delivery partners.
              </p>
              <p className="p-prose mt-3">
                Having founded and built a $130M operating business, served as CIO of a multi-site manufacturer, and architected core ERP and supply-chain platforms, I know the business from the floor to the boardroom. I understand how systems integrators and software vendors scope and bill—and I use both perspectives to eliminate partner waste, align delivery, and keep plant and commercial operations running.
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
            Executive accountability for business change and the systems that make it run. These four pillars combine boardroom governance, founder grit, deep enterprise application architecture, and hands-on applied agentics.
          </p>
          <div className="home-story mt-8">
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">01 // Scale &amp; Transformation</p>
              <h3 className="mt-2">Executive Transformation Leadership</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Sierra Nevada Brewing Co. · Chief Information Officer (Contract)</p>
              <p className="p-prose mt-4">
                As CIO of a multi-site brewer, led 26 months of enterprise modernization connecting business and plant systems around a company-owned data core. Served on the executive leadership team, presented to the board, rebuilt IS/IT, and led 150 project participants across 25 task forces. Coordinated change across finance, warehousing, manufacturing, laboratory systems, food safety, SQF, and TTB compliance—ensuring brewery and commercial operations continued without interruption.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">02 // Founder &amp; Builder</p>
              <h3 className="mt-2">Business Ownership &amp; Operating Software</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Timberline Architectural Openings · Founder, CEO &amp; CTO</p>
              <p className="p-prose mt-4">
                Founded and scaled a manufacturing and distribution enterprise from $250K in first-year revenue to $130M by year ten, with full P&amp;L responsibility and 100+ employees. Personally engineered the proprietary enterprise software connecting estimating, engineering sales, purchasing, production, inventory, distribution, and finance. Engaged private equity firms on expansion financing and advised PE sponsors on troubled portfolio distributors.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">03 // The 20% Seam</p>
              <h3 className="mt-2">Core Systems Architecture &amp; Delivery</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Data Integration Group · Principal &amp; Solution Architect</p>
              <p className="p-prose mt-4">
                Across 50+ implementations and 15 scale transformations, bridging the critical operational seam where enterprise software meets physical work. Extensive cutover leadership across Microsoft Dynamics 365, SAP, NetSuite, and OneStream—compressing post-acquisition close from 18 days to four and turning around troubled multi-million-dollar programs. Earlier partner-side delivery at Access IT provides insider mastery of how systems integrators scope, bill, and staff.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">04 // Frontier Runtime</p>
              <h3 className="mt-2">Applied Enterprise Agentics &amp; Software Factories</h3>
              <p className="font-medium text-sm text-[#142840]/75 mt-1">Data Integration Group · Autonomous Systems Architecture</p>
              <p className="p-prose mt-4">
                Architecting and operating production multi-agent runtimes that bridge the delivery seam between autonomous code generation and physical enterprise workflows. Grounded in the tribal heuristics of frontline operators, enforcing schema contracts, deterministic validation gates, and human authorization at consequential operational steps—turning unwritten company knowledge into dependable enterprise capacity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SELECTED CLIENTS */}
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
                  <li>Timberline</li>
                  <li>EPI Materials</li>
                  <li>Crown Doors</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Public sector &amp; infrastructure</dt>
              <dd>
                <ul className={styles.names}>
                  <li>Port of Long Beach</li>
                  <li>San Francisco Municipal Transportation Agency</li>
                  <li>California High-Speed Rail Authority</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Agtech &amp; distribution</dt>
              <dd>
                <ul className={styles.names}>
                  <li>Ag-Wise Enterprises</li>
                  <li>Bakersfield Ag Chemistry</li>
                </ul>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>Non-profit &amp; education</dt>
              <dd>
                <ul className={styles.names}>
                  <li>Save the Redwoods League</li>
                  <li>San Francisco Botanical Garden</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SELECTED TRANSFORMATION WORK */}
      <section className="p-section" id="selected-transformations" aria-labelledby="selected-transformations-title">
        <div className="page-well">
          <p className="p-kicker">Delivery track record</p>
          <h2 className="p-h2" id="selected-transformations-title">Selected transformation work</h2>
          <div className="home-story mt-8">
            <article>
              <h3>Board-mandated enterprise transformation</h3>
              <p className="p-prose mt-4">
                Led 26 months of enterprise architecture and implementation across business and plant systems for a multi-site brewer. Rebuilt IS/IT around a unified data core, coordinating 25 task forces across business functions, technical teams, and implementation partners.
              </p>
            </article>
            <article>
              <h3>Financial integration after acquisition</h3>
              <p className="p-prose mt-4">
                Reduced financial close from 18 days to four in an 11-month transformation of a $350M post-acquisition business. Consolidated systems, reconciled master data, unified the chart of accounts, and integrated warehouses across entities and currencies.
              </p>
            </article>
            <article>
              <h3>Recovery of an at-risk $8M ERP program</h3>
              <p className="p-prose mt-4">
                Led an executive mandate to turn around an at-risk $8M enterprise ERP program. Reset partner governance, restored delivery accountability, and brought business leadership and implementation partners back around clear ownership—recovering the program and saving $2M.
              </p>
            </article>
            <article>
              <h3>Core systems modernization &amp; API bridges</h3>
              <p className="p-prose mt-4">
                Led migration from legacy monoliths to modern enterprise platforms. Engineered company-owned API bridges connecting warehouse, manufacturing, and commercial systems with zero operational downtime.
              </p>
            </article>
            <article>
              <h3>Integrated business planning and supply chain</h3>
              <p className="p-prose mt-4">
                Unified planning and supply-chain operations for a $200M multi-entity, multi-facility wine producer. Replaced spreadsheet and PowerPoint preparation for monthly meetings with continuously updated planning across acquired operations. Delivered purchasing and freight savings, improved inventory management, reduced SKUs, and strengthened labor scheduling and waste visibility.
              </p>
            </article>
            <article>
              <h3>Enterprise platform co-development &amp; shared IP</h3>
              <p className="p-prose mt-4">
                Brought together client, ERP partner, and custom software firm to design and build an integrated operations platform connecting legacy applications with ERP, WMS, and MES under a shared-IP model, negotiating pilot terms that eliminated software licensing charges for the client.
              </p>
            </article>
          </div>
          <p className="home-more mt-8">
            <Link className="p-link" href="/agentic-ai/">
              Learn through the work: Dispatches from the Operational Seam &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* SYSTEMS, WORKFLOWS, AND THE PEOPLE */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">Systems, workflows, and the people doing the work</h2>
          <p className="p-prose mt-4">
            All businesses are uniquely standard. The fundamentals are familiar; the people, constraints, and consequential exceptions shape the solution.
          </p>
          <p className="p-prose mt-4">
            I work with the CFO and compliance officer, the functional leads, the developers and delivery partners, and the warehouse team using the scanners. The architecture has to support the work across those groups.
          </p>
          <p className="p-prose mt-4">
            My enterprise application experience also includes electronic medical records (EMR/EHR).
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
                <DiagramModal
                  src="/diagrams/system-verse.svg?c=4"
                  alt="The Systemverse: company-owned data core at the center, systems around it"
                  title="The Systemverse"
                  subtitle="Company-owned data core at the center, systems around it"
                  triggerText="Open the diagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/diagrams/system-verse.svg?c=4"
                    alt="The Systemverse: company-owned data core at the center, systems around it"
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
                      Visualizing data core gravity pulling functional applications into one sovereign estate.
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
              I have run the systems named above. SAP, Oracle financials,
              NetSuite, and JD Edwards are estates I can work across when the
              mandate sits on them. Oracle Primavera is scheduling and controls
              I have run.
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
              <DiagramModal
                src="/diagrams/six-constellations.svg?c=4"
                alt="The Six Process Constellations: P2P, O2C, P2M, S2S, D2R, MDM around the data core."
                title="The Six Process Constellations"
                subtitle="Same six every company. The mix is yours."
                triggerText="Open the diagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diagrams/six-constellations.svg?c=4"
                  alt="The Six Process Constellations: P2P, O2C, P2M, S2S, D2R, MDM around the data core."
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
              <DiagramModal
                src="/diagrams/beehive.svg"
                alt="The Beehive process flow map: six process flows crossing functional groups"
                title="The Beehive Process Flow"
                subtitle="How work crosses functions, from floor to board."
                triggerText="Open the diagram"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diagrams/beehive.svg"
                  alt="The Beehive process flow map: six process flows crossing functional groups"
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

      {/* METHOD & PROOF */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">Find the cause. Own the change. Check the result.</h2>
          <p className="p-prose mt-4">
            I assess how people, data, and technology connect, identify the causes behind the friction, and agree priorities with the people responsible for the business. I align internal teams, vendors, and systems integrators around shared workflows and clear accountability.
          </p>
          <p className="p-prose mt-4">
            Before delivery, we agree what success means and how to verify it. Through implementation and adoption, I keep financial integrity, compliance, and operational continuity in view.
          </p>
        </div>
      </section>

      {/* FRONTIER PRODUCTION RUNTIMES BRIDGE */}
      <section className="p-section" id="applied-agentics">
        <div className="page-well">
          <div className="p-8 rounded-xl border border-[#142840]/20 bg-[#142840]/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <p className="p-kicker">Frontier Production Runtimes</p>
              <h2 className="p-h2 mt-1">Applied agentics on the enterprise already running.</h2>
              <p className="p-prose mt-4">
                Enterprise agentics requires more than a model and an API key—it requires deterministic caller boundaries, maintained company records, and human authority at consequential operational steps. I architect, build, and deploy multi-agent runtimes with AST validation gates and schema contracts that bridge the delivery seam between autonomous code generation and physical floor execution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link className="p-btn whitespace-nowrap" href="/agentic-ai/">
                Read Field Dispatches &rarr;
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
