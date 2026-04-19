import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 py-24 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-brand-green" size={64} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)] mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-brand-primary/80 leading-relaxed mb-8">
          Your message has been sent! We&apos;ll get back to you soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-teal-dark text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-[#0b5d57] transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
