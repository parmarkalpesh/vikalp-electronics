import Section, { SectionTitle } from '../ui/Section';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Homeowner",
        review: "Excellent service! They fixed my AC within 2 hours of calling. Very professional and polite staff.",
        rating: 5
    },
    {
        name: "Priya Patel",
        role: "Business Owner",
        review: "We hired Vikalp Electronics for our office CCTV setup. Clean installation and good after-sales support.",
        rating: 5
    },
    {
        name: "Amit Shah",
        role: "Shopkeeper",
        review: "Best refrigerator repair service in Jamnagar. Reasonable rates and the problem was solved permanently.",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <div className="relative py-24">
            {/* Parallax-like Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/testimonials-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-secondary/90"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle title="What Our Clients Say" subtitle="Testimonials" light={true} />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="flex text-yellow-500 mb-4 text-sm gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < t.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{t.review}"</p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <Image src="/img/user.png" alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">{t.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
