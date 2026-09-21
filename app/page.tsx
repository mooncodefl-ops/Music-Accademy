import { Preloader } from '@/components/preloader';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { ScrollTransition } from '@/components/sections/scroll-transition';
import { AcademyIntro } from '@/components/sections/academy-intro';
import { InstrumentPreview } from '@/components/sections/instrument-preview';
import { CoursePreview } from '@/components/sections/course-preview';
import { PricingSection } from '@/components/sections/pricing-section';
import { StudentJourney } from '@/components/sections/student-journey';
import { CtaBand } from '@/components/sections/cta-band';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <ScrollTransition />
        <AcademyIntro />
        <InstrumentPreview />
        <CoursePreview />
        <PricingSection />
        <StudentJourney />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
