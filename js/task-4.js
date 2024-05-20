const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = formElem.elements.email.value.trim();
  const passwordValue = formElem.elements.password.value.trim();
  const data = {
    email: emailValue,
    password: passwordValue,
  };
  if (emailValue && passwordValue) {
    console.log(data);
    formElem.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
