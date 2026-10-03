"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV } from "@/lib/nav";

const NAV = PRIMARY_NAV;

function HeaderWordmark({ isDark = false }: { isDark?: boolean }) {
  return (
    <svg
      viewBox="0 0 620 130"
      width={620}
      height={130}
      className="h-10 w-auto md:h-11"
      role="img"
      aria-label="idigdata"
    >
      <text
        x="322"
        y="100"
        fill={isDark ? "#F7F5EE" : "#142840"}
        textAnchor="end"
        letterSpacing="-1"
        style={{
          fontFamily: "var(--font-vollkorn), Vollkorn, Georgia, serif",
          fontWeight: 700,
          fontSize: 100,
        }}
      >
        idig
      </text>
      <rect x="324" y="63" width="20" height="20" fill="#FACC15" />
      <text
        x="346"
        y="100"
        fill={isDark ? "#F7F5EE" : "#142840"}
        textAnchor="start"
        letterSpacing="-1"
        style={{
          fontFamily: "var(--font-vollkorn), Vollkorn, Georgia, serif",
          fontWeight: 700,
          fontSize: 100,
        }}
      >
        data
      </text>
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const path = (pathname ?? "/").replace(/\/+$/, "") || "/";
  const isBlock = path.startsWith("/block");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const target = href.replace(/\/+$/, "") || "/";
    return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 ${
        isBlock
          ? "border-white/10 bg-[#070E17]/95 text-white"
          : "border-navy/10 bg-[#FBF9F4]/95 text-navy"
      }`}
    >
      <div className="page-well flex items-center justify-between py-3.5 md:py-5">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center"
            aria-label="idigdata - home"
          >
            <HeaderWordmark isDark={isBlock} />
          </Link>
          {isBlock && (
            <div className="flex items-center gap-2 pl-3 border-l border-white/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E5B21D] bg-[#E5B21D]/10 px-2.5 py-1 rounded border border-[#E5B21D]/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,178,29,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B21D] animate-pulse" />
                The Block
              </span>
            </div>
          )}
        </div>

        <nav
          className={`hidden items-center gap-8 font-vollkorn text-[15px] font-semibold md:flex ${
            isBlock ? "text-slate-300" : "text-navy"
          }`}
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={active ? "page" : undefined}
                className={`nav-underline transition-colors ${
                  active
                    ? isBlock
                      ? "font-semibold text-[#E5B21D]"
                      : "font-semibold text-navy"
                    : isBlock
                      ? "text-slate-300 hover:text-white"
                      : "text-navy/75 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav toggle */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              isBlock ? "text-white hover:text-[#E5B21D]" : "text-navy hover:text-navy/80"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4 L18 18 M18 4 L4 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 3 H20 M2 9 H20 M2 15 H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown attached directly to sticky header */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className={`absolute left-0 right-0 top-full z-50 border-b shadow-2xl md:hidden ${
              isBlock
                ? "border-white/10 bg-[#0B1624] text-white"
                : "border-navy/15 bg-[#FBF9F4] text-navy"
            }`}
            aria-label="Primary Mobile"
          >
            <ul className="page-well flex flex-col py-3">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 border-b py-3.5 font-body text-[18px] transition-colors last:border-b-0 ${
                        isBlock
                          ? `border-white/10 ${
                              active ? "font-bold text-[#E5B21D]" : "text-slate-200 hover:text-white"
                            }`
                          : `border-navy/10 ${
                              active ? "font-bold text-navy" : "text-navy hover:text-navy/70"
                            }`
                      }`}
                    >
                      {active && (
                        <span
                          aria-hidden="true"
                          className="inline-block h-[8px] w-[8px] bg-gold"
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
