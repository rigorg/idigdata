import type { Metadata } from "next";
import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";
import ConstellationsFilm from "@/components/presence/ConstellationsFilm";
import BeehiveFilm from "@/components/presence/BeehiveFilm";

export const metadata: Metadata = {
  title: { absolute: "Application layer | idigdata" },
  description:
    "The applications you already own, put to work. The company keeps a data foundation it owns.",
  alternates: { canonical: "/application-layer/" },
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
      "SAP · S/4HANA & ECC",
      "Oracle · Enterprise Financials",
      "NetSuite · Cloud ERP",
      "JD Edwards (JDE) · EnterpriseOne / World",
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
      "Autodesk Revit · Building information modeling",
      "SketchUp · Trimble · 3D design for construction",
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
    desc: "Corporate planning, executive BI, financial consolidation, margin telemetry, and statutory reporting. Every enterprise has this - the old record-to-report spine, widened to the data that steers the company.",
  },
  {
    code: "MDM",
    name: "Master Data Management",
    tagline: "Cross-cutting foundation",
    desc: "Item master, customer master, vendor master, chart of accounts, and governance across the estate. The missing link I keep finding on transformations.",
  },
] as const;

export default function ApplicationLayerPage() {
  return (
    <PresenceShell>
      <header className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">The application layer</p>
              <h1 className="p-h1" style={{ maxWidth: "18ch" }}>
                The applications you already own, put to work.
              </h1>
              <p className="p-dek">
                I connect ERP, planning, warehouse, manufacturing, finance, and
                compliance around how the business actually runs. The company keeps
                a data foundation it owns.
              </p>
              <div className="p-lead">
                <p>
                  I direct the roadmap, the budget, and the delivery with the
                  company&apos;s business leaders. The work runs from discovery
                  through cutover, stabilization, and the next cycle. The business
                  keeps running while the work moves.
                </p>
              </div>
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
          <p className="p-kicker">Core Architecture</p>
          <h2 className="p-h2">All companies are uniquely standard.</h2>
          <p className="mt-4 font-vollkorn text-[20px] italic leading-[1.45]">
            Best practice where you are standard. Your sauce where you are not.
            The work is knowing which is which, then anchoring the systems and
            processes to a company-owned data core.
          </p>
          <p className="p-prose mt-4">
            Most of the estate should look like a well-run peer. A thin slice
            should not. That slice is what makes the company distinct.
          </p>
          <p className="p-prose mt-4">
            Whether an operator runs four platforms or fourteen, the application
            layer comes down to two structural slices of the same core: the
            systems that run the estate (The Systemverse) and the universal
            business process value chains that route through them (The Six
            Constellations).
          </p>

          <div className="twin-command-grid">
            {/* Left Column: The Systemverse (The Systems Slice) */}
            <div className="command-plate">
              <div className="mb-3 text-left">
                <p className="font-vollkorn text-[17px] font-bold text-navy">
                  I. The Systemverse
                </p>
                <p className="text-[13px] text-[#5A6978]">
                  Named systems · customer-side command
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/system-verse.svg"
                alt="The Systemverse: company-owned data core at the center, systems around it"
              />
              <div className="telemetry-badge">
                <HaloFilm
                  src="/media/systemverse-loop.mp4?c=2"
                  poster="/media/systemverse-poster.png?c=2"
                  label="Systemverse telemetry loop"
                  size={72}
                />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The estate picture, live
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    Gold routes from the data core to the systems that run the
                    work.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: The Six Process Constellations (The Workflow Slice) */}
            <div className="command-plate">
              <div className="mb-3 text-left">
                <p className="font-vollkorn text-[17px] font-bold text-navy">
                  II. The Six Constellations
                </p>
                <p className="text-[13px] text-[#5A6978]">
                  Universal process frame · bespoke fill
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/six-constellations.svg?c=4"
                alt="The Six Process Constellations: P2P, O2C, P2M, S2S, D2R, MDM around the data core. Outer rings are the workflow blocks in each constellation."
              />
              <div className="telemetry-badge">
                <ConstellationsFilm size={72} />
                <div>
                  <p className="font-vollkorn text-[13.5px] font-bold text-navy">
                    The workflow rings, live
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#243345]">
                    Each outer band is the workflow blocks in that
                    constellation. Same six every company. The mix is yours.
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

          <div className="mt-8 border-l-2 border-[#FACC15] pl-4">
            <p className="text-[15.5px] italic leading-[1.6] text-[#475569]">
              The Systemverse maps the software. The Constellations map the
              process flows. The Beehive carries the people. The six flows
              cross the functional groups so accountability never falls
              between vendor cracks.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <p className="p-kicker">Controls</p>
          <h2 className="p-h2" style={{ maxWidth: "18ch" }}>
            The estate has to hold under scrutiny.
          </h2>
          <p className="p-prose">
            At the application layer, cyber is not a product next to the ERP.
            It is who can get in, what they can reach, what can write, and
            whether you can prove it. Same rail as the books. A SOX look asks
            who can change the ledger and whether the record would hold. If
            you cannot answer that, you do not own the map.
          </p>
          <ul className="mechanics-grid">
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Identity
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                Who is on the estate. Named people, not a shared login next to
                the general ledger.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Access
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                What they can reach across ERP, WMS, and the rest of the stack,
                and what they cannot.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Segregation of duties
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                Who can change the books. Posting, approving, and paying are
                not the same hand.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                An evidence trail
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                What ran, what was touched, and whether it finished. A record
                that would stand a SOX look.
              </p>
            </li>
          </ul>
          <p className="p-prose">
            The operation stays up while those hold. Once agents can reach
            the same estate, last move and prove-what-happened sit on this
            rail. That is not a second program.
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Who I have sat with</p>
          <h2 className="p-h2">Companies that already run it.</h2>
          <div className="portfolio-strip">
            <p className="portfolio-sub">
              Past transformations, leadership, and operational delivery
            </p>
            {operators.map((sector) => (
              <div key={sector.title} className="sector-block">
                <p className="sector-title">{sector.title}</p>
                <p className="operator-names">{sector.names.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">The estate</p>
          <h2 className="p-h2">The estate I have commanded.</h2>
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
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Operating Model</p>
          <h2 className="p-h2">Internal capability. Frontline adoption.</h2>

          <div className="mt-4 border-l-3 border-[#FACC15] pl-4 py-1">
            <p className="font-vollkorn text-[22px] font-bold italic leading-[1.4] text-navy">
              &ldquo;Systems fight the business when data is fragmented.&rdquo;
            </p>
            <p className="mt-1 font-brand text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B48A05]">
              Delivery Reality
            </p>
          </div>

          <p className="p-prose mt-6">
            Transformation fails when software is deployed in a vacuum and frontline
            teams are left firefighting bad data and broken handoffs. True adoption
            happens when workflows reflect the actual business, data is governed at the
            source, and internal teams are developed to own the capability from day one.
          </p>
          <p className="p-prose mt-3">
            The Beehive maps how work actually crosses departments and functional
            groups-connecting the warehouse bays and manufacturing floor directly to
            executive reporting.
          </p>

          <div className="command-plate mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/beehive.svg"
              alt="The Beehive process flow map: 6 BPFs crossing functional groups"
            />
            <div className="telemetry-badge">
              <BeehiveFilm size={80} />
              <div>
                <p className="font-vollkorn text-[14px] font-bold text-navy">
                  The human operating engine, live
                </p>
                <p className="mt-1 text-[14px] text-[#243345]">
                  The six process flows crossing the functional groups.
                </p>
              </div>
            </div>
            <p className="mt-4 font-display text-[15.5px] italic text-warm-gray">
              How work actually moves across functions · from floor to board.
            </p>
          </div>

          <p className="mt-10 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
            Execution mechanics
          </p>
          <ul className="mechanics-grid">
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Internal ownership
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                I architect and build. I develop the internal team and hold
                vendors and systems integrators accountable for cost and
                delivery. The company keeps ownership of its data, knowledge,
                and custom software.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Frontline reality
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                From warehouse bays and plant floors to the executive boardroom,
                nobody is assumed. We build alongside the operators who carry
                the daily reality of the company.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Cultural adoption
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                Go-live is a milestone, not the finish line. Training, SOPs,
                and adoption are designed so the team feels empowered, confident,
                and proud to run the new way.
              </p>
            </li>
          </ul>
        </div>
      </section>

            <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <div className="beat-gold">
            <p className="p-kicker">Receipts</p>
            <h2 className="p-h2">The receipts at enterprise scale.</h2>
            <p className="p-prose">
              The business keeps running while the work moves. Customer-side command
              from discovery through cutover and stabilization.
            </p>
            <div className="dossier">
              <p className="dossier-entry">
                <strong>Data Integration Group.</strong> $350M post-M&amp;A
                estate in 11 months. Financial close from 18 days to four.
                Chart of accounts and WMS unified. Item records standardized.
              </p>
              <p className="dossier-entry">
                <strong>Data Integration Group.</strong> Stalled $8M ERP
                recovered, with $2M saved, and a company-owned API bridge.
              </p>
              <p className="dossier-entry">
                <strong>Sierra Nevada Brewing, CIO (~$420M).</strong> Owned the
                technology roadmap and budget. $15M estate transformation: more
                than 200 disparate systems brought to 25 connected enterprise
                systems on a company-owned data core. IS/IT team rebuilt. More
                than 150 people at peak.
              </p>
              <p className="dossier-spine">
                30 years · 50+ implementations · 15 transformations at scale ·
                $100M-$1B enterprise operators
              </p>
            </div>

            <div className="mt-8 border-t border-[#142840]/10 pt-6">
              <p className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                What the company keeps
              </p>
              <p className="p-prose mt-2">
                Mapped workflows, governed data, people who can run the next
                cycle, and ownership of the data and the custom software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">
            Have a substantial technology mandate? Let&apos;s talk.
          </h2>
          <div className="mt-8">
            <Link href="/contact/" className="p-btn">
              <span className="p-gold-sq" aria-hidden="true" />
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
