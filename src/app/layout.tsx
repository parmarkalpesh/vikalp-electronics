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
    default: "Best AC Repair & Home Appliance Service in Jamnagar | VikalpElectronics",
    template: "%s | Best Service in Jamnagar - VikalpElectronics",
  },
  description: "Looking for best AC service in Jamnagar? VikalpElectronics offers expert AC repair, Fridge, Washing Machine & RO service. 15+ Yrs Exp. Same Day Visit.",
  keywords: [
    "AC service in Jamnagar",
    "Best AC repair Jamnagar",
    "Home appliance repair Jamnagar",
    "Fridge repair near me",
    "Washing machine service Jamnagar",
    "CCTV camera installation Jamnagar",
    "RO filter service Jamnagar",
    "VikalpElectronics",
    "Urban Company alternative Jamnagar"
  ],
  authors: [{ name: "VikalpElectronics" }],
  creator: "VikalpElectronics",
  publisher: "VikalpElectronics",
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
    title: "Best AC & Home Appliance Repair in Jamnagar | VikalpElectronics",
    description: "Get expert repair for AC, Fridge, Washing Machine & RO in Jamnagar. 90-day warranty, genuine parts, and same-day service. Book now!",
    url: 'https://vikalpelectronics.com',
    siteName: 'VikalpElectronics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VikalpElectronics - #1 Appliance Repair in Jamnagar",
    description: "Expert AC, Fridge & Washing Machine repair in Jamnagar. Fast service, affordable rates. Call 9374170929.",
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
