import type { Metadata } from 'next';
import PricingPage from './pricing-page';

export const metadata: Metadata = {
  title: 'Pricing: 70+ ADHD-Friendly Side Hustles & Remote Work for $9.25',
  description:
    'Get lifetime access to 70+ vetted ways to earn online for just $9.25. One-time payment. No subscriptions. 30-day money-back guarantee.',
  alternates: { canonical: 'https://925adhd.com/pricing' },
  openGraph: {
    type: 'website',
    title: 'Pricing: 70+ ADHD-Friendly Side Hustles & Remote Work for $9.25',
    description:
      'Get lifetime access to 70+ vetted ways to earn online for just $9.25. One-time payment. No subscriptions. 30-day money-back guarantee.',
    url: 'https://925adhd.com/pricing',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PricingPage />;
}
