import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Quick Disclaimer',
  description:
    'Important disclaimer about 925 ADHD. We vet opportunities but platforms change - always verify before signing up.',
  alternates: { canonical: 'https://925adhd.com/disclaimer' },
  openGraph: {
    type: 'website',
    title: 'Quick Disclaimer',
    description: 'Important disclaimer about 925 ADHD. We vet opportunities but platforms change - always verify before signing up.',
    url: 'https://925adhd.com/disclaimer',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

export default function DisclaimerPage() {
  return <LegalContent type="disclaimer" />;
}
