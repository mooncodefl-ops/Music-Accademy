'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    label: '01',
    title: 'Individual Lessons',
    text: 'One-on-one sessions tailored to your pace, your goals, and your sound. Our teachers adapt to how you learn — not the other way around.',
  },
  {
    label: '02',
    title: 'Group Classes',
    text: 'Small ensembles and group workshops where you learn alongside peers. Listening, blending, and responding to other musicians in real time.',
  },
  {
    label: '03',
    title: 'Practice',
    text: 'Dedicated rehearsal rooms, guided practice routines, and the discipline that turns curiosity into craft. Progress happens between lessons — we help you make it count.',
  },
  {
    label: '04',
    title: 'Performance',
    text: 'Recitals, showcases, and concerts throughout the year. The stage is part of the curriculum — because music is meant to be shared.',
  },
  {
    label: '05',
    title: 'Community',
    text: 'A network of fellow students, teachers, and visiting artists. Collaborations form naturally. The people you meet here become your bandmates, your audience, your mentors.',
  },
];

export function AcademyIntro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.intro-statement > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.intro-statement',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      blocks.forEach((_, i) => {
        gsap.from(`.intro-block-${i}`, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.intro-block-${i}`,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-charcoal px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Editorial statement — asymmetric */}
        <div className="intro-statement grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
              The Academy
            </p>
          </div>
          <div className="md:col-span-10">
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-ivory md:text-6xl lg:text-7xl">
              Music isn't something
              <br />
              you simply <span className="italic text-soft-gray">learn.</span>
              <br />
              It's something you <span className="text-accent-blue-light">build.</span>
            </h2>
          </div>
        </div>

        {/* Editorial blocks — not cards, asymmetric layout */}
        <div className="mt-24 md:mt-32">
          {blocks.map((block, i) => (
            <div
              key={block.label}
              className={`intro-block-${i} grid grid-cols-1 gap-6 border-t border-graphite-light/20 py-12 md:grid-cols-12 md:gap-12 md:py-16`}
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xs text-soft-gray/50">{block.label}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-medium text-ivory md:text-3xl">
                  {block.title}
                </h3>
              </div>
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-base leading-relaxed text-soft-gray md:text-lg">
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
