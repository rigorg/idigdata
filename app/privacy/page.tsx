import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import CookiePreferenceControls from "@/components/analytics/CookiePreferenceControls";

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
          We operate a strict opt-in privacy posture. We do not pre-load tracking
          cookies or fire client tracking beacons until you explicitly choose to
          accept measurement.
        </p>
        <p className="mb-3">
          When consent is granted, we record first-party site visits to evaluate
          engagement and improve this practice: path, time, referrer, basic device/browser
          signals, and optional UTM campaign attribution. Home, Experience, The Block,
          Agentic AI, The Collective, and Contact are live pages. When telemetry is captured,
          we store an anonymous session identifier and keyed HMAC of client IP - never the
          raw address - with coarse location (country / region / city). We do not collect
          precise GPS or keep proxy header dumps.
        </p>
        <p>
          We also use Vercel Analytics for aggregate, privacy-first visit counts.
          Both first-party beacons and Vercel Analytics are gated by your cookie preferences.
        </p>
      </>
    ),
  },
  {
    title: "Cookies we set",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold text-ink">Cookie consent preference</span>
          {" - "}
          remembers whether you accepted or declined telemetry so you are not prompted repeatedly.
        </li>
        <li>
          <span className="font-semibold text-ink">Attribution cookie</span>
          {" - "}
          only set if you accept cookies on campaign landing; remembers UTM parameters for 30 days so subsequent page visits reflect the campaign source.
        </li>
        <li>
          <span className="font-semibold text-ink">Session door markers</span>
          {" - "}
          short-lived markers to prevent double-counting visits during an active reading session.
        </li>
        <li>
          <span className="font-semibold text-ink">Operator markers</span>
          {" - "}
          only if this practice intentionally marks a browser to keep operator and test traffic separate from client traffic.
        </li>
      </ul>
    ),
  },
  {
    title: "Contact form",
    body: (
      <>
        If you write through our contact or inquiry forms (including{" "}
        <Link href="/contact/" className="font-semibold text-navy border-b border-navy/30 hover:border-navy">
          /contact
        </Link>{" "}
        and{" "}
        <Link href="/collective/" className="font-semibold text-navy border-b border-navy/30 hover:border-navy">
          /collective
        </Link>
        ), we store the fields you send (name, email, company, topic/interest, message)
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
        Transactional notify mail from the contact form: Resend. Each operates under
        their own standard terms; we configure them for this practice site.
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
          What this site measures, how cookie consent works, and how to manage your preferences.
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
              Cookie & Measurement Preferences
            </h2>
            <p className="mt-3 font-body text-[15.5px] leading-relaxed text-warm-gray">
              You can review or change your cookie and telemetry preferences at any time.
              Choosing &ldquo;Opt Out&rdquo; removes any stored attribution cookies and
              suppresses all client-side telemetry.
            </p>
            <CookiePreferenceControls />
          </div>

          <p className="font-body text-[13px] text-warm-gray/80">
            Last updated October 12, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
