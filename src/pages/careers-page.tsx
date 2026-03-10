import { ArrowRight } from "lucide-react";

import { InnerHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const directions = [
  {
    label: "Площадка",
    title: "Рабочие специальности",
    copy: "Монтажники, электромонтажники, сварщики, мастера, геодезисты и производители работ.",
    href: "/careers/labor/",
  },
  {
    label: "Офис и инжиниринг",
    title: "Инженеры и управленцы",
    copy: "BIM, ПТО, снабжение, HSE, планирование, авторский контроль и административные функции.",
    href: "#benefits",
  },
];

const benefits = [
  { title: "Белая оплата", copy: "Официальное оформление, северные и вахтовые коэффициенты, суточные по объектам." },
  { title: "Рост до мастера", copy: "Маршрут от бригадира до начальника участка внутри одной структуры." },
  { title: "Обучение", copy: "Ввод в процессы объекта, BIM-контур, HSE и исполнительную документацию." },
  { title: "Стабильный портфель", copy: "Ротация между объектами без провала в загрузке при завершении проекта." },
];

const team = [
  {
    image: "/assets/portraits/worker-1.png",
    role: "BIM",
    name: "Светлана Ермакова",
    copy: "Координирует цифровую модель и выпуск чертежей в производство.",
  },
  {
    image: "/assets/portraits/worker-2.png",
    role: "Участок",
    name: "Илья Дёмин",
    copy: "Руководитель участка, отвечает за темп, фронты и дисциплину работ.",
  },
  {
    image: "/assets/portraits/worker-4.png",
    role: "ПТО",
    name: "Марина Соколова",
    copy: "Закрывает исполнительную документацию и сдачу объекта по пакету.",
  },
];

const locations = [
  { title: "Москва", copy: "Дата-центры, логистика, ПТО, BIM, снабжение и участок." },
  { title: "Казань", copy: "Монтаж, электротехника, мастера, производственный контроль." },
  { title: "Екатеринбург", copy: "Префаб, металл, промышленный сектор и heavy utilities." },
];

export function CareersPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Карьера" }]}
        eyebrow="Карьера"
        title="Раздел карьеры разделён по маршрутам найма, а не спрятан в один экран."
        description="Отдельно показываем полевые профессии, инженерные роли и географию набора, чтобы пользователь сразу попадал в нужный вход."
        statValue="120+"
        statLabel="открытых ролей по году"
        noteTitle="4 города набора"
        noteCopy="Москва, Казань, Екатеринбург, Новосибирск плюс вахтовые контуры по объектам."
      />

      <section className="site-section" id="directions">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Направления"
            title="Два явных маршрута входа: полевая команда и инженерно-офисный контур."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {directions.map((item, index) => (
              <article key={item.title} className="surface-card group" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="space-y-5">
                  <span className="eyebrow text-brass">{item.label}</span>
                  <h3 className="font-head text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">{item.copy}</p>
                </div>
                <a href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-data text-foreground transition group-hover:text-primary">
                  Открыть маршрут
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface" id="benefits">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Почему к нам"
            title="Нормальный карьерный блок должен отвечать на базовые вопросы кандидата заранее."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => (
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

      <section className="site-section">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Команда"
            title="Люди, через которых читается масштаб и тип компании."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="project-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="project-media aspect-[4/4.4]">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="space-y-4 p-6">
                  <span className="eyebrow text-brass">{member.role}</span>
                  <h3 className="font-head text-3xl font-medium tracking-[-0.05em] text-foreground">{member.name}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{member.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-border/70 bg-surface" id="locations">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Локации"
            title="Где сейчас формируются команды и какие роли востребованы."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {locations.map((item, index) => (
              <article key={item.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-3">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="surface-card-strong grid gap-6 lg:grid-cols-[1.05fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow text-brass-soft">Полевой набор</p>
              <h2 className="font-head text-[clamp(2rem,3vw,3rem)] font-medium leading-[1] tracking-[-0.05em] text-white">
                Для рабочих специальностей есть отдельный маршрут с собственным hero, ролями и формой отклика.
              </h2>
            </div>
            <Button asChild size="lg">
              <a href="/careers/labor/">Открыть labor page</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
