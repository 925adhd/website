'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllCategories, formatDate } from '@/lib/blog-data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function BlogHubPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filtered = useMemo(() => {
    return getAllPosts().filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCat = !activeCategory || post.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <section className="pt-8 md:pt-14 pb-20 md:pb-28">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Header */}
        <motion.div className="text-center mb-6 md:mb-8" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-primary mb-2 md:mb-3">
            925 ADHD Blog
          </h1>
          <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto">
            Real talk about ADHD, remote work, and making money your way.
          </p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div
          className="mb-5 flex flex-col sm:flex-row gap-4 items-center justify-center"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-brand-border bg-white text-sm font-medium text-brand-primary placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-teal-dark/30 focus:border-brand-teal-dark/40 transition-all"
            />
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          className="mb-8 -mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex md:flex-wrap md:justify-center gap-2 w-max md:w-auto">
            <button
              onClick={() => setActiveCategory(null)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${
                activeCategory === null
                  ? 'bg-brand-teal-dark text-brand-primary border-brand-teal-dark'
                  : 'bg-white text-brand-muted border-brand-border hover:border-brand-teal-dark/40 hover:text-brand-teal-deep'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-teal-dark text-brand-primary border-brand-teal-dark'
                    : 'bg-white text-brand-muted border-brand-border hover:border-brand-teal-dark/40 hover:text-brand-teal-deep'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-brand-muted py-16 text-lg">
            No articles found. Try a different search or category.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read: ${post.title}`}
                  className="group block bg-white rounded-2xl border border-brand-border overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-brand-panel overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-brand-green bg-green-50 border border-green-200/40 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-brand-muted">
                        {formatDate(post.publishedDate)}
                      </span>
                    </div>
                    <h2 className="text-[17px] font-extrabold text-brand-primary leading-snug mb-2 group-hover:text-brand-teal-deep transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-teal-deep group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
