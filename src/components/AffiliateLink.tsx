'use client';

import { getAffiliateLink } from '@/lib/affiliate-links';
import { ExternalLink } from 'lucide-react';

interface AffiliateLinkProps {
  /** Key matching an entry in affiliate-links.ts */
  productKey: string;
  /** Override display text (defaults to product name) */
  children?: React.ReactNode;
  /** Show the external-link icon */
  showIcon?: boolean;
  /** Additional classes */
  className?: string;
}

/**
 * Renders an affiliate link with proper SEO attributes.
 * - rel="nofollow sponsored noopener" when it's an affiliate link
 * - rel="nofollow noopener" for non-affiliate external links
 * - Always opens in new tab
 * - Styled to match the blog's accent color
 */
export default function AffiliateLink({
  productKey,
  children,
  showIcon = false,
  className = '',
}: AffiliateLinkProps) {
  const product = getAffiliateLink(productKey);

  if (!product) {
    return <span>{children ?? productKey}</span>;
  }

  const rel = product.isAffiliate
    ? 'nofollow sponsored noopener'
    : 'nofollow noopener';

  return (
    <a
      href={product.url}
      target="_blank"
      rel={rel}
      aria-label={product.label ?? product.name}
      className={`text-brand-accent font-bold underline underline-offset-2 decoration-brand-accent/30 hover:decoration-brand-accent transition-colors ${className}`}
    >
      {children ?? product.name}
      {showIcon && <ExternalLink className="inline w-3.5 h-3.5 ml-1 -mt-0.5" />}
    </a>
  );
}
