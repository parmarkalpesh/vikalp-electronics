import { HomePage } from './site';
import type { Metadata } from 'next';
import { homeFaqs, buildFaqSchema } from './faq-data';
import { origin } from './data';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Page() {
  const faqSchema = buildFaqSchema(homeFaqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePage />
    </>
  );
}
