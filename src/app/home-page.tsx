'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { CheckCircle, Star, ChevronDown, Gift } from 'lucide-react';

const STRIPE_URL = 'https://buy.stripe.com/28E3cw1B33logABev67Zu02';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  {
    icon: '/passionfinder.webp',
    title: 'Passion Finder Quiz',
    desc: 'Get matched to work that fits your energy and interests right now.',
  },
  {
    icon: '/guide.webp',
    title: 'Easy-to-follow guides',
    desc: 'Know exactly what to do first. No fluff. No overwhelm.',
  },
  {
    icon: '/begin.webp',
    title: 'Honest ratings',
    desc: 'Every option rated by effort, payout, and time to first dollar.',
  },
  {
    icon: '/hacksicon.webp',
    title: 'Dopamine-friendly tips',
    desc: 'So you actually finish what you start.',
  },
  {
    icon: '/hearticon.webp',
    title: 'Stack income streams',
    desc: 'Save your favorites and stack income when your energy allows.',
  },
  {
    icon: '/updateicon.webp',
    title: 'Lifetime updates',
    desc: 'New opportunities added monthly. Dead links removed. Always current.',
  },
];

const faqItems = [
  { q: 'What exactly do I get?', a: 'Access to the 925 ADHD dashboard with 70+ vetted income streams, step-by-step guides, the Passion Finder quiz, and lifetime updates. New options added monthly, dead ones removed.' },
  { q: 'Is this a one-time payment?', a: 'Yes. Pay $9.25 once and get lifetime access. No recurring charges. No hidden fees.' },
  { q: 'How much money can I realistically make?', a: 'Some options pay $10\u201350 quickly (like paid surveys or app testing). Others can grow into $500\u20132,000+ per month (like freelancing or AI tasks). Every option has payout expectations labeled.' },
  { q: 'Are these opportunities legit?', a: 'Every option is manually vetted by a real person. MLMs, pyramid schemes, and sketchy platforms are filtered out. If something goes bad after we list it, we remove it.' },
  { q: 'How fast can I start earning?', a: 'Some options like paid surveys and app testing can pay within days. Others like freelancing take more setup time. You can take action right after joining.' },
  { q: 'Do I need experience?', a: 'No. Many options are beginner-friendly. Each one tells you exactly what you need and what to do next.' },
  { q: "What if it's not for me?", a: "30-day money-back guarantee. If it's not a fit, you get a full refund. No questions asked. You can request it by emailing kara@925adhd.com." },
  { q: 'Why $9.25?', a: "Because the name is 925. But really \u2014 I don't believe helpful tools should be locked behind subscriptions. This is priced to stay accessible, get better over time, and actually be used." },
];

export default function HomePage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 md:pt-10 pb-10 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-brand-accent/[.04] rounded-full blur-[120px] pointer-events-none hidden md:block" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-brand-green/[.03] rounded-full blur-[100px] pointer-events-none hidden md:block" />

        <div className="relative max-w-[1120px] mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary/70 font-semibold text-xs md:text-[13px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_0_3px_rgba(155,226,212,0.3)]" aria-hidden="true" />
              Flexible work. No resumes. No burnout.
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 md:mt-6 text-[clamp(22px,5.8vw,40px)] md:text-[clamp(40px,4.8vw,64px)] leading-[1.12] tracking-[-0.02em] font-black"
          >
            Your ADHD Brain Isn&apos;t Broken.
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-[#a855f7] bg-clip-text text-transparent">
              Your Job Is.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-[720px] mx-auto mt-4 text-[14px] md:text-[17px] text-brand-primary/55 leading-relaxed px-2 md:px-0"
          >
            70+ ADHD-friendly ways to earn online — tagged by energy, effort, and payout speed.
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col items-center gap-3 mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto" role="group" aria-label="Primary actions">
              <a
                href={STRIPE_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-bold bg-brand-teal-dark text-white hover:bg-[#24a68e] hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(43,186,161,0.35)]"
              >
                Get Instant Access &mdash; $9.25
              </a>
              <a
                href="#what-you-get"
                className="inline-flex items-center px-5 py-3 rounded-full text-[14px] md:text-[15px] font-semibold text-brand-primary/70 hover:text-brand-teal-dark hover:bg-brand-teal/10 transition-all"
              >
                See features
              </a>
            </div>
            <p className="text-xs text-brand-primary/40 font-medium">
              One-time payment &middot; Lifetime access &middot; 30-day guarantee
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="flex items-center justify-center gap-8 md:gap-12 mt-8 md:mt-10 mb-6 md:mb-8">
            {[
              { value: '70+', label: 'Vetted opportunities' },
              { value: '100%', label: 'Manually vetted' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[22px] md:text-[28px] font-black tracking-tight text-brand-primary">{stat.value}</div>
                <div className="text-[11px] md:text-[13px] font-medium text-brand-primary/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Product Screenshots */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="w-full max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {['/1.webp', '/2.webp'].map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl md:rounded-2xl border border-black/[.08] shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white"
                  onClick={() => setLightboxSrc(src)}
                >
                  <img
                    src={src}
                    alt={`Dashboard screenshot ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section id="what-you-get" className="py-10 md:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">Features</p>
            <h2 className="text-[22px] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.02em] font-black">What You Get</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                  <img src={feat.icon} alt={feat.title} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[15px] font-bold m-0">{feat.title}</h3>
                <p className="text-sm text-brand-primary/50 mt-1.5 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 md:py-16" aria-label="Why 925 ADHD is different">
        <div className="max-w-[680px] mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-teal-dark mb-3">The difference</p>
            <h2 className="text-[22px] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.02em] font-black">Why This Isn&apos;t Just Another List</h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 text-[13px] md:text-sm">
              <div className="text-center font-semibold text-brand-primary/30 text-xs uppercase tracking-wider pb-4">Other lists</div>
              <div className="text-center font-semibold text-brand-green text-xs uppercase tracking-wider pb-4">925 ADHD</div>

              {[
                { theirs: 'Outdated, unvetted links', ours: 'Vetted, tested, and maintained' },
                { theirs: 'No guidance or next steps', ours: 'Step-by-step guides included' },
                { theirs: 'One-size-fits-all', ours: 'Tagged by energy level' },
                { theirs: 'Posted once, never updated', ours: 'Updated monthly' },
                { theirs: 'Written by content farms', ours: 'Built by someone with ADHD' },
                { theirs: 'Has community forums', ours: 'Community coming soon' },
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2.5 py-3.5 border-t border-brand-border text-brand-primary/40">
                    <span className="text-red-300/80 shrink-0 text-xs">{'✗'}</span>
                    {row.theirs}
                  </div>
                  <div className="flex items-center gap-2.5 py-3.5 border-t border-brand-border text-brand-primary/80 font-medium">
                    <CheckCircle size={14} className="text-brand-green shrink-0" />
                    {row.ours}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-16 bg-white" aria-label="Testimonials">
        <div className="max-w-[960px] mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-teal-dark mb-3">Testimonials</p>
            <h2 className="text-[22px] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.02em] font-black">What Members Are Saying</h2>
          </motion.div>
          <div className="flex sm:grid sm:grid-cols-3 gap-6 sm:gap-8 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { avatar: '/morgan-avatar.webp', name: 'Morgan', location: 'Leitchfield, KY', date: 'September 17, 2025', text: "It\u2019s like if r/beermoney made an app for ADHDers.", rating: 5 },
              { avatar: '/danii-avatar.webp', name: 'Danii', location: 'Bowling Green, KY', date: 'June 5, 2025', text: 'Feels like a shortcut for my brain. Exactly what I needed.', rating: 5 },
              { avatar: '/erica-avatar.webp', name: 'Erica', location: 'Clarkson, KY', date: 'November 29, 2024', text: 'Made my first $25 the same week I signed up. Zero overwhelm.', rating: 5 },
            ].map((review, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center shrink-0 w-[85%] sm:w-auto snap-center"
              >
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[15px] text-brand-primary/70 leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    width={36}
                    height={36}
                    loading="lazy"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-sm text-brand-primary">{review.name}</div>
                    <div className="text-xs text-brand-primary/40">{review.location}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-10 md:py-16" aria-label="Pricing">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">Pricing</p>
            <h2 className="text-[22px] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.02em] font-black">One Price. Lifetime Access.</h2>
            <p className="text-brand-primary/45 text-[15px] mt-2">Pay once, get everything. No recurring fees.</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-[480px] mx-auto">
            <div className="bg-white rounded-3xl border border-black/[.06] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 md:p-10">
              <div className="text-center mb-6">
                <div className="mb-2">
                  <span className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] text-brand-primary">$9.25</span>
                </div>
                <p className="text-sm text-brand-primary/40 font-medium">one-time &middot; lifetime access &middot; ad-free</p>
                <p className="text-sm font-bold text-brand-teal-dark mt-2">Every option manually vetted. Zero scams.</p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Curated library of 70+ income streams',
                  'Step-by-step guides, updated monthly',
                  'Passion Finder Quiz to match your brain',
                  'Tagged by energy, effort, and payout speed',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-brand-primary/70">
                    <CheckCircle size={16} className="text-brand-green shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5 p-3 mb-6 rounded-xl bg-brand-teal-dark/[.06] border border-brand-teal-dark/[.12]">
                <span className="text-lg shrink-0">{'🛡️'}</span>
                <p className="text-[13px] font-semibold text-brand-primary/70 leading-snug m-0">
                  <strong className="text-brand-teal-dark">30-day money-back guarantee.</strong> Full refund if it&apos;s not for you. No questions asked.
                </p>
              </div>

              <a
                href={STRIPE_URL}
                className="flex items-center justify-center w-full py-4 rounded-2xl text-[16px] font-bold bg-brand-teal-dark text-white hover:bg-[#24a68e] transition-all shadow-[0_4px_20px_rgba(43,186,161,0.25)]"
              >
                Get Instant Access
              </a>

              <div className="mt-6 pt-6 border-t border-black/[.06]">
                <p className="text-[13px] font-bold text-brand-primary/60 mb-3">After you join:</p>
                <ol className="space-y-2 text-[13px] text-brand-primary/55 list-none m-0 p-0">
                  {[
                    <>Open <a href="https://app.925adhd.com/" target="_blank" rel="noopener noreferrer" className="text-brand-teal-dark font-semibold hover:underline">app.925adhd.com</a></>,
                    'Browse 70+ options or take the Passion Finder Quiz',
                    'Pick one that fits your energy today',
                    'Follow the step-by-step guide and start earning',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-brand-teal-dark font-bold shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 md:py-16 bg-white scroll-mt-20" aria-label="FAQ">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">FAQ</p>
            <h2 className="text-[22px] md:text-[clamp(26px,3.5vw,38px)] tracking-[-0.02em] font-black">Questions?</h2>
          </motion.div>
          <div className="max-w-[720px] mx-auto">
            {faqItems.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <FaqAccordion question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-10 md:py-16" aria-label="Newsletter signup">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div {...fadeUp} className="max-w-[480px] mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-4">Free Guide</p>
            <h2 className="text-xl font-black tracking-tight mb-2">Not ready to buy yet?</h2>
            <p className="text-sm text-brand-primary/45 mb-6 leading-relaxed">
              Get our 5 ADHD-Friendly Side Hustles guide &mdash; free, instant access. No spam.
            </p>
            <GuideEmailCapture />
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />


      {/* Image Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-5 right-5 bg-white/10 backdrop-blur border-none text-white text-xl w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close enlarged image"
          >
            {'✕'}
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-[0_16px_64px_rgba(0,0,0,0.5)]"
          />
        </div>
      )}
    </>
  );
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border-b border-brand-border group">
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3 className="font-bold text-[15px] text-brand-primary m-0">{question}</h3>
        <ChevronDown
          size={18}
          className="text-brand-primary/40 shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <p className="text-sm text-brand-primary/55 leading-relaxed m-0 pb-5">{answer}</p>
    </details>
  );
}

function GuideEmailCapture() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: { preventDefault: () => void }) {
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
      // still redirect even if Web3Forms fails
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('guide_unlocked', '1');
    }
    router.push('/free/side-hustles');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-[400px] mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/30 outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent/30 transition-all"
      />
      <button
        type="submit"
        disabled={sending}
        className="rounded-xl bg-brand-accent text-white font-semibold px-5 py-3 text-sm hover:bg-[#6d28d9] transition-colors shrink-0 inline-flex items-center gap-2 disabled:opacity-60"
      >
        <Gift className="w-4 h-4" />
        Get Free Guide
      </button>
    </form>
  );
}

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9998] md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-brand-border px-4 py-3 flex items-center justify-between gap-3">
        <div className="text-sm">
          <span className="font-black text-brand-primary">$9.25</span>
          <span className="text-brand-primary/40 text-xs ml-1">one-time</span>
        </div>
        <a
          href={STRIPE_URL}
          className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-brand-teal-dark text-white"
        >
          Get Access
        </a>
      </div>
    </div>
  );
}
