// src/scripts/scroll/scrollSectionVisibility.js
const footer = document.getElementById("footerSection");
const scrollableSection = document.getElementById("scrollableSection");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const sectionTop = scrollableSection?.offsetTop || 0;

  if (scrollTop >= sectionTop) {
    footer?.classList.add("visible");
  } else {
    footer?.classList.remove("visible");
  }
});
