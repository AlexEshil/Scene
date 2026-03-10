import { ChevronDown, ChevronRight, Menu, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getActiveSection, navigation } from "@/content/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  pathname: string;
};

export function SiteHeader({ pathname }: SiteHeaderProps) {
  const [openMenuKey, setOpenMenuKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedKeys, setMobileExpandedKeys] = useState<string[]>([]);
  const activeSection = getActiveSection(pathname);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setOpenMenuKey(null);
    setMobileOpen(false);
    setMobileExpandedKeys([]);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!openMenuKey || !headerRef.current) {
        return;
      }

      const target = event.target;
      if (target instanceof Node && !headerRef.current.contains(target)) {
        setOpenMenuKey(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenuKey(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenuKey]);

  function toggleDesktopMenu(key: string) {
    setOpenMenuKey((current) => (current === key ? null : key));
  }

  function closeDesktopMenu() {
    setOpenMenuKey(null);
  }

  function toggleMobileSection(key: string) {
    setMobileExpandedKeys((current) =>
      current.includes(key) ? current.filter((entry) => entry !== key) : [...current, key],
    );
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(12,16,19,0.94)] text-white backdrop-blur-md"
    >
      <div className="container relative">
        <div className="flex min-h-[86px] items-center gap-6">
          <a href="/" className="group flex min-w-0 items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
              <img src="/assets/logo-mark.svg" alt="" className="h-6 w-6" />
            </span>
            <span className="min-w-0">
              <strong className="block font-head text-xl font-medium tracking-[-0.045em] text-white">Атлас Контур</strong>
              <span className="block text-[11px] uppercase tracking-data text-white/42">Группа полного цикла</span>
            </span>
          </a>

          <nav className="relative hidden flex-1 lg:block" aria-label="Основная навигация">
            <div className="flex items-center justify-center gap-1.5">
              {navigation.map((item) => {
                const isActive = activeSection === item.key;
                const isOpen = openMenuKey === item.key;
                return (
                  <div key={item.key} className="relative">
                    <button
                      id={`desktop-trigger-${item.key}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`desktop-panel-${item.key}`}
                      aria-haspopup="true"
                      onClick={() => toggleDesktopMenu(item.key)}
                      className={cn(
                        "relative inline-flex min-h-12 items-center gap-2 rounded-md px-4 py-3 font-head text-[15px] font-medium tracking-[-0.02em] text-white/72 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15",
                        isActive && "text-white",
                        isOpen && "bg-white/[0.04] text-white",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 text-white/42 transition-transform duration-200", isOpen && "rotate-180 text-brass-soft")}
                      />
                      <span
                        className={cn(
                          "absolute inset-x-4 bottom-[9px] h-px origin-left bg-brass-soft transition-transform duration-200",
                          isActive || isOpen ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="ml-auto hidden lg:block">
            <Button asChild variant="inverse">
              <a href="/company/#contact">Связаться</a>
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:border-white/18 hover:bg-white/[0.08] lg:hidden"
                aria-label="Открыть меню"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto p-6">
              <SheetTitle className="sr-only">Основное меню</SheetTitle>
              <SheetDescription className="sr-only">
                Полноэкранная мобильная навигация по разделам компании, услугам, проектам и карьере.
              </SheetDescription>
              <div className="mt-14 space-y-10">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-data text-white/45">Навигация</div>
                  <div className="space-y-4">
                    {navigation.map((item) => {
                      const isExpanded = mobileExpandedKeys.includes(item.key);
                      return (
                        <div key={item.key} className="border-b border-white/10 pb-4">
                          <button
                            type="button"
                            className="flex min-h-[52px] w-full items-start justify-between gap-4 rounded-md py-2 text-left"
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-panel-${item.key}`}
                            onClick={() => toggleMobileSection(item.key)}
                          >
                            <span className="space-y-2">
                              <span className="block font-head text-[clamp(1.45rem,6vw,2.15rem)] leading-none tracking-[-0.05em] text-white">
                                {item.label}
                              </span>
                              <span className="block max-w-xs text-sm leading-6 text-white/52">{item.description}</span>
                            </span>
                            <ChevronDown
                              className={cn("mt-1 h-5 w-5 shrink-0 text-white/42 transition-transform duration-200", isExpanded && "rotate-180 text-brass-soft")}
                            />
                          </button>

                          {isExpanded ? (
                            <div id={`mobile-panel-${item.key}`} className="space-y-2 pb-1 pl-1 pt-2">
                              <SheetClose asChild>
                                <a
                                  href={item.href}
                                  className="flex min-h-11 items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/84 transition hover:border-white/18 hover:bg-white/[0.06]"
                                >
                                  <span>Открыть раздел</span>
                                  <MoveRight className="h-4 w-4 text-brass-soft" />
                                </a>
                              </SheetClose>
                              {item.children.map((child) => (
                                <SheetClose asChild key={child.href}>
                                  <a
                                    href={child.href}
                                    className="block rounded-md px-4 py-3 text-sm leading-6 text-white/62 transition hover:bg-white/[0.04] hover:text-white"
                                  >
                                    {child.label}
                                  </a>
                                </SheetClose>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-xs uppercase tracking-data text-white/45">Контакты</div>
                  <div className="space-y-2 text-sm leading-6 text-white/76">
                    <p>Москва · Екатеринбург · Казань</p>
                    <a href="tel:+74952204819" className="block transition hover:text-brass-soft">+7 (495) 220-48-19</a>
                    <a href="mailto:hello@atlaskontur.ru" className="block transition hover:text-brass-soft">hello@atlaskontur.ru</a>
                  </div>
                  <SheetClose asChild>
                    <a href="/company/#contact" className={cn(buttonVariants({ variant: "default" }), "mt-2 w-full")}>
                      Связаться
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-full hidden border-t border-white/10 opacity-0 transition duration-150 lg:block",
            openMenuKey && "pointer-events-auto opacity-100",
          )}
        >
          <div className="container py-4">
            {navigation.map((item) => {
              if (item.key !== openMenuKey) {
                return null;
              }

              return (
                <div
                  key={item.key}
                  id={`desktop-panel-${item.key}`}
                  role="region"
                  aria-labelledby={`desktop-trigger-${item.key}`}
                  className="overflow-hidden rounded-md border border-white/10 bg-[rgba(12,16,19,0.98)] shadow-panel"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.86fr_1.5fr]">
                    <div className="space-y-5 border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:pr-7">
                      <div className="text-xs uppercase tracking-data text-brass-soft">Раздел</div>
                      <div className="space-y-3">
                        <h3 className="font-head text-[2rem] font-medium tracking-[-0.05em] text-white">{item.label}</h3>
                        <p className="max-w-sm text-sm leading-7 text-white/58">{item.description}</p>
                      </div>
                      <a
                        href={item.href}
                        onClick={closeDesktopMenu}
                        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-white/84 transition hover:border-white/20 hover:bg-white/[0.04]"
                      >
                        Открыть раздел
                        <MoveRight className="h-4 w-4 text-brass-soft" />
                      </a>
                    </div>
                    <div className="grid gap-0 md:grid-cols-2">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={closeDesktopMenu}
                          className="group flex min-h-[118px] flex-col justify-between border-b border-white/10 p-6 transition last:border-b-0 md:border-b-0 md:border-l md:border-white/10 hover:bg-white/[0.035]"
                        >
                          <div className="space-y-2">
                            <div className="font-head text-xl font-medium tracking-[-0.03em] text-white">{child.label}</div>
                            <p className="max-w-sm text-sm leading-6 text-white/54">{child.description}</p>
                          </div>
                          <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-data text-white/48 transition group-hover:text-brass-soft">
                            Подробнее
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
