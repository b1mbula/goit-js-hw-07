function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElem = document.querySelector("#boxes");

const inputElem = document.querySelector("div > input");

const createBtnElem = document.querySelector("div > button");
createBtnElem.addEventListener("click", createBoxes);

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
  const value = inputElem.value;
  amount = value;
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      size.width += 10;
      size.height += 10;
      const nevDiv = document.createElement("div");
      nevDiv.style.width = `${size.width}px`;
      nevDiv.style.height = `${size.height}px`;
      nevDiv.style.background = getRandomHexColor();
      divElem.appendChild(nevDiv);
      inputElem.value = "";
    }
  }
  size.height = 30;
  size.width = 30;
}
