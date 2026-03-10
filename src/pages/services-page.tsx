import { ArrowRight } from "lucide-react";

import { InnerHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";

const serviceSections = [
  {
    id: "precon",
    eyebrow: "Предпроект",
    title: "Фаза, на которой считаются бюджет, риски, график и сценарии запуска.",
    description:
      "Сильная предпроектная стадия позволяет удерживать CAPEX и темп работ ещё до мобилизации площадки.",
    items: [
      { title: "CAPEX-модель", copy: "Считаем стоимость, сценарии закупок, альтернативы по конструктиву и инжинирингу." },
      { title: "Фазирование", copy: "Разбиваем запуск на очереди и определяем критический путь ещё до выхода на площадку." },
      { title: "Технический due diligence", copy: "Проверяем ограничения участка, инженерии, логистики и разрешительной части." },
    ],
  },
  {
    id: "delivery",
    eyebrow: "Генподряд",
    title: "Основной производственный контур: договоры, фронты работ, снабжение, сдача.",
    description:
      "Заказчик получает одну управляемую структуру, которая синхронизирует график, поставки, полевой контур и handover.",
    items: [
      { title: "Планирование", copy: "Мастер-график, недельные циклы, лимиты ресурсов и координация участков." },
      { title: "Снабжение", copy: "Встроенный контур поставок по критическим материалам и инженерным системам." },
      { title: "Полевой менеджмент", copy: "Начальник участка, мастера, геодезия, ПТО и производственный контроль." },
      { title: "Сдача", copy: "Испытания, исполнительная документация, ввод в эксплуатацию и handover." },
    ],
  },
  {
    id: "digital",
    eyebrow: "BIM и инженерия",
    title: "Сводим модель, коллизии и инженерные решения до монтажа.",
    description:
      "Цифровой контур встроен в производство, а не работает отдельно от участка.",
    items: [
      { title: "Сводная модель", copy: "Архитектура, конструкции, ОВ, ВК, ЭОМ и специальные системы." },
      { title: "4D-сценарии", copy: "Увязываем график, фронты и критические узлы в цифровой среде." },
      { title: "Авторский контроль", copy: "Поддерживаем выпуск решений и изменений без провала в производстве." },
    ],
  },
  {
    id: "quality",
    eyebrow: "Качество и HSE",
    title: "Контроль качества встроен в производственную рутину каждого объекта.",
    description:
      "Контроль дисциплины, качества и готовности к сдаче работает как часть повседневного операционного ритма.",
    items: [
      { title: "Входной контроль", copy: "Проверка материалов, паспортов и исполнительных схем." },
      { title: "Пооперационная приёмка", copy: "Узел закрывается только после фактического подтверждения качества." },
      { title: "HSE-контур", copy: "Ежедневные обходы, наряды-допуски, производственная дисциплина." },
      { title: "Готовность к сдаче", copy: "Испытания, документация, цифровой архив и handover-пакет." },
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
        eyebrow="Услуги"
        title="Ведём объект как один управляемый производственный процесс."
        description="Сайт делит услуги на реальные этапы проекта: предпроект, исполнение, цифровой контур, качество и безопасность."
        statValue="4"
        statLabel="ядра компетенций"
        noteTitle="Fast-track delivery"
        noteCopy="Отдельный контур запускаем для объектов со сжатым графиком и высокой инженерной нагрузкой."
      />

      <section className="site-section">
        <div className="container grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-lg border border-border/70 bg-card p-6 shadow-soft">
              <div className="text-xs uppercase tracking-data text-muted-foreground">Навигация по услугам</div>
              <div className="mt-6 space-y-3">
                {serviceSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-l border-border pl-4 text-sm leading-6 text-muted-foreground transition hover:border-primary hover:text-foreground"
                  >
                    <span className="block font-head text-lg font-medium tracking-[-0.03em] text-foreground">
                      {section.eyebrow}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            {serviceSections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-8">
                <SectionHeading
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.description}
                />

                <div className={`grid gap-5 ${section.items.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
                  {section.items.map((item, index) => (
                    <article
                      key={item.title}
                      className="surface-card"
                      data-reveal
                      style={{ transitionDelay: `${sectionIndex * 60 + index * 80}ms` }}
                    >
                      <div className="space-y-3">
                        <div className="h-px w-12 bg-brass-soft" />
                        <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                        <p className="text-sm leading-7 text-muted-foreground">{item.copy}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-border/70 bg-surface">
        <div className="container">
          <div className="surface-card-strong grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow text-brass-soft">Синхронизация</p>
              <h2 className="font-head text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
                Предпроект, генподряд, BIM и HSE работают в одном управленческом контуре.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/68">
                Именно поэтому услуги поданы как системные направления бизнеса, а не как визуальный перечень без операционной логики.
              </p>
            </div>
            <a href="/projects/" className="self-start lg:self-end">
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-data text-white transition hover:text-brass-soft">
                Смотреть, как это реализовано в проектах
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
