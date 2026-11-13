import assert from 'node:assert/strict';
import { buildWhatsAppEnquiryUrl } from '../app/whatsapp-message';

const url = new URL(buildWhatsAppEnquiryUrl({
  name: 'Test Customer', mobile: '98765 43210', locality: 'Gokul Nagar',
  serviceSlug: 'ac-service-jamnagar', requestType: 'quote',
  preferredDate: '2026-11-20', details: 'Split AC needs cleaning & inspection',
}));
assert.equal(url.origin, 'https://wa.me');
assert.equal(url.pathname, '/919374170929');
const message = url.searchParams.get('text') || '';
for (const part of [
  'Name: Test Customer', 'Mobile: 98765 43210', 'Locality: Gokul Nagar',
  'Service: Routine AC service', 'Request: Quotation',
  'Preferred date: 2026-11-20', 'Problem / details: Split AC needs cleaning & inspection',
]) assert.ok(message.includes(part), `WhatsApp message is missing ${part}`);
assert.throws(() => buildWhatsAppEnquiryUrl({
  name: 'Test', mobile: '9876543210', locality: 'Jamnagar', serviceSlug: 'not-a-service',
  requestType: 'service', preferredDate: '', details: '',
}));
console.log('PASS: WhatsApp destination, URL encoding and every customer-entered field.');
