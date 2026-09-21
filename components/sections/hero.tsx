'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoError(true);
    v.addEventListener('canplay', handleCanPlay);
    v.addEventListener('error', handleError);
    v.play().catch(() => setVideoError(true));
    return () => {
      v.removeEventListener('canplay', handleCanPlay);
      v.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-pure-black">
      {/* Poster fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${site.images.heroPoster})`,
          opacity: videoLoaded && !videoError ? 0 : 1,
        }}
      />

      {/* Video background */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-playing-the-piano-2633/1080p.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-black/60 via-pure-black/40 to-pure-black/80" />
      <div className="absolute inset-0 bg-pure-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {site.fullName}
        </motion.p>

        <motion.h1
          className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-ivory md:text-7xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base text-soft-gray md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {site.hero.supporting}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href={site.hero.primaryCta.href}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-accent-blue px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-blue-dark"
          >
            <span className="relative z-10">{site.hero.primaryCta.label}</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
          <Link
            href={site.hero.secondaryCta.href}
            className="group inline-flex items-center justify-center border border-ivory/30 px-8 py-4 text-sm font-medium uppercase tracking-widest text-ivory transition-colors hover:border-accent-blue hover:text-accent-blue-light"
          >
            {site.hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-soft-gray"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
