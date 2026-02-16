import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vikalp-electronics.vercel.app'

    // Base routes
    const routes = [
        '',
        '/about',
        '/services',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Service specific routes - high priority
    const services = [
        '/services/ac-installation-jamnagar',
        '/services/ac-repair-jamnagar',
        '/services/fridge-repair-jamnagar',
        '/services/washing-machine-repair-jamnagar',
        '/services/cctv-installation-jamnagar',
        '/services/ro-water-filter-service-jamnagar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...services]
}
