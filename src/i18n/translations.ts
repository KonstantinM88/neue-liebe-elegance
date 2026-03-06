export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      philosophy: 'Philosophie',
      experience: 'Erlebnis',
      menu: 'Speisekarte',
      gallery: 'Galerie',
      events: 'Events',
      reservation: 'Reservierung',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Restaurant • Terrasse • Tanz & Events',
      text: 'Ein Ort für besondere Momente, gutes Essen und neue Begegnungen.',
      reserve: 'Tisch reservieren',
      menuBtn: 'Speisekarte ansehen',
      scroll: 'Entdecken',
    },
    philosophy: {
      title: 'Unsere Philosophie',
      p1: 'Neue Liebe ist mehr als ein Restaurant – es ist ein Ort der Begegnung, der Leidenschaft und des Genusses. In unserer Küche verbinden wir regionale Traditionen mit moderner Kreativität.',
      p2: 'Jedes Gericht erzählt eine Geschichte. Frische Zutaten aus der Region, sorgfältig ausgewählt und mit Hingabe zubereitet. Unsere Gastfreundschaft ist von Herzen – wir möchten, dass Sie sich bei uns wie zu Hause fühlen.',
      p3: 'Ob ein romantisches Dinner zu zweit, ein Familienessen oder ein besonderer Anlass – bei Neue Liebe finden Sie den perfekten Rahmen für unvergessliche Momente.',
    },
    experience: {
      title: 'Unser Erlebnis',
      terrace: {
        title: 'Sommerterrasse',
        text: 'Genießen Sie warme Abende unter freiem Himmel mit Blick auf die malerische Umgebung.',
      },
      banquet: {
        title: 'Bankettsaal',
        text: 'Unser eleganter Saal bietet den perfekten Rahmen für Feierlichkeiten jeder Art.',
      },
      dance: {
        title: 'Tanz & Events',
        text: 'Livemusik, Tanzabende und besondere Veranstaltungen – erleben Sie unvergessliche Nächte.',
      },
    },
    dishes: {
      title: 'Unsere Signature-Gerichte',
      button: 'Speisekarte entdecken',
      items: [
        { name: 'Entenbrust Rosa', desc: 'Mit Beerenreduktion und saisonalem Gemüse', price: '24,90 €' },
        { name: 'Lachs an Spargel', desc: 'Mit Hollandaise und frischen Kräutern', price: '22,50 €' },
        { name: 'Schokoladen-Fondant', desc: 'Mit Goldblatt und Himbeercoulis', price: '12,90 €' },
        { name: 'Rinderfilet Trüffel', desc: 'Mit Trüffeljus und geröstetem Gemüse', price: '28,90 €' },
      ],
    },
    gallery: {
      title: 'Atmosphäre',
    },
    events: {
      title: 'Feiern & Veranstaltungen',
      text: 'Ob Hochzeit, Geburtstag oder Firmenfeier – wir gestalten Ihren besonderen Anlass mit Liebe zum Detail. Unser Team berät Sie persönlich und sorgt dafür, dass Ihre Feier unvergesslich wird.',
      button: 'Event anfragen',
    },
    reservation: {
      title: 'Reservierung',
      name: 'Name',
      phone: 'Telefon',
      date: 'Datum',
      guests: 'Personenzahl',
      button: 'Tisch reservieren',
      success: 'Vielen Dank! Wir bestätigen Ihre Reservierung in Kürze.',
    },
    contact: {
      title: 'Kontakt',
      hours: 'Öffnungszeiten',
      hoursText: 'Täglich geöffnet bis 23:00 Uhr',
    },
    footer: {
      rights: '© 2026 Restaurant Neue Liebe. Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      philosophy: 'Philosophy',
      experience: 'Experience',
      menu: 'Menu',
      gallery: 'Gallery',
      events: 'Events',
      reservation: 'Reservation',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Restaurant • Terrace • Dance & Events',
      text: 'A place for special moments, great food and new encounters.',
      reserve: 'Reserve a Table',
      menuBtn: 'View Menu',
      scroll: 'Discover',
    },
    philosophy: {
      title: 'Our Philosophy',
      p1: 'Neue Liebe is more than a restaurant – it is a place of encounter, passion and pleasure. In our kitchen, we combine regional traditions with modern creativity.',
      p2: 'Every dish tells a story. Fresh ingredients from the region, carefully selected and prepared with dedication. Our hospitality comes from the heart – we want you to feel at home with us.',
      p3: 'Whether a romantic dinner for two, a family meal or a special occasion – at Neue Liebe you will find the perfect setting for unforgettable moments.',
    },
    experience: {
      title: 'Our Experience',
      terrace: {
        title: 'Summer Terrace',
        text: 'Enjoy warm evenings under the open sky with views of the picturesque surroundings.',
      },
      banquet: {
        title: 'Banquet Hall',
        text: 'Our elegant hall provides the perfect setting for celebrations of all kinds.',
      },
      dance: {
        title: 'Dance & Events',
        text: 'Live music, dance evenings and special events – experience unforgettable nights.',
      },
    },
    dishes: {
      title: 'Our Signature Dishes',
      button: 'Discover the Menu',
      items: [
        { name: 'Duck Breast Rosé', desc: 'With berry reduction and seasonal vegetables', price: '€24.90' },
        { name: 'Salmon with Asparagus', desc: 'With hollandaise and fresh herbs', price: '€22.50' },
        { name: 'Chocolate Fondant', desc: 'With gold leaf and raspberry coulis', price: '€12.90' },
        { name: 'Beef Tenderloin Truffle', desc: 'With truffle jus and roasted vegetables', price: '€28.90' },
      ],
    },
    gallery: {
      title: 'Atmosphere',
    },
    events: {
      title: 'Celebrations & Events',
      text: 'Whether a wedding, birthday or corporate event – we design your special occasion with attention to detail. Our team will advise you personally and ensure your celebration is unforgettable.',
      button: 'Inquire about Events',
    },
    reservation: {
      title: 'Reservation',
      name: 'Name',
      phone: 'Phone',
      date: 'Date',
      guests: 'Number of Guests',
      button: 'Reserve a Table',
      success: 'Thank you! We will confirm your reservation shortly.',
    },
    contact: {
      title: 'Contact',
      hours: 'Opening Hours',
      hoursText: 'Open daily until 11:00 PM',
    },
    footer: {
      rights: '© 2026 Restaurant Neue Liebe. All rights reserved.',
    },
  },
} as const;
