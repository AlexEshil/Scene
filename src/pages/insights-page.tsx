import { ArrowRight } from "lucide-react";

import { InnerHero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "Февраль 2026",
    title: "Открыт монтаж инженерных систем на третьей очереди логистического узла в Казани",
    copy: "Команда перевела объект в фазу активного MEP-монтажа и запуска фасадного контура.",
  },
  {
    date: "Январь 2026",
    title: "Назначен руководитель цифровой координации по медицинским объектам",
    copy: "Компания усилила блок BIM и инженерного контроля в сегменте здравоохранения.",
  },
  {
    date: "Декабрь 2025",
    title: "Сдан пакет инфраструктурных работ для дата-центра «Север-1»",
    copy: "Фаза ввода завершена с подтверждённой исполнительной документацией и испытаниями.",
  },
];

const articles = [
  {
    title: "Как ускорить ввод логистического комплекса",
    copy: "О синхронизации генподряда, фасада, MEP и поставок long-lead equipment.",
  },
  {
    title: "Зачем стройке BIM не ради картинок",
    copy: "О том, как модель влияет на коллизии, закупки и рабочую документацию.",
  },
  {
    title: "Почему HSE должно быть частью графика",
    copy: "О производственной дисциплине, а не только о формальном контроле.",
  },
];

const reports = [
  { title: "Логистика 2026", copy: "Скорость запуска складов, дефицит инженерных подрядчиков и требования арендаторов." },
  { title: "ЦОД и энергомощности", copy: "Точки риска по резервированию, сетям, охлаждению и выходу на мощность." },
  { title: "Медицинские корпуса", copy: "Где чаще всего ломается график и как его удерживать при насыщенной инженерии." },
];

export function InsightsPage() {
  return (
    <>
      <InnerHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Новости и аналитика" }]}
        eyebrow="Новости и аналитика"
        title="Раздел, в котором компания говорит не только о себе, но и о рынке."
        description="Здесь собраны новости по объектам, технологические обзоры и материалы для прессы, чтобы сайт выглядел как полноценная корпоративная система, а не как набор экранов."
        statValue="2"
        statLabel="новые публикации в месяц"
        noteTitle="Экспертный контур"
        noteCopy="Материалы готовят инженеры, производственники и команда цифрового проектирования."
      />

      <section className="site-section" id="news">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Новости"
            title="Короткие обновления по объектам, кадрам и производственным событиям."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {news.map((item, index) => (
              <article key={item.title} className="surface-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="space-y-4">
                  <time className="eyebrow text-brass">{item.date}</time>
                  <h3 className="font-head text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-surface" id="articles">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.15fr]">
          <SectionHeading
            eyebrow="Статьи"
            title="Экспертные материалы, которые поддерживают образ реальной инженерной компании."
          />
          <div className="grid gap-5">
            {articles.map((item, index) => (
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

      <section className="site-section" id="reports">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Отчёты"
            title="Обзоры сегментов, где компания хочет выглядеть компетентным игроком."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {reports.map((item, index) => (
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

      <section className="site-section border-t border-border/70 bg-surface" id="press">
        <div className="container">
          <div className="surface-card-strong grid gap-8 lg:grid-cols-[1.08fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow text-brass-soft">Пресс-кит</p>
              <h2 className="font-head text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
                Для СМИ и отраслевых медиа есть отдельная точка входа, а не случайные контакты в футере.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/68">
                Пресс-служба, комментарии по рынку, материалы об объектах и короткие справки по компании.
              </p>
            </div>
            <Button asChild size="lg">
              <a href="mailto:press@atlaskontur.ru">
                press@atlaskontur.ru
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
