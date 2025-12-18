// src/scripts/scroll/scrollSnapUtils.js
export function withDisabledSnap(callback, delay = 600) {
  document.documentElement.style.scrollSnapType = "none";

  callback();

  setTimeout(() => {
    document.documentElement.style.scrollSnapType = "y mandatory";
  }, delay);
}
