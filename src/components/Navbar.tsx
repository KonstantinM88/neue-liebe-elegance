import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#experience', label: t.nav.experience },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#events', label: t.nav.events },
    { href: '#reservation', label: t.nav.reservation },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-serif text-xl md:text-2xl font-light tracking-wide text-foreground">
          Neue Liebe
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
