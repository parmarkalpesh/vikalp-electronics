import Section, { SectionTitle } from '../ui/Section';
import { FaBolt, FaShieldAlt, FaTools, FaSmile, FaCheckCircle, FaAward, FaHeadset } from 'react-icons/fa';

const features = [
    {
        step: "01",
        icon: <FaBolt />,
        title: "2-Hour Fast Arrival",
        desc: "Same-day doorstep technician visit across all Jamnagar areas within 120 minutes of booking.",
        tag: "Lightning Fast"
    },
    {
        step: "02",
        icon: <FaTools />,
        title: "100% Genuine Parts",
        desc: "We only use original OEM spare parts and certified refrigerants (R32, R410a, R134a, R600a).",
        tag: "Original Spares"
    },
    {
        step: "03",
        icon: <FaShieldAlt />,
        title: "90-Day Full Warranty",
        desc: "Complete peace of mind on all repairs and parts replaced. If the issue reoccurs, we fix it free.",
        tag: "Zero Risk"
    },
    {
        step: "04",
        icon: <FaAward />,
        title: "Upfront Transparent Rates",
        desc: "Transparent price quote before starting any work. No surprise charges, no unnecessary replacements.",
        tag: "Honest Pricing"
    }
];

export default function WhyChooseUs() {
    return (
        <Section className="bg-slate-900 text-white relative overflow-hidden py-24">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Why Jamnagar Trusts Vikalp For 15+ Years"
                    subtitle="Our Unmatched Promise"
                    light={true}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 card-3d flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl font-extrabold font-display text-slate-600 group-hover:text-blue-400 transition-colors">
                                        {feature.step}
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full">
                                        {feature.tag}
                                    </span>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Banner */}
                <div className="mt-16 bg-gradient-to-r from-blue-900/60 via-slate-800 to-emerald-900/60 p-8 rounded-3xl border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl flex-shrink-0">
                            <FaHeadset />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Need Urgent Technician Help Today?</h4>
                            <p className="text-slate-300 text-sm">Call our dedicated Jamnagar emergency desk for immediate service allocation.</p>
                        </div>
                    </div>
                    <a
                        href="tel:+919374170929"
                        className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                    >
                        Call Hotline: +91 9374170929
                    </a>
                </div>
            </div>
        </Section>
    );
}

