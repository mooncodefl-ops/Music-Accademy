'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const showOnPaths = ['/', '/corsi'];

export function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!showOnPaths.includes(pathname)) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  if (!showOnPaths.includes(pathname)) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Link
        href="/prenota"
        className="flex items-center justify-center gap-2 bg-accent-blue px-6 py-4 text-sm font-medium uppercase tracking-widest text-white shadow-2xl"
      >
        Book a Trial
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
