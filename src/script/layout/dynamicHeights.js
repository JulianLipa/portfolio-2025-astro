// src/scripts/layout/dynamicHeights.js
function setDivHeights() {
  const vh = window.innerHeight;

  document.querySelectorAll(".scrollableDiv").forEach((div) => {
    div.style.height = `${vh}px`;
  });

  const lastDivContent = document.querySelector(
    "#lastDiv .glass-card-content"
  );

  if (lastDivContent) {
    lastDivContent.style.height = `${vh * 0.8}px`;
  }
}

window.addEventListener("load", setDivHeights);
window.addEventListener("resize", setDivHeights);
