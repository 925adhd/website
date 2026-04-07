import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | 925 ADHD',
  description:
    'Learn how 925 ADHD handles your data. We respect your privacy and keep things transparent.',
  alternates: { canonical: 'https://925adhd.com/privacy-policy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy | 925 ADHD',
    description: 'Learn how 925 ADHD handles your data. We respect your privacy and keep things transparent.',
    url: 'https://925adhd.com/privacy-policy',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function PrivacyPolicyPage() {
  return <LegalContent type="privacy" />;
}
