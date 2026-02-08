const questions = [
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "float"],
    answer: "var"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: "//"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: "//"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  optionsEl.innerHTML = "";

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.addEventListener("click", () => checkAnswer(option));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.classList.remove("hidden");
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
