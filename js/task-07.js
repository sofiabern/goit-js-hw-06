const inputEL = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEL.addEventListener("input", handlerFontSize);

function handlerFontSize(evt) {
  const size = evt.currentTarget.value;
  spanEl.style.fontSize = `${size}px`;
}
