import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vikalp-electronics.vercel.app'),
  title: {
    default: "Best AC Repair & Home Appliance Service in Jamnagar | Vikalp Electric & Refrigeration",
    template: "%s | Vikalp Electric & Refrigeration Jamnagar",
  },
  description: "Looking for best AC service in Jamnagar? Vikalp Electric & Refrigeration offers 24/7 expert AC repair, gas charging, installation, fridge & washing machine repair in Jamnagar. Call +919374170929.",
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
    "Fridge gas charging Jamnagar",
    "Washing machine service Jamnagar",
    "RO filter service Jamnagar",
    "CCTV camera installation Jamnagar",
    "Smart TV repair Jamnagar",
    "Vikalp Electric & Refrigeration",
    "Gokul Nagar Jamnagar electrician",
    "Patel Colony AC repair",
    "Digjam Circle AC technician"
  ],
  authors: [{ name: "Vikalp Electric & Refrigeration", url: "https://vikalp-electronics.vercel.app" }],
  creator: "Vikalp Electric & Refrigeration",
  publisher: "Vikalp Electric & Refrigeration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vikalp-electronics.vercel.app",
  },
  icons: {
    icon: '/img/logo.png',
    shortcut: '/img/logo.png',
    apple: '/img/logo.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: "Best AC & Home Appliance Repair in Jamnagar | Vikalp Electric & Refrigeration",
    description: "Expert AC Repair, Gas Charging, Installation, Fridge & Appliance Service in Jamnagar. 24/7 Doorstep Service for all brands. Call +919374170929.",
    url: 'https://vikalp-electronics.vercel.app',
    siteName: 'Vikalp Electric & Refrigeration',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/img/aboutimg.jpg',
        width: 1200,
        height: 630,
        alt: 'Vikalp Electric & Refrigeration - Top AC and Home Appliance Service Jamnagar',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vikalp Electric & Refrigeration - #1 AC & Appliance Repair in Jamnagar",
    description: "Need fast AC or appliance repair in Jamnagar? 90-day warranty, transparent pricing, 24/7 service. Call +919374170929.",
    images: ['/img/aboutimg.jpg'],
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
  verification: {
    google: "google78c03dc79be17898.html",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Jamnagar, Gujarat, India",
    "geo.position": "22.449979;70.042882",
    "ICBM": "22.449979, 70.042882"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": "https://vikalp-electronics.vercel.app/#business",
        "name": "Vikalp Electric & Refrigeration",
        "alternateName": "Vikalp Electronics Jamnagar",
        "image": "https://vikalp-electronics.vercel.app/img/logo.png",
        "logo": "https://vikalp-electronics.vercel.app/img/logo.png",
        "url": "https://vikalp-electronics.vercel.app",
        "telephone": "+919374170929",
        "email": "vikalpjamnagar@gmail.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1, Murlidhar Nagar 1, Gokul Nagar",
          "addressLocality": "Jamnagar",
          "addressRegion": "Gujarat",
          "postalCode": "361004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.449979,
          "longitude": 70.042882
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Jamnagar" },
          { "@type": "AdministrativeArea", "name": "Gokul Nagar" },
          { "@type": "AdministrativeArea", "name": "Patel Colony" },
          { "@type": "AdministrativeArea", "name": "Digjam Circle" },
          { "@type": "AdministrativeArea", "name": "Khodiyar Colony" },
          { "@type": "AdministrativeArea", "name": "Saru Section" },
          { "@type": "AdministrativeArea", "name": "Valkeshwari" },
          { "@type": "AdministrativeArea", "name": "Bedeshwar" },
          { "@type": "AdministrativeArea", "name": "Gulabnagar" },
          { "@type": "AdministrativeArea", "name": "Reliance Greens Area" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "248",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://facebook.com/vikalpelectronics",
          "https://instagram.com/vikalpelectronics"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://vikalp-electronics.vercel.app/#website",
        "url": "https://vikalp-electronics.vercel.app",
        "name": "Vikalp Electric & Refrigeration",
        "description": "Best AC Repair, Gas Refill & Home Appliance Service in Jamnagar",
        "publisher": {
          "@id": "https://vikalp-electronics.vercel.app/#business"
        },
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
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

