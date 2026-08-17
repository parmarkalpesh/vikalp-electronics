import Section, { SectionTitle } from '../ui/Section';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaGoogle } from 'react-icons/fa';

const testimonials = [
    {
        name: "Rahul Mehta",
        location: "Patel Colony, Jamnagar",
        service: "Split AC Gas Refill & Jet Service",
        review: "Called them on a hot afternoon as my Daikin AC stopped cooling. Technician arrived within 1 hour, checked the pressure, found the joint leak, and refilled gas. Super clean work and very polite!",
        rating: 5,
        date: "2 days ago"
    },
    {
        name: "Priya Patel",
        location: "Digjam Circle, Jamnagar",
        service: "Double Door Refrigerator Repair",
        review: "Our LG fridge compressor wasn't turning on. Other technicians asked to replace the whole compressor, but Vikalp diagnosed a faulty relay and fixed it for a fraction of the cost. Truly honest service.",
        rating: 5,
        date: "1 week ago"
    },
    {
        name: "Amit Shah",
        location: "Gokul Nagar, Jamnagar",
        service: "Washing Machine & CCTV Setup",
        review: "Installed 4 HD Hikvision cameras at our shop with mobile view, and they also repaired our IFB washing machine spin motor. Highly recommended for home electronics in Jamnagar!",
        rating: 5,
        date: "2 weeks ago"
    }
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-950 text-white relative py-24 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3 border border-emerald-500/30">
                        <FaGoogle /> Verified Google Reviews
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        What Jamnagar Residents Say
                    </h2>
                    <p className="text-slate-300 text-lg">
                        Rated <strong className="text-amber-400">4.9 / 5.0</strong> based on 250+ genuine doorstep repair experiences across Jamnagar.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl hover:border-blue-500/50 transition-all duration-300 card-3d flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex text-amber-400 gap-1 text-base">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-slate-500">{t.date}</span>
                                </div>

                                <FaQuoteLeft className="text-blue-500/30 text-3xl mb-4" />

                                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                                    "{t.review}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                                        {t.name}
                                        <FaCheckCircle className="text-emerald-400 text-xs" title="Verified Customer" />
                                    </h4>
                                    <p className="text-xs text-blue-400 font-medium">{t.location}</p>
                                    <p className="text-[11px] text-slate-400 mt-0.5">{t.service}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold border border-white/10">
                                    {t.name.charAt(0)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

