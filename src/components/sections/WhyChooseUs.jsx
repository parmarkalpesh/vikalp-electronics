import Section, { SectionTitle } from '../ui/Section';
import { FaUserClock, FaMedal, FaUsers, FaSmile } from 'react-icons/fa';

const features = [
    {
        icon: <FaMedal />,
        title: "Premium Quality",
        desc: "We use only genuine parts and follow industry best practices for all repairs."
    },
    {
        icon: <FaUserClock />,
        title: "Fast Response",
        desc: "Quick turnaround time with same-day service options available."
    },
    {
        icon: <FaUsers />,
        title: "Expert Team",
        desc: "Highly trained and background-verified technicians you can trust."
    },
    {
        icon: <FaSmile />,
        title: "100% Satisfaction",
        desc: "We are committed to delivering results that exceed your expectations."
    }
];

export default function WhyChooseUs() {
    return (
        <Section className="bg-secondary text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle title="Why Choose Vikalp Electronics?" subtitle="Our Promise" light={true} />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="mx-auto w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-4xl text-accent mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
