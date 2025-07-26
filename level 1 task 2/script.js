
function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
function showGreeting() {
  const name = document.getElementById("username").value.trim();
  const output = document.getElementById("greet-result");

  if (name === "") {
    output.innerText = "Please enter your name!";
    output.style.color = "#cc0000";
    return;
  }

  const hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = "Good Morning";
  } else if (hour < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  output.innerText = `${message}, ${name}!`;
  output.style.color = "#007700";
}


function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const output = document.getElementById("calc-result");

  if (isNaN(num1) || isNaN(num2)) {
    output.innerText = "Please enter valid numbers!";
    output.style.color = "#cc0000";
    return;
  }

  const sum = num1 + num2;
  output.innerText = "Result: " + sum;
  output.style.color = "#1190f8ff";
}
