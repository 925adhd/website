import type { Metadata } from 'next';
import FreeHubPage from './free-page';

export const metadata: Metadata = {
  title: 'Free ADHD Tools & Guides',
  description:
    'Free tools and guides for adults with ADHD: side hustle checker, productivity resources, and product recommendations. No paywalls.',
  alternates: { canonical: 'https://925adhd.com/free' },
  openGraph: {
    type: 'website',
    title: 'Free ADHD Tools & Guides',
    description:
      'Free tools and guides for adults with ADHD: side hustle checker, productivity resources, and product recommendations.',
    url: 'https://925adhd.com/free',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <FreeHubPage />;
}
