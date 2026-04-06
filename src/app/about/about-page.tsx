'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-[700px] mx-auto px-5">
          <motion.h1
            {...fadeUp}
            className="text-[clamp(32px,5vw,48px)] font-black text-brand-primary mb-4"
          >
            About 925 ADHD
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(16px,2vw,20px)] text-brand-primary/65 leading-relaxed"
          >
            A curated hub that helps ADHD brains find flexible online work, focus-friendly
            tools, and a community that <em>actually</em> gets it.{' '}
            <Link href="/#pricing" className="text-brand-teal-dark font-bold underline">
              See what&apos;s included →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Meet Kara */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp} className="text-center md:text-left">
              <img
                src="/mexander.webp"
                alt="925 ADHD Founder and son"
                width={350}
                height={350}
                className="w-full max-w-[350px] rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.12)] object-cover aspect-square mx-auto md:mx-0"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-[clamp(28px,4vw,42px)] font-black m-0 mb-5">
                {'👋 '}Meet Kara
              </h2>
              <p className="text-[17px] leading-relaxed text-brand-primary/75 mb-4">
                <strong className="text-brand-teal-dark">Founder. Mom. Tech nerd. Gamer. Dopamine chaser.</strong>
              </p>
              <p className="text-[17px] leading-relaxed text-brand-primary/75 mb-4">
                I tried the 9–5 grind. Factories, deadlines, alarms, chronic lateness. Got fired (again) for showing up late.
              </p>
              <p className="text-[17px] leading-relaxed text-brand-primary/75 mb-4">
                The truth? <strong className="text-brand-teal-dark">I wasn&apos;t lazy. I was trapped in a system that punished the way my brain works.</strong>
              </p>
              <p className="text-[17px] leading-relaxed text-brand-primary/75 mb-4">
                Then I found remote work and freelancing. It saved my mental health, my energy, and my relationship with my brain. And it gave me something priceless: <strong className="text-brand-teal-dark">time with my son.</strong>
              </p>
              <p className="text-[17px] leading-relaxed text-brand-primary/75">
                That&apos;s why I built 925 ADHD.
              </p>
            </motion.div>
          </div>

          {/* Why it matters */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-[900px] mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-6">
                <div className="text-center p-6 rounded-2xl bg-white border border-brand-border">
                  <div className="text-[32px] font-black text-brand-primary mb-1">~30%</div>
                  <p className="text-[14px] text-brand-primary/55 leading-relaxed m-0">
                    Adults with ADHD are about 30% more likely to have chronic employment problems.
                  </p>
                  <p className="text-[11px] text-brand-primary/30 mt-2 m-0">Source: Barkley, 2008</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white border border-brand-border">
                  <div className="text-[32px] font-black text-brand-primary mb-1">Lowest</div>
                  <p className="text-[14px] text-brand-primary/55 leading-relaxed m-0">
                    Autistic graduates face some of the lowest full-time employment rates.
                  </p>
                  <p className="text-[11px] text-brand-primary/30 mt-2 m-0">Source: National Autism Society</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <img
                  src="/autistic-child-lines-up-objects.webp"
                  alt="My son's toys lined up along the back of the bed"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full max-w-[400px] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] mx-auto md:ml-auto md:mr-0"
                />
              </div>
            </div>
            <p className="text-center text-[17px] leading-relaxed text-brand-primary/70 italic mt-10 m-0">
              &ldquo;The system isn&apos;t just broken. It&apos;s leaving people like me and my son behind.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <motion.h2 {...fadeUp} className="text-[clamp(24px,3.5vw,36px)] font-black mb-3">
            Our Mission
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-brand-primary/70 font-semibold mb-8">
            We don&apos;t fix you. We build with you.
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="text-[16px] leading-relaxed text-brand-primary/65 space-y-4">
            <p>
              If you&apos;ve ever felt like you don&apos;t fit traditional work, burned out by expectations made for someone else, or overwhelmed by where to even start &mdash; you&apos;re in the right place.
            </p>
            <p>
              This isn&apos;t a get-rich-quick scheme. It&apos;s a curated library of vetted income streams, organized for ADHD brains, updated monthly. No scams, no fluff.
            </p>
            <p className="text-brand-primary/80 font-bold">
              Start small. Stack what works. Go at your own pace.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8 text-center">
            <a
              href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-teal-dark text-white font-bold text-base hover:bg-[#24a68e] hover:-translate-y-px transition-all shadow-[0_4px_20px_rgba(43,186,161,0.25)]"
            >
              Get Instant Access &mdash; $9.25
            </a>
          </motion.div>
        </div>
      </section>

      {/* Get Access CTA */}
      <section className="py-12 pb-14 text-center bg-brand-panel">
        <div className="max-w-[680px] mx-auto px-5">
          <h2 className="text-2xl font-black mb-2">Ready to find work that fits your brain?</h2>
          <p className="text-brand-primary/65 text-[15px] mb-5">
            A curated library of ADHD-friendly income streams. One-time payment. Lifetime access.
          </p>
          <a
            href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-teal-dark text-white font-bold text-base hover:bg-[#24a68e] hover:-translate-y-px transition-all shadow-[0_4px_20px_rgba(43,186,161,0.25)]"
          >
            Get Instant Access &mdash; $9.25
          </a>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e] mt-3">
            {'🛡️'} 30-Day Money-Back Guarantee
          </p>
        </div>
      </section>
    </>
  );
}
