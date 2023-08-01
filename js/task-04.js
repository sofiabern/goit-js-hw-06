const counterValueEl = document.querySelector("#value");
let counterValue = Number(counterValueEl.textContent);

const btnDecr = document.querySelector("[data-action='decrement']");
const btnIncr = document.querySelector("[data-action='increment']");

btnDecr.addEventListener("click", handlerDecr);
function handlerDecr() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

btnIncr.addEventListener("click", handlerIncr);
function handlerIncr() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
