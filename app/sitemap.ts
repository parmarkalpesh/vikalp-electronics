import { origin, services } from './data';
import { guides } from './guides/data';
export default function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: origin, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    ...services.map(service => ({ url: origin + '/services/' + service.slug, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: origin + '/guides', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    ...guides.map(guide => ({ url: origin + '/guides/' + guide.slug, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: origin + '/about', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: origin + '/contact', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: origin + '/privacy', lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
  ];
}
