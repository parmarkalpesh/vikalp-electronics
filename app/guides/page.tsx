import type { Metadata } from 'next';
import { Header, Footer } from '../site';
import { guides } from './data';

export const metadata: Metadata = {
  title: 'Home appliance repair guides',
  description: 'Practical AC, refrigerator and washing machine troubleshooting guides from Vikalp Electric & Refrigeration in Jamnagar.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return <><Header/><main id="main" className="container guide-index"><span className="eyebrow">PRACTICAL ADVICE</span><h1>Helpful guides for <em>everyday repairs.</em></h1><p className="guide-lede">Start with safe, simple checks. When a repair needs a closer look, tell us the symptoms and your Jamnagar locality.</p><div className="guide-grid">{guides.map(guide => <a className="guide-card" href={'/guides/' + guide.slug} key={guide.slug}><span className="eyebrow">{guide.category} · {guide.readingTime}</span><h2>{guide.title}</h2><p>{guide.description}</p><span className="guide-more">Read guide ↗</span></a>)}</div></main><Footer/></>;
}
