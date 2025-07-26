function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Reset message
  message.innerText = "";
  message.style.color = "red";

  if (name === "") {
    message.innerText = "Name cannot be empty.";
    return false;
  }

  // Simple email pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.innerText = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters.";
    return false;
  }

  if (password !== confirmPassword) {
    message.innerText = "Passwords do not match.";
    return false;
  }

  // If all validations pass
  message.innerText = "Registration successful!";
  message.style.color = "green";
  return false; // Prevent actual form submission for demo
}
