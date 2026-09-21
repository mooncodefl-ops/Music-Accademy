import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceholderPage } from '@/components/placeholder-page';

export default function CorsiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPage
          number="03"
          title="Corsi"
          subtitle="Courses"
          description="Individual lessons, group classes, ensemble workshops, and masterclasses. Courses are tailored to every level — from first-time beginners to advanced players preparing for conservatory auditions."
        />
      </main>
      <Footer />
    </>
  );
}
