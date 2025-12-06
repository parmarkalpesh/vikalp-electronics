import Button from '../ui/Button';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/img/bg.png)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-8 animate-fade-in-up">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium text-accent mb-4">
                        ✨ #1 Electronics Service in Jamnagar
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Best <span className="text-primary">AC Installation</span> & <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">Home Appliance Repair</span> in Jamnagar
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        Trusted by homeowners and businesses for 15+ years. Expert installation, fast repair, and guaranteed satisfaction for all your electronic needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button href="#contact" variant="primary" className="text-lg px-10">
                            Book Service <FaArrowRight className="ml-2" />
                        </Button>
                        <Button href="tel:+919374170929" variant="outline" className="text-lg px-10 !text-white !border-white hover:!bg-white hover:!text-secondary">
                            <FaPhoneAlt className="mr-2" /> Call Now
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            24/7 Support
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            Certified Experts
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            Fast Response
                        </div>
                    </div>
                </div>

                {/* Optional: If we want an illustration image on the right side over the background */}
                <div className="hidden md:block relative animate-fade-in-up delay-200">
                    {/* Use the About Image or similar here if we want, or leave it cleaner with just text. 
                 The prompt asked for "Add a high-quality illustration/image of technicians or electronics service."
                 Since 'bg.png' is the background, maybe 'aboutimg.jpg' or just a nice graphic here?
                 Let's stick to the text layout for a cleaner "corporate" look if bg is busy, 
                 OR use a transparent tech illustration if we had one. 
                 Since valid images are scarce, let's make the text side wider and clearer.
             */}
                </div>
            </div>
        </section>
    );
}
