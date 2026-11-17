import { origin } from './data';
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: origin + '/sitemap.xml',
    host: origin,
  };
}
