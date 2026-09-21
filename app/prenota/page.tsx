'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { instruments } from '@/lib/instruments';
import { PlaceholderPage } from '@/components/placeholder-page';
import { Music } from 'lucide-react';

function PrenotaContent() {
  const searchParams = useSearchParams();
  const instrumentId = searchParams.get('instrument');
  const selected = instruments.find((i) => i.id === instrumentId);

  return (
    <>
      <Navbar />
      <main>
        <div className="relative min-h-screen bg-charcoal pt-32">
          <section className="relative px-6 py-20 md:py-32">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
                  05
                </span>
                <div className="h-px flex-1 bg-graphite-light/30" />
              </div>

              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-soft-gray/60">
                Book a Trial Lesson
              </p>
              <h1 className="font-display text-5xl font-medium leading-[0.9] text-ivory md:text-7xl lg:text-8xl">
                Prenota
              </h1>
              <p className="mt-10 max-w-2xl text-lg text-soft-gray md:text-xl">
                Schedule a 30-minute trial lesson with one of our teachers. Choose
                your instrument, pick a time, and take the first step in your
                musical journey. No commitment required.
              </p>

              {selected && (
                <div className="mt-12 border border-accent-blue/30 bg-graphite/50 p-6">
                  <div className="flex items-center gap-3">
                    <Music className="h-5 w-5 text-accent-blue-light" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                      Pre-selected instrument
                    </p>
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-medium text-ivory">
                    {selected.name}
                  </h2>
                  <p className="mt-2 text-sm text-soft-gray">
                    {selected.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-6 font-mono text-xs text-soft-gray/70">
                    <span>Levels: {selected.levels.join(', ')}</span>
                    <span>Format: {selected.formats.join(' & ')}</span>
                    <span>Duration: {selected.duration}</span>
                  </div>
                </div>
              )}

              <div className="mt-16 flex flex-col items-start gap-8">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-soft-gray/50">
                    Booking form coming soon
                  </p>
                  <div className="h-1 w-32 overflow-hidden bg-graphite-light/30">
                    <div className="h-full w-1/3 bg-accent-blue" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PrenotaPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <main>
          <PlaceholderPage
            number="05"
            title="Prenota"
            subtitle="Book a Trial Lesson"
            description="Schedule a 30-minute trial lesson with one of our teachers. Choose your instrument, pick a time, and take the first step in your musical journey. No commitment required."
          />
        </main>
        <Footer />
      </>
    }>
      <PrenotaContent />
    </Suspense>
  );
}
