"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");

const closeModal = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

openBtn.addEventListener("click", () => {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
});

closeBtn.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        closeModal();
    }
})