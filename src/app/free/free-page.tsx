'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const resources = [
  {
    href: '/free/energy-checker',
    emoji: '\u26a1',
    category: 'AI Tool',
    title: 'Is This Worth My Energy?',
    description:
      'Paste any job, side hustle, or platform. Our AI breaks down the red flags, pay reality, and energy cost before you waste your time.',
    cta: 'Try it free',
  },
  {
    href: '/free/side-hustles',
    emoji: '\ud83d\udcb0',
    category: 'Free Guide',
    title: '5 ADHD-Friendly Side Hustles',
    description:
      'Vetted starter guide with 5 side hustles picked for ADHD brains  — rated by energy, effort, and time to first dollar.',
    cta: 'Get the guide',
  },
  {
    href: '/free/best-adhd-products',
    emoji: '\ud83c\udfaf',
    category: 'Product Picks',
    title: 'Best Products for ADHD',
    description:
      'Noise machines, planners, fidgets, and focus tools  — handpicked for ADHD adults. Honest picks, no gimmicks.',
    cta: 'See the picks',
  },
];

export default function FreeHubPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Header */}
        <motion.div className="text-center mb-12" {...fadeUp}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-primary mb-4">
            Free Resources
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Tools, guides, and picks built for ADHD brains. No paywalls, no tricks.
          </p>
        </motion.div>

        {/* Resource Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={resource.href}
                className="group block bg-white rounded-2xl border border-brand-border p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-brand-teal-dark/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{resource.emoji}</span>
                  <span className="text-xs font-bold text-brand-green bg-green-50 border border-green-200/40 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h2 className="text-[18px] font-extrabold text-brand-primary leading-snug mb-2 group-hover:text-brand-teal-dark transition-colors">
                  {resource.title}
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed mb-5 flex-1">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-teal-dark group-hover:gap-2 transition-all">
                  {resource.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
