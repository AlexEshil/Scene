import { getRouteMeta } from "@/content/site";

type SiteFooterProps = {
  pathname: string;
};

export function SiteFooter({ pathname }: SiteFooterProps) {
  const meta = getRouteMeta(pathname);

  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.85fr_0.85fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="eyebrow">Атлас Контур</p>
              <h2 className="font-head text-3xl font-medium tracking-[-0.05em] text-foreground">Строительная группа полного цикла</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Российская строительная группа полного цикла для логистики, промышленности, ЦОД, медицины и инженерно сложных объектов.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm uppercase tracking-data text-muted-foreground">Разделы</div>
            <ul className="space-y-3 text-sm leading-6 text-foreground">
              <li><a className="transition hover:text-primary" href="/company/">Компания</a></li>
              <li><a className="transition hover:text-primary" href="/services/">Услуги</a></li>
              <li><a className="transition hover:text-primary" href="/projects/">Проекты</a></li>
              <li><a className="transition hover:text-primary" href="/insights/">Новости и аналитика</a></li>
              <li><a className="transition hover:text-primary" href="/careers/">Карьера</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-sm uppercase tracking-data text-muted-foreground">Контакты</div>
            <ul className="space-y-3 text-sm leading-6 text-foreground">
              <li><a className="transition hover:text-primary" href="tel:+74952204819">+7 (495) 220-48-19</a></li>
              <li><a className="transition hover:text-primary" href="mailto:hello@atlaskontur.ru">hello@atlaskontur.ru</a></li>
              <li><a className="transition hover:text-primary" href="mailto:career@atlaskontur.ru">career@atlaskontur.ru</a></li>
              <li>Москва, Пресненская набережная, 12</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>© 2008–2026 Атлас Контур.</p>
          <p>{meta.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
