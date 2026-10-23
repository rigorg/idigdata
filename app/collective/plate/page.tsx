import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Plate II · Peer Pattern Loop & Living Workshop | Robert Paddock",
  description:
    "Full-scale architectural paper-drafting plate showing The Rig, the machine that builds the machines; B.O.S.S., where a business finds where it stands, builds its living digital twin, and monitors the live instance; and FlowCraft, the live operating instance where the real transactions run every day.",
  alternates: {
    canonical: "https://idigdata.com/collective/plate/",
  },
};

export default function CollectivePlatePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FAF6EE",
        color: "#1E2024",
        padding: "28px 24px 64px",
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
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
            <Link href="/collective/" style={{ color: "#1E2024", fontWeight: 700, textDecoration: "underline" }}>
              The Pattern Collective
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "#2D5A52", fontWeight: 700 }}>
              Architectural Plate II · Peer Pattern Loop &amp; Living Workshop
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <Link
              href="/agentic-ai/plate/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "6px",
                border: "1px solid #D4C4AC",
                background: "#FAF5EC",
                color: "#8B6B35",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "11.5px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <span>&larr; View Plate I (The Seam &amp; Outcome Loop)</span>
            </Link>
            <Link
              href="/collective/"
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
              <span>&larr; Back to The Pattern Collective</span>
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
            <span>ARCHITECTURAL PLATE II // PEER PATTERN LOOP &bull; THE RIG BUILDS B.O.S.S. &amp; FLOWCRAFT &bull; B.O.S.S. MAPS, TWINS &amp; MONITORS THE LIVE INSTANCE</span>
            <span>CONTINUOUS OUTCOME LOOP</span>
          </div>

          <Image
            src="/diagrams/collective-living-paper-plate.svg"
            alt="The Pattern Collective peer loop and living workshop showing The Rig building B.O.S.S. and FlowCraft, B.O.S.S. as the living digital twin that monitors the live instance, and FlowCraft as the live operating instance running purchase orders, payroll, receiving, approvals, and close"
            width={1160}
            height={860}
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
            href="/collective/"
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
            <span>&larr; Back to The Pattern Collective</span>
          </Link>
          <Link
            href="/agentic-ai/"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "12px",
              color: "#8B6B35",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Read Learn Through the Work &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
