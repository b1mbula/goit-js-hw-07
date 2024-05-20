const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");
inputElem.addEventListener("input", () => {
  const trimValue = inputElem.value.trim();
  if (trimValue) {
    spanElem.textContent = trimValue;
  } else {
    spanElem.textContent = "Anonymous";
  }
});

console.log(spanElem.textContent);
