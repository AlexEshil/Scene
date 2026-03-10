document.documentElement.classList.add("js-ready");

const body = document.body;
const headerRail = document.querySelector(".header-rail");
const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelectorAll(".nav-item");
const navExpanders = document.querySelectorAll(".nav-expander");
const pageSection = body.dataset.section;

const syncHeader = () => {
  if (!headerRail) return;
  headerRail.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeAllPanels = (except = null) => {
  navItems.forEach((item) => {
    const shouldStayOpen = except && item === except;
    item.classList.toggle("is-open", shouldStayOpen);
    const expander = item.querySelector(".nav-expander");
    if (expander) {
      expander.setAttribute("aria-expanded", shouldStayOpen ? "true" : "false");
    }
  });
};

const closeMobileNav = () => {
  body.classList.remove("nav-open");
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
  closeAllPanels();
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    if (!open) {
      closeAllPanels();
    }
  });
}

navExpanders.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const item = button.closest(".nav-item");
    const isOpen = item?.classList.contains("is-open");
    closeAllPanels(isOpen ? null : item);
  });
});

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (window.innerWidth > 960) {
      closeAllPanels(item);
    }
  });

  item.addEventListener("mouseleave", () => {
    if (window.innerWidth > 960) {
      closeAllPanels();
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-item") && !event.target.closest(".menu-toggle")) {
    closeAllPanels();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    body.classList.remove("nav-open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }
});

document.querySelectorAll(".main-nav a, .header-actions a, .utility-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 960) {
      closeMobileNav();
    }
  });
});

if (pageSection) {
  document.querySelectorAll(`[data-section-link="${pageSection}"]`).forEach((link) => {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  const result = form.querySelector(".form-result");
  const success = form.dataset.success || "Форма отправлена.";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim() || "Коллеги";
    if (result) {
      result.textContent = `${name}, ${success}`;
    }
    form.reset();
  });
});
