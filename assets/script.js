const submitButton = document.getElementById('username')


submitButton.addEventListener('click' showCatagorys)

function showCatagorys() {
    submitButton.classList.remove('username1')
    submitButton.classList.add('catagorey')
}

const questions = [
    {
        question: 'What is the capital of Chile?',
        answers: [
            {text: 'Santiago', correct: true},
            {text: 'London', correct: false},
            {text: 'Mexico', correct: false},
            {text: 'Columbia', correct: false}
        ]
    },
    {
        question: 'What is the highest mountain in Britain?',
        answers: [
            {text: 'Snowdon', correct: false},
            {text: 'Llangollen', correct: false},
            {text: 'Evererst', correct: false},
            {text: 'Ben Nevis', correct: true}
        ]
    },
    {
        question: 'What is the smallest country in the world?',
        answers: [
            {text: 'Florida', correct: false},
            {text: 'Vatican City', correct: true},
            {text: 'Manchester', correct: false},
            {text: 'Queensland', correct: false}
        ]
    },
    {
        question: 'What is the hottest continent on Earth?',
        answers: [
            {text: 'America', correct: false},
            {text: 'Europe', correct: false},
            {text: 'Asia', correct: false},
            {text: 'Africa', correct: true}
        ]
    },
]