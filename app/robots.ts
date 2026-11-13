import { origin } from './data';
export default function robots() { return { rules: { userAgent: '*', allow: '/' }, sitemap: origin + '/sitemap.xml' }; }
