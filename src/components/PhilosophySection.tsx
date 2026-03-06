import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import philosophyImg from '@/assets/philosophy.jpg';

const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <img
              src={philosophyImg}
              alt="Chef at Neue Liebe"
              className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Neue Liebe</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              {t.philosophy.title}
            </h2>
            <div className="gold-separator !mx-0 mb-8" />
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
              <p>{t.philosophy.p1}</p>
              <p>{t.philosophy.p2}</p>
              <p>{t.philosophy.p3}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
