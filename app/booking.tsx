'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { services, phone } from './data';
import { buildWhatsAppEnquiryUrl, type WhatsAppEnquiry } from './whatsapp-message';

function todayInJamnagar() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('service');
    if (services.some(service => service.slug === selected)) setSelectedService(selected!);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const requestType = String(form.get('requestType') || 'service');
    const preferredDate = String(form.get('preferredDate') || '');
    if (preferredDate && preferredDate < todayInJamnagar()) {
      setError('Please choose today or a future preferred date.');
      return;
    }
    if (!['service', 'quote', 'question'].includes(requestType)) {
      setError('Please choose a request type.');
      return;
    }
    const enquiry: WhatsAppEnquiry = {
      name: String(form.get('name') || ''),
      mobile: String(form.get('phone') || ''),
      locality: String(form.get('area') || ''),
      serviceSlug: String(form.get('service') || ''),
      requestType: requestType as WhatsAppEnquiry['requestType'],
      preferredDate,
      details: String(form.get('issue') || ''),
    };
    try {
      const url = buildWhatsAppEnquiryUrl(enquiry);
      setError('');
      window.location.assign(url);
    } catch {
      setError('Please choose a service and try again.');
    }
  }

  return <section id="book" className="booking-section"><div className="container booking-grid"><div>
    <span className="eyebrow">LET’S GET IT SORTED</span><h2>One small message.<br/><em>One less worry.</em></h2>
    <p>Tell us what needs attention. We’ll put your details into a WhatsApp message so you can review and send it to Vikalp.</p>
    <a className="contact-phone" href={'tel:' + phone}><Phone/> +91 93741 70929</a>
    <span className="booking-note">Prefer a conversation? Give us a call.</span>
  </div><form onSubmit={submit} onChange={() => error && setError('')}><h3>Request a service</h3><div className="booking-fields">
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="e.g. Jay Patel" required minLength={2} maxLength={80}/></label><label>Mobile number<input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="e.g. 98765 43210" required minLength={10} maxLength={25} pattern="(?:\+?91[\s-]?)?[6-9][0-9\s-]{9,13}" title="Enter a 10-digit Indian mobile number, optionally with +91."/></label></div>
    <label>Locality in Jamnagar<input name="area" autoComplete="address-level3" placeholder="e.g. Gokul Nagar" required minLength={2} maxLength={100}/></label>
    <label htmlFor="service">What can we help with?</label><select id="service" name="service" required value={selectedService} onChange={event => setSelectedService(event.target.value)}><option value="" disabled>Select a service</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.short}</option>)}</select>
    <div className="form-row"><label>Request type<select name="requestType" defaultValue="service"><option value="service">Request a service visit</option><option value="quote">Request a quotation</option><option value="question">Ask a question</option></select></label><label>Preferred date <span>(optional)</span><input type="date" name="preferredDate"/></label></div>
    <label className="issue-label">A few details <span>(optional)</span><textarea name="issue" rows={3} maxLength={2000} placeholder="Appliance brand, what’s happening…"/></label>
    <label className="consent-label"><input type="checkbox" name="consent" required/><span>I understand these details will open in WhatsApp and will be sent only when I tap Send there. <a href="/privacy" target="_blank" rel="noreferrer">Privacy notice</a></span></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button full" type="submit">Continue to WhatsApp <ArrowRight size={17}/></button>
    <p className="form-note">Please tap <strong>Send</strong> in WhatsApp to deliver your enquiry. Your preferred date is a request, not a confirmed appointment. This website does not save new form enquiries.</p>
  </div></form></div></section>;
}
