import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Why is Your Fridge Not Cooling? Causes & Repair Solutions in Jamnagar",
    description: "Troubleshooting guide for refrigerator cooling issues in Jamnagar. Learn about gas leaks, compressor start relays, thermostat problems & repair costs.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/blog/fridge-repair-cooling-problems-guide",
    },
    openGraph: {
        title: "Why is Your Fridge Not Cooling? Refrigerator Repair Guide Jamnagar",
        description: "Doorstep fridge repair tips and troubleshooting for single/double door refrigerators in Jamnagar.",
        url: "https://vikalp-electronics.vercel.app/blog/fridge-repair-cooling-problems-guide",
    }
};

export default function FridgeRepairGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": "Why is Your Fridge Not Cooling? Causes & Solutions in Jamnagar",
                "description": "Comprehensive troubleshooting guide for refrigerator cooling failures, compressor issues, and gas refilling in Jamnagar.",
                "author": {
                    "@type": "Organization",
                    "name": "Vikalp Electric & Refrigeration",
                    "url": "https://vikalp-electronics.vercel.app"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Vikalp Electric & Refrigeration",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://vikalp-electronics.vercel.app/img/logo.png"
                    }
                },
                "datePublished": "2026-03-10T08:00:00+05:30",
                "dateModified": "2026-08-18T00:00:00+05:30",
                "mainEntityOfPage": "https://vikalp-electronics.vercel.app/blog/fridge-repair-cooling-problems-guide"
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
                        "name": "Blog",
                        "item": "https://vikalp-electronics.vercel.app/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Fridge Cooling Repair Guide",
                        "item": "https://vikalp-electronics.vercel.app/blog/fridge-repair-cooling-problems-guide"
                    }
                ]
            }
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:underline mb-6 text-sm font-medium">
                        <FaArrowLeft /> Back to Blog
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Why is Your Refrigerator Not Cooling? Causes & Solutions
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-accent" /> Published 2026</span>
                        <span className="flex items-center gap-2"><FaUser className="text-accent" /> Vikalp Appliance Experts</span>
                    </div>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed text-lg space-y-6">
                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        A refrigerator that suddenly stops chilling can lead to spoiled groceries within hours. In Jamnagar, warm temperatures mean your fridge compressor operates under constant load. Here are the top 5 causes of fridge cooling issues and how they can be repaired.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        1. Refrigerant Gas Leakage (Low Gas)
                    </h2>
                    <p>
                        If the light inside turns on and the motor hums, but the freezer is barely cold and the lower compartment is completely warm, refrigerant gas (R134a or R600a) has likely leaked from corroded copper coils or joints.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        2. Faulty Compressor Starter Relay / Capacitor
                    </h2>
                    <p>
                        Does your fridge make a repeated clicking noise every 2 to 3 minutes? That is the thermal overload protector clicking when the compressor fails to start. Replacing the relay starter usually restores normal operation immediately without needing a new compressor.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        3. Defrost Timer or Bi-Metal Thermostat Failure in Frost-Free Fridges
                    </h2>
                    <p>
                        In double-door frost-free refrigerators (LG, Samsung, Whirlpool), an automatic defrost heater melts ice off the cooling coil every 8 hours. If the timer or sensor fails, frost accumulates into a solid block of ice that blocks airflow to the fresh food zone.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        4. Dirty Condenser Coils & Door Gasket Seal
                    </h2>
                    <p>
                        Dust on rear or bottom condenser coils prevents heat dissipation. Similarly, a cracked rubber gasket lets humid warm air leak into the cabinet, causing frost buildup and loss of cooling efficiency.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl my-10 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-3">Need Fast Doorstep Refrigerator Repair in Jamnagar?</h3>
                        <p className="text-gray-600 mb-6">Our certified technicians carry genuine compressors, relays, and gas charging kits. 90-day warranty on all repairs.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="tel:+919374170929" variant="primary" className="text-lg">
                                <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                            </Button>
                            <Button href="https://wa.me/919374170929?text=I%20need%20Fridge%20Repair%20Service%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-white border-none text-lg">
                                <FaWhatsapp className="mr-2" /> Book Fridge Technician
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
