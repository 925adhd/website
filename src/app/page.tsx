import type { Metadata } from 'next';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: '925 ADHD - 70+ Ways to Make Money Online for ADHD Minds | $9.25 One-Time',
  description:
    'Find ADHD-friendly ways to make money online without the overwhelm. 70+ curated flexible work options, vetted and scam-free, with step-by-step guidance. No resumes required. One-time payment, lifetime access.',
  alternates: {
    canonical: 'https://925adhd.com/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://925adhd.com/#organization',
      name: '925 ADHD LLC',
      alternateName: '925 ADHD',
      url: 'https://925adhd.com/',
      logo: 'https://925adhd.com/925-adhd-logo.png',
      sameAs: [
        'https://www.facebook.com/925adhd',
        'https://www.instagram.com/925.adhd',
        'https://www.youtube.com/@ADHDBible',
        'https://www.tiktok.com/@925adhd',
        'https://www.linkedin.com/in/kara-gibson-3818a3348',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        url: 'https://925adhd.com/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://925adhd.com/#website',
      url: 'https://925adhd.com/',
      name: '925 ADHD',
      publisher: { '@id': 'https://925adhd.com/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Product',
      '@id': 'https://925adhd.com/#product',
      name: '925 ADHD Lifetime Access',
      description:
        '70+ vetted ways to earn online, with lifetime updates. Tagged by effort and payout speed, with simple guides. Plus access to the Passion Finder quiz. One-time payment. Lifetime access.',
      image: ['https://925adhd.com/925-adhd-logo.png'],
      brand: { '@type': 'Brand', name: '925 ADHD' },
      offers: {
        '@type': 'Offer',
        url: 'https://925adhd.com/',
        priceCurrency: 'USD',
        price: '9.25',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://925adhd.com/#organization' },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
          returnFees: 'https://schema.org/FreeReturn',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://925adhd.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What exactly do I get?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '70+ vetted ways to earn online with lifetime updates. Tagged by effort and payout speed, with simple guides. Includes access to the Passion Finder quiz.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this a one-time payment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pay $9.25 once and get lifetime access. No recurring charges. No hidden fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can I start earning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some options can start within days. Others take longer depending on setup. You can take action right after joining.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need experience?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Many options are beginner-friendly. We tell you what you need and what to do next.',
          },
        },
        {
          '@type': 'Question',
          name: "What if it's not for me?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "30-day money-back guarantee. If it's not a fit, you get a full refund. No questions asked.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why $9.25?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "I don't believe helpful tools should be locked behind subscriptions. This is priced to stay accessible, get better over time, and actually be used.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
