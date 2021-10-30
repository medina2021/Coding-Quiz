
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
const startEl = document.querySelector('#startup');

var questionIndex = 0;
var timeLeft = questions.length * 15;
var timeId


// Function to start the Quiz
function startQuiz() {
  // startEl.removeAttribute('class');
  startEl.setAttribute('class', 'hide');

  // questionEl.removeAttribute('class');
  questionEl.setAttribute('class', 'display');

  timeEl.textcontent= timeLeft;
  timeId = setInterval(timeClock, 1000);

  startQuestion();

}

// Function for time clock

 function timeClock() {
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      console.log('Game Over');
      endQuiz();
    }
 };

 function startQuestion() {
  titleEl.textContent = questions[questionIndex].title

   choicesEl.innerHTML = "";

   questions[questionIndex].choices.forEach(function (choice) {
     
      let choiceButton = document.createElement('button');

      choiceButton.textContent= choice;

    // Append the button
        choicesEl.appendChild(choiceButton);

      choiceButton.addEventListener('click', checkAnswer);

   });;
 };

 function checkAnswer(event) {
   const correctAnswer = questions[questionIndex].checkAnswer

   if (event.target.textContent !=correctAnswer) {
     timeLeft-=15
   };

   questionIndex++

   if(questionIndex === questions.length){
    console.log('Game Over!');
   } else {
     startQuestion();
   };
  };

  function endQuiz() {
    clearInterval(timeId);

    // to hide questions
    questionEl.setAttribute('class', 'hide');

    endEl.removeAttribute('class');
    endEl.setAttribute('class', 'display');

    finalEl.textContent = timeLeft;
  };

  function scoreLog(){
   var initials = initialsEl.value.trim();

    const newScore = {
      initials: initials,
      score: timeLeft
    };

    const allScores = JSON.parse(localStorage.getItem('allScores')) || [];

    allScores.push(newScore);
    localStorage.setItem('allScores', JSON.stringify(allScores));

    window.location.href = 'highscores.html';
  };

startBtn.onclick = startQuiz;
scoreBtn.onclick = scoreLog;
