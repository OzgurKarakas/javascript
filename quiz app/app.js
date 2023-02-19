const data = [
    {
        id: 1,
        question: "Fortunately, he......by a construction worker as he......, and so they rescued him immediately.",
        answers: [
            { answer: "has been noticed / fell", isCorrect: false },
            { answer: "was noticing / has fallen", isCorrect: false },
            { answer: "was noticed / was falling", isCorrect: true },
            { answer: "would be noticed / had fallen", isCorrect: false }
        ],
    },
    {
        id: 2,
        question: "There may be catastrophic climate change......people don't recognize and combat the dangers of global warming.",
        answers: [
            { answer: "just as", isCorrect: false },
            { answer: "therefore", isCorrect: false },
            { answer: "if only", isCorrect: false },
            { answer: "provided that", isCorrect: true }
        ],
    },
    {
        id: 3,
        question: "What's wrong, Chester? You look…….. you've heard some bad news.",
        answers: [
            { answer: "in case", isCorrect: false },
            { answer: "as long as", isCorrect: false },
            { answer: "as if", isCorrect: true },
            { answer: "however", isCorrect: false }
        ],
    },
    {
        id: 4,
        question: "The people......family members disappeared during the protest are marching on the parliament building.",
        answers: [
            { answer: "why", isCorrect: false },
            { answer: "whose", isCorrect: true },
            { answer: "what", isCorrect: false },
            { answer: "when", isCorrect: false }
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")


let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showResult = ()=>{
    resultScreen.style.display="block"
    gameScreen.style.display="none"

    resultScreen.querySelector(".correct").textContent= `Correct Answers: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent= `Wrong Answers: ${wrongCount}`

    resultScreen.querySelector(".score").textContent= `Score Answers: ${correctCount - wrongCount} * 10`
}

const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult()
    selectedAnswer=null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `
        <div class="answer">
                        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
                        <label for="1">${item.answer}</label>
                    </div>
        `
    ).join("");

    selectedAnswer()
};

const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer=e.target.value;
        });
    });
};

const submitAnswer = ()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex)
        }else alert("Select an answer")
    });
};

showQuestion(qIndex);
submitAnswer();