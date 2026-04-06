import type { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | 925 ADHD',
  description: "Get in touch with 925 ADHD - We'd love to hear from you!",
  alternates: { canonical: 'https://925adhd.com/contact' },
  openGraph: {
    title: 'Contact Us | 925 ADHD',
    description: "Get in touch with 925 ADHD - We'd love to hear from you!",
    url: 'https://925adhd.com/contact',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://925adhd.com/contact#contact',
  url: 'https://925adhd.com/contact',
  name: 'Contact Us | 925 ADHD',
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
