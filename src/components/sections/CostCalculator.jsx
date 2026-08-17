"use client";
import { useState } from 'react';
import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';
import { FaSnowflake, FaBox, FaTshirt, FaTv, FaVideo, FaTint, FaWhatsapp, FaPhoneAlt, FaCheck, FaCalculator } from 'react-icons/fa';

const servicesData = [
    {
        id: "ac",
        name: "Air Conditioner",
        icon: <FaSnowflake className="text-2xl" />,
        problems: [
            { issue: "General Jet-Pump Service", est: "₹499", note: "Deep pressure coil cleaning & inspection" },
            { issue: "AC Not Cooling / Gas Refilling", est: "₹1,499 - ₹2,200", note: "Complete R32/R410a leak test & charging" },
            { issue: "Water Leakage Repair", est: "₹399 - ₹699", note: "Drain tray & pipe unblocking" },
            { issue: "AC Installation / Shifting", est: "₹799 - ₹1,200", note: "Split AC mounting with vacuuming" },
            { issue: "PCB Board / Electrical Fix", est: "₹899+", note: "Component level motherboard repair" }
        ]
    },
    {
        id: "fridge",
        name: "Refrigerator",
        icon: <FaBox className="text-2xl" />,
        problems: [
            { issue: "General Inspection & Diagnosis", est: "₹199", note: "Adjusted against repair bill" },
            { issue: "Fridge Not Cooling / Gas Leak", est: "₹1,200 - ₹1,800", note: "R134a/R600a gas charging & capillary check" },
            { issue: "Compressor Relay / Starter Fix", est: "₹499 - ₹899", note: "Genuine relay & overload protector" },
            { issue: "Defrost Timer / Thermostat Issue", est: "₹650 - ₹1,100", note: "Frost-free sensor & bi-metal change" }
        ]
    },
    {
        id: "washing-machine",
        name: "Washing Machine",
        icon: <FaTshirt className="text-2xl" />,
        problems: [
            { issue: "General Service & Drum Cleaning", est: "₹399", note: "Deep descaling & filter clearance" },
            { issue: "Spin / Drum Not Rotating", est: "₹499 - ₹950", note: "Drive belt, capacitor or motor fix" },
            { issue: "Water Not Draining / Pump Block", est: "₹450 - ₹750", note: "Drain pump repair & lint unclogging" },
            { issue: "Digital Error Codes / PCB Issue", est: "₹850+", note: "Motherboard circuit troubleshooting" }
        ]
    },
    {
        id: "tv",
        name: "Smart LED TV",
        icon: <FaTv className="text-2xl" />,
        problems: [
            { issue: "Sound OK, No Display (Black Screen)", est: "₹899 - ₹1,800", note: "LED backlight strip replacement" },
            { issue: "Dead TV / Power Board Failure", est: "₹650 - ₹1,400", note: "Power circuit & SMPS repair" },
            { issue: "Screen Lines / T-Con Board Fix", est: "₹750 - ₹1,500", note: "T-Con board & ribbon cable fix" }
        ]
    },
    {
        id: "cctv",
        name: "CCTV Security",
        icon: <FaVideo className="text-2xl" />,
        problems: [
            { issue: "Mobile View Remote Setup", est: "₹499", note: "Cloud IP & router port configuration" },
            { issue: "Camera Offline / Power Supply Fix", est: "₹350 - ₹650", note: "SMPS power unit & BNC connector replacement" },
            { issue: "New Complete 4-Camera HD Setup", est: "₹14,999+", note: "Hikvision/CP Plus DVR, HDD & wiring" }
        ]
    },
    {
        id: "ro",
        name: "RO Water Purifier",
        icon: <FaTint className="text-2xl" />,
        problems: [
            { issue: "General Service & TDS Adjustment", est: "₹350", note: "Complete water quality testing" },
            { issue: "Full Filter Set Replacement", est: "₹1,200 - ₹1,600", note: "Sediment, Carbon & Post-Carbon filters" },
            { issue: "RO Membrane Replacement", est: "₹1,100 - ₹1,800", note: "High-rejection original RO membrane" }
        ]
    }
];

export default function CostCalculator() {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);

    const currentProblem = selectedService.problems[selectedProblemIndex] || selectedService.problems[0];

    const handleWhatsAppBook = () => {
        const text = `Hi Vikalp Electronics, I checked the estimate for *${selectedService.name} (${currentProblem.issue})* which is around *${currentProblem.est}*. I would like to book a technician in Jamnagar.`;
        window.open(`https://wa.me/919374170929?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <Section id="estimate" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden py-20">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                        <FaCalculator /> 100% Transparent Pricing
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">
                        Instant Repair Cost Estimator
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Select your appliance and issue to see upfront estimated rates. No surprise hidden charges in Jamnagar!
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 card-3d">
                    {/* Step 1: Select Appliance */}
                    <div className="mb-8">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            Step 1: Choose Your Appliance
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                            {servicesData.map((svc) => (
                                <button
                                    key={svc.id}
                                    onClick={() => {
                                        setSelectedService(svc);
                                        setSelectedProblemIndex(0);
                                    }}
                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                                        selectedService.id === svc.id
                                            ? "bg-primary text-white border-primary shadow-lg scale-105"
                                            : "bg-gray-50 hover:bg-gray-100 text-secondary border-gray-200"
                                    }`}
                                >
                                    <div className="mb-2">{svc.icon}</div>
                                    <span className="text-xs font-bold text-center leading-tight">{svc.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Select Issue */}
                    <div className="mb-8">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            Step 2: Select Common Issue
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedService.problems.map((prob, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedProblemIndex(idx)}
                                    className={`flex items-start justify-between p-4 rounded-xl border text-left transition-all ${
                                        selectedProblemIndex === idx
                                            ? "bg-blue-50 border-primary shadow-sm"
                                            : "bg-white border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    <div>
                                        <p className="font-bold text-secondary text-sm mb-1">{prob.issue}</p>
                                        <p className="text-xs text-gray-500">{prob.note}</p>
                                    </div>
                                    <span className="text-primary font-bold text-sm flex-shrink-0 ml-3">{prob.est}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Estimated Quote Card */}
                    <div className="bg-secondary text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-secondary-light">
                        <div>
                            <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                                ✓ 90-Day Warranty Included
                            </span>
                            <h3 className="text-2xl font-bold mb-2">
                                {selectedService.name} &bull; {currentProblem.issue}
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Estimated Cost: <span className="text-2xl md:text-3xl font-extrabold text-accent font-display">{currentProblem.est}</span>
                                <span className="text-xs text-gray-400 block mt-1">Exact quote provided after onsite diagnosis before work begins.</span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <button
                                onClick={handleWhatsAppBook}
                                className="px-6 py-3.5 rounded-full bg-accent hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-95"
                            >
                                <FaWhatsapp className="text-lg" /> Book on WhatsApp
                            </button>
                            <a
                                href="tel:+919374170929"
                                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-secondary border border-white/20 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                            >
                                <FaPhoneAlt /> Call +91 9374170929
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
