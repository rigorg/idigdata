import Link from "next/link";
import TwoPlanes from "./TwoPlanes";

const beats = [
  {
    kicker: "The application layer",
    h2: "Enterprises keep buying technology and stacking it on what already runs. The failures show up between people, vendors, SI teams, and siloed data.",
    body: "Everyone owns their piece. Vendors own the product map. SIs own the delivery map for their mandate. The company rarely owns the operating map above them. I have spent 30 years doing exactly that: keeping the business running while the stack moves.",
    gold: false,
  },
  {
    kicker: "The arrival of agentics",
    h2: "Enterprise-Agentics has already landed on that same old mess. People are putting agents to work inside the business, often without guardrails or a company-owned operating model.",
    body: "The company must know what is running, control what it can reach and do, keep an accountable person in command, and prove what happened. Governance and risk are operating questions now. Few companies have a path they can own.",
    gold: false,
  },
  {
    kicker: "Both layers",
    h2: "What you get is both layers under one owner. The application layer keeps the business running while the stack moves. Enterprise-Agentics is the new layer: owned, not rented. The result is a living asset the company keeps. The work remains one job across people, data, and workflows.",
    body: "A capital asset the CFO can defend, not another expense line. Keep-running lives on the application layer. The agentic layer is how the new arrival actually runs. You don't rent another tool.",
    gold: false,
  },
  {
    kicker: "An owner",
    h2: "Your transformation gets an owner. I have done both layers, and I come inside to own delivery under the right mandate. The application layer is earned ground: more than 50 implementations and 15 full transformations taken through production. The agentic layer is live work right now: Enterprise-Agentics in production, with guardrails and an operating path the company owns. This is not shadow work on a laptop. The insurance is earned judgment on the first layer and live practice on the second.",
    body: "CIO, Sierra Nevada Brewing (~$420M). $15M transformation on a company-owned data core, agentic AI in production. Earlier, CEO/CTO at Timberline. $250K to $130M. Systems that had to hold in the field.",
    gold: true,
  },
] as const;

export default function WhyMePitch() {
  return (
    <section className="border-t border-navy/10 bg-cream">
      <div className="page-well py-16 md:py-20">
        <TwoPlanes />

        <div className="mt-14 flex flex-col gap-16 md:mt-16 md:gap-20">
          {beats.map((beat) => (
            <article
              key={beat.kicker}
              className={
                beat.gold ? "border-l-[3px] border-gold pl-5 md:pl-6" : undefined
              }
            >
              <p className="font-body text-[14.5px] text-stone">{beat.kicker}</p>
              <h2 className="mt-2 font-vollkorn text-[clamp(22px,2.6vw,30px)] font-bold leading-[1.25] text-navy">
                {beat.h2}
              </h2>
              <p className="mt-4 text-[17px] leading-[1.55] text-ink">
                {beat.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-navy/10 pt-10">
          <h2 className="font-vollkorn text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-navy">
            If the work needs an owner, start there.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-ink">
            No deck. No proposal theater. Bring the real situation: the legacy
            stack, the stalled modernization, the keep-running constraint. I'll
            walk you through how I would own it, and how a crew would land it.
            The ownership standard does not change.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="cta-gold">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
