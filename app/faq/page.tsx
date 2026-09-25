import type { Metadata } from "next";
import Link from "next/link";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import PresenceShell from "@/components/presence/PresenceShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "FAQ | idigdata" },
  description:
    "Fit, non-fit, what you hire, and what the company keeps - Robert Paddock / idigdata.",
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Who is the fit?",
    a: "$100M-$1B operators. CPG and AEC first, plus manufacturing, distribution, logistics, construction, and other operations-heavy work where people, data, systems, and workflows have to move as one. I embed on the customer side and own the path above the vendors.",
  },
  {
    q: "What is a non-fit?",
    a: "Hospitals, urgent care, and medical clinics. If the operating problem is not a real transformation the company will own, I will say so.",
  },
  {
    q: "What do you hire?",
    a: "The application layer, the agentic layer, or both. The agentic layer rides the same seat. It is not a pilot beside a broken estate.",
  },
  {
    q: "What does the company keep?",
    a: "Mapped workflows, governed data, visible delivery state, and people who can run the next cycle. On the agentic layer: agents under boundaries with named owners. The production path stays.",
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
                  . Come with the real operating problem. Shape, stakes,
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
