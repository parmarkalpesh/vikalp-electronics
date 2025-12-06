import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaPhoneAlt, FaWhatsapp, FaStar } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Fridge Repair in Jamnagar | Refrigerator Service Center Near Me",
    description: "Best fridge repair service in Jamnagar. We repair Single Door, Double Door, and Side-by-Side refrigerators. Gas filling and compressor repair.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/fridge-repair-jamnagar",
    },
};

export default function FridgeRepairPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Appliance Repair",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VikalpElectronics",
            "telephone": "+919374170929"
        },
        "areaServed": "Jamnagar",
        "description": "Expert Refrigerator and Fridge repair services."
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/3">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Fridge Repair in Jamnagar</h1>
                        <p className="text-lg text-gray-300 mb-6">Is your refrigerator not cooling or making noise? We provide fast doorstep repair for all brands (LG, Samsung, Whirlpool, Godrej, Haier).</p>
                        <div className="flex gap-4">
                            <Button href="tel:+919374170929" variant="primary">Call Now</Button>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 flex flex-col items-center bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                        <span className="text-4xl font-bold text-accent">15+</span>
                        <span className="text-sm">Years Experience</span>
                        <div className="flex text-yellow-400 mt-2">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>

            <Section>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-secondary">Types of Refrigerators We Repair</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {["Single Door Fridge", "Double Door Fridge", "Side-by-Side Refrigerator", "Deep Freezers", "Inverter Technology Fridge"].map((type, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-secondary">{type}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-blue-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Fridge Gas Filling Cost in Jamnagar</h2>
                        <p className="text-gray-700 mb-4">
                            We use only high-grade refrigerants (R134a, R600a) for gas filling. Our gas charging service comes with a leakage check and performance guarantee.
                        </p>
                        <p className="font-bold text-primary">Call us for a free estimate!</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}
