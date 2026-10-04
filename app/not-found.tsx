import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-6 py-24">
      <p className="font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-stone">
        404
      </p>
      <h1 className="mt-3 font-display text-[36px] font-medium leading-tight text-navy md:text-[44px]">
        That page is not on this site.
      </h1>
      <p className="mt-4 max-w-xl font-body text-[17px] leading-relaxed text-warm-gray">
        The URL may be old, mistyped, or never existed. Known routes live under
        Home, Experience, The Block, and Contact.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center bg-navy px-5 font-body text-[15px] font-semibold text-porcelain hover:bg-navy-deep"
        >
          Home
        </Link>
        <Link
          href="/experience/"
          className="inline-flex h-11 items-center border border-stone/50 px-5 font-body text-[15px] font-semibold text-ink hover:border-navy"
        >
          Experience
        </Link>
        <Link
          href="/block/"
          className="inline-flex h-11 items-center border border-stone/50 px-5 font-body text-[15px] font-semibold text-ink hover:border-navy"
        >
          The Block
        </Link>
        <Link
          href="/contact/"
          className="inline-flex h-11 items-center border border-stone/50 px-5 font-body text-[15px] font-semibold text-ink hover:border-navy"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
