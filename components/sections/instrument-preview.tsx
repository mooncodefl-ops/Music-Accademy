'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function InstrumentPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.instrument-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.section-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-pure-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="section-header mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
              01 — Strumenti
            </p>
            <h2 className="font-display text-4xl font-medium text-ivory md:text-5xl lg:text-6xl">
              Find your instrument.
            </h2>
          </div>
          <Link
            href="/strumenti"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-soft-gray transition-colors hover:text-accent-blue-light"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {site.images.instruments.map((inst) => (
            <Link
              key={inst.label}
              href="/strumenti"
              className="instrument-card group relative aspect-[3/4] overflow-hidden bg-graphite"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${inst.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/90 via-pure-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-medium text-ivory md:text-2xl">
                  {inst.label}
                </h3>
                <div className="mt-2 h-px w-0 bg-accent-blue transition-all duration-500 group-hover:w-12" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
