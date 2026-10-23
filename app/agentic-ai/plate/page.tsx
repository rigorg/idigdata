import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Plate I · The Seam & The Continuous Loop | Robert Paddock",
  description:
    "Full-scale architectural paper-drafting plate showing Human & Binary Intelligence across 01 Intent, 02 Define, 03 Deliver, and 04 Outcome.",
  alternates: {
    canonical: "https://idigdata.com/agentic-ai/plate/",
  },
};

export default function AgenticPlatePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FAF6EE",
        color: "#1E2024",
        padding: "28px 24px 64px",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        {/* Breadcrumb + Back Navigation Bar */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            padding: "12px 18px",
            marginBottom: "22px",
            background: "#FFFDF9",
            border: "1px solid #DFD5C3",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(30, 32, 36, 0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "12px",
              color: "#6E5A3A",
            }}
          >
            <Link href="/" style={{ color: "#6E5A3A", textDecoration: "underline" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/agentic-ai/" style={{ color: "#1E2024", fontWeight: 700, textDecoration: "underline" }}>
              Learn Through the Work
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "#9B6E23", fontWeight: 700 }}>
              Architectural Plate I · The Seam &amp; Outcome Loop
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <Link
              href="/collective/plate/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "6px",
                border: "1px solid #D4C4AC",
                background: "#FAF5EC",
                color: "#2D5A52",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "11.5px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <span>View Plate II (The Collective) &rarr;</span>
            </Link>
            <Link
              href="/agentic-ai/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "6px",
                background: "#1E2024",
                color: "#FAF6EE",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textDecoration: "none",
              }}
            >
              <span>&larr; Back to Learn Through the Work</span>
            </Link>
          </div>
        </nav>

        {/* Full-Scale Plate Frame */}
        <div
          style={{
            background: "#FFFDF9",
            border: "1px solid #D4C4AC",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 12px 32px rgba(30, 32, 36, 0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
              paddingBottom: "12px",
              marginBottom: "16px",
              borderBottom: "1px solid #E6DEC8",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8B6B35",
            }}
          >
            <span>ARCHITECTURAL PLATE I // HUMAN &amp; BINARY INTELLIGENCE · THE SEAM &amp; THE OUTCOME LOOP</span>
            <span>01 INTENT &rarr; 02 DEFINE &rarr; 03 DELIVER &rarr; 04 OUTCOME &#8634;</span>
          </div>

          <Image
            src="/diagrams/learn-through-work-paper-plate.svg"
            alt="Human & Binary Intelligence · People, Data, Systems, Workflows, Agents, and Patterns across 01 Intent, 02 Define, 03 Deliver, and 04 Outcome"
            width={1120}
            height={900}
            unoptimized
            style={{ width: "100%", height: "auto", display: "block", margin: "0 auto" }}
            priority
          />
        </div>

        {/* Bottom Return Bar */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <Link
            href="/agentic-ai/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "6px",
              background: "#1E2024",
              color: "#FAF6EE",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <span>&larr; Back to Learn Through the Work</span>
          </Link>
          <Link
            href="/collective/"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "12px",
              color: "#8B6B35",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Explore The Pattern Collective &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
