// Write Javascript Code
//console.log("helloWorld")

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

//display quiz
buildQuiz();

// on submit show results
submitButton.addEventListener('click', showResults);

// Questions
const myQuestions = [
    {
        question: "1. Which of the following keywords is used to define a variable in Javascript?",
        answers: {
            a: "var",
            b: "let",
            c: "Both A and B",
            d: "None of the above"
        },
        correctAnswer: "c",
    },
    {
        question: "2. Which of the following methods is used to access HTML elements using Javascript?",
        answers: {
            a: "getElementbyId()",
            b: "getElementsByClassName()",
            c: "Both A and B",
            d: "None of the above"
        },
        correctAnswer: "c",
    },
    {
        question: "3. Which of the following methods can be used to display data in some form using Javascript?",
        answers: {
            a: "document.write()",
            b: "console.log()",
            c: "window.alert()",
            d: "All of the above"
        },
        correctAnswer: "d",
    },
    {
        question: "4. Which function is used to serialize an object into a JSON string in Javascript?",
        answers: {
            a: "stringify()",
            b: "parse()",
            c: "convert()",
            d: "None of the above"
        },
        correctAnswer: "a",
    },
    {
        question: "5. How do we write a comment in javascript?",
        answers: {
            a: "/* */",
            b: "//",
            c: "#",
            d: "$ $"
        },
        correctAnswer: "b",
    }
];