'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Shield, FileText, AlertTriangle, Cookie } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

type LegalType = 'privacy' | 'terms' | 'disclaimer' | 'cookie';

interface LegalContentProps {
  type: LegalType;
}

function PrivacyContent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Shield className="text-brand-accent" size={28} />
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)]">
          Privacy Policy
        </h1>
      </div>
      <p className="text-brand-muted text-sm mb-8">Last Updated: December 22, 2025</p>

      <p className="text-brand-primary/80 leading-relaxed mb-8">
        Hey there! Welcome to 925 ADHD. Before you dive into the world of freelancing and all things
        ADHD-friendly, let&apos;s get the nitty-gritty out of the way. We know privacy is important,
        so here&apos;s what we do and don&apos;t do with your data.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">1. What We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>
            <strong>Cookies</strong> &mdash; small pieces of data that help our site remember you and
            improve your browsing experience.
          </li>
          <li>
            <strong>Analytics</strong> &mdash; we use Google Analytics to understand how visitors use
            our site so we can make it better.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">2. How We Use Your Info</h2>
        <p className="text-brand-primary/80 leading-relaxed mb-2">
          We don&apos;t sell, trade, or share your data with anyone. Period. We might use it to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>Improve the site and your experience</li>
          <li>Send helpful emails (only if you sign up)</li>
          <li>Respond to your inquiries</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">3. Cookies</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We use cookies to improve your experience on 925 ADHD. You can accept cookies or adjust
          your browser settings to manage them. Most browsers allow you to refuse cookies or alert you
          when cookies are being sent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">4. Your Rights</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          You have the right to access, update, or delete your personal information at any time. Just
          send us a message and we&apos;ll take care of it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">5. Third-Party Links</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We link to external resources and platforms that we think are helpful, but we can&apos;t
          control their privacy policies. We recommend checking their policies before sharing any
          personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">6. Changes to This Policy</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We&apos;ll update this page if anything changes. Check back occasionally to stay informed.
        </p>
      </section>

      <div className="border-t border-brand-border pt-8 mt-8">
        <p className="text-brand-primary/80 leading-relaxed mb-4">
          By using 925 ADHD, you&apos;re agreeing to this privacy policy.
        </p>
        <p className="text-brand-primary/80 leading-relaxed">
          Questions? Email us at{' '}
          <a href="mailto:info@925adhd.com" className="text-brand-accent hover:underline">
            info@925adhd.com
          </a>
        </p>
      </div>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <FileText className="text-brand-accent" size={28} />
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)]">
          Terms of Service
        </h1>
      </div>
      <p className="text-brand-muted text-sm mb-8">Last Updated: January 9, 2026</p>

      <p className="text-brand-primary/80 leading-relaxed mb-8">
        Welcome to 925 ADHD! Before you dive in, please take a quick read through these terms so we&apos;re
        all on the same page.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">1. Who We Are</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          925 ADHD &mdash; your hub for ADHD-friendly earning platforms and freelance tips. We curate
          opportunities so you don&apos;t have to wade through the noise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">2. What You Get</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          One-time purchase = lifetime access to our guides, 70+ vetted opportunities, resources,
          and exclusive content. We keep adding new stuff and removing anything that goes stale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">3. Payment</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          All payments are processed securely through Stripe. One-time payment of $9.25 for lifetime
          access. No recurring charges. No hidden fees. No surprises.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">4. Refunds</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We offer a <strong>30-day money-back guarantee</strong>. No questions asked. If it&apos;s
          not for you, just let us know and we&apos;ll process a full refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">5. Optional Premium Features</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          Your $9.25 grants lifetime access to the core platform. Optional Premium features may be
          available that require a monthly subscription. These will always be clearly labeled and are
          never required to use the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">6. Access &amp; Account Management</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          You get lifetime access to the platform. Please keep your account information secure and
          don&apos;t share your login credentials with others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">7. Use of Content</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          All content on 925 ADHD is for personal, educational, and non-commercial purposes. Please
          don&apos;t copy, redistribute, or resell our guides and resources. We put a lot of work
          into this stuff!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">8. Limitation of Liability</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          All resources and information are provided &quot;as is&quot; without any guarantees of
          specific results. We do our best to keep everything accurate and up-to-date, but we
          can&apos;t guarantee outcomes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">9. Indemnification</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          By using 925 ADHD, you agree to indemnify and hold harmless 925 ADHD LLC, its owners, and
          affiliates from any claims, damages, or expenses arising from your use of the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">10. Governing Law</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          These terms are governed by the laws of the State of Kentucky, United States.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">11. Changes to These Terms</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We may update these terms from time to time. We&apos;ll notify you of any significant
          changes. Continued use of the platform means you accept the updated terms.
        </p>
      </section>

      <div className="border-t border-brand-border pt-8 mt-8">
        <p className="text-brand-primary/80 leading-relaxed">
          Questions? Email us at{' '}
          <a href="mailto:info@925adhd.com" className="text-brand-accent hover:underline">
            info@925adhd.com
          </a>
        </p>
      </div>
    </>
  );
}

function DisclaimerContent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-brand-accent" size={28} />
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)]">
          Quick Disclaimer
        </h1>
      </div>
      <p className="text-brand-muted text-sm mb-8">Last Updated: December 22, 2025</p>

      <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6 mb-8">
        <p className="text-brand-primary font-semibold text-lg">
          TL;DR: I vet opportunities, but platforms change constantly. Always verify before signing
          up. Your mileage may vary.
        </p>
      </div>

      <p className="text-brand-primary/80 leading-relaxed mb-4">
        I&apos;m not a therapist, financial advisor, career coach, or tech support.
      </p>
      <p className="text-brand-primary/80 leading-relaxed mb-8">
        I&apos;m just a mom with ADHD and a Wi-Fi connection. Curating the chaos so you don&apos;t
        have to.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">What I Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>Personally vet and test opportunities before recommending them</li>
          <li>Research platforms thoroughly</li>
          <li>Remove sketchy or outdated stuff regularly</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">What You Should Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>Check current terms and conditions of any platform</li>
          <li>Read reviews and do your own research</li>
          <li>Verify that opportunities are still available in your area</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">Why?</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          Platforms change constantly. Terms get updated, features get removed, and availability
          shifts. What worked last month might look different today. I do my best to stay on top of
          it, but the internet moves fast.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">Affiliate Links</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          Some links on this site may be affiliate links. That means if you click through and sign
          up, we might earn a small commission at no extra cost to you. This helps keep 925 ADHD
          running and doesn&apos;t influence which opportunities we recommend.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">The Legal Stuff</h2>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>
            All content on 925 ADHD is for <strong>educational purposes only</strong> and should not
            be taken as professional advice.
          </li>
          <li>
            We make <strong>no income guarantees</strong>. Results depend on your effort, skills,
            market conditions, and a bunch of other factors.
          </li>
          <li>
            We are <strong>not responsible</strong> for any losses, damages, or issues arising from
            your use of third-party platforms linked on this site.
          </li>
          <li>
            Always consult a qualified professional for financial, legal, or medical advice.
          </li>
        </ul>
      </section>

      <div className="border-t border-brand-border pt-8 mt-8">
        <p className="text-brand-primary/80 leading-relaxed">
          Questions? Email us at{' '}
          <a href="mailto:info@925adhd.com" className="text-brand-accent hover:underline">
            info@925adhd.com
          </a>
        </p>
      </div>
    </>
  );
}

function CookieContent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Cookie className="text-brand-accent" size={28} />
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)]">
          Cookie Policy
        </h1>
      </div>
      <p className="text-brand-muted text-sm mb-8">Last Updated: December 22, 2025</p>

      <p className="text-brand-primary/80 leading-relaxed mb-8">
        Like most websites, 925 ADHD uses cookies to make your experience better. Here&apos;s the
        simple breakdown of what we use and why.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">What Are Cookies?</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. They help the
          site remember your preferences and understand how you use it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2 text-brand-primary/80 leading-relaxed">
          <li>
            <strong>Essential Cookies</strong> &mdash; required for basic site functionality like
            navigation and secure areas.
          </li>
          <li>
            <strong>Analytics Cookies (Google Analytics)</strong> &mdash; help us understand how
            visitors use our site so we can improve it. These collect anonymous usage data.
          </li>
          <li>
            <strong>Advertising Cookies (Facebook Pixel)</strong> &mdash; used for advertising
            measurement and to understand how effective our ads are. These help us reach people who
            might benefit from 925 ADHD.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">Managing Cookies</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          You can manage or disable cookies through your browser settings. Most browsers allow you to
          block or delete cookies. Keep in mind that disabling cookies may affect how the site works
          for you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-primary mb-3">Changes to This Policy</h2>
        <p className="text-brand-primary/80 leading-relaxed">
          We may update this cookie policy from time to time. Any changes will be reflected on this
          page with an updated date.
        </p>
      </section>

      <div className="border-t border-brand-border pt-8 mt-8">
        <p className="text-brand-primary/80 leading-relaxed">
          Questions about our cookie usage? Email us at{' '}
          <a href="mailto:info@925adhd.com" className="text-brand-accent hover:underline">
            info@925adhd.com
          </a>
        </p>
      </div>
    </>
  );
}

const contentMap: Record<LegalType, () => React.ReactNode> = {
  privacy: PrivacyContent,
  terms: TermsContent,
  disclaimer: DisclaimerContent,
  cookie: CookieContent,
};

export default function LegalContent({ type }: LegalContentProps) {
  const Content = contentMap[type];

  return (
    <section className="max-w-[800px] mx-auto px-5 py-12">
      <motion.div {...fadeUp}>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-brand-accent hover:underline text-sm mb-6"
        >
          &larr; Back to Home
        </Link>
        <Content />
      </motion.div>
    </section>
  );
}
