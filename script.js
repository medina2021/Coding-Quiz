const quizQuest = [
  {
    quest: "Commonly used data types DO NOT include",
    multipleChoice: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },

  {
    quest: "The condition in an if/else statementis enclosed within ____.",
    multipleChoice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
  },

  {
    quest: "Arrays in Javascript can be used to Store ____.",
    multipleChoice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },

  {
    quest: "String values must be enclosed within ____ when being assigned to variables",
    multipleChoice: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
  },

  {
    quest: "A very useful tool used for development and debugging for printing content to the debugger is",
    multipleChoice: ["Javascript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "terminal/bash"
  }
];



// Required Elements:
const startBtn = document.querySelector('#start');
const questionEl = document.querySelector('#questions');
const titleEl = document.querySelector('#title');
const choicesEl = document.querySelector('#choices');
const timeEl = document.querySelector('#timer');
const endEl = document.querySelector('#end');
const finalEl = document.querySelector('#finalscore');
const initialsEl = document.querySelector('#initials');
const scoreBtn = document.querySelector('#submit');
const startEl = document.querySelector('#container');

var questionIndex = 0;
var timeLeft = 75;
var timer

var timeleft = 75;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

const quizQuest = [
  {
    quest: "Commonly used data types DO NOT include",
    multipleChoice: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },

  {
    quest: "The condition in an if/else statementis enclosed within ____.",
    multipleChoice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
  },

  {
    quest: "Arrays in Javascript can be used to Store ____.",
    multipleChoice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },

  {
    quest: "String values must be enclosed within ____ when being assigned to variables",
    multipleChoice: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
  },

  {
    quest: "A very useful tool used for development and debugging for printing content to the debugger is",
    multipleChoice: ["Javascript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "terminal/bash"
  }
];

// function to display question
function displayQuestion() {
  var contentBoxElement = document.getElementById("content_box")
  var questionHolder = document.createElement("div")
  questionHolder.textContent = quizQuest[questionIndex].quest
  contentBoxElement.appendChild(questionHolder)
}



displayQuestion();

// document.addEventListener("DOMContentLoaded", function() {
//     var start_btn = document.getElementById("start_btn");
//     var newBtn = document.createElement("button");
//     newBtn.textContent = "please work"
//     newBtn.addEventListener("click",function () {
//         console.log("you got it!")
//     })
//     btn.appendChild(newBtn)
//     var btn2 = document.getElementById("start");
//     btn2.addEventListener("click",function() {
//         newBtn.style.visibility = "hidden";
//     })
// })
// Show Results when submit button is clicked.
// submitButton.addEventListener('click', showResults)

let totalSeconds = 76;
// element to display timer
let timer = document.getElementById("Timer")




var questionNumber = 0
function renderQuestion(){
  
}