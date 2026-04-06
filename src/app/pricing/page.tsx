import type { Metadata } from 'next';
import PricingPage from './pricing-page';

export const metadata: Metadata = {
  title: 'Pricing | 925 ADHD',
  description:
    'Get lifetime access to 70+ vetted ways to earn online for just $9.25. One-time payment. No subscriptions. 30-day money-back guarantee.',
  alternates: { canonical: 'https://925adhd.com/pricing' },
  openGraph: {
    title: 'Pricing | 925 ADHD',
    description:
      'Get lifetime access to 70+ vetted ways to earn online for just $9.25. One-time payment. No subscriptions. 30-day money-back guarantee.',
    url: 'https://925adhd.com/pricing',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function Page() {
  return <PricingPage />;
}
