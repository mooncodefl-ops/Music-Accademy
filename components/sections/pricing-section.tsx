'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricingEntries } from '@/lib/pricing';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.pricing-header > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils.toArray<HTMLElement>('.pricing-row').forEach((row) => {
        gsap.from(row, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="pricing-header mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
            03 — Pricing
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-ivory md:text-5xl lg:text-6xl">
            Choose how you want to learn.
          </h2>
          <p className="mt-6 max-w-xl text-base text-soft-gray md:text-lg">
            Example pricing for individual lessons, packages, and group courses.
            All rates are illustrative — your teacher will confirm details at your trial lesson.
          </p>
        </div>

        {/* Editorial pricing rows — not SaaS cards */}
        <div className="border-t border-graphite-light/20">
          {pricingEntries.map((entry, i) => (
            <div
              key={entry.id}
              className="pricing-row group grid grid-cols-1 gap-6 border-b border-graphite-light/20 py-10 transition-colors hover:bg-graphite/30 md:grid-cols-12 md:items-center md:gap-8 md:py-12"
            >
              {/* Number + name */}
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-soft-gray/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ivory md:text-3xl">
                    {entry.name}
                  </h3>
                  {entry.badge && (
                    <span className="ml-2 border border-accent-blue/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-accent-blue-light">
                      {entry.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-medium text-ivory md:text-4xl">
                    {entry.price}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                  {entry.period}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-soft-gray md:text-base">
                  {entry.description}
                </p>
              </div>

              {/* Features + CTA */}
              <div className="md:col-span-3">
                <ul className="space-y-1.5">
                  {entry.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-mono text-[11px] text-soft-gray/70">
                      <span className="h-1 w-1 rounded-full bg-accent-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/prenota"
                  className="group/cta mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-soft-gray transition-colors hover:text-accent-blue-light"
                >
                  Book a trial
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-soft-gray/40">
          All prices are examples and may vary by teacher, instrument, and level.
        </p>
      </div>
    </section>
  );
}
