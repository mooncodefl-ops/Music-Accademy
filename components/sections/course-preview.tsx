'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CoursePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.course-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.course-header', {
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
    <section ref={sectionRef} className="bg-graphite px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="course-header mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
              02 — Corsi
            </p>
            <h2 className="font-display text-4xl font-medium text-ivory md:text-5xl lg:text-6xl">
              Courses for every level.
            </h2>
          </div>
          <Link
            href="/corsi"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-soft-gray transition-colors hover:text-accent-blue-light"
          >
            Explore courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {site.images.courses.map((course, i) => (
            <Link
              key={course.label}
              href="/corsi"
              className="course-card group relative aspect-square overflow-hidden bg-charcoal"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/90 via-pure-black/30 to-transparent" />
              <div className="absolute top-4 right-4 font-mono text-[10px] text-soft-gray/70">
                0{i + 1}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-medium text-ivory md:text-xl">
                  {course.label}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-soft-gray/70">
                  All levels
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
