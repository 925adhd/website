import type { Metadata } from 'next';
import BestAdhdProductsPage from './best-adhd-products-page';

export const metadata: Metadata = {
  title: 'Best Products for ADHD Adults (2026) | 925 ADHD',
  description:
    'Handpicked ADHD-friendly products — noise machines, planners, fidgets, focus tools, and more. Honest picks rated by energy and usefulness.',
  alternates: { canonical: 'https://925adhd.com/free/best-adhd-products' },
  openGraph: {
    title: 'Best Products for ADHD Adults (2026) | 925 ADHD',
    description:
      'Handpicked ADHD-friendly products — noise machines, planners, fidgets, focus tools, and more.',
    url: 'https://925adhd.com/free/best-adhd-products',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://925adhd.com/' },
    { '@type': 'ListItem', position: 2, name: 'Free Resources', item: 'https://925adhd.com/free' },
    { '@type': 'ListItem', position: 3, name: 'Best Products for ADHD Adults', item: 'https://925adhd.com/free/best-adhd-products' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BestAdhdProductsPage />
    </>
  );
}
