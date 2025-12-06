import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Washing Machine Repair Jamnagar | Automatic & Semi-Automatic Service",
    description: "Top-rated washing machine repair in Jamnagar. We fix drum issues, water leakage, error codes, and PCB problems. All brands serviced.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/washing-machine-repair-jamnagar",
    },
};

export default function WashingMachineRepairPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Washing Machine Repair",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VikalpElectronics",
            "telephone": "+919374170929"
        },
        "areaServed": "Jamnagar",
        "description": "Repair service for Front Load, Top Load, and Semi-automatic washing machines."
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
        </main>
    );
}
