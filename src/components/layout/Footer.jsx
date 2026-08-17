import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Vikalp <span className="text-primary">Electric & Refrigeration</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            Jamnagar's #1 trusted home appliance and air conditioning service center since 2010. 15+ years of delivering certified technical excellence with a 90-day repair warranty.
                        </p>
                        <div className="flex space-x-3">
                            <SocialIcon href="https://facebook.com/vikalpelectronics" icon={<FaFacebookF />} label="Facebook" />
                            <SocialIcon href="https://instagram.com/vikalpelectronics" icon={<FaInstagram />} label="Instagram" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-l-4 border-accent pl-3">Quick Navigation</h4>
                        <ul className="space-y-2.5 text-sm">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/services">All Services</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/blog">Repair & Care Blog</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Dedicated Service Landing Pages */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-l-4 border-accent pl-3">Our Services in Jamnagar</h4>
                        <ul className="space-y-2.5 text-sm">
                            <FooterLink href="/services/ac-repair-jamnagar">AC Repair & Gas Refill</FooterLink>
                            <FooterLink href="/services/ac-installation-jamnagar">AC Installation Service</FooterLink>
                            <FooterLink href="/services/fridge-repair-jamnagar">Fridge & Refrigerator Repair</FooterLink>
                            <FooterLink href="/services/washing-machine-repair-jamnagar">Washing Machine Repair</FooterLink>
                            <FooterLink href="/services/tv-repair-jamnagar">Smart LED TV Repair</FooterLink>
                            <FooterLink href="/services/cctv-installation-jamnagar">CCTV Camera Installation</FooterLink>
                            <FooterLink href="/services/ro-water-filter-service-jamnagar">RO Water Purifier Service</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-l-4 border-accent pl-3">Contact & Location</h4>
                        <ul className="space-y-3.5 text-sm">
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
                                <span>Shop No. 1, Murlidhar Nagar 1,<br /> Gokul Nagar, Jamnagar,<br /> Gujarat - 361004.</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaPhoneAlt className="text-accent flex-shrink-0" />
                                <a href="tel:+919374170929" className="hover:text-primary font-bold text-white transition-colors">+91 9374170929</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaEnvelope className="text-accent flex-shrink-0" />
                                <a href="mailto:vikalpjamnagar@gmail.com" className="hover:text-white transition-colors">vikalpjamnagar@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright & SEO statement */}
                <div className="border-t border-gray-800/80 pt-8 text-center text-gray-400 text-xs space-y-2">
                    <p>
                        Serving Jamnagar: Patel Colony, Digjam Circle, Gokul Nagar, Saru Section, Valkeshwari, Khodiyar Colony, Lal Bunglow, Bedeshwar, Gulabnagar & Reliance Area.
                    </p>
                    <p>&copy; {new Date().getFullYear()} Vikalp Electric & Refrigeration. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ href, icon, label }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white text-sm"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <Link href={href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
            <span className="text-xs text-primary font-bold">&rarr;</span> {children}
        </Link>
    </li>
);

