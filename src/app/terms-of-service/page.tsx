import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Terms of Service | 925 ADHD',
  description:
    'Read the terms of service for 925 ADHD. One-time payment, lifetime access, 30-day money-back guarantee.',
  alternates: { canonical: 'https://925adhd.com/terms-of-service' },
  openGraph: {
    type: 'website',
    title: 'Terms of Service | 925 ADHD',
    description: 'Read the terms of service for 925 ADHD. One-time payment, lifetime access, 30-day money-back guarantee.',
    url: 'https://925adhd.com/terms-of-service',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function TermsOfServicePage() {
  return <LegalContent type="terms" />;
}
