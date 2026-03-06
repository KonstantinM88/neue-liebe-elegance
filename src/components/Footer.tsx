import { useLanguage } from '@/i18n/LanguageContext';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-light text-foreground mb-4">Neue Liebe</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Restaurant • Terrasse • Tanz & Events
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">{t.contact.title}</p>
            <div className="space-y-2 text-muted-foreground text-sm font-light">
              <p>Wetzendorfer Str. 10</p>
              <p>06642 Nebra (Unstrut)</p>
              <p className="mt-3">
                <a href="tel:034461599804" className="hover:text-accent transition-colors">
                  034461 599804
                </a>
              </p>
              <p>
                <a href="mailto:info@neueliebe-nebra.de" className="hover:text-accent transition-colors">
                  info@neueliebe-nebra.de
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">Social Media</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs font-light tracking-wider">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
