function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElem = document.querySelector("#boxes");

const inputElem = document.querySelector("div > input");

const createBtnElem = document.querySelector("div > button");
createBtnElem.addEventListener("click", () => {
  const value = inputElem.value;
  if (value > 0 && value <= 100) {
    createBoxes(value);
    inputElem.value = "";
  }
});

const destroyBtnElem = document.querySelector("div > button:last-child");
destroyBtnElem.addEventListener("click", (e) => {
  divElem.innerHTML = "";
});

const size = {
  width: 30,
  height: 30,
};

function createBoxes(amount) {
  divElem.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const nevDiv = document.createElement("div");
    size.width += 10;
    size.height += 10;
    nevDiv.style.width = `${size.width}px`;
    nevDiv.style.height = `${size.height}px`;
    nevDiv.style.background = getRandomHexColor();
    fragment.appendChild(nevDiv);
  }
  divElem.appendChild(fragment);
  size.height = 30;
  size.width = 30;
}
