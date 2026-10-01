import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import DirectSignalObject from "@/components/presence/DirectSignalObject";
import PresenceShell from "@/components/presence/PresenceShell";

export const metadata: Metadata = {
  title: { absolute: "Contact | idigdata" },
  description:
    "Executive roles, focused transformation work, and fractional leadership.",
  alternates: { canonical: "/contact/" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://idigdata.com/contact/",
    },
  ],
};

export default function ContactPage() {
  return (
    <PresenceShell>
      <JsonLdScript data={breadcrumbJsonLd} />
      <header className="p-section p-section--tight">
        <div className="page-well">
          <div className="hero-split">
          <div className="home-hero-copy">
          <p className="p-kicker">Contact</p>
          <h1 className="p-h1">Start with the role, the transformation, or the problem.</h1>
          <p className="p-dek">
            An executive appointment, focused work, or fractional leadership.
            Tell me what your business needs, or email{" "}
            <a
              href="mailto:robert@idigdata.com"
              className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
            >
              robert@idigdata.com
            </a>
            .
          </p>
          </div>
          <div className="home-watermark" aria-hidden="true">
            <img src="/idigdata-mark.svg" alt="" />
          </div>
          </div>
          <div className="form-grid mt-8">
            <ContactForm />
            <aside>
              <p className="font-vollkorn text-[16px] font-bold text-navy">
                Direct
              </p>
              <p className="mt-3 text-[16px] leading-[1.65]">
                Pacific Time
                <br />
                <a
                  href="mailto:robert@idigdata.com"
                  className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                >
                  robert@idigdata.com
                </a>
              </p>
              <p className="mt-4 text-[15px] leading-[1.65]">
                <a
                  href="https://www.linkedin.com/in/robertpaddock"
                  className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                Robert Paddock
              </p>
            </aside>
          </div>
        </div>
      </header>

      <section className="p-section">
        <div className="page-well">
          <div className="rounded-lg border border-[#142840]/12 bg-[#FBF9F4] p-6">
            <p className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
              Where the work has run
            </p>
            <p className="mt-2 text-[15px] leading-[1.65] text-[#334155]">
              Manufacturing, distribution, food and beverage, wineries and breweries, construction, hospitality, healthcare, health and wellness, logistics, and services. Family-owned, private equity-backed, and post-acquisition businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ borderBottom: 0 }}>
        <div className="page-well">
          <div className="lastmove-plate">
            <DirectSignalObject size={220} />
            <div>
              <p className="font-vollkorn text-[13px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                Direct
              </p>
              <h3 className="mt-1 font-vollkorn text-[clamp(24px,3vw,32px)] font-extrabold text-navy">
                Talk directly with me.
              </h3>
              <p className="mt-3 text-[17px] leading-[1.65]">
                We’ll discuss what the work calls for, where my experience fits, and the right scope of responsibility.
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-[#5A6978]">
                Pacific Time
              </p>
            </div>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
