'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  DollarSign,
  Smartphone,
  MapPin,
  Receipt,
  Star,
  ChevronRight,
  Mail,
  Loader2,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const hustles = [
  {
    number: 1,
    name: 'Prolific',
    tagline: 'The gold standard for paid research',
    rate: '$8\u2013$18/hr',
    icon: Star,
    color: 'brand-accent',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200/50',
    iconBg: 'bg-purple-100',
    link: 'https://www.prolific.com/participants',
    whyAdhd: [
      'Short, structured tasks (5\u201320 min)',
      'No disqualifications  — if you start, you get paid',
      'Guaranteed minimum \u00a36/hr (\u223c$8)',
      'Pick studies that interest you',
    ],
    howToStart: [
      'Sign up and verify your identity',
      'Complete your demographic profile (unlocks more studies)',
      'Enable notifications  — best studies go fast',
      'Cash out at \u00a35 (\u223c$6) via PayPal',
    ],
    energyLevel: 'Low',
    timeToFirstDollar: 'Same day',
    bestFor: 'Couch days when you want easy money without leaving home',
  },
  {
    number: 2,
    name: 'Field Agent',
    tagline: 'Get paid while running errands',
    rate: '$3\u2013$20/task',
    icon: MapPin,
    color: 'brand-green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200/50',
    iconBg: 'bg-green-100',
    link: 'https://app.fieldagent.net/',
    whyAdhd: [
      'Short tasks (10\u201320 min) with clear instructions',
      'Variety  — audits, mystery shops, buy & try',
      'Get outside and move around',
      'Instant dopamine from completing missions',
    ],
    howToStart: [
      'Download the Field Agent app',
      'Complete your profile',
      'Browse nearby tasks on the map',
      'Reserve, complete, get paid via PayPal',
    ],
    energyLevel: 'Medium',
    timeToFirstDollar: '1\u20133 days',
    bestFor: 'Days when you need to leave the house anyway',
  },
  {
    number: 3,
    name: 'Focusmate',
    tagline: 'Body doubling that actually works',
    rate: 'Free (3 sessions/week) or $9/mo',
    icon: Zap,
    color: 'brand-teal-dark',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200/50',
    iconBg: 'bg-teal-100',
    link: 'https://www.focusmate.com/',
    whyAdhd: [
      'Someone is "there"  — your brain behaves better',
      'Scheduled sessions create external accountability',
      'Works for any task  — work, cleaning, studying',
      'Breaks initiation paralysis instantly',
    ],
    howToStart: [
      'Sign up for free (no credit card needed)',
      'Book a 25 or 50-minute session',
      'Show up, say what you\u2019re working on, work quietly',
      'Repeat whenever you need to start something hard',
    ],
    energyLevel: 'Any',
    timeToFirstDollar: 'Productivity tool  — helps you earn more at everything else',
    bestFor: 'When you can\u2019t start the thing you know you need to do',
  },
  {
    number: 4,
    name: 'Mode Earn',
    tagline: 'Get paid for using your phone',
    rate: '$5\u2013$30/week',
    icon: Smartphone,
    color: 'brand-accent',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200/50',
    iconBg: 'bg-amber-100',
    link: 'https://play.google.com/store/apps/details?id=us.current.android',
    whyAdhd: [
      'Earn passively  — just use your phone normally',
      '16+ earning methods = no boredom',
      'Streaks and progress meters = dopamine hits',
      'Very low cashout minimum ($0.10)',
    ],
    howToStart: [
      'Download Mode Earn App (Android only)',
      'Enable permissions (location, lock screen)',
      'Listen to music, play games, charge your phone',
      'Cash out via PayPal or gift cards',
    ],
    energyLevel: 'Low',
    timeToFirstDollar: 'Same day',
    bestFor: 'Earning while you doom-scroll (might as well get paid)',
  },
  {
    number: 5,
    name: 'Fetch Rewards',
    tagline: 'Scan receipts, earn gift cards',
    rate: '$5\u2013$25/month',
    icon: Receipt,
    color: 'brand-green',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200/50',
    iconBg: 'bg-emerald-100',
    link: 'https://fetchrewards.com/',
    whyAdhd: [
      'Zero thinking  — just scan any receipt',
      'No coupons to clip, no offers to activate',
      'Gamified with streaks and bonuses',
      'Instant gratification seeing points add up',
    ],
    howToStart: [
      'Download Fetch Rewards (iOS or Android)',
      'Snap a photo of any receipt within 14 days',
      'Points add up automatically',
      'Redeem at $3 for gift cards (Amazon, Target, Starbucks)',
    ],
    energyLevel: 'Low',
    timeToFirstDollar: '1\u20132 weeks',
    bestFor: 'People who shop and have receipts (so\u2026 everyone)',
  },
];

export default function SideHustlesPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0e4fca47-83e4-4ee5-976d-8b1a8cb8ac02',
          subject: 'Free guide download - 925 ADHD',
          from_name: 'Free Guide Signup',
          email,
        }),
      });
    } catch {
      // unlock anyway
    }
    setSending(false);
    setUnlocked(true);
  }

  if (!unlocked) {
    return (
      <section className="py-20 md:py-28">
        <div className="max-w-[480px] mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block text-xs font-extrabold text-brand-green bg-green-50 border border-green-200/40 px-4 py-1.5 rounded-full mb-6">
              Free Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-primary leading-tight mb-4">
              5 ADHD-Friendly Side Hustles You Can Start Today
            </h1>
            <p className="text-brand-muted leading-relaxed mb-8">
              Vetted picks rated by energy, effort, and time to first dollar.
              Drop your email and the guide is yours instantly.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-2.5 max-w-[400px] mx-auto mb-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted/50" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-brand-border bg-white pl-10 pr-4 py-3 text-sm text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-teal-dark/30 transition-shadow"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="rounded-xl bg-brand-teal-dark text-white font-bold px-5 py-3 text-sm hover:bg-[#24a68e] transition-colors shrink-0 inline-flex items-center gap-2 disabled:opacity-60"
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Get Free Guide
              </button>
            </form>

            <p className="text-xs text-brand-muted/50">No spam. Just the guide.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div className="mb-8" {...fadeUp}>
            <Link
              href="/free"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-dark hover:gap-3 transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Free Resources
            </Link>
          </motion.div>

          <motion.div className="max-w-[780px] mx-auto text-center" {...fadeUp}>
            <span className="inline-block text-xs font-extrabold text-brand-green bg-green-50 border border-green-200/40 px-4 py-1.5 rounded-full mb-4">
              Free Guide
            </span>
            <h1 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-brand-primary leading-[1.15] mb-4">
              5 ADHD-Friendly Side Hustles You Can Start Today
            </h1>
            <p className="text-brand-muted max-w-[560px] mx-auto leading-relaxed">
              No experience needed. No upfront costs. Every option here is vetted,
              ADHD-tested, and ready for you to start earning.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden"
          >
            <span></span>
          </motion.div>
        </div>
      </section>

      {/* Hustles */}
      <section className="pb-12">
        <div className="max-w-[780px] mx-auto px-5">
          {hustles.map((hustle, i) => (
            <motion.div
              key={hustle.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="mb-10"
            >
              <hr className="border-brand-border mb-10" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-primary mb-1">
                    {hustle.number}. {hustle.name}
                  </h2>
                  <p className="text-sm text-brand-muted">{hustle.tagline}</p>
                </div>
                <span className="text-lg font-extrabold text-brand-green whitespace-nowrap">
                  {hustle.rate}
                </span>
              </div>

              {/* Quick info */}
              <div className="flex flex-wrap gap-4 mb-5 text-sm text-brand-muted">
                <span><strong className="text-brand-primary">Energy:</strong> {hustle.energyLevel}</span>
                <span><strong className="text-brand-primary">First $:</strong> {hustle.timeToFirstDollar}</span>
              </div>

              {/* Why it works for ADHD */}
              <h3 className="text-base font-bold text-brand-primary mt-6 mb-3">
                Why it works for ADHD brains
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 mb-5">
                {hustle.whyAdhd.map((item) => (
                  <li key={item} className="text-sm text-brand-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* How to start */}
              <h3 className="text-base font-bold text-brand-primary mb-3">
                How to start right now
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 mb-5">
                {hustle.howToStart.map((step) => (
                  <li key={step} className="text-sm text-brand-muted leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>

              {/* Best for */}
              <div className="rounded-xl bg-brand-panel border border-brand-border px-4 py-3 text-sm text-brand-muted mb-4">
                <strong className="text-brand-primary">Best for:</strong>{' '}
                {hustle.bestFor}
              </div>

              {/* CTA */}
              <a
                href={hustle.link}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-dark hover:gap-3 transition-all"
              >
                Try {hustle.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-[780px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-brand-border bg-brand-panel p-8 md:p-10 text-center"
          >
            <p className="text-xl font-extrabold text-brand-primary mb-2">
              This guide covers 5 options. The full dashboard has 70+.
            </p>
            <p className="text-brand-muted mb-6 max-w-lg mx-auto">
              Every option rated by energy level, effort, and payout speed.
              Tagged, sorted, and vetted by real people.
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
      </section>
    </>
  );
}
