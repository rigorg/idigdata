import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Digital transformation fails when nobody owns the whole. Your ERP already failed the business. Everyone is bolting agents onto that data anyway. I don't.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO",
    description:
      "Digital transformation fails when nobody owns the whole. Your ERP already failed the business. Everyone is bolting agents onto that data anyway. I don't.",
    images: [
      {
        url: "/og-image.png?v=20260828",
        width: 1200,
        height: 630,
        alt: "Digital transformation fails when nobody owns the whole.",
      },
    ],
  },
};

export default function HomePage() {
  return <FolioHome />;
}
