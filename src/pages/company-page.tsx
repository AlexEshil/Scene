import { ArrowRight } from "lucide-react";

import { InnerHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Екатерина Мартова",
    role: "Генеральный директор. Отвечает за стратегию портфеля, CAPEX и федеральные контракты.",
  },
  {
    name: "Артём Жданов",
    role: "Директор по производству. Ведёт операционный контур участков, сроки и выработку.",
  },
  {
    name: "Наталья Гурина",
    role: "Директор по инженерии и BIM. Сводит технические решения и цифровой контроль модели.",
  },
];

const sectors = [
  { title: "Логистика", copy: "Склады класса А, распределительные хабы и cold chain." },
  { title: "Промышленность", copy: "Производственные корпуса, энергетика, heavy utilities." },
  { title: "Дата-центры", copy: "ЦОД, инженерные узлы, резервирование и fast-track delivery." },
  { title: "Медицина", copy: "Корпуса экстренной помощи, чистые помещения, инженерные системы." },
];

const timeline = [
  {
    year: "2008",
    title: "Основание компании",
    copy: "Запуск как регионального генподрядчика в индустриальном сегменте.",
  },
  {
    year: "2016",
    title: "BIM-центр",
    copy: "Создано собственное подразделение цифровой координации и технадзора.",
  },
  {
    year: "2024",
    title: "Новый контур ЦОД",
    copy: "Завершены дата-центр и серия логистических объектов в федеральной программе.",
  },
];

export function CompanyPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Компания" }]}
        eyebrow="О компании"
        title="Компания, собранная вокруг реального производственного контура."
        description="Атлас Контур работает с 2008 года и ведёт промышленные, логистические, медицинские и инженерно сложные объекты. Мы строим не только площадки, но и систему управления запуском, координацией и сдачей."
        statValue="86"
        statLabel="завершённых объектов"
        noteTitle="24 региона присутствия"
        noteCopy="Постоянные команды генподряда, ПТО, HSE и инженерного контроля."
      />

      <section className="site-section" id="overview">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.15fr]">
          <SectionHeading
            eyebrow="Обзор"
            title="Внутри одной компании собраны предпроект, производственный блок, BIM и сдача объекта."
          />

          <article className="surface-card space-y-5" data-reveal>
            <p className="text-base leading-8 text-muted-foreground">
              Мы не дробим процесс на отдельные разрозненные команды. Бюджет, календарный график,
              снабжение, полевой менеджмент и цифровая модель работают в одном контуре, поэтому сайт
              тоже разделён по реальным бизнес-направлениям.
            </p>
            <ul className="space-y-3 text-base leading-7 text-foreground">
              <li className="border-t border-border/70 pt-3">Собственный BIM-центр и технико-производственный блок.</li>
              <li className="border-t border-border/70 pt-3">Руководители участков и мастера в штатном ядре проекта.</li>
              <li className="border-t border-border/70 pt-3">Контур HSE и качества на уровне управляющей компании.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface" id="leadership">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Руководство"
            title="Ключевые роли, через которые проходит весь цикл проекта."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {leadership.map((item, index) => (
              <article key={item.name} className="surface-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="space-y-5">
                  <div className="h-px w-16 bg-brass-soft" />
                  <h3 className="font-head text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="sectors">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Сектора"
            title="Объекты, в которых нужен плотный инженерный и производственный контроль."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector, index) => (
              <article key={sector.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-3">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{sector.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{sector.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
          <article className="surface-card-strong space-y-6" data-reveal>
            <p className="eyebrow text-brass-soft">Внутренний принцип компании</p>
            <blockquote className="font-head text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.02] tracking-[-0.05em] text-white">
              «Сайт должен показывать реальную структуру бизнеса: кто мы, как работаем, что строим и куда нанимаем людей».
            </blockquote>
            <p className="text-sm leading-7 text-white/66">
              Этот принцип применяем при запуске новых площадок, новых команд и новых корпоративных
              входов для заказчиков, партнёров и кандидатов.
            </p>
          </article>

          <div className="grid gap-4">
            {timeline.map((item, index) => (
              <article key={item.year} className="surface-card flex gap-5" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="font-mono text-xl tracking-[-0.04em] text-brass">{item.year}</div>
                <div className="space-y-2">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="contact">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.1fr]">
          <SectionHeading
            eyebrow="Контакты"
            title="Центральный офис, региональные группы и быстрый вход для клиента или кандидата."
          />

          <div className="surface-card space-y-5" data-reveal>
            {[
              ["Офис", "Москва, Пресненская набережная, 12"],
              ["Телефон", "+7 (495) 220-48-19"],
              ["E-mail", "hello@atlaskontur.ru"],
              ["Карьера", "career@atlaskontur.ru"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 border-b border-border/70 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
                <strong className="text-sm uppercase tracking-data text-muted-foreground">{label}</strong>
                <span className="max-w-sm text-base leading-7 text-foreground">{value}</span>
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <Button asChild>
                <a href="mailto:hello@atlaskontur.ru">Написать в офис</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/careers/">
                  Карьера
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
