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
    default: "VikalpElectronics - Best AC & Home Appliance Repair in Jamnagar",
    template: "%s | VikalpElectronics Jamnagar",
  },
  description: "Expert AC installation, fridge repair, washing machine service, and CCTV installation in Jamnagar. 15+ years of experience. Trusted local technicians. Call 9374170929.",
  keywords: ["AC installation Jamnagar", "AC repair Jamnagar", "Fridge repair Jamnagar", "Washing machine repair Jamnagar", "CCTV installation Jamnagar", "RO service Jamnagar", "VikalpElectronics"],
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
    title: "VikalpElectronics - Expert Home Appliance Repair in Jamnagar",
    description: "Fast & reliable AC, Fridge, Washing Machine repair services in Jamnagar. Certified technicians & genuine parts.",
    url: 'https://vikalpelectronics.com',
    siteName: 'VikalpElectronics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VikalpElectronics - Jamnagar's Trusted Appliance Repair",
    description: "Need AC or Fridge repair in Jamnagar? Contact VikalpElectronics for quick & affordable service.",
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
