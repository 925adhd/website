import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, getAllSlugs } from '@/lib/blog-data';
import BlogPostPage from './blog-post-page';

/* ── static params for `output: 'export'` ── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── dynamic metadata ── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://925adhd.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://925adhd.com/blog/${post.slug}`,
      siteName: '925 ADHD',
      images: [
        {
          url: `https://925adhd.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: ['Kara Gibson'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://925adhd.com${post.image}`],
    },
  };
}

/* ── page ── */
export default async function BlogPostRoute({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://925adhd.com${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      '@type': 'Person',
      name: 'Kara Gibson',
    },
    publisher: {
      '@type': 'Organization',
      name: '925 ADHD',
      logo: {
        '@type': 'ImageObject',
        url: 'https://925adhd.com/925-adhd-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://925adhd.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://925adhd.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://925adhd.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://925adhd.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BlogPostPage slug={slug} />
    </>
  );
}
