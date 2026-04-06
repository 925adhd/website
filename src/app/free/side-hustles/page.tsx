import type { Metadata } from 'next';
import SideHustlesPage from './side-hustles-page';

export const metadata: Metadata = {
  title: '5 ADHD-Friendly Side Hustles You Can Start Today | 925 ADHD',
  description:
    'Free guide: 5 vetted side hustles designed for ADHD brains. Real pay, flexible hours, low friction.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SideHustlesPage />;
}
