"use strict";

const images = ["beach", "building", "city", "mozaic", "sky"];

let index = 0;

const sliderImgEl = document.querySelector(".slider-image");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

btnLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else if (index == 0) {
    index = images.length - 1;
  }
  sliderImgEl.style.backgroundImage = `url("./images/${images[index]}.jpg")`;
});

btnRight.addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
  } else if (index == images.length - 1) {
    index = 0;
  }
  sliderImgEl.style.backgroundImage = `url("./images/${images[index]}.jpg")`;
});
