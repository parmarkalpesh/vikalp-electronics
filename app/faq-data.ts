// Extended FAQ database for AEO (Answer Engine Optimization)
// These cover common customer questions for use across service pages and schema

export const homeFaqs: [string, string][] = [
  ['Which services does Vikalp offer in Jamnagar?', 'Vikalp Electric & Refrigeration handles AC repair and servicing, AC installation and uninstallation, AC gas refilling, refrigerator repair, washing machine repair, electrical wiring and repairs, CCTV installation, RO water purifier service, inverter and UPS service, LED TV and Smart TV repair, microwave oven repair, geyser repair and commercial refrigeration. Call +91 93741 70929 to discuss your specific appliance.'],
  ['Where is Vikalp Electric & Refrigeration located?', 'Vikalp Electric & Refrigeration is located at Shop No. 1, Murlidhar Nagar 1, Gokul Nagar, Jamnagar, Gujarat 361004. Use the Google Maps link on this website for directions from your location.'],
  ['How can I book a service visit from Vikalp?', 'You can book a service visit by calling +91 93741 70929, sending a WhatsApp message to the same number, or using the service enquiry form on this website. Share your name, locality, the appliance and the problem for a faster response.'],
  ['How much does appliance repair cost in Jamnagar?', 'The cost depends on the appliance, the specific fault, any parts required and your location within Jamnagar. Ask about inspection charges before the visit and request a written quote before approving any repair work.'],
  ['Does Vikalp provide doorstep service in Jamnagar?', 'Yes, Vikalp provides doorstep service visits in Jamnagar. Contact the team with your locality to confirm visit availability and scheduling.'],
  ['How often should I service my AC?', 'Most manufacturers recommend servicing an air conditioner once or twice a year — typically before summer and before winter. If your AC is used heavily or in a dusty environment, more frequent filter cleaning may be needed. Follow your AC manual and ask a technician if performance changes.'],
  ['Why is my AC running but not cooling?', 'Common causes include a dirty filter restricting airflow, the AC being set to Fan mode instead of Cool, low refrigerant after a leak, or an electrical or component fault. Try checking the mode and filter first. If cooling remains poor, arrange an inspection — do not assume a gas refill is always the fix.'],
  ['Why is my refrigerator not cooling?', 'Possible causes include the door seal not closing properly, the thermostat being set too low, a condenser or evaporator fault, or a compressor problem. Check whether both compartments are warm or just one. Keep the doors closed and move perishable food to safe storage if cooling has stopped completely.'],
  ['Why is my washing machine not draining?', 'The drain filter may be blocked, the drain hose may be kinked or blocked, or there may be a pump fault. Check for an error code on the display. Do not force open a locked door holding water. Contact Vikalp with the machine type and error code for further guidance.'],
  ['Can I get CCTV installed at my home in Jamnagar?', 'Yes. Vikalp installs CCTV camera systems for homes and shops in Jamnagar. Contact the team with the number of areas you want to cover and whether cameras are already installed for a discussion about suitable options.'],
  ['What should I do if my RO water purifier is producing less water?', 'Low output from an RO purifier can be caused by a blocked pre-filter, a worn membrane, low inlet water pressure or a blocked post-filter. Check whether the inlet water supply is normal. Contact Vikalp with your purifier brand and model to discuss a service visit.'],
  ['How do I contact Vikalp on WhatsApp?', 'Send a WhatsApp message to +91 93741 70929. You can also use the WhatsApp button on this website, which pre-fills a message with your enquiry details after you complete the service form.'],
];

// Gujarati FAQs for multilingual reach
export const gujaratiFaqs: [string, string][] = [
  ['જામનગરમાં Vikalp ક્યાં આવેલ છે?', 'Vikalp Electric & Refrigeration જામનગરના Gokul Nagar, Murlidhar Nagar 1, Shop No. 1, Gujarat 361004 માં આવેલ છે. ગૂગલ Maps પર દિશા-નિર્દેશ માટે વેબસાઇટ પર આવેલ Maps લિંક વાપરો.'],
  ['જામનગરમાં AC રિપેર ક્યાં થઈ શકે?', 'Vikalp Electric & Refrigeration જામનગરમાં AC રિપેર, સર્વિસ, ઇન્સ્ટૉલેશન અને ગૅસ ભરવાની સેવા આપે છે. +91 93741 70929 પર ફોન અથવા WhatsApp કરો.'],
  ['જામનગરમાં ફ્રિજ રિપેર ક્યાં થઈ શકે?', 'Vikalp Electric & Refrigeration જામનગરમાં ઘરે આવીને ફ્રિજ (રેફ્રિજરેટર) રિપેર કરે છે. +91 93741 70929 પર સંપર્ક કરો.'],
  ['જામનગરમાં ઇલેક્ટ્રિશિયન ક્યાં મળે?', 'Vikalp Electric & Refrigeration જામનગરમાં ઇલેક્ટ્રિકલ વાયરિંગ, ફિક્સ્ચર અને ઇલેક્ટ્રિક ફૉલ્ટ રિપેર માટે ઉપલબ્ધ છે. +91 93741 70929 પર ફોન કરો.'],
  ['જામનગરમાં CCTV ઇન્સ્ટૉલ કોણ કરે?', 'Vikalp Electric & Refrigeration જામનગરમાં ઘર અને દુકાન માટે CCTV ઇન્સ્ટૉલ કરે છે. +91 93741 70929 પર સંપર્ક કરો.'],
];

// Schema markup for FAQPage - use on pages with FAQ sections
export function buildFaqSchema(faqs: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}
