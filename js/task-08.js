const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("Заповни всі поля 😾");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);

    evt.currentTarget.reset();
  }
}
