import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaShieldAlt, FaPhoneAlt, FaEye } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "CCTV Camera Installation in Jamnagar | Security Camera Service",
    description: "Secure your home & business with VikalpElectronics CCTV installation in Jamnagar. Hikvision, CP Plus, HD & WiFi Cameras. Mobile View setup.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/cctv-installation-jamnagar",
    },
};

export default function CCTVPage() {
    const faqItems = [
        {
            question: "How much does it cost to install CCTV cameras?",
            answer: "A basic 2-camera setup starts from ₹10,000 including installation, DVR, and Hard Disk. Prices vary based on brand (Hikvision/CP Plus) and quality (2MP, 5MP, IP Cameras)."
        },
        {
            question: "Can I view the CCTV footage on my mobile phone?",
            answer: "Yes, we configure the system to allow remote viewing on your smartphone (Android & iOS) via internet, so you can monitor your property from anywhere."
        },
        {
            question: "Do you provide warranty on CCTV cameras?",
            answer: "Yes, all our cameras and DVRs come with a 2-year manufacturer warranty."
        },
        {
            question: "Do you install WiFi cameras for home?",
            answer: "Yes, we install wireless WiFi cameras that don't require complex wiring and can be moved easily."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Security System Installation",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "VikalpElectronics",
                    "telephone": "+919374170929",
                    "image": "https://vikalpelectronics.com/img/logo.png",
                    "priceRange": "₹₹₹"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "CCTV Camera Installation and Maintenance Services in Jamnagar.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "84"
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
                        "name": "CCTV Installation Jamnagar",
                        "item": "https://vikalpelectronics.com/services/cctv-installation-jamnagar"
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

            <div className="bg-gray-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <FaShieldAlt className="text-6xl text-accent mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CCTV Camera Installation in Jamnagar</h1>
                    <p className="text-xl text-gray-400 mb-8">Protect What Matters Most. Professional Security Solutions.</p>
                    <Button href="tel:+919374170929" variant="primary" className="text-lg">
                        <FaPhoneAlt className="mr-2" /> Get Free Quote
                    </Button>
                </div>
            </div>

            <Section>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Why Install CCTV in Jamnagar?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {[
                                "24/7 Monitoring on Mobile",
                                "HD & Night Vision Clarity",
                                "Deterrent for Theft & Burglary",
                                "Evidence for Police",
                                "Employee Monitoring",
                                "Peace of Mind"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                                    <div className="bg-primary text-white p-3 rounded-full">
                                        <FaEye />
                                    </div>
                                    <span className="font-medium text-secondary">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Brands We Trust</h3>
                        <p className="text-gray-600">We install world-class security brands like <strong>Hikvision, CP Plus, Dahua, and Ezviz</strong>.</p>
                    </div>
                </div>
            </Section>

            <FAQ items={faqItems} title="CCTV Security FAQs" />
            <RelatedServices currentPath="/services/cctv-installation-jamnagar" />
        </main>
    );
}
