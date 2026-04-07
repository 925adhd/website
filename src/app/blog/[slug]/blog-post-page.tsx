'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Tag, Mail, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getRelatedPosts, formatDate } from '@/lib/blog-data';
import { blogContentMap } from '@/lib/blog-content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  if (!post) return null;

  const ContentComponent = blogContentMap[slug];
  const related = getRelatedPosts(slug, 3);

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Back link */}
        <motion.div className="mb-8" {...fadeUp}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-deep hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header className="max-w-[780px] mx-auto text-center mb-10" {...fadeUp}>
          <span className="inline-block text-xs font-extrabold text-brand-green bg-green-50 border border-green-200/40 px-4 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-brand-primary leading-[1.15] mb-5">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-brand-muted font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedDate)}
            </span>
            <span className="opacity-40">|</span>
            <span>By Kara Gibson</span>
          </div>
        </motion.header>

        {/* Hero image */}
        <motion.div
          className="max-w-[780px] mx-auto mb-12 rounded-2xl overflow-hidden border border-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 780px) 100vw, 780px"
              priority
            />
          </div>
        </motion.div>

        {/* Affiliate disclosure (only on posts with affiliate links) */}
        {post.tags.includes('apps') && (
          <motion.div
            className="max-w-[780px] mx-auto mb-6 rounded-xl border border-brand-border bg-brand-panel/50 px-5 py-3 text-xs text-brand-muted"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <strong>Disclosure:</strong> Some links in this article may be affiliate links. If you
            sign up through one, we may earn a small commission at no extra cost to you. We only
            recommend tools we genuinely believe help ADHD adults. This does not influence our
            reviews.
          </motion.div>
        )}

        {/* Article content */}
        <motion.div
          className="max-w-[780px] mx-auto text-[17px] leading-[1.75] text-brand-primary"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {ContentComponent && <ContentComponent />}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="max-w-[780px] mx-auto mt-16 rounded-2xl border border-brand-border bg-brand-panel p-8 md:p-10 text-center"
          {...fadeUp}
        >
          <p className="text-xl font-extrabold text-brand-primary mb-2">
            If this article made you feel seen...
          </p>
          <p className="text-lg text-brand-muted mb-6">
            That&apos;s exactly why 925 ADHD exists.
          </p>
          <p className="text-brand-muted mb-4 max-w-lg mx-auto">
            70+ vetted ways to earn online &mdash; tagged by energy level, effort, and payout speed.
            Built for brains like yours.
          </p>
          <p className="font-semibold text-brand-primary mb-6">
            Small systems. Low friction. Built for real life.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-teal-deep text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(43,186,161,0.25)] hover:bg-[#0b5d57] hover:-translate-y-0.5 transition-all"
          >
            Get Instant Access &mdash; $9.25
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e] mt-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            30-Day Money-Back Guarantee
          </p>
          <p className="text-xs text-brand-muted mt-2 font-semibold">
            Not a job placement service. No income guarantees.
          </p>
        </motion.div>

        {/* Email Capture */}
        <motion.div
          className="max-w-[780px] mx-auto mt-8 rounded-2xl border border-brand-teal-dark/15 bg-brand-teal-dark/[.03] p-8 text-center"
          {...fadeUp}
        >
          <Mail className="w-6 h-6 text-brand-teal-deep mx-auto mb-2" />
          <p className="font-bold text-brand-primary mb-1">Not ready yet? Get free tips instead.</p>
          <p className="text-sm text-brand-primary/60 mb-4">3 ADHD-friendly side hustle ideas + brain-friendly work tips. No spam.</p>
          <BlogEmailCapture />
        </motion.div>

        {/* Related posts */}
        {related.length > 0 && (
          <motion.section className="max-w-[1120px] mx-auto mt-20" {...fadeUp}>
            <h2 className="text-2xl font-extrabold text-brand-primary text-center mb-8">
              Continue Reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block bg-white rounded-2xl border border-brand-border overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] bg-brand-panel overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-brand-green bg-green-50 border border-green-200/40 px-3 py-1 rounded-full">
                      {rp.category}
                    </span>
                    <h3 className="mt-3 text-[16px] font-extrabold text-brand-primary leading-snug group-hover:text-brand-teal-deep transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted line-clamp-2">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Tags */}
        <div className="max-w-[780px] mx-auto mt-12 flex flex-wrap gap-2 items-center">
          <Tag className="w-4 h-4 text-brand-muted" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-brand-muted bg-brand-panel border border-brand-border px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function BlogEmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'dfb5a758-6041-45a0-b76d-6ee784a406ec',
        subject: 'New blog subscriber - 925 ADHD',
        from_name: 'Blog Email Signup',
        email,
      }),
    });
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-brand-green font-bold text-sm py-2">
        {'✓'} You&apos;re in! Check your inbox soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-[420px] mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-teal-dark/30 transition-shadow"
      />
      <button
        type="submit"
        className="rounded-xl bg-brand-teal-deep text-white font-bold px-5 py-3 text-sm hover:bg-[#0b5d57] transition-colors shrink-0"
      >
        Send Me Ideas
      </button>
    </form>
  );
}
