import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, ServiceIcon } from '../../site';
import { services, phone, origin, address, profile } from '../../data';
import { guides } from '../../guides/data';
import { serviceContent } from '../../service-content';

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.short + ' in Jamnagar', description: service.intro, alternates: { canonical: '/services/' + slug }, openGraph: { title: service.short + ' in Jamnagar | Vikalp', description: service.intro } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const content = serviceContent[slug];
  const structured = { '@context': 'https://schema.org', '@type': 'Service', name: service.short + ' in Jamnagar', description: service.intro, areaServed: { '@type': 'City', name: 'Jamnagar' }, provider: { '@id': origin + '/#business' }, url: origin + '/services/' + slug };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: service.short + ' in Jamnagar', item: origin + '/services/' + slug }] };
  return <><Header/><main id="main" className="container service-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}/>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#services">Services</a><span>/</span><span>{service.name}</span></nav>
    <div className="detail-hero"><div><span className="eyebrow">LOCAL SERVICE · JAMNAGAR</span><h1>{service.short}<br/><em>in Jamnagar.</em></h1><p>{service.intro}</p><div className="hero-actions"><a className="button" href={'https://wa.me/919374170929?text=' + encodeURIComponent('Hello Vikalp, I would like to enquire about ' + service.short + ' in Jamnagar.')} target="_blank" rel="noreferrer">Enquire on WhatsApp ↗</a><a className="button" href={'/?service=' + slug + '#book'}>Submit a service enquiry ↗</a><a className="button button-outline" href={'tel:' + phone}>Call +91 93741 70929</a></div></div><div className="detail-symbol">{service.icon === 'air' ? <img className="installation-illustration" src="/ac-installation.webp" width="900" height="900" loading="lazy" alt="Air conditioner installation illustration from Vikalp’s original website"/> : <><ServiceIcon name={service.icon}/><span>{service.tag}</span></>}</div></div>
    <div className="detail-content"><section><span className="eyebrow">LET’S UNDERSTAND THE ISSUE</span><h2>How can we help?</h2><ul>{service.issues.map(issue => <li key={issue}>{issue}</li>)}</ul></section><section><span className="eyebrow">BEFORE YOU BOOK</span><h2>A helpful starting point.</h2><p>{service.care}</p><p>Service timing, inspection charges, parts availability and the final quote are confirmed directly by the team. Contact us with your locality to check visit availability.</p></section></div>
    <section className="detail-overview"><span className="eyebrow">THE SERVICE</span><h2>Clear advice before work begins.</h2><p>{content.overview}</p><h3>How an enquiry works</h3><ol>{content.process.map(step => <li key={step}>{step}</li>)}</ol></section>
    <section className="detail-local"><div><span className="eyebrow">BASED IN JAMNAGAR</span><h2>Local help, direct contact.</h2><p>Vikalp is based at {address}. Call or send your locality to ask about a visit. The team will confirm availability and any inspection charge directly.</p><a className="text-link" href={profile} target="_blank" rel="noreferrer">View the Google Business Profile ↗</a></div><div><span className="eyebrow">WHY CONTACT VIKALP</span><h2>A practical first conversation.</h2><p>Describe the issue, ask what an inspection involves and review the quote before you approve a repair. You can reach one local contact for cooling, appliances, electrical work, CCTV and RO enquiries.</p></div></section>
    <section className="detail-faq"><span className="eyebrow">COMMON QUESTIONS</span><h2>Questions about {service.name.toLowerCase()}.</h2>{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    {guides.filter(guide => guide.serviceSlug === slug).map(guide => <aside className="service-guide" key={guide.slug}><span className="eyebrow">HELPFUL GUIDE</span><h2>{guide.title}</h2><p>{guide.description}</p><a className="text-link" href={'/guides/' + guide.slug}>Read the guide ↗</a></aside>)}
    <div className="detail-related"><h2>More care for your home.</h2><div>{services.filter(item => item.slug !== slug).map(item => <a href={'/services/' + item.slug} key={item.slug}>{item.short} ↗</a>)}</div></div>
  </main><Footer/></>;
}
