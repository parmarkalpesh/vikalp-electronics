import Section, { SectionTitle } from '../ui/Section';
import Card from '../ui/Card';
import { FaVideo, FaSnowflake, FaBox, FaTshirt, FaShieldAlt, FaTools } from 'react-icons/fa';

const services = [
    {
        icon: <FaVideo />,
        title: "CCTV Installation",
        desc: "Complete surveillance solutions for home and business. HD cameras, remote viewing setup, and maintenance."
    },
    {
        icon: <FaSnowflake />,
        title: "AC Repair & Service",
        desc: "Expert AC installation, gas filling, and servicing for all brands. Split, Window, and Central ACs."
    },
    {
        icon: <FaBox />,
        title: "Refrigerator Repair",
        desc: "Fast and reliable fridge repair. We fix cooling issues, gas leakage, and compressor problems."
    },
    {
        icon: <FaTshirt />,
        title: "Washing Machine",
        desc: "Repair services for front-load, top-load, and semi-automatic machines using genuine parts."
    },
    {
        icon: <FaShieldAlt />,
        title: "Security Systems",
        desc: "Advanced security setups including alarms, biometric access, and smart locks for your safety."
    },
    {
        icon: <FaTools />,
        title: "Custom Solutions",
        desc: "Tailored electronics troubleshooting and repair for specialized equipment and unique needs."
    }
];

export default function Services() {
    return (
        <Section id="services" className="bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Our Expertise" subtitle="What We Do" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:border-primary/20">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-3xl mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
