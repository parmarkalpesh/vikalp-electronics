"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = scrolled
        ? "bg-white/90 backdrop-blur-md shadow-md py-2"
        : "bg-transparent py-4";

    const textClass = scrolled ? "text-secondary" : "text-white";
    const hoverClass = scrolled ? "hover:text-primary" : "hover:text-accent";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-40">

                        <Image
                            src="/img/logo.png"
                            alt="Vikalp Electric & Refrigeration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="#home" textClass={textClass} hoverClass={hoverClass}>Home</NavLink>
                    <NavLink href="#about" textClass={textClass} hoverClass={hoverClass}>About Us</NavLink>
                    <NavLink href="#services" textClass={textClass} hoverClass={hoverClass}>Services</NavLink>
                    <NavLink href="#contact" textClass={textClass} hoverClass={hoverClass}>Contact</NavLink>

                    <a
                        href="tel:+919999999999"
                        className={`
                            px-6 py-2.5 rounded-full flex items-center gap-2 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                            ${scrolled
                                ? "bg-primary hover:bg-blue-600 text-white"
                                : "bg-white/10 hover:bg-white text-white hover:text-secondary border border-white/30 backdrop-blur-sm"}
                        `}
                    >
                        <FaPhoneAlt className="text-sm" />
                        <span>Call Now</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden text-2xl transition-colors ${textClass}`}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 border-t border-gray-100 animate-slide-in">
                    <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                    <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                    <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                    <a href="tel:+919999999999" className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-md transition-transform active:scale-95">
                        <FaPhoneAlt /> Call Now
                    </a>
                </div>
            )}
        </nav>
    );
}

const NavLink = ({ href, children, textClass, hoverClass }) => (
    <Link href={href} className={`font-medium transition-colors ${textClass} ${hoverClass}`}>
        {children}
    </Link>
);

const MobileNavLink = ({ href, onClick, children }) => (
    <Link href={href} onClick={onClick} className="text-secondary font-medium text-lg w-full text-center py-2 hover:bg-gray-50 hover:text-primary transition-colors">
        {children}
    </Link>
);
