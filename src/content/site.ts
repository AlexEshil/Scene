export type NavChild = {
  href: string;
  label: string;
  description: string;
};

export type NavItem = {
  key: string;
  href: string;
  label: string;
  description: string;
  children: NavChild[];
};

export type RouteMeta = {
  section: string;
  title: string;
  description: string;
  footerNote: string;
};

export const navigation: NavItem[] = [
  {
    key: "company",
    href: "/company/",
    label: "Компания",
    description: "Позиционирование, руководство, отрасли, география и контактные данные группы.",
    children: [
      { href: "/company/#overview", label: "Обзор", description: "Кто мы и как устроен бизнес." },
      { href: "/company/#leadership", label: "Руководство", description: "Ключевые управленческие роли." },
      { href: "/company/#sectors", label: "Сектора", description: "Логистика, индустрия, медицина, ЦОД." },
      { href: "/company/#contact", label: "Контакты", description: "Центральный офис и региональные команды." },
    ],
  },
  {
    key: "services",
    href: "/services/",
    label: "Услуги",
    description: "Предпроект, генподряд, цифровое моделирование, производство и охрана труда.",
    children: [
      { href: "/services/#precon", label: "Предпроект", description: "Бюджет, график, сценарии запуска." },
      { href: "/services/#delivery", label: "Генподряд", description: "Реализация объекта под ключ." },
      { href: "/services/#digital", label: "BIM и инженерия", description: "Координация модели и техрешений." },
      { href: "/services/#quality", label: "Качество и HSE", description: "Контроль производства и безопасности." },
    ],
  },
  {
    key: "projects",
    href: "/projects/",
    label: "Проекты",
    description: "Ключевые площадки, отраслевой портфель и география завершённых работ.",
    children: [
      { href: "/projects/#featured", label: "Знаковые объекты", description: "Три флагманских проекта последних лет." },
      { href: "/projects/#portfolio", label: "Портфель", description: "Типы объектов и масштабы." },
      { href: "/projects/#regions", label: "География", description: "Регионы присутствия и локальные команды." },
      { href: "/projects/#delivery-metrics", label: "Показатели", description: "Объёмы и темпы ввода." },
    ],
  },
  {
    key: "insights",
    href: "/insights/",
    label: "Новости и аналитика",
    description: "Производственные обновления, экспертные обзоры, отчёты по рынку и технологии.",
    children: [
      { href: "/insights/#news", label: "Новости", description: "Запуски объектов и назначения." },
      { href: "/insights/#articles", label: "Статьи", description: "Материалы от инженерной команды." },
      { href: "/insights/#reports", label: "Отчёты", description: "Обзоры логистики, ЦОД и мединфры." },
      { href: "/insights/#press", label: "Пресс-кит", description: "Контакты и комментарии для СМИ." },
    ],
  },
  {
    key: "careers",
    href: "/careers/",
    label: "Карьера",
    description: "Полевые профессии, инженеры площадки, BIM, ПТО, мастера и карьерные маршруты.",
    children: [
      { href: "/careers/#directions", label: "Направления", description: "Роли на площадке и в офисе." },
      { href: "/careers/labor/", label: "Рабочие специальности", description: "Отдельная страница набора." },
      { href: "/careers/#benefits", label: "Почему к нам", description: "Условия, обучение и рост." },
      { href: "/careers/#locations", label: "Локации", description: "Где сейчас формируются команды." },
    ],
  },
];

export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    section: "home",
    title: "Атлас Контур | Строительная группа полного цикла",
    description:
      "Атлас Контур — российская строительная группа полного цикла: генподряд, промышленное строительство, дата-центры, логистика, медицина и полевые профессии.",
    footerNote: "Все материалы на сайте используются как демонстрационная корпоративная система 2026 уровня.",
  },
  "/company/": {
    section: "company",
    title: "Компания | Атлас Контур",
    description: "О компании Атлас Контур: история, руководство, отрасли, масштабы и контакты.",
    footerNote: "Многостраничная структура с внутренними точками входа по реальной архитектуре бизнеса.",
  },
  "/services/": {
    section: "services",
    title: "Услуги | Атлас Контур",
    description: "Услуги Атлас Контур: предпроект, генподряд, BIM, инженерия, контроль качества и безопасность.",
    footerNote: "Раздел услуг подан как отдельное ядро бизнеса внутри общей корпоративной навигации.",
  },
  "/projects/": {
    section: "projects",
    title: "Проекты | Атлас Контур",
    description: "Проекты Атлас Контур: логистика, дата-центры, медицина, промышленность и география объектов.",
    footerNote: "Портфель проектов встроен в общую навигационную модель и работает как доказательная база бренда.",
  },
  "/insights/": {
    section: "insights",
    title: "Новости и аналитика | Атлас Контур",
    description: "Новости и аналитика Атлас Контур: производственные новости, статьи, обзоры и пресс-контакты.",
    footerNote: "Раздел новостей и аналитики оформлен как полноценный корпоративный entry point.",
  },
  "/careers/": {
    section: "careers",
    title: "Карьера | Атлас Контур",
    description: "Карьера в Атлас Контур: направления, условия, рабочие специальности и локации найма.",
    footerNote: "Карьерная архитектура разделена по маршрутам найма и ведёт на отдельную labor-страницу.",
  },
  "/careers/labor/": {
    section: "careers",
    title: "Рабочие специальности | Атлас Контур",
    description: "Рабочие и полевые специальности в Атлас Контур: вакансии, условия, этапы подбора и объекты.",
    footerNote: "Рабочие специальности оформлены как отдельный внутренний маршрут внутри карьерного контура.",
  },
  "/subcontractors/": {
    section: "subcontractors",
    title: "Субподрядчикам | Атлас Контур",
    description: "Субподрядчикам Атлас Контур: требования, пакеты работ, этапы предквалификации и форма подачи.",
    footerNote: "Раздел для подрядчиков даёт отдельный B2B-вход с предквалификацией и реальным действием.",
  },
};

export function normalizePath(pathname: string) {
  const withoutIndex = pathname.replace(/index\.html$/, "");
  if (withoutIndex === "" || withoutIndex === "/") {
    return "/";
  }
  return withoutIndex.endsWith("/") ? withoutIndex : `${withoutIndex}/`;
}

export function getRouteMeta(pathname: string) {
  const normalized = normalizePath(pathname);
  return routeMeta[normalized] ?? routeMeta["/"];
}

export function getActiveSection(pathname: string) {
  const normalized = normalizePath(pathname);
  const route = routeMeta[normalized];
  return route?.section ?? "home";
}
