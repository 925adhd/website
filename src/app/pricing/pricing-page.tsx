'use client';

import { motion } from 'motion/react';
import { CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const STRIPE_URL = 'https://buy.stripe.com/28E3cw1B33logABev67Zu02';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const included = [
  'Curated library of 70+ income streams',
  'Step-by-step guides for each option',
  'Passion Finder quiz to match your brain',
  'Energy-level tags (low, medium, high)',
  'Honest pros, cons, and effort ratings',
  'New options added monthly, dead ones removed',
  'Lifetime updates — yours forever',
  'No ads, no upsells, no subscriptions',
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h1
            {...fadeUp}
            className="text-[clamp(32px,5vw,52px)] font-black text-brand-primary mb-4"
          >
            One Price. Lifetime Access.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(16px,2vw,20px)] text-brand-primary/70 max-w-[600px] mx-auto leading-relaxed"
          >
            No subscriptions. No hidden fees. Pay once and get everything &mdash; forever.
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-12">
        <div className="max-w-[560px] mx-auto px-5">
          <motion.div {...fadeUp} className="border border-brand-border bg-white/85 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-green-pill border border-brand-green-pill-border text-brand-green-text font-black text-xs tracking-wide">
                {'💎'} LIFETIME ACCESS
              </span>
              <div className="font-black text-lg mt-2">925 ADHD</div>
              <div className="my-3">
                <span className="text-[48px] font-black tracking-tight text-brand-primary">$9.25</span>
                <div className="text-xs font-extrabold text-brand-primary/75">
                  one-time &bull; yours forever &bull; <span className="text-brand-teal-deep font-extrabold">ad-free</span>
                </div>
              </div>
              <p className="text-sm font-bold text-brand-teal-deep">Every option manually vetted. Zero scams.</p>
            </div>

            <div className="mt-6 space-y-2.5">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[14px] font-semibold text-brand-primary/80">
                  <CheckCircle size={17} className="text-brand-green mt-px shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-5 p-2.5 bg-brand-accent/[.04] border border-brand-accent/[.14] rounded-[10px]">
              <img src="/passionfinder.webp" alt="Passion Finder" width={40} height={40} className="object-contain rounded-md shrink-0" />
              <div>
                <div className="font-extrabold text-[13px]">{'✨'} Passion Finder Quiz included</div>
                <div className="text-[11px] text-brand-primary/60">Find work that fits your brain.</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-brand-amber/12 border border-brand-amber/30 rounded-xl mt-3">
              <div className="text-xl shrink-0">{'🛡️'}</div>
              <div className="text-xs font-semibold text-brand-primary/75 leading-snug">
                <strong className="text-[#92400e]">30-Day Money-Back Guarantee.</strong> Full refund if not for you. No questions asked.
              </div>
            </div>

            <div className="mt-5">
              <a
                href={STRIPE_URL}
                className="flex items-center justify-center w-full px-5 py-4 rounded-[14px] text-lg font-bold bg-brand-teal-dark text-[#383838] hover:bg-[#0b5d57] hover:-translate-y-px transition-all shadow-[0_4px_20px_rgba(43,186,161,0.25)]"
              >
                Get Instant Access &mdash; $9.25
              </a>
              <p className="text-center text-[11px] text-brand-primary/45 mt-2.5">
                Instant access &bull; Any browser &bull; No downloads
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="pb-12">
        <div className="max-w-[700px] mx-auto px-5">
          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { avatar: '/morgan-avatar.webp', name: 'Morgan F.', text: "It\u2019s like if r/beermoney made an app for ADHDers.", rating: 5 },
              { avatar: '/danii-avatar.webp', name: 'Danii C.', text: 'Feels like a shortcut for my brain \u2014 exactly what I needed.', rating: 5 },
              { avatar: '/erica-avatar.webp', name: 'Erica G.', text: 'Made my first $25 the same week I signed up \u2014 zero overwhelm.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="p-4 bg-white/90 border border-brand-border rounded-[14px]">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <img src={review.avatar} alt={review.name} width={36} height={36} loading="lazy" className="w-9 h-9 rounded-full object-cover" />
                  <div className="font-bold text-xs text-brand-primary">{review.name}</div>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-primary/75 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="pb-16">
        <div className="max-w-[560px] mx-auto px-5 text-center">
          <p className="text-brand-primary/65 text-sm">
            Have questions?{' '}
            <Link href="/faq" className="text-brand-teal-deep font-bold underline">
              Read the full FAQ →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
