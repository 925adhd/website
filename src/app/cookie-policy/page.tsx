import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Cookie Policy | 925 ADHD',
  description:
    'Learn about the cookies 925 ADHD uses including Google Analytics and Facebook Pixel.',
  alternates: { canonical: 'https://925adhd.com/cookie-policy' },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy | 925 ADHD',
    description: 'Learn about the cookies 925 ADHD uses including Google Analytics and Facebook Pixel.',
    url: 'https://925adhd.com/cookie-policy',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function CookiePolicyPage() {
  return <LegalContent type="cookie" />;
}
