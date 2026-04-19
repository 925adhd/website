import type { Metadata } from 'next';
import AboutPage from './about-page';

export const metadata: Metadata = {
  title: 'About 925 ADHD: Why I Built This for ADHD Remote Workers',
  description:
    'Meet Kara, the founder of 925 ADHD. Learn how her ADHD journey led to creating a platform that helps neurodivergent minds find flexible remote work.',
  alternates: { canonical: 'https://925adhd.com/about' },
  openGraph: {
    type: 'website',
    title: 'About 925 ADHD: Why I Built This for ADHD Remote Workers',
    description:
      'Meet Kara, the founder of 925 ADHD. Learn how her ADHD journey led to creating a platform that helps neurodivergent minds find flexible remote work.',
    url: 'https://925adhd.com/about',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://925adhd.com/about#about',
      url: 'https://925adhd.com/about',
      name: 'About 925 ADHD: Why I Built This for ADHD Remote Workers',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': 'https://925adhd.com/about#kara',
      name: 'Kara Gibson',
      image: 'https://925adhd.com/mexander.webp',
      jobTitle: 'Founder',
      url: 'https://925adhd.com/about',
      sameAs: ['https://www.linkedin.com/in/kara-gibson-3818a3348'],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  );
}
