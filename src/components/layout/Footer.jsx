import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-white">Vikalp<span className="text-primary">Electric & Refrigeration</span></h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for Electronics & Refrigeration services. 15+ years of delivering excellence in Jamnagar.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<FaFacebookF />} />
                            <SocialIcon icon={<FaInstagram />} />
                            <SocialIcon icon={<FaTwitter />} />
                            <SocialIcon icon={<FaLinkedinIn />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 border-l-4 border-accent pl-3">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#home">Home</FooterLink>
                            <FooterLink href="#about">About Us</FooterLink>
                            <FooterLink href="#services">Our Services</FooterLink>
                            <FooterLink href="#testimonials">Testimonials</FooterLink>
                            <FooterLink href="#contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 border-l-4 border-accent pl-3">Our Services</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">CCTV Installation</li>
                            <li className="text-gray-400">AC Repair & Service</li>
                            <li className="text-gray-400">Refrigerator Repair</li>
                            <li className="text-gray-400">Washing Machine Repair</li>
                            <li className="text-gray-400">Security Systems</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 border-l-4 border-accent pl-3">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
                                <span>Shop No. 1, Murlidhar Nagar 1,<br /> Gokul Nagar, Jamnagar,<br /> Gujarat - 361004.</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaPhoneAlt className="text-accent flex-shrink-0" />
                                <a href="tel:+919374170929" className="hover:text-white transition-colors">+91 9374170929</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaEnvelope className="text-accent flex-shrink-0" />
                                <a href="mailto:vikalpelectronicsofficial@gmail.com" className="hover:text-white transition-colors">vikalpelectronicsofficial@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vikalp Electric & Refrigeration. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
        {icon}
    </a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <Link href={href} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
            <span className="text-xs opacity-50">&gt;</span> {children}
        </Link>
    </li>
);
