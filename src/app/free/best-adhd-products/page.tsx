import type { Metadata } from 'next';
import BestAdhdProductsPage from './best-adhd-products-page';

export const metadata: Metadata = {
  title: '18 Best ADHD Products for Adults (2026 Tested Picks) | 925 ADHD',
  description:
    '18 ADHD-friendly products tested by adults with ADHD. Focus tools, planners, fidgets, timers, and lighting, rated by usefulness instead of hype. Honest picks across budgets.',
  alternates: { canonical: 'https://925adhd.com/free/best-adhd-products' },
  openGraph: {
    title: '18 Best ADHD Products for Adults (2026 Tested Picks) | 925 ADHD',
    description:
      '18 ADHD-friendly products tested by adults with ADHD. Focus tools, planners, fidgets, timers, and lighting, rated by usefulness instead of hype.',
    url: 'https://925adhd.com/free/best-adhd-products',
    images: [{ url: 'https://925adhd.com/925-adhd-logo.png', alt: '925 ADHD Logo' }],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://925adhd.com/' },
    { '@type': 'ListItem', position: 2, name: 'Free Resources', item: 'https://925adhd.com/free' },
    { '@type': 'ListItem', position: 3, name: 'Best Products for ADHD Adults', item: 'https://925adhd.com/free/best-adhd-products' },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best ADHD Products for Adults 2026',
  description: 'A curated, tested list of ADHD-friendly products for focus, planning, fidgets, timers, lighting, and focus music.',
  numberOfItems: 18,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Magicteam White Noise Machine', url: 'https://925adhd.com/free/best-adhd-products#noise' },
    { '@type': 'ListItem', position: 2, name: 'Loop Quiet Earplugs', url: 'https://925adhd.com/free/best-adhd-products#noise' },
    { '@type': 'ListItem', position: 3, name: 'Sony WH-1000XM5 Headphones', url: 'https://925adhd.com/free/best-adhd-products#noise' },
    { '@type': 'ListItem', position: 4, name: 'ADHD Cleaning Planner Notebook', url: 'https://925adhd.com/free/best-adhd-products#planners' },
    { '@type': 'ListItem', position: 5, name: 'Panda Planner', url: 'https://925adhd.com/free/best-adhd-products#planners' },
    { '@type': 'ListItem', position: 6, name: 'Clever Fox Planner Pro', url: 'https://925adhd.com/free/best-adhd-products#planners' },
    { '@type': 'ListItem', position: 7, name: 'Rocketbook Fusion', url: 'https://925adhd.com/free/best-adhd-products#planners' },
    { '@type': 'ListItem', position: 8, name: 'Ticktime Cube', url: 'https://925adhd.com/free/best-adhd-products#timers' },
    { '@type': 'ListItem', position: 9, name: 'Time Timer MOD (60-min)', url: 'https://925adhd.com/free/best-adhd-products#timers' },
    { '@type': 'ListItem', position: 10, name: '3-in-1 Visual Timer with Planning Board', url: 'https://925adhd.com/free/best-adhd-products#timers' },
    { '@type': 'ListItem', position: 11, name: 'Amazon Echo Dot', url: 'https://925adhd.com/free/best-adhd-products#timers' },
    { '@type': 'ListItem', position: 12, name: "Tom's Flippy Chain", url: 'https://925adhd.com/free/best-adhd-products#fidgets' },
    { '@type': 'ListItem', position: 13, name: 'Silicone Magnetic Fidget Balls (4-pack)', url: 'https://925adhd.com/free/best-adhd-products#fidgets' },
    { '@type': 'ListItem', position: 14, name: 'Sensory Worry Stones (6-pack)', url: 'https://925adhd.com/free/best-adhd-products#fidgets' },
    { '@type': 'ListItem', position: 15, name: "L'AGRATY Weighted Lap Blanket", url: 'https://925adhd.com/free/best-adhd-products#fidgets' },
    { '@type': 'ListItem', position: 16, name: 'Govee RGBIC LED Strip', url: 'https://925adhd.com/free/best-adhd-products#lighting' },
    { '@type': 'ListItem', position: 17, name: 'BenQ ScreenBar', url: 'https://925adhd.com/free/best-adhd-products#lighting' },
    { '@type': 'ListItem', position: 18, name: 'Brain.fm', url: 'https://925adhd.com/free/best-adhd-products#audio' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a product "ADHD-friendly"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A product is ADHD-friendly when it lowers friction, requires little setup, gives clear feedback, and works the way your brain actually works on a hard day. Things like visual timers, tactile fidgets, and noise control reduce decision fatigue and sensory overload, the two biggest ADHD energy drains.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did you choose these products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We curate based on three things: products consistently recommended in ADHD communities (Reddit, forums, real users), products with strong reviews from people who specifically mention ADHD or sensory needs, and items with design features that match how ADHD brains work (visual feedback, low setup friction, tactile or audio cues). We do not claim to have personally tested every item. We have tested some, researched others, and remove any that get bad community feedback over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you earn money if I buy through your links?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most product links on this page are Amazon affiliate links, which means we earn a small commission at no extra cost to you if you buy something. This helps keep 925 ADHD running. We only recommend things we genuinely believe help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these only useful if I have diagnosed ADHD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Most of these tools help anyone who struggles with focus, time blindness, sensory overload, executive function, or organization. You do not need a diagnosis to benefit from a visual timer, noise-canceling headphones, or a planner that fits how you actually live.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often is this list updated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We review the list every few months. Products that go out of stock, get worse, or get replaced by better options are removed. New picks are added when we find something that earns its spot, not on a fixed schedule.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <BestAdhdProductsPage />
    </>
  );
}
