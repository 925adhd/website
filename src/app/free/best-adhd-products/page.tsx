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
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function Page() {
  return <BestAdhdProductsPage />;
}
