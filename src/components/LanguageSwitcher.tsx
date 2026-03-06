import { useLanguage } from '@/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-sans tracking-wider">
      <button
        onClick={() => setLang('de')}
        className={`px-2 py-1 transition-colors duration-300 ${
          lang === 'de' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        DE
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 transition-colors duration-300 ${
          lang === 'en' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
