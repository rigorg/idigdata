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
                Your business runs on more than its systems. It runs on what your people know, the decisions they make, and how work actually gets done.
              </p>
              <p className="p-prose mt-3">
                I connect business leadership, operating knowledge, and hands-on software building to turn enterprise change into working results—from the boardroom decision through implementation and floor adoption.
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
            Transformation in practice. Real enterprise progress starts where systems, people, and daily work collide. Across six core disciplines, I resolve the underlying operational friction and lead delivery from intent to verifiable outcome.
          </p>
          <div className="home-cards">
            <article className="home-card">
              <p className="home-card-cat">Leadership, Direction &amp; Transformation</p>
              <h3>Clear priorities. Accountable leadership.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Disconnected vendor promises, fragmented priorities, and runaway consulting spend with no single client-side leader accountable for the outcome.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Align technology investments, internal teams, and systems integrators directly to measurable business milestones and operational adoption.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Business Systems &amp; Integration</p>
              <h3>Enterprise applications that work together.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Siloed ERP, warehouse, and plant systems where handoffs fail at the dock, the floor, or the spreadsheet seam—driving expensive workarounds.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Connect core ERP, supply chain, and shop-floor applications around actual physical workflows with zero operational rollback.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">IT Operations &amp; Security</p>
              <h3>A modern IT function for the operation.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Vulnerable plant operational technology (OT), technical debt, and constant firefighting that leaves systems fragile and unmanageable.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Dependable enterprise infrastructure, pragmatic cybersecurity posture, and high-availability operations protecting plant and business continuity.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Data &amp; Knowledge</p>
              <h3>Trusted information. Knowledge the company owns.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Decades of critical operating knowledge trapped in spreadsheets and individual heads, conflicting reports, and disconnected data silos.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Unified master data governance, clean integration pipelines, and institutionalized operating knowledge that turns company data into dependable decisions.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Financial Systems</p>
              <h3>Financial integrity through change.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Delayed month-end closes, manual reconciliations, fractured multi-entity ledgers, and zero real-time visibility into unit margins.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Automated 3-way matching, multi-entity consolidation, and full transaction traceability—with finance retaining total control of accounting authority.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>

            <article className="home-card">
              <p className="home-card-cat">Workflows &amp; Automation</p>
              <h3>Better handoffs. Less repeated work.</h3>
              <p className="p-prose mt-4">
                <strong>The friction:</strong> Fragile automation scripts, repetitive manual re-entry, and fear of autonomous AI making rogue changes to core business ledgers.
              </p>
              <p className="p-prose mt-2">
                <strong>The outcome:</strong> Production agentic workflows with deterministic caller gates, verifiable audit trails, and human authorization at critical operational seams.
              </p>
              <Link className="p-link capability-link" href="/block/">
                Explore outcomes in The Block &rarr;
              </Link>
            </article>
          </div>
          <p className="home-more mt-8">
            <Link className="p-link" href="/experience/">
              See the executive track record and case studies behind these outcomes on Experience &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 3: KNOWLEDGE & THE OPERATIONAL SEAM */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">Put the full knowledge of your business to work.</h2>
          <p className="home-know-line">People. Data. Systems.</p>
          <p className="p-prose mt-4">
            Years of operating knowledge live across your people, your data, and your systems. I connect that knowledge to the decisions and the work it should support.
          </p>
          <p className="p-prose mt-4">
            I follow how people work and how data moves across applications, then design, build, and deploy agentic applications that turn company knowledge into executable workflows. Clear business ownership, traceable actions, and human authorization keep the work accountable.
          </p>
          <p className="home-more">
            <Link className="p-link" href="/agentic-ai/">
              Learn through the work: Dispatches from the Operational Seam &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 4: ENGAGEMENT MANDATES */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">The full mandate, or a defined part.</h2>
          <p className="home-engage-lead">
            Engage me for an executive role, focused transformation work, or fractional leadership. The responsibilities, scope, and outcomes are agreed around what your business needs.
          </p>
          <div className="home-scales">
            <article>
              <h3>Executive roles</h3>
              <p className="p-prose mt-4">
                An executive mandate connecting business direction, software, people, and delivery, with accountability for operating results.
              </p>
            </article>
            <article>
              <h3>Focused work</h3>
              <p className="p-prose mt-4">
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
              <p className="p-prose mt-4">
                Executive responsibility for an agreed part of the role. Interim mandates are also welcome.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">Build what your business needs next.</h2>
          <p className="p-prose mt-4">
            The result should be more than a system going live: people equipped to do the work, trusted data for decisions, and technology your company can operate and improve.
          </p>
          <p className="p-prose mt-4">
            Bring me the role, the transformation, or the problem you need to solve.
          </p>
          <div className="home-hero-actions">
            <Link className="p-btn" href="/contact/">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
