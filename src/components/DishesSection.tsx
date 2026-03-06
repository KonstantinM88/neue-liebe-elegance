import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import dish1 from '@/assets/dish1.jpg';
import dish2 from '@/assets/dish2.jpg';
import dish3 from '@/assets/dish3.jpg';
import dish4 from '@/assets/dish4.jpg';

const DishesSection = () => {
  const { t } = useLanguage();
  const images = [dish1, dish2, dish3, dish4];

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Kulinarik</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            {t.dishes.title}
          </h2>
          <div className="gold-separator mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.dishes.items.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-5">
                <img
                  src={images[i]}
                  alt={dish.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-xl font-light text-foreground mb-1">{dish.name}</h3>
              <p className="text-muted-foreground text-sm font-light mb-2">{dish.desc}</p>
              <p className="text-accent text-sm tracking-wider">{dish.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            className="inline-block px-8 py-3 border border-accent text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {t.dishes.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DishesSection;
