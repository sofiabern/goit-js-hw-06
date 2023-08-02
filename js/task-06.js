const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handlerCounter);

function handlerCounter(evt) {
  const amount = evt.currentTarget.value.length;

  if (amount === Number(evt.currentTarget.dataset.length)) {
    evt.currentTarget.classList.add("valid");
  } else {
    evt.currentTarget.classList.add("invalid");
  }
}
