// src/scripts/scroll/scrollToLast.js
import { withDisabledSnap } from "./scrollSnapUtils.js";

const footerImg = document.querySelector("#footerSection img");
const lastDiv = document.getElementById("lastDiv");

footerImg?.addEventListener("click", () => {
  withDisabledSnap(() => {
    lastDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
