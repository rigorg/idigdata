import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Substantial technology mandates. The business keeps running while the work moves.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO",
    description:
      "Substantial technology mandates. The business keeps running while the work moves.",
    images: [
      {
        url: "/og-image.png?v=20260828",
        width: 1200,
        height: 630,
        alt: "Substantial technology mandates. The business keeps running while the work moves.",
      },
    ],
  },
};

export default function HomePage() {
  return <FolioHome />;
}
