import Link from 'next/link';
import { site } from '@/lib/site';
import { Instagram, Music2 } from 'lucide-react';

const footerLinks = [
  { label: 'Academy', href: '/' },
  { label: 'Courses', href: '/corsi' },
  { label: 'Booking', href: '/prenota' },
  { label: 'Teachers', href: '/insegnanti' },
  { label: 'Contact', href: '/contatti' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
];

const policyLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export function Footer() {
  return (
    <footer className="border-t border-graphite-light/30 bg-pure-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-[0.2em] text-ivory">
              {site.logo.text}
            </span>
            <span className="font-mono text-[8px] tracking-[0.4em] text-soft-gray/70">
              {site.logo.subtext}
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div>
              <ul className="space-y-3">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-soft-gray transition-colors hover:text-accent-blue-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-soft-gray transition-colors hover:text-accent-blue-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {policyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-soft-gray transition-colors hover:text-accent-blue-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-graphite-light/20 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
            Find your sound.
          </p>
        </div>
      </div>
    </footer>
  );
}
