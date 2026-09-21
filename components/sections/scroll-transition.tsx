'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        maskRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out' }
      )
        .fromTo(
          imageRef.current,
          { scale: 1.4 },
          { scale: 1, duration: 1.5, ease: 'power2.out' },
          0
        )
        .fromTo(
          textRef.current?.querySelectorAll('.reveal-line') || [],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          0.3
        );

      gsap.to(parallaxRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-pure-black">
      <div
        ref={maskRef}
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      >
        <div ref={imageRef} className="absolute inset-0">
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${site.images.about})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black/50 via-transparent to-pure-black/70" />
      </div>

      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <p className="reveal-line mb-6 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
          The Academy
        </p>
        <h2 className="reveal-line font-display text-4xl font-medium leading-tight text-ivory md:text-6xl lg:text-7xl">
          Where musicians
          <br />
          <span className="italic text-accent-blue-light">are made.</span>
        </h2>
        <p className="reveal-line mt-8 max-w-2xl text-base text-soft-gray md:text-lg">
          A space designed for focus, creativity, and craft. From first notes to
          stage-ready performances — we guide every step of the journey.
        </p>
      </div>
    </section>
  );
}
