const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
const toggleBtn = document.getElementById("theme-toggle");

const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-message");
const playAgainBtn = document.getElementById("play-again");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function handleClick(e) {
  const index = e.target.dataset.index;

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer);

  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} wins!`;
    showPopup(`🎉 Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusText.textContent = "😐 It's a draw!";
    showPopup("😐 It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `🕹️ Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.querySelector(`.cell[data-index="${a}"]`).classList.add("winner");
      document.querySelector(`.cell[data-index="${b}"]`).classList.add("winner");
      document.querySelector(`.cell[data-index="${c}"]`).classList.add("winner");
      return true;
    }
  }
  return false;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = `🕹️ Player ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.className = "cell";
  });
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  toggleBtn.textContent = body.classList.contains("dark-theme")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

function showPopup(message) {
  popupMsg.textContent = message;
  popup.classList.remove("hidden");
}

playAgainBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  resetGame();
});

cells.forEach(cell => cell.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
toggleBtn.addEventListener("click", toggleTheme);
