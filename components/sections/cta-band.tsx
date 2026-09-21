'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

export function CtaBand() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-pure-black px-6 py-32 md:py-40">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-[120px]" />
      </div>
      <div className="cta-content relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
          Begin your journey
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight text-ivory md:text-6xl lg:text-7xl">
          Book a trial lesson
          <br />
          <span className="italic text-accent-blue-light">today.</span>
        </h2>
        <p className="mt-8 max-w-xl text-base text-soft-gray md:text-lg">
          Experience a 30-minute session with one of our teachers. No commitment,
          no pressure — just music.
        </p>
        <Link
          href={site.hero.secondaryCta.href}
          className="group mt-12 inline-flex items-center justify-center bg-accent-blue px-10 py-5 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-blue-dark"
        >
          {site.hero.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
