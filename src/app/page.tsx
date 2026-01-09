import { Navigation, Footer } from '@/components/layout';
import { Hero, Services, About, Testimonials, Contact } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
