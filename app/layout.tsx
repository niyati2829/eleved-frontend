import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ELEVED | Elevated Living through Dincharya",
  description:
    "A modern South Delhi luxury wellness destination. Experience quiet luxury, editorial aesthetics, adaptogenic drinks, conscious dining, and the ancient wisdom of Dincharya.",
  keywords: [
    "ELEVED",
    "Ayurvedic Cafe Delhi",
    "Dincharya Lifestyle",
    "Quiet Luxury Cafe Delhi",
    "Adaptogenic Coffee",
    "Wellness Club Delhi",
    "Brahmi Cafe",
    "Luxury Wellness Destination",
  ],
  authors: [{ name: "ELEVED" }],
  openGraph: {
    title: "ELEVED | Elevated Living through Dincharya",
    description:
      "A quiet luxury Ayurvedic wellness cafe & lifestyle destination in South Delhi. Experience slow living through the lens of modern aesthetics.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} min-h-full flex flex-col font-sans selection:bg-gold-200 selection:text-charcoal-900 dark:selection:bg-gold-500 dark:selection:text-charcoal-950`}
      >
        {/* Cinematic Film Grain Overlay */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
