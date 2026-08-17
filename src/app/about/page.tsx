import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FaUserTie, FaAward, FaHistory, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Vikalp Electric & Refrigeration | 15+ Years Appliance Experts Jamnagar",
    description: "Learn about Vikalp Electric & Refrigeration, Jamnagar's most trusted home appliance repair and AC service center since 2010. 15+ years experience, 100% genuine parts & 90-day warranty.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/about",
    },
    openGraph: {
        title: "About Vikalp Electric & Refrigeration | #1 Appliance Experts in Jamnagar",
        description: "15+ years of trusted AC repair, refrigerator service, and CCTV security installations across Jamnagar.",
        url: "https://vikalp-electronics.vercel.app/about",
    }
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AboutPage",
                "@id": "https://vikalp-electronics.vercel.app/about",
                "url": "https://vikalp-electronics.vercel.app/about",
                "name": "About Vikalp Electric & Refrigeration Jamnagar",
                "description": "Learn about Vikalp Electric & Refrigeration, trusted home appliance repair and cooling solutions in Jamnagar since 2010."
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
                        "name": "About Us",
                        "item": "https://vikalp-electronics.vercel.app/about"
                    }
                ]
            }
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Vikalp Electric & Refrigeration</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Serving Jamnagar with honesty, certified technical expertise, and dedication for over 15 years.
                    </p>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Our Story & Commitment</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2010, <strong>Vikalp Electric & Refrigeration</strong> started as a dedicated repair workshop in Gokul Nagar, Jamnagar. Over the years, we have grown into Jamnagar's leading multi-brand home appliance service center, trusted by more than 10,000+ households, offices, hotels, and retail businesses.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our mission is simple: <strong>To provide prompt, transparent, and high-quality repair services</strong> with a 90-day warranty. Whether it is emergency AC repair on a 42°C summer afternoon or fixing a commercial display chiller, our technicians are always ready.
                        </p>
                        <div className="space-y-2 mb-8">
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <span>Certified & Background-Verified Field Technicians</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <span>100% Original Spare Parts with Manufacturer Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                <span>Doorstep Service across all Jamnagar Localities</span>
                            </div>
                        </div>
                        <Button href="tel:+919374170929" variant="primary" className="text-lg">
                            <FaPhoneAlt className="mr-2" /> Speak with Our Team
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { icon: <FaHistory />, title: "15+ Years Experience", desc: "Proudly serving Jamnagar and surrounding Saurashtra region since 2010" },
                            { icon: <FaUserTie />, title: "Expert Certified Team", desc: "Trained in latest Inverter AC, PCB circuit & refrigeration technologies" },
                            { icon: <FaAward />, title: "90-Day Quality Guarantee", desc: "Complete peace of mind on all parts replaced and servicing conducted" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100/50 shadow-sm hover:shadow-md transition-all">
                                <div className="text-4xl text-primary bg-white p-4 rounded-2xl shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

