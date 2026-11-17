const vercelOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://vikalp-electronics.vercel.app';
export const origin = (process.env.NEXT_PUBLIC_SITE_URL || vercelOrigin).replace(/\/$/, '');
export const phone = '+919374170929';
export const profile = 'https://share.google/8UBPLmqHjFPeUCVdw';
export const address = 'Shop No. 1, Murlidhar Nagar 1, Gokul Nagar, Jamnagar, Gujarat 361004';
export const services = [
 {slug:'ac-repair-jamnagar',name:'Air conditioning',short:'AC repair & servicing',icon:'air',tag:'Breathe easy',desc:'From a seasonal service to a cooling problem, get your comfort back on track.',intro:'AC repair and servicing in Jamnagar for homes and businesses. Contact Vikalp for cooling issues, routine maintenance, installation enquiries and service visits.',issues:['AC running but not cooling well','Water dripping from the indoor unit','Unusual noise or airflow problems','Seasonal cleaning and maintenance'],care:'Tell us whether your AC is a split or window model, its brand, and what has changed. A technician can assess the fault and explain the work needed. Gas charging should follow a diagnosis, rather than being assumed to fix every cooling issue.'},
 {slug:'ac-service-jamnagar',name:'AC servicing',short:'Routine AC service',icon:'air',tag:'Seasonal care',desc:'Cleaning and upkeep enquiries for split and window air conditioners.',intro:'Arrange routine AC service in Jamnagar for a split or window unit. Contact Vikalp about filter care, airflow, cleaning and a service inspection before or during regular use.',issues:['Dusty filters and reduced airflow','AC taking longer to cool the room','Water dripping during operation','Routine cleaning and maintenance enquiries'],care:'Share your AC brand, model, type and when it was last serviced. Ask what the visit includes and whether any repair, part or refrigerant work requires a separate quote.'},
 {slug:'refrigerator-repair-jamnagar',name:'Refrigeration',short:'Fridge & refrigerator repair',icon:'fridge',tag:'Keep it fresh',desc:'Cooling troubles, unusual sounds or a leaky fridge? Let\'s take a closer look.',intro:'Refrigerator repair enquiries in Jamnagar, including cooling problems, water leaks and unusual operating sounds. Reach Vikalp in Gokul Nagar to discuss your fridge and arrange an inspection.',issues:['Fridge compartment not cooling','Excessive ice buildup','Water pooling around the refrigerator','Unusual sounds or repeated cycling'],care:'Share the refrigerator brand, model and symptoms when you contact us. Keep the doors closed as much as possible if cooling has stopped, and ask about the earliest available inspection.'},
 {slug:'washing-machine-repair-jamnagar',name:'Washing machines',short:'Washing machine repair',icon:'washer',tag:'Back to your routine',desc:'Help with drainage, spin cycles and the little faults that disrupt laundry day.',intro:'Washing machine repair in Jamnagar for drainage, spin and wash-cycle problems. Contact Vikalp with your model and symptoms to check service availability.',issues:['Water not draining','Drum not spinning','Leaks during a wash cycle','Machine stopping or displaying an error'],care:'Let us know if your washing machine is a front-load, top-load or semi-automatic model. A photo of the model label and any error message can help us understand your enquiry.'},
 {slug:'electrical-services-jamnagar',name:'Electrical care',short:'Electrical repairs & wiring',icon:'bolt',tag:'Power everyday life',desc:'Practical help with home wiring, fixtures and everyday electrical needs.',intro:'Contact Vikalp Electric & Refrigeration in Jamnagar for home electrical service enquiries, wiring and fixture work.',issues:['House wiring enquiries','Light and fan installation','Switch and socket problems','Electrical fixture servicing'],care:'Describe the work and the location when you contact us. If you notice a burning smell or exposed wiring, avoid touching the affected equipment and seek qualified help.'},
 {slug:'cctv-installation-jamnagar',name:'CCTV & security',short:'CCTV installation & maintenance',icon:'camera',tag:'A clearer view',desc:'Camera installation and maintenance for a better view of your home or shop.',intro:'CCTV installation and maintenance in Jamnagar for homes and shops. Speak with Vikalp about camera placement, your site and an appropriate security setup.',issues:['New CCTV installation','Camera image or connection problems','Existing system maintenance','Home and shop coverage enquiries'],care:'Tell us the number of areas you want to cover and whether cameras are already installed. An inspection helps determine placement, wiring and suitable equipment.'},
 {slug:'ro-water-purifier-service-jamnagar',name:'RO water purifiers',short:'RO installation & servicing',icon:'water',tag:'Care in every drop',desc:'Installation and service support to keep your purifier working as it should.',intro:'RO water purifier installation and servicing in Jamnagar. Contact Vikalp for filter, water-flow and maintenance enquiries.',issues:['Low or no water flow','Purifier leakage','Filter replacement enquiries','New purifier installation'],care:'Share your purifier brand, model and the date of its last service if you know it. Filter replacement needs depend on the system, usage and water conditions.'},
 {slug:'ac-installation-jamnagar',name:'AC installation',short:'AC installation & uninstallation',icon:'air',tag:'Cool comfort, installed',desc:'Professional AC installation and uninstallation for split and window air conditioners in Jamnagar.',intro:'AC installation and uninstallation in Jamnagar for split and window air conditioners. Contact Vikalp to discuss bracket placement, electrical requirements and service availability.',issues:['New split AC installation','Window AC fitting','AC unit relocation','Old AC uninstallation and removal'],care:'Share the AC brand, tonnage and the room size. Let the team know if an existing unit is being removed or if wall bracket work is needed. Electrical point availability should be checked before installation.'},
 {slug:'ac-gas-refilling-jamnagar',name:'AC gas refilling',short:'AC gas refilling & leak check',icon:'air',tag:'Coolant done right',desc:'AC refrigerant diagnosis and gas refilling for split and window ACs after leak inspection.',intro:'AC gas refilling service in Jamnagar. Vikalp assesses the system for leaks before recommending refrigerant work. Contact us with your AC model and cooling problem for a diagnosis.',issues:['AC not cooling despite running','Suspected refrigerant loss','Post-repair gas top-up','Leak detection and check'],care:'Gas refilling should follow a proper diagnosis and leak check, not be assumed as the first fix. Share the AC type, brand, age and symptoms so the technician can inspect the system correctly.'},
 {slug:'inverter-ups-service-jamnagar',name:'Inverter & UPS',short:'Inverter & UPS service',icon:'bolt',tag:'Power when you need it',desc:'Inverter and UPS repair, battery maintenance and service enquiries for homes and offices in Jamnagar.',intro:'Inverter and UPS service in Jamnagar for home and office power backup systems. Contact Vikalp for battery, charging or backup failure enquiries.',issues:['Inverter not turning on','Battery not charging','Short backup time','UPS alarm or fault'],care:'Share the inverter or UPS brand, model and battery age. Note whether the problem started after a power cut or gradually over time.'},
 {slug:'led-tv-repair-jamnagar',name:'LED & Smart TV repair',short:'LED TV & Smart TV repair',icon:'bolt',tag:'Back to your screen',desc:'LED television and Smart TV repair for display, power and connectivity issues in Jamnagar.',intro:'LED TV and Smart TV repair in Jamnagar. Contact Vikalp with your TV brand, screen size and fault description for service availability.',issues:['No display or black screen','TV not turning on','Picture or colour problems','Smart TV connectivity issues'],care:'Share the TV brand, model number and the specific fault. Note whether the issue is intermittent or constant, and whether sound still works when the screen has a problem.'},
 {slug:'microwave-geyser-repair-jamnagar',name:'Microwave & Geyser repair',short:'Microwave oven & geyser repair',icon:'bolt',tag:'Warm meals and hot showers',desc:'Microwave oven and water geyser repair for heating faults, power issues and leaks in Jamnagar.',intro:'Microwave oven and geyser repair in Jamnagar. Contact Vikalp for heating problems, power faults and water heater leaks.',issues:['Microwave not heating','Geyser water not heating','Geyser leaking','Microwave display or turntable issue'],care:'For geyser repairs, note whether the unit is electric or solar. Share the brand and approximate age. If the geyser is leaking, switch it off at the power source before contacting us.'},
 {slug:'commercial-refrigeration-jamnagar',name:'Commercial refrigeration',short:'Commercial refrigeration service',icon:'fridge',tag:'Business-grade cold',desc:'Commercial refrigeration repair and maintenance for shops, restaurants and business premises in Jamnagar.',intro:'Commercial refrigeration service in Jamnagar for display chillers, deep freezers, water coolers and commercial cold rooms. Contact Vikalp with your equipment type and fault.',issues:['Commercial chiller not cooling','Deep freezer temperature problems','Water cooler repair','Refrigeration equipment maintenance'],care:'Share the equipment type, brand and approximate age. For urgent cooling failures affecting food stock, ask about priority visit availability.'},
];
export const faqs = [
 ['Which services does Vikalp offer in Jamnagar?','We handle enquiries for AC repair and servicing, refrigeration, washing machines, electrical work, CCTV installation and maintenance, and RO water purifier servicing. Select a service or call us to discuss your appliance.'],
 ['Where is Vikalp located?','You can find Vikalp Electric & Electronic at Murlidhar Nagar-1, Radar Road, Pavan Chakki, Gokul Nagar, Jamnagar, Gujarat 361006. Use our Google Maps link for directions.'],
 ['How can I arrange a service visit?','Submit our contact form, call +91 93741 70929 or send a WhatsApp enquiry with your appliance, the problem and your locality. The team will confirm service availability and a suitable time directly.'],
 ['How much will a repair cost?','The cost depends on the appliance, the fault, any parts needed and your location. Ask about inspection charges and request a quote before approving repair work.'],
 ['Can I contact you outside regular hours?','Our supplied Google business profile lists the shop as open 24 hours. Call to confirm current availability; technician visits and response times are arranged directly.'],
];
export const business = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Electrician', 'HomeAndConstructionBusiness'],
  '@id': origin + '/#business',
  name: 'Vikalp Electric & Refrigeration',
  alternateName: 'Vikalp Electric & Electronic',
  url: origin,
  telephone: phone,
  email: 'vikalpjamnagar@gmail.com',
  logo: origin + '/vikalp-logo.png',
  image: origin + '/home-comfort.webp',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 1, Murlidhar Nagar 1, Gokul Nagar',
    addressLocality: 'Jamnagar',
    addressRegion: 'Gujarat',
    postalCode: '361004',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    {'@type': 'City', name: 'Jamnagar'},
    {'@type': 'Place', name: 'Gokul Nagar, Jamnagar'},
    {'@type': 'Place', name: 'Patel Colony, Jamnagar'},
    {'@type': 'Place', name: 'Digjam Circle, Jamnagar'},
    {'@type': 'Place', name: 'Khodiyar Colony, Jamnagar'},
    {'@type': 'Place', name: 'Saru Section, Jamnagar'},
    {'@type': 'Place', name: 'Valkeshwari, Jamnagar'},
    {'@type': 'Place', name: 'Bedeshwar, Jamnagar'},
    {'@type': 'Place', name: 'Lal Bunglow, Jamnagar'},
    {'@type': 'Place', name: 'Gulabnagar, Jamnagar'},
  ],
  sameAs: [
    'https://share.google/8UBPLmqHjFPeUCVdw',
    'https://www.instagram.com/vikalpelectronic_jamnagar/',
    'https://maps.app.goo.gl/fsQ6cfAsD2zguWpf9',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance and electrical services',
    itemListElement: services.map(s => ({'@type': 'Offer', itemOffered: {'@type': 'Service', name: s.short, areaServed: 'Jamnagar', url: origin + '/services/' + s.slug}})),
  },
};
