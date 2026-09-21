import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceholderPage } from '@/components/placeholder-page';

export default function EventiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPage
          number="04"
          title="Eventi"
          subtitle="Events & Performances"
          description="Recitals, concerts, open mic nights, and seasonal showcases. Our students perform on stage throughout the year — celebrating progress, building confidence, and sharing music with the community."
        />
      </main>
      <Footer />
    </>
  );
}
