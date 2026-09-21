import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import DirectSignalObject from "@/components/presence/DirectSignalObject";
import PresenceShell from "@/components/presence/PresenceShell";

export const metadata: Metadata = {
  title: { absolute: "Contact | idigdata" },
  description:
    "If your company needs a real transformation owned from inside the business, let's talk.",
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
      <header className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">Contact</p>
              <h1 className="p-h1">Bring the real operating problem.</h1>
              <p className="p-dek">
                If your company needs a real transformation owned from inside
                the business, let&apos;s talk.
              </p>
              <div className="p-lead">
                <p>
                  Come with the shape, the stakes, and the constraints. We will
                  know quickly if I am the fit.
                </p>
                <p>
                  I take on the application layer, the agentic layer, or both.
                  One owner. I hold command. A crew of 20 to 40 lands it.
                  Agentics rides the same seat.
                </p>
                <p>
                  I fit $100M-$1B operators best - CPG and AEC first, with
                  relevant experience across adjacent operating environments.
                  Hospitals, urgent care, and medical clinics are a non-fit.
                </p>
              </div>
            </div>
            <div className="home-watermark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="p-section p-section--job">
        <div className="page-well">
          <p className="p-kicker">The note</p>
          <h2 className="p-h2">Write it in your own words.</h2>
          <p className="p-prose">
            If the fit is wrong, I will say so plainly. If the mandate is real,
            we will know the next useful step.
          </p>
          <div className="form-grid">
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
                You speak with the person who does the work.
              </h3>
              <p className="mt-3 text-[17px] leading-[1.65]">
                You talk to me. No account theater. I land it with a crew.
                One real problem lands with an accountable owner.
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
