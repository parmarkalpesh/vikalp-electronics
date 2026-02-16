"use client";

import Section, { SectionTitle } from '../ui/Section';
import Card from '../ui/Card';
import Image from 'next/image';

const products = [
    { name: "AC Installation, Repair & Gas Charging", image: "/assets/Product1.jpg" },
    { name: "Split AC / Window AC Service", image: "/assets/acservice.jpg" },
    { name: "Refrigerator & Double Door Fridge Repair", image: "/assets/Refrigerator.jpg" },
    { name: "Washing Machine (Semi / Fully Automatic)", image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop" },
    { name: "RO Water Purifier Installation & Service", image: "/assets/ro.jpg" },
    { name: "Water Cooler Repair & Maintenance", image: "/assets/water coller.jpg" },
    { name: "Microwave Oven Repair", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=2070&auto=format&fit=crop" },
    { name: "Geyser / Water Heater Service", image: "/assets/Gyser.jpg" },
    { name: "Inverter, UPS & Battery Service", image: "/assets/inveter.jpg" },
    { name: "Solar Inverter Installation & Support", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" },
    { name: "CCTV Camera Installation, Repair & AMC", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop" },
    { name: "DVR / NVR Setup & Configuration", image: "/assets/cctv.jpg" },
    { name: "Home Electrical Wiring & Fault Repair", image: "/assets/wiring.jpg" },
    { name: "Kitchen Equipment Repair (Hotels & Canteens)", image: "/assets/hotel.jpg" },
    { name: "Commercial Display Chiller Service", image: "/assets/Glass open chiller.jpg" },
    { name: "Ice Machine & Beverage Cooler Repair", image: "/assets/ICE maker.jpg" },
];

export default function Products() {
    const whatsappNumber = "919374170929";

    const handleInquiry = (productName) => {
        const message = `I'm interested in ${productName} and would like to know more.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <Section id="products" className="bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Our Products" subtitle="Explore Our Complete Range of Services" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Card key={index} className="group hover:border-primary/20 flex flex-col h-full bg-gray-50 hover:bg-white transition-all duration-300">
                            <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-200">
                                {/* Use a placeholder if image fails to load or is missing */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                    <span className="text-xs">Image Placeholder</span>
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>

                            <div className="flex-grow flex flex-col justify-between">
                                <h3 className="text-lg font-bold text-secondary mb-3 leading-tight min-h-[50px]">{product.name}</h3>

                                <button
                                    onClick={() => handleInquiry(product.name)}
                                    className="w-full bg-white border border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
                                >
                                    <span>Inquire Now</span>
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-6">Need a custom service solution? We are here to help.</p>
                    <button
                        onClick={() => handleInquiry("General Inquiry")}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                        Contact Us Directly
                    </button>
                </div>
            </div>
        </Section>
    );
}
