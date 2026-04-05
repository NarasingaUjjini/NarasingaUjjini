const THEME_KEY = "portfolio-theme";

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const icon = btn.querySelector(".theme-icon");
  btn.setAttribute("aria-pressed", dark ? "true" : "false");
  btn.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
  if (icon) icon.textContent = dark ? "☀️" : "🌙";
}

function toggleMode() {
  const dark = !document.body.classList.contains("dark");
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
    else
      dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
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
