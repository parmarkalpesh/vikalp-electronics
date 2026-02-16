import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Products from "@/components/sections/Products";
import SEOKeywords from "@/components/sections/SEOKeywords";

import Clients from "@/components/sections/Clients";

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
      "latitude": 22.4707,
      "longitude": 70.0577
    },
    "openingHoursSpecification": {
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
    "areaServed": {
      "@type": "City",
      "name": "Jamnagar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repair & Service"
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <SEOKeywords />
      <Contact />
    </main>
  );
}
