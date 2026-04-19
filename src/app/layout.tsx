import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: '925 ADHD - 70+ Ways to Make Money Online for ADHD Minds | $9.25 One-Time',
    template: '%s | 925 ADHD',
  },
  description:
    'Find ADHD-friendly ways to make money online. 70+ vetted, scam-free flexible work options with step-by-step guidance. One-time payment, lifetime access.',
  metadataBase: new URL('https://925adhd.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://925adhd.com/',
    siteName: '925 ADHD',
    title: '925 ADHD - 70+ Ways to Earn Online for ADHD Minds',
    description:
      'Find ADHD-friendly ways to make money online without the overwhelm. 70+ curated options, regularly updated, with step-by-step guidance. No resumes required.',
    images: [{ url: '/925-adhd-logo.png', alt: '925 ADHD Logo', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '925 ADHD - 70+ Ways to Earn Online for ADHD Minds',
    description:
      'Find ADHD-friendly ways to make money online without the overwhelm. 70+ curated options, regularly updated. No resumes required.',
    images: ['/925-adhd-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  icons: {
    icon: '/925-adhd-logo.png',
    apple: '/925-adhd-logo.png',
  },
  authors: [{ name: 'Kara Gibson' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="CV27wylgQGSL0LfDXIkLxQ"
          strategy="afterInteractive"
        />
        <Script id="deferred-analytics" strategy="afterInteractive">
          {`
            (function(){
              var loaded = false;
              function load(){
                if (loaded) return;
                loaded = true;
                var s1 = document.createElement('script');
                s1.async = true;
                s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XJVMZ3B6S8';
                document.head.appendChild(s1);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-XJVMZ3B6S8');
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                window.fbq('init', '830474870030077');
                window.fbq('track', 'PageView');
              }
              var events = ['scroll','mousedown','touchstart','keydown','mousemove'];
              events.forEach(function(ev){
                window.addEventListener(ev, load, { once: true, passive: true, capture: true });
              });
              setTimeout(load, 5000);
            })();
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=830474870030077&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
