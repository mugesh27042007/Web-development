let startTime, updatedTime, difference = 0, timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const displayAnalog = document.getElementById("display-analog");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const markBtn = document.getElementById("mark");
const toggleBtn = document.getElementById("toggle");
const marksList = document.getElementById("marks-list");

const digitalContainer = document.getElementById("digital-container");
const analogContainer = document.getElementById("analog-container");

const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateTime, 10);
  }
});

stopBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  difference = new Date().getTime() - startTime;
});

resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  difference = 0;
  display.textContent = "00:00:00:000";
  displayAnalog.textContent = "00:00:00:000";
  marksList.innerHTML = "";
  updateClockHands(0, 0, 0);
});

markBtn.addEventListener("click", () => {
  if (isRunning && digitalContainer.style.display !== "none") {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    marksList.appendChild(li);
  }
});

toggleBtn.addEventListener("click", () => {
  const isAnalog = analogContainer.style.display === "block";
  if (isAnalog) {
    analogContainer.style.display = "none";
    digitalContainer.style.display = "block";
    marksList.style.display = "block";
    toggleBtn.textContent = "Switch to Analog";
  } else {
    analogContainer.style.display = "block";
    digitalContainer.style.display = "none";
    marksList.style.display = "none";
    toggleBtn.textContent = "Switch to Digital";
  }
});

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / 3600000) % 12;
  let minutes = Math.floor((difference % 3600000) / 60000);
  let seconds = Math.floor((difference % 60000) / 1000);
  let milliseconds = difference % 1000;

  let formatted =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + ":" +
    (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);

  display.textContent = formatted;
  displayAnalog.textContent = formatted;

  updateClockHands(hours, minutes, seconds);
}

function updateClockHands(hours, minutes, seconds) {
  let secAngle = seconds * 6;
  let minAngle = minutes * 6 + seconds / 10;
  let hourAngle = hours * 30 + minutes / 2;

  secondHand.style.transform = `translateX(-50%) rotate(${secAngle}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minAngle}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
}
