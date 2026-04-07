// SECTION: copy.ts — All website content in one place

// REAL photos from Marusya guesthouse (Ostrovok.ru)
const localPhotos = {
  // Rooms - REAL photos from the guesthouse
  roomStandard: '/photos/room1.jpg',
  roomStandardAlt: '/photos/room3.jpg',
  roomFamily: '/photos/room8.jpg',
  roomFamilyAlt: '/photos/room9.jpg',
  roomTriple: '/photos/room4.jpg',
  roomTripleAlt: '/photos/room5.jpg',
  
  // Gallery - all real room photos
  gallery: [
    '/photos/room1.jpg',
    '/photos/room2.jpg',
    '/photos/room3.jpg',
    '/photos/room4.jpg',
    '/photos/room8.jpg',
    '/photos/room9.jpg',
    '/photos/room10.jpg',
    '/photos/room11.jpg',
    '/photos/room12.jpg',
    '/photos/room13.jpg',
    '/photos/room15.jpg',
  ],
};

// Unsplash only for scenes we don't have real photos of
const unsplash = {
  // Hero - Sochi Black Sea sunset
  heroPoster: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
  
  // Story moments - generic scenes (we don't have these photos from guesthouse)
  sunrise: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=80',
  breakfast: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80',
  beach: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  lunch: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
  sunset: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1200&q=80',
};

export const siteConfig = {
  name: 'Маруся',
  tagline: 'Гостевой дом в Кудепсте',
  description: 'Семейный гостевой дом с домашним уютом. До моря — 10 минут пешком.',
  phone: '+7 (962) 888-88-88',
  phoneClean: '79628888888',
  address: 'Кудепста, ул. Садовая 15, Сочи',
  email: 'hello@marusya-sochi.ru',
  coords: { lat: 43.4376, lng: 39.9336 },
  social: {
    whatsapp: 'https://wa.me/79628888888',
    telegram: 'https://t.me/marusya_sochi',
    vk: 'https://vk.com/marusya_sochi',
  },
};

// Hero Section
export const heroCopy = {
  headline: ['Маруся'],
  subheadline: 'Место, куда хочется возвращаться',
  description: 'Уютные номера, тёплая атмосфера и забота о каждом госте. Идеально для семейного отдыха у самого моря.',
  locationBadge: 'Кудепста, 10 минут до моря',
  ctaPrimary: 'Забронировать',
  ctaSecondary: 'Смотреть номера',
  stats: [
    { value: '4.9', label: 'рейтинг' },
    { value: '120+', label: 'отзывов' },
    { value: '10 мин', label: 'до моря' },
  ],
  video: {
    mp4: '/videos/hero-sea.mp4',
    webm: '/videos/hero-sea.webm',
    poster: unsplash.heroPoster,
  },
};

// Story Scroll Section — Ваш день в Марусе
export const storyMoments = [
  {
    id: 'sunrise',
    time: '06:30',
    title: 'Рассвет',
    copy: 'Просыпайтесь под пение птиц в тихом дворе. Утренний свет проникает сквозь шторы, а воздух пахнет соснами и морем.',
    image: unsplash.sunrise,
  },
  {
    id: 'breakfast',
    time: '09:00',
    title: 'Завтрак',
    copy: 'Пышные блинчики с мёдом, свежие фрукты и душистый чай. Мама готовит с любовью, как для своей семьи.',
    image: unsplash.breakfast,
  },
  {
    id: 'beach',
    time: '11:00',
    title: 'Пляж',
    copy: 'Десять минут неторопливой прогулки — и вы на море. Чистый галечный пляж Кудепсты, без толп туристов.',
    image: unsplash.beach,
  },
  {
    id: 'lunch',
    time: '14:00',
    title: 'Обед',
    copy: 'Лёгкий перекус на террасе. Домашнее вино, сыры, оливки. Перерыв между купаниями.',
    image: unsplash.lunch,
  },
  {
    id: 'sunset',
    time: '19:30',
    title: 'Закат',
    copy: 'Вечерний воздух становится прохладным. Зажигаем огни, разжигаем мангал, делимся историями за бокалом вина.',
    image: unsplash.sunset,
  },
];

// Rooms Section - with REAL photos from the guesthouse
export const roomsCopy = {
  title: 'Номера',
  subtitle: 'Три уникальных пространства для вашего отдыха',
  rooms: [
    {
      id: 'standard',
      name: 'Двухместный стандарт',
      slug: 'standard',
      size: 18,
      guests: 2,
      beds: 'Двуспальная кровать',
      price: 2500,
      image: localPhotos.roomStandard,
      description: 'Уютный номер для двоих с всем необходимым для комфортного отдыха. Идеально для пар.',
      amenities: ['Кондиционер', 'Холодильник', 'TV', 'Wi-Fi', 'Душ', 'Фен', 'Полотенца'],
      panorama: localPhotos.roomStandardAlt,
      availability: 3,
    },
    {
      id: 'family',
      name: 'Двухкомнатный семейный',
      slug: 'family',
      size: 35,
      guests: 4,
      beds: '2 двуспальные кровати',
      price: 4000,
      image: localPhotos.roomFamily,
      description: 'Просторный номер для семьи или компании друзей. Отдельная гостиная и спальня.',
      amenities: ['Кондиционер', 'Кухня', 'Холодильник', 'TV', 'Wi-Fi', 'Душ', 'Фен', 'Полотенца'],
      panorama: localPhotos.roomFamilyAlt,
      availability: 1,
    },
    {
      id: 'triple',
      name: 'Трёхместный',
      slug: 'triple',
      size: 22,
      guests: 3,
      beds: '3 односпальные кровати',
      price: 3200,
      image: localPhotos.roomTriple,
      description: 'Для компании друзей или семьи с ребёнком. Три отдельные кровати, все удобства.',
      amenities: ['Кондиционер', 'Холодильник', 'TV', 'Wi-Fi', 'Душ', 'Фен', 'Полотенца'],
      panorama: localPhotos.roomTripleAlt,
      availability: 2,
    },
  ],
};

// Reviews Section
export const reviewsCopy = {
  title: 'Что говорят гости',
  subtitle: 'Истории тех, кто уже отдохнул у нас',
  filters: [
    { id: 'all', label: 'Все' },
    { id: 'family', label: 'Семьи' },
    { id: 'couple', label: 'Пары' },
    { id: 'solo', label: 'Соло' },
  ],
  reviews: [
    {
      id: 1,
      name: 'Nata Marchenko',
      city: 'Москва',
      type: 'family',
      rating: 5,
      text: 'Очень приятная гостиница. Жили в двухкомнатном номере на первом этаже. Чистота почти идеальная. Полное соответствие фотографиям. Удобные кровати, за окном сад и всё время поют птички.',
      date: '2024-08-15',
      platform: 'booking',
    },
    {
      id: 2,
      name: 'Алёна Тихонова',
      city: 'Санкт-Петербург',
      type: 'couple',
      rating: 5,
      text: 'Прекрасный отель! Останавливались с мужем в середине июня. Отдельная благодарность за чистоту. Постельное бельё, полотенца, всё в наилучшем виде.',
      date: '2024-07-22',
      platform: 'google',
    },
    {
      id: 3,
      name: 'Денис Павлов',
      city: 'Екатеринбург',
      type: 'couple',
      rating: 5,
      text: 'ПРЕКРАСНОЕ МЕСТО ДЛЯ ОТДЫХА И ХОРОШИЕ ХОЗЯЕВА КОТОРЫЕ ВСЕГДА РАДЫ ГОСТЯМ! ВСТРЕТЯТ РАЗМЕСТЯТ И НАКОРМЯТ! ТОП ЗА СВОИ ДЕНЬГИ!',
      date: '2024-08-03',
      platform: 'direct',
    },
    {
      id: 4,
      name: 'Ирина Ковалёва',
      city: 'Казань',
      type: 'family',
      rating: 5,
      text: 'Мы в восторге от отдыха в этом Гостевом доме! Дети не хотели уезжать. Двор, качели, мангал — всё для семейного отдыха.',
      date: '2024-07-10',
      platform: 'booking',
    },
    {
      id: 5,
      name: 'Виктор Калинников',
      city: 'Новосибирск',
      type: 'solo',
      rating: 5,
      text: 'Очень классное местечко, советую посетить данный мини отель, частенько комфортно, обязательно ещё раз посетим вас, спасибо за чистоту комфорт!',
      date: '2024-06-28',
      platform: 'google',
    },
    {
      id: 6,
      name: 'Мария Соколова',
      city: 'Ростов-на-Дону',
      type: 'couple',
      rating: 5,
      text: 'Атмосфера домашнего уюта, внимательные хозяева, вкусные завтраки. До моря реально 10 минут пешком.',
      date: '2024-08-20',
      platform: 'booking',
    },
    {
      id: 7,
      name: 'Александр Петров',
      city: 'Воронеж',
      type: 'family',
      rating: 5,
      text: 'Отличный вариант для семьи с двумя детьми. Просторный номер, детская площадка во дворе, тихий район.',
      date: '2024-07-05',
      platform: 'direct',
    },
    {
      id: 8,
      name: 'Елена Васильева',
      city: 'Самара',
      type: 'solo',
      rating: 5,
      text: 'Приезжала одна на неделю отдохнуть. Замечательный персонал, помогли со всеми вопросами. Чувствовала себя как дома.',
      date: '2024-08-12',
      platform: 'google',
    },
    {
      id: 9,
      name: 'Ольга Морозова',
      city: 'Уфа',
      type: 'couple',
      rating: 5,
      text: 'Романтичное место! Вечерами сидели на террасе, пили вино. Хозяева очень гостеприимные.',
      date: '2024-07-30',
      platform: 'booking',
    },
    {
      id: 10,
      name: 'Сергей Николаев',
      city: 'Челябинск',
      type: 'family',
      rating: 5,
      text: 'Третий раз останавливаемся у Маруси. Как приехали к родственникам. Всё чисто, уютно, по-домашнему.',
      date: '2024-08-08',
      platform: 'direct',
    },
    {
      id: 11,
      name: 'Татьяна Иванова',
      city: 'Пермь',
      type: 'couple',
      rating: 5,
      text: 'Хорошее соотношение цена-качество. Всё соответствует описанию. Рекомендуем!',
      date: '2024-06-15',
      platform: 'google',
    },
    {
      id: 12,
      name: 'Анна Смирнова',
      city: 'Краснодар',
      type: 'family',
      rating: 5,
      text: 'Жили в двухкомнатном номере. Очень просторно и светло. Дети были в восторге от двора!',
      date: '2024-07-18',
      platform: 'booking',
    },
  ],
};

// Location Section
export const locationCopy = {
  title: 'Как нас найти',
  subtitle: 'Тихий уголок Кудепсты, в 10 минутах от моря',
  address: 'Кудепста, ул. Садовая 15, Сочи',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.3!2d39.9336!3d43.4376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI2JzE1LjQiTiAzOcKwNTYnMDEuMCJF!5e0!3m2!1sru!2sru!4v1234567890',
  distances: [
    {
      id: 'beach',
      name: 'Пляж Кудепста',
      distance: '800 м',
      time: '10 мин пешком',
      icon: 'waves',
      mode: 'walk',
    },
    {
      id: 'train',
      name: 'Ж/д Кудепста',
      distance: '1.2 км',
      time: '15 мин пешком',
      icon: 'train',
      mode: 'walk',
    },
    {
      id: 'airport',
      name: 'Аэропорт Адлер',
      distance: '8 км',
      time: '15 мин на машине',
      icon: 'plane',
      mode: 'car',
    },
    {
      id: 'olympic',
      name: 'Олимпийский парк',
      distance: '18 км',
      time: '25 мин на машине',
      icon: 'mountain',
      mode: 'car',
    },
  ],
  directions: [
    {
      id: 'car',
      title: 'На машине',
      content: 'С трассы М-27 поворот на Кудепсту. Проехать 800 м прямо, затем налево на ул. Садовую. Гостевой дом с правой стороны, ориентир — высокая сосна у ворот. Бесплатная парковка на территории.',
    },
    {
      id: 'train',
      title: 'На поезде',
      content: 'Электричкой до станции Кудепста (идёт от Адлера каждые 30 мин). От станции 15 минут пешком или 3 минуты на такси. Можем встретить на машине — позвоните за 15 минут.',
    },
    {
      id: 'airport',
      title: 'Из аэропорта',
      content: 'Такси от аэропорта Адлер — 15 минут (≈800₽). Или автобус № 125 до остановки «Кудепста», затем 10 минут пешком. Трансфер можно заказать у нас — стоимость 700₽.',
    },
  ],
};

// Features Section
export const featuresCopy = {
  title: 'Почему выбирают нас',
  features: [
    { icon: 'waves', title: 'Море рядом', description: '10 минут пешком до пляжа' },
    { icon: 'utensils', title: 'Вкусные завтраки', description: 'Домашняя кухня' },
    { icon: 'sparkles', title: 'Идеальная чистота', description: 'Отмечают все гости' },
    { icon: 'trees', title: 'Зелёный двор', description: 'Тишина и свежий воздух' },
    { icon: 'users', title: 'Для семьи', description: 'Детская площадка и безопасность' },
    { icon: 'store', title: 'Всё рядом', description: 'Рынок, магазины, кафе' },
    { icon: 'car', title: 'Парковка', description: 'Бесплатно на территории' },
    { icon: 'flame', title: 'Мангальная зона', description: 'Для вечерних посиделок' },
  ],
};

// Gallery Section - REAL photos from guesthouse
export const galleryCopy = {
  title: 'Галерея',
  subtitle: 'Настоящие фото наших номеров',
  images: localPhotos.gallery.map((src, index) => ({
    src,
    alt: `Номер ${index + 1}`,
  })),
};

// WhatsApp Flow
export const whatsappCopy = {
  title: 'Написать нам',
  options: [
    {
      id: 'dates',
      label: 'Узнать о свободных датах',
      message: 'Здравствуйте! Хочу узнать о свободных датах в гостевом доме Маруся. Интересуют номера на [укажите даты]. Спасибо!',
    },
    {
      id: 'prices',
      label: 'Уточнить цены',
      message: 'Здравствуйте! Интересуют цены на проживание в Марусе. Хотелось бы узнать стоимость номеров на [укажите даты]. Спасибо!',
    },
    {
      id: 'question',
      label: 'Задать вопрос',
      message: 'Здравствуйте! У меня вопрос о гостевом доме Маруся: [ваш вопрос]',
    },
  ],
};

// Navigation
export const navCopy = {
  links: [
    { label: 'О нас', href: '#about' },
    { label: 'Номера', href: '#rooms' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contact' },
  ],
  cta: 'Забронировать',
};

// Footer
export const footerCopy = {
  description: 'Семейный гостевой дом в Кудепсте. Уют, чистота и забота о каждом госте.',
  copyright: '© 2025 Гостевой дом Маруся. Все права защищены.',
  links: [
    { label: 'Номера', href: '#rooms' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Расположение', href: '#location' },
    { label: 'Контакты', href: '#contact' },
    { label: 'Политика конфиденциальности', href: '/privacy' },
  ],
};
