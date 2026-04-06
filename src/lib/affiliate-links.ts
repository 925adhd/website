/**
 * Centralized affiliate link registry.
 * Update URLs here when you join affiliate programs — every blog post
 * that references these products will automatically use the correct link.
 *
 * Set `url` to the affiliate/referral URL once you have one.
 * Leave `url` as the plain product URL until then (still useful for readers).
 */

export interface AffiliateProduct {
  name: string;
  url: string;
  /** true once you have an actual affiliate/referral link */
  isAffiliate: boolean;
  /** optional short description for tooltips / aria labels */
  label?: string;
}

const affiliateLinks: Record<string, AffiliateProduct> = {
  // ── Focus & Productivity ──────────────────────────────────
  inflow: {
    name: 'Inflow',
    url: 'https://www.getinflow.io/',
    isAffiliate: false,
    label: 'ADHD management app',
  },
  todoist: {
    name: 'Todoist',
    url: 'https://todoist.com/',
    isAffiliate: false,
    label: 'Task management app',
  },
  focusmate: {
    name: 'Focusmate',
    url: 'https://www.focusmate.com/',
    isAffiliate: false,
    label: 'Virtual body doubling',
  },
  forest: {
    name: 'Forest',
    url: 'https://www.forestapp.cc/',
    isAffiliate: false,
    label: 'Focus timer app',
  },
  habitica: {
    name: 'Habitica',
    url: 'https://habitica.com/',
    isAffiliate: false,
    label: 'Gamified habit tracker',
  },
  obsidian: {
    name: 'Obsidian',
    url: 'https://obsidian.md/',
    isAffiliate: false,
    label: 'Note-taking app',
  },

  // ── Regulation & Wellness ─────────────────────────────────
  calm: {
    name: 'Calm',
    url: 'https://www.calm.com/',
    isAffiliate: false,
    label: 'Meditation and sleep app',
  },
  headspace: {
    name: 'Headspace',
    url: 'https://www.headspace.com/',
    isAffiliate: false,
    label: 'Mindfulness app',
  },

  // ── New additions for expanded post ───────────────────────
  notion: {
    name: 'Notion',
    url: 'https://www.notion.so/',
    isAffiliate: false,
    label: 'All-in-one workspace',
  },
  sunsama: {
    name: 'Sunsama',
    url: 'https://www.sunsama.com/',
    isAffiliate: false,
    label: 'Daily planner for professionals',
  },
  brain_fm: {
    name: 'Brain.fm',
    url: 'https://www.brain.fm/925adhd',
    isAffiliate: true,
    label: 'Focus music powered by AI',
  },
  routinery: {
    name: 'Routinery',
    url: 'https://www.routinery.app/',
    isAffiliate: false,
    label: 'Visual routine builder',
  },
  goblin_tools: {
    name: 'Goblin Tools',
    url: 'https://goblin.tools/',
    isAffiliate: false,
    label: 'AI task breakdown tool',
  },
  finch: {
    name: 'Finch',
    url: 'https://finchcare.com/',
    isAffiliate: false,
    label: 'Self-care pet app',
  },
  syllaby: {
    name: 'Syllaby',
    url: 'https://syllaby.io/?via=925adhd',
    isAffiliate: true,
    label: 'AI video and content creation tool',
  },
};

export function getAffiliateLink(key: string): AffiliateProduct | undefined {
  return affiliateLinks[key];
}

export function getAllAffiliateLinks(): Record<string, AffiliateProduct> {
  return affiliateLinks;
}

export default affiliateLinks;
