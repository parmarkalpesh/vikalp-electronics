import Section, { SectionTitle } from '../ui/Section';
import Card from '../ui/Card';
import Link from 'next/link';
import { FaVideo, FaSnowflake, FaBox, FaTshirt, FaTv, FaTint, FaArrowRight } from 'react-icons/fa';

const services = [
    {
        icon: <FaSnowflake />,
        title: "AC Repair & Gas Refill",
        desc: "Expert AC servicing, gas charging (R32/R410a), and breakdown repair for all Split and Window AC brands in Jamnagar.",
        link: "/services/ac-repair-jamnagar"
    },
    {
        icon: <FaSnowflake />,
        title: "AC Installation Service",
        desc: "Professional wall mounting, copper piping, and reliable shifting services for Split and Window air conditioners.",
        link: "/services/ac-installation-jamnagar"
    },
    {
        icon: <FaBox />,
        title: "Refrigerator Repair",
        desc: "Fast doorstep fridge repair for Single & Double Door models. Compressor repair, thermostat & gas charging.",
        link: "/services/fridge-repair-jamnagar"
    },
    {
        icon: <FaTshirt />,
        title: "Washing Machine Service",
        desc: "Repair services for front-load, top-load, and semi-automatic machines. Fix spinning, drainage & PCB issues.",
        link: "/services/washing-machine-repair-jamnagar"
    },
    {
        icon: <FaTv />,
        title: "Smart TV & LED Repair",
        desc: "Specialized doorstep repair for Smart LED, OLED & 4K TVs. Backlight strip replacement, screen & sound fix.",
        link: "/services/tv-repair-jamnagar"
    },
    {
        icon: <FaVideo />,
        title: "CCTV Camera Installation",
        desc: "Complete surveillance setup with Hikvision & CP Plus. HD/IP cameras, DVR/NVR setup, and mobile view.",
        link: "/services/cctv-installation-jamnagar"
    },
    {
        icon: <FaTint />,
        title: "RO Water Purifier Service",
        desc: "TDS adjustment, filter cartridge replacement, and membrane change for Kent, Aquaguard & all RO systems.",
        link: "/services/ro-water-filter-service-jamnagar"
    }
];

export default function Services() {
    return (
        <Section id="services" className="bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Our Expertise" subtitle="Top Rated Appliance Services in Jamnagar" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} href={service.link} className="block group">
                            <Card className="h-full flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                </div>
                                <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                                    View Pricing & Details <FaArrowRight />
                                </span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}

