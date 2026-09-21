import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";

export default function FolioHome() {
  return (
    <PresenceShell>
      <section className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">Robert Paddock · Customer-side</p>
              <h1 className="p-h1">
                Digital transformation fails when nobody owns the whole.
              </h1>
              <p className="p-dek">
                Your ERP already failed the business. Everyone is bolting
                agents onto that data anyway. I don't. I take people, data,
                and systems - and drive it home.
              </p>
              <p className="p-prose mt-4">
                I come inside $100M-$1B operators. I name the real mandate. I
                hold command. A crew lands it - small or 20 to 40. You keep
                what we build.
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
            <h3 className="beat-kicker">The application layer</h3>
            <div>
              <h2 className="beat-h2">
                Enterprises keep buying technology and stacking it on what
                already runs. The failures show up between people, vendors, SI
                teams, and siloed data.
              </h2>
              <p className="p-prose">
                Everyone owns their piece. Vendors own the product map. SIs own
                the delivery map for their mandate. The company rarely owns the
                operating map above them. I have spent 30 years doing that job:
                keeping the operation up while the stack moves.
              </p>
            </div>
          </article>

          <article className="beat">
            <h3 className="beat-kicker">The arrival of agentics</h3>
            <div>
              <h2 className="beat-h2">
                Enterprise-Agentics has already landed on that same old mess.
                People are putting agents to work inside the business, often
                without guardrails or a company-owned operating model.
              </h2>
              <p className="p-prose">
                The company must know what is running, control what it can
                reach and do, keep an accountable person in command, and prove
                what happened. Governance and risk are operating questions now.
                Few companies have a path they can own. Agentics rides the
                application layer. It is not a second door.
              </p>
            </div>
          </article>

          <article className="beat-gold">
            <div
              className="beat"
              style={{ borderBottom: "none", paddingBottom: 0 }}
            >
              <h3 className="beat-kicker">Both layers</h3>
              <div>
                <h2 className="beat-h2">
                  What you get is both layers under one owner.
                </h2>
                <p className="p-prose">
                  The application layer keeps the business running while the
                  stack moves. Enterprise-Agentics is the new layer: owned, not
                  rented. The result is a living asset the company keeps. The
                  work remains one job across people, data, and workflows.
                </p>
                <p className="p-prose">
                  I take Operating Income (OI) seriously. Technology should
                  protect and enable OI while the business keeps running.
                </p>
              </div>
            </div>
          </article>

          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">The Value of Information</span>
              <span className="plaque-cite">Grace Hopper · 1982</span>
            </div>
            <h2 className="plaque-h2">The IP of every company is its data.</h2>
            <p className="plaque-dek">
              Tools, platforms, and AI models change with every wave. I put the
              power, ownership, and judgment back into the company.
            </p>
            <div className="axioms-stack">
              <div className="axiom-item">
                <span className="axiom-label">People</span>
                <span className="axiom-text">
                  Human command on the last move. Floor to board accountability.
                </span>
              </div>
              <div className="axiom-item">
                <span className="axiom-label">Systems</span>
                <span className="axiom-text">
                  ERPs, SaaS, and agentic workflows are rented tools to execute
                  the work.
                </span>
              </div>
              <div className="axiom-item">
                <span className="axiom-label">Data</span>
                <span className="axiom-text">
                  <strong>The compounding sovereign asset.</strong> What the
                  company owns and keeps.
                </span>
              </div>
              <div className="axiom-item axiom-item--income">
                <span className="axiom-label">Income</span>
                <span className="axiom-text">
                  A capital asset the company keeps. Not another expense line.
                </span>
              </div>
            </div>
            <div className="plaque-footer">
              <span className="plaque-footer-left">
                POWER STAYS WITH THE COMPANY
              </span>
              <span className="plaque-footer-right">
                30 Years Inside · idigdata
              </span>
            </div>
          </div>

          <article className="beat" style={{ borderBottom: "none" }}>
            <h3 className="beat-kicker">An owner</h3>
            <div>
              <h2 className="beat-h2">I take command. I drive it home.</h2>
              <p className="p-prose">
                I have done both layers, and I come inside to own delivery. The
                application layer is earned ground: more than 50 implementations
                and 15 full transformations taken through production. The
                agentic layer is live work right now: Enterprise-Agentics in
                production, with guardrails and an operating path the company
                owns. This is not shadow work on a laptop. I hold command. A
                crew lands it.
              </p>
              <div className="lattice-object">
                <HaloFilm
                  src="/media/agentics-loop.mp4?c=5"
                  poster="/media/agentics-poster.png?c=5"
                  label="The running estate. Gold on the seams."
                  size={220}
                  round={false}
                />
                <div>
                  <h3 className="font-vollkorn text-[24px] font-extrabold text-navy">
                    The joints never had an owner.
                  </h3>
                  <p className="mt-2.5 text-[16.5px] leading-[1.6] text-[#243345]">
                    Every square already has a vendor. The seams are where it
                    fails. I sit there while the operation stays up.
                  </p>
                </div>
              </div>
              <div className="dossier">
                <p className="dossier-entry">
                  <strong>Most recent: CIO, Sierra Nevada Brewing (~$420M).</strong>{" "}
                  Full member of the executive leadership team. Led a $15M
                  enterprise transformation built on a company-owned data core,
                  rebuilt the IS function, and put agentic AI into production.
                </p>
                <p className="dossier-entry">
                  <strong>Earlier: CEO/CTO, Timberline.</strong> Scaled $250K to
                  $130M across US and China. Operating systems that had to hold
                  in the field.
                </p>
                <p className="dossier-entry">
                  Dock to the boardroom. The shape follows the mandate.
                </p>
                <p className="dossier-spine">
                  30 years · 50+ implementations · 15 full transformations at
                  scale · $100M-$1B operators · agentic AI in production.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2 mx-auto max-w-[22ch]">
            If your company needs a real transformation owned from inside the
            business, let&apos;s talk.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[18px] leading-[1.65]">
            Bring the real situation: the legacy stack, the stalled
            modernization, the keep-running constraint. I will walk you through
            how I would own it, and how a crew would land it.
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
