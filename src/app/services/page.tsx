import Link from "next/link";
import { FaSnowflake, FaTv, FaVideo, FaTools, FaTint, FaFan } from "react-icons/fa";
import Section, { SectionTitle } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - AC, Fridge & CCTV Repair in Jamnagar",
    description: "Explore our wide range of home appliance services in Jamnagar. AC installation, fridge repair, washing machine service, CCTV setup, and more.",
};

const services = [
    {
        icon: <FaSnowflake className="text-4xl text-primary mb-4" />,
        title: "AC Installation & Repair",
        desc: "Expert AC installation and repair services in Jamnagar for Split and Window ACs. Gas filling and servicing available.",
        link: "/services/ac-installation-jamnagar"
    },
    {
        icon: <FaTv className="text-4xl text-primary mb-4" />,
        title: "Smart TV & LED Repair",
        desc: "Problem with your LED TV? We provide quick and reliable repair services for all major TV brands in Jamnagar.",
        link: "/services/ac-repair-jamnagar" // Using dynamic placeholder, eventually likely "tv-repair" but sticking to plan for now or creating new if allowed
    },
    {
        icon: <FaTools className="text-4xl text-primary mb-4" />,
        title: "Fridge & Refrigerator Repair",
        desc: "Cooling issues? Compressor not working? Our expert technicians in Jamnagar fix single and double door refrigerators.",
        link: "/services/fridge-repair-jamnagar"
    },
    {
        icon: <FaFan className="text-4xl text-primary mb-4" />,
        title: "Washing Machine Service",
        desc: "Top load or front load, we repair all types of washing machines. Fix drainage, drum, and motor issues quickly.",
        link: "/services/washing-machine-repair-jamnagar"
    },
    {
        icon: <FaVideo className="text-4xl text-primary mb-4" />,
        title: "CCTV Camera Installation",
        desc: "Secure your home and office with our professional CCTV camera installation and maintenance services in Jamnagar.",
        link: "/services/cctv-installation-jamnagar"
    },
    {
        icon: <FaTint className="text-4xl text-primary mb-4" />,
        title: "RO Water Filter Service",
        desc: "Get pure and safe drinking water. We install and service all brands of RO water purifiers in Jamnagar.",
        link: "/services/ro-water-filter-service-jamnagar"
    },
];

export default function ServicesPage() {
    return (
        <main>
            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our Premium Services in Jamnagar
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        From AC installation to CCTV security, VikalpElectronics offers trusted home appliance repair and maintenance solutions.
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
                                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                            >
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-secondary mb-3group-hover:text-primary transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {service.desc}
                                </p>
                                <span className="text-primary font-medium flex items-center gap-2">
                                    Learn More <span>&rarr;</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
