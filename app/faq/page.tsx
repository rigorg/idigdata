import type { Metadata } from "next";
import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";

export const metadata: Metadata = {
  title: { absolute: "FAQ | idigdata" },
  description:
    "Fit, non-fit, mandates, exit criteria, and company-owned operational capability - Robert Paddock / idigdata.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/faq/",
    title: "FAQ | idigdata",
    description:
      "Fit, non-fit, mandates, exit criteria, and company-owned operational capability.",
    images: [{ url: "/og-image.png?v=20260828", width: 1200, height: 630, alt: "idigdata: FAQ" }],
  },
};

const faqs = [
  {
    q: "What engagements are a strong fit?",
    a: "Executive technology and operations leadership (CIO, CTO, VP of Transformation), post-acquisition system and financial consolidation, rescuing stalled ERP or plant-floor transformations, and building governed agentic workflows on a company-owned data core.",
  },
  {
    q: "What is a non-fit?",
    a: "I am not a staffing agency, a hands-off license broker, or an outsourced helpdesk vendor. When a mandate involves partner-side ERP implementation, system integration, or commercial solutioning, I lead that delivery directly—what I do not take on is unaccountable seat-filling or rubber-stamp slideware detached from operational outcomes.",
  },
  {
    q: "How is work scoped and priced?",
    a: "You can engage me for a full executive mandate, fractional leadership, or a defined operational scope through The Block. In The Block, you select target outcomes across six enterprise disciplines to initiate a scoping proposal; deliverables, dependencies, and engagement blocks are agreed up front before work begins.",
  },
  {
    q: "What does the company own when a mandate concludes?",
    a: "Within the agreed scope of the engagement, the aim is working software, retained business knowledge, and people equipped to keep improving—including documented data models, verified workflows, and clear operational ownership so your team can run and extend the work.",
  },
  {
    q: "How do you approach agentic AI and enterprise software ownership?",
    a: "I call this era Binary Intelligence—human judgment directing the intelligence of zeros and ones. In my development work, agents write the code while I retain responsibility for intent, verification, and accepted outcomes. People and agents contribute throughout The Outcome Loop (Intent, Define, Deliver, Outcome). Keep the systems of record that work, and build or improve the workflows that differentiate the business around a company-owned data core, with ownership and cost agreed explicitly.",
  },
] as const;

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <PresenceShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Fit &amp; Mandates</p>
          <h1 className="p-h1">Frequently asked questions.</h1>
          <p className="p-prose mt-4">
            Direct answers on executive mandates, transformation scope, and how we work together.
          </p>

          <div className="mt-10 space-y-8 max-w-3xl">
            {faqs.map((item) => (
              <article key={item.q} className="border-b border-[#142840]/12 pb-6">
                <h2 className="font-serif text-xl font-bold text-[#142840]">{item.q}</h2>
                <p className="p-prose mt-2.5">{item.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link className="p-btn" href="/block/">
              Configure Outcomes in The Block
            </Link>
            <Link className="p-link self-center" href="/contact/">
              Start a Conversation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
