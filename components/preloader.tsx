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

    const timer = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  const skip = () => {
    setDone(true);
    setSkipped(true);
  };

  if (skipped) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pure-black"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
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
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              />
            </div>

            <motion.p
              className="font-display text-sm italic text-soft-gray md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {site.tagline}
            </motion.p>
          </div>

          <button
            onClick={skip}
            className="absolute bottom-8 right-8 font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50 transition-colors hover:text-ivory"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
