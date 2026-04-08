export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedDate: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-wfh-advice-fails-adhd',
    title: "Why Most Work-From-Home Advice Doesn't Work for ADHD",
    description:
      "Most work-from-home advice assumes a consistent brain. If you have ADHD, that advice often backfires. Here's what actually works instead.",
    category: 'Work strategies',
    tags: ['remote work', 'ADHD', 'productivity', 'work-from-home'],
    publishedDate: '2026-01-01',
    image: '/blog/wfh-advice.webp',
  },
  {
    slug: 'what-is-the-10-3-rule-for-adhd',
    title: 'What Is the 10-3 Rule for ADHD? A Simple Focus Strategy That Actually Works',
    description:
      "The 10-3 rule for ADHD is a simple way to start tasks without overwhelm: 10 minutes of focus, 3-minute breaks, repeat if you want. Here's how to use it.",
    category: 'Focus strategies',
    tags: ['ADHD', 'focus', 'productivity', 'time management'],
    publishedDate: '2026-01-08',
    image: '/blog/what-is-the-10-3-rule-adhd.webp',
  },
  {
    slug: 'best-adhd-apps-for-adults',
    title: 'Best ADHD Apps & Productivity Tools 2026: 15 Tested for Focus & Organization',
    description:
      'The best ADHD apps for adults, compared. We reviewed 15 apps for focus, organization, habits, content creation, and executive function — with pricing, pros, and honest picks.',
    category: 'Tools & apps',
    tags: ['ADHD', 'apps', 'tools', 'organization', 'productivity', 'free ADHD apps', 'ADHD productivity tools', 'best ADHD app'],
    publishedDate: '2026-01-15',
    image: '/blog/best-adhd-apps-for-adults.webp',
  },
  {
    slug: 'work-from-home-with-adhd',
    title: 'How to Work From Home With ADHD (Without Burning Out)',
    description:
      'To work from home with ADHD without burning out, build around energy, reduce decisions, and choose work that is flexible by design.',
    category: 'Work strategies',
    tags: ['remote work', 'ADHD', 'burnout', 'work-from-home', 'energy management'],
    publishedDate: '2026-01-20',
    image: '/blog/work-from-home-with-adhd.webp',
  },
  {
    slug: 'what-is-ring-of-fire-adhd',
    title: 'What Is Ring of Fire ADHD? Symptoms, Traits, and What Helps',
    description:
      'Ring of Fire ADHD is a descriptive term for an ADHD pattern that feels like overstimulation, emotional intensity, and racing thoughts. Here is what helps.',
    category: 'ADHD explained',
    tags: ['ADHD', 'sensory overload', 'emotional dysregulation', 'overstimulation'],
    publishedDate: '2026-01-25',
    image: '/blog/what-is-ring-of-fire-adhd.webp',
  },
  {
    slug: 'cant-work-9-to-5-with-adhd',
    title: "Can't Work a 9 to 5 With ADHD? You're Not Broken (Here's Why)",
    description:
      "If you've searched \"can't work a 9 to 5 with ADHD,\" you're not lazy. Many ADHD brains struggle with rigid schedules. You don't need more discipline — you need a better fit.",
    category: 'ADHD & Work',
    tags: ['ADHD', 'work', 'burnout', 'executive dysfunction', '9 to 5'],
    publishedDate: '2026-02-01',
    image: '/blog/cant-work-9-to-5-with-adhd.webp',
  },
  {
    slug: 'freelance-jobs-for-adhd',
    title: 'Freelance Jobs for ADHD: 6 Paths That Actually Fit How Your Brain Works',
    description:
      'Most freelance advice ignores ADHD. Here are 6 freelance paths that fit fluctuating energy, plus the ones to skip — with honest tradeoffs and how to start this week.',
    category: 'ADHD & Work',
    tags: ['ADHD', 'freelance', 'remote work', 'side hustle', 'self-employment'],
    publishedDate: '2026-04-07',
    image: '/blog/freelance-jobs-for-adhd.webp',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count);
}

export function getAllCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category));
  return Array.from(cats);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
