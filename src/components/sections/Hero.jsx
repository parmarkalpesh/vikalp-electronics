"use client";
import Button from '../ui/Button';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaClock, FaCheckCircle, FaStar, FaWrench, FaSnowflake } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950 text-white">
            {/* Background 3D Radial Glows & Ambient Mesh */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Heading & Value Proposition */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Live Status Pill */}
                    <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-emerald-400 shadow-inner">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>#1 Rated Electronics & AC Service in Jamnagar</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.15] tracking-tight">
                        Instant AC & Appliance Repair in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">Jamnagar</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                        Fast 2-hour doorstep service with a <strong className="text-white">90-Day Warranty</strong>. Expert AC repair, gas refilling, refrigerator fixes, washing machine repair & CCTV setup by certified technicians.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button href="#estimate" variant="primary" className="text-lg px-8 py-4 !bg-blue-600 hover:!bg-blue-500 shadow-xl shadow-blue-600/30">
                            Check Price Estimate <FaArrowRight className="ml-2" />
                        </Button>
                        <Button href="tel:+919374170929" variant="outline" className="text-lg px-8 py-4 !text-white !border-white/30 hover:!bg-white/10 backdrop-blur-sm">
                            <FaPhoneAlt className="mr-2 text-emerald-400" /> +91 9374170929
                        </Button>
                    </div>

                    {/* Live Trust Metrics */}
                    <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white font-display">15+ <span className="text-blue-400 text-lg">Yrs</span></p>
                            <p className="text-xs text-slate-400 mt-0.5">Serving Jamnagar</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white font-display">90 <span className="text-emerald-400 text-lg">Days</span></p>
                            <p className="text-xs text-slate-400 mt-0.5">Repair Warranty</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-amber-400 text-lg font-bold">
                                <FaStar /> 4.9<span className="text-xs text-slate-400 font-normal">/5</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">250+ Google Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: 3D Interactive Glass Dashboard Showcase */}
                <div className="lg:col-span-5 perspective-1000">
                    <div className="relative glass-card-dark p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/15 card-3d transform-3d">
                        {/* 3D Floating Header Card */}
                        <div className="flex items-center justify-between pb-6 border-b border-white/10">
                            <div>
                                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Fast Booking</span>
                                <h3 className="text-xl font-bold text-white">Need Same-Day Repair?</h3>
                            </div>
                            <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 font-semibold">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                Available Today
                            </span>
                        </div>

                        {/* Quick Selection Buttons */}
                        <div className="grid grid-cols-2 gap-3 my-6">
                            <Link href="/services/ac-repair-jamnagar" className="p-3.5 rounded-2xl bg-white/5 hover:bg-blue-600/30 border border-white/10 hover:border-blue-400/50 transition-all flex items-center gap-3 group">
                                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                                    <FaSnowflake />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-white leading-tight">AC Repair</p>
                                    <p className="text-[10px] text-slate-400">Gas & Service</p>
                                </div>
                            </Link>

                            <Link href="/services/fridge-repair-jamnagar" className="p-3.5 rounded-2xl bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-400/50 transition-all flex items-center gap-3 group">
                                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                                    <FaWrench />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-white leading-tight">Fridge Fix</p>
                                    <p className="text-[10px] text-slate-400">Cooling & Gas</p>
                                </div>
                            </Link>

                            <Link href="/services/washing-machine-repair-jamnagar" className="p-3.5 rounded-2xl bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/50 transition-all flex items-center gap-3 group">
                                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                    <FaWrench />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-white leading-tight">Washing Mach.</p>
                                    <p className="text-[10px] text-slate-400">Spin & Motor</p>
                                </div>
                            </Link>

                            <Link href="/services/tv-repair-jamnagar" className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-600/30 border border-white/10 hover:border-amber-400/50 transition-all flex items-center gap-3 group">
                                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                                    <FaWrench />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-white leading-tight">Smart TV</p>
                                    <p className="text-[10px] text-slate-400">Screen & Sound</p>
                                </div>
                            </Link>
                        </div>

                        {/* Direct Booking CTA Buttons */}
                        <div className="space-y-3 pt-2">
                            <a
                                href="https://wa.me/919374170929?text=Hello%20Vikalp%20Electronics%2C%20I%20want%20to%20book%20a%20technician%20in%20Jamnagar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all active:scale-95"
                            >
                                <FaWhatsapp className="text-lg" /> Schedule on WhatsApp
                            </a>
                            <a
                                href="tel:+919374170929"
                                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/15 transition-all"
                            >
                                <FaPhoneAlt className="text-xs" /> Call Direct: +91 9374170929
                            </a>
                        </div>

                        {/* Guarantee Footer */}
                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                            <span className="flex items-center gap-1 text-emerald-400">
                                <FaCheckCircle /> 100% Genuine Parts
                            </span>
                            <span className="flex items-center gap-1 text-blue-400">
                                <FaShieldAlt /> 90-Day Guarantee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

