import type { Metadata } from 'next';
import FaqPage from './faq-page';

export const metadata: Metadata = {
  title: 'ADHD Remote Work FAQ: Earnings, Legitimacy, Pricing & Getting Started',
  description:
    'Get answers to common questions about 925 ADHD, pricing, access, and how to start earning online with ADHD.',
  alternates: { canonical: 'https://925adhd.com/faq' },
  openGraph: {
    type: 'website',
    title: 'ADHD Remote Work FAQ: Earnings, Legitimacy, Pricing & Getting Started',
    description:
      'Get answers to common questions about 925 ADHD, pricing, access, and how to start earning online with ADHD.',
    url: 'https://925adhd.com/faq',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    question: 'What exactly do I get?',
    answer:
      '70+ vetted ways to earn online with lifetime updates. Tagged by effort and payout speed, with simple guides. Includes access to the Passion Finder quiz.',
  },
  {
    question: 'What types of work are included?',
    answer:
      'Paid surveys, app and website testing, AI tasks, transcription, voice tasks, and small freelance or creative gigs. All flexible, all chosen based on your energy.',
  },
  {
    question: 'Is this a one-time payment?',
    answer:
      'Yes. Pay $9.25 once and get lifetime access. No recurring charges. No hidden fees.',
  },
  {
    question: "What if it's not for me?",
    answer:
      '30-day money-back guarantee. Full refund, no questions asked.',
  },
  {
    question: 'How fast can I start earning?',
    answer:
      'Some options can start within days. Others take longer depending on setup.',
  },
  {
    question: 'How much money can I realistically make?',
    answer:
      'Some options pay $10-50 quickly. Others can grow into $500-2000+ per month. Payout expectations are labeled for each.',
  },
  {
    question: 'Are these opportunities legit?',
    answer:
      'Every option is vetted. MLMs, pyramid schemes, and sketchy options are filtered out.',
  },
  {
    question: 'Do I need experience or special equipment?',
    answer:
      'No. Many options are beginner-friendly. Most just need a computer and internet.',
  },
  {
    question: "Can I use this outside the United States?",
    answer:
      'Yes. Many options are available globally. US-specific ones are clearly labeled.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Card (Visa, Mastercard, Amex, Discover), Google Pay, Cash App Pay, Amazon Pay, and Klarna. Processed securely through Stripe.',
  },
  {
    question: 'Is this different from free Reddit lists like r/beermoney?',
    answer:
      'Yes. Free lists are unvetted, unorganized, and rarely updated. 925 ADHD is curated specifically for ADHD brains — every option is tagged by energy level, effort, and payout speed, with step-by-step guides. Dead or scammy options are removed monthly.',
  },
  {
    question: 'Do I get updates or is this a one-time thing?',
    answer:
      'You get lifetime updates. New options are added monthly and outdated or scammy ones are removed. Your one-time payment covers everything — past, present, and future.',
  },
  {
    question: 'How do I request a refund?',
    answer:
      'Just email kara@925adhd.com within 30 days. Full refund, no questions asked. You don\'t need to give a reason.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://925adhd.com/faq#faqpage',
  url: 'https://925adhd.com/faq',
  name: 'ADHD Remote Work FAQ: Earnings, Legitimacy, Pricing & Getting Started | 925 ADHD',
  inLanguage: 'en-US',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqPage items={faqItems} />
    </>
  );
}
