import type { Metadata } from 'next';
import './globals.css';
import { business, origin } from './data';
import { GA4Analytics } from './components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: 'AC Repair & Appliance Services in Jamnagar | Vikalp Electric',
    template: '%s | Vikalp Electric & Refrigeration Jamnagar',
  },
  description:
    'Vikalp Electric & Refrigeration in Gokul Nagar, Jamnagar. Expert AC repair, refrigerator repair, washing machine repair, CCTV installation, RO water purifier service and electrical repairs. Call +91 93741 70929.',
  keywords: [
    'AC repair Jamnagar',
    'AC service Jamnagar',
    'refrigerator repair Jamnagar',
    'washing machine repair Jamnagar',
    'electrician Jamnagar',
    'CCTV installation Jamnagar',
    'RO water purifier service Jamnagar',
    'home appliance repair Jamnagar',
    'Vikalp Electric Jamnagar',
    'appliance repair Gokul Nagar',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Vikalp Electric & Refrigeration',
    title: 'AC Repair & Appliance Services in Jamnagar | Vikalp Electric',
    description:
      'Local AC repair, refrigeration, washing machine, electrical, CCTV and RO water purifier services in Jamnagar. Call +91 93741 70929.',
    url: origin,
    images: [
      {
        url: '/home-comfort.webp',
        width: 1536,
        height: 1024,
        alt: 'Vikalp Electric & Refrigeration — AC and appliance repair services in Jamnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair & Appliance Services in Jamnagar | Vikalp Electric',
    description: 'Local AC repair, refrigerator, washing machine and electrical services in Jamnagar.',
    images: ['/home-comfort.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/vikalp-logo.png', type: 'image/png' },
    ],
    apple: '/vikalp-logo.png',
    shortcut: '/vikalp-logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': origin + '/#website',
  name: 'Vikalp Electric & Refrigeration',
  url: origin,
  description: 'AC repair, refrigeration, washing machine repair, CCTV, RO water purifier and electrical services in Jamnagar.',
  publisher: { '@id': origin + '/#business' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: origin + '/?s={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': origin + '/#organization',
  name: 'Vikalp Electric & Refrigeration',
  alternateName: 'Vikalp Electric & Electronic',
  url: origin,
  logo: {
    '@type': 'ImageObject',
    '@id': origin + '/#logo',
    url: origin + '/vikalp-logo.png',
    contentUrl: origin + '/vikalp-logo.png',
    width: 144,
    height: 144,
    caption: 'Vikalp Electric & Refrigeration logo',
  },
  image: origin + '/home-comfort.webp',
  telephone: '+919374170929',
  email: 'vikalpjamnagar@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 1, Murlidhar Nagar 1, Gokul Nagar',
    addressLocality: 'Jamnagar',
    addressRegion: 'Gujarat',
    postalCode: '361004',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://share.google/8UBPLmqHjFPeUCVdw',
    'https://www.instagram.com/vikalpelectronic_jamnagar/',
    'https://maps.app.goo.gl/fsQ6cfAsD2zguWpf9',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <GA4Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
