import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
    title: "AC Installation in Jamnagar | Best AC Fitting & Service Near Me",
    description: "Professional AC installation service in Jamnagar. Split & Window AC fitting by expert technicians. Affordable rates, same-day service. Call Vikalp Electric & Refrigeration.",
    alternates: {
        canonical: "https://vikalpelectronics.com/services/ac-installation-jamnagar",
    },
};

export default function ACInstallationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AC Installation",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Vikalp Electric & Refrigeration",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jamnagar",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
            },
            "telephone": "+919374170929"
        },
        "areaServed": {
            "@type": "City",
            "name": "Jamnagar"
        },
        "description": "Professional Split and Window AC installation services in Jamnagar with gas filling and piping."
    };

    return (
        <main>
            {/* JSON-LD for Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <div className="bg-secondary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/hero-pattern.png')]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Jamnagar's #1 Cooling Experts</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        Professional AC Installation in Jamnagar
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
                        Fast, reliable, and affordable AC fitting services for your home and office. We install all brands including Voltas, LG, Samsung, Daikin, and Blue Star.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="tel:+919374170929" variant="primary" className="text-lg">
                            <FaPhoneAlt className="mr-2" /> Call 9374170929
                        </Button>
                        <Button href="https://wa.me/919374170929?text=I%20need%20AC%20Installation%20service" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-lg border-none text-white">
                            <FaWhatsapp className="mr-2" /> Book on WhatsApp
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose Vikalp Electric & Refrigeration for AC Installation?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            When you buy a new Air Conditioner, proper installation is crucial for its cooling efficiency and lifespan. At Vikalp Electric & Refrigeration, we provide <strong>premium AC installation services in Jamnagar</strong> with over 15 years of experience. Our certified technicians ensure that your Split or Window AC is installed with precision, preventing gas leaks and vibration issues.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Whether you are in <strong>Patel Colony, Digjam Circle, Gokul Nagar, or near Bedi Gate</strong>, our team reaches your location promptly. We handle everything from copper piping and outdoor unit mounting to gas pressure checking.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Our AC Services Include:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Standard Wall Mounting for Split & Window ACs",
                                "Copper Pipe Extension & concealment",
                                "Outdoor Unit Stand Installation",
                                "Core Cutting & Civil Work (if required)",
                                "Gas Pressure Check & Demo",
                                "Old AC Uninstallation & Re-installation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <FaCheckCircle className="text-accent flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
                            <h3 className="text-xl font-bold text-secondary mb-3">Service Areas in Jamnagar</h3>
                            <p className="text-gray-600">
                                We serve all major areas including Raj Park, Valkeshwari, Saru Section, Limda Lane, Khodiyar Colony, Lal Bunglow, and Reliance Road. Search for "AC installation near me" and you'll find Vikalp Electric & Refrigeration ready to serve.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="bg-gray-50 p-6 rounded-2xl h-fit sticky top-24 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold text-secondary mb-4">Book Your Slot</h3>
                        <p className="text-gray-500 mb-6 text-sm">Get same-day installation service. Don't let the heat bother you!</p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter mobile number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none">
                                    <option>AC Installation</option>
                                    <option>AC Repair</option>
                                    <option>AC Gas Filling</option>
                                </select>
                            </div>
                            <Button variant="primary" className="w-full justify-center mt-2">
                                Request Callback
                            </Button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center font-bold text-secondary">Or Call/WhatsApp</p>
                            <p className="text-center text-2xl font-bold text-primary my-2">+91 9374170929</p>
                        </div>
                    </div>

                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <SectionTitle title="Frequently Asked Questions" subtitle="AC Installation FAQs" center={true} />

                    <div className="space-y-4 mt-8">
                        {[
                            { q: "How much does AC installation cost in Jamnagar?", a: "Installation charges vary by AC type (Split/Window). Contact us for the latest and most affordable rates in Jamnagar." },
                            { q: "Do you install second-hand ACs?", a: "Yes, we provide installation services for both brand new and used (second-hand) air conditioners." },
                            { q: "Do you provide copper piping?", a: "Yes, we carry high-quality copper pipes and insulation material. Additional charges apply per foot." }
                        ].map((faq, i) => (
                            <details key={i} className="bg-white p-5 rounded-lg shadow-sm group">
                                <summary className="font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                                    {faq.q}
                                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-gray-600 mt-3 pl-2 border-l-2 border-primary">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
