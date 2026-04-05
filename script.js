const nav = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true },
);

function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  m.classList.toggle("open");
  document
    .querySelector(".hamburger")
    .setAttribute("aria-expanded", m.classList.contains("open"));
}

function switchTab(cat, btn) {
  document
    .querySelectorAll(".menu-cat")
    .forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((el) => {
    el.classList.remove("active");
    el.setAttribute("aria-selected", "false");
  });
  document.getElementById("cat-" + cat).classList.add("active");
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

const NAV_HEIGHT = 80;
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href").slice(1);
    if (!targetId) return;
    var target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    var top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      NAV_HEIGHT;
    window.scrollTo({ top: top, behavior: "smooth" });
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      document
        .querySelector(".hamburger")
        .setAttribute("aria-expanded", "false");
    }
  });
});
