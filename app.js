const emailIn = document.getElementById("email");
const emailError = document.getElementById("emailError");
emailIn.addEventListener("input", () => {
  if (emailIn.validity.valid) {
    emailError.innerText = "";
    emailError.classList = "no-error";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (emailIn.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (emailIn.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail.";
  }
  emailError.classList = "error";
}

const phoneIn = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
phoneIn.addEventListener("input", () => {
  console.log(phoneIn.validity.valid);
  if (phoneIn.validity.valid) {
    phoneError.textContent = "";
    phoneError.classList = "no-error";
  } else {
    showPhoneError();
  }
});

function showPhoneError() {
  if (phoneIn.value === "") {
    phoneError.textContent = "Enter phone number";
    phoneError.classList = "error";
  } else if (phoneIn.value.length > 14) {
    phoneError.textContent = "Phone number is too long";
    phoneError.classList = "error";
  } else if (isNaN(phoneIn.value)) {
    phoneError.textContent = "Phone number must only contain numbers";
    phoneError.classList = "error";
  } else {
    phoneError.classList = "no-error";
  }
}

const passwordIn = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
passwordIn.addEventListener("input", () => {
  validatePassword();
});

const numbers = /[0-9]/g;
function validatePassword() {
  if (passwordIn.value === "") {
    passwordError.textContent = "Enter password";
    passwordError.classList = "error";
    confirmIn.setCustomValidity("");
    passwordIn.setCustomValidity("Enter password");
  } else if (!passwordIn.value.match(numbers)) {
    passwordError.textContent = "Password must include a number";
    passwordError.classList = "error";
    confirmIn.setCustomValidity("");
    passwordIn.setCustomValidity("Password must include a number");
  } else if (passwordIn.value.length < 8) {
    passwordError.textContent = "Password must be longer than 8 characters";
    passwordError.classList = "error";
    confirmIn.setCustomValidity("");
    confirmIn.setCustomValidity("Password must be longer than 8 characters");
  } else if (!passwordIn.value.match(numbers) && passwordIn.value.length < 8) {
    passwordError.textContent =
      "Password must be longer than 8 characters and contain a number";
    confirmIn.setCustomValidity("");
    passwordIn.setCustomValidity(
      "Password must be longer than 8 characters and contain a number"
    );
  } else {
    passwordIn.setCustomValidity("");
    passwordError.classList = "no-error";
  }
}

const confirmIn = document.getElementById("confirm-password");
const confirmError = document.getElementById("confirmError");

confirmIn.addEventListener("input", () => {
  confirmPassword();
});

function confirmPassword() {
  const passwordIn = document.getElementById("password");
  if (confirmIn === "") {
    confirmError.textContent = "Enter password again";
    confirmError.classList = "error";
    confirmIn.setCustomValidity("");
    confirmIn.setCustomValidity("Confirm password");
  } else if (confirmIn.value.length < 8) {
    confirmError.textContent = "Enter password again";
    confirmError.classList = "error";
    confirmIn.setCustomValidity("");
    confirmIn.setCustomValidity("Confirm password");
  } else if (confirmIn.value !== passwordIn.value) {
    confirmError.textContent = "Password needs to match";
    confirmError.classList = "error";
    confirmIn.setCustomValidity("");
    confirmIn.setCustomValidity("Password needs to match");
  } else {
    confirmIn.setCustomValidity("");
    confirmError.classList = "no-error";
  }
}
