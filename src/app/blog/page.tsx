import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
    title: "VikalpElectronics Blog | Home Appliance Maintenance Tips",
    description: "Read expert tips on maintaining your AC, fridge, and washing machine. Best advice from Jamnagar's top appliance technicians.",
    alternates: {
        canonical: "https://vikalpelectronics.com/blog",
    },
};

const posts = [
    {
        title: "How to Choose the Best AC Installation Service in Jamnagar",
        date: "May 15, 2025",
        excerpt: "Looking for new AC installation? Here is what you need to check before hiring a technician in Jamnagar to ensure proper cooling and lifespan.",
        slug: "#"
    },
    {
        title: "5 Signs Your Fridge Needs Immediate Repair",
        date: "April 28, 2025",
        excerpt: "Is your refrigerator making strange noises or not cooling enough? Don't ignore these early warning signs of a breakdown.",
        slug: "#"
    },
    {
        title: "Why Regular AC Maintenance Saves Money in Jamnagar’s Summer",
        date: "March 10, 2025",
        excerpt: "Jamnagar heat can be harsh. Learn how regular AC servicing reduces electricity bills and prevents costly repairs.",
        slug: "#"
    }
];

export default function BlogPage() {
    return (
        <main>
            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Blog</h1>
                    <p className="text-gray-300">Expert tips & news from VikalpElectronics</p>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200">
                                    {/* Placeholder for Blog Image */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                        Blog Image
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <FaCalendarAlt className="text-primary" /> {post.date}
                                    </span>
                                    <h2 className="text-xl font-bold text-secondary mb-3 line-clamp-2">
                                        <Link href={post.slug} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href={post.slug} className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                        Read More <FaArrowRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
