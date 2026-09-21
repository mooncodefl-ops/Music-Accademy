'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/site';

export function Preloader() {
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSkipped(true);
      setDone(true);
      return;
    }

    const timer = setTimeout(() => setDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  if (skipped) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pure-black"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center"
            >
              <h1 className="font-display text-3xl font-bold tracking-[0.3em] text-ivory md:text-5xl">
                {site.logo.text}
              </h1>
              <p className="mt-2 font-mono text-[10px] tracking-[0.5em] text-soft-gray md:text-xs">
                {site.logo.subtext}
              </p>
            </motion.div>

            <div className="relative h-[2px] w-48 overflow-hidden bg-graphite md:w-64">
              <motion.div
                className="absolute inset-0 origin-left bg-accent-blue"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
              />
              <motion.svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 256 2"
                preserveAspectRatio="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, delay: 0.4, times: [0, 0.5, 1] }}
              >
                <motion.path
                  d="M0,1 Q16,-3 32,1 T64,1 T96,1 T128,1 T160,1 T192,1 T224,1 T256,1"
                  fill="none"
                  stroke="hsl(var(--accent-light))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.4 }}
                />
              </motion.svg>
            </div>

            <motion.p
              className="font-display text-sm italic text-soft-gray md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {site.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
