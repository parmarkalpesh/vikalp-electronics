import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vikalpelectronics.com'),
  title: {
    default: "Best AC Repair & Home Appliance Service in Jamnagar | Vikalp Electric & Refrigeration",
    template: "%s | Best Service in Jamnagar - Vikalp Electric & Refrigeration",
  },
  description: "Looking for best AC service in Jamnagar? Vikalp Electric & Refrigeration offers 24/7 expert AC repair, gas charging, installation & servicing for Split/Window ACs of all brands (Voltas, LG, Samsung, Daikin, etc.).",
  keywords: [
    "AC service in Jamnagar",
    "Best AC repair Jamnagar",
    "AC service near me in Jamnagar",
    "AC repair in Jamnagar",
    "AC servicing in Jamnagar",
    "AC installation service Jamnagar",
    "AC gas charging Jamnagar",
    "Split AC service Jamnagar",
    "Window AC servicing Jamnagar",
    "24 hours AC repair Jamnagar",
    "Emergency AC repair Jamnagar",
    "Professional AC service Jamnagar",
    "Low cost AC service Jamnagar",
    "Affordable AC repair Jamnagar",
    "Cheap AC service in Jamnagar",
    "Fast AC repair Jamnagar",
    "Reliable AC technician in Jamnagar",
    "Skilled AC mechanic Jamnagar",
    "Trusted AC service Jamnagar",
    "Top rated AC service Jamnagar",
    "Voltas AC service Jamnagar",
    "Daikin AC repair Jamnagar",
    "LG AC servicing Jamnagar",
    "Samsung AC service Jamnagar",
    "Hitachi AC technician Jamnagar",
    "AC gas refill & repair Jamnagar",
    "AC noise repair service Jamnagar",
    "AC water leakage repair Jamnagar",
    "Seasonal AC maintenance Jamnagar",
    "Best AC servicing deals in Jamnagar",
    "Home appliance repair Jamnagar",
    "Fridge repair near me",
    "Washing machine service Jamnagar",
    "RO filter service Jamnagar",
    "Vikalp Electric & Refrigeration"
  ],
  authors: [{ name: "Vikalp Electric & Refrigeration" }],
  creator: "Vikalp Electric & Refrigeration",
  publisher: "Vikalp Electric & Refrigeration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/img/logo.png',
    shortcut: '/img/logo.png',
    apple: '/img/logo.png',
  },
  openGraph: {
    title: "Best AC & Home Appliance Repair in Jamnagar | Vikalp Electric & Refrigeration",
    description: "Expert AC Repair, Gas Charging & Installation in Jamnagar. 24/7 Service for all brands. Call +919374170929 for same-day visit.",
    url: 'https://vikalpelectronics.com',
    siteName: 'Vikalp Electric & Refrigeration',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vikalp Electric & Refrigeration - #1 AC & Appliance Repair in Jamnagar",
    description: "Need AC repair in Jamnagar? We offer fast, affordable & 24/7 service for all AC brands. Call now!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-gray-50 text-secondary font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
