import type { Metadata } from 'next';
import MyStoryPage from './my-story-page';

export const metadata: Metadata = {
  title: 'My Story | 925 ADHD',
  description:
    'The story behind 925 ADHD - How one mom with ADHD built a platform to help neurodivergent minds find flexible online work.',
  alternates: { canonical: 'https://925adhd.com/my-story' },
  openGraph: {
    title: 'My Story | 925 ADHD',
    description:
      'The story behind 925 ADHD - How one mom with ADHD built a platform to help neurodivergent minds find flexible online work.',
    url: 'https://925adhd.com/my-story',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'My Story - How ADHD Led Me to Build 925 ADHD',
  description:
    'The story behind 925 ADHD - How one mom with ADHD built a platform to help neurodivergent minds find flexible online work.',
  author: { '@type': 'Person', name: 'Kara Gibson' },
  publisher: {
    '@type': 'Organization',
    name: '925 ADHD',
    logo: { '@type': 'ImageObject', url: 'https://925adhd.com/925-adhd-logo.png' },
  },
  url: 'https://925adhd.com/my-story',
  inLanguage: 'en-US',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MyStoryPage />
    </>
  );
}
