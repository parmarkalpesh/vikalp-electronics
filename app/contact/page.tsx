import type { Metadata } from 'next';
import { Header, Footer } from '../site';
import { phone, address, profile, origin } from '../data';
import Booking from '../booking';
import { ArrowUpRight, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Vikalp Electric & Refrigeration | Jamnagar',
  description:
    'Contact Vikalp Electric & Refrigeration in Jamnagar. Call +91 93741 70929, WhatsApp or use our service enquiry form. Located in Gokul Nagar, Jamnagar.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Vikalp Electric & Refrigeration | Jamnagar',
    description:
      'Call +91 93741 70929, WhatsApp or submit a service enquiry. Vikalp Electric & Refrigeration in Gokul Nagar, Jamnagar.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': origin + '/contact#webpage',
  url: origin + '/contact',
  name: 'Contact Vikalp Electric & Refrigeration',
  description: 'Contact page for Vikalp Electric & Refrigeration, Jamnagar.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: origin + '/contact' },
    ],
  },
  mainEntity: { '@id': origin + '/#business' },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Header />
      <main id="main" className="container contact-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span><span>Contact</span>
        </nav>

        <section className="contact-hero">
          <span className="eyebrow"><span className="tiny-line" /> GET IN TOUCH</span>
          <h1>Contact<br /><em>Vikalp Jamnagar.</em></h1>
          <p>
            Describe your appliance, the problem and your locality. The team will confirm
            availability and arrange a suitable visit time.
          </p>
        </section>

        <div className="contact-page-grid">
          <section className="contact-channels">
            <h2>Ways to reach us</h2>

            <div className="channel-card">
              <Phone size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Call us</h3>
                <p>Speak directly with the team about your service enquiry.</p>
                <a className="channel-link" href={'tel:' + phone}>+91 93741 70929</a>
              </div>
            </div>

            <div className="channel-card">
              <MessageCircle size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>WhatsApp</h3>
                <p>Send a message with your appliance details and locality.</p>
                <a
                  className="channel-link"
                  href="https://wa.me/919374170929?text=Hello%20Vikalp%2C%20I%20need%20help%20with%20a%20service%20in%20Jamnagar."
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="channel-card">
              <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>For non-urgent enquiries and written communication.</p>
                <a className="channel-link" href="mailto:vikalpjamnagar@gmail.com">vikalpjamnagar@gmail.com</a>
              </div>
            </div>

            <div className="channel-card">
              <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Visit us</h3>
                <p>{address}</p>
                <a className="channel-link" href={profile} target="_blank" rel="noreferrer">
                  Get directions on Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="hours-note">
              <span className="status-dot" />
              <p>Listed as open 24 hours on our Google Business Profile. Call to confirm current technician availability for your service.</p>
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Service enquiry form</h2>
            <Booking />
          </section>
        </div>
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
