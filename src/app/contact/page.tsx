import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Contact Vikalp Electric & Refrigeration | AC Repair Number Jamnagar",
    description: "Contact Vikalp Electric & Refrigeration for AC installation, fridge repair, and CCTV service in Jamnagar. Call 9374170929 or visit our shop at Gokul Nagar.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/contact",
    },
};

export default function ContactPage() {
    return (
        <main>
            <Section className="bg-gray-50 pt-24 pb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-display font-bold text-secondary mb-4">Contact Us</h1>
                    <p className="text-gray-600">We are always ready to help you with your appliance needs.</p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-blue-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaPhoneAlt className="text-2xl text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone Number</h3>
                                        <p><a href="tel:+919374170929" className="text-lg text-primary hover:underline hover:text-blue-700 font-bold transition-colors">+91 9374170929</a></p>
                                        <p className="text-sm text-gray-500">Mon-Sat 9am to 9pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaWhatsapp className="text-2xl text-green-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">WhatsApp</h3>
                                        <p><a href="https://wa.me/919374170929" className="text-lg text-green-600 hover:text-green-700 hover:underline font-bold transition-colors">Chat with us</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Shop Address</h3>
                                        <address className="not-italic text-gray-600">
                                            Shop No. 1, Murlidhar Nagar 1,<br />
                                            Gokul Nagar, Jamnagar,<br />
                                            Gujarat - 361004.
                                        </address>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-2xl text-gray-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email</h3>
                                        <a href="mailto:vikalpjamnagar@gmail.com" className="text-gray-600 hover:text-primary transition-colors">vikalpjamnagar@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4452943249553!2d70.04027487475359!3d22.449894837457492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715fe5a235cab%3A0x253906ad36e95d77!2sVikalp%20Electric%20%26%20Refrigeration!5e0!3m2!1sen!2sin!4v1765037902753!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Vikalp Electric & Refrigeration Location Map"
                        ></iframe>
                    </div>

                </div>
            </Section>
        </main>
    );
}
