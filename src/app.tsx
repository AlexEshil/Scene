import { useEffect, useMemo } from "react";

import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { getRouteMeta, normalizePath } from "@/content/site";
import { CareersPage } from "@/pages/careers-page";
import { CompanyPage } from "@/pages/company-page";
import { HomePage } from "@/pages/home-page";
import { InsightsPage } from "@/pages/insights-page";
import { LaborPage } from "@/pages/labor-page";
import { ProjectsPage } from "@/pages/projects-page";
import { ServicesPage } from "@/pages/services-page";
import { SubcontractorsPage } from "@/pages/subcontractors-page";

const pages: Record<string, () => JSX.Element> = {
  "/": HomePage,
  "/company/": CompanyPage,
  "/services/": ServicesPage,
  "/projects/": ProjectsPage,
  "/insights/": InsightsPage,
  "/careers/": CareersPage,
  "/careers/labor/": LaborPage,
  "/subcontractors/": SubcontractorsPage,
};

export function App() {
  const pathname = useMemo(() => normalizePath(window.location.pathname), []);
  const CurrentPage = pages[pathname] ?? HomePage;
  const meta = getRouteMeta(pathname);

  useEffect(() => {
    document.title = meta.title;
    const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (description) {
      description.content = meta.description;
    }
  }, [meta.description, meta.title]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader pathname={pathname} />
      <main>
        <CurrentPage />
      </main>
      <SiteFooter pathname={pathname} />
    </div>
  );
}
