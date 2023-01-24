// Write Javascript Code
//console.log("helloWorld")


//Quiz Code
(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // add an HTML radio button
          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keeps track of answers
    let numCorrect = 0;

    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'blue';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Which of the following keywords is used to define a variable in Javascript?",
      answers: {
        A: "var",
        B: "let",
        C: "Both A and B",
        D: "None of the above"
      },
      correctAnswer: "C"
    },
    {
      question: "2. Which of the following methods is used to access HTML elements using Javascript?",
      answers: {
        A: "getElementbyId()",
        B: "getElementsByClassName()",
        C: "Both A and B",
        D: "None of the above"
      },
      correctAnswer: "C"
    },
    {
      question: "3. Which of the following methods can be used to display data in some form using Javascript?",
      answers: {
        A: "document.write()",
        B: "console.log()",
        C: "window.alert()",
        D: "All of the above"
      },
      correctAnswer: "D"
    },
    {
      question: "4. Which function is used to serialize an object into a JSON string in Javascript?",
      answers: {
        A: "stringify()",
        B: "parse()",
        C: "convert()",
        D: "None of the above"
      },
      correctAnswer: "A"
    },
    {
      question: "5. How do we write a comment in javascript?",
      answers: {
        A: "/* */",
        B: "//",
        C: "#",
        D: "$ $"
      },
      correctAnswer: "B"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

})();

// TIMER
(function () {
// Sets time to 60 seconds
const timeH = document.querySelector('h2');
let timeSecond = 60;

// Displays the time on page
displayTime(timeSecond)

// Function counts time down and prevents timer from counting past zero'd timer
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000)

// Displays time in '00:00' format
function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}
// Displays Quiz Over after timer reaches '00:00'
function endTime() {
  timeH.innerHTML = 'QUIZ OVER'
}
})();






//                     question: "1. Which of the following keywords is used to define a variable in Javascript?",
//                     answers: {
//                         a: "var",
//                         b: "let",
//                         c: "Both A and B",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "c",
//                 },
//                 {
//                     question: "2. Which of the following methods is used to access HTML elements using Javascript?",
//                     answers: {
//                         a: "getElementbyId()",
//                         b: "getElementsByClassName()",
//                         c: "Both A and B",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "c",
//                 },
//                 {
//                     question: "3. Which of the following methods can be used to display data in some form using Javascript?",
//                     answers: {
//                         a: "document.write()",
//                         b: "console.log()",
//                         c: "window.alert()",
//                         d: "All of the above"
//                     },
//                     correctAnswer: "d",
//                 },
//                 {
//                     question: "4. Which function is used to serialize an object into a JSON string in Javascript?",
//                     answers: {
//                         a: "stringify()",
//                         b: "parse()",
//                         c: "convert()",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "a",
//                 },
//                 {
//                     question: "5. How do we write a comment in javascript?",
//                     answers: {
//                         a: "/* */",
//                         b: "//",
//                         c: "#",
//                         d: "$ $"
//                     },
//                     correctAnswer: "b",
//                 }
//             ];

// //display quiz
// buildQuiz();

// // pagination
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// //show the first slide
// showSlide(currentSlide);

// // event listeners

// // on submit show results
// submitButton.addEventListener('click', showResults);

// // previous and next buttons to go forwards or back on questions on click
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);

// })();

// question: "1. Which of the following keywords is used to define a variable in Javascript?",
//                     answers: {
//                         a: "var",
//                         b: "let",
//                         c: "Both A and B",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "c",
//                 },
//                 {
//                     question: "2. Which of the following methods is used to access HTML elements using Javascript?",
//                     answers: {
//                         a: "getElementbyId()",
//                         b: "getElementsByClassName()",
//                         c: "Both A and B",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "c",
//                 },
//                 {
//                     question: "3. Which of the following methods can be used to display data in some form using Javascript?",
//                     answers: {
//                         a: "document.write()",
//                         b: "console.log()",
//                         c: "window.alert()",
//                         d: "All of the above"
//                     },
//                     correctAnswer: "d",
//                 },
//                 {
//                     question: "4. Which function is used to serialize an object into a JSON string in Javascript?",
//                     answers: {
//                         a: "stringify()",
//                         b: "parse()",
//                         c: "convert()",
//                         d: "None of the above"
//                     },
//                     correctAnswer: "a",
//                 },
//                 {
//                     question: "5. How do we write a comment in javascript?",
//                     answers: {
//                         a: "/* */",
//                         b: "//",
//                         c: "#",
//                         d: "$ $"
//                     },
//                     correctAnswer: "b",