import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import eventsImg from '@/assets/events.jpg';

const EventsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={eventsImg} alt="Events at Neue Liebe" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Events</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              {t.events.title}
            </h2>
            <div className="gold-separator mb-8" />
            <p className="text-muted-foreground leading-relaxed font-light mb-10">
              {t.events.text}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors duration-300"
            >
              {t.events.button}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
