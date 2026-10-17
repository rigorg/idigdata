import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock — Enterprise Transformation Executive | idigdata",
  },
  description:
    "I connect people, systems, and workflows to shorten the path from intent to outcome. 20+ years of business leadership, over 50 enterprise transformations, and three years of hands-on agentic development.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock — Enterprise Transformation Executive",
    description:
      "I connect people, systems, and workflows to shorten the path from intent to outcome. 20+ years of business leadership, over 50 enterprise transformations, and three years of hands-on agentic development.",
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