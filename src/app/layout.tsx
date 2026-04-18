// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Pitchin",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "software development agency",
    "digital marketing agency",
    "startup agency",
    "MVP development",
    "web development",
    "mobile app development",
    "pitchin",
    "pitchin.mobi",
  ],
  authors: [{ name: "Pitchin", url: siteConfig.url }],
  creator: "Pitchin",
  publisher: "Pitchin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Open Graph — used by Facebook, LinkedIn, WhatsApp, Slack, etc.
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteUrl("/og/og-default.png"),
        width: 1200,
        height: 630,
        alt: "Pitchin — Build Fast, Scale Smart",
        type: "image/png",
      },
      {
        url: absoluteUrl("/og/og-square.png"),
        width: 1080,
        height: 1080,
        alt: "Pitchin Square Logo",
        type: "image/png",
      },
    ],
  },
  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: "@pitchinmobi",
    creator: "@pitchinmobi",
    images: [
      {
        url: absoluteUrl("/og/og-twitter.png"),
        width: 1200,
        height: 600,
        alt: "Pitchin — Build Fast, Scale Smart",
      },
    ],
  },
  // Favicons — Next.js handles icon.svg & apple-touch-icon.png automatically
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#6D28D9" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization schema — Google uses the logo field for the Knowledge Panel
  // Requirements: PNG/WebP/GIF, at least 112x112px, max 1MB, crawlable & indexable
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    // PNG logo for Google Knowledge Panel (512x512 square, white bg)
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.png"),
      width: 512,
      height: 512,
      caption: "Pitchin logo",
    },
    image: absoluteUrl("/og/og-default.png"),
    description: siteConfig.description,
    sameAs: [
      "https://www.linkedin.com/company/pitchin-mobi",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@pitchin.mobi",
        availableLanguage: ["English"],
      },
    ],
  };

  // WebSite schema for Sitelinks Search Box
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon links for maximum browser/OS compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6D28D9" />
        <meta name="msapplication-TileColor" content="#6D28D9" />

        {/* Organization JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} antialiased bg-black`}>
        <I18nProvider>
          <Preloader />
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}