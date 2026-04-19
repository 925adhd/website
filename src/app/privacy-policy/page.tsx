import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how 925 ADHD collects, uses, and protects your personal data. Details on cookies, analytics, payments, and your rights under GDPR and CCPA.',
  alternates: { canonical: 'https://925adhd.com/privacy-policy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy',
    description:
      'Learn how 925 ADHD collects, uses, and protects your personal data. Details on cookies, analytics, payments, and your rights under GDPR and CCPA.',
    url: 'https://925adhd.com/privacy-policy',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return <LegalContent type="privacy" />;
}
