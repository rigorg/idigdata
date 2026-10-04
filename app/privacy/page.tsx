import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How idigdata handles site telemetry, contact notes, cookies, and requests about your data.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/privacy/",
    title: "Privacy | idigdata",
    description:
      "Plain-language notice of what idigdata.com measures, stores, and how to reach Robert about your data.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy", item: "https://idigdata.com/privacy/" },
  ],
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who this is for",
    body: (
      <>
        This notice covers idigdata.com, operated by Data Integration Group LLC
        (doing business as idigdata) in the United States. It is not legal
        advice for your company - it is how this practice site handles visitors and
        inbound notes.
      </>
    ),
  },
  {
    title: "What we measure on the site",
    body: (
      <>
        <p className="mb-3">
          When someone opens a page on idigdata.com, we record one first-party
          entrance (the door-knock) for operating this practice: path, time,
          referrer, basic device/browser signals, optional UTM / click-id
          parameters (also kept in a short first-party attribution cookie), and
          coarse host location (country / region / city). Application Layer and
          Agentic Layer are live pages, same as Home and Contact. We store a
          keyed HMAC of the visitor IP - not the raw address - plus a small
          allowlisted set of request metadata (for example accept-language and
          fetch-site). We do not keep precise latitude/longitude or full proxy
          header dumps.
        </p>
        <p>
          We also use Vercel Analytics for aggregate, privacy-oriented visit
          counts. You can opt out of that analytics layer from the site notice or
          the control below.
        </p>
      </>
    ),
  },
  {
    title: "Cookies we set",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold text-ink">Session door cookies</span>
          {" - "}
          short-lived markers so we do not double-count the same entrance window.
        </li>
        <li>
          <span className="font-semibold text-ink">Attribution cookie</span>
          {" - "}
          remembers UTM / gclid from a campaign landing for about 30 days so later
          pages in the same browser still attribute correctly.
        </li>
        <li>
          <span className="font-semibold text-ink">Analytics preference</span>
          {" - "}
          remembers if you opted out of Vercel Analytics.
        </li>
        <li>
          <span className="font-semibold text-ink">Internal / fleet markers</span>
          {" - "}
          only if this practice deliberately marks a browser so operator and
          automation traffic can be filtered from buyer traffic.
        </li>
      </ul>
    ),
  },
  {
    title: "Contact form",
    body: (
      <>
        If you write through{" "}
        <Link href="/contact/" className="font-semibold text-navy border-b border-navy/30 hover:border-navy">
          /contact
        </Link>
        , we store the fields you send (name, email, optional role/company/message)
        in our operating records and send a notification email so Robert can reply.
        We do not sell form submissions.
      </>
    ),
  },
  {
    title: "Who processes data",
    body: (
      <>
        Hosting and edge delivery: Vercel. Operating database: Supabase.
        Transactional notify mail from the contact form: Resend. Each is under
        their own terms; we configure them for this practice site.
      </>
    ),
  },
  {
    title: "Retention and requests",
    body: (
      <>
        Traffic rows are kept for operating this practice, not forever theater.
        Contact notes stay while they are useful to the conversation. To ask
        about access, correction, or deletion of a note you sent, email{" "}
        <a
          href="mailto:robert@idigdata.com?subject=Privacy%20request"
          className="font-semibold text-navy border-b border-navy/30 hover:border-navy"
        >
          robert@idigdata.com
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-5">Privacy</SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Plain notice. No theater.
        </h1>
        <p className="mt-5 max-w-[720px] font-display italic text-warm-gray text-[18px] leading-snug">
          What this site measures, why entrance traffic is recorded, and how to
          opt out of aggregate analytics.
        </p>
      </section>

      <section className="pb-20">
        <div className="max-w-[720px] space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="border-t border-navy/10 pt-6">
              <h2 className="font-brand text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                {section.title}
              </h2>
              <div className="mt-3 font-body text-[15.5px] leading-relaxed text-warm-gray">
                {section.body}
              </div>
            </div>
          ))}

          <div className="border-t border-navy/10 pt-6">
            <h2 className="font-brand text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
              Analytics opt-out
            </h2>
            <p className="mt-3 font-body text-[15.5px] leading-relaxed text-warm-gray">
              Prefer no Vercel Analytics from this browser? Use the site notice, or
              turn it off here. First-party entrance telemetry for operating the
              practice still runs; this control only stops the Vercel Analytics
              layer.
            </p>
            <p className="mt-4 font-body text-[14px] text-navy">
              <Link
                href="/?va-opt-out=1"
                className="inline-flex items-center rounded-md bg-navy px-4 py-2.5 text-[13px] font-semibold text-porcelain hover:bg-navy-mid"
              >
                Opt out of analytics
              </Link>
            </p>
          </div>

          <p className="font-body text-[13px] text-warm-gray/80">
            Last updated August 13, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
