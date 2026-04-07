'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Loader2, Mail, Target, Zap, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Supporting = {
  href: string;
  icon: LucideIcon;
  iconColor: string;
  category: string;
  title: string;
  description: string;
  cta: string;
};

/* ---------- Inline SVG illustrations ---------- */

function EnergyIllustration() {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      aria-hidden
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="eg-bolt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4ade80" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="eg-ring" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* gauge arcs */}
      <circle cx="130" cy="130" r="110" stroke="url(#eg-ring)" strokeWidth="1.5" />
      <circle cx="130" cy="130" r="86" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="2 6" />
      <path
        d="M40 150 A 95 95 0 0 1 220 150"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 150 A 95 95 0 0 1 150 60"
        stroke="url(#eg-bolt)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* ticks */}
      {Array.from({ length: 11 }).map((_, i) => {
        const angle = Math.PI + (i / 10) * Math.PI;
        const r1 = (v: number) => Math.round(v * 100) / 100;
        const x1 = r1(130 + Math.cos(angle) * 72);
        const y1 = r1(130 + Math.sin(angle) * 72);
        const x2 = r1(130 + Math.cos(angle) * 62);
        const y2 = r1(130 + Math.sin(angle) * 62);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ffffff"
            strokeOpacity={i < 6 ? 0.55 : 0.2}
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      {/* bolt */}
      <path
        d="M138 78 L102 148 L128 148 L118 198 L162 120 L134 120 Z"
        fill="url(#eg-bolt)"
        stroke="#bbf7d0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* sparks */}
      <circle cx="60" cy="80" r="2.5" fill="#4ade80" />
      <circle cx="210" cy="70" r="2" fill="#4ade80" opacity="0.6" />
      <circle cx="220" cy="180" r="2" fill="#4ade80" opacity="0.5" />
    </svg>
  );
}

const supporting: Supporting[] = [
  {
    href: '/free/best-adhd-products',
    icon: Target,
    iconColor: 'text-brand-accent bg-brand-accent/10',
    category: 'Product Picks',
    title: 'Best Products for ADHD',
    description:
      'Noise machines, planners, fidgets, and focus tools. Handpicked, no gimmicks.',
    cta: 'See the picks',
  },
  {
    href: '/free/energy-checker',
    icon: Zap,
    iconColor: 'text-brand-green bg-brand-green/10',
    category: 'Live AI Tool',
    title: 'Is this worth my energy?',
    description:
      'Paste any job or platform. AI breaks down the red flags, pay, and energy cost.',
    cta: 'Try it free',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function FreeHubPage() {
  const router = useRouter();
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
          access_key: 'dfb5a758-6041-45a0-b76d-6ee784a406ec',
          subject: 'Free resources page signup - 925 ADHD',
          from_name: 'Free Resources Signup',
          email,
        }),
      });
    } catch {
      // continue anyway
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('guide_unlocked', '1');
    }
    router.push('/free/side-hustles');
  }

  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Header — left-aligned, editorial */}
        <motion.div className="max-w-2xl mb-8 md:mb-12" {...fadeUp}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-deep mb-3">
            <span className="h-px w-8 bg-brand-teal-dark/40" />
            Free &amp; Open
          </div>
          <h1 className="text-[clamp(30px,5vw,48px)] font-black tracking-[-0.02em] leading-[1.05] text-brand-primary mb-3">
            Tools built for{' '}
            <span className="bg-gradient-to-r from-brand-accent to-[#a855f7] bg-clip-text text-transparent">
              ADHD brains.
            </span>
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed">
            Honest guides, live tools, and product picks. No paywalls, no tricks.
          </p>
        </motion.div>

        {/* Asymmetric grid: 2/3 hero + 1/3 stacked sidebar */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-5 items-start">
          {/* HERO — Side Hustles Guide (original dark card template) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="group relative block h-full overflow-hidden rounded-3xl bg-brand-primary p-7 sm:p-9 md:p-12 shadow-[0_10px_40px_rgba(15,23,42,0.15)] transition-all duration-500">
              {/* subtle brand wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-dark/20 via-transparent to-brand-accent/10 opacity-80" />
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />

              {/* Illustration — decorative on mobile (top-right), inline on desktop */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 h-36 w-36 opacity-40 sm:opacity-50 md:static md:h-64 md:w-64 md:opacity-100 md:float-right md:ml-6 md:mb-4 md:-mr-2"
              >
                <img
                  src="/side-hustles.webp"
                  alt="ADHD side hustles"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="relative flex flex-col min-h-[300px] md:min-h-[380px]">
                <div className="flex items-center gap-3 mb-5 md:mb-7">
                  <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    Free Guide
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.02] text-white mb-4 md:mb-5 max-w-[15ch] md:max-w-lg">
                  5 ADHD-friendly side hustles.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/65 leading-relaxed max-w-md mb-6 md:mb-8">
                  Vetted starter picks rated by energy, effort, and time to first
                  dollar. Drop your email and the guide unlocks instantly.
                </p>

                <form onSubmit={handleUnlock} className="mt-auto flex flex-col sm:flex-row gap-2.5 max-w-[440px]">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-green/60 focus:ring-2 focus:ring-brand-green/20 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-xl bg-brand-green text-brand-primary font-bold px-5 py-3 text-sm hover:bg-[#4ade80] transition-colors shrink-0 inline-flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                    Get the guide
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-3 text-[11px] text-white/40">No spam. Just the guide.</p>
              </div>
            </div>
          </motion.div>

          {/* SIDEBAR — supporting cards stacked */}
          <div className="grid gap-4 md:gap-5">
            {supporting.map((r, i) => {
              const Icon = r.icon;
              return (
              <motion.div
                key={r.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={r.href}
                  className="group block bg-white rounded-2xl border border-brand-border p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-brand-teal-dark/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${r.iconColor}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold text-brand-green bg-green-50 border border-green-200/40 px-3 py-1 rounded-full">
                      {r.category}
                    </span>
                  </div>
                  <h2 className="text-[18px] font-extrabold text-brand-primary leading-snug mb-2 group-hover:text-brand-teal-deep transition-colors">
                    {r.title}
                  </h2>
                  <p className="text-sm text-brand-muted leading-relaxed mb-5 flex-1">
                    {r.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-teal-deep group-hover:gap-2 transition-all">
                    {r.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Neurodivergent Creator Spotlight */}
        <motion.div className="mt-10 md:mt-14" {...fadeUp}>
          <div className="max-w-2xl mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent mb-3">
              <Heart className="w-3.5 h-3.5 fill-brand-accent" />
              Spotlight
            </div>
            <h2 className="text-[clamp(26px,4vw,38px)] font-black tracking-[-0.02em] leading-[1.1] text-brand-primary mb-3">
              Support fellow neurodivergent creators.
            </h2>
            <p className="text-base md:text-lg text-brand-muted leading-relaxed">
              Real people building real things for ADHD brains. No algorithms, just folks worth following.
            </p>
          </div>

          <a
            href="https://www.etsy.com/shop/LucidtragedyDesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-brand-border bg-white p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-brand-accent/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              {/* Left: shop info */}
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full mb-4">
                  Etsy &middot; Stickers
                </span>
                <h3 className="text-2xl md:text-[28px] font-black tracking-[-0.01em] text-brand-primary leading-tight mb-3 group-hover:text-brand-accent transition-colors">
                  Lucid Tragedy Designs
                </h3>
                <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-5">
                  Original sticker designs from an indie neurodivergent artist. Two up now, more on the way.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-accent group-hover:gap-2.5 transition-all">
                  Visit the shop on Etsy <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Right: sticker showcase */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <div className="aspect-square overflow-hidden rounded-2xl bg-brand-canvas/40 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/spotlight/plague-doctor-sticker.webp"
                      alt="Plague Doctor sticker by Lucid Tragedy Designs"
                      width={600}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs font-bold text-brand-primary text-center">Plague Doctor &middot; $3</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden rounded-2xl bg-brand-canvas/40 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/spotlight/human-flesh-sticker.webp"
                      alt="Human Flesh sticker by Lucid Tragedy Designs"
                      width={600}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs font-bold text-brand-primary text-center">Human Flesh &middot; $3</p>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
