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
  title: "Mind Body Recovery | Integrative Wellness & Recovery Clinic | Dr. Sameer",
  description:
    "An integrative wellness clinic and training academy run by Dr. Sameer. Hands-on bodywork (acupuncture, cupping, reflexology, Ayurveda), somatic inquiry, and 2-day reset retreats in Chennai.",
  keywords: [
    "Mind Body Recovery",
    "Dr Sameer",
    "Acupuncture Chennai",
    "Cupping Therapy",
    "Ayurveda",
    "Somatic Coaching",
    "Wellness Retreat India",
    "Integrative Healing",
  ],
  authors: [{ name: "Dr. Sameer" }],
  openGraph: {
    title: "Mind Body Recovery | Dr. Sameer",
    description:
      "I work with the mind, the body and the patterns connecting them. Integrative therapy, retreat & training academy.",
    url: "https://mindbodyrecovery.in",
    siteName: "Mind Body Recovery",
    images: [
      {
        url: "/assets/team/20260826_153026.webp",
        width: 1200,
        height: 630,
        alt: "Mind Body Recovery Team and Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${sans.variable}`}>
      <body className="bg-ink-950 text-parchment-50 min-h-screen antialiased selection:bg-gold-500/30 selection:text-parchment-50 font-sans">
        {children}
      </body>
    </html>
  );
}
