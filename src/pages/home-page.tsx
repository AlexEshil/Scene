import { ArrowRight } from "lucide-react";

import { HomeHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const entryPoints = [
  {
    label: "Компания",
    title: "Кто мы и как устроены",
    description:
      "Позиционирование, руководство, портфель отраслей, история развития и контакты центрального офиса.",
    href: "/company/",
  },
  {
    label: "Услуги",
    title: "Как ведём объект",
    description:
      "Предпроектная подготовка, генподряд, цифровая координация, префаб и контур HSE.",
    href: "/services/",
  },
  {
    label: "Карьера",
    title: "Отдельный путь для рабочих специальностей",
    description:
      "Страница набора для полевых команд вынесена отдельно, как и должно быть для полноценной корпоративной архитектуры.",
    href: "/careers/labor/",
  },
];

const servicePreview = [
  {
    eyebrow: "Предпроект",
    title: "CAPEX, график, сценарии запуска и технико-производственная оценка.",
    description:
      "Считаем бюджет, критический путь, ограничения участка и сценарии запуска до выхода на площадку.",
    href: "/services/#precon",
  },
  {
    eyebrow: "Генподряд",
    title: "Мастер-график, снабжение, фронты работ и сдача объекта.",
    description:
      "Ведём основной производственный контур и держим один центр принятия решений для заказчика.",
    href: "/services/#delivery",
  },
  {
    eyebrow: "BIM и инженерия",
    title: "Сводная модель, 4D-сценарии и координация решений до монтажа.",
    description:
      "Цифровой контур встроен в производство и снижает риски коллизий, переделок и задержек поставок.",
    href: "/services/#digital",
  },
  {
    eyebrow: "Качество и HSE",
    title: "Контроль дисциплины, операционная приёмка и готовность к handover.",
    description:
      "Качество и безопасность работают как обязательная производственная рутина, а не как формальный отчёт.",
    href: "/services/#quality",
  },
];

const featuredProjects = [
  {
    image: "/assets/projects/project-1.svg",
    year: "2024",
    title: "ЦОД «Север-1»",
    description: "Московская область, 74 000 м², инженерная инфраструктура 24 МВт.",
    href: "/projects/#featured",
  },
  {
    image: "/assets/projects/project-2.svg",
    year: "2023",
    title: "Парк «Волна»",
    description: "Казань, 118 000 м² складов класса А, быстрый ввод двух очередей.",
    href: "/projects/#portfolio",
  },
  {
    image: "/assets/projects/project-3.svg",
    year: "2021",
    title: "Клинический корпус",
    description: "Новосибирск, 63 000 м², объект экстренной помощи со сжатым циклом.",
    href: "/projects/#regions",
  },
];

const workflow = [
  {
    step: "01",
    title: "Запуск и бюджет",
    description: "Проверяем исходные ограничения, считаем CAPEX и строим сценарии графика.",
  },
  {
    step: "02",
    title: "BIM и координация",
    description: "Сводим модель, выдаём коллизии и закрываем технические решения до монтажа.",
  },
  {
    step: "03",
    title: "Производство и площадка",
    description: "Ведём мастер-план, поставки, фронты работ и ежедневный производственный ритм.",
  },
  {
    step: "04",
    title: "Сдача и запуск",
    description: "Подготавливаем испытания, исполнительную документацию и ввод объекта.",
  },
];

export function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-border/70 bg-card">
        <div className="container py-7">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "18", label: "лет на рынке", copy: "Инженерная и производственная экспертиза в fast-track сегментах." },
              { value: "86", label: "объектов завершено", copy: "Логистика, индустрия, медицинские и инженерно сложные здания." },
              { value: "24", label: "региона присутствия", copy: "Федеральная география с локальными производственными контурами." },
              { value: "1 400+", label: "специалистов", copy: "Штатные ядра проекта, BIM, ПТО, HSE и полевые команды." },
            ].map((item, index) => (
              <article
                key={item.label}
                className="border-l border-border/70 pl-5 first:border-l-0 first:pl-0"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="font-mono text-4xl tracking-[-0.06em] text-foreground">{item.value}</div>
                <div className="mt-2 text-xs uppercase tracking-data text-brass">{item.label}</div>
                <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Корпоративная архитектура"
            title="Не лендинг, а вход в полноценную корпоративную структуру с внутренними страницами."
            description="Верхняя навигация ведёт в самостоятельные разделы компании. У каждого раздела есть собственная страница и внутренние точки входа через меню и якоря."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {entryPoints.map((item, index) => (
              <article key={item.title} className="surface-card group" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="space-y-5">
                  <span className="eyebrow text-brass">{item.label}</span>
                  <h3 className="font-head text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">{item.description}</p>
                </div>
                <a
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-data text-foreground transition group-hover:text-primary"
                >
                  Перейти в раздел
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.45fr]">
          <SectionHeading
            eyebrow="Услуги"
            title="Направления бизнеса собраны как единая система реализации объекта."
            description="Предпроект, генподряд, BIM и контур качества поданы как самостоятельные направления, а не как набор рекламных карточек."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {servicePreview.map((item, index) => (
              <article key={item.title} className="surface-card group" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-4">
                  <span className="eyebrow text-brass">{item.eyebrow}</span>
                  <h3 className="font-head text-2xl font-medium tracking-[-0.045em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
                <a
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-data text-foreground transition group-hover:text-primary"
                >
                  Открыть направление
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Выборка проектов"
            title="Последние объекты, которые формируют публичный профиль компании."
            description="Показываем не рендеры, а реальные объекты с типом, масштабом, регионом и статусом ввода."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className="project-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="space-y-4 p-6">
                  <div className="eyebrow text-brass">{project.year}</div>
                  <h3 className="font-head text-3xl font-medium tracking-[-0.05em] text-foreground">{project.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{project.description}</p>
                  <a href={project.href} className="inline-flex items-center gap-2 text-sm uppercase tracking-data text-foreground transition hover:text-primary">
                    Смотреть в проектах
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.25fr]">
          <SectionHeading
            eyebrow="Как мы работаем"
            title="Один контур управления от запуска площадки до исполнительной документации."
            description="Внутри проекта соединяем предпроект, снабжение, ПТО, авторский контроль, безопасность и цифровую координацию."
          />

          <div className="grid gap-4">
            {workflow.map((item, index) => (
              <article
                key={item.step}
                className="surface-card flex gap-5"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="font-mono text-xl tracking-[-0.04em] text-brass">{item.step}</div>
                <div className="space-y-2">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <div className="surface-card-strong grid gap-8 lg:grid-cols-[1.15fr_auto] lg:items-end">
            <div className="space-y-4" data-reveal>
              <p className="eyebrow text-brass-soft">Карьера</p>
              <h2 className="font-head text-[clamp(2.3rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white">
                Нужны монтажники, мастера, сварщики, инженеры ПТО и BIM-координаторы.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/68">
                Если задача была повторить полноценную карьерную архитектуру, вход в неё вынесен на отдельную внутреннюю страницу со своим hero, ролями, условиями и формой отклика.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="w-full sm:w-auto lg:w-full">
                <a href="/careers/labor/">
                  Открыть страницу набора
                </a>
              </Button>
              <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto lg:w-full">
                <a href="/careers/">
                  Вся карьера
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
