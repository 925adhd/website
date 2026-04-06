'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/**
 * Update `url` with your Amazon affiliate tag once you join
 * Amazon Associates. Append ?tag=925adhd-20
 */
const categories = [
  {
    title: 'Focus & Noise',
    emoji: '\ud83c\udfa7',
    products: [
      {
        name: 'LectroFan White Noise Machine',
        price: '~$50',
        url: 'https://www.amazon.com/dp/B00MY8V86Q',
        why: 'Masks distracting sounds with 20 fan/noise options. No loops &mdash; your brain won\'t notice patterns.',
        bestFor: 'Work-from-home focus, sleep, sensory regulation',
      },
      {
        name: 'Loop Quiet Earplugs',
        price: '~$25',
        url: 'https://www.amazon.com/dp/B0B1NFJFSK',
        why: 'Reduces noise by 24dB without blocking everything. Comfortable for hours. Discreet enough for the office.',
        bestFor: 'Overstimulation, open offices, social events',
      },
      {
        name: 'Sony WH-1000XM5 Headphones',
        price: '~$350',
        url: 'https://www.amazon.com/dp/B0BX2L8PBT',
        why: 'Industry-leading noise canceling. 30-hour battery. Comfortable for all-day wear.',
        bestFor: 'Deep focus sessions, travel, blocking everything out',
      },
    ],
  },
  {
    title: 'Planners & Organization',
    emoji: '\ud83d\udcd3',
    products: [
      {
        name: 'Clever Fox Planner Pro',
        price: '~$26',
        url: 'https://www.amazon.com/dp/B07FMQ2WJZ',
        why: 'Undated (no guilt for skipping days), goal-focused, and visually clean. Weekly + monthly layouts.',
        bestFor: 'ADHD adults who want structure without rigidity',
      },
      {
        name: 'Panda Planner',
        price: '~$25',
        url: 'https://www.amazon.com/dp/B01LXBGRY3',
        why: 'Science-based layout with gratitude, priorities, and reflection. Designed for focus and happiness.',
        bestFor: 'People who need emotional regulation alongside planning',
      },
      {
        name: 'Rocketbook Fusion Smart Notebook',
        price: '~$35',
        url: 'https://www.amazon.com/dp/B07CZKLQ8R',
        why: 'Write, scan to cloud, wipe clean, reuse. 7 page styles. Infinite notebook.',
        bestFor: 'ADHD brains who start 50 notebooks and finish zero',
      },
    ],
  },
  {
    title: 'Timers & Time Awareness',
    emoji: '\u23f1\ufe0f',
    products: [
      {
        name: 'Time Timer MOD (60-min)',
        price: '~$35',
        url: 'https://www.amazon.com/dp/B003H837GS',
        why: 'Visual countdown &mdash; you SEE time disappearing. No math, no guessing. The go-to for time blindness.',
        bestFor: 'Task transitions, Pomodoro, keeping meetings on track',
      },
      {
        name: 'Cube Timer (Ticktime)',
        price: '~$25',
        url: 'https://www.amazon.com/dp/B09NNCQRN3',
        why: 'Flip to start &mdash; 1, 3, 5, 10, 15, 25 min presets. No buttons. Friction-free.',
        bestFor: 'Quick focus sprints, the 10-3 rule, cooking timers',
      },
      {
        name: 'Amazon Echo Dot',
        price: '~$50',
        url: 'https://www.amazon.com/dp/B09B8V1LZ3',
        why: '"Alexa, set a timer for 10 minutes" &mdash; voice timers without touching your phone.',
        bestFor: 'Hands-free reminders, routine anchoring, morning alarms',
      },
    ],
  },
  {
    title: 'Fidgets & Regulation',
    emoji: '\ud83e\udd32',
    products: [
      {
        name: 'Speks Magnetic Balls',
        price: '~$25',
        url: 'https://www.amazon.com/dp/B074M6BPPC',
        why: 'Quiet, desk-friendly fidget. Build shapes during meetings. Satisfying without being distracting.',
        bestFor: 'Meetings, phone calls, thinking time',
      },
      {
        name: 'Tom\'s Fidgets Flippy Chain',
        price: '~$9',
        url: 'https://www.amazon.com/dp/B01MAYBQKA',
        why: 'Silent, pocket-sized, nearly indestructible. The most discreet fidget available.',
        bestFor: 'Work, class, public settings where subtlety matters',
      },
      {
        name: 'Weighted Lap Pad (5 lbs)',
        price: '~$30',
        url: 'https://www.amazon.com/dp/B07H2WL3XG',
        why: 'Deep pressure calms the nervous system. Like a weighted blanket for your desk.',
        bestFor: 'Desk work, overwhelm days, grounding during stressful tasks',
      },
    ],
  },
  {
    title: 'Focus Lighting',
    emoji: '\ud83d\udca1',
    products: [
      {
        name: 'BenQ ScreenBar Monitor Light',
        price: '~$110',
        url: 'https://www.amazon.com/dp/B076VNFZJG',
        why: 'Lights your desk without screen glare. Auto-dimming. Reduces eye strain during hyperfocus.',
        bestFor: 'Late-night work, eye fatigue, creating a focus zone',
      },
      {
        name: 'Govee Smart LED Light Strip',
        price: '~$15',
        url: 'https://www.amazon.com/dp/B09B7NQ5YG',
        why: 'Color-code your workspace &mdash; blue for focus, warm for winding down. Cheap dopamine hit.',
        bestFor: 'Mood lighting, routine anchoring, workspace energy shifts',
      },
    ],
  },
  {
    title: 'Audio & Focus Music',
    emoji: '\ud83c\udfb5',
    products: [
      {
        name: 'Brain.fm',
        price: '$7/mo',
        url: 'https://www.brain.fm/925adhd',
        why: 'AI-generated music designed to help you focus. Not a playlist &mdash; uses neural phase-locking technology.',
        bestFor: 'Deep work, writing, coding, sustained focus',
        isAffiliate: true,
      },
      {
        name: 'Apple AirPods Pro 2',
        price: '~$250',
        url: 'https://www.amazon.com/dp/B0D1XD1ZV3',
        why: 'Active noise canceling + transparency mode. Switch between blocking everything and hearing what matters.',
        bestFor: 'On-the-go focus, commuting, quick context switches',
      },
    ],
  },
];

export default function BestAdhdProductsPage() {
  return (
    <article className="py-12 md:py-20">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Back link */}
        <motion.div className="mb-8" {...fadeUp}>
          <Link
            href="/free"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-dark hover:gap-3 transition-all"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Free Resources
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header className="max-w-[780px] mx-auto text-center mb-10" {...fadeUp}>
          <span className="inline-block text-xs font-extrabold text-brand-green bg-green-50 border border-green-200/40 px-4 py-1.5 rounded-full mb-4">
            Product Picks
          </span>
          <h1 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-brand-primary leading-[1.15] mb-5">
            Best Products for ADHD Adults (2026)
          </h1>
          <p className="text-brand-muted max-w-[560px] mx-auto leading-relaxed">
            Handpicked tools that actually help &mdash; not gimmicks. Every product here is
            something we&apos;d recommend to a friend with ADHD.
          </p>
        </motion.header>

        {/* Disclosure */}
        <motion.div
          className="max-w-[780px] mx-auto mb-10 rounded-xl border border-brand-border bg-brand-panel/50 px-5 py-3 text-xs text-brand-muted"
          {...fadeUp}
        >
          <strong>Disclosure:</strong> Some links on this page are affiliate links.
          If you buy through them, we may earn a small commission at no extra cost to you.
          We only recommend products we genuinely believe help ADHD adults.
        </motion.div>

        {/* Categories */}
        <div className="max-w-[780px] mx-auto">
          {categories.map((category, ci) => (
            <motion.div
              key={category.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 * ci }}
              className="mb-12"
            >
              <h2 className="text-2xl font-extrabold text-brand-primary mb-6 flex items-center gap-3">
                <span className="text-2xl">{category.emoji}</span>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.products.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel={product.isAffiliate ? 'nofollow sponsored noopener' : 'nofollow noopener'}
                    className="group block rounded-2xl border border-brand-border bg-white p-5 hover:border-brand-teal-dark/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-[16px] font-extrabold text-brand-primary group-hover:text-brand-teal-dark transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm font-bold text-brand-green whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-sm text-brand-muted leading-relaxed mb-3">
                      {product.why}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-brand-muted/70">
                        <strong className="text-brand-primary/60">Best for:</strong>{' '}
                        {product.bestFor}
                      </p>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-teal-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="max-w-[780px] mx-auto mt-16 rounded-2xl border border-brand-border bg-brand-panel p-8 md:p-10 text-center"
          {...fadeUp}
        >
          <p className="text-xl font-extrabold text-brand-primary mb-2">
            Want ADHD-friendly income streams too?
          </p>
          <p className="text-brand-muted mb-6 max-w-lg mx-auto">
            70+ vetted ways to earn online &mdash; tagged by energy level, effort, and payout speed.
            Built for brains like yours.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-teal-dark text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(43,186,161,0.25)] hover:bg-[#24a68e] hover:-translate-y-0.5 transition-all"
          >
            Get Instant Access &mdash; $9.25
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e] mt-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            30-Day Money-Back Guarantee
          </p>
        </motion.div>
      </div>
    </article>
  );
}
