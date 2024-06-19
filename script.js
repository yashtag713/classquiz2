const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            A: "London",
            B: "Paris",
            C: "Rome",
            D: "Berlin"
        },
        correctAnswer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            A: "Earth",
            B: "Mars",
            C: "Jupiter",
            D: "Venus"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: {
            A: "Atlantic Ocean",
            B: "Indian Ocean",
            C: "Arctic Ocean",
            D: "Pacific Ocean"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: {
            A: "Au",
            B: "Ag",
            C: "Fe",
            D: "Hg"
        },
        correctAnswer: "A"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            A: "Charles Dickens",
            B: "J.K. Rowling",
            C: "William Shakespeare",
            D: "Mark Twain"
        },
        correctAnswer: "C"
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.style.display = 'block';

    const questionText = document.createElement('p');
    questionText.textContent = questions[index].question;
    questionElement.appendChild(questionText);

    for (const [key, answer] of Object.entries(questions[index].answers)) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = key;
        label.appendChild(input);
        label.append(` ${key}) ${answer}`);
        questionElement.appendChild(label);
    }

    quizContainer.appendChild(questionElement);
}

function showButtons() {
    document.getElementById('prev').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('next').style.display = currentQuestionIndex < questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submit').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        showButtons();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        showButtons();
    }
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `You scored ${score} out of ${questions.length}.`;
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
    showButtons();
});
