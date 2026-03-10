import { InnerHero } from "@/components/shared/hero";
import { InquiryForm } from "@/components/shared/inquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";

const requirements = [
  { title: "Кадровый состав", copy: "Подтверждение мастеров, ключевых специалистов и реальной численности бригад." },
  { title: "HSE-дисциплина", copy: "Журналы, допуски, обучение и готовность работать по нашему контуру безопасности." },
  { title: "Финансовая устойчивость", copy: "Обороты, отсутствие критичных стоп-факторов и понятная договорная база." },
  { title: "Релевантный опыт", copy: "Объекты сопоставимого типа, объёма и сложности за последние три года." },
];

const packages = [
  { title: "Металл и монтаж", copy: "Каркасы, вторичный металл, монтажные пакеты и узлы префабрикации." },
  { title: "Инженерные системы", copy: "ОВ, ВК, ЭОМ, слаботочные и специализированные инженерные решения." },
  { title: "Фасады и ограждающие конструкции", copy: "Сложные оболочки, подсистемы, монтаж и герметизация." },
];

const stages = [
  { step: "1", title: "Подача заявки", copy: "Короткая анкета, контакты и перечень релевантных работ." },
  { step: "2", title: "Проверка", copy: "Документы, HSE, финансы и кадровый состав." },
  { step: "3", title: "Техническая оценка", copy: "Команда объекта проверяет реальный fit под пакет работ." },
  { step: "4", title: "Вход в пул", copy: "Подписание рамки и переход к рабочим тендерам." },
];

export function SubcontractorsPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Субподрядчикам" }]}
        eyebrow="Субподрядчикам"
        title="Отдельная страница входа для подрядчиков, а не ссылка-пустышка в шапке."
        description="Здесь есть требования, пакеты работ, этапы предквалификации и форма подачи. Это исправляет главный провал одностраничного варианта."
        statValue="7 дней"
        statLabel="средний цикл предквалификации"
        noteTitle="Проверяем заранее"
        noteCopy="HSE, кадры, обороты, релевантный опыт и производственную дисциплину."
      />

      <section className="site-section">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Требования"
            title="Что подрядчик должен подтвердить до входа в пул."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {requirements.map((item, index) => (
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

      <section className="site-section border-y border-border/70 bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.15fr]">
          <SectionHeading
            eyebrow="Пакеты работ"
            title="Какие направления чаще всего выводим в партнёрский контур."
          />
          <div className="grid gap-5">
            {packages.map((item, index) => (
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
            eyebrow="Этапы входа"
            title="Подрядчику сразу понятно, как он проходит путь до допуска к объекту."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stages.map((item, index) => (
              <article key={item.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-4">
                  <div className="font-mono text-2xl tracking-[-0.05em] text-brass">{item.step}</div>
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-border/70 bg-surface" id="request">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.08fr]">
          <SectionHeading
            eyebrow="Заявка"
            title="Форма под субподряд, чтобы кнопка в шапке вела в реальное действие."
            description="Оставьте компанию, контакт и тип работ. Отдел предквалификации отвечает в течение недели."
          />

          <div data-reveal>
            <InquiryForm
              successMessage="Заявка на предквалификацию принята, отдел партнёрств свяжется с вами в течение 7 рабочих дней."
              submitLabel="Подать заявку"
              fields={[
                { id: "sub-name", name: "name", label: "Контактное лицо", placeholder: "Имя и должность", required: true },
                { id: "sub-company", name: "company", label: "Компания", placeholder: "Название компании", required: true },
                { id: "sub-email", name: "email", label: "E-mail", type: "email", placeholder: "mail@company.ru", required: true },
                { id: "sub-scope", name: "scope", label: "Тип работ", placeholder: "ОВ / ВК / ЭОМ / металл / фасады", required: true },
                { id: "sub-message", name: "message", label: "Комментарий", placeholder: "Опыт, регионы, объём команды, ключевые объекты", rows: 5, full: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
