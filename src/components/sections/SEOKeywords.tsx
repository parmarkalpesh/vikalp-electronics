import Link from 'next/link';

export default function SEOKeywords() {
    const mainKeywords = [
        { label: "Best AC service in Jamnagar", href: "/services/ac-repair-jamnagar" },
        { label: "AC repair in Jamnagar", href: "/services/ac-repair-jamnagar" },
        { label: "Split AC installation Jamnagar", href: "/services/ac-installation-jamnagar" },
        { label: "AC gas charging Jamnagar", href: "/services/ac-repair-jamnagar" },
        { label: "Fridge repair near me in Jamnagar", href: "/services/fridge-repair-jamnagar" },
        { label: "Washing machine repair Jamnagar", href: "/services/washing-machine-repair-jamnagar" },
        { label: "Smart TV repair Jamnagar", href: "/services/tv-repair-jamnagar" },
        { label: "CCTV camera installation Jamnagar", href: "/services/cctv-installation-jamnagar" },
        { label: "RO water purifier service Jamnagar", href: "/services/ro-water-filter-service-jamnagar" },
        { label: "Emergency AC technician Jamnagar", href: "/services/ac-repair-jamnagar" },
        { label: "Voltas & LG AC service Jamnagar", href: "/services/ac-repair-jamnagar" },
        { label: "Doorstep appliance repair Jamnagar", href: "/services" },
    ];

    const localities = [
        "Gokul Nagar", "Patel Colony", "Digjam Circle", "Khodiyar Colony", "Saru Section",
        "Valkeshwari", "Bedeshwar", "Lal Bunglow", "Gulabnagar", "Limda Lane", "Darbargadh",
        "Raj Park", "Ranjit Sagar Road", "Reliance Greens Area"
    ];

    const brandKeywords = [
        "Voltas AC Service", "Daikin AC Repair", "LG Refrigerator Service",
        "Samsung Washing Machine Fix", "Sony Smart TV Repair", "Kent RO Service",
        "Hikvision CCTV Installation", "CP Plus Security Cameras"
    ];

    return (
        <section className="bg-gray-100 py-12 text-sm text-gray-600 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="font-bold text-gray-800 uppercase tracking-widest text-xs mb-2">Most Popular Appliance Services in Jamnagar</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                        Vikalp Electric & Refrigeration provides certified same-day repair and installation services across all neighborhoods of Jamnagar.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
                    {mainKeywords.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-primary hover:border-primary hover:shadow-sm transition-all"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left border-t border-gray-200 pt-8">
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-sm">Service Localities Covered</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {localities.map((loc, index) => (
                                <span key={index} className="bg-gray-200/70 text-gray-700 text-xs px-2.5 py-1 rounded-md">
                                    {loc}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-sm">Major Brands Serviced</h3>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                            {brandKeywords.map((brand, index) => (
                                <li key={index}>✔ {brand}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-sm">Why Choose Local Vikalp Experts?</h3>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                            <li>✔ 15+ Years Serving Jamnagar</li>
                            <li>✔ 90-Day Repair & Part Warranty</li>
                            <li>✔ 2-Hour Fast Doorstep Response</li>
                            <li>✔ 100% Genuine Manufacturer Parts</li>
                            <li>✔ Transparent & Upfront Quotations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

