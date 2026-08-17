import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vikalp Electric & Refrigeration - AC Repair & Appliance Service Jamnagar',
    short_name: 'Vikalp Electronics',
    description: 'Expert AC repair, gas charging, fridge repair, washing machine service & CCTV installation in Jamnagar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/img/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
