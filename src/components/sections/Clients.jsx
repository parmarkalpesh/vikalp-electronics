import Section, { SectionTitle } from '../ui/Section';

const clients = [
    { logo: "/img/clients/c1.png" },
    { logo: "/img/clients/c2.png" },
    { logo: "/img/clients/c3.png" },
    { logo: "/img/clients/c4.png" },
    { logo: "/img/clients/c5.png" },
    { logo: "/img/clients/c6.png" },
    { logo: "/img/clients/c7.png" },
    { logo: "/img/clients/c8.png" },
];

export default function Clients() {
    return (
        <Section id="clients" className="bg-white py-12 overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <SectionTitle title="Trusted By" subtitle="Our Clients" center={true} />
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll">
                    <div className="flex items-center gap-16 px-8">
                        {clients.map((client, index) => (
                            <ClientLogo
                                key={`a-${index}`}
                                logo={client.logo}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-16 px-8">
                        {clients.map((client, index) => (
                            <ClientLogo
                                key={`b-${index}`}
                                logo={client.logo}
                            />
                        ))}
                    </div>
                </div>

                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4">
                <p className="text-center text-gray-500 mt-8 text-sm">
                    Partnering with leading brands to deliver the best quality.
                </p>
            </div>
        </Section>
    );
}

function ClientLogo({ name, logo }) {
    return (
        <div className="flex flex-col items-center justify-center group cursor-pointer">
            <div className="w-40 h-20 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                <img
                    src={logo}
                    alt={name}
                    className="max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
            </div>
        </div>
    );
}
