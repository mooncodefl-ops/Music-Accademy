import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceholderPage } from '@/components/placeholder-page';

export default function InsegnantiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPage
          number="02"
          title="Insegnanti"
          subtitle="Teachers"
          description="Meet the musicians behind the academy. Our teachers are active performers, recording artists, and passionate educators — each bringing years of experience to every lesson."
        />
      </main>
      <Footer />
    </>
  );
}
