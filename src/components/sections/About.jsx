import Section, { SectionTitle } from '../ui/Section';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
    const points = [
        "Certified & Trained Technicians",
        "15+ Years of Industry Experience",
        "Affordable & Transparent Pricing",
        "On-Time Service Guarantee",
        "24x7 Customer Support",
        "Genuine Spare Parts"
    ];

    return (
        <Section id="about" className="bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                            <Image
                                src="/img/aboutimg.jpg"
                                alt="Technician working"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg p-6 rounded-xl border-l-4 border-primary">
                                <p className="text-4xl font-bold text-secondary mb-1">15+</p>
                                <p className="text-gray-600 font-medium text-sm">Years of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <SectionTitle
                            title="Setting the Standard in Electronics Service"
                            subtitle="Who We Are"
                            center={false}
                        />
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Since our inception, Vikalp Electric & Refrigeration has been dedicated to providing top-notch installation and repair services in Jamnagar. We understand how crucial your home appliances and security systems are to your daily life.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our team of certified professionals is committed to delivering quality workmanship with speed and reliability. Whether it's securing your premises with CCTV or keeping your home cool with expert AC maintenance, we are your go-to experts.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-accent flex-shrink-0 text-xl" />
                                    <span className="text-secondary font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
