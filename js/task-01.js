const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const amount = item.lastElementChild.childElementCount;
  console.log(`Category: ${title}\nElements: ${amount}`);
});
