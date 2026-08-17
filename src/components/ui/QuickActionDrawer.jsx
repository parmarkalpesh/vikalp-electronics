"use client";
import { FaPhoneAlt, FaWhatsapp, FaBolt } from 'react-icons/fa';

export default function QuickActionDrawer() {
    return (
        <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
            {/* Live technician status pill */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-2xl border border-white/10 backdrop-blur-md pointer-events-auto animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Jamnagar: Technicians on Duty (Avg. 2h Arrival)</span>
            </div>

            {/* Floating Action Buttons */}
            <div className="flex items-center gap-3 pointer-events-auto">
                <a
                    href="tel:+919374170929"
                    className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xl shadow-2xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40"
                    title="Call Vikalp Electronics"
                    aria-label="Call Emergency Helpline"
                >
                    <FaPhoneAlt />
                </a>
                <a
                    href="https://wa.me/919374170929?text=Hello%20Vikalp%20Electronics%2C%20I%20need%20quick%20appliance%20service%20in%20Jamnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40 animate-pulse-glow"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </aside>
    );
}
