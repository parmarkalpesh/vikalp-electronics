import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

import Clients from "@/components/sections/Clients";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VikalpElectronics",
    "image": "https://vikalpelectronics.com/img/logo.png", // Ensure this exists or use a generic one
    "@id": "https://vikalpelectronics.com",
    "url": "https://vikalpelectronics.com",
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
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
