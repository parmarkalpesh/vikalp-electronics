import { Header, Footer } from '../site';

export const metadata = {
  title: 'Privacy',
  description: 'How the Vikalp Electric & Refrigeration website prepares WhatsApp service enquiries and handles earlier inbox records.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return <><Header/><main id="main" className="container privacy">
    <span className="eyebrow">YOUR INFORMATION</span><h1>Privacy, <em>kept simple.</em></h1>
    <p>When you fill in the service form, your browser puts your name, mobile number, locality, service, request type, optional preferred date and details into a WhatsApp message addressed to Vikalp. The website does not save new form enquiries or send them to a website database. Review the message and tap <strong>Send</strong> in WhatsApp to deliver it. Opening WhatsApp alone does not send the message.</p>
    <h2>Your choice</h2><p>You can use the form, call us directly or open our WhatsApp link. A preferred service date is a request, not a confirmed appointment. WhatsApp processes messages you choose to send under its own privacy terms.</p>
    <h2>Earlier enquiries</h2><p>Enquiries submitted through the website before the switch to WhatsApp may remain in the previous private owner inbox for follow-up. New form entries no longer go there. Contact us if you want an earlier enquiry corrected or deleted.</p>
    <h2>Third-party services</h2><p>WhatsApp, Google Maps and Instagram open when you follow their links and have their own privacy policies. The site serves its fonts locally. The hosting provider may process basic technical request information to deliver and protect the website.</p>
    <h2>Contact</h2><p>For questions about your information, call <a href="tel:+919374170929">+91 93741 70929</a> or email <a href="mailto:vikalpjamnagar@gmail.com">vikalpjamnagar@gmail.com</a>.</p>
  </main><Footer/></>;
}
