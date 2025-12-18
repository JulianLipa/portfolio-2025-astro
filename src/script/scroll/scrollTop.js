// src/scripts/scroll/scrollTop.js
import { withDisabledSnap } from "./scrollSnapUtils.js";

const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  withDisabledSnap(() => {
    window.scrollTo(0, 0);
  });
});
