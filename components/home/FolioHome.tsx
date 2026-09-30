import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";

const outcomes = [
  {
    category: "Leadership & Direction",
    title: "Clear priorities. Accountable delivery.",
    text: "One owner carries the priority from the decision through the day the work is done.",
  },
  {
    category: "IT & Business Systems",
    title: "Business systems your team can run.",
    text: "Platforms, vendors, and the service have one owner, and your team can keep them running.",
  },
  {
    category: "Data & Knowledge",
    title: "Trusted records. Clear ownership.",
    text: "The records the business uses have an owner, and the know-how stays with the company.",
  },
  {
    category: "Financial Systems",
    title: "Books that reconcile.",
    text: "The close and the books are brought to where they tie, with a trail of what changed.",
  },
  {
    category: "Workflows & Automation",
    title: "Work that reaches completion.",
    text: "A job moves across people, systems, and data, and it finishes.",
  },
] as const;

const scales = [
  {
    name: "Focused work",
    text: "A defined result, with the outcome and the scope agreed up front.",
  },
  {
    name: "Fractional leadership",
    text: "Responsibility for part of the role, over a longer calendar.",
  },
  {
    name: "Executive roles",
    text: "The full mandate: leadership and accountability for the whole function.",
  },
] as const;

export default function FolioHome() {
  return (
    <PresenceShell>
      <section className="p-section p-section--tight">
        <div className="page-well">
          <div className="hero-split">
            <div className="home-hero-copy">
              <h1 className="p-h1 home-hero-title">
                Turn the potential
                <br />
                of your people
                <br />
                and technology
                <br />
                into business
                <br />
                outcomes.
              </h1>
              <p className="p-dek">
                I lead enterprise technology work and build the capability
                behind it - connecting your systems, data, and people. Engage
                me for a focused outcome, fractional leadership, or the full
                mandate.
              </p>
              <div className="home-hero-actions">
                <Link href="/contact/" className="p-btn">
                  <span className="p-gold-sq" aria-hidden="true" />
                  Start a conversation
                </Link>
                <Link href="/block/" className="p-link">
                  Explore The Block
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

      <section className="p-section home-know">
        <div className="page-well">
          <div className="home-know-head">
            <h2 className="p-h2">
              Put the full knowledge of your business to work.
            </h2>
            <p className="home-psd">
              <span>People</span>
              <span>Systems</span>
              <span>Data</span>
            </p>
          </div>
          <div className="home-beats">
            <p>
              Years of operating knowledge live across your people, your data,
              and your systems. Connect that knowledge to the decisions and
              the work it should support.
            </p>
            <p>
              Applied agentics opens new ways to do it, building on the
              business you already run.
            </p>
            <p>
              The company keeps what is built, and your people can run it.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">What needs to change</p>
          <p className="home-crosscut">
            Governance runs across the work: who may decide, who may change a
            record, who approved it, and the evidence.
          </p>
          <div className="home-cards">
            {outcomes.map((item) => (
              <article key={item.category} className="home-card">
                <p className="home-card-cat">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="home-more">
            <Link href="/block/" className="p-link">
              Explore The Block
            </Link>
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">One result</p>
          <h2 className="p-h2 home-story-title">
            The close went from 18 days to four.
          </h2>
          <div className="home-story">
            <article>
              <h3>Before</h3>
              <p>After a merger, the financial close took 18 days.</p>
            </article>
            <article>
              <h3>The work</h3>
              <p>
                Data Integration Group unified the chart of accounts and
                integrated the warehouse system.
              </p>
            </article>
            <article>
              <h3>Result</h3>
              <p>The close finished in four days.</p>
            </article>
          </div>
          <p className="home-more">
            <Link href="/experience/" className="p-link">
              The fuller record is on Experience
            </Link>
          </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">A result, a share of the role, or the mandate.</h2>
          <p className="home-engage-lead">
            Engage me for an executive role, fractional leadership, or focused
            work with an agreed scope and outcome. For focused work, The Block
            brings together bounded time and capability. The work can include
            software your company owns and operates.
          </p>
          <div className="home-scales">
            {scales.map((scale) => (
              <article key={scale.name}>
                <h3>{scale.name}</h3>
                <p>{scale.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2 mx-auto" style={{ maxWidth: "16em" }}>
            The company keeps it, and keeps running it.
          </h2>
          <p className="p-prose mx-auto mt-4" style={{ maxWidth: "38em" }}>
            The data, the knowledge, the workflows, the software where it
            belongs, and people able to run and improve what was built. That
            is a living business asset.
          </p>
          <div className="home-hero-actions home-close-actions">
            <Link href="/contact/" className="p-btn">
              <span className="p-gold-sq" aria-hidden="true" />
              Start a conversation
            </Link>
            <Link href="/block/" className="p-link">
              Explore The Block
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
