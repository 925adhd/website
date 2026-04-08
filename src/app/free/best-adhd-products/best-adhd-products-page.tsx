'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Notebook,
  Timer,
  Sparkles,
  Lightbulb,
  Music2,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

type Product = {
  name: string;
  price: string;
  url: string;
  hook: string;
  quickHits: string[];
  badge?: string;
  isAffiliate?: boolean;
  image?: string;
};

type Category = {
  id: string;
  title: string;
  icon: LucideIcon;
  chipBg: string;
  chipText: string;
  cardBorder: string;
  cardHover: string;
  buttonBg: string;
  priceBg: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: 'noise',
    title: 'Focus & Noise',
    icon: Headphones,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: 'Magicteam White Noise Machine',
        price: '$20',
        url: 'https://amzn.to/4vgtso9',
        isAffiliate: true,
        image: '/amazon/magicteam-white-noise.webp',
        hook: 'Set it and your brain finally shuts up.',
        quickHits: ['20 non-looping sounds', '32 volume levels', 'Sleep timer + memory'],
      },
      {
        name: 'Loop Quiet Earplugs',
        price: '$25',
        url: 'https://amzn.to/4mje6LI',
        isAffiliate: true,
        image: '/amazon/loop-quiet-earplugs.webp',
        hook: 'Cheap cheat code for sensory overload.',
        quickHits: ['Cuts 24dB', 'Invisible in your ear', 'Good for concerts too'],
        badge: 'Top pick',
      },
      {
        name: 'Sony WH-1000XM5',
        price: '$250',
        url: 'https://amzn.to/3O2GGV1',
        isAffiliate: true,
        image: '/amazon/sony-wh-1000xm5.webp',
        hook: 'The "turn the whole world off" headphones.',
        quickHits: ['Best noise canceling on Earth', '30hr battery', 'Pillow-soft all day'],
      },
    ],
  },
  {
    id: 'planners',
    title: 'Planners & Organization',
    icon: Notebook,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: 'ADHD Cleaning Planner Notebook',
        price: '$9',
        url: 'https://amzn.to/4mfXhkJ',
        isAffiliate: true,
        image: '/amazon/adhd-cleaning-planner.webp',
        hook: 'Cleaning checklists that don\u2019t shame you.',
        quickHits: ['Daily, weekly, monthly chores', 'Built for ADHD pacing', 'No "perfect day" pressure'],
        badge: 'Top pick',
      },
      {
        name: 'Panda Planner',
        price: '$17',
        url: 'https://amzn.to/4bW9SWO',
        isAffiliate: true,
        image: '/amazon/panda-planner.webp',
        hook: 'A planner that actually asks how you feel.',
        quickHits: ['Gratitude + priorities', 'Science-backed layout', 'Emotional regulation friendly'],
      },
      {
        name: 'Clever Fox Planner Pro',
        price: '$40',
        url: 'https://amzn.to/4sQPD2K',
        isAffiliate: true,
        image: '/amazon/clever-fox-planner-pro.webp',
        hook: 'Undated. Zero shame for the days you skip.',
        quickHits: ['Goal-focused layout', 'Weekly + monthly', 'Picks up when you do'],
      },
      {
        name: 'Rocketbook Fusion',
        price: '$40',
        url: 'https://amzn.to/48AkBnA',
        isAffiliate: true,
        image: '/amazon/rocketbook-fusion.webp',
        hook: 'One notebook. Infinite restarts.',
        quickHits: ['Write, scan, wipe, reuse', '7 page styles', 'Cloud sync'],
      },
    ],
  },
  {
    id: 'timers',
    title: 'Timers & Time Awareness',
    icon: Timer,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: 'Ticktime Cube',
        price: '$18',
        url: 'https://amzn.to/3Of7Rf8',
        isAffiliate: true,
        image: '/amazon/ticktime-cube.webp',
        hook: 'Flip it and you already started.',
        quickHits: ['Zero buttons', '6 presets', 'Friction-free'],
      },
      {
        name: 'Time Timer MOD (60-min)',
        price: '$20',
        url: 'https://amzn.to/3PU9dww',
        isAffiliate: true,
        image: '/amazon/time-timer-mod.webp',
        hook: 'Finally, time you can actually SEE.',
        quickHits: ['Visual countdown', 'No math', 'Cures time blindness'],
      },
      {
        name: '3-in-1 Visual Timer with Planning Board',
        price: '$40',
        url: 'https://amzn.to/4tym1XM',
        isAffiliate: true,
        image: '/amazon/visual-timer-planning-board.webp',
        hook: 'Timer + schedule + chore chart in one.',
        quickHits: ['Visual countdown', 'Daily routine board', 'Made for ADHD/autistic kids (works for adults too)'],
        badge: 'Top pick',
      },
      {
        name: 'Amazon Echo Dot',
        price: '$50',
        url: 'https://amzn.to/4vaPatL',
        isAffiliate: true,
        image: '/amazon/amazon-echo-dot.webp',
        hook: '"Alexa, set a timer." Done.',
        quickHits: ['No phone needed', 'Voice reminders', 'Great for routines'],
      },
    ],
  },
  {
    id: 'fidgets',
    title: 'Fidgets & Regulation',
    icon: Sparkles,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: "Tom's Flippy Chain",
        price: '$10',
        url: 'https://amzn.to/41olWdk',
        isAffiliate: true,
        image: '/amazon/toms-flippy-chain.webp',
        hook: 'The most discreet fidget ever made.',
        quickHits: ['Pocket-sized', 'Nearly indestructible', 'Totally silent'],
      },
      {
        name: 'Silicone Magnetic Fidget Balls (4-pack)',
        price: '$10',
        url: 'https://amzn.to/4soweFk',
        isAffiliate: true,
        image: '/amazon/silicone-magnetic-balls.webp',
        hook: 'Desk fidget people actually keep using.',
        quickHits: ['Silent + textured', '4 in a pack', 'Stupidly satisfying'],
        badge: 'Top pick',
      },
      {
        name: 'Sensory Worry Stones (6-pack)',
        price: '$10',
        url: 'https://amzn.to/3PV87AM',
        isAffiliate: true,
        image: '/amazon/sensory-worry-stones.webp',
        hook: 'Pocket-sized calm. Zero tech required.',
        quickHits: ['Textured to rub when anxious', '6 in a pack', 'Discreet anywhere'],
      },
      {
        name: "L'AGRATY Weighted Lap Blanket (5 lbs)",
        price: '$28',
        url: 'https://amzn.to/4mh5IMx',
        isAffiliate: true,
        image: '/amazon/lagraty-weighted-lap-blanket.webp',
        hook: 'A weighted blanket sized for your lap.',
        quickHits: ['Deep pressure calm', 'Cooling + washable', 'Portable 29" x 24"'],
      },
    ],
  },
  {
    id: 'lighting',
    title: 'Focus Lighting',
    icon: Lightbulb,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: 'Govee RGBIC LED Strip (16.4ft)',
        price: '$14',
        url: 'https://amzn.to/4mbNb4g',
        isAffiliate: true,
        image: '/amazon/govee-led-strip.webp',
        hook: 'Cheapest dopamine upgrade ever.',
        quickHits: ['Color-code your moods', 'App + music sync', 'Ridiculously fun'],
        badge: 'Top pick',
      },
      {
        name: 'BenQ ScreenBar',
        price: '$110',
        url: 'https://amzn.to/41gErR1',
        isAffiliate: true,
        image: '/amazon/benq-screenbar.webp',
        hook: 'The lamp that knows when your eyes hurt.',
        quickHits: ['Auto-dimming', 'Zero glare', 'Late-night friendly'],
      },
    ],
  },
  {
    id: 'audio',
    title: 'Focus Music',
    icon: Music2,
    chipBg: 'bg-green-100',
    chipText: 'text-brand-green',
    cardBorder: 'border-brand-border',
    cardHover: 'hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]',
    buttonBg: 'bg-brand-primary hover:bg-[#1e293b]',
    priceBg: 'bg-green-100 text-brand-green',
    products: [
      {
        name: 'Brain.fm',
        price: '$7/mo',
        url: 'https://www.brain.fm/925adhd',
        isAffiliate: true,
        image: '/amazon/brain-fm.webp',
        hook: 'Music literally engineered for your focus.',
        quickHits: ['Neural phase-locking', 'Not a playlist', 'Free trial'],
        badge: 'Top pick',
      },
    ],
  },
];

export default function BestAdhdProductsPage() {
  return (
    <article className="bg-gradient-to-b from-stone-50 via-white to-stone-50">
      <div className="max-w-[1120px] mx-auto px-5 pt-5 md:pt-7 pb-20 md:pb-28">
        {/* Back link */}
        <motion.div className="mb-4" {...fadeUp}>
          <Link
            href="/free"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary/70 hover:text-brand-primary hover:gap-3 transition-all"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Free Resources
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header className="max-w-3xl mx-auto text-center mb-8" {...fadeUp}>
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.15em] text-brand-teal-deep bg-teal-100 px-3 py-1.5 rounded-full mb-3">
            Product Picks
          </span>
          <h1 className="text-4xl md:text-[44px] font-black tracking-[-0.02em] leading-[1.05] text-brand-primary mb-5">
            Best products for ADHD adults.
          </h1>
          <div className="text-[15px] md:text-base leading-relaxed text-brand-primary/75 space-y-3 text-left">
            <p>
              Most ADHD product lists are noise, ranked by Amazon affiliate payout instead of
              whether the thing actually helps. Every pick below earned its spot by solving a real
              ADHD problem: time blindness, sensory overload, executive dysfunction, decision
              fatigue, or hyperfocus crash. Cheapest picks start under $20.
            </p>
            <p>
              These are tools, not treatment. They won&apos;t fix anything. But on a hard day,
              the right tool makes the day a little less hard.
            </p>
          </div>
        </motion.header>

        {/* Disclosure */}
        <motion.div
          className="max-w-2xl mx-auto mb-6 rounded-xl border border-brand-border bg-white/60 px-5 py-2.5 text-xs text-brand-muted text-center"
          {...fadeUp}
        >
          <strong className="text-brand-primary/70">Heads up:</strong> some links are
          affiliates. We only share stuff we&apos;d buy ourselves.
        </motion.div>

        {/* Category jump chips */}
        <motion.nav
          className="-mx-5 px-5 mb-5 overflow-x-auto md:mx-0 md:px-0 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          {...fadeUp}
          aria-label="Jump to category"
        >
          <div className="flex md:flex-wrap md:justify-center gap-2 w-max md:w-auto">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-full bg-white border border-brand-border text-brand-primary/80 hover:border-brand-primary/30 hover:text-brand-primary hover:-translate-y-0.5 hover:shadow-sm transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {c.title}
                </a>
              );
            })}
          </div>
        </motion.nav>

        {/* Categories */}
        <div className="space-y-16 md:space-y-20">
          {categories.map((category, ci) => {
            const Icon = category.icon;
            return (
              <motion.section
                key={category.id}
                id={category.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.03 * ci }}
                className="scroll-mt-24"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span
                    aria-hidden
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${category.chipBg} ${category.chipText}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black tracking-[-0.01em] text-brand-primary">
                    {category.title}
                  </h2>
                </div>

                {/* Product cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {category.products.map((product) => (
                    <motion.a
                      key={product.name}
                      href={product.url}
                      target="_blank"
                      rel={product.isAffiliate ? 'nofollow sponsored noopener' : 'nofollow noopener'}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`group relative flex flex-col rounded-2xl border-2 ${category.cardBorder} bg-white p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] ${category.cardHover} transition-all duration-200`}
                    >
                      {/* Badge */}
                      {product.badge && (
                        <span className={`absolute -top-2.5 left-5 text-[10px] font-black uppercase tracking-[0.1em] ${category.chipBg} ${category.chipText} px-2.5 py-1 rounded-full border-2 border-white shadow-sm`}>
                          {product.badge}
                        </span>
                      )}

                      {/* Product image */}
                      {product.image && (
                        <div className="mb-4 -mx-1 flex items-center justify-center rounded-xl bg-brand-canvas/60 p-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            loading="lazy"
                            className="h-32 w-auto object-contain"
                          />
                        </div>
                      )}

                      {/* Price pill */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-[17px] font-black text-brand-primary leading-tight pr-2">
                          {product.name}
                        </h3>
                        <span className={`text-sm font-black ${category.priceBg} px-2.5 py-1 rounded-lg whitespace-nowrap`}>
                          {product.price}
                        </span>
                      </div>

                      {/* Hook */}
                      <p className="text-sm font-bold text-brand-primary/80 mb-4 leading-snug">
                        {product.hook}
                      </p>

                      {/* Quick hits */}
                      <ul className="space-y-1.5 mb-5 flex-1">
                        {product.quickHits.map((hit) => (
                          <li key={hit} className="flex items-start gap-2 text-xs text-brand-muted">
                            <Zap className={`w-3 h-3 mt-0.5 shrink-0 ${category.chipText}`} />
                            <span>{hit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA button */}
                      <span
                        className="inline-flex items-center justify-center gap-1.5 w-full text-sm font-extrabold text-brand-teal-deep bg-white border-2 border-brand-teal-dark/30 hover:border-brand-teal-deep hover:bg-brand-teal-dark/[.04] px-4 py-2.5 rounded-xl transition-colors group-hover:gap-2.5"
                      >
                        Check it out
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Related */}
        <motion.div
          className="mt-16 text-center"
          {...fadeUp}
        >
          <p className="text-sm text-brand-primary/65">
            Looking for software instead?{' '}
            <Link href="/blog/best-adhd-apps-for-adults" className="font-semibold text-brand-teal-deep hover:underline">
              See the best ADHD apps &amp; productivity tools
            </Link>
            .
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.section
          className="mt-20 md:mt-24 max-w-3xl mx-auto"
          {...fadeUp}
          aria-label="Frequently asked questions"
        >
          <h2 className="text-2xl md:text-3xl font-black text-brand-primary text-center mb-3">
            Frequently asked questions
          </h2>
          <p className="text-center text-brand-primary/65 mb-10 text-[15px]">
            Things people ask before buying.
          </p>
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-border bg-white p-5 md:p-6">
              <p className="font-bold text-brand-primary mb-2">What makes a product &ldquo;ADHD-friendly&rdquo;?</p>
              <p className="text-[15px] text-brand-primary/70 leading-relaxed">
                A product is ADHD-friendly when it lowers friction, requires little setup, gives
                clear feedback, and works the way your brain actually works on a hard day. Things
                like visual timers, tactile fidgets, and noise control reduce decision fatigue and
                sensory overload, the two biggest ADHD energy drains.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-5 md:p-6">
              <p className="font-bold text-brand-primary mb-2">How did you choose these products?</p>
              <p className="text-[15px] text-brand-primary/70 leading-relaxed">
                We curate based on three things: products consistently recommended in ADHD
                communities (Reddit, forums, real users), products with strong reviews from people
                who specifically mention ADHD or sensory needs, and items with design features that
                match how ADHD brains work (visual feedback, low setup friction, tactile or audio
                cues). We don&apos;t claim to have personally tested every item. We&apos;ve tested
                some, researched others, and remove any that get bad community feedback over time.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-5 md:p-6">
              <p className="font-bold text-brand-primary mb-2">Do you earn money if I buy through your links?</p>
              <p className="text-[15px] text-brand-primary/70 leading-relaxed">
                Yes. Most product links on this page are Amazon affiliate links, which means
                we earn a small commission at no extra cost to you if you buy something. This helps
                keep 925 ADHD running. We only recommend things we genuinely believe help.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-5 md:p-6">
              <p className="font-bold text-brand-primary mb-2">Are these only useful if I have diagnosed ADHD?</p>
              <p className="text-[15px] text-brand-primary/70 leading-relaxed">
                No. Most of these tools help anyone who struggles with focus, time blindness,
                sensory overload, executive function, or organization. You do not need a diagnosis
                to benefit from a visual timer, noise-canceling headphones, or a planner that fits
                how you actually live.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-5 md:p-6">
              <p className="font-bold text-brand-primary mb-2">How often is this list updated?</p>
              <p className="text-[15px] text-brand-primary/70 leading-relaxed">
                We review the list every few months. Products that go out of stock, get worse, or
                get replaced by better options are removed. New picks are added when we find
                something that earns its spot, not on a fixed schedule.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          className="mt-20 md:mt-28 rounded-3xl border-2 border-brand-border bg-gradient-to-br from-brand-primary to-[#1e293b] p-8 md:p-10 text-center relative overflow-hidden"
          {...fadeUp}
        >
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl" />
          <div className="relative">
            <p className="inline-block text-[11px] font-extrabold uppercase tracking-[0.15em] text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1.5 rounded-full mb-5">
              One more thing
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 max-w-xl mx-auto">
              Want 70+ ADHD-friendly ways to actually <span className="text-brand-green">pay for</span> this stuff?
            </h2>
            <p className="text-white/60 mb-7 max-w-lg mx-auto">
              Tagged by energy, effort, and payout speed. Built for brains like yours.
            </p>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-green text-brand-primary font-black text-[15px] shadow-[0_4px_20px_rgba(34,197,94,0.35)] hover:bg-[#4ade80] hover:-translate-y-0.5 transition-all"
            >
              Get Instant Access · $9.25
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="flex items-center justify-center gap-1.5 text-xs font-bold text-brand-green/80 mt-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              30-Day Money-Back Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
