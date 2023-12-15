"use strict";

const inputEl = document.querySelector("input");
const btnAdd = document.getElementById("add");

const tasks = [];

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const inputValue = inputEl.value.trim();

  if (!inputValue) {
    return;
  }
});
