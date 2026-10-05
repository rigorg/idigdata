import Image from "next/image";
import Link from "next/link";
import s from "./AgenticPositionView.module.css";

export default function AgenticPositionView() {
  return <article className={s.page}>
    <header className={s.hero}>
      <div className={s.heroInner}>
        <div>
          <p className={s.eyebrow}>Agentic AI <span>/</span> A working position</p>
          <h1>The next wave works on what you <em>know.</em></h1>
          <p className={s.dek}>I see the opportunity in the enterprise already running. Its people. Its records. Its systems. The knowledge that makes the business work.</p>
          <div className={s.byline}><span className={s.square}/><span>Robert Paddock <small>Enterprise leadership · Applied agentics</small></span></div>
        </div>
        <div className={s.heroArt} aria-hidden="true">
          <div className={s.orbitOne}/><div className={s.orbitTwo}/><div className={s.orbitThree}/>
          <span className={s.artTop}>HUMAN INTENT</span><span className={s.artLeft}>PEOPLE</span><span className={s.artRight}>SYSTEMS</span>
          <div className={s.core}><span>COMPANY</span><strong>Knowledge</strong><span>DATA · EXPERIENCE · JUDGMENT</span></div>
          <span className={s.artBottom}>WORK THE BUSINESS CAN RUN</span>
          <span className={s.pointOne}/><span className={s.pointTwo}/><span className={s.pointThree}/>
        </div>
      </div>
      <div className={s.chapterNav}><a href="#we-are-here">01 / We are here</a><a href="#the-work">02 / From knowledge to work</a><a href="#in-practice">03 / What I have done</a></div>
    </header>

    <section id="we-are-here" className={s.section}>
      <div className={s.sectionHead}><p className={s.eyebrow}>01 / The inflection</p><h2>We are here<span>.</span></h2></div>
      <div className={s.introColumns}><p>I have spent my career connecting people, data, and systems. Each technology wave brought new capability—and years of work to make it useful.</p><p>What interests me now is where I can begin: bringing AI agents into a useful workflow on the systems already in place. The company already holds much of what gives that work its value.</p></div>
      <figure className={s.figure}>
        <div className={s.figureBar}><span>THE FOUR WAVES</span><span className={s.here}><i/> WE ARE HERE</span></div>
        <a href="/diagrams/four-waves.svg" target="_blank" rel="noreferrer" aria-label="Open the four waves diagram at full size in a new tab">
          <Image src="/diagrams/four-waves.svg" alt="Four waves of enterprise technology, with applied agentics shown working across existing enterprise assets." width={1200} height={520} unoptimized className={s.diagram}/>
        </a>
        <figcaption>My working view of the shift. A conceptual picture, not a delivery timetable. <a href="/diagrams/four-waves.svg" target="_blank" rel="noreferrer">Explore the diagram ↗</a></figcaption>
      </figure>
      <p className={s.afterFigure}>The opportunity is here. Making it work still takes clean enough information, explicit permissions, testing, and people prepared to own the result.</p>
    </section>

    <section id="the-work" className={s.dark}>
      <div className={s.darkInner}>
        <p className={s.eyebrow}>02 / The position</p>
        <h2>Company knowledge.<br/>Human authority.<br/><em>Useful work.</em></h2>
        <p className={s.darkDek}>For me, enterprise agentics is the connection between these three things.</p>
        <div className={s.principles}>
          <div><span>01</span><h3>I build on what the company knows.</h3><p>Why an order is held. Which exception needs the controller. What the experienced person sees that the procedure misses. I connect that knowledge to maintained records and the people responsible for them.</p></div>
          <div><span>02</span><h3>The mandate is human.</h3><p>I define what the agent may see and do, which decisions people retain, and who can stop the work. I want to follow a result back through the information, actions, and approvals that produced it.</p></div>
          <div><span>03</span><h3>The result has to hold up.</h3><p>I use rules where the step is clear and agents where interpretation helps. I test exceptions and recovery, watch the cost of reaching a useful result, and equip people to run and improve the workflow.</p></div>
        </div>
        <div className={s.flow} aria-label="Human intent to verified outcome"><span>Human intent</span><b>→</b><span>Permitted work</span><b>→</b><span>Human decisions</span><b>→</b><span>Verified result</span></div>
      </div>
    </section>

    <section id="in-practice" className={s.section}>
      <div className={s.practice}>
        <div><p className={s.eyebrow}>03 / Applied agentics</p><h2>I have taken this<br/>into the enterprise.</h2><p>In a CIO role, I put agentic applications into production on the company-owned data core, with training, controls, and business ownership.</p><p className={s.quiet}>A production example is evidence within its scope. The next workflow still has to earn its place.</p><Link className={s.textLink} href="/experience/#applied-agentics">The experience behind this position ↗</Link></div>
        <div className={s.practiceList}>
          <div><span>01</span><h3>Enterprise transformation management</h3><p>Planning, milestones, cutover dependencies, and delivery evidence through go-live.</p></div>
          <div><span>02</span><h3>Governed software delivery</h3><p>Traceable decisions, testing and delivery evidence, and human authorization.</p></div>
          <div><span>03</span><h3>Workflows across people and systems</h3><p>Company-owned data, defined permissions, and human judgment at consequential steps.</p></div>
        </div>
      </div>
    </section>

    <footer className={s.close}>
      <div><p className={s.eyebrow}>An open position</p><h2>I keep learning<br/>through the work.</h2></div>
      <div><p>I expect my view to develop as I build, test, and operate these systems. What should we delegate? What needs human judgment? How do we know the result helped?</p><p>That is why I keep coming back to <em>We Are Here.</em></p><div className={s.links}><Link href="/experience/">Explore the experience ↗</Link><Link href="/block/">Explore outcomes in The Block ↗</Link></div></div>
    </footer>
  </article>;
}
