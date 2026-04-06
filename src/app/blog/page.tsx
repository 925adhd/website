import type { Metadata } from 'next';
import BlogHubPage from './blog-hub-page';

export const metadata: Metadata = {
  title: '925 ADHD Blog',
  description:
    'Read articles about ADHD-friendly work strategies, focus tips, tools, and more.',
  alternates: {
    canonical: 'https://925adhd.com/blog',
  },
  openGraph: {
    type: 'website',
    title: '925 ADHD Blog',
    description:
      'Read articles about ADHD-friendly work strategies, focus tips, tools, and more.',
    url: '/blog',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '925 ADHD Blog',
    description:
      'Read articles about ADHD-friendly work strategies, focus tips, tools, and more.',
    images: ['/925-adhd-logo.png'],
  },
};

export default function BlogPage() {
  return <BlogHubPage />;
}
