

const questions = {
  tamil: [
    {
      question: "திருக்குறள் என்னும் நூலை எழுதியவர் யார்?",
      options: ["திருவள்ளுவர்", "இலங்கை சண்முகநாதன்", "கம்பர்", "பாரதியார்"],
      answer: "திருவள்ளுவர்"
    },
    {
      question: "சங்க காலத்தைச் சேர்ந்த தமிழர் வாழ்ந்த இடம்?",
      options: ["சென்னை", "மதுரை", "கோவை", "தஞ்சாவூர்"],
      answer: "மதுரை"
    },
    {
      question: "தமிழ் இணையதளம் தொடங்கிய ஆண்டு?",
      options: ["1997", "2000", "1995", "1999"],
      answer: "1997"
    },
    {
      question: "தமிழில் முதல் வாரப்பத்திரிக்கை எது?",
      options: ["தினமணி", "சுதேசமித்திரன்", "திராவிடன்", "ச்வதேசமித்திரன்"],
      answer: "சுதேசமித்திரன்"
    },
    {
      question: "தமிழ் மொழிக்காக பாரதியார் செய்த பங்களிப்பு என்ன?",
      options: ["கல்வி மறுப்பு", "பெண்கள் கல்வி", "கவிதைகள் மூலம் தேசிய விழிப்புணர்வு", "சினிமா பாடல்கள்"],
      answer: "கவிதைகள் மூலம் தேசிய விழிப்புணர்வு"
    }
  ],
  english: [
    {
      question: "Identify the adjective: 'The beautiful flower bloomed in spring.'",
      options: ["bloomed", "spring", "beautiful", "flower"],
      answer: "beautiful"
    },
    {
      question: "Choose the correct verb form: 'He ____ to school every day.'",
      options: ["go", "goes", "gone", "going"],
      answer: "goes"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "George Orwell", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "Who is the author of 'Pride and Prejudice'?",
      options: ["Jane Austen", "J.K. Rowling", "Emily Brontë", "Agatha Christie"],
      answer: "Jane Austen"
    },
    {
      question: "What is the longest word in the English dictionary?",
      options: ["Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "Hippopotomonstrosesquipedaliophobia", "Antidisestablishmentarianism"],
      answer: "Pneumonoultramicroscopicsilicovolcanoconiosis"
    }
  ],
  maths: [
    {
      question: "Solve using BODMAS: 6 + 2 × (5 - 3) ÷ 1",
      options: ["10", "16", "8", "12"],
      answer: "10"
    },
    {
      question: "If a pen costs ₹10 and a notebook costs ₹40, how many pens can you buy with ₹100?",
      options: ["5", "4", "10", "6"],
      answer: "10"
    },
    {
      question: "Train A travels 60 km in 1.5 hours. What is its speed?",
      options: ["40 km/h", "30 km/h", "45 km/h", "50 km/h"],
      answer: "40 km/h"
    },
    {
      question: "What comes next in the series: 2, 4, 8, 16, __?",
      options: ["18", "24", "32", "30"],
      answer: "32"
    },
    {
      question: "If 5x = 30, then the value of x is?",
      options: ["6", "5", "4", "3"],
      answer: "6"
    }
  ],
  sports: [
    {
      question: "Which team won the ICC Men's Cricket World Cup 2011?",
      options: ["Australia", "India", "Sri Lanka", "England"],
      answer: "India"
    },
    {
      question: "Ravindra Jadeja is an all-rounder for which IPL team in 2024?",
      options: ["CSK", "RCB", "MI", "KKR"],
      answer: "CSK"
    },
    {
      question: "RCB is an abbreviation for which IPL team?",
      options: ["Royal Challengers Bangalore", "Rajasthan Cricket Board", "Rising Chennai Blasters", "Red Cricket Battalion"],
      answer: "Royal Challengers Bangalore"
    },
    {
      question: "What is the national game of India?",
      options: ["Cricket", "Kabaddi", "Hockey", "Football"],
      answer: "Hockey"
    },
    {
      question: "How often are the Olympic Games held?",
      options: ["Every 2 years", "Every 4 years", "Annually", "Every 3 years"],
      answer: "Every 4 years"
    }
  ],
  gk: [
    {
      question: "How many houses are there in the Indian Parliament?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      question: "Which body conducts Civil Services Exams in India?",
      options: ["SSC", "UPSC", "NTA", "CBSE"],
      answer: "UPSC"
    },
    {
      question: "What is the currency of India?",
      options: ["Dollar", "Euro", "Rupee", "Pound"],
      answer: "Rupee"
    },
    {
      question: "Which is the national animal of India?",
      options: ["Lion", "Elephant", "Tiger", "Leopard"],
      answer: "Tiger"
    },
    {
      question: "How many colors are in the Indian flag?",
      options: ["2", "3", "4", "5"],
      answer: "3"
    }
  ]
};

let currentQuestion = 0;
let currentCategory = "";
let score = 0;
let timer;
let timeLeft = 15;

const categorySelect = document.getElementById("category-select");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const progressFill = document.getElementById("progress-fill");
const timeLeftText = document.getElementById("time-left");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");
const themeToggle = document.getElementById("theme-toggle");

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    startQuiz();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

nextBtn.addEventListener("click", () => {
  checkAnswer();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});

function startQuiz() {
  categorySelect.classList.add("hidden");
  quizBox.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentCategory][currentQuestion];
  questionText.textContent = q.question;
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions[currentCategory].length}`;
  optionsBox.innerHTML = "";
  progressFill.style.width = `${((currentQuestion) / questions[currentCategory].length) * 100}%`;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
    optionsBox.appendChild(btn);
  });

  resetTimer();
}

function checkAnswer() {
  clearInterval(timer);
  const selected = document.querySelector(".option-btn.selected");
  const correct = questions[currentCategory][currentQuestion].answer;

  if (selected && selected.textContent === correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions[currentCategory].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timeLeftText.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeLeftText.textContent = timeLeft;
    if (timeLeft <= 0) {
      checkAnswer();
    }
  }, 1000);
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `🎉 You scored ${score} out of ${questions[currentCategory].length}!`;
  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = `${Math.random() * 1.5}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
