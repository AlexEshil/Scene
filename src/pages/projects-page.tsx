import { MapPin } from "lucide-react";

import { InnerHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";

const featuredProjects = [
  {
    image: "/assets/projects/project-1.svg",
    year: "2024",
    title: "ЦОД «Север-1»",
    type: "Дата-центр",
    region: "Московская область",
    copy: "74 000 м², инженерная инфраструктура 24 МВт, fast-track delivery.",
  },
  {
    image: "/assets/projects/project-2.svg",
    year: "2023",
    title: "Логистический парк «Волна»",
    type: "Логистика",
    region: "Казань",
    copy: "118 000 м², два этапа ввода, складская и транспортная инфраструктура.",
  },
  {
    image: "/assets/projects/project-3.svg",
    year: "2021",
    title: "Клинический корпус",
    type: "Медицина",
    region: "Новосибирск",
    copy: "Объект здравоохранения со сжатым графиком и инженерно насыщенной начинкой.",
  },
];

const portfolio = [
  { title: "Логистические парки", copy: "Склады класса А, хабы, cross-dock, температурные зоны." },
  { title: "Производственные корпуса", copy: "Энергетика, heavy utilities, технологические линии и корпуса." },
  { title: "Дата-центры", copy: "Shell & core, MEP, резервирование, инженерная готовность к запуску." },
  { title: "Медицина", copy: "Экстренная помощь, диагностические корпуса, специализированные помещения." },
];

const regions = [
  { title: "Москва и область", copy: "ЦОД, логистика, штабные функции, инженерный контроль." },
  { title: "Казань", copy: "Логистика, производственные площадки и промышленный парк." },
  { title: "Екатеринбург", copy: "Префаб, металл, производственные корпуса и heavy industrial." },
];

const metrics = [
  { value: "86", label: "завершённых объектов" },
  { value: "11 мес", label: "быстрейший цикл ввода" },
  { value: "7", label: "объектов в работе одновременно" },
  { value: "2026", label: "текущий горизонт портфеля" },
];

export function ProjectsPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Проекты" }]}
        eyebrow="Проекты"
        title="Показываем не рендеры, а типы объектов, которые реально умеем доводить до запуска."
        description="Внутри раздела выделены флагманские объекты, отрасли, география присутствия и производственные показатели."
        statValue="4,3"
        statLabel="млн м² введено"
        noteTitle="24 региона"
        noteCopy="Собственные и партнёрские контуры в ключевых точках присутствия заказчиков."
      />

      <section className="site-section" id="featured">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Знаковые объекты"
            title="Три проекта, которые лучше всего показывают масштаб и тип нашей работы."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className="project-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-brass">{project.year}</span>
                    <span className="rounded-md border border-border bg-surface px-3 py-1 text-xs uppercase tracking-data text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-head text-3xl font-medium tracking-[-0.05em] text-foreground">{project.title}</h3>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-brass" />
                      {project.region}
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">{project.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface" id="portfolio">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Портфель"
            title="Сегменты, в которых компания накопила повторяемую экспертизу."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {portfolio.map((item, index) => (
              <article key={item.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-3">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="regions">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.1fr]">
          <SectionHeading
            eyebrow="География"
            title="Точки, где уже есть производственный ритм и команды запуска."
          />

          <div className="grid gap-5">
            {regions.map((region, index) => (
              <article key={region.title} className="surface-card flex gap-5" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" />
                <div className="space-y-2">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{region.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{region.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card" id="delivery-metrics">
        <div className="container space-y-10">
          <SectionHeading
            eyebrow="Показатели"
            title="Производственные метрики, которые важно показывать в разделе проектов."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <article key={metric.label} className="surface-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="metric-value text-foreground">{metric.value}</div>
                <div className="mt-3 text-xs uppercase tracking-data text-brass">{metric.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
