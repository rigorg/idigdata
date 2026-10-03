import Link from "next/link";
import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";
import ConstellationsFilm from "@/components/presence/ConstellationsFilm";
import BeehiveFilm from "@/components/presence/BeehiveFilm";

export const metadata: Metadata = {
  title: { absolute: "Experience | idigdata" },
  description:
    "Executive leadership and enterprise transformation across 50+ implementations and 15 enterprise transformations at scale.",
  alternates: { canonical: "/experience/" },
};


const estate = [
  {
    title: "Core Enterprise ERP",
    tag: "General Ledger",
    rows: [
      "Microsoft Dynamics 365 · Finance & Supply Chain / Business Central",
    ],
  },
  {
    title: "Corporate Financial Planning",
    tag: "CPM / EPM",
    rows: [
      "OneStream · Enterprise CPM & Financial Close Consolidation",
      "Solver · Corporate Planning, Budgeting & Reporting",
    ],
  },
  {
    title: "Human Capital Management",
    tag: "HCM · People",
    rows: [
      "Workday · Enterprise HCM & Core Human Capital",
      "UKG · Workforce Management, Time & Labor, Payroll",
    ],
  },
  {
    title: "Manufacturing & Plant Automation",
    tag: "MES · SCADA",
    rows: [
      "ProLeiT · Brewing & Process Automation MES",
      "Ignition · Industrial SCADA & Plant Floor Execution",
    ],
  },
  {
    title: "Supply Chain & Transportation",
    tag: "WMS · TMS · S&OP",
    rows: [
      "Infios · Warehouse Management System (WMS)",
      "MercuryGate · Transportation Management System (TMS)",
      "John Galt Solutions · Atlas Demand Planning & S&OP",
      "1WorldSync · Master Item Data & GDSN Network",
    ],
  },
  {
    title: "Engineering & Asset Lifecycle",
    tag: "PLM · EAM · AEC",
    rows: [
      "Aras · Product Lifecycle Management (PLM)",
      "Brightly Asset Essentials · Enterprise Asset Management (EAM / CMMS)",
      "Procore · Capital Project & Construction Management",
      "Oracle Primavera · Project scheduling and controls",
    ],
  },
  {
    title: "CRM & Wholesale Distribution",
    tag: "Route to Market",
    rows: [
      "Salesforce · Enterprise CRM & Sales Cloud",
      "VIP (Vermont Info Processing) · 3-Tier Beverage Distribution & Depletions",
      "NielsenIQ · Syndicated Retail & Market Measurement",
    ],
  },
  {
    title: "DTC Commerce & Point of Sale",
    tag: "Commerce · POS",
    rows: [
      "Commerce7 · Winery & Craft Beverage DTC, Clubs & Tasting Room POS",
      "Shopify · Enterprise Omnichannel eCommerce",
      "Toast · Hospitality, Taproom & Restaurant POS",
    ],
  },
  {
    title: "Data Core & Integration Spine",
    tag: "Data Core",
    rows: [
      "Databricks · Unified Lakehouse & Analytics",
      "Microsoft Fabric · Enterprise Data Fabric",
      "Azure Data Lake · Cloud Data Storage",
      "Boomi & Fivetran · iPaaS & Automated Data Pipelines",
      "Power BI · Executive Reporting & BI",
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
<p className="p-dek">{"I built and ran a $130M operating business, then brought that perspective to enterprise technology leadership. My career spans 50+ implementations and 15 enterprise transformations at scale, including complex, highly regulated businesses where financial integrity, compliance, and operational continuity shape delivery."}</p>
<p className="p-prose mt-4">{"Through Data Integration Group, I lead client-side transformation across people, data, applications, and delivery partners. Earlier partner-side work at Access IT gave me an inside understanding of how systems integrators, software vendors, and resellers deliver. I bring both perspectives to the work."}</p>
</div>
<div className="home-watermark" aria-hidden="true">
<img src="/idigdata-mark.svg" alt="" />
</div>
</div>
</div>
</header>
<section className="p-section">
<div className="page-well">
<h2 className="p-h2">{"Selected transformation work"}</h2>
<div className="executive-stories">
<article>
<h3>{"Financial integration after acquisition"}</h3>
<p className="p-prose mt-4">{"Reduced financial close from 18 days to four in an 11-month transformation of a $350M post-acquisition business. Consolidated systems, reconciled master data, unified the chart of accounts, and integrated warehouses across entities and currencies."}</p>
</article>
<article>
<h3>{"Recovery of a stalled ERP program"}</h3>
<p className="p-prose mt-4">{"Recovered a stalled $8M ERP program and saved $2M. Reset partner governance and delivery; built a company-owned API bridge connecting the new ERP to an existing production platform."}</p>
</article>
<article>
<h3>{"Integrated business planning and supply chain"}</h3>
<p className="p-prose mt-4">{"Unified planning and supply-chain operations for a $200M multi-entity, multi-facility wine producer. Replaced spreadsheet and PowerPoint preparation for monthly meetings with continuously updated planning across acquired operations. Delivered purchasing and freight savings, improved inventory management, reduced SKUs and labor costs, and strengthened labor scheduling and waste visibility."}</p>
</article>
<article>
<h3>{"Enterprise application architecture and development"}</h3>
<p className="p-prose mt-4">{"Brought together the client, ERP partner, and a custom software firm to design and build an integrated winemaking platform connecting a legacy application with ERP, WMS, and MES, under a shared-IP arrangement, and oversaw its development. Negotiated pilot-customer terms that eliminated software charges for the client."}</p>
</article>
<article>
<h3>{"Master data that connects the business"}</h3>
<p className="p-prose mt-4">{"Standardized complex item records into a common item master for enterprise and third-party integration."}</p>
</article>
</div>
</div>
</section>
<section className="p-section">
<div className="page-well">
<h2 className="p-h2">{"Executive leadership, grounded in operating experience"}</h2>
<h3 className="executive-role">{"Sierra Nevada Brewing Co. | Chief Information Officer"}</h3>
<p className="p-prose mt-4">{"Owned technology strategy, investment, operations, data, cybersecurity, and governance for an approximately $420M multi-site brewer. Served on the executive leadership team and presented to the board."}</p>
<p className="p-prose mt-4">{"Led a $15M modernization consolidating 200+ systems to 25 connected enterprise systems. Rebuilt IS/IT and led 150+ combined internal and partner personnel at peak, coordinating 25 task forces across business functions, technical teams, and implementation partners. Change spanned finance, warehousing, manufacturing and planning, including laboratory systems, food safety, SQF, and TTB requirements."}</p>
<h3 className="executive-role">{"Timberline | Business ownership and technology leadership"}</h3>
<p className="p-prose mt-4">{"Founded and operated a contractor, manufacturer, and distributor of architectural openings. Grew revenue from $250K in year one to $130M by year 10, with P&L responsibility and 100+ employees. Built proprietary software connecting estimating, project delivery, purchasing, production, inventory, distribution, and finance."}</p>
<p className="p-prose mt-4">{"Engaged multiple private equity firms on expansion financing; separately advised a PE team on troubled distributors, applying operating experience across ERP, warehouse, and shop-floor systems."}</p>
<h3 className="executive-role">{"Access IT | Partner-side delivery"}</h3>
<p className="p-prose mt-4">{"Led Microsoft Dynamics and ContractERP implementations across functional, technical, and solution architecture responsibilities, from requirements and customization through migration, integration, testing, cutover, and stabilization."}</p>
</div>
</section>
<section className="p-section">
<div className="page-well">
<h2 className="p-h2">{"Systems, workflows, and the people doing the work"}</h2>
<p className="p-prose mt-4">{"All businesses are uniquely standard. The fundamentals are familiar; the people, constraints, and consequential exceptions shape the solution."}</p>
<p className="p-prose mt-4">{"I work with the CFO and compliance officer, the functional leads, the developers and delivery partners, and the warehouse team using the scanners. The architecture has to support the work across those groups."}</p>
<p className="p-prose mt-4">{"My enterprise application experience also includes electronic medical records (EMR/EHR)."}</p>
</div>
</section>      <section className="p-section p-section--job">
        <div className="page-well">
          <p className="p-kicker">The systems</p>
          <h2 className="p-h2">The Systemverse, and the systems beside it.</h2>
          <p className="p-prose">
            Best practice where you are standard. Your sauce where you are not.
            The work is knowing which is which, then anchoring the systems to a
            company-owned data core.
          </p>

          <div className="command-plate mt-8">
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
              src="/diagrams/system-verse.svg"
              alt="The Systemverse: company-owned data core at the center, systems around it"
            />
            <p className="mt-3 text-left">
              <a className="p-link" href="/diagrams/system-verse.svg" target="_blank" rel="noopener noreferrer">
                Open the diagram
              </a>
            </p>
            <div className="telemetry-badge">
              <HaloFilm
                src="/media/systemverse-loop.mp4?c=2"
                poster="/media/systemverse-poster.png?c=2"
                label="Systemverse, in motion"
                size={72}
              />
              <div>
                <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                  The estate picture, in motion
                </p>
                <p className="mt-0.5 text-[13px] text-[#243345]">
                  Gold routes from the data core to the systems that run the
                  work.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mt-12 font-vollkorn text-[26px] font-extrabold text-navy">
            Significant systems I have run.
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
<p className="p-prose mt-4">{"I assess how people, data, and technology connect, identify the causes behind the friction, and agree priorities with the people responsible for the business. I align internal teams, vendors, and systems integrators around shared workflows and clear accountability."}</p>
<p className="p-prose mt-4">{"Before delivery, we agree what success means and how to verify it. Through implementation and adoption, I keep financial integrity, compliance, and operational continuity in view."}</p>
</div>
</section>
<section className="p-section" id="applied-agentics">
<div className="page-well">
<h2 className="p-h2">{"Applied agentics on the enterprise already running"}</h2>
<p className="p-prose mt-4">{"I architect, develop, and deploy agentic applications on company-owned data. The work includes transformation management through go-live, governed software delivery, and workflows executed by people and agents."}</p>
<div className="home-scales">
<article>
<h3>{"Enterprise transformation management"}</h3>
<p className="p-prose mt-4">{"Planning, milestones, cutover dependencies, and delivery evidence through go-live."}</p>
</article>
<article>
<h3>{"Governed software delivery"}</h3>
<p className="p-prose mt-4">{"Traceable decisions, testing and delivery evidence, and human authorization."}</p>
</article>
<article>
<h3>{"Workflows across people and systems"}</h3>
<p className="p-prose mt-4">{"Company-owned data, defined permissions, and human judgment at consequential steps."}</p>
</article>
</div>
<p className="p-prose mt-4">{"Security, observability, and traceability are part of the design. The work includes the documentation, operating knowledge, and team capability needed to support the resulting systems."}</p>
</div>
</section>
<section className="p-section">
<div className="page-well">
<h2 className="p-h2">{"What does your next transformation require?"}</h2>
<p className="p-prose mt-4">{"Executive leadership, recovery of a troubled program, or a defined part of the work. Tell me where your business is."}</p>
<div className="home-hero-actions">
<Link className="p-btn" href="/contact/">{"Start a conversation"}</Link>
</div>
</div>
</section>
</PresenceShell>
  );
}
