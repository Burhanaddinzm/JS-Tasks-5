"use strict";

const inputEl = document.querySelector("input");
const btnAdd = document.getElementById("add");
const ulEl = document.querySelector("ul");

const tasks = [];

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const inputValue = inputEl.value.trim();

  if (!inputValue) {
    return;
  }

  tasks.push(inputValue);
  displayTasks();
  inputEl.value = "";
});

function displayTasks() {
  ulEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const liEl = document.createElement("li");
    const spanEl = document.createElement("span");
    const btnRemove = document.createElement("button");

    spanEl.textContent = task;
    btnRemove.textContent = "Remove";
    btnRemove.addEventListener("click", () => {
      removeTask(index);
    });

    liEl.insertAdjacentElement("afterbegin", spanEl);
    liEl.insertAdjacentElement("beforeend", btnRemove);
    ulEl.insertAdjacentElement("beforeend", liEl);
    console.log("task finish :)");
  });
}

function removeTask(i) {
  tasks.splice(i, 1);
  displayTasks();
}
