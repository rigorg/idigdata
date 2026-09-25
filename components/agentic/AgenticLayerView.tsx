import Link from "next/link";

const issues = [
  [
    "01",
    "What's already running?",
    "Including unofficial shadow AI and fragmented tools. Guardrails start with a name for what is already in the work.",
  ],
  [
    "02",
    "What can it see and do?",
    "Not a policy PDF. What the agent can reach across ERP, WMS, and CRM, and what it cannot.",
  ],
  [
    "03",
    "Who is accountable?",
    "A named person authorizes the work that matters. Intent is the human. The agent does not write in the dark.",
  ],
  [
    "04",
    "Can you prove what happened, and what it cost?",
    "A record of the source, the action, the approval, the result, and the spend. Evals ask if it was good. Evidence is the trail. The bill is on that trail.",
  ],
] as const;

export default function AgenticLayerView({ mock = false }: { mock?: boolean }) {
  return (
    <>
      <header className="p-section p-section--hire">
        <div className="page-well">
          {mock ? <p className="p-kicker">Local mock · not live</p> : null}
          <div className="hero-split">
            <div>
              <p className="p-kicker">Applied Agentics</p>
              <h1 className="p-h1" style={{ maxWidth: "22ch" }}>
                Applied agentics, in production,<br className="hidden sm:inline" /> on company-owned data.
              </h1>
              <p className="p-dek">
                Security, compliance, authentication, observability, and
                governance are built in from the start, for people and for
                agents. A named person stays accountable.
              </p>
            </div>
            <div className="home-watermark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="p-section">
        <div className="page-well">
          <figure className="waves-doc">
            <div className="plate-main-text">
                <p className="p-kicker">The time is now</p>
                <h2 className="p-h2">
                  Every ten-year wave was the same game. This one is not.
                </h2>
                <p className="p-prose">
                  Mainframe. Client-server and ERP. Cloud and SaaS. A new platform, a
                  decade-long implementation, and years of change fatigue. Fairly
                  similar, every time.
                </p>
                <p className="p-prose">
                  Applied agentics does not wait for a decade. It lands directly on
                  the stack and data you already own. The game changed.
                </p>
              </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#142840]/15 bg-[#FBF9F4] p-3 shadow-sm md:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/four-waves.svg?c=4"
                alt="The Four Waves of Enterprise Technology. Three decade-long replacement cycles followed by the immediate architectural break of Applied Agentics."
                className="w-full h-auto"
              />
            </div>
            <figcaption className="waves-caption">
              The first three waves rhyme as platform replacements. The fourth wave lands on the systems you already own.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">
            Start with the work, not the headcount, not the model.
          </p>
          <h2 className="p-h2">I start where the work gets stuck.</h2>
            <p className="p-prose">
              Agents arrive in a business with old handoffs, conflicting
              records, and knowledge held by a few people. I find where work
              waits, where people repeat it, and where a wrong action would
              matter. This layer rides the application estate. It is not a
              second door.
            </p>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Guardrails and gates</p>
          <h2 className="p-h2">These are what you have to be able to see.</h2>
          <p className="p-prose">
            I establish what is already running, what each agent can see, and
            what it can do. Guardrails bound access and action. Gates decide
            whether work can advance. I name the owner, the evidence, and
            the spend each decision needs.
          </p>
          <div className="mt-8">
            {issues.map(([idx, name, job]) => (
              <div key={idx} className="issue-row">
                <span className="issue-idx">{idx}</span>
                <div>
                  <p className="font-vollkorn text-[18px] font-bold text-navy">
                    {name}
                  </p>
                  <p className="mt-1 text-[16px] leading-[1.65]">{job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">The bill</span>
              <span className="plaque-cite">The CFO chair</span>
            </div>
            <h3 className="plaque-h2">Cost is per outcome, not per call.</h3>
            <p className="plaque-dek">
              Cloud taught you the invoice arrives after the lift. Agents
              meter every retry, every fat window, every eval. A cheap loop
              that never lands is waste. A frontier call that closes the
              write can be cheap. I watch the spend. A loop does not get to
              run the bill.
            </p>
            <div className="pillar-grid">
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  01
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  See it
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  Usage sits on the same trail as the action. If you cannot
                  see the spend, you do not own the outcome.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  02
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  Cap it
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  The right model for the step. Company memory instead of
                  reloading the house into the window every turn.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  03
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  Stop it
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  A kill the company owns. Quotas. A named person who can
                  halt the work. Spend control lives in the harness.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">The harness</span>
              <span className="plaque-cite">Industry word · human meaning</span>
            </div>
            <h3 className="plaque-h2">The agent is not the harness.</h3>
            <p className="plaque-dek">
              People hear agent and picture a model that talks. That is the
              runner. The harness is the shop around it: who is allowed, what
              it can see, what it can touch, when it stops, what it costs, and
              what you can prove. A copilot beside a broken estate is not a
              harness.
            </p>
            <div className="pillar-grid">
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  01
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  The runner
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  An agent takes a step. It is not the shop. If you only
                  bought the model, you do not have a harness.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  02
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  The shop
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  Identity, tools, memory, gates, spend, and a stop. Work
                  runs inside the systems you already own, not in a chat
                  beside them.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  03
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  What you keep
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  The model can change. The harness stays. That is why spend
                  is per outcome, and why the path is a company asset.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <figure className="intent-plate">
            <div className="plate-main-text">
                <p className="p-kicker">The core equation</p>
                <h2 className="p-h2">
                  Intent equals outcome.
                </h2>
                <p className="p-prose">
                  A leader sets the mandate in plain language. The governed estate
                  runs it directly on the company-owned data core, bounded by authentication,
                  fenced by guardrails, and executed across live enterprise applications.
                  A named person authorizes every write at the gate.
                </p>
                <p className="p-prose">
                  Value lands in the systems you already run. Evidence verifies the result,
                  and the continuous learning loop updates the company&apos;s living capability.
                </p>
              </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#142840]/15 bg-[#FBF9F4] p-3 shadow-sm md:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/intent-to-outcome.svg?c=23"
                alt="Intent equals outcome. Human command enters the harness aperture, executes across the hexagonal capability lattice around the central company-owned data core, halts at human authorization gates, and lands durable business capability in enterprise systems, reinforced by continuous learning."
                className="w-full h-auto"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">Company memory</span>
              <span className="plaque-cite">Owned, not rented</span>
            </div>
            <h3 className="plaque-h2">I build on what the company knows.</h3>
            <p className="plaque-dek">
              Public models rent you the same answers everyone else can buy.
              A rented window is also a rented invoice. I bring agents into
              enterprise architecture, on the same map as ERP, WMS, and MES,
              against the records and judgment this company already owns.
            </p>
            <div className="pillar-grid">
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  01
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  How people decide
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  How your best people handle a variance, protect a margin,
                  and decide what ships. Written so the company can run it.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  02
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  Memory and data
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  Agents work against live master data and transaction
                  records the company already owns. Sources and permissions
                  stay explicit.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  03
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  The path you keep
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  The harness, memory, rules, and evidence remain under
                  company control. A model or service can change without
                  taking that path with it.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

            <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Systems in production</p>
          <h2 className="p-h2" style={{ maxWidth: "22ch" }}>
            The three types of agentic systems.
          </h2>
          <p className="p-prose">
            Through Data Integration Group, applied agentics is delivered across
            three proven production patterns:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[#142840]/15 bg-[#FBF9F4] p-6">
              <span className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                Pattern 01
              </span>
              <h3 className="mt-2 font-vollkorn text-[19px] font-bold text-navy">
                Enterprise transformation management
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                From planning through go-live. Tracking milestones, cutover dependencies,
                and delivery evidence.
              </p>
            </article>

            <article className="rounded-lg border border-[#142840]/15 bg-[#FBF9F4] p-6">
              <span className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                Pattern 02
              </span>
              <h3 className="mt-2 font-vollkorn text-[19px] font-bold text-navy">
                Governed software delivery
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                Traceable decisions, delivery evidence, verified audit trails, and
                human authorization gates.
              </p>
            </article>

            <article className="rounded-lg border border-[#142840]/15 bg-[#FBF9F4] p-6">
              <span className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                Pattern 03
              </span>
              <h3 className="mt-2 font-vollkorn text-[19px] font-bold text-navy">
                Workflows executed by people and agents
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#334155]">
                Using company-owned data. Human judgment at critical gates; work that
                lands inside enterprise systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <div className="beat-gold">
            <p className="p-kicker">Receipts</p>
            <h2 className="p-h2">Production evidence on company data.</h2>
            <div className="dossier mt-6">
              <p className="dossier-entry">
                <strong>Data Integration Group - Four years applying agentics.</strong>{" "}
                Operating agentic systems on company-owned data cores, with traceable
                audit trails, delivery evidence, and human authorization gates.
                Live runs demonstrated on company data.
              </p>
              <p className="dossier-entry">
                <strong>Sierra Nevada Brewing, CIO (~$420M).</strong> Agentic systems
                in production on the company-owned data core, with accountable
                business owners. The capability and the operating knowledge
                transferred to the internal team.
              </p>
            </div>

            <div className="mt-8 border-t border-[#142840]/10 pt-6">
              <p className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                What the company keeps
              </p>
              <p className="p-prose mt-2">
                People who can run it and extend it. Workflows and data the
                company owns. Agents inside boundaries a person can halt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Models</p>
          <h2 className="p-h2" style={{ maxWidth: "20ch" }}>
            I choose models to fit the work.
          </h2>
          <p className="p-prose">
            Small models on company truth where they meet the task. Frontier
            models where the work calls for them. That choice is spend control.
            Models are instruments; the harness and the outcome belong to you.
          </p>
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
    </>
  );
}
