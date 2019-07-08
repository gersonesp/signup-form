const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

//if input field for First Name is invalid set error message to visible
firstName.addEventListener("invalid", () => {
  document.getElementById("firstNameError").style.visibility = "visible";
});

//if input field for Last Name is invalid set error message to visible
lastName.addEventListener("invalid", () => {
  document.getElementById("lastNameError").style.visibility = "visible";
});

//if input field for email is invalid set error message to visible
email.addEventListener("invalid", () => {
  document.getElementById("emailError").style.visibility = "visible";
});

//if input field for password is invalid set error message to visible
password.addEventListener("invalid", () => {
  document.getElementById("passwordError").style.visibility = "visible";
});
