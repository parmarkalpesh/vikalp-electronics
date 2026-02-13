"use client";

import Section, { SectionTitle } from '../ui/Section';
import Card from '../ui/Card';
import Image from 'next/image';

const products = [
    {
        name: "AC Service",
        image: "/img/products/product1.jpg", // Placeholder
    },
    {
        name: "RO Water Filter",
        image: "/img/products/product2.jpg", // Placeholder
    },
    {
        name: "Washing Machine Service",
        image: "/img/products/product3.jpg", // Placeholder
    },
    {
        name: "Security CCTV Cemera",
        image: "/img/products/product4.jpg", // Placeholder
    },
    {
        name: "All Home Applicence Service",
        image: "/img/products/product5.png", // Placeholder
    }
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
                <SectionTitle title="Our Products" subtitle="Explore Our E-Bikes & Accessories" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Card key={index} className="group hover:border-primary/20 flex flex-col h-full">
                            <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-200">
                                {/* Replace with actual Images or use a placeholder if not available */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                </div>
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-cover  group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex justify-center items-start mb-2">
                                <h3 className="text-xl font-bold text-secondary">{product.name}</h3>
                               
                            </div>

                           

                            <button
                                onClick={() => handleInquiry(product.name)}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                            >
                                <span>View More</span>
                               
                            </button>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-6">Looking for something specific? We can help you find it.</p>
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
