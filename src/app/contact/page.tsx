import type { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact 925 ADHD with questions about pricing, access, refunds, or partnerships. We respond to emails within 48 hours on business days.',
  alternates: { canonical: 'https://925adhd.com/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Us',
    description:
      'Contact 925 ADHD with questions about pricing, access, refunds, or partnerships. We respond to emails within 48 hours on business days.',
    url: 'https://925adhd.com/contact',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://925adhd.com/contact#contact',
  url: 'https://925adhd.com/contact',
  name: 'Contact Us',
  inLanguage: 'en-US',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
}
