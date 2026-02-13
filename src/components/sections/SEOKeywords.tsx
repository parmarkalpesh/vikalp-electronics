import Link from 'next/link';

export default function SEOKeywords() {
    const mainKeywords = [
        "Best AC service in Jamnagar", "AC service near me in Jamnagar", "AC repair in Jamnagar",
        "AC servicing in Jamnagar", "AC installation service Jamnagar", "AC gas charging Jamnagar",
        "Split AC service Jamnagar", "Window AC servicing Jamnagar", "24 hours AC repair Jamnagar",
        "Emergency AC repair Jamnagar", "Professional AC service Jamnagar", "Low cost AC service Jamnagar"
    ];

    const secondaryKeywords = [
        "Affordable AC repair Jamnagar", "Cheap AC service in Jamnagar", "Fast AC repair Jamnagar",
        "Reliable AC technician in Jamnagar", "Skilled AC mechanic Jamnagar", "Trusted AC service Jamnagar",
        "Top rated AC service Jamnagar", "Seasonal AC maintenance Jamnagar", "Best AC servicing deals in Jamnagar"
    ];

    const brandKeywords = [
        "Voltas AC service Jamnagar", "Daikin AC repair Jamnagar", "LG AC servicing Jamnagar",
        "Samsung AC service Jamnagar", "Hitachi AC technician Jamnagar"
    ];

    const issueKeywords = [
        "AC gas refill & repair Jamnagar", "AC noise repair service Jamnagar", "AC water leakage repair Jamnagar"
    ];

    return (
        <section className="bg-gray-100 py-12 text-sm text-gray-500 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="font-semibold text-gray-700 uppercase tracking-widest text-xs mb-2">Most Searched Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Vikalp Electric & Refrigeration is the leading provider for all your air conditioning needs. We cover all areas in Jamnagar.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
                    {mainKeywords.map((keyword, index) => (
                        <span key={index} className="hover:text-primary transition-colors cursor-default">
                            {keyword}
                        </span>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left border-t border-gray-200 pt-8">
                    <div>
                        <h3 className="font-bold text-gray-700 mb-4">Specialized Repairs</h3>
                        <ul className="space-y-2">
                            {issueKeywords.map((keyword, index) => (
                                <li key={index}>{keyword}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700 mb-4">Brands We Service</h3>
                        <ul className="space-y-2">
                            {brandKeywords.map((keyword, index) => (
                                <li key={index}>{keyword}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700 mb-4">Service Features</h3>
                        <ul className="space-y-2">
                            {secondaryKeywords.slice(0, 5).map((keyword, index) => (
                                <li key={index}>{keyword}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
