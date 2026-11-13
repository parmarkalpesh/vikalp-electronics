import { notFound, permanentRedirect } from 'next/navigation';
import { services } from '../data';

const aliases: Record<string, string> = {
  'ro-service-jamnagar': 'ro-water-purifier-service-jamnagar',
};

export function generateStaticParams() {
  return [...services.map(service => ({ service: service.slug })), ...Object.keys(aliases).map(service => ({ service }))];
}

// Preserve the existing canonical service URLs; permanent redirects avoid duplicate pages.
export default async function ServiceAlias({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const slug = aliases[service] || service;
  if (!services.some(item => item.slug === slug)) notFound();
  permanentRedirect('/services/' + slug);
}
