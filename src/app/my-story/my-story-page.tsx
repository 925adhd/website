'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function MyStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h1
            {...fadeUp}
            className="text-[clamp(32px,5vw,52px)] font-black text-brand-primary mb-4"
          >
            My Story <span className="text-brand-accent">(ADHD Style)</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(16px,2vw,20px)] text-brand-muted max-w-[700px] mx-auto leading-relaxed"
          >
            How I stopped fighting my brain and started building something that works for it.
          </motion.p>
        </div>
      </section>

      {/* The Picture at the Top */}
      <section className="py-12 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            The Picture at the Top?
          </motion.h2>
          <motion.div {...fadeUp} className="flex justify-center mb-8">
            <img
              src="/autistic-child-lines-up-objects.webp"
              alt="My son's toys lined up along the back of the bed"
              className="w-full max-w-[600px] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Those are my son&apos;s toys, neatly lined up along the back of my bed. It might look
              simple, but for him (who&apos;s autistic), this is how he finds order and comfort.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Just like my ADHD brain thrives with a bit of structure, he finds control in these
              little routines. It&apos;s a reminder that we all have our own rhythm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why I Started This Site */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            Why I Started This Site
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I was unemployed and had zero interest in chasing a &ldquo;real&rdquo; job.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I wasn&apos;t unmotivated; I was just done wasting my energy on something that drained
              me.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              The traditional 9-5 grind? It was never built for people like me.
            </p>
          </motion.div>

          {/* Callout */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] mx-auto mt-10 bg-brand-accent rounded-2xl px-8 py-6 text-center"
          >
            <p className="text-[clamp(18px,2.5vw,24px)] font-bold text-white italic leading-snug">
              &ldquo;Call it defiance. Call it rebellion. I call it survival.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Do We Do It? */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            Why Do We Do It?
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Why force ourselves to wake up at a time that fights our natural rhythm, drag ourselves
              to a job that feels pointless?
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              For a paycheck from a boss who sees you as a cog in the machine?
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              For a life spent chasing stability at the cost of our sanity?
            </p>
          </motion.div>
        </div>
      </section>

      {/* How I Knew Corporate Life Wasn't for Me */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            How I Knew Corporate Life Wasn&apos;t for Me
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I didn&apos;t quit&mdash;I got fired. For being late. (As if you didn&apos;t suspect.)
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Not because I wasn&apos;t doing my job well. But because my ADHD brain doesn&apos;t
              sync with a standard 9 to 5 schedule.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I tried. Alarms, reminders, all the tricks. But forcing myself into someone
              else&apos;s rigid schedule was setting me up to fail.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Even impressed them with Legos&mdash;built a model in 20 minutes&mdash;but didn&apos;t
              matter.
            </p>
          </motion.div>

          {/* Stats Callout */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[900px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-brand-panel border border-brand-border rounded-2xl p-6 text-center">
              <p className="text-[clamp(28px,4vw,40px)] font-black text-brand-accent mb-2">~30%</p>
              <p className="text-[15px] text-brand-muted leading-relaxed">
                Adults with ADHD are about 30% more likely to have chronic employment problems.
              </p>
              <p className="text-[11px] text-brand-muted/50 mt-2">Source: Barkley, 2008</p>
            </div>
            <div className="bg-brand-panel border border-brand-border rounded-2xl p-6 text-center">
              <p className="text-[clamp(28px,4vw,40px)] font-black text-brand-accent mb-2">
                Lowest
              </p>
              <p className="text-[15px] text-brand-muted leading-relaxed">
                Autistic graduates face some of the lowest full-time employment rates.
              </p>
              <p className="text-[11px] text-brand-muted/50 mt-2">Source: National Autism Society</p>
            </div>
            <div className="bg-brand-panel border border-brand-border rounded-2xl p-6 text-center flex items-center">
              <p className="text-[15px] text-brand-primary/80 leading-relaxed italic font-semibold">
                &ldquo;The system isn&apos;t just broken, it&apos;s leaving people like me and my
                son behind.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* I'm Done Living Like That */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            I&apos;m Done Living Like That
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Yeah, I need money too. That&apos;s a given.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              But I refuse to let survival be my only story.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              When I look back on my life, I don&apos;t want to see wasted hours. I want to see
              impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How This Site Evolved */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            How This Site Evolved
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              At first, I was just sharing sites I used to make money from home.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Then it hit me: Helping ADHDers navigate remote work isn&apos;t just something I can
              do. It&apos;s what I was meant to do.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I get to be my authentic self. No masks, no fake corporate personas.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Just me, showing up on my own terms.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Who knew an old hobby from high school would come back and actually become my calling?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 text-center">
        <div className="max-w-[600px] mx-auto px-5">
          <p className="text-brand-primary/60 text-[15px] mb-4">Ready to find work that fits your brain?</p>
          <a
            href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-teal-dark text-white font-bold text-base hover:bg-[#24a68e] hover:-translate-y-px transition-all shadow-[0_4px_20px_rgba(43,186,161,0.25)]"
          >
            Get Instant Access &mdash; $9.25
          </a>
          <p className="text-xs text-brand-primary/35 mt-2">One-time payment &middot; Lifetime access &middot; 30-day guarantee</p>
        </div>
      </section>

      {/* Breaking the Mold */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            Breaking the Mold
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              ADHDers don&apos;t fit into boxes. We break the mold, take risks, bring novelty to the
              world.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              We&apos;re the ones who challenge the status quo. We&apos;re the entrepreneurs, the
              creators, the ones who keep things exciting.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Meanwhile, we battle chaos in our own heads daily. Yet somehow we still manage to keep
              neurotypicals content with our creativity.
            </p>
            <p className="text-[19px] leading-relaxed text-brand-primary font-bold mt-6">
              &ldquo;The world needs us more than it realizes.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Freedom I've Found */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            The Freedom I&apos;ve Found
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I have no boss. No drug tests.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              That means I can actually use the medication that works best for me. Whether
              that&apos;s Vyvanse, THC, or CBD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* But Here's the Real Magic */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            But Here&apos;s the Real Magic:
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I get to help people without lying, faking, or selling my soul to corporate nonsense.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              No manipulative marketing. No AI-generated fluff. No $300 ADHD coaching sessions.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Instead, I get to be real. I get to share my ADHD insights with people who actually get
              it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ADHD Isn't a Flaw */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            ADHD Isn&apos;t a Flaw. It&apos;s an Edge.
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              The moment I stopped fighting it and started working with it, everything changed.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Life isn&apos;t about climbing the corporate ladder. It&apos;s about showing up,
              giving back, and being real.
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] mx-auto mt-8 text-[15px] italic text-brand-muted"
          >
            <strong>P.S.</strong> I already know I might cringe at this in a week and consider
            deleting everything (because ADHD). But for now, it stays.
          </motion.p>
        </div>
      </section>

      {/* So Where Does This Leave You? */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            So Where Does This Leave You?
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Maybe you&apos;re here because you&apos;re tired of forcing yourself into a system
              that doesn&apos;t work for your brain.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Maybe you&apos;ve tried freelancing, but the advice out there doesn&apos;t feel
              ADHD-friendly.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Or maybe you just want to know if making money from home is even real.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              That&apos;s exactly why I built this site. To give ADHDers the real, no-BS guide to
              freelancing and remote work.
            </p>
          </motion.div>

          {/* What You'll Find Box */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] mx-auto mt-12 bg-white border border-brand-border rounded-2xl p-8"
          >
            <h3 className="text-[clamp(20px,3vw,26px)] font-black text-brand-primary mb-6">
              What You&apos;ll Find in the Membership
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-green text-xl mt-0.5 shrink-0">&#10003;</span>
                <p className="text-[16px] leading-relaxed text-brand-primary/75">
                  <strong className="text-brand-primary">
                    Tools, Apps &amp; Brain Hacks That Actually Work
                  </strong>{' '}
                  &mdash; All the resources that saved my sanity. Curated for ADHD brains, tested in
                  real life.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green text-xl mt-0.5 shrink-0">&#10003;</span>
                <p className="text-[16px] leading-relaxed text-brand-primary/75">
                  <strong className="text-brand-primary">
                    Freelancing Tips Without the Trial &amp; Error
                  </strong>{' '}
                  &mdash; I already did the chaotic experimentation so you don&apos;t have to.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green text-xl mt-0.5 shrink-0">&#10003;</span>
                <p className="text-[16px] leading-relaxed text-brand-primary/75">
                  <strong className="text-brand-primary">A Neurodivergent-Safe Space</strong>{' '}
                  &mdash; This whole thing was built by someone who gets it.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Stick Around? */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="text-[clamp(24px,3.5vw,36px)] font-black text-brand-primary mb-8 text-center"
          >
            Why Stick Around?
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] mx-auto space-y-4"
          >
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              Because ADHD means we thrive on newness, and I&apos;m always testing new strategies,
              finding new tools.
            </p>
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              This isn&apos;t just a one-time resource. It&apos;s an evolving ADHD playbook.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] mx-auto mt-8 flex flex-wrap justify-center gap-4 text-[16px]"
          >
            <Link href="/blog" className="text-brand-accent font-bold underline">
              Need inspiration? Read the blog.
            </Link>
            <span className="text-brand-muted">|</span>
            <Link href="/#pricing" className="text-brand-accent font-bold underline">
              Want ADHD-friendly work ideas? Get started.
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final / CTA */}
      <section className="py-16 bg-brand-panel">
        <div className="max-w-[1120px] mx-auto px-5 text-center">
          <motion.div {...fadeUp} className="max-w-[700px] mx-auto space-y-6">
            <p className="text-[17px] leading-relaxed text-brand-primary/75">
              I know how it feels to struggle with focus, to get lost in research, to wonder if this
              is even possible. But I promise you: if I can do it, so can you.
            </p>
            <p className="text-[19px] leading-relaxed text-brand-primary font-semibold">
              Stick around, explore my ADHD-fueled chaos, and let&apos;s figure this out together.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="mt-10">
            <a
              href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
              className="inline-block bg-brand-teal-dark hover:bg-[#24a68e] text-white font-bold text-[18px] px-10 py-4 rounded-full transition-colors"
            >
              Get Instant Access &mdash; $9.25
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
