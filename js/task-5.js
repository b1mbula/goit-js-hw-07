function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const spanElem = document.querySelector(".color");

const btnElem = document.querySelector(".change-color");
btnElem.addEventListener("click", (e) => {
  const rnd = getRandomHexColor();
  bodyElem.setAttribute("style", `background-color: ${rnd}`);
  spanElem.textContent = rnd;
});

// bodyElem.style.background = rnd;
