import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-charcoal-light">
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
            {t.contact.title}
          </h2>
          <div className="gold-separator mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground font-light">Wetzendorfer Str. 10</p>
                <p className="text-foreground font-light">06642 Nebra (Unstrut)</p>
                <p className="text-muted-foreground font-light text-sm mt-1">Deutschland</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <a href="tel:034461599804" className="text-foreground font-light hover:text-accent transition-colors">
                  034461 599804
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  {t.contact.hours}
                </p>
                <p className="text-foreground font-light">{t.contact.hoursText}</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              title="Neue Liebe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d11.5578!3d51.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE3JzIzLjAiTiAxMcKwMzMnMjguMCJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
