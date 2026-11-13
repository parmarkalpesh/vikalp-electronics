import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer } from '../../site';
import { guides } from '../data';
import { origin, phone } from '../../data';

export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) return { title: 'Guide not found' };
  return { title: guide.title, description: guide.description, alternates: { canonical: '/guides/' + slug }, openGraph: { title: guide.title, description: guide.description, type: 'article' } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Guides', item: origin + '/guides' }, { '@type': 'ListItem', position: 3, name: guide.title, item: origin + '/guides/' + slug }] };
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, mainEntityOfPage: origin + '/guides/' + slug, author: { '@type': 'Organization', name: 'Vikalp Electric & Refrigeration', '@id': origin + '/#business' }, publisher: { '@id': origin + '/#business' } };
  return <><Header/><main id="main" className="container guide-article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}/><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/guides">Guides</a><span>/</span><span>{guide.category}</span></nav><article><span className="eyebrow">{guide.category} · {guide.readingTime}</span><h1>{guide.title}</h1><p className="guide-lede">{guide.intro}</p><h2>What you can check safely</h2><div className="guide-checks">{guide.checks.map((check, i) => <section key={check.heading}><span className="guide-number">0{i + 1}</span><div><h3>{check.heading}</h3><p>{check.body}</p></div></section>)}</div><h2>When to request a repair</h2><p>{guide.whenToCall}</p><div className="guide-safety"><strong>Safety first</strong><p>{guide.safety}</p></div><div className="guide-cta"><h2>Need help in Jamnagar?</h2><p>Contact Vikalp with the appliance, the symptoms and your locality. The team will confirm availability and next steps.</p><div className="hero-actions"><a className="button" href={'https://wa.me/919374170929?text=' + encodeURIComponent('Hello Vikalp, I need help with ' + guide.serviceName + ' in Jamnagar.')} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a><a className="button button-outline" href={'tel:' + phone}>Call Vikalp</a><a className="button button-outline" href={'/?service=' + guide.serviceSlug + '#book'}>Send an enquiry</a></div></div><p className="guide-related">Related service: <a href={'/services/' + guide.serviceSlug}>{guide.serviceName} in Jamnagar ↗</a></p></article></main><Footer/></>;
}
