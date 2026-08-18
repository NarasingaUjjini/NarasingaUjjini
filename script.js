const THEME_KEY = "portfolio-theme";

function isDark() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  document.body.classList.toggle("dark", dark);
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const icon = btn.querySelector(".theme-icon");
  btn.setAttribute("aria-pressed", dark ? "true" : "false");
  btn.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
  if (icon) icon.textContent = dark ? "light_mode" : "dark_mode";
}

function toggleMode() {
  const dark = !isDark();
  applyTheme(dark);
  try {
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  } catch (_) {}
}

function initTheme() {
  let dark = false;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") dark = true;
    else if (stored === "light") dark = false;
    else dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (_) {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme(dark);
}

function onModalKeydown(e) {
  if (e.key === "Escape") closeModal();
}

function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (!modal || !modalImg) return;
  modal.style.display = "flex";
  modalImg.src = src;
  modalImg.alt = "";
  modalImg.onclick = function (e) {
    e.stopPropagation();
  };
  document.addEventListener("keydown", onModalKeydown);
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  if (modal) modal.style.display = "none";
  document.removeEventListener("keydown", onModalKeydown);
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
);

function placeThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const inner = document.querySelector(".header-inner");
  if (btn && inner) inner.appendChild(btn);
}

function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!header || !toggle || !nav) return;

  const desktopMq = window.matchMedia("(min-width: 769px)");

  function setNavOpen(open) {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", () => {
    setNavOpen(!header.classList.contains("nav-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!desktopMq.matches) setNavOpen(false);
    });
  });

  desktopMq.addEventListener("change", (e) => {
    if (e.matches) setNavOpen(false);
  });
}

function initFilters() {
  const bar = document.getElementById("work-filters");
  if (!bar) return;
  const buttons = bar.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-tags]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      buttons.forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      cards.forEach((card) => {
        const tags = (card.getAttribute("data-tags") || "").split(/\s+/);
        const show = filter === "all" || tags.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  placeThemeToggle();
  initTheme();
  initNav();
  initFilters();
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleMode);

  document.querySelectorAll(".fade-in").forEach((el) => {
    if (prefersReducedMotion.matches) {
      el.classList.add("show");
    } else {
      observer.observe(el);
    }
  });
});
