// Write Javascript Code
//console.log("helloWorld")

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // for each availible answer
            for(letter in currentQuestion.answers){

                // add HTML radio button
                answers.push(
                    `<label>
                    <input  type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keeps track of answers
  let numCorrect = 0;

  // for each question
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answer green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong
    else{
      // color the answer red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  
}

// gather answer containers from quiz
const answerContainers = quizContainer.querySelectorAll('answers');

// keep track of answers
let numCorrect =0


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

myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code for each question to run goes here
});

// store the list of answer choices
const answers = [];

for (letter in currentQuestion.answers){

    // html radio button
    answers.push(
    `<label>
    <input type="radio" name="question${questionNumber}" value="${letter}">
    ${letter} ;
    ${currentQuestion.answers[letter]}
    </label>`
    );
}

// add this question and it answers to the output
output.push(
    `<div> class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
);