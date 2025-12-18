// src/scripts/hero/heroScrollHint.js
const scrollHint = document.getElementById("scrollHint");

let hintTimeout = null;

function isInHero() {
  return window.scrollY < window.innerHeight * 0.5;
}

function startHeroTimer() {
  clearTimeout(hintTimeout);

  hintTimeout = setTimeout(() => {
    if (isInHero()) {
      scrollHint?.classList.add("visible");
    }
  }, 4000);
}

function hideHint() {
  scrollHint?.classList.remove("visible");
  clearTimeout(hintTimeout);
  hintTimeout = null;
}

window.addEventListener("load", () => {
  if (isInHero()) startHeroTimer();
});

window.addEventListener("scroll", () => {
  if (isInHero()) {
    startHeroTimer(); // reinicia si vuelve al hero
  } else {
    hideHint();
  }
});
