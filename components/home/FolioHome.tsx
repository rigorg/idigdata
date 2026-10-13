import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";

export default function FolioHome() {
  return (
    <PresenceShell>
      {/* SECTION 1: HERO MASTHEAD */}
      <section className="p-section p-section--tight">
        <div className="page-well">
          <div className="hero-split">
            <div className="home-hero-copy">
              <h1 className="p-h1 home-hero-title">
                <span className="block text-navy">Build what's next.</span>
                <span className="block mt-3 text-[0.62em] font-medium leading-[1.15] text-navy/85 tracking-normal">
                  Make enterprise technology work in the business you have.
                </span>
              </h1>
              <p className="p-prose mt-5">
                I connect people, systems, and workflows through data to make enterprise technology work in the business you have.
              </p>
              <p className="p-prose mt-3">
                I turn business priorities into executable work, build and lead the teams to deliver it, and carry responsibility through implementation, adoption, and daily operations. My work combines the judgment of a business owner, the accountability of a CIO, and the technical depth of a software builder.
              </p>
              <p className="executive-proof">
                20+ years in enterprise systems &middot; 50+ implementations &middot; 15 enterprise transformations at scale
              </p>
              <div className="home-hero-actions">
                <Link className="p-btn" href="/block/">
                  Explore outcomes in The Block
                </Link>
                <Link className="p-link" href="/contact/">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="home-watermark" aria-hidden="true">
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRANSFORMATION IN PRACTICE — WHAT NEEDS TO CHANGE? (PAIN -> SOLUTION) */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">What needs to change?</h2>
          <p className="p-prose mt-4">
            Transformation in practice. Real enterprise progress starts where people, systems, and workflows meet the reality of daily operations. Across six primary domains, I resolve operational friction and lead delivery from intent to working outcome.
          </p>
          <div className="home-cards mt-8">
            <article className="home-card">
              <p className="home-card-cat">Commercial &amp; Solution Leadership</p>
              <h3>Strategic opportunities. Defensible investment.</h3>
              <p className="p-prose mt-3">
                Translate enterprise operating priorities into qualified solutions, clear delivery responsibilities, and aligned commercial agreements executives can defend and support.
              </p>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Enterprise Transformation &amp; Delivery</p>
              <h3>Clear priorities. Accountable leadership.</h3>
              <p className="p-prose mt-3">
                Lead cross-functional delivery teams, internal technology groups, and systems integrators from initial charter through cutover, adoption, and daily operations.
              </p>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Architecture &amp; Business Systems</p>
              <h3>Enterprise platforms connected by data.</h3>
              <p className="p-prose mt-3">
                Connect core ERP, supply chain, and shop-floor applications around physical operating workflows with business continuity built into every cutover.
              </p>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Data, Knowledge &amp; Financial Systems</p>
              <h3>Trusted information. Auditable integrity.</h3>
              <p className="p-prose mt-3">
                Unify master records, accelerate financial close, and turn company history and operating rules into reliable institutional memory for people and agents.
              </p>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Agentic Software &amp; Workflow Delivery</p>
              <h3>Autonomous capacity. Human authority.</h3>
              <p className="p-prose mt-3">
                Build custom agentic software and workflow automation around frontline operating heuristics—governed by deterministic data contracts and human authorization.
              </p>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Technology Operations &amp; Control</p>
              <h3>Dependable operations. Plant continuity.</h3>
              <p className="p-prose mt-3">
                Maintain high-availability infrastructure, pragmatic cybersecurity posture, and multi-site operational change management that protect business and plant continuity.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 border-t border-[#142840]/10 pt-6">
            <Link className="p-link font-semibold text-[#142840]" href="/block/">
              Explore the 60 enterprise outcomes in The Block &rarr;
            </Link>
            <Link className="p-link text-slate-600" href="/experience/">
              See executive track record on Experience &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: APPLIED AGENTICS BRIDGE */}
      <section className="p-section">
        <div className="page-well">
          <div className="p-8 rounded-xl border border-[#142840]/15 bg-[#142840]/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="p-kicker">Operational Knowledge &amp; Frontier Software</p>
              <h2 className="p-h2 mt-1">Put the full knowledge of your business to work.</h2>
              <p className="p-prose mt-3">
                Years of operating knowledge live across your people, your data, and your systems. I design and build enterprise agentic systems—putting company knowledge and data to work with clear business ownership, traceable actions, and human authority.
              </p>
            </div>
            <div className="shrink-0">
              <Link className="p-btn whitespace-nowrap" href="/agentic-ai/">
                Read Field Briefs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ENGAGEMENT MANDATES & CALL TO ACTION */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">The full mandate, or a defined part.</h2>
          <p className="home-engage-lead">
            Engage me for an executive role, focused transformation work, or fractional leadership. The responsibilities, scope, and outcomes are agreed around what your business needs.
          </p>
          <div className="home-scales mt-8">
            <article>
              <h3>Executive roles</h3>
              <p className="p-prose mt-3">
                An executive mandate connecting business direction, software, people, and delivery, with accountability for operating results.
              </p>
            </article>
            <article>
              <h3>Focused work</h3>
              <p className="p-prose mt-3">
                A defined operating problem or transformation outcome. The Block helps frame priorities and scope for our conversation.
              </p>
              <Link
                className="p-link capability-link mt-3 inline-flex items-center gap-1.5 font-semibold text-[#142840]"
                href="/block/"
              >
                Configure in The Block &rarr;
              </Link>
            </article>
            <article>
              <h3>Fractional leadership</h3>
              <p className="p-prose mt-3">
                Executive responsibility for an agreed part of the role. Interim mandates are also welcome.
              </p>
            </article>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-[#142840] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">Build what your business needs next.</h3>
              <p className="text-white/80 mt-1 max-w-xl text-sm leading-relaxed">
                Bring me the role, the transformation, or the operational problem you need to solve.
              </p>
            </div>
            <Link className="p-btn !bg-white !text-[#142840] hover:!bg-[#F3EFE6] shrink-0" href="/contact/">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
