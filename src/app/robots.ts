import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            }
        ],
        sitemap: 'https://vikalp-electronics.vercel.app/sitemap.xml',
        host: 'https://vikalp-electronics.vercel.app',
    }
}

