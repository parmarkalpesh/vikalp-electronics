import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Complete AC Servicing & Maintenance Guide in Jamnagar (2026)",
    description: "Expert guide on AC servicing in Jamnagar. Learn how regular maintenance prevents gas leakage, lowers electricity bills by 30%, and extends AC lifespan.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/blog/ac-servicing-guide-jamnagar",
    },
    openGraph: {
        title: "Complete AC Servicing & Maintenance Guide in Jamnagar | Vikalp Electronics",
        description: "Why regular AC maintenance saves money in Jamnagar's intense summer. Key symptoms of low gas, filter issues, and compressor care.",
        url: "https://vikalp-electronics.vercel.app/blog/ac-servicing-guide-jamnagar",
    }
};

export default function ACServicingGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": "Complete AC Servicing & Maintenance Guide in Jamnagar",
                "description": "Expert advice on AC maintenance, cleaning cooling coils, gas pressure testing, and preventing breakdowns during Jamnagar summer.",
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
                "datePublished": "2026-03-01T08:00:00+05:30",
                "dateModified": "2026-08-18T00:00:00+05:30",
                "mainEntityOfPage": "https://vikalp-electronics.vercel.app/blog/ac-servicing-guide-jamnagar"
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
                        "name": "AC Servicing Guide Jamnagar",
                        "item": "https://vikalp-electronics.vercel.app/blog/ac-servicing-guide-jamnagar"
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
                        Complete AC Servicing & Maintenance Guide in Jamnagar
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-accent" /> Updated March 2026</span>
                        <span className="flex items-center gap-2"><FaUser className="text-accent" /> Vikalp Technical Team</span>
                    </div>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed text-lg space-y-6">
                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        Jamnagar experiences high ambient temperatures and coastal humidity during summer. Operating an air conditioner without seasonal maintenance can increase your electricity bills by up to 30% and lead to expensive compressor failures.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        1. Why Regular AC Servicing is Critical in Jamnagar
                    </h2>
                    <p>
                        Air filters and condenser coils accumulate dust, salt moisture from coastal air, and pollen rapidly. When air flow is blocked:
                    </p>
                    <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2"><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /> The compressor runs constantly without cooling the room efficiently.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /> Indoor cooling coils develop ice or start leaking water.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /> Electricity bills soar due to high power draw.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        2. Signs Your AC Needs Immediate Professional Attention
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-secondary text-lg mb-2">Weak or Warm Airflow</h3>
                            <p className="text-sm text-gray-600">Often indicates a choked air filter, clogged blower wheel, or low refrigerant gas (R32 / R410a).</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-secondary text-lg mb-2">Water Dripping from Indoor Unit</h3>
                            <p className="text-sm text-gray-600">Caused by an algae-blocked drain pipe or bent drain tray needing jet-pump cleaning.</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-secondary text-lg mb-2">Foul Odor or Burning Smell</h3>
                            <p className="text-sm text-gray-600">Sign of mildew inside damp cooling coils or loose electrical terminals needing inspection.</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-secondary text-lg mb-2">Loud Vibration Noise</h3>
                            <p className="text-sm text-gray-600">Caused by loose outdoor bracket mountings or fan blade imbalance.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        3. What is Included in Vikalp AC Jet-Pump Servicing?
                    </h2>
                    <p>
                        At Vikalp Electric & Refrigeration, we perform deep jet-pump pressure washing that cleans the innermost layers of indoor and outdoor coils:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>High-pressure jet wash of cooling coils, blower fan, and condenser.</li>
                        <li>Thorough drain tray flushing and chemical anti-bacterial spray.</li>
                        <li>Suction & discharge gas pressure measurement using digital manifold gauges.</li>
                        <li>Capacitor, PCB terminal, and electrical wiring safety check.</li>
                    </ul>

                    {/* CTA Box */}
                    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl my-10 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-3">Book Fast Doorstep AC Service in Jamnagar</h3>
                        <p className="text-gray-600 mb-6">Enjoy ice-cold cooling with our ₹499 Jet-Pump AC maintenance package. Same day technician arrival in all Jamnagar areas.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="tel:+919374170929" variant="primary" className="text-lg">
                                <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                            </Button>
                            <Button href="https://wa.me/919374170929?text=I%20want%20to%20book%20AC%20service%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-white border-none text-lg">
                                <FaWhatsapp className="mr-2" /> Book on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
