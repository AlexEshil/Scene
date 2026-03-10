import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type InnerHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
  noteTitle: string;
  noteCopy: string;
  className?: string;
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-surface-strong text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.42] saturate-[0.62]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,16,0.92)_0%,rgba(10,13,16,0.78)_46%,rgba(10,13,16,0.72)_100%)]" />

      <div className="container relative z-10 py-24 sm:py-28 lg:py-30">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.32fr)_minmax(320px,0.75fr)] lg:items-end">
          <div className="max-w-3xl space-y-8" data-reveal>
            <div className="space-y-4">
              <p className="eyebrow text-white/62">Российская строительная группа полного цикла</p>
              <h1 className="font-head text-[clamp(3.2rem,8.2vw,6.9rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white">
                Атлас Контур
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70 md:text-[1.15rem]">
                Генподряд, промышленное строительство, логистика, ЦОД и медицинская инфраструктура.
                Работаем от предпроекта до ввода в эксплуатацию и держим единый контур управления между
                офисом, BIM и площадкой.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="/projects/">
                  Смотреть проекты
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto">
                <a href="/careers/labor/">
                  Полевые профессии
                </a>
              </Button>
            </div>

            <div className="grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
              {[
                { value: "18", label: "лет на рынке" },
                { value: "86", label: "завершённых объектов" },
                { value: "24", label: "региона работ" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="font-mono text-2xl tracking-[-0.04em] text-brass-soft">{item.value}</div>
                  <div className="text-sm uppercase tracking-data text-white/54">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4" data-reveal style={{ transitionDelay: "120ms" }}>
            <div className="rounded-lg border border-white/8 bg-[rgba(13,17,20,0.72)] p-6">
              <div className="text-sm uppercase tracking-data text-white/48">Операционный профиль</div>
              <div className="mt-6 font-mono text-6xl leading-none tracking-[-0.06em] text-brass-soft">18</div>
              <div className="mt-2 text-sm uppercase tracking-data text-white/54">лет на рынке</div>
            </div>
            <div className="rounded-lg border border-white/8 bg-[rgba(12,16,19,0.88)] p-6">
              <div className="space-y-5">
                {[
                  {
                    title: "4,3 млн м²",
                    copy: "введённых площадей логистики, индустрии и инженерных объектов.",
                  },
                  {
                    title: "1 400+",
                    copy: "рабочих, мастеров, инженеров ПТО, BIM и производственных специалистов.",
                  },
                  {
                    title: "2024",
                    copy: "введён ЦОД «Север-1» и завершён пакет региональных логистических хабов.",
                  },
                ].map((item) => (
                  <article key={item.title} className="space-y-2 border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                    <strong className="block font-head text-xl font-medium tracking-[-0.03em] text-white">{item.title}</strong>
                    <p className="text-sm leading-6 text-white/60">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function InnerHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  statValue,
  statLabel,
  noteTitle,
  noteCopy,
  className,
}: InnerHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-white/8 bg-surface-strong text-white", className)}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.05), transparent 38%), url('/assets/hero-poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,16,0.88)_0%,rgba(11,15,18,0.94)_100%)]" />

      <div className="container relative z-10 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="space-y-7" data-reveal>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-white/52">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.href ? (
                    <a className="transition hover:text-white" href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </span>
              ))}
            </nav>
            <div className="max-w-3xl space-y-5">
              <p className="eyebrow text-white/62">{eyebrow}</p>
              <h1 className="font-head text-[clamp(2.7rem,5.6vw,4.95rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white">
                {title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68">{description}</p>
            </div>
          </div>

          <aside className="grid gap-4" data-reveal style={{ transitionDelay: "120ms" }}>
            <div className="rounded-lg border border-white/8 bg-[rgba(13,17,20,0.72)] p-6">
              <div className="font-mono text-[clamp(3rem,8vw,4.8rem)] leading-none tracking-[-0.06em] text-brass-soft">{statValue}</div>
              <div className="mt-3 text-sm uppercase tracking-data text-white/52">{statLabel}</div>
            </div>
            <div className="rounded-lg border border-white/8 bg-[rgba(12,16,19,0.88)] p-6">
              <strong className="block font-head text-xl font-medium tracking-[-0.03em] text-white">{noteTitle}</strong>
              <p className="mt-3 text-sm leading-6 text-white/60">{noteCopy}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
