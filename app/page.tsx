import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Enterprise Technology Leader | idigdata",
  },
  description:
    "Enterprise technology leadership grounded in 50+ implementations and 15 enterprise transformations at scale.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Enterprise Technology Leader",
    description:
      "Enterprise technology leadership grounded in 50+ implementations and 15 enterprise transformations at scale.",
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
