"use client";
import { useState } from 'react';
import Section, { SectionTitle } from '../ui/Section';
import Button from '../ui/Button';
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }
        if (!formData.service || formData.service === "Select a Service") {
            newErrors.service = "Please select a service";
        }
        if (!formData.message.trim()) newErrors.message = "Please provide some details";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const phoneNumber = "919374170929";
            const message = `Hello, I need *${formData.service}*.\n\n*My Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\n\n*Issue:*\n${formData.message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <Section id="contact" className="bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Get In Touch" subtitle="Contact Us" />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                        placeholder="99999 99999"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-600`}
                                >
                                    <option value="">Select a Service</option>
                                    <option value="CCTV Installation">CCTV Installation</option>
                                    <option value="AC Repair">AC Repair</option>
                                    <option value="Refrigerator Service">Refrigerator Service</option>
                                    <option value="RO Water Filter Service">RO Water Filter Service</option>
                                    <option value="Washing Machine Repair">Washing Machine Repair</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Issue Details</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                    placeholder="Describe your issue..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <div className="pt-2">
                                <Button type="submit" className="w-full" variant="primary">
                                    <FaPaperPlane className="mr-2" /> Send Message via WhatsApp
                                </Button>
                            </div>
                        </form>

                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-500 text-sm">Or connect instantly via</p>
                            <div className="flex gap-4">
                                <Button href="https://wa.me/919374170929" variant="secondary" className="!bg-green-500 hover:!bg-green-600 border-none">
                                    <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
                                </Button>
                                <Button href="tel:+919374170929" variant="white" className="border-gray-200">
                                    <FaPhoneAlt className="mr-2" /> Call Direct
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] lg:h-auto relative bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4452943249553!2d70.04027487475359!3d22.449894837457492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715fe5a235cab%3A0x253906ad36e95d77!2sVikalp%20Electric%20%26%20Refrigeration!5e0!3m2!1sen!2sin!4v1765037902753!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="absolute inset-0"
                            title="Vikalp Electric & Refrigeration Location Map"
                        ></iframe>
                        {/* Overlay card on map */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary">
                            <h4 className="font-bold text-secondary">Visit Our Office</h4>
                            <p className="text-sm text-gray-600 mt-1">Shop No.1, Murlidhar Nagar 1, Gokul Nagar, Jamnagar - 361004.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
