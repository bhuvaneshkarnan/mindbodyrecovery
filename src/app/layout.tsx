import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Caveat } from "next/font/google";
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

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindbodyrecovery.in"),
  alternates: {
    canonical: "https://mindbodyrecovery.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    <html lang="en" className={`dark ${manrope.variable} ${sans.variable} ${caveat.variable}`}>
      <head>
        <link rel="canonical" href="https://mindbodyrecovery.in" />
        <link
          rel="preload"
          as="image"
          href="/assets/hero/hero-poster.webp"
          type="image/webp"
          // @ts-expect-error Next.js / React 18 supports fetchpriority on link
          fetchpriority="high"
        />
        <link rel="image_src" href="https://mindbodyrecovery.in/assets/brand/og-share.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
                  "@id": "https://mindbodyrecovery.in/#clinic",
                  "name": "Mind Body Recovery",
                  "alternateName": "Mind Body Recovery Clinic & Retreat",
                  "url": "https://mindbodyrecovery.in",
                  "logo": "https://mindbodyrecovery.in/assets/brand/logo-trimmed.webp",
                  "image": "https://mindbodyrecovery.in/assets/brand/og-share.jpg",
                  "description": "An integrative clinical wellness sanctuary and training academy in Chennai. Hands-on bodywork (acupuncture, cupping, reflexology, Ayurveda), somatic inquiry, and 2-day reset retreats.",
                  "telephone": "+919042561651",
                  "email": "tamilnadutherapist@gmail.com",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shanta Ayurveda Hospital, 23A, N Boag Rd, Drivers Colony",
                    "addressLocality": "T. Nagar, Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600017",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 13.0418,
                    "longitude": 80.2341
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Sameer",
                    "jobTitle": "Founder & Integrative Therapist"
                  },
                  "sameAs": [
                    "https://www.instagram.com/mindbodyrecovery.in/",
                    "https://www.facebook.com/p/Tamilnadu-Therapist-100076794673204/",
                    "https://www.youtube.com/@tamilnadutherapist4345"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mindbodyrecovery.in/#website",
                  "url": "https://mindbodyrecovery.in",
                  "name": "Mind Body Recovery",
                  "publisher": {
                    "@id": "https://mindbodyrecovery.in/#clinic"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-ink-950 text-parchment-50 min-h-screen antialiased selection:bg-gold-500/30 selection:text-parchment-50 font-sans">
        {children}
      </body>
    </html>
  );
}
