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
      <section className="p-section">
        <div className="page-well">
          {mock ? <p className="p-kicker">Local mock · not live</p> : null}
          <div className="hero-split">
            <div>
              <p className="p-kicker">Applied Agentics</p>
              <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
                Outcome is the point.
              </h1>
              <p className="p-dek">
                I nest Agentics on the transformation. The harness is how the
                company runs the work - you see the spend, a person authorizes
                the write, and the path stays yours.
              </p>
            </div>
            <div className="mandate-card">
              <p className="font-vollkorn text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#B48A05]">
                In production
              </p>
              <p className="mt-2 text-[14.5px] leading-[1.5]">
                CIO, Sierra Nevada Brewing (~$420M). Named owner. Path they
                kept. Not a chatbot beside the business.
              </p>
            </div>
          </div>

          <figure className="waves-doc">
            <p className="p-kicker">The time is now</p>
            <h2 className="p-h2" style={{ maxWidth: "22ch" }}>
              Every ten-year wave was the same game. This one is not.
            </h2>
            <p className="p-prose">
              Mainframe. Client-server and ERP. Cloud and SaaS. A new
              platform, a long implementation, then keep-running. Fairly
              similar, every time.
            </p>
            <p className="p-prose">
              Agents do not wait for a decade. They land on the stack you
              already have. The game is forever changed.
            </p>
            <svg
              className="w-full"
              viewBox="0 0 900 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Four waves of technology. The first three rhyme. Enterprise-Agentics does not."
            >
              <line x1="30" y1="240" x2="870" y2="240" stroke="#142840" strokeWidth="2" />
              <path d="M 50 240 Q 130 195, 210 240" stroke="rgba(20,40,64,0.30)" strokeWidth="2" />
              <circle cx="130" cy="217" r="4.5" fill="#142840" />
              <text x="130" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">1960s–70s</text>
              <text x="130" y="175" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Mainframe</text>
              <text x="130" y="195" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Central Compute</text>
              <text x="130" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 230 240 Q 330 145, 430 240" stroke="rgba(20,40,64,0.45)" strokeWidth="2.2" />
              <circle cx="330" cy="170" r="4.5" fill="#142840" />
              <text x="330" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">1980s–90s</text>
              <text x="330" y="130" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Client-Server & ERP</text>
              <text x="330" y="150" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Distributed Systems</text>
              <text x="330" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 450 240 Q 560 95, 670 240" stroke="rgba(20,40,64,0.65)" strokeWidth="2.4" />
              <circle cx="560" cy="130" r="4.5" fill="#142840" />
              <text x="560" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">2000s–10s</text>
              <text x="560" y="85" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Cloud & SaaS</text>
              <text x="560" y="105" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Multi-Tenant Platforms</text>
              <text x="560" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 670 240 Q 770 20, 870 240" fill="rgba(250,204,21,0.14)" stroke="#142840" strokeWidth="3" />
              <line x1="770" y1="240" x2="770" y2="130" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="3 3" />
              <circle cx="770" cy="130" r="7" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
              <text x="770" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="15" fontWeight="800" textAnchor="middle">2020s+</text>
              <rect x="668" y="32" width="204" height="26" fill="#142840" rx="3" />
              <text x="770" y="50" fill="#FACC15" fontFamily="Vollkorn" fontSize="13" fontWeight="800" textAnchor="middle">THE BREAK</text>
              <text x="770" y="82" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">Enterprise-Agentics</text>
              <text x="770" y="100" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Not another decade</text>
              <text x="770" y="290" fill="#B48A05" fontFamily="Source Sans 3" fontSize="11.5" fontWeight="700" textAnchor="middle">The game changed</text>
            </svg>
            <figcaption className="waves-caption">
              The first three waves rhyme. The fourth does not.
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
            <p className="p-kicker">The work</p>
            <h2 className="p-h2" style={{ maxWidth: "22ch" }}>
              Intent equals outcome.
            </h2>
            <p className="p-prose">
              A person starts the work. The harness runs it inside the
              systems the company already owns. A named person authorizes
              the write. Watched. Evaluated. Landed. Costed.
            </p>
            <p className="p-prose">
              I can show you a live run. The conversation is not a trial.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/intent-to-outcome.svg?c=14"
              alt="Intent equals outcome. The harness around the model: authentication, memory and data, tools, guardrails, evals, governance, spend. The work lands. Outcome is the value."
            />
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
          <p className="p-kicker">Models</p>
          <h2 className="p-h2" style={{ maxWidth: "20ch" }}>
            I choose models to fit the work.
          </h2>
          <p className="p-prose">
            Small models on company truth where they meet the task. Frontier
            models where the work calls for them. That choice is spend
            control.
          </p>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">I come inside as the owner.</h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[18px] leading-[1.6]">
            If you want proof, I will show you the work. If you want the
            people who already ran it, I can put you on the phone. I own the
            path. A crew lands it.
          </p>
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
