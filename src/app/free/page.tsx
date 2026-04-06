import type { Metadata } from 'next';
import FreeHubPage from './free-page';

export const metadata: Metadata = {
  title: 'Free ADHD Tools & Guides | 925 ADHD',
  description:
    'Free tools and guides for adults with ADHD — side hustle checker, productivity resources, and product recommendations. No paywalls.',
  alternates: { canonical: 'https://925adhd.com/free' },
  openGraph: {
    title: 'Free ADHD Tools & Guides | 925 ADHD',
    description:
      'Free tools and guides for adults with ADHD — side hustle checker, productivity resources, and product recommendations.',
    url: 'https://925adhd.com/free',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

export default function Page() {
  return <FreeHubPage />;
}
