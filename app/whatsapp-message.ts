import { phone, services } from './data';

export type WhatsAppEnquiry = {
  name: string;
  mobile: string;
  locality: string;
  serviceSlug: string;
  requestType: 'service' | 'quote' | 'question';
  preferredDate: string;
  details: string;
};

const requestLabels = {
  service: 'Service visit',
  quote: 'Quotation',
  question: 'Question',
};

export function buildWhatsAppEnquiryUrl(enquiry: WhatsAppEnquiry): string {
  const service = services.find(item => item.slug === enquiry.serviceSlug);
  if (!service) throw new Error('Please choose a service.');
  const message = [
    'Hello Vikalp, I am contacting you from your website.',
    '',
    `Name: ${enquiry.name.trim()}`,
    `Mobile: ${enquiry.mobile.trim()}`,
    `Locality: ${enquiry.locality.trim()}`,
    `Service: ${service.short}`,
    `Request: ${requestLabels[enquiry.requestType]}`,
    enquiry.preferredDate ? `Preferred date: ${enquiry.preferredDate}` : null,
    enquiry.details.trim() ? `Problem / details: ${enquiry.details.trim()}` : null,
  ].filter(line => line !== null).join('\n');
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
