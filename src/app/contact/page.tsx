import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Contact Vikalp Electric & Refrigeration | Jamnagar AC Repair Phone Number",
    description: "Contact Vikalp Electric & Refrigeration for AC repair, fridge service, washing machine repair & CCTV in Jamnagar. Call +91 9374170929 or visit Shop 1, Murlidhar Nagar 1, Gokul Nagar.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/contact",
    },
    openGraph: {
        title: "Contact Vikalp Electric & Refrigeration Jamnagar",
        description: "Call +919374170929 for same-day doorstep AC and appliance repair across Jamnagar.",
        url: "https://vikalp-electronics.vercel.app/contact",
    }
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://vikalp-electronics.vercel.app/contact",
                "url": "https://vikalp-electronics.vercel.app/contact",
                "name": "Contact Vikalp Electric & Refrigeration Jamnagar",
                "mainEntity": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "email": "vikalpjamnagar@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Shop No. 1, Murlidhar Nagar 1, Gokul Nagar",
                        "addressLocality": "Jamnagar",
                        "addressRegion": "Gujarat",
                        "postalCode": "361004",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 22.449979,
                        "longitude": 70.042882
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://vikalp-electronics.vercel.app"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact Us",
                        "item": "https://vikalp-electronics.vercel.app/contact"
                    }
                ]
            }
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Section className="bg-secondary text-white pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">We are always ready to assist you with same-day doorstep appliance repair across Jamnagar.</p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch with Our Technicians</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaPhoneAlt className="text-2xl text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone Number (24/7 Helpline)</h3>
                                        <p><a href="tel:+919374170929" className="text-xl text-primary hover:underline hover:text-blue-700 font-bold transition-colors">+91 9374170929</a></p>
                                        <p className="text-sm text-gray-500">Same-day technician dispatch</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaWhatsapp className="text-2xl text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">WhatsApp Instant Booking</h3>
                                        <p><a href="https://wa.me/919374170929?text=Hi%20Vikalp%20Electronics%2C%20I%20need%20service%20in%20Jamnagar" className="text-lg text-green-600 hover:text-green-700 hover:underline font-bold transition-colors">Chat with us on WhatsApp</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaClock className="text-2xl text-amber-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Saturday: 9:00 AM – 9:00 PM</p>
                                        <p className="text-gray-600">Sunday: 9:00 AM – 2:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-2xl text-red-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Shop Address</h3>
                                        <address className="not-italic text-gray-600 leading-relaxed">
                                            Shop No. 1, Murlidhar Nagar 1,<br />
                                            Gokul Nagar, Jamnagar,<br />
                                            Gujarat - 361004.
                                        </address>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-2xl text-gray-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email Address</h3>
                                        <a href="mailto:vikalpjamnagar@gmail.com" className="text-gray-600 hover:text-primary transition-colors">vikalpjamnagar@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4452943249553!2d70.04027487475359!3d22.449894837457492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715fe5a235cab%3A0x253906ad36e95d77!2sVikalp%20Electric%20%26%20Refrigeration!5e0!3m2!1sen!2sin!4v1765037902753!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Vikalp Electric & Refrigeration Location Map in Jamnagar"
                        ></iframe>
                    </div>

                </div>
            </Section>
        </main>
    );
}

