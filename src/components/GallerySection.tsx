import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-restaurant.jpg';
import terraceImg from '@/assets/terrace.jpg';
import dish1 from '@/assets/dish1.jpg';
import dish3 from '@/assets/dish3.jpg';
import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import banquetImg from '@/assets/banquet.jpg';
import danceImg from '@/assets/dance.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: heroImg, alt: 'Restaurant interior', span: 'col-span-2 row-span-2' },
    { src: gallery1, alt: 'Wine glasses', span: 'col-span-1 row-span-1' },
    { src: dish1, alt: 'Signature dish', span: 'col-span-1 row-span-1' },
    { src: terraceImg, alt: 'Summer terrace', span: 'col-span-1 row-span-1' },
    { src: gallery2, alt: 'Table setting', span: 'col-span-1 row-span-1' },
    { src: dish3, alt: 'Dessert', span: 'col-span-1 row-span-1' },
    { src: banquetImg, alt: 'Banquet hall', span: 'col-span-1 row-span-1' },
    { src: danceImg, alt: 'Dance evening', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="section-padding bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Galerie</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            {t.gallery.title}
          </h2>
          <div className="gold-separator mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
