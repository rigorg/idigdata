import Link from "next/link";
import { PRIMARY_NAV } from "@/lib/nav";
import OrgAdminLink from "@/components/OrgAdminLink";

const NAV = PRIMARY_NAV;

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-porcelain/10 bg-navy-deep text-porcelain">
      <div className="page-well pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-vollkorn text-[26px] font-bold tracking-[-0.02em]">
              idig
              <span
                aria-hidden="true"
                className="mx-[3px] inline-block h-[0.19em] w-[0.19em] bg-gold align-baseline"
              />
              data
            </p>
            <p className="mt-3 font-display text-[14px] italic leading-relaxed text-porcelain/50">
              Data-centric &middot; Vendor-agnostic
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Navigation
            </p>
            <ul className="space-y-2 font-body text-[15px]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-porcelain/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Contact
            </p>
            <p className="font-body text-[15px] leading-relaxed text-porcelain/70">
              <a
                href="mailto:robert@idigdata.com"
                className="border-b border-gold/50 font-semibold text-porcelain transition-colors hover:border-gold hover:text-gold"
              >
                robert@idigdata.com
              </a>
              <br />
              Pacific Time
            </p>
            <p className="mt-4 font-body text-[13px] leading-relaxed text-porcelain/55">
              Have a substantial technology mandate? Let&apos;s talk.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-porcelain/10 pt-6">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="font-body text-[12.5px] text-porcelain/40">
              © idigdata · Data Integration Group · est. 2016
            </p>
            <div className="flex items-center gap-4">
              <OrgAdminLink />
              <Link
                href="/faq/"
                className="font-body text-[12.5px] text-porcelain/50 transition-colors hover:text-gold"
              >
                FAQ
              </Link>
              <Link
                href="/privacy/"
                className="font-body text-[12.5px] text-porcelain/50 transition-colors hover:text-gold"
              >
                Privacy
              </Link>
            </div>
          </div>
          <p className="mt-4 max-w-[62ch] font-body text-[11.5px] leading-relaxed text-porcelain/35">
            All product names, logos, and brands are property of their
            respective owners and are used for identification purposes only.
            Reference to past clients does not imply their endorsement of
            idigdata.
          </p>
        </div>
      </div>

      {/* Oversized brand plate, cropped at the base */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.42em] select-none whitespace-nowrap text-center font-vollkorn text-[clamp(120px,17vw,260px)] font-bold leading-none tracking-[-0.02em] text-porcelain/[0.045]"
      >
        idig<span className="mx-[6px] inline-block h-[0.16em] w-[0.16em] bg-gold/40 align-baseline" />data
      </p>
    </footer>
  );
}
