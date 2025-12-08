import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "Best Washing Machine Repair in Jamnagar | Top Rated Service Center",
    description: "Top-rated washing machine repair in Jamnagar. We fix drum issues, water leakage, error codes, and PCB problems. All brands serviced. Same day visit.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/washing-machine-repair-jamnagar",
    },
};

export default function WashingMachineRepairPage() {
    const faqItems = [
        {
            question: "How much does washing machine repair cost in Jamnagar?",
            answer: "Visiting charges are ₹199-₹299. Repair costs depend on the part replacement (e.g., motor, PCB, drum). We provide an estimate before starting."
        },
        {
            question: "My washing machine is not spinning, can you fix it?",
            answer: "Yes, spinning issues are common and usually caused by a belt, motor, or capacitor fault. Our technicians carry potential spare parts to fix it on the spot."
        },
        {
            question: "Do you repair fully automatic and front-load machines?",
            answer: "Absolutely. We expertise in repairing Front Load, Top Load, and Semi-Automatic washing machines from brands like IFB, Samsung, LG, and Bosch."
        },
        {
            question: "Do you provide a warranty on replaced parts?",
            answer: "Yes, we offer a 3-month warranty on any spare part we replace during the repair."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Washing Machine Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "VikalpElectronics",
                    "telephone": "+919374170929",
                    "image": "https://vikalpelectronics.com/img/logo.png",
                    "priceRange": "₹₹"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "Repair service for Front Load, Top Load, and Semi-automatic washing machines in Jamnagar.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "210"
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
                        "name": "Washing Machine Repair Jamnagar",
                        "item": "https://vikalpelectronics.com/services/washing-machine-repair-jamnagar"
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

            <Section className="bg-gray-50 pt-32 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">Washing Machine Repair in Jamnagar</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        Facing issues like "Washing machine not spinning", "Water not draining", or "Loud noise"?
                        VikalpElectronics is your local expert for quick and effective repairs.
                    </p>
                    <Button href="tel:+919374170929" variant="primary" className="text-lg px-10">
                        <FaPhoneAlt className="mr-2" /> Book Technician
                    </Button>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Brands We Service</h2>
                            <p className="text-gray-600 mb-6">
                                Our technicians are trained to handle the complex mechanisms of all modern washing machines.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["IFB", "Samsung", "LG", "Whirlpool", "Bosch", "Godrej", "Panasonic"].map((brand) => (
                                    <span key={brand} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Common Issues</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Machine not starting (Dead)</li>
                                <li>Drum not rotating</li>
                                <li>Water not filling or draining</li>
                                <li>Excessive vibration during spin</li>
                                <li>Digital Error Codes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <FAQ items={faqItems} title="Washing Machine FAQs" />
            <RelatedServices currentPath="/services/washing-machine-repair-jamnagar" />
        </main>
    );
}
