import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FaUserTie, FaAward, FaHistory } from "react-icons/fa";

export const metadata: Metadata = {
    title: "About Vikalp Electric & Refrigeration | 15+ Years of Appliance Repair in Jamnagar",
    description: "Learn about Vikalp Electric & Refrigeration, Jamnagar's most trusted home appliance repair service since 2010. Expert team, genuine parts, and customer-first approach.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/about",
    },
};

export default function AboutPage() {
    return (
        <main>
            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Vikalp Electric & Refrigeration</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Serving Jamnagar with honesty, expertise, and dedication for over 15 years.
                    </p>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2010, <strong>Vikalp Electric & Refrigeration</strong> started as a small repair shop in Gokul Nagar, Jamnagar. Over the years, we have grown into a full-service home appliance solution provider, trusted by thousands of households and businesses across the city.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our mission is simple: <strong>To provide fast, reliable, and affordable repair services</strong> so that you don't feature any inconvenience in your daily life. Whether it's a scorching summer day ensuring your AC works perfectly, or fixing your refrigerator to save your food, we are always just a call away.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { icon: <FaHistory />, title: "15+ Years", desc: "Of serving Jamnagar" },
                            { icon: <FaUserTie />, title: "Expert Team", desc: "Certified Technicians" },
                            { icon: <FaAward />, title: "Quality Guarantee", desc: "90 Days Warranty" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100/50">
                                <div className="text-4xl text-primary bg-white p-4 rounded-full shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
