"use strict";

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
});

const starImageAnimation = setInterval(() => {
  if (starImage.getBoundingClientRect().bottom < window.innerHeight) {
    starImage.classList.add("active");
    clearInterval(starImageAnimation);
  }
}, 100);
