'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms-of-service', label: 'Terms' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

function FacebookIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://www.facebook.com/925adhd', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://www.instagram.com/925.adhd', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.youtube.com/@ADHDBible', label: 'YouTube', Icon: YoutubeIcon },
  { href: 'https://www.tiktok.com/@925adhd', label: 'TikTok', Icon: TikTokIcon },
  { href: 'https://www.linkedin.com/in/kara-gibson-3818a3348', label: 'LinkedIn', Icon: LinkedInIcon },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

  return (
    <footer className={`relative border-t border-brand-border pt-10 ${isHome ? 'pb-20 md:pb-10' : 'pb-10'} text-brand-primary/40 overflow-x-clip`}>
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-8">
          <div className="font-bold text-brand-primary/70 text-sm mb-1 whitespace-nowrap">
            Built by an ADHD brain, for ADHD brains.
          </div>
          <p className="text-xs text-brand-primary/30 mt-1">&copy; {yearDisplay} 925 ADHD LLC</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-brand-primary/30 hover:text-brand-primary/60 transition-colors"
              >
                <social.Icon />
              </a>
            ))}
          </div>

          <nav className="flex items-center gap-4 flex-wrap justify-center text-[13px] font-medium" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-primary/35 hover:text-brand-primary/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-brand-primary/25">
              Website by <a href="https://studio925.design" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary/50 transition-colors">Studio 925</a>
            </span>
          </nav>
        </div>
      </div>
      <div className={`absolute right-0 md:bottom-4 ${isHome ? 'bottom-16' : 'bottom-4'}`}>
        <a
          href="https://lizardlizard.ai"
          target="_blank"
          rel="noopener"
          className="group relative block text-[26px] md:text-[36px] leading-none animate-[peek_3s_ease-in-out_infinite] hover:!translate-x-0 hover:!translate-y-0 transition-transform duration-500 ease-out"
          aria-label="Easter egg"
        >
          <span className="absolute -top-8 -left-4 text-[10px] font-bold text-brand-primary/0 group-hover:text-brand-primary/50 transition-all duration-300 whitespace-nowrap pointer-events-none">
            psst!
          </span>
          {'🦎'}
        </a>
      </div>
    </footer>
  );
}
