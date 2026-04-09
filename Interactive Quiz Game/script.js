
const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Which language runs in a web browser?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { question: "Who wrote 'Harry Potter'?", options: ["J.K. Rowling", "Mark Twain", "Leo Tolstoy", "J.R.R. Tolkien"], answer: "J.K. Rowling" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    { question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "Germany", "Spain"], answer: "France" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Elephant"], answer: "Cheetah" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const timerEl = document.getElementById("timer");


loadQuestion();


function loadQuestion() {
    messageEl.textContent = "";
    nextBtn.style.display = "none";

    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", selectOption);
        optionsEl.appendChild(button);
    });

    updateProgressBar();
    startTimer();
}


function selectOption(e) {
    stopTimer();

    const selected = e.target.textContent;
    const correct = quizData[currentQuestion].answer;

    if(selected === correct){
        messageEl.style.color = "green";
        messageEl.textContent = "Correct!";
        score++;
        scoreEl.textContent = "Score: " + score;
    } else {
        messageEl.style.color = "red";
        messageEl.textContent = `Wrong! Correct answer: ${correct}`;
    }

    
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);

    nextBtn.style.display = "block";
}


nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        endQuiz();
    }
});


function updateProgressBar() {
    const progressPercent = ((currentQuestion) / quizData.length) * 100;
    progressBar.style.width = progressPercent + "%";
}


function startTimer() {
    timeLeft = 15;
    timerEl.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}s`;

        if(timeLeft <= 0){
            stopTimer();
            messageEl.style.color = "orange";
            messageEl.textContent = `Time's up! Correct answer: ${quizData[currentQuestion].answer}`;
            Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
            nextBtn.style.display = "block";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}


function endQuiz() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    messageEl.textContent = `Your final score is ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
    timerEl.textContent = "";
    progressBar.style.width = "100%";
}