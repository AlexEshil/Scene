// Site configuration
// СтройМастер - строительная компания

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  brandLeft: string;
  brandRight: string;
  tagline: string;
  badge: string;
  since: string;
  email: string;
  heroImage: string;
  heroImageAlt: string;
  scrollText: string;
  copyrightText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutConfig {
  label: string;
  headline: string;
  description: string;
  bottomText: string;
  galleryImages: GalleryImage[];
  stats: StatItem[];
}

export interface Exhibition {
  id: number;
  title: string;
  image: string;
  date: string;
}

export interface ExhibitionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  exhibitions: Exhibition[];
}

export interface Collection {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface CollectionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  collections: Collection[];
}

export interface TestimonialsConfig {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  content: string;
}

export interface VisitConfig {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  infoCards: InfoCard[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  marqueeText: string;
  brandName: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  quickLinksTitle: string;
  contactTitle: string;
  contactItems: string[];
  bottomLinks: FooterLink[];
}

export const siteConfig: SiteConfig = {
  language: "ru",
  title: "СтройМастер - Строительная компания",
  description: "СтройМастер - профессиональное строительство и ремонт любой сложности. Более 15 лет на рынке, 500+ выполненных проектов.",
};

export const heroConfig: HeroConfig = {
  brandLeft: "СТРОЙ",
  brandRight: "МАСТЕР",
  tagline: "Строим будущее с 2008 года",
  badge: "Москва • Россия",
  since: "с 2008",
  email: "info@stroymaster.ru",
  heroImage: "/images/hero-builder.png",
  heroImageAlt: "Строитель СтройМастер",
  scrollText: "Листайте вниз",
  copyrightText: "© 2024 СтройМастер",
  navLinks: [
    { label: "Главная", href: "/" },
    { label: "Проекты", href: "/projects.html" },
    { label: "Услуги", href: "/services.html" },
    { label: "Контакты", href: "#contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export const aboutConfig: AboutConfig = {
  label: "Основана в 2008 году",
  headline: "Мы строим не просто здания — мы создаем пространства для жизни",
  description: "СтройМастер — это команда профессионалов с многолетним опытом в строительстве жилых и коммерческих объектов. Мы берем на себя полный цикл работ: от проектирования до сдачи объекта под ключ. Каждый проект — это уникальная история, в которой мы воплощаем мечты наших клиентов в реальность.",
  bottomText: "Наша миссия — строить качественно, в срок и с заботой о каждой детали. Мы используем только сертифицированные материалы и современные технологии строительства.",
  galleryImages: [
    { src: "/images/gallery-1.jpg", alt: "Архитектор на стройке", label: "Проектирование" },
    { src: "/images/gallery-2.jpg", alt: "Строительные работы", label: "Строительство" },
    { src: "/images/gallery-3.jpg", alt: "Интерьер", label: "Отделка" },
    { src: "/images/gallery-4.jpg", alt: "Высотное здание", label: "Высотки" },
    { src: "/images/gallery-5.jpg", alt: "Инженер", label: "Контроль" },
    { src: "/images/gallery-6.jpg", alt: "Спальня", label: "Ремонт" },
  ],
  stats: [
    { value: "500+", label: "Выполненных проектов" },
    { value: "15", label: "Лет на рынке" },
    { value: "50+", label: "Специалистов в штате" },
    { value: "98%", label: "Довольных клиентов" },
  ],
};

export const exhibitionsConfig: ExhibitionsConfig = {
  label: "Наши проекты",
  headline: "Выполненные работы",
  ctaText: "Подробнее",
  exhibitions: [
    { id: 1, title: "Жилой комплекс 'Новые горизонты'", image: "/images/work-1.jpg", date: "2023" },
    { id: 2, title: "Дизайнерский ремонт пентхауса", image: "/images/work-2.jpg", date: "2023" },
    { id: 3, title: "Строительство бизнес-центра", image: "/images/work-3.jpg", date: "2022" },
    { id: 4, title: "Офисный центр 'Сити Тауэр'", image: "/images/work-4.jpg", date: "2022" },
  ],
};

export const collectionsConfig: CollectionsConfig = {
  label: "Направления",
  headline: "Наши услуги",
  ctaText: "Заказать",
  collections: [
    { 
      id: 1, 
      title: "Строительство домов", 
      year: "от 3 мес.", 
      description: "Полный цикл строительства частных домов и коттеджей любой сложности. От фундамента до кровли.", 
      image: "/images/work-7.jpg" 
    },
    { 
      id: 2, 
      title: "Ремонт квартир", 
      year: "от 2 мес.", 
      description: "Качественный ремонт квартир под ключ. Дизайн-проект, черновая и чистовая отделка.", 
      image: "/images/work-6.jpg" 
    },
    { 
      id: 3, 
      title: "Коммерческое строительство", 
      year: "от 6 мес.", 
      description: "Строительство офисных зданий, торговых центров, складов и производственных помещений.", 
      image: "/images/work-5.jpg" 
    },
    { 
      id: 4, 
      title: "Промышленные объекты", 
      year: "от 8 мес.", 
      description: "Возведение складских комплексов, логистических центров и производственных зданий.", 
      image: "/images/work-8.jpg" 
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  quote: "СтройМастер построил наш дом мечты! Команда профессионалов, которая знает свое дело. Все было сделано в срок, без нареканий по качеству. Особенно хочу отметить внимание к деталям и открытость в коммуникации на всех этапах работ.",
  authorName: "Александр Петров",
  authorTitle: "Генеральный директор, ООО 'Петров Холдинг'",
  authorImage: "/images/ceo.jpg",
};

export const visitConfig: VisitConfig = {
  label: "Контакты",
  headline: "Свяжитесь с нами",
  description: "Готовы начать свой проект? Свяжитесь с нами любым удобным способом, и мы обсудим все детали вашего будущего объекта.",
  ctaText: "Получить консультацию",
  infoCards: [
    { 
      icon: "MapPin", 
      title: "Адрес офиса", 
      content: "г. Москва, ул. Строителей, 25<br />БЦ 'СтройПлаза', офис 301" 
    },
    { 
      icon: "Clock", 
      title: "Часы работы", 
      content: "Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 14:00" 
    },
    { 
      icon: "Calendar", 
      title: "Запись на встречу", 
      content: "Запишитесь на бесплатную<br />консультацию с архитектором" 
    },
    { 
      icon: "Ticket", 
      title: "Телефон", 
      content: "+7 (495) 123-45-67<br />+7 (916) 765-43-21" 
    },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: "СТРОИТЕЛЬСТВО • РЕМОНТ • ПРОЕКТИРОВАНИЕ • СТРОИТЕЛЬСТВО • РЕМОНТ • ПРОЕКТИРОВАНИЕ • ",
  brandName: "СТРОЙМАСТЕР",
  brandDescription: "Профессиональное строительство и ремонт любой сложности. Более 15 лет на рынке.",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
  quickLinks: [
    { label: "Главная", href: "/" },
    { label: "Проекты", href: "/projects.html" },
    { label: "Услуги", href: "/services.html" },
    { label: "О компании", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ],
  quickLinksTitle: "Навигация",
  contactTitle: "Контакты",
  contactItems: [
    "г. Москва, ул. Строителей, 25",
    "+7 (495) 123-45-67",
    "info@stroymaster.ru",
  ],
  bottomLinks: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
  ],
};
