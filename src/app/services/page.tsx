import Link from "next/link";
import { FaSnowflake, FaTv, FaVideo, FaTools, FaTint, FaFan, FaWrench } from "react-icons/fa";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Home Appliance Repair & Installation Services in Jamnagar | Vikalp Electronics",
    description: "Explore our wide range of home appliance services in Jamnagar: AC installation & repair, fridge servicing, washing machine repair, CCTV camera installation, RO purifier repair & Smart TV service.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/services",
    },
    openGraph: {
        title: "All Home Appliance Services in Jamnagar | Vikalp Electric & Refrigeration",
        description: "Doorstep AC repair, Refrigerator service, Washing machine fix, RO water filter service, and CCTV installation in Jamnagar. 90-day warranty on all repairs.",
        url: "https://vikalp-electronics.vercel.app/services",
    }
};

const services = [
    {
        icon: <FaWrench className="text-4xl text-primary mb-4" />,
        title: "AC Repair & Servicing",
        desc: "Cooling issues, gas leakage, coil cleaning, compressor repair, and seasonal maintenance for Split & Window ACs.",
        link: "/services/ac-repair-jamnagar"
    },
    {
        icon: <FaSnowflake className="text-4xl text-primary mb-4" />,
        title: "AC Installation & Uninstallation",
        desc: "Professional Split & Window AC wall mounting, copper piping, vacuuming, and reliable shifting services in Jamnagar.",
        link: "/services/ac-installation-jamnagar"
    },
    {
        icon: <FaTools className="text-4xl text-primary mb-4" />,
        title: "Fridge & Refrigerator Repair",
        desc: "Cooling issues, gas refilling (R134a/R600a), thermostat, and inverter compressor repair for all single and double door models.",
        link: "/services/fridge-repair-jamnagar"
    },
    {
        icon: <FaFan className="text-4xl text-primary mb-4" />,
        title: "Washing Machine Repair",
        desc: "Fix spinning issues, water drainage failure, PCB motherboard errors, and drum noise for Top Load and Front Load machines.",
        link: "/services/washing-machine-repair-jamnagar"
    },
    {
        icon: <FaTv className="text-4xl text-primary mb-4" />,
        title: "Smart TV & LED Repair",
        desc: "Doorstep Smart TV, Android LED, and 4K TV repair for Samsung, LG, Sony, Mi. Backlight fix, screen issues, and motherboard repair.",
        link: "/services/tv-repair-jamnagar"
    },
    {
        icon: <FaVideo className="text-4xl text-primary mb-4" />,
        title: "CCTV Camera Installation",
        desc: "HD & IP CCTV camera installation, DVR/NVR configuration, and mobile view setup for homes and businesses across Jamnagar.",
        link: "/services/cctv-installation-jamnagar"
    },
    {
        icon: <FaTint className="text-4xl text-primary mb-4" />,
        title: "RO Water Filter Service",
        desc: "TDS adjustment, RO membrane replacement, carbon filter change, and leak repairs for Kent, Aquaguard, and all RO purifiers.",
        link: "/services/ro-water-filter-service-jamnagar"
    },
];

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://vikalp-electronics.vercel.app/services",
                "url": "https://vikalp-electronics.vercel.app/services",
                "name": "Home Appliance Services in Jamnagar - Vikalp Electric & Refrigeration",
                "description": "Comprehensive range of repair and installation services for ACs, Refrigerators, Washing Machines, CCTV, and RO Purifiers in Jamnagar.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Shop No. 1, Murlidhar Nagar 1, Gokul Nagar",
                        "addressLocality": "Jamnagar",
                        "addressRegion": "Gujarat",
                        "addressCountry": "IN"
                    }
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
                    }
                ]
            },
            {
                "@type": "ItemList",
                "itemListElement": services.map((s, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": s.title,
                    "url": `https://vikalp-electronics.vercel.app${s.link}`,
                    "description": s.desc
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

            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our Expert Services in Jamnagar
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        From AC repair to CCTV security and Smart TV fixes, Vikalp Electric & Refrigeration offers trusted, doorstep home appliance solutions with a 90-day warranty.
                    </p>
                </div>
            </div>

            <Section id="all-services" className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Service Details <span>&rarr;</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

