const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handlerName);

function handlerName(evt) {
  if (!evt.currentTarget.value.trim()) {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = evt.currentTarget.value;
  }
}
