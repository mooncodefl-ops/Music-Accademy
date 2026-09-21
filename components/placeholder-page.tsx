'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type PlaceholderPageProps = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
};

export function PlaceholderPage({ number, title, subtitle, description }: PlaceholderPageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.page-hero > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen bg-charcoal pt-32">
      <section className="page-hero relative px-6 py-20 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
              {number}
            </span>
            <div className="h-px flex-1 bg-graphite-light/30" />
          </div>

          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-soft-gray/60">
            {subtitle}
          </p>
          <h1 className="font-display text-5xl font-medium leading-[0.9] text-ivory md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-soft-gray md:text-xl">
            {description}
          </p>

          <div className="mt-16 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                Coming soon
              </p>
              <div className="h-1 w-32 overflow-hidden bg-graphite-light/30">
                <div className="h-full w-1/3 bg-accent-blue" />
              </div>
            </div>

            <Link
              href="/"
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-soft-gray transition-colors hover:text-accent-blue-light"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <div className="px-6 pb-32">
        <div className="mx-auto max-w-5xl border-t border-graphite-light/20 pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {['In development', 'Stay tuned', 'Find your sound'].map((text, i) => (
              <div key={i} className="border-l border-graphite-light/20 pl-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-blue-light">
                  0{i + 1}
                </p>
                <p className="mt-3 text-sm text-soft-gray">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
