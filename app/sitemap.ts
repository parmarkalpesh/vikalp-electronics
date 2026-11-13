import { origin, services } from './data';
import { guides } from './guides/data';
export default function sitemap() { return [
  { url: origin, priority: 1 },
  ...services.map(service => ({ url: origin + '/services/' + service.slug, priority: 0.9 })),
  { url: origin + '/guides', priority: 0.7 },
  ...guides.map(guide => ({ url: origin + '/guides/' + guide.slug, priority: 0.7 })),
  { url: origin + '/privacy', priority: 0.2 },
]; }
