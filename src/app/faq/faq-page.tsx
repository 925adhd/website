'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface FaqItem {
  question: string;
  answer: string;
}

function AccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.3) }}
      className="border border-brand-border rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-brand-panel/50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-brand-primary leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-muted shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-[15px] md:text-[16px] leading-relaxed text-brand-primary/70">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage({ items }: { items: FaqItem[] }) {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h1
            {...fadeUp}
            className="text-[clamp(32px,5vw,52px)] font-black text-brand-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(16px,2vw,20px)] text-brand-muted max-w-[600px] mx-auto leading-relaxed"
          >
            If you&apos;re wondering &ldquo;wait, what is this exactly?&rdquo; you&apos;re in the
            right place.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-16">
        <div className="max-w-[780px] mx-auto px-5 space-y-3">
          {items.map((item, i) => (
            <AccordionItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5 text-center">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-4"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[17px] text-brand-muted mb-8 max-w-[500px] mx-auto"
          >
            Get instant access to a curated library of ADHD-friendly income streams.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
                className="inline-block bg-brand-teal-deep hover:bg-[#24a68e] text-white font-bold text-[17px] px-8 py-4 rounded-full transition-colors"
              >
                Get Instant Access &mdash; $9.25
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold text-[17px] px-8 py-4 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e] bg-amber-50 border border-amber-200/40 rounded-full px-3 py-1.5">
              {'🛡️'} 30-Day Money-Back Guarantee &bull; No questions asked
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
