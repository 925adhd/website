import type { Metadata } from 'next';
import BlogHubPage from './blog-hub-page';

export const metadata: Metadata = {
  title: 'ADHD Work Strategies Blog: Remote Jobs, Focus Tips & Tools',
  description:
    'Honest guides for ADHD adults: remote work strategies, focus techniques, side hustle picks, and the tools that actually help.',
  alternates: {
    canonical: 'https://925adhd.com/blog',
  },
  openGraph: {
    type: 'website',
    title: 'ADHD Work Strategies Blog: Remote Jobs, Focus Tips & Tools',
    description:
      'Honest guides for ADHD adults: remote work strategies, focus techniques, side hustle picks, and the tools that actually help.',
    url: 'https://925adhd.com/blog',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHD Work Strategies Blog: Remote Jobs, Focus Tips & Tools',
    description:
      'Honest guides for ADHD adults: remote work strategies, focus techniques, side hustle picks, and the tools that actually help.',
    images: ['https://925adhd.com/925-adhd-logo.png'],
  },
};

export default function BlogPage() {
  return <BlogHubPage />;
}
