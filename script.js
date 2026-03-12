// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Update active navigation link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  document
    .querySelectorAll(".nav-links a, .mobile-nav-links a")
    .forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.slice(1) === current) {
        link.classList.add("active");
      }
    });
});

// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileToggle.innerHTML = mobileMenu.classList.contains("active")
      ? "&#10005;"
      : "&#9776;";
  });

  document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileToggle.innerHTML = "&#9776;";
    });
  });
}
