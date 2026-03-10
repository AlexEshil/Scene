import { ArrowRight } from "lucide-react";

import { InquiryForm } from "@/components/shared/inquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const roles = [
  { title: "Монтажники", copy: "Металл, ограждающие конструкции, технологические узлы, вспомогательные системы." },
  { title: "Электромонтажники", copy: "Кабельные трассы, оборудование, сборка щитов и ввод в эксплуатацию." },
  { title: "Сварщики", copy: "Металл, трубные узлы, префаб и ответственные инженерные соединения." },
  { title: "Мастера и геодезисты", copy: "Организация фронтов, контроль качества, разбивка и исполнительная часть." },
];

const benefits = [
  { step: "1", title: "Официальное оформление", copy: "Белая оплата, проживание, проезд и суточные по формату объекта." },
  { step: "2", title: "Понятный маршрут роста", copy: "От рабочего и бригадира до мастера, прораба и начальника участка." },
  { step: "3", title: "Обучение внутри объекта", copy: "Ввод в производственный ритм, HSE, исполнительную и цифровую дисциплину." },
  { step: "4", title: "Переход между объектами", copy: "Сильные специалисты не выпадают из системы после завершения одной площадки." },
];

const locations = [
  { title: "Московская область", copy: "ЦОД и крупный логистический узел. Нужны монтаж, электрика и мастера." },
  { title: "Казань", copy: "Складской парк, фасад, MEP и внутренние инженерные сети." },
  { title: "Екатеринбург", copy: "Промышленная площадка, металл, heavy utilities и геодезия." },
];

export function LaborPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-surface-strong text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,13,15,0.88)_0%,rgba(9,13,15,0.7)_48%,rgba(9,13,15,0.58)_100%)]" />

        <div className="container relative z-10 py-24 sm:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.82fr)] lg:items-end">
            <div className="space-y-7" data-reveal>
              <nav className="flex flex-wrap items-center gap-2 text-sm text-white/56">
                <a href="/" className="transition hover:text-white">Главная</a>
                <span>/</span>
                <a href="/careers/" className="transition hover:text-white">Карьера</a>
                <span>/</span>
                <span>Рабочие специальности</span>
              </nav>
              <div className="max-w-3xl space-y-5">
                <p className="eyebrow text-white/68">Полевые и рабочие специальности</p>
                <h1 className="font-head text-[clamp(2.8rem,6vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white">
                  Нужны люди, которые умеют строить результат руками и держать темп площадки.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/72">
                  Это отдельная внутренняя страница набора, а не секция на главной. Здесь собраны роли,
                  условия, локации и форма отклика именно под field-команду.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#apply">
                    Откликнуться
                  </a>
                </Button>
                <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto">
                  <a href="#roles">
                    Смотреть роли
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <aside className="grid gap-4" data-reveal style={{ transitionDelay: "120ms" }}>
              <div className="rounded-lg border border-white/12 bg-white/6 p-6 backdrop-blur-md">
                <div className="font-mono text-[clamp(3rem,8vw,4.8rem)] leading-none tracking-[-0.06em] text-brass-soft">1 400+</div>
                <div className="mt-3 text-sm uppercase tracking-data text-white/58">специалистов в контуре</div>
              </div>
              <div className="rounded-lg border border-white/12 bg-[rgba(13,17,20,0.76)] p-6">
                <div className="space-y-5">
                  {[
                    { title: "Монтаж и электрика", copy: "Ключевой поток найма по действующим объектам 2026 года." },
                    { title: "Мастера и геодезия", copy: "Нужны люди, которые могут держать участок и исполнительную дисциплину." },
                    { title: "Вахта и локальные команды", copy: "Форматы подбираются по объекту и стадии строительства." },
                  ].map((item) => (
                    <article key={item.title} className="space-y-2 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <strong className="block font-head text-xl font-medium tracking-[-0.03em] text-white">{item.title}</strong>
                      <p className="text-sm leading-6 text-white/68">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="site-section" id="roles">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Роли"
            title="Позиции, под которые реально идёт набор в полевой контур."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roles.map((role, index) => (
              <article key={role.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="space-y-3">
                  <h3 className="font-head text-2xl font-medium tracking-[-0.04em] text-foreground">{role.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{role.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Что даём"
            title="Нормальные ответы на вопросы, которые кандидат задаёт сразу."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => (
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

      <section className="site-section">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Локации"
            title="Объекты, где сейчас формируются или усиливаются бригады."
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
        </div>
      </section>

      <section className="site-section border-t border-border/70 bg-surface" id="apply">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.08fr]">
          <SectionHeading
            eyebrow="Отклик"
            title="Форма для рабочего найма вынесена на отдельную страницу, как и должно быть."
            description="Оставь имя, роль и удобный способ связи. Кадровый блок отвечает в течение рабочего дня."
          />

          <div data-reveal>
            <InquiryForm
              successMessage="Мы получили отклик и вернёмся с ответом в течение рабочего дня."
              submitLabel="Отправить отклик"
              fields={[
                { id: "labor-name", name: "name", label: "Имя", placeholder: "Как к вам обращаться", required: true },
                { id: "labor-role", name: "role", label: "Специальность", placeholder: "Например, электромонтажник", required: true },
                { id: "labor-phone", name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__", required: true },
                { id: "labor-city", name: "city", label: "Город", placeholder: "Москва / Казань / Екатеринбург" },
                { id: "labor-message", name: "message", label: "Комментарий", placeholder: "Опыт, желаемый объект, формат работы", rows: 5, full: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
