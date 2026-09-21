import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { StickyMobileCta } from '@/components/sticky-mobile-cta';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arcusacademy.com'),
  title: `${site.fullName} — ${site.tagline}`,
  description: site.hero.supporting,
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: site.hero.supporting,
    images: [{ url: site.images.heroPoster }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: site.images.heroPoster }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-charcoal text-ivory antialiased">
        <SmoothScrollProvider>
          {children}
          <StickyMobileCta />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
