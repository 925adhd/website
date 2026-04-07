import type { Metadata } from 'next';
import EnergyCheckerPage from './energy-checker-page';

export const metadata: Metadata = {
  title: 'Is This Worth My Energy? | Free ADHD Side Hustle Checker | 925 ADHD',
  description:
    'Free ADHD-friendly tool: paste any job, side hustle, or platform and get a clear breakdown of effort, red flags, and energy cost before you waste time.',
  alternates: { canonical: 'https://925adhd.com/free/energy-checker' },
  openGraph: {
    title: 'Is This Worth My Energy? | Free ADHD Side Hustle Checker | 925 ADHD',
    description:
      'Free ADHD-friendly tool: paste any job, side hustle, or platform and get a clear breakdown of effort, red flags, and energy cost before you waste time.',
    url: 'https://925adhd.com/free/energy-checker',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://925adhd.com/free/energy-checker#tool',
  url: 'https://925adhd.com/free/energy-checker',
  name: 'Is This Worth My Energy?',
  applicationCategory: 'UtilityApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en-US',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://925adhd.com/' },
    { '@type': 'ListItem', position: 2, name: 'Free Resources', item: 'https://925adhd.com/free' },
    { '@type': 'ListItem', position: 3, name: 'Is This Worth My Energy?', item: 'https://925adhd.com/free/energy-checker' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <EnergyCheckerPage />
    </>
  );
}
