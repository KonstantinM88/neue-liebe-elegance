import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ExperienceSection from '@/components/ExperienceSection';
import DishesSection from '@/components/DishesSection';
import GallerySection from '@/components/GallerySection';
import EventsSection from '@/components/EventsSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ExperienceSection />
      <DishesSection />
      <GallerySection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
