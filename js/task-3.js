const inputElem = document.querySelector("#name-input");
inputElem.addEventListener("input", () => {
  const trimValue = inputElem.value.trim();
  if (trimValue) {
    spanElem.textContent = trimValue;
  } else {
    spanElem.textContent = "Anonymous";
  }
});

const spanElem = document.querySelector("#name-output");

console.log(spanElem.textContent);
