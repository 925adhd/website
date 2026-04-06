'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function FreePage() {
  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '0e4fca47-83e4-4ee5-976d-8b1a8cb8ac02',
        subject: 'Free tool early access signup - 925 ADHD',
        from_name: 'Free Tool Waitlist',
        email,
      }),
    });
    if (res.ok) setEmailSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div {...fadeUp} className="mb-4">
            <span className="inline-block rounded-full bg-brand-green/15 text-brand-green text-sm font-bold px-4 py-1.5 tracking-wide uppercase">
              Free Tool
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(32px,5vw,52px)] font-black text-brand-primary mb-5"
          >
            Is This Worth My Energy?
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(16px,2vw,20px)] text-brand-primary/75 max-w-[640px] mx-auto leading-relaxed"
          >
            <strong className="text-brand-accent">Coming soon:</strong> Our AI scam-checker will analyze any job, side hustle, or platform and tell you if it&apos;s worth your time.
          </motion.p>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="pb-16">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-brand-border bg-brand-warm p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-accent/10 mb-4">
              <Sparkles className="w-7 h-7 text-brand-accent" />
            </div>
            <h2 className="text-xl font-bold text-brand-primary mb-2">
              Get Early Access
            </h2>
            <p className="text-brand-primary/65 max-w-[460px] mx-auto leading-relaxed mb-6">
              We&apos;re building an AI-powered scam checker that analyzes any gig or opportunity in seconds.
              Drop your email to be first in line when it launches.
            </p>

            {!emailSent ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-[420px] mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-brand-teal-dark text-white font-bold px-5 py-3 text-sm hover:bg-[#24a68e] transition-colors shrink-0 inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Notify Me
                </button>
              </form>
            ) : (
              <p className="text-brand-green font-bold text-sm py-2">
                {'✓'} You&apos;re on the list! We&apos;ll email you when it&apos;s ready.
              </p>
            )}

            <p className="text-xs text-brand-primary/45 mt-4">No spam. Just one email when the tool goes live.</p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-brand-panel border border-brand-border p-8 md:p-10"
          >
            <h3 className="text-[clamp(22px,3vw,28px)] font-bold text-brand-primary mb-4">
              Want specifics, not patterns?
            </h3>
            <div className="space-y-4 text-[17px] leading-relaxed text-brand-primary/75 mb-8">
              <p>
                AI can spot patterns, but it can&apos;t verify receipts. This tool gives
                you a starting point, not certainty.
              </p>
              <p>
                Members get 70+ gigs already tested by real people who actually got paid,
                so you don&apos;t have to gamble your time.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal-dark text-white font-bold py-3.5 px-6 hover:bg-[#24a68e] transition-colors"
                >
                  See the Vetted List &mdash; $9.25
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-warm text-brand-primary font-bold py-3.5 px-6 hover:bg-brand-panel transition-colors"
                >
                  Learn more about 925 ADHD
                </Link>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e]">
                <ShieldCheck className="w-3.5 h-3.5" />
                30-Day Money-Back Guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
