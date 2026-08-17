import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Best CCTV Camera Setup for Home & Business in Jamnagar (2026 Guide)",
    description: "Guide to choosing CCTV camera systems in Jamnagar. Compare Hikvision vs CP Plus, HD vs IP cameras, night vision, mobile view setup, and installation costs.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/blog/cctv-installation-guide-jamnagar",
    },
    openGraph: {
        title: "Best CCTV Camera Setup for Home & Business in Jamnagar | Vikalp Electronics",
        description: "Everything you need to know about CCTV camera installation, DVR/NVR configuration, and live mobile monitoring in Jamnagar.",
        url: "https://vikalp-electronics.vercel.app/blog/cctv-installation-guide-jamnagar",
    }
};

export default function CCTVInstallationGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": "Best CCTV Camera Setup for Home & Business in Jamnagar",
                "description": "Comprehensive security guide comparing HD Analog, IP cameras, and wireless WiFi surveillance systems for Jamnagar properties.",
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
                "datePublished": "2026-03-20T08:00:00+05:30",
                "dateModified": "2026-08-18T00:00:00+05:30",
                "mainEntityOfPage": "https://vikalp-electronics.vercel.app/blog/cctv-installation-guide-jamnagar"
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
                        "name": "CCTV Installation Guide Jamnagar",
                        "item": "https://vikalp-electronics.vercel.app/blog/cctv-installation-guide-jamnagar"
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
                        Best CCTV Camera Setup for Home & Business in Jamnagar
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-accent" /> March 2026</span>
                        <span className="flex items-center gap-2"><FaUser className="text-accent" /> Vikalp Security Team</span>
                    </div>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed text-lg space-y-6">
                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                        Security for your residence, shop, warehouse, or factory in Jamnagar begins with a reliable CCTV camera system. Here is an overview of how to choose the right setup for your security needs.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        1. HD Analog vs IP Network Cameras
                    </h2>
                    <p>
                        <strong>HD Analog Cameras (2MP to 5MP):</strong> The most economical solution for standard home and small retail shop surveillance. Connects via coaxial 3+1 cable to a DVR unit.
                    </p>
                    <p>
                        <strong>IP Network Cameras (PoE & 4K Ultra HD):</strong> Delivers crisp facial clarity, wide-angle coverage, and license plate recognition. Connects via Cat6 ethernet cables to an NVR with higher scalability.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        2. Color Night Vision vs Standard Infrared
                    </h2>
                    <p>
                        Modern ColorVu and Full-Color cameras by Hikvision and CP Plus feature ultra-bright LED illuminators that capture vivid full-color video even in pitch-black night conditions, eliminating traditional grainy black & white footage.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                        3. Live Mobile Phone Monitoring Setup
                    </h2>
                    <p>
                        At Vikalp Electric & Refrigeration, every installation includes complete cloud network configuration so you can view live feeds, playback recordings, and receive motion alert notifications directly on your Android or iPhone device anywhere in the world.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl my-10 text-center">
                        <h3 className="text-2xl font-bold text-secondary mb-3">Get a Free CCTV Quotation & Site Survey in Jamnagar</h3>
                        <p className="text-gray-600 mb-6">We install genuine Hikvision, CP Plus, Dahua, and Ezviz security systems with 2-year warranty and professional cable laying.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="tel:+919374170929" variant="primary" className="text-lg">
                                <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                            </Button>
                            <Button href="https://wa.me/919374170929?text=I%20want%20CCTV%20Installation%20quote%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-white border-none text-lg">
                                <FaWhatsapp className="mr-2" /> Get WhatsApp Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
