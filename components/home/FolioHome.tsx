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
              <h1 className="p-h1">Substantial technology mandates.</h1>
              <p className="p-dek">
                The business keeps running while the work moves.
              </p>
              <p className="p-prose mt-4">
                I build and develop teams around enterprise systems and applied
                AI, and turn that into capabilities the company can own,
                operate, and improve.
              </p>
              <p className="dossier-spine mt-4">
                <span className="block">30 years · 50+ implementations · 15 transformations at scale</span>
                <span className="block mt-1">Four years applying agentics · $100M-$1B enterprise operators</span>
              </p>
              <p className="p-prose mt-4">
                Have a substantial technology mandate? Let&apos;s talk.
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
                All businesses are uniquely standard.
              </h2>
              <p className="p-prose">
                Sell, buy, plan, make, move, and account are familiar. Each
                company&apos;s people, constraints, and exceptions shape the
                approach. ERP, CRM, planning, warehouse, manufacturing, finance,
                and compliance already hold capability the business is not
                using. I connect the systems and the data, redesign the
                workflows, and apply agents where they support operating income.
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
                  18 days to four. A stalled $8M ERP recovered with $2M saved. A
                  standardized item master.
                </p>
                <p className="dossier-entry">
                  <strong>Sierra Nevada Brewing.</strong> A $15M transformation.
                  More than 200 disparate systems brought to 25 connected
                  enterprise systems on a company-owned data core. The IS/IT
                  team rebuilt. Agentic systems in production. More than 150
                  people at peak.
                </p>
              </div>
            </div>
          </article>

          <article className="beat" style={{ borderBottom: "none" }}>
            <h3 className="beat-kicker">The keep</h3>
            <div>
              <h2 className="beat-h2">
                The company keeps what we build.
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
          <h2 className="p-h2 mx-auto max-w-[22ch]">
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
