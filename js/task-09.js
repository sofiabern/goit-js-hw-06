function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", handlerColorChange);

function handlerColorChange() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.spanEl.textContent = randomColor;
}
