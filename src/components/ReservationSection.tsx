import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';

const ReservationSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservation" className="section-padding">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Neue Liebe</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            {t.reservation.title}
          </h2>
          <div className="gold-separator mt-6" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              {t.reservation.name}
            </label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              {t.reservation.phone}
            </label>
            <input
              type="tel"
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {t.reservation.date}
              </label>
              <input
                type="date"
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {t.reservation.guests}
              </label>
              <select
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n} className="bg-background text-foreground">
                    {n}
                  </option>
                ))}
                <option value="9+" className="bg-background text-foreground">9+</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors duration-300"
            >
              {t.reservation.button}
            </button>
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-accent text-sm font-light"
            >
              {t.reservation.success}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
