import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn which cookies 925 ADHD uses, including Google Analytics and Facebook Pixel, and how to manage or disable them in your browser settings.',
  alternates: { canonical: 'https://925adhd.com/cookie-policy' },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy',
    description:
      'Learn which cookies 925 ADHD uses, including Google Analytics and Facebook Pixel, and how to manage or disable them in your browser settings.',
    url: 'https://925adhd.com/cookie-policy',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

export default function CookiePolicyPage() {
  return <LegalContent type="cookie" />;
}
