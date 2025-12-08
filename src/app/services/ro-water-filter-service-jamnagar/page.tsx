import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaTint, FaPhoneAlt, FaFilter } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "Best RO Service in Jamnagar | Water Purifier Repair & AMC",
    description: "Pure drinking water solutions in Jamnagar. We repair Kent, Aquaguard, and all RO brands. Filter change, membrane replacement, and installation. Call now.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/ro-water-filter-service-jamnagar",
    },
};

export default function ROServicePage() {
    const faqItems = [
        {
            question: "How often should I change my RO filters?",
            answer: "Sediment and carbon filters should be changed every 6-8 months, while the RO membrane usually lasts 1.5 to 2 years depending on water quality."
        },
        {
            question: "What is the cost of RO service/AMC in Jamnagar?",
            answer: "General service starts at ₹350. We also offer annual maintenance contracts (AMC) starting from ₹2500 which covers filter replacements."
        },
        {
            question: "My RO waste water is flowing continuously, what should I do?",
            answer: "This indicates a solenoid valve failure or membrane issue. Switch off the RO immediately and call our technician."
        },
        {
            question: "Do you repair Kent and Aquaguard models?",
            answer: "Yes, we repair all major RO brands including Kent, Aquaguard, Eureka Forbes, Livpure, and assembled units."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Water Purification Service",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "VikalpElectronics",
                    "telephone": "+919374170929",
                    "image": "https://vikalpelectronics.com/img/logo.png",
                    "priceRange": "₹"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "RO Water Purifier Repair and Installation Services in Jamnagar.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.7",
                    "reviewCount": "98"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://vikalpelectronics.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://vikalpelectronics.com/services"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "RO Service Jamnagar",
                        "item": "https://vikalpelectronics.com/services/ro-water-filter-service-jamnagar"
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

            <Section className="bg-blue-50 py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                            Healthy Water for Your Family in Jamnagar
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Is your RO giving bad taste or low flow? Our expert technicians fix all water purifier issues instantly.
                        </p>
                        <Button href="tel:+919374170929" variant="primary" className="!bg-blue-600 hover:!bg-blue-700">
                            <FaPhoneAlt className="mr-2" /> Book Service
                        </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <FaTint className="text-9xl text-blue-200 animate-bounce" />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-secondary mb-12">Our RO Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "RO Installation", desc: "Professional installation for new units with TDS adjustment." },
                            { title: "Filter Change", desc: "Regular replacement of Sediment, Carbon, and Post-Carbon filters." },
                            { title: "Membrane Replacement", desc: "Genuine RO membrane for TDS reduction and pure taste." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <FaFilter className="text-4xl text-blue-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <FAQ items={faqItems} title="RO Water Purifier FAQs" />
            <RelatedServices currentPath="/services/ro-water-filter-service-jamnagar" />
        </main>
    );
}
