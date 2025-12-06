import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaShieldAlt, FaPhoneAlt, FaEye } from "react-icons/fa";

export const metadata: Metadata = {
    title: "CCTV Installation in Jamnagar | Hikvision, CP Plus Camera Security",
    description: "Secure your home & business with VikalpElectronics CCTV installation in Jamnagar. HD Cameras, Night Vision, Mobile View setup. Sales & Service.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/cctv-installation-jamnagar",
    },
};

export default function CCTVPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Security System Installation",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VikalpElectronics",
            "telephone": "+919374170929"
        },
        "areaServed": "Jamnagar",
        "description": "CCTV Camera Installation and Maintenance Services."
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
        </main>
    );
}
