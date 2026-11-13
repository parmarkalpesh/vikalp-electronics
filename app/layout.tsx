import type { Metadata } from 'next';
import './globals.css';
import { business, origin } from './data';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: 'AC Repair & Appliance Services in Jamnagar | Vikalp', template: '%s | Vikalp Jamnagar' },
  description: 'Vikalp Electric & Refrigeration in Gokul Nagar, Jamnagar. AC servicing, refrigerator and washing machine repair, CCTV and RO water purifier service. Call +91 93741 70929.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Vikalp Electric & Refrigeration', title: 'AC Repair & Appliance Services in Jamnagar | Vikalp', description: 'Local AC repair, refrigeration and appliance care in Jamnagar.', images: [{ url: '/home-comfort.webp', width: 1536, height: 1024, alt: 'Illustrative living room with a split air conditioner' }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/vikalp-logo.png', apple: '/vikalp-logo.png' },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business)}} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite','@id':origin+'/#website',name:'Vikalp Electric & Refrigeration',url:origin,publisher:{'@id':origin+'/#business'}})}}/>{children}</body></html>;
}
