import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Restaurant Neue Liebe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-wide text-foreground mb-4"
        >
          Neue Liebe
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-16 h-px bg-accent mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-base tracking-[0.25em] uppercase text-muted-foreground mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-lg md:text-xl text-foreground/80 max-w-lg mb-10 italic font-light"
        >
          {t.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#reservation"
            className="px-8 py-3 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors duration-300"
          >
            {t.hero.reserve}
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border border-foreground/30 text-foreground text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {t.hero.menuBtn}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#philosophy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
