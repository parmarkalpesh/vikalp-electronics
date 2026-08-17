import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CostCalculator from "@/components/sections/CostCalculator";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Products from "@/components/sections/Products";
import SEOKeywords from "@/components/sections/SEOKeywords";
import Clients from "@/components/sections/Clients";
import QuickActionDrawer from "@/components/ui/QuickActionDrawer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vikalp Electric & Refrigeration",
    "image": "https://vikalp-electronics.vercel.app/img/logo.png",
    "@id": "https://vikalp-electronics.vercel.app",
    "url": "https://vikalp-electronics.vercel.app",
    "telephone": "+919374170929",
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
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
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
    "areaServed": {
      "@type": "City",
      "name": "Jamnagar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Appliance & AC Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repair & Servicing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Gas Charging"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerator Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Washing Machine Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart TV Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CCTV Camera Installation"
          }
        }
      ]
    },
    "sameAs": [
      "https://facebook.com/vikalpelectronics",
      "https://instagram.com/vikalpelectronics"
    ],
    "priceRange": "₹₹"
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Clients />
      <Services />
      <CostCalculator />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <SEOKeywords />
      <Contact />
      <QuickActionDrawer />
    </main>
  );
}

