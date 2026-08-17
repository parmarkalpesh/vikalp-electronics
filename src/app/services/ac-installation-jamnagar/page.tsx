import type { Metadata } from "next";
import Section, { SectionTitle } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaTools, FaSnowflake } from "react-icons/fa";
import FAQ from "@/components/sections/FAQ";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
    title: "Best AC Installation in Jamnagar | Split & Window AC Fitting",
    description: "Professional AC installation service in Jamnagar. Split & Window AC fitting by certified technicians. 100% leak-proof copper piping, affordable rates, same-day visit. Call +919374170929.",
    alternates: {
        canonical: "https://vikalp-electronics.vercel.app/services/ac-installation-jamnagar",
    },
    openGraph: {
        title: "Best AC Installation Service in Jamnagar | Vikalp Electronics",
        description: "Doorstep Split & Window AC Installation in Jamnagar. Certified technicians, vacuuming, copper piping & same day booking.",
        url: "https://vikalp-electronics.vercel.app/services/ac-installation-jamnagar",
    }
};

export default function ACInstallationPage() {
    const faqItems = [
        {
            question: "How much does AC installation cost in Jamnagar?",
            answer: "Standard Split AC installation in Jamnagar starts from ₹799 to ₹1200 depending on bracket mounting and copper piping requirements. Window AC fitting starts at ₹499."
        },
        {
            question: "Do you provide copper piping and outdoor unit wall stands?",
            answer: "Yes, our technicians carry 100% pure copper pipes, insulation foam, and heavy-duty GI powder-coated outdoor wall brackets."
        },
        {
            question: "Do you install second-hand or relocated ACs in Jamnagar?",
            answer: "Yes, we handle complete AC uninstallation from your previous home, safe transportation, and precise re-installation with pressure testing."
        },
        {
            question: "How soon can the technician arrive for installation?",
            answer: "We provide same-day AC installation across all Jamnagar areas including Patel Colony, Digjam Circle, Gokul Nagar, Valkeshwari, and Khodiyar Colony within 2-3 hours of booking."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "AC Installation Service",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Vikalp Electric & Refrigeration",
                    "telephone": "+919374170929",
                    "image": "https://vikalp-electronics.vercel.app/img/logo.png",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Shop No. 1, Murlidhar Nagar 1, Gokul Nagar",
                        "addressLocality": "Jamnagar",
                        "addressRegion": "Gujarat",
                        "postalCode": "361004",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Jamnagar"
                },
                "description": "Professional Split and Window AC installation services in Jamnagar with copper piping and vacuuming.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "178"
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
                        "name": "Services",
                        "item": "https://vikalp-electronics.vercel.app/services"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "AC Installation Jamnagar",
                        "item": "https://vikalp-electronics.vercel.app/services/ac-installation-jamnagar"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <div className="bg-secondary text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full">
                        <FaSnowflake /> Jamnagar's #1 Cooling & Fitting Experts
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                        Professional AC Installation in Jamnagar
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
                        Fast, reliable, and leak-proof AC fitting for your home and office. We install Split, Inverter & Window ACs for Voltas, Daikin, LG, Samsung, Lloyd, and Blue Star.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="tel:+919374170929" variant="primary" className="text-lg">
                            <FaPhoneAlt className="mr-2" /> Call +91 9374170929
                        </Button>
                        <Button href="https://wa.me/919374170929?text=I%20need%20AC%20Installation%20service%20in%20Jamnagar" variant="secondary" className="!bg-green-600 hover:!bg-green-700 text-lg border-none text-white">
                            <FaWhatsapp className="mr-2" /> Book on WhatsApp
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Section className="bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose Vikalp Electric & Refrigeration for AC Installation?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            When you buy a new Air Conditioner, proper installation is crucial for its cooling efficiency, lower electricity consumption, and maximum lifespan. At Vikalp Electric & Refrigeration, we provide <strong>premium AC installation services in Jamnagar</strong> with over 15 years of industry experience. Our certified technicians ensure that your Split or Window AC is mounted with perfect leveling, preventing vibration and premature gas leaks.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Whether you are in <strong>Patel Colony, Digjam Circle, Gokul Nagar, Saru Section, Valkeshwari, Khodiyar Colony, or Bedi Gate</strong>, our team reaches your location on time with full professional tooling.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mb-4 mt-8">Our AC Fitting Services Include:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Standard Wall Mounting with vibration dampers for Split & Window ACs",
                                "100% Pure Copper Pipe extension with high-density thermal insulation",
                                "Outdoor Heavy-Duty Stand installation with anti-rust fasteners",
                                "Precision core drilling & wall hole sealing",
                                "System vacuuming & gas pressure check to ensure peak chilling",
                                "Old AC Uninstallation, relocation, and re-installation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <FaCheckCircle className="text-accent flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
                            <h3 className="text-xl font-bold text-secondary mb-3">Service Areas in Jamnagar</h3>
                            <p className="text-gray-600">
                                We serve all major areas including Patel Colony, Digjam Circle, Gokul Nagar, Raj Park, Valkeshwari, Saru Section, Limda Lane, Khodiyar Colony, Lal Bunglow, Bedeshwar, and Reliance Greens Township.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="bg-gray-50 p-6 rounded-2xl h-fit sticky top-24 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold text-secondary mb-2">Book Same-Day Installation</h3>
                        <p className="text-gray-500 mb-6 text-sm">Beat the Jamnagar summer heat with quick doorstep fitting!</p>

                        <div className="space-y-4">
                            <Button href="tel:+919374170929" variant="primary" className="w-full justify-center text-lg">
                                <FaPhoneAlt className="mr-2" /> Call Technician
                            </Button>
                            <Button href="https://wa.me/919374170929?text=I%20want%20to%20book%20AC%20installation%20in%20Jamnagar" variant="secondary" className="w-full justify-center !bg-green-600 hover:!bg-green-700 text-white border-none">
                                <FaWhatsapp className="mr-2" /> WhatsApp Booking
                            </Button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center font-bold text-secondary text-sm">Direct Phone Inquiry</p>
                            <p className="text-center text-2xl font-bold text-primary my-2">+91 9374170929</p>
                            <p className="text-center text-xs text-gray-500">Available Monday - Saturday: 9 AM - 9 PM</p>
                        </div>
                    </div>

                </div>
            </Section>

            {/* FAQ Section */}
            <FAQ items={faqItems} title="AC Installation FAQs" />
            <RelatedServices currentPath="/services/ac-installation-jamnagar" />
        </main>
    );
}

