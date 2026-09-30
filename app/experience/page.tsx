import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";
import ConstellationsFilm from "@/components/presence/ConstellationsFilm";
import BeehiveFilm from "@/components/presence/BeehiveFilm";

export const metadata: Metadata = {
  title: { absolute: "Experience | idigdata" },
  description:
    "Systems, people, and agentic work on the same ground.",
  alternates: { canonical: "/experience/" },
};

const operators = [
  {
    title: "CPG, Wine & Food",
    names: [
      "Sierra Nevada Brewing",
      "Duckhorn",
      "Foley Family Wines",
      "Everytable",
      "Greenham",
      "Valley Fine Foods",
    ],
  },
  {
    title: "Architecture & Construction",
    names: [
      "Turner Construction",
      "PCL Construction",
      "SOM",
      "HOK",
    ],
  },
  {
    title: "Sports & Entertainment",
    names: [
      "Wynn Resorts",
      "MGM Resorts",
      "San Jose Sharks",
    ],
  },
] as const;

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

const patterns = [
  {
    code: "01",
    name: "Enterprise transformation management",
    desc: "From planning through go-live. Tracking milestones, cutover dependencies, and delivery evidence.",
  },
  {
    code: "02",
    name: "Governed software delivery",
    desc: "Traceable decisions, delivery evidence, verified audit trails, and human authorization gates.",
  },
  {
    code: "03",
    name: "Workflows executed by people and agents",
    desc: "Using company-owned data. Human judgment at critical gates. Work that lands inside enterprise systems.",
  },
] as const;

export default function ExperiencePage() {
  return (
    <PresenceShell>
      <header className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">Experience</p>
              <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
                The domain, the people, and the work in production.
              </h1>
              <p className="p-dek">
                Systems, process, and agentic work sit on the same ground.
              </p>
            </div>
            <div className="home-watermark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="p-section p-section--job">
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

          <div className="dossier mt-10">
            <p className="dossier-entry">
              <strong>Sierra Nevada Brewing, CIO.</strong> I owned the
              technology roadmap and budget. More than 150 people at peak,
              across the company&apos;s teams and the partners on that work.
              That peak is the team, not a count of systems. This frame is
              how that many people stay on one map: process in the
              constellations, people crossing functions in the Beehive.
            </p>
            <p className="dossier-entry">
              I build with the people and the systems the company already has,
              and I stay accountable. When the work needs more than that team,
              I bring engineers, project managers, partners, and specialists
              for the agreed scope.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <p className="p-kicker">Companies and receipts</p>
          <h2 className="p-h2">Names that show the breadth.</h2>
          <p className="portfolio-sub">
            These are companies where I led the transformation, the
            technology function, or the delivery.
          </p>
          <div className="portfolio-strip">
            {operators.map((sector) => (
              <div key={sector.title} className="sector-block">
                <p className="sector-title">{sector.title}</p>
                <p className="operator-names">{sector.names.join(" · ")}</p>
              </div>
            ))}
          </div>
          <div className="dossier">
            <p className="dossier-entry">
              <strong>Data Integration Group.</strong> A post-M&amp;A estate
              in 11 months. Financial close from 18 days to four. Chart of
              accounts and WMS unified. Item records standardized.
            </p>
            <p className="dossier-entry">
              <strong>Data Integration Group.</strong> A separate delivery: a
              stalled ERP recovered, and a company-owned API bridge.
            </p>
            <p className="dossier-entry">
              <strong>Sierra Nevada Brewing, CIO.</strong> More than 200
              disparate systems brought to 25 connected enterprise systems on
              a company-owned data core. The IS/IT team rebuilt.
            </p>
            <p className="dossier-spine">
              30 years · 50+ implementations · 15 transformations at scale
            </p>
          </div>
          <p className="p-prose mt-8">
            That evidence has to hold under scrutiny. Who is on the estate,
            what they can reach, who can change the books, and a trail of what
            ran. When agents can reach the same estate, the questions are the
            same kind: what is already running, what it can see and do, who
            authorizes the write, and what it cost. Spend is per outcome. A
            named person can halt the work.
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <figure className="waves-doc">
            <div className="plate-main-text">
              <p className="p-kicker">The time is now</p>
              <h2 className="p-h2">
                Every ten-year wave was the same game. This one is not.
              </h2>
              <p className="p-prose">
                Mainframe. Client-server and ERP. Cloud and SaaS. Each one was
                a new platform and a long replacement. Applied agentics does
                not wait for a decade. It lands on the stack and the data you
                already own.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-[#142840]/15 bg-[#FBF9F4] p-3 shadow-sm md:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/four-waves.svg?c=4"
                alt="Four waves of enterprise technology. Three replacement cycles, then applied agentics on the systems you already own."
                className="h-auto w-full"
              />
              <p className="mt-3 text-left">
                <a className="p-link" href="/diagrams/four-waves.svg?c=4" target="_blank" rel="noopener noreferrer">
                  Open the diagram
                </a>
              </p>
            </div>
            <figcaption className="waves-caption">
              The first three waves rhyme as platform replacements. The fourth
              wave lands on the systems you already own.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">On that same ground</p>
          <h2 className="p-h2" style={{ maxWidth: "22ch" }}>
            Three types of agentic systems in production.
          </h2>
          <p className="p-prose">
            Three types of agentic systems in production, through Data
            Integration Group. BOSS is one of the systems on this ground.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {patterns.map((pattern) => (
              <article
                key={pattern.code}
                className="rounded-lg border border-[#142840]/15 bg-[#FBF9F4] p-6"
              >
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                  Type {pattern.code}
                </span>
                <h3 className="mt-2 font-vollkorn text-[19px] font-bold text-navy">
                  {pattern.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                  {pattern.desc}
                </p>
              </article>
            ))}
          </div>
          <div className="dossier">
            <p className="dossier-entry">
              <strong>Data Integration Group.</strong> Four years applying
              agentics on company-owned data, with a trail of the source, the
              action, the approval, and the result. A named person authorizes
              the write.
            </p>
            <p className="dossier-entry">
              <strong>Sierra Nevada Brewing, CIO.</strong> Agentic systems in
              production on the company-owned data core, with accountable
              business owners.
            </p>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
