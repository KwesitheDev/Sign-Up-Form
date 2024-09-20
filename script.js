const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const message = document.getElementById("message");

password.addEventListener("input", checkPasswordsMatch);
confirmPassword.addEventListener("input", checkPasswordsMatch);

function checkPasswordsMatch() {
  if (password.value === confirmPassword.value) {
    message.textContent = "Passwords match";
    message.style.color = "green";
  } else {
    message.textContent = "Passwords do not match";
    message.style.color = "red";
  }
}