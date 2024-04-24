const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
	event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;
if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.trim()}, Password: ${password.trim()};`);
  form.reset();
})
