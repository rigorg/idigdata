"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import s from "./AgenticPositionView.module.css";

const QUESTIONS = [
  {
    num: "01",
    question: "What does the experienced person know that the workflow does not?",
    body: "Enterprise procedures capture the happy path. The real operating logic lives in the minds of experienced people who handle exceptions, weigh conflicting priorities, and know when standard rules fall short. Agentic systems must connect to that tacit judgment rather than assuming standard procedures tell the whole story.",
    topicKey: "What the experienced person knows",
  },
  {
    num: "02",
    question: "When should an agent act, and when should a person decide?",
    body: "Autonomous action is easy to demonstrate in a sandbox, but consequential in production. Clear governance requires explicit boundary design: agents gather context, synthesize history, and execute permitted steps, while accountable people retain final decisions on money, commitments, and exceptions.",
    topicKey: "When an agent acts vs. person decides",
  },
  {
    num: "03",
    question: "What makes a useful demonstration become dependable enterprise work?",
    body: "A prototype shows what is possible under ideal conditions. Production requires verified enterprise data access, strict authorization, observable telemetry, graceful failure modes, and operational ownership by the business. Without those, a demonstration never becomes dependable work.",
    topicKey: "From prototype to dependable enterprise work",
  },
];

/** URL-safe slug for a topic label, e.g. "When an agent acts vs. person decides" -> "when-an-agent-acts-vs-person-decides". */
function topicSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AgenticPositionView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General thoughts on agentic workflows");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "recorded" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function handleSelectQuestion(qTopic: string) {
    setTopic(qTopic);
    // Carry the chosen topic in the URL fragment so the referer the note form
    // sends names the page context. replaceState avoids a second jump; the
    // existing smooth scroll below is the only movement.
    try {
      window.history.replaceState(null, "", `#topic-${topicSlug(qTopic)}`);
    } catch {
      // Fragment is a convenience only; the note still carries its topic line.
    }
    const el = document.getElementById("conversation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function validate() {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Please enter a valid email.";
    if (!message.trim()) next.message = "Please write your thought or question.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    const formattedMessage = [
      `[READER NOTE: AGENTIC AI WEBLOG]`,
      `Topic: ${topic}`,
      ``,
      message.trim(),
    ].join("\n");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role: "",
          company: "",
          message: formattedMessage,
          interestType: "applied_agentics",
          source: "website-reader",
          _hp: hp,
        }),
      });

      const data = await res.json();
      if ((res.ok || res.status === 202) && data.ok) {
        setStatus(data.notification === "sent" ? "success" : "recorded");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <article className={s.page}>
      <header className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <p className={s.eyebrow}>
              Agentic AI <span>/</span> A personal weblog
            </p>
            <h1>The next wave works on what you <em>know.</em></h1>
            <p className={s.dek}>
              I love this moment in technology. My work has always been about connecting people, systems, and data. Now, agentic workflows are opening new possibilities at that intersection. This is where I build, question, and write.
            </p>
            <div className={s.byline}>
              <span className={s.square} />
              <span>
                Robert Paddock <small>Enterprise leadership · Applied agentics</small>
              </span>
            </div>
          </div>
          <div className={s.heroArt} aria-hidden="true">
            <div className={s.orbitOne} />
            <div className={s.orbitTwo} />
            <div className={s.orbitThree} />
            <span className={s.artTop}>HUMAN INTENT</span>
            <span className={s.artLeft}>PEOPLE</span>
            <span className={s.artRight}>SYSTEMS</span>
            <div className={s.core}>
              <span>COMPANY</span>
              <strong>Knowledge</strong>
              <span>DATA · EXPERIENCE · JUDGMENT</span>
            </div>
            <span className={s.artBottom}>WORK THE BUSINESS CAN RUN</span>
            <span className={s.pointOne} />
            <span className={s.pointTwo} />
            <span className={s.pointThree} />
          </div>
        </div>
        <nav aria-label="Article navigation" className={s.chapterNav}>
          <a href="#from-the-notebook">01 / From the notebook</a>
          <a href="#we-are-here">02 / We are here</a>
          <a href="#the-position">03 / The position</a>
          <a href="#in-practice">04 / What I have done</a>
          <a href="#conversation">05 / Continue the conversation</a>
        </nav>
      </header>

      {/* Section 01: From the notebook */}
      <section id="from-the-notebook" className={s.notebook}>
        <div className={s.notebookHead}>
          <p className={s.eyebrow}>01 / From the notebook</p>
          <h2>Observations &amp; questions<span>.</span></h2>
        </div>
        <p className={s.notebookDek}>
          Observations and questions from the intersection of enterprise work and agentic AI.
        </p>

        {/* Anchor Entry linking to Position */}
        <div className={s.anchorCard}>
          <div>
            <p className={s.anchorTag}>Anchor Essay · Working Position</p>
            <h3 className={s.anchorTitle}>
              Company knowledge. Human authority. <em>Useful work.</em>
            </h3>
            <p className={s.anchorText}>
              Why durable applied agentics begins with maintained enterprise records, explicit human authority, and verifiable results that the business can run.
            </p>
          </div>
          <div>
            <a href="#the-position" className={s.anchorAction}>
              Read working position ↓
            </a>
          </div>
        </div>

        {/* Questions Grid */}
        <div className={s.questionGrid}>
          {QUESTIONS.map((q) => (
            <div key={q.num} className={s.questionCard}>
              <div>
                <span className={s.questionNum}>{q.num} / QUESTION</span>
                <h3 className={s.questionTitle}>&ldquo;{q.question}&rdquo;</h3>
                <p className={s.questionBody}>{q.body}</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectQuestion(q.topicKey)}
                  className={s.questionPrompt}
                >
                  Share your perspective on this ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02: We Are Here */}
      <section id="we-are-here" className={s.section}>
        <div className={s.sectionHead}>
          <p className={s.eyebrow}>02 / The inflection</p>
          <h2>We are here<span>.</span></h2>
        </div>
        <div className={s.introColumns}>
          <p>
            I have spent my career connecting people, data, and systems. Each technology wave brought new capability—and years of work to make it useful.
          </p>
          <p>
            What interests me now is where I can begin: bringing AI agents into a useful workflow on the systems already in place. The company already holds much of what gives that work its value.
          </p>
        </div>
        <figure className={s.figure}>
          <div className={s.figureBar}>
            <span>THE FOUR WAVES</span>
            <span className={s.here}><i /> WE ARE HERE</span>
          </div>
          <a
            href="/diagrams/four-waves.svg"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the four waves diagram at full size in a new tab"
          >
            <Image
              src="/diagrams/four-waves.svg"
              alt="Four waves of enterprise technology, with applied agentics shown working across existing enterprise assets."
              width={1200}
              height={520}
              unoptimized
              className={s.diagram}
            />
          </a>
          <figcaption>
            My working view of the shift. A conceptual picture, not a delivery timetable.{" "}
            <a href="/diagrams/four-waves.svg" target="_blank" rel="noreferrer">
              Explore the diagram ↗
            </a>
          </figcaption>
        </figure>
        <p className={s.afterFigure}>
          The opportunity is here. Making it work still takes clean enough information, explicit permissions, testing, and people prepared to own the result.
        </p>
      </section>

      {/* Section 03: The Position */}
      <section id="the-position" className={s.dark}>
        <div className={s.darkInner}>
          <p className={s.eyebrow}>03 / The position</p>
          <h2>Company knowledge.<br />Human authority.<br /><em>Useful work.</em></h2>
          <p className={s.darkDek}>
            For me, enterprise agentics is the connection between these three things.
          </p>
          <div className={s.principles}>
            <div>
              <span>01</span>
              <h3>I build on what the company knows.</h3>
              <p>
                Why an order is held. Which exception needs the controller. What the experienced person sees that the procedure misses. I connect that knowledge to maintained records and the people responsible for them.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>The mandate is human.</h3>
              <p>
                I define what the agent may see and do, which decisions people retain, and who can stop the work. I want to follow a result back through the information, actions, and approvals that produced it.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>The result has to hold up.</h3>
              <p>
                I use rules where the step is clear and agents where interpretation helps. I test exceptions and recovery, watch the cost of reaching a useful result, and equip people to run and improve the workflow.
              </p>
            </div>
          </div>
          <div className={s.flow} aria-label="Human intent to verified outcome">
            <span>Human intent</span>
            <b>→</b>
            <span>Permitted work</span>
            <b>→</b>
            <span>Human decisions</span>
            <b>→</b>
            <span>Verified result</span>
          </div>
        </div>
      </section>

      {/* Section 04: What I Have Done / In Practice */}
      <section id="in-practice" className={s.section}>
        <div className={s.practice}>
          <div>
            <p className={s.eyebrow}>04 / Applied agentics</p>
            <h2>I have taken this<br />into the enterprise.</h2>
            <p>
              In a CIO role, I put agentic applications into production on the company-owned data core, with training, controls, and business ownership.
            </p>
            <p className={s.quiet}>
              A production example is evidence within its scope. The next workflow still has to earn its place.
            </p>
            <Link className={s.textLink} href="/experience/#applied-agentics">
              The experience behind this position ↗
            </Link>
          </div>
          <div className={s.practiceList}>
            <div>
              <span>01</span>
              <h3>Enterprise transformation management</h3>
              <p>Planning, milestones, cutover dependencies, and delivery evidence through go-live.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Governed software delivery</h3>
              <p>Traceable decisions, testing and delivery evidence, and human authorization.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Workflows across people and systems</h3>
              <p>Company-owned data, defined permissions, and human judgment at consequential steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Continue the Conversation */}
      <section id="conversation" className={s.conversationSection}>
        <div className={s.conversationInner}>
          <div className={s.conversationHead}>
            <p className={s.eyebrow}>05 / Direct correspondence</p>
            <h2>Continue the conversation<span>.</span></h2>
            <p className={s.conversationDek}>
              Have a thought, a question, or a different perspective? Send me a note. It comes directly to me, and I will reply personally.
            </p>
            <span className={s.privacyBadge}>Private reader correspondence · No public comments · Straight to Rob</span>
          </div>

          <div className={s.formCard}>
            {status === "success" || status === "recorded" ? (
              <div className={s.successAlert}>
                <h3 className={s.successTitle}>
                  {status === "success" ? "Thank you for your note." : "Your note has been recorded."}
                </h3>
                <p className={s.successText}>
                  {status === "success"
                    ? "Your message has been sent directly to Rob. He reads every reader note personally and will reply to your email."
                    : "Your note was safely recorded. Direct email notification is unconfirmed on this environment — write robert@idigdata.com directly if you need a same-day response."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                  className={s.resetButton}
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <div role="alert" className={s.errorAlert}>
                    Something went wrong sending your note. Please try again, or write directly to{" "}
                    <a href="mailto:robert@idigdata.com" style={{ color: "inherit", fontWeight: 700 }}>
                      robert@idigdata.com
                    </a>.
                  </div>
                )}

                {/* Honeypot for bot defense */}
                <div aria-hidden="true" className={s.honeypot}>
                  <label htmlFor="agentic-reader-hp">Leave this empty</label>
                  <input
                    id="agentic-reader-hp"
                    name="_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                </div>

                <div className={s.formRow}>
                  <div>
                    <label htmlFor="reader-name" className={s.label}>
                      Your Name
                    </label>
                    <input
                      id="reader-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={s.input}
                      disabled={status === "submitting"}
                      aria-invalid={errors.name ? true : undefined}
                    />
                    {errors.name && <p className={s.fieldError}>{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="reader-email" className={s.label}>
                      Your Email
                    </label>
                    <input
                      id="reader-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className={s.input}
                      disabled={status === "submitting"}
                      aria-invalid={errors.email ? true : undefined}
                    />
                    {errors.email && <p className={s.fieldError}>{errors.email}</p>}
                  </div>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-topic" className={s.label}>
                    Topic or Question
                  </label>
                  <select
                    id="reader-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={s.select}
                    disabled={status === "submitting"}
                  >
                    <option value="General thoughts on agentic workflows">
                      General thoughts on agentic workflows
                    </option>
                    <option value="What the experienced person knows">
                      Question 01: What the experienced person knows
                    </option>
                    <option value="When an agent acts vs. person decides">
                      Question 02: When an agent acts vs. person decides
                    </option>
                    <option value="From prototype to dependable enterprise work">
                      Question 03: From prototype to dependable enterprise work
                    </option>
                    <option value="Working position feedback">
                      Working position: Company knowledge &amp; authority
                    </option>
                  </select>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="reader-message" className={s.label}>
                    Your Thought, Question, or Perspective
                  </label>
                  <textarea
                    id="reader-message"
                    required
                    rows={5}
                    placeholder="Share what you are seeing in your work, a challenge you are navigating, or a question on where enterprise agentics is heading..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    className={s.textarea}
                    disabled={status === "submitting"}
                    aria-invalid={errors.message ? true : undefined}
                  />
                  {errors.message && <p className={s.fieldError}>{errors.message}</p>}
                </div>

                <div className={s.submitRow}>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={s.submitButton}
                  >
                    <span className={s.submitSquare} aria-hidden="true" />
                    {status === "submitting" ? "Sending note…" : "Send note to Rob"}
                  </button>
                  <span className={s.privacyFooter}>
                    Direct correspondence · No public comments · Respects your privacy
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Close */}
      <footer className={s.close}>
        <div>
          <p className={s.eyebrow}>An open position</p>
          <h2>I keep learning<br />through the work.</h2>
        </div>
        <div>
          <p>
            I expect my view to develop as I build, test, and operate these systems. What should we delegate? What needs human judgment? How do we know the result helped?
          </p>
          <p>
            That is why I keep coming back to <em>We Are Here.</em>
          </p>
          <div className={s.links}>
            <Link href="/experience/">Explore the experience ↗</Link>
            <Link href="/block/">Explore outcomes in The Block ↗</Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
