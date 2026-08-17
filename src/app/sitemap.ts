import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vikalp-electronics.vercel.app'
    const currentDate = new Date()

    // Base routes
    const coreRoutes = [
        { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'daily' as const },
        { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    ]

    // Service specific routes - high priority local landing pages
    const serviceRoutes = [
        '/services/ac-repair-jamnagar',
        '/services/ac-installation-jamnagar',
        '/services/fridge-repair-jamnagar',
        '/services/washing-machine-repair-jamnagar',
        '/services/cctv-installation-jamnagar',
        '/services/ro-water-filter-service-jamnagar',
        '/services/tv-repair-jamnagar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Informational Blog Articles - Long-tail search authority
    const blogRoutes = [
        '/blog/ac-servicing-guide-jamnagar',
        '/blog/fridge-repair-cooling-problems-guide',
        '/blog/washing-machine-maintenance-tips',
        '/blog/cctv-installation-guide-jamnagar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...coreRoutes.map(r => ({ ...r, lastModified: currentDate })),
        ...serviceRoutes,
        ...blogRoutes,
    ]
}

