import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaWrench, FaPhoneAlt, FaWhatsapp, FaCheck } from "react-icons/fa";

export const metadata: Metadata = {
    title: "AC Repair Service in Jamnagar | Fast & Reliable AC Station Near Me",
    description: "Urgent AC repair in Jamnagar. We fix cooling issues, gas leakage, and noise problems. Expert technicians for Voltas, LG, Samsung split & window ACs.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/ac-repair-jamnagar",
    },
};

export default function ACRepairPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AC Repair",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VikalpElectronics",
            "telephone": "+919374170929"
        },
        "areaServed": "Jamnagar",
        "description": "Expert AC repair services for cooling issues, leakage, and breakdown."
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-secondary text-white py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert AC Repair Service in Jamnagar</h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">AC not cooling? Making noise? Get it fixed today by Jamnagar's most trusted technicians.</p>
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
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Visiting Charge Adjust in Repair</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Genuine Spare Parts</span></li>
                            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> <span>Same Day Service</span></li>
                        </ul>
                        <Button href="https://wa.me/919374170929" variant="secondary" className="w-full justify-center !bg-green-600 hover:!bg-green-700 border-none text-white">
                            <FaWhatsapp className="mr-2" /> Schedule Repair on WhatsApp
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
