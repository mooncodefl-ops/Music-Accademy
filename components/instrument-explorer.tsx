'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { instruments, instrumentCategories, type Instrument, type InstrumentCategory } from '@/lib/instruments';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function InstrumentExplorer() {
  const [activeCategory, setActiveCategory] = useState<InstrumentCategory | 'All'>('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const filtered = activeCategory === 'All'
    ? instruments
    : instruments.filter((i) => i.category === activeCategory);

  const active: Instrument = filtered[activeIndex] || filtered[0] || instruments[0];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(0);
  }, [filtered.length, activeIndex]);

  const animateTransition = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    animateTransition();
  }, [activeIndex, activeCategory, animateTransition]);

  const next = () => setActiveIndex((p) => (p + 1) % filtered.length);
  const prev = () => setActiveIndex((p) => (p - 1 + filtered.length) % filtered.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
  };

  const selectCategory = (cat: InstrumentCategory | 'All') => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-pure-black pt-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
            01 — Strumenti
          </p>
          <h1 className="font-display text-5xl font-medium text-ivory md:text-7xl lg:text-8xl">
            Instrument Explorer
          </h1>
          <p className="mt-6 max-w-2xl text-base text-soft-gray md:text-lg">
            Browse our instruments, discover what fits, and book a trial lesson.
            {isMobile ? ' Swipe to explore.' : ' Select to explore.'}
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => selectCategory('All')}
            className={`border px-5 py-3 font-mono text-[10px] uppercase tracking-widest transition-colors ${
              activeCategory === 'All'
                ? 'border-accent-blue bg-accent-blue text-white'
                : 'border-graphite-light/30 text-soft-gray hover:border-accent-blue hover:text-ivory'
            }`}
          >
            All
          </button>
          {instrumentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`border px-5 py-3 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                activeCategory === cat.id
                  ? 'border-accent-blue bg-accent-blue text-white'
                  : 'border-graphite-light/30 text-soft-gray hover:border-accent-blue hover:text-ivory'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop explorer — large visual */}
        {!isMobile && (
          <div className="grid grid-cols-12 gap-8">
            {/* Left: instrument list */}
            <div className="col-span-3 max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-1">
                {filtered.map((inst, i) => (
                  <button
                    key={inst.id}
                    onClick={() => setActiveIndex(i)}
                    className={`group flex w-full items-center justify-between border-l-2 py-3 pl-4 pr-3 text-left transition-colors ${
                      i === activeIndex
                        ? 'border-accent-blue bg-graphite/50'
                        : 'border-transparent hover:border-graphite-light/50'
                    }`}
                  >
                    <span className={`font-display text-lg transition-colors ${
                      i === activeIndex ? 'text-ivory' : 'text-soft-gray/60 group-hover:text-soft-gray'
                    }`}>
                      {inst.name}
                    </span>
                    <span className="font-mono text-[10px] text-soft-gray/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center: large visual */}
            <div className="col-span-5">
              <div
                ref={imageRef}
                className="relative aspect-[4/5] w-full overflow-hidden bg-graphite"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${active.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-blue-light">
                    {active.category}
                  </p>
                  <h2 className="mt-2 font-display text-5xl font-medium text-ivory lg:text-6xl">
                    {active.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Right: details */}
            <div className="col-span-4 flex flex-col justify-center" ref={detailsRef}>
              <p className="text-base leading-relaxed text-soft-gray md:text-lg">
                {active.description}
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Levels
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.levels.map((l) => (
                      <span key={l} className="font-mono text-xs text-ivory">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Lesson Format
                  </p>
                  <p className="font-mono text-xs text-ivory">
                    {active.formats.join(' & ')}
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Age Groups
                  </p>
                  <p className="font-mono text-xs text-ivory">
                    {active.ageGroups.join(', ')}
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Typical Duration
                  </p>
                  <p className="font-mono text-xs text-ivory">{active.duration}</p>
                </div>
              </div>

              <Link
                href={`/prenota?instrument=${active.id}`}
                className="group mt-10 inline-flex items-center gap-2 bg-accent-blue px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-blue-dark"
              >
                Book a Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}

        {/* Mobile explorer — swipe interaction */}
        {isMobile && (
          <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {/* Large visual */}
            <div
              ref={imageRef}
              className="relative aspect-[4/5] w-full overflow-hidden bg-graphite"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${active.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/85 via-pure-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-blue-light">
                  {active.category}
                </p>
                <h2 className="mt-2 font-display text-4xl font-medium text-ivory">
                  {active.name}
                </h2>
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-pure-black/60 p-3 text-ivory backdrop-blur-sm transition-colors hover:bg-pure-black/80"
                aria-label="Previous instrument"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-pure-black/60 p-3 text-ivory backdrop-blur-sm transition-colors hover:bg-pure-black/80"
                aria-label="Next instrument"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 right-4 flex gap-2">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 transition-all ${
                      i === activeIndex ? 'w-8 bg-accent-blue' : 'w-2 bg-soft-gray/40'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div ref={detailsRef} className="mt-8">
              <p className="text-base leading-relaxed text-soft-gray">
                {active.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Levels
                  </p>
                  <p className="font-mono text-xs text-ivory">
                    {active.levels.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Format
                  </p>
                  <p className="font-mono text-xs text-ivory">
                    {active.formats.join(' & ')}
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Ages
                  </p>
                  <p className="font-mono text-xs text-ivory">
                    {active.ageGroups.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Duration
                  </p>
                  <p className="font-mono text-xs text-ivory">{active.duration}</p>
                </div>
              </div>

              <Link
                href={`/prenota?instrument=${active.id}`}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent-blue px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-blue-dark"
              >
                Book a Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
