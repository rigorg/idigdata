import { notFound } from "next/navigation";

export const metadata = {
  title: "Archive",
  robots: { index: false, follow: false },
};

export default function BannerLabPage() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_PREVIEW) {
    notFound();
  }
  return null;
}
