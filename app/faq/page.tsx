import type { Metadata } from "next";
import Link from "next/link";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import PresenceShell from "@/components/presence/PresenceShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "FAQ | idigdata" },
  description:
    "Fit, non-fit, mandates, exit criteria, and sovereign capability - Robert Paddock / idigdata.",
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Who is the fit?",
    a: "Mid-market and enterprise operators ($50M to $1B+) across manufacturing, industrial distribution, food & beverage, gaming & hospitality, AEC, and infrastructure. Businesses with complex physical operations, regulated inventories, and multi-system friction where leadership wants to own their operational architecture.",
  },
  {
    q: "What is a non-fit?",
    a: "Inpatient clinical healthcare (hospital staffing, shift scheduling, urgent care billing), commodity IT helpdesk, or software reseller implementations. Engagements without direct executive sponsorship, or where an organization is seeking staff augmentation rather than accountable operational transformation.",
  },
  {
    q: "What mandates do you take?",
    a: "The full mandate or a defined phase: Interim or Contract CIO, Chief Transformation Officer, or Lead Enterprise Systems Architect. Work can also be structured through The Block—focused, two-to-four-week productized capability blocks across six enterprise disciplines. I work above software vendors and systems integrators, reporting directly to the CEO, CFO, or Board.",
  },
  {
    q: "What does the company own when you leave?",
    a: "The permanent asset. A company-owned data core, documented workflows, unified master data, and an internal team that can run and evolve the systems without continuous consulting dependency. Handover criteria and operational verification are established before cutover, not negotiated afterward.",
  },
  {
    q: "How does applied agentics and AI connect to this?",
    a: "As deterministic operational capacity, not speculative chatbots. Through The Collective, we test multi-agent runtimes with strict validation gates and human authorization checkpoints that connect to existing ledgers while keeping company data and IP private on company iron.",
  },
] as const;

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
    {
      "@type": "Question",
      name: "How do I start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write robert@idigdata.com or use the general contact form. Come with the real operating problem: shape, stakes, constraints.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <PresenceShell>
      <JsonLdScript data={faqPageJsonLd} />
      <header className="p-section">
        <div className="page-well">
          <p className="p-kicker">FAQ</p>
          <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
            Fit, non-fit, what you hire, and what you keep.
          </h1>
          <p className="p-dek">
            The short answers. The long ones start with the operating problem.
          </p>
        </div>
      </header>

      <section className="p-section" style={{ borderBottom: 0, paddingTop: 0 }}>
        <div className="page-well">
          <dl>
            {FAQ.map(({ q, a }, i) => (
              <div key={q} className="faq-item">
                <div className="faq-idx">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <dt className="faq-q">{q}</dt>
                  <dd className="faq-a">{a}</dd>
                </div>
              </div>
            ))}
            <div className="faq-item">
              <div className="faq-idx">06</div>
              <div>
                <dt className="faq-q">How do I start?</dt>
                <dd className="faq-a">
                  Write{" "}
                  <a
                    href="mailto:robert@idigdata.com"
                    className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                  >
                    robert@idigdata.com
                  </a>{" "}
                  or use the general{" "}
                  <Link
                    href="/contact/"
                    className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                  >
                    contact form
                  </Link>
                  . Come with the real operating problem: shape, stakes,
                  constraints.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">
            Outcomes the company can own.
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
