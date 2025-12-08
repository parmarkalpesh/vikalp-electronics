import Link from 'next/link';
import { FaTools, FaSnowflake, FaTint, FaVideo, FaTv } from 'react-icons/fa';

const services = [
    { name: "AC Repair & Service", href: "/services/ac-repair-jamnagar", icon: FaSnowflake },
    { name: "AC Installation", href: "/services/ac-installation-jamnagar", icon: FaTools },
    { name: "Fridge Repair", href: "/services/fridge-repair-jamnagar", icon: FaSnowflake }, // Reusing snowflake for cold
    { name: "Washing Machine Repair", href: "/services/washing-machine-repair-jamnagar", icon: FaTools }, // Generic tools
    { name: "RO Service", href: "/services/ro-water-filter-service-jamnagar", icon: FaTint },
    { name: "CCTV Installation", href: "/services/cctv-installation-jamnagar", icon: FaVideo },
];

export default function RelatedServices({ currentPath }: { currentPath?: string }) {
    // Filter out the current page to avoid linking to self
    const otherServices = services.filter(s => s.href !== currentPath);

    return (
        <div className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">Other Services We Offer in Jamnagar</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {otherServices.slice(0, 5).map((service) => (
                        <Link
                            key={service.href}
                            href={service.href}
                            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-primary/5 hover:border-primary border border-transparent transition-colors group text-center"
                        >
                            <service.icon className="text-3xl text-gray-400 group-hover:text-primary mb-3 transition-colors" />
                            <span className="font-medium text-gray-700 group-hover:text-primary transition-colors text-sm md:text-base">
                                {service.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
