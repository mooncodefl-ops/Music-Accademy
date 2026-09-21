'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { num: '01', title: 'Discover', text: 'Explore instruments, meet teachers, and find what moves you.' },
  { num: '02', title: 'Trial', text: 'A 30-minute session with a teacher — no commitment, just music.' },
  { num: '03', title: 'Enroll', text: 'Choose your course, set your schedule, and begin the journey.' },
  { num: '04', title: 'Learn', text: 'Structured lessons tailored to your level, your pace, your goals.' },
  { num: '05', title: 'Practice', text: 'Rehearsal rooms, guided routines, and the discipline of craft.' },
  { num: '06', title: 'Perform', text: 'Recitals, concerts, and the stage — where everything comes together.' },
];

export function StudentJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const stages_el = trackRef.current?.querySelectorAll('.journey-stage');
      if (!stages_el || stages_el.length === 0) return;

      const totalWidth = trackRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(totalWidth - viewportWidth + 48),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth - viewportWidth + 48}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      stages_el.forEach((stage) => {
        gsap.from(stage.querySelectorAll('.stage-line'), {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stage,
            containerAnimation: gsap.getById('journeyTrack') || undefined,
            start: 'left center',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-pure-black"
    >
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-8 md:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
          The Journey
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
          Scroll to explore
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-center gap-0 px-6 md:px-12"
        style={{ willChange: 'transform' }}
      >
        {stages.map((stage, i) => (
          <div
            key={stage.num}
            className="journey-stage relative flex h-full w-[80vw] shrink-0 items-center md:w-[50vw] lg:w-[40vw]"
          >
            {/* Connector line */}
            {i < stages.length - 1 && (
              <div className="stage-line absolute right-0 top-1/2 h-px w-12 bg-graphite-light/30 md:w-20" />
            )}

            <div className="pr-12 md:pr-20">
              <span className="font-mono text-sm text-soft-gray/40">{stage.num}</span>
              <h3 className="mt-4 font-display text-5xl font-medium leading-none text-ivory md:text-7xl lg:text-8xl">
                {stage.title}
              </h3>
              <p className="mt-6 max-w-sm text-base text-soft-gray md:text-lg">
                {stage.text}
              </p>
              <div className="stage-line mt-8 h-px w-16 bg-accent-blue" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-graphite-light/20">
        <div className="journey-progress h-full w-0 bg-accent-blue" />
      </div>
    </section>
  );
}
