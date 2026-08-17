import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaTv, FaPhoneAlt, FaWhatsapp, FaCheck, FaShieldAlt, FaTools } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "Best Smart TV & LED TV Repair in Jamnagar | TV Repair Service Center",
    description: "Expert Smart TV, LED, OLED & 4K TV repair service in Jamnagar. Screen replacement, sound fix, power supply repair for Samsung, LG, Sony, Mi TV. Doorstep service.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/services/tv-repair-jamnagar",
    },
    openGraph: {
        title: "Best Smart TV & LED Repair Service in Jamnagar | Vikalp Electronics",
        description: "Fast doorstep Smart TV and LED TV repair in Jamnagar. Certified technicians, genuine display panels and motherboard repairs with 90-day warranty.",
        url: "https://vikalp-electronics.vercel.app/services/tv-repair-jamnagar",
    }
};

export default function TVRepairPage() {
    const faqItems = [
        {
            question: "What TV brands do you repair in Jamnagar?",
            answer: "We service and repair all major television brands including Samsung, LG, Sony Bravia, Mi/Xiaomi, OnePlus, TCL, Panasonic, VU, Sansui, and Toshiba in Jamnagar."
        },
        {
            question: "My LED TV has sound but no picture (Black Screen). Can it be fixed?",
            answer: "Yes, this is usually caused by backlight LED strip failure or a T-Con board malfunction. Our expert technicians can repair or replace the LED backlight strips onsite on the same day."
        },
        {
            question: "Do you provide TV motherboard (PCB) and power supply repair?",
            answer: "Yes, we have specialized component-level repair equipment to fix TV motherboards, power boards, and inverter circuits, saving you the high cost of total board replacement."
        },
        {
            question: "Do you offer doorstep inspection for TVs in Jamnagar?",
            answer: "Yes, our technicians provide quick doorstep inspection across all areas of Jamnagar including Patel Colony, Digjam Circle, Gokul Nagar, Valkeshwari, and Khodiyar Colony."
        },
        {
            question: "Is there a warranty on TV repairs and parts replaced?",
            answer: "Yes, we provide a 90-day guarantee on all replacement parts and repair work conducted by Vikalp Electric & Refrigeration."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Television Repair Service",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "priceRange": "₹₹",
                    "image": "https://vikalp-electronics.vercel.app/img/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Shop No. 1, Murlidhar Nagar 1, Gokul Nagar",
                        "addressLocality": "Jamnagar",
                        "addressRegion": "Gujarat",
                        "postalCode": "361004",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "Professional Smart TV, Android TV, and LED TV repair service in Jamnagar.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "134"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://vikalp-electronics.vercel.app"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://vikalp-electronics.vercel.app/services"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Smart TV Repair Jamnagar",
                        "item": "https://vikalp-electronics.vercel.app/services/tv-repair-jamnagar"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Header */}
            <div className="bg-secondary text-white py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-accent text-sm font-semibold mb-4">
                        <FaTv /> Trusted TV Repair Specialists in Jamnagar
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Best Smart TV & LED TV Repair in Jamnagar
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        No display? Sound issues? Motherboard failure? Get your Smart LED, OLED, or 4K TV repaired today with original components and a 90-day warranty.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="tel:+919374170929" variant="primary" className="text-lg">
                            <FaPhoneAlt className="mr-2" /> Call TV Expert Now
                        </Button>
                        <Button href="https://wa.me/919374170929?text=I%20need%20Smart%20TV%20Repair%20Service%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-lg border-none text-white">
                            <FaWhatsapp className="mr-2" /> Book on WhatsApp
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Information Section */}
            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle title="Common Smart TV Issues We Fix" subtitle="Expert Television Solutions" />
                        <ul className="space-y-4 text-lg text-gray-700">
                            {[
                                "Sound is working but screen is black (Backlight failure)",
                                "TV is not turning on (Power Supply / Dead TV)",
                                "Horizontal or vertical lines across the LED screen",
                                "WiFi connection & Smart TV Android OS booting issues",
                                "No sound or distorted audio from speakers",
                                "HDMI port / Audio jack not detecting devices",
                                "Motherboard (PCB) circuit component troubleshooting"
                            ].map((issue, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaTools className="text-primary mt-1 flex-shrink-0" /> {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Why Choose Vikalp for TV Repair?</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Doorstep TV Inspection in Jamnagar</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Genuine Spare Parts & Display Panels</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>90-Day Service Guarantee</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Transparent Pricing Before Work Begins</span></li>
                        </ul>
                        <Button href="tel:+919374170929" variant="primary" className="w-full justify-center text-lg">
                            <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Brands Supported */}
            <Section className="bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-4">TV Brands We Service in Jamnagar</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We repair all leading Smart TV, 4K UHD, and Android LED brands with complete factory-grade precision.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Samsung", "LG", "Sony Bravia", "Mi / Xiaomi", "OnePlus", "TCL", "Panasonic", "VU", "Sansui", "Toshiba", "Realme", "Hisense"].map((brand, i) => (
                            <span key={i} className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-xl font-bold text-secondary text-lg">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>

            <FAQ items={faqItems} title="Smart TV Repair FAQs" />
            <RelatedServices currentPath="/services/tv-repair-jamnagar" />
        </main>
    );
}
