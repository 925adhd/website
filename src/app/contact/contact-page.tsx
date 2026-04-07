'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.h1
            {...fadeUp}
            className="text-[clamp(36px,5vw,56px)] font-black text-brand-primary mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(20px,3vw,28px)] font-bold text-brand-accent mb-6"
          >
            Let&apos;s Connect!
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-[640px] mx-auto space-y-4 text-[17px] leading-relaxed text-brand-primary/75"
          >
            <p>
              We&apos;d love to hear from you! Questions, feedback, or just want to say hi?
            </p>
            <p>
              Whether you have a question, suggestion, or just want to share your wins (or
              flops!), I&apos;m here for it.
            </p>
            <p>
              I try to respond to everyone personally, though it might take a day or
              two&mdash;running a one-person ADHD-friendly operation over here!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Card + Form */}
      <section className="pb-20">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Method Card */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-brand-border bg-brand-warm p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/10 mb-5">
                <Mail className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Email</h3>
              <a
                href="mailto:kara@925adhd.com"
                className="text-brand-accent font-semibold underline underline-offset-2 text-lg hover:opacity-80 transition-opacity"
              >
                kara@925adhd.com
              </a>
              <p className="text-brand-muted text-[15px] mt-3">
                Best for questions, feedback, or just to say hi!
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-brand-border bg-brand-warm p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green/10 mb-4">
                    <Mail className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">Message Sent!</h3>
                  <p className="text-brand-muted">
                    Thanks for reaching out. I&apos;ll get back to you as soon as I can!
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-brand-accent font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="access_key" value="dfb5a758-6041-45a0-b76d-6ee784a406ec" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-primary mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-brand-border bg-brand-panel px-4 py-3 text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-brand-border bg-brand-panel px-4 py-3 text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-primary mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      className="w-full rounded-xl border border-brand-border bg-brand-panel px-4 py-3 text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow resize-y"
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="text-red-500 text-sm font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full rounded-xl bg-brand-teal-deep text-white font-bold py-3.5 px-6 hover:bg-[#0b5d57] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
