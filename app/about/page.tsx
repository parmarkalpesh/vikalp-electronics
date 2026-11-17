import type { Metadata } from 'next';
import { Header, Footer } from '../site';
import { phone, address, profile, origin } from '../data';
import { ArrowUpRight, MapPin, Phone, MessageCircle, ShieldCheck, Clock3, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Vikalp Electric & Refrigeration | Jamnagar',
  description:
    'Learn about Vikalp Electric & Refrigeration in Gokul Nagar, Jamnagar. Local AC repair, refrigerator, washing machine, electrical, CCTV and RO water purifier specialists.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Vikalp Electric & Refrigeration | Jamnagar',
    description:
      'Vikalp Electric & Refrigeration is Jamnagar\'s local team for AC, refrigerator, washing machine, electrical, CCTV and RO water purifier services. Based in Gokul Nagar.',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': origin + '/about#webpage',
  url: origin + '/about',
  name: 'About Vikalp Electric & Refrigeration',
  description:
    'Vikalp Electric & Refrigeration provides AC repair, refrigerator repair, washing machine repair, electrical services, CCTV installation and RO water purifier service in Jamnagar, Gujarat.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
      { '@type': 'ListItem', position: 2, name: 'About', item: origin + '/about' },
    ],
  },
  mainEntity: { '@id': origin + '/#business' },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <Header />
      <main id="main" className="container about-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span><span>About</span>
        </nav>

        <section className="about-hero">
          <span className="eyebrow"><span className="tiny-line" /> YOUR NEIGHBOURHOOD EXPERTS</span>
          <h1>About Vikalp<br /><em>Electric &amp; Refrigeration.</em></h1>
          <p className="about-lede">
            A local team serving Jamnagar homes and businesses with AC repair, refrigeration,
            washing machine repair, electrical work, CCTV installation and RO water purifier service.
            Based in Gokul Nagar, one familiar contact for the appliances that keep your home running.
          </p>
        </section>

        <section className="about-identity">
          <h2>Who we are</h2>
          <p>
            Vikalp Electric &amp; Refrigeration — also listed as Vikalp Electric &amp; Electronic — is based
            at {address}. We handle service enquiries for residential and commercial customers across
            Jamnagar, covering cooling systems, refrigeration, washing machines, home wiring, security
            cameras and water purification.
          </p>
          <p>
            We are a local contact, not a franchise or call centre. When you reach us, you speak
            directly with the team that handles the visit. That means clearer communication, honest
            inspection findings and a straightforward quote before any work begins.
          </p>
        </section>

        <section className="about-values">
          <h2>How we work</h2>
          <div className="values-grid">
            <div>
              <Wrench size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3>Inspect before recommending</h3>
              <p>
                We assess the fault before suggesting a repair. Gas refilling, part replacement and
                other work should follow a diagnosis — not be assumed as a default fix.
              </p>
            </div>
            <div>
              <ShieldCheck size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3>Quote before starting</h3>
              <p>
                Inspection charges, parts and the proposed repair are discussed and agreed before
                work begins. No surprises at the end of a visit.
              </p>
            </div>
            <div>
              <Clock3 size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3>Confirm availability directly</h3>
              <p>
                Service timing, visit scheduling and response times are confirmed directly by the
                team. Contact us with your locality to check current availability.
              </p>
            </div>
          </div>
        </section>

        <section className="about-services-summary">
          <h2>Services in Jamnagar</h2>
          <p>We handle enquiries for the following services across Jamnagar:</p>
          <ul className="services-list-plain">
            <li>AC repair, servicing and installation</li>
            <li>AC gas refilling after leak diagnosis</li>
            <li>Refrigerator and commercial refrigeration repair</li>
            <li>Washing machine repair</li>
            <li>Residential electrical wiring and repairs</li>
            <li>CCTV installation and maintenance</li>
            <li>RO water purifier service and installation</li>
            <li>Inverter and UPS service</li>
            <li>LED TV and Smart TV repair</li>
            <li>Microwave oven and geyser repair</li>
          </ul>
          <a className="text-link" href="/#services">View all service details <ArrowUpRight size={16} /></a>
        </section>

        <section className="about-area">
          <h2>Where we serve</h2>
          <p>
            Our primary service area is Jamnagar, Gujarat. We cover localities including Gokul Nagar,
            Patel Colony, Digjam Circle, Khodiyar Colony, Saru Section, Valkeshwari, Bedeshwar,
            Lal Bunglow, Gulabnagar and surrounding areas. Contact us with your locality to confirm
            visit availability for your address.
          </p>
        </section>

        <section className="about-contact-block" id="contact-about">
          <h2>Get in touch</h2>
          <p>Call, WhatsApp or use the service form on our homepage to describe your appliance and the problem.</p>
          <div className="contact-row">
            <a className="button" href={'tel:' + phone}>
              <Phone size={17} /> Call +91 93741 70929
            </a>
            <a className="button button-outline" href="https://wa.me/919374170929?text=Hello%20Vikalp%2C%20I%20need%20help%20with%20a%20service%20in%20Jamnagar." target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a className="button button-outline" href={profile} target="_blank" rel="noreferrer">
              <MapPin size={17} /> Find us on Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href="https://wa.me/919374170929?text=Hello%20Vikalp%2C%20I%20need%20help%20with%20a%20service%20in%20Jamnagar."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Vikalp on WhatsApp"
      >
        <MessageCircle size={23} /><span>Let&apos;s talk</span>
      </a>
    </>
  );
}
