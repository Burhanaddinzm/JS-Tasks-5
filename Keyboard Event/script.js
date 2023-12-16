"use strict";

const insertEl = document.querySelector(".insert");

window.addEventListener("keydown", (event) => {
  insertEl.innerHTML = `
    <div class="key">
    ${event.key}
    <small>event.key</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small>event.keyCode </small>
    </div>
    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
    `;
});
