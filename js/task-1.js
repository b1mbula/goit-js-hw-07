const SumEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${SumEl.length}`);

SumEl.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const elements = el.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
