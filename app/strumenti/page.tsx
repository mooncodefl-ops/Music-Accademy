import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { InstrumentExplorer } from '@/components/instrument-explorer';

export default function StrumentiPage() {
  return (
    <>
      <Navbar />
      <main>
        <InstrumentExplorer />
      </main>
      <Footer />
    </>
  );
}
