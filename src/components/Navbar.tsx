'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-warm/80 backdrop-blur-xl border-b border-brand-border">
      <div className="max-w-[1120px] mx-auto px-3 sm:px-5">
        <div className="flex items-center justify-between gap-2 h-[60px]">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-wide no-underline text-brand-primary shrink-0"
            aria-label="925 ADHD Home"
          >
            <img
              src="/925-adhd-logo-64.webp"
              alt="925 ADHD Logo"
              width={32}
              height={32}
              loading="eager"
              decoding="async"
              className="w-7 h-7 md:w-8 md:h-8 rounded-lg object-cover"
            />
            <span className="text-[14px] sm:text-[15px] font-bold whitespace-nowrap">925 ADHD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-primary/75 font-medium text-[14px] px-3 py-2 rounded-lg hover:text-brand-primary hover:bg-black/[.03] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
            <Link
              href="/free"
              className="inline-flex items-center px-2 sm:px-3.5 py-2 rounded-lg text-[12px] sm:text-[13px] font-semibold text-brand-teal-deep hover:text-brand-primary hover:bg-black/[.03] transition-all whitespace-nowrap"
            >
              Free Resources
            </Link>
            <a
              href="https://app.925adhd.com/"
              className="inline-flex items-center px-2 sm:px-3.5 py-2 rounded-lg text-[12px] sm:text-[13px] font-semibold text-brand-primary/75 hover:text-brand-primary hover:bg-black/[.03] transition-all whitespace-nowrap"
              aria-label="Login"
            >
              Log in
            </a>
            <a
              href="https://buy.stripe.com/28E3cw1B33logABev67Zu02"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold bg-brand-teal-deep text-white hover:bg-[#0d6660] transition-colors"
            >
              Get Access
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-brand-primary/60 hover:bg-black/[.04] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav
            className="fixed top-[60px] left-0 right-0 z-50 md:hidden flex flex-col gap-1 px-5 pb-5 pt-3 bg-brand-warm/95 backdrop-blur-xl border-b border-brand-border shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-primary/75 font-medium text-[15px] px-3 py-2.5 rounded-lg hover:bg-black/[.03] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.925adhd.com/"
              className="text-brand-teal-deep font-medium text-[15px] px-3 py-2.5"
            >
              Log in
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
