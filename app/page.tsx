import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Enterprise Technology Leader | idigdata",
  },
  description:
    "A living business asset. The full mandate, or a defined part.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Enterprise Technology Leader",
    description:
      "A living business asset. The full mandate, or a defined part.",
    images: [
      {
        url: "/og-image.png?v=20260828",
        width: 1200,
        height: 630,
        alt: "A living business asset. The full mandate, or a defined part.",
      },
    ],
  },
};

export default function HomePage() {
  return <FolioHome />;
}
