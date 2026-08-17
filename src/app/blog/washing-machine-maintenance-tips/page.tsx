import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Washing Machine Not Spinning or Draining? Expert Repair Guide Jamnagar",
    description: "Troubleshooting guide for Top Load & Front Load washing machine problems in Jamnagar. Fix drainage, drum spinning, error codes, and motor faults.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/blog/washing-machine-maintenance-tips",
    },
    openGraph: {
        title: "Washing Machine Not Spinning or Draining? Repair Guide Jamnagar",
        description: "Doorstep washing machine troubleshooting for IFB, LG, Samsung, Whirlpool & Bosch in Jamnagar.",
        url: "https://vikalp-electronics.vercel.app/blog/washing-machine-maintenance-tips",
    }
};

export default function WashingMachineGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": "Washing Machine Not Spinning or Draining? Expert Repair Guide",
                "description": "Essential troubleshooting tips for washing machine spin failure, drainage blocks, and error codes in Jamnagar.",
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
                "datePublished": "2026-03-15T08:00:00+05:30",
                "dateModified": "2026-08-18T00:00:00+05:30",
                "mainEntityOfPage": "https://vikalp-electronics.vercel.app/blog/washing-machine-maintenance-tips"
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
                        "name": "Washing Machine Repair Guide",
                        "item": "https://vikalp-electronics.vercel.app/blog/washing-machine-maintenance-tips"
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
                        Washing Machine Not Spinning or Draining? Expert Guide
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-accent" /> March 2026</span>
                        <span className="flex items-center gap-2"><FaUser className="text-accent" /> Vikalp Service Engineers</span>
                    </div>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed text-lg space-y-6">
                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        Washing machines are essential household appliances. When your washing machine refuses to spin, leaves clothes soaking wet, or displays digital error codes (like OE, UE, dE, or 5E), here is what you need to know.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        1. Drain Pump Blockage or Coin Trap Clog
                    </h2>
                    <p>
                        In automatic front load and top load machines, small items like coins, hairpins, and lint collect in the drain filter pump. If water cannot pump out within 5 minutes, safety sensors prevent the drum from spinning.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        2. Broken Drive Belt or Motor Capacitor
                    </h2>
                    <p>
                        If the motor hums but the drum fails to rotate, the rubber drive belt has either slipped off the pulley or snapped. In semi-automatic machines, a weak spin motor capacitor prevents the spinner from gaining high RPM speed.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        3. Door Lid Switch & Lock Sensor Malfunction
                    </h2>
                    <p>
                        For user safety, high-speed spin cycles will not start if the door switch sensor fails to register a fully locked lid. Replacing the safety switch resolves the "dE" (Door Error) code instantly.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        4. Impact of Hard Water in Jamnagar
                    </h2>
                    <p>
                        Jamnagar groundwater can contain mineral hardness that builds limescale around the heating element and drum bearings. Running a monthly descaling cycle with descaling powder helps preserve the life of your machine.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl my-10 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-3">Book Washing Machine Repair in Jamnagar</h3>
                        <p className="text-gray-600 mb-6">Expert doorstep repairs for IFB, LG, Samsung, Whirlpool, Bosch, and Godrej. 90-day warranty on all spare parts.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="tel:+919374170929" variant="primary" className="text-lg">
                                <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                            </Button>
                            <Button href="https://wa.me/919374170929?text=I%20need%20Washing%20Machine%20Repair%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-white border-none text-lg">
                                <FaWhatsapp className="mr-2" /> Book on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
