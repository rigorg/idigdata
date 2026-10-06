import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3, Vollkorn } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/analytics/JsonLd";
import RouteJsonLd from "@/components/analytics/RouteJsonLd";
import PageviewBeacon from "@/components/analytics/PageviewBeacon";
import SiteNotice from "@/components/analytics/SiteNotice";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";

const display = Lora({
  subsets: ["latin"],
  variable: "--next-font-display",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--next-font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  variable: "--next-font-vollkorn",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idigdata.com"),
  title: {
    default: "Robert Paddock · Enterprise Technology Leader | idigdata",
    template: "%s | idigdata",
  },
  description:
    "A living business asset. The full mandate, or a defined part.",
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "https://idigdata.com/llms.txt",
      "application/rss+xml": [
        { url: "https://idigdata.com/feed.xml", title: "Agentic AI, by Robert Paddock" },
      ],
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idigdata.com",
    siteName: "idigdata",
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
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#142840",
  colorScheme: "light",
};

import { ThemeProvider } from "@/lib/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${vollkorn.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('idigdata-theme');
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch(e) {}
            `,
          }}
        />
        {/*
          Feed and llms.txt discovery. These are also declared in
          metadata.alternates.types above, but every page sets
          alternates.canonical, and Next replaces the whole `alternates`
          object at the deepest segment, so the layout-level types never
          render on those pages. Keep both until pages stop overriding.
        */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Agentic AI, by Robert Paddock"
          href="https://idigdata.com/feed.xml"
        />
        <link rel="alternate" type="text/plain" href="https://idigdata.com/llms.txt" />
      </head>
      <body className="font-body text-ink bg-cream">
        <ThemeProvider>
          <JsonLd />
          <RouteJsonLd />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <SiteNotice />
          <VercelAnalytics />
          <PageviewBeacon />
        </ThemeProvider>
      </body>
    </html>
  );
}
