function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  amount: document.querySelector("input"),
  parentBox: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", handlerCreate);
function handlerCreate() {
  handlerDestroy();

  let size = 30;
  let markup = "";
  for (let i = 0; i < Number(refs.amount.value); i += 1) {
    const randomColor = getRandomHexColor();
    markup += `<div style="width:${size}px; height:${size}px; background-color:${randomColor};"></div>`;
    size += 10;
  }
  refs.parentBox.innerHTML = markup;
}

refs.destroyBtn.addEventListener("click", handlerDestroy);
function handlerDestroy() {
  refs.parentBox.innerHTML = "";
}
