import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import terraceImg from '@/assets/terrace.jpg';
import banquetImg from '@/assets/banquet.jpg';
import danceImg from '@/assets/dance.jpg';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    { img: terraceImg, ...t.experience.terrace, alt: 'Summer terrace' },
    { img: banquetImg, ...t.experience.banquet, alt: 'Banquet hall' },
    { img: danceImg, ...t.experience.dance, alt: 'Dance and events' },
  ];

  return (
    <section id="experience" className="section-padding bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Neue Liebe</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            {t.experience.title}
          </h2>
          <div className="gold-separator mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={exp.img}
                  alt={exp.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {exp.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
