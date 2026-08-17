import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaWrench, FaPhoneAlt, FaWhatsapp, FaCheck } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "Best AC Repair Service in Jamnagar | AC Service Center Near Me",
    description: "Looking for best AC repair in Jamnagar? We fix cooling issues, gas leakage & breakdown. 90-day warranty, 15+ years exp. Split & Window AC specialist. Call +919374170929.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/services/ac-repair-jamnagar",
    },
    openGraph: {
        title: "Best AC Repair Service in Jamnagar | Vikalp Electronics",
        description: "Doorstep AC repair and gas charging in Jamnagar. Fast 2-hour technician arrival, genuine parts, and 90-day warranty.",
        url: "https://vikalp-electronics.vercel.app/services/ac-repair-jamnagar",
    }
};

export default function ACRepairPage() {
    const faqItems = [
        {
            question: "How much does AC service cost in Jamnagar?",
            answer: "Our AC service charges in Jamnagar start from ₹499 for general service. Repair costs depend on the issue, but we offer transparent pricing before starting work."
        },
        {
            question: "Do you provide warranty on AC repairs?",
            answer: "Yes, we provide a 90-day warranty on all AC repairs and spare parts replaced by us."
        },
        {
            question: "How quickly can you fix my AC?",
            answer: "We offer same-day AC repair service in Jamnagar. In most cases, our technician arrives within 2 hours of booking."
        },
        {
            question: "Which AC brands do you repair?",
            answer: "We repair all major brands including Voltas, LG, Samsung, Daikin, Hitachi, Lloyd, Panasonic, and Carrier."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "AC Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "priceRange": "₹₹",
                    "image": "https://vikalp-electronics.vercel.app/img/logo.png"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "Expert AC repair services for cooling issues, leakage, and breakdown in Jamnagar.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "156"
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
                        "name": "AC Repair Jamnagar",
                        "item": "https://vikalp-electronics.vercel.app/services/ac-repair-jamnagar"
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

            <div className="bg-secondary text-white py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Best AC Repair Service in Jamnagar</h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">AC not cooling? Making noise? Get it fixed today by Jamnagar's most trusted technicians. 100% Satisfaction Guaranteed.</p>
                    <Button href="tel:+919374170929" variant="primary" className="text-lg">
                        <FaPhoneAlt className="mr-2" /> Call Expert Now
                    </Button>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle title="Common AC Problems We Fix" subtitle="AC Repair Solutions" />
                        <ul className="space-y-4 text-lg text-gray-700">
                            {[
                                "AC blowing warm air (No Cooling)",
                                "Water leakage from indoor unit",
                                "High electricity bill due to low efficiency",
                                "Loud noise from outdoor unit",
                                "Gas leakage and refilling",
                                "PCB circuit repair",
                                "Compressor replacement"
                            ].map((issue, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaWrench className="text-primary mt-1 flex-shrink-0" /> {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Why we are best in Jamnagar?</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>90-Day Warranty on Repairs</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>No Hidden Charges</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Genuine Spare Parts</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Same Day Service</span></li>
                        </ul>
                        <Button href="https://wa.me/919374170929" variant="secondary" className="w-full justify-center !bg-green-600 hover:!bg-green-700 border-none text-white">
                            <FaWhatsapp className="mr-2" /> Schedule Repair on WhatsApp
                        </Button>
                    </div>
                </div>
            </Section>

            <FAQ items={faqItems} title="AC Repair FAQs" />
            <RelatedServices currentPath="/services/ac-repair-jamnagar" />
        </main>
    );
}
