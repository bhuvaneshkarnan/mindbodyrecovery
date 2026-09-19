import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-general-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindbodyrecovery.in"),
  title: "Mind Body Recovery | Integrative Wellness & Recovery Clinic | Sameer",
  description:
    "An integrative wellness clinic and training academy run by Sameer. Hands-on bodywork (acupuncture, cupping, reflexology, Ayurveda), somatic inquiry, and 2-day reset retreats in Chennai.",
  keywords: [
    "Mind Body Recovery",
    "Sameer",
    "Acupuncture Chennai",
    "Cupping Therapy",
    "Ayurveda",
    "Somatic Coaching",
    "Wellness Retreat India",
    "Integrative Healing",
  ],
  authors: [{ name: "Sameer" }],
  openGraph: {
    title: "Mind Body Recovery | Sameer",
    description:
      "I work with the mind, the body and the patterns connecting them. Integrative therapy, retreat & training academy.",
    url: "https://mindbodyrecovery.in",
    siteName: "Mind Body Recovery",
    images: [
      {
        url: "/assets/brand/og-share.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Mind Body Recovery Logo & Integrative Wellness Clinic",
      },
      {
        url: "/assets/brand/og-square.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "Mind Body Recovery Logo Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Body Recovery | Sameer",
    description:
      "I work with the mind, the body and the patterns connecting them. Integrative therapy, retreat & training academy.",
    images: ["/assets/brand/og-share.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${sans.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero/hero-poster.webp"
          type="image/webp"
          // @ts-expect-error Next.js / React 18 supports fetchpriority on link
          fetchpriority="high"
        />
        <link rel="image_src" href="https://mindbodyrecovery.in/assets/brand/og-share.jpg" />
      </head>
      <body className="bg-ink-950 text-parchment-50 min-h-screen antialiased selection:bg-gold-500/30 selection:text-parchment-50 font-sans">
        {children}
      </body>
    </html>
  );
}
