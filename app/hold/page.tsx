import type { Metadata } from "next";
import PresenceShell from "@/components/presence/PresenceShell";

export const dynamic = "force-dynamic";
export const robots = { index: false, follow: false };

export const metadata: Metadata = {
  title: "How this site is held",
  robots: { index: false, follow: false },
  alternates: { canonical: "/hold/" },
};

function shortSha(value: string | undefined): string {
  const sha = (value || "").trim();
  if (!sha) return "local / unknown";
  return sha.length > 7 ? sha.slice(0, 7) : sha;
}

export default function HoldPage() {
  const sha = shortSha(process.env.VERCEL_GIT_COMMIT_SHA);
  const onVercel = Boolean(process.env.VERCEL_DEPLOYMENT_ID);
  const env = onVercel ? process.env.VERCEL_ENV || "production" : "local";
  const deploy = process.env.VERCEL_DEPLOYMENT_ID || "not on Vercel";
  const branch = process.env.VERCEL_GIT_COMMIT_REF || "working";

  return (
    <PresenceShell>
      <header className="p-section">
        <div className="page-well">
          <p className="p-kicker">Hold</p>
          <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
            How this site is held.
          </h1>
          <p className="p-dek">
            Operator receipt. Not in the nav. GitHub custody, this deploy, the
            publish fence, and the one telemetry story.
          </p>
        </div>
      </header>

      <section className="p-section" style={{ borderBottom: 0, paddingTop: 0 }}>
        <div className="page-well space-y-8">
          <dl className="space-y-5">
            <div>
              <dt className="p-kicker">Custody</dt>
              <dd className="mt-1 font-body text-[17px] text-navy">
                GitHub <span className="font-semibold">rigorg/idigdata</span> ·
                branch <span className="font-semibold">{branch}</span>
              </dd>
            </div>
            <div>
              <dt className="p-kicker">This deploy</dt>
              <dd className="mt-1 font-body text-[17px] text-navy">
                sha <span className="font-mono text-[15px]">{sha}</span>
                <br />
                env <span className="font-semibold">{env}</span>
                <br />
                vercel <span className="font-mono text-[15px]">{deploy}</span>
              </dd>
            </div>
            <div>
              <dt className="p-kicker">Publish</dt>
              <dd className="mt-1 font-body text-[17px] text-navy">
                Capo Ship only. Local push fence stays on until that word.
              </dd>
            </div>
            <div>
              <dt className="p-kicker">Telemetry</dt>
              <dd className="mt-1 font-body text-[17px] text-navy">
                One entrance: the door-knock. DigOps Real hits are a person on
                a live page. Vercel Analytics is aggregate only and does not
                write into DigOps.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </PresenceShell>
  );
}
