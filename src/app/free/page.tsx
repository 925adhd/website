import type { Metadata } from 'next';
import FreePage from './free-page';

export const metadata: Metadata = {
  title: 'Is This Worth My Energy? | 925 ADHD',
  description:
    'Coming soon: Paste any job, side hustle, or platform. Get a quick breakdown of what to watch out for. Free tool from 925 ADHD.',
  alternates: { canonical: 'https://925adhd.com/free' },
  openGraph: {
    title: 'Is This Worth My Energy? | 925 ADHD',
    description:
      'Coming soon: Paste any job, side hustle, or platform. Get a quick breakdown of what to watch out for. Free tool from 925 ADHD.',
    url: 'https://925adhd.com/free',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://925adhd.com/free#tool',
  url: 'https://925adhd.com/free',
  name: 'Is This Worth My Energy?',
  applicationCategory: 'UtilityApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en-US',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreePage />
    </>
  );
}
