import Link from 'next/link';
import { Home, HelpCircle, BookOpen, Mail } from 'lucide-react';

const helpLinks = [
  { href: '/', label: 'Home', icon: Home, desc: 'Back to the main page' },
  { href: '/faq', label: 'FAQ', icon: HelpCircle, desc: 'Find answers to common questions' },
  { href: '/blog', label: 'Blog', icon: BookOpen, desc: 'Read our latest articles' },
  { href: '/contact', label: 'Contact', icon: Mail, desc: 'Get in touch with us' },
];

export default function NotFound() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 py-24 text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-7xl font-bold text-brand-accent mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-[family-name:var(--font-playfair)] mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-brand-primary/80 leading-relaxed mb-10">
          Looks like this page wandered off &mdash; kind of like our attention sometimes. Let&apos;s
          get you back on track!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {helpLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-2 p-5 rounded-xl bg-brand-panel border border-brand-border hover:border-brand-accent/30 hover:shadow-md transition-all"
            >
              <link.icon className="text-brand-accent" size={24} />
              <span className="font-semibold text-brand-primary">{link.label}</span>
              <span className="text-sm text-brand-muted">{link.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
