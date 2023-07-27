"use strict";

const loader = document.getElementById("loader");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async function () {
  await sleep(200);
  loader.style.opacity = 0;
  loader.style.zIndex = -5;
});

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");
const starImage = document.getElementById("starImage");

languageBtn.addEventListener("click", () => {
  languageBtn.classList.toggle("right");
  for (const element of textElements) {
    let oldText = element.innerText;
    element.innerText = element.getAttribute("data-language");
    element.setAttribute("data-language", oldText);
  }
  if (document.documentElement.lang === "en") document.documentElement.lang = "tr";
  else document.documentElement.lang = "en";
});

const starImageAnimation = setInterval(() => {
  if (starImage.getBoundingClientRect().bottom < window.innerHeight) {
    starImage.classList.add("active");
    clearInterval(starImageAnimation);
  }
}, 100);
