import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight, FaTools, FaSnowflake, FaVideo, FaFan } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Vikalp Electric & Refrigeration Blog | AC, Fridge & Appliance Tips Jamnagar",
    description: "Expert tips, maintenance guides, and troubleshooting advice on AC repair, refrigerator servicing, washing machines, and CCTV security in Jamnagar.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/blog",
    },
    openGraph: {
        title: "Vikalp Electronics Blog | Appliance Repair Guides Jamnagar",
        description: "Read expert advice from Jamnagar's top appliance technicians on AC servicing, fridge gas refilling, and CCTV security.",
        url: "https://vikalp-electronics.vercel.app/blog",
    }
};

const posts = [
    {
        title: "Complete AC Servicing & Maintenance Guide in Jamnagar (2026)",
        date: "March 2026",
        category: "AC Servicing",
        icon: <FaSnowflake className="text-primary text-3xl" />,
        excerpt: "Learn why regular jet-pump AC servicing lowers electricity bills by 30%, prevents gas leakage, and protects your compressor during intense Jamnagar summer.",
        slug: "/blog/ac-servicing-guide-jamnagar"
    },
    {
        title: "Why is Your Refrigerator Not Cooling? Causes & Repair Solutions",
        date: "March 2026",
        category: "Fridge Repair",
        icon: <FaTools className="text-primary text-3xl" />,
        excerpt: "Is your fridge running but not cooling? Diagnosing gas leaks, compressor starter relays, thermostat sensors, and door gaskets for all major brands.",
        slug: "/blog/fridge-repair-cooling-problems-guide"
    },
    {
        title: "Washing Machine Not Spinning or Draining? Expert Repair Guide",
        date: "March 2026",
        category: "Washing Machine",
        icon: <FaFan className="text-primary text-3xl" />,
        excerpt: "Step-by-step troubleshooting for washing machine spin failures, drain pump clogs, drive belts, and error codes in Jamnagar households.",
        slug: "/blog/washing-machine-maintenance-tips"
    },
    {
        title: "Best CCTV Camera Setup for Home & Business in Jamnagar",
        date: "March 2026",
        category: "CCTV Security",
        icon: <FaVideo className="text-primary text-3xl" />,
        excerpt: "Compare Hikvision vs CP Plus, IP vs HD cameras, night vision clarity, and how to set up 24/7 live mobile monitoring for your shop or home.",
        slug: "/blog/cctv-installation-guide-jamnagar"
    }
];

export default function BlogPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": "https://vikalp-electronics.vercel.app/blog",
                "name": "Vikalp Electric & Refrigeration Knowledge Blog",
                "description": "Appliance maintenance tips, AC repair guides, and home electrical security advice for Jamnagar residents.",
                "publisher": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "image": "https://vikalp-electronics.vercel.app/img/logo.png"
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
                        "name": "Blog",
                        "item": "https://vikalp-electronics.vercel.app/blog"
                    }
                ]
            },
            {
                "@type": "ItemList",
                "itemListElement": posts.map((post, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": post.title,
                    "url": `https://vikalp-electronics.vercel.app${post.slug}`
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
                        Home Appliance Repair & Maintenance Blog
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Expert tips, troubleshooting advice & maintenance guides from Jamnagar's top appliance technicians.
                    </p>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                                            {post.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-secondary px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <FaCalendarAlt className="text-primary text-xs" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-secondary mb-3 leading-snug hover:text-primary transition-colors">
                                        <Link href={post.slug}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <Link
                                    href={post.slug}
                                    className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-base"
                                >
                                    Read Full Guide <FaArrowRight />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}

