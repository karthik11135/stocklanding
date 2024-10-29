import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import CurveSection from '@/components/CurveSection/CurveSection';
import Refreshing from '@/components/Refreshing/Refreshing';
import { AccordionSection } from '@/components/Accordian/Accordian';
import PriceSection from '@/components/PriceCards/PriceSection';
import Testimonial from '@/components/Testimonials/Testimonial';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CurveSection />
      <AccordionSection />
      <Refreshing />
      <PriceSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
