import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";

export default function FolioHome() {
  return (
    <PresenceShell>
      <section className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">Robert Paddock</p>
              <h1 className="p-h1">A living business asset.</h1>
              <p className="p-dek">
                I lead enterprise technology from business decision to working
                operation, taking responsibility for the full mandate or a
                defined part of it.
              </p>
              <p className="p-prose mt-4">
                All businesses are uniquely standard. The fundamentals are
                familiar; the people, constraints, and consequential exceptions
                shape the solution. The result is a living business asset the
                company owns, controls, and can keep improving.
              </p>
              <p className="dossier-spine mt-4">
                <span className="block">30 years · 50+ implementations · 15 transformations at scale</span>
                <span className="block mt-1">Four years applying agentics in production</span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/contact/" className="p-btn">
                  <span className="p-gold-sq" aria-hidden="true" />
                  Start a conversation
                </Link>
                <Link href="/application-layer/" className="p-link">
                  See the application layer
                </Link>
              </div>
            </div>
            <div className="home-watermark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well beats">
          <article className="beat">
            <h3 className="beat-kicker">The work</h3>
            <div>
              <h2 className="beat-h2">
                Five categories. The full mandate, or a defined part.
              </h2>
              <p className="p-prose">
                Time, Roadmaps, the record, the money, and objective workflows.
                Compliance sits inside objective workflows. I take the full
                mandate, or a defined part of it.
              </p>
            </div>
          </article>

          <article className="beat">
            <h3 className="beat-kicker">The proof</h3>
            <div>
              <h2 className="beat-h2">
                The same receipts as the profile and the brief.
              </h2>
              <div className="dossier">
                <p className="dossier-entry">
                  <strong>Data Integration Group.</strong> Financial close from
                  18 days to four. A stalled ERP recovered as a system the
                  company owns. A standardized item master.
                </p>
                <p className="dossier-entry">
                  <strong>Sierra Nevada Brewing.</strong> The most recent
                  deliverable. More than 200 disparate systems brought to 25
                  connected enterprise systems on a company-owned data core. The
                  IS/IT team rebuilt. Agentic systems in production. More than
                  150 people at peak.
                </p>
              </div>
            </div>
          </article>

          <article className="beat" style={{ borderBottom: "none" }}>
            <h3 className="beat-kicker">The keep</h3>
            <div>
              <h2 className="beat-h2">
                The company keeps what I build.
              </h2>
              <p className="p-prose">
                I can architect and build. I develop the internal team and hold
                vendors and systems integrators accountable for cost and
                delivery. The company keeps ownership of its data, knowledge,
                and custom software.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2 mx-auto max-w-[16em]">
            Open to executive roles, fractional leadership, and focused
            engagements.
          </h2>
          <p className="p-prose mx-auto mt-4 max-w-[42ch]">
            If these outcomes match what you need, start a conversation.
          </p>
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
