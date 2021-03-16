var quizMainEl = document.getElementById('quiz-main');
var quizQuestionsEl = document.getElementById('quiz-questions');
var quizSubmissionEl = document.getElementById('quiz-submission');
var startQuizbtn = document.getElementById('start-quiz');
var questionChoice = document.getElementById('question-choice');
var choiceButton1 = document.getElementById('choiceButton1');
var choiceButton2 = document.getElementById('choiceButton2');
var choiceButton3 = document.getElementById('choiceButton3');
var choiceButton4 = document.getElementById('choiceButton4');
var choiceButtons = document.getElementsByClassName('choiceButton');
var correctEl = document.getElementById('correct');
var incorrectEl = document.getElementById('incorrect');
var timerCountDown = document.getElementById('timer-value');
var submitButton = document.getElementById('submit-btn');
var oneMoreBtn = document.getElementById('oneMoreBtn');
var inputNameEl = document.getElementById('input-name');
var userScore = document.getElementById('score');
var highScoresEl = document.getElementById('high-scores');
var viewHighScoresHeaderEl = document.getElementById('view-hs');
var highScoreListEl = document.getElementById('high-score-list');
var clearButton = document.getElementById('clear');
var goBackButton = document.getElementById('go-back');
var initialQuestion = 0;
var score = 0;


quizQuestionsEl.style.display = 'none';
quizSubmissionEl.style.display = 'none';
highScoresEl.style.display = 'none'; //change to none
correctEl.style.display = 'none';
incorrectEl.style.display = 'none';

var qsetArray = [
    {
        question: '1. If HTML is for structure, and CSS is for style. What is JS for?',
        opt1: 'Nothing, Python rules',
        opt2: 'Function and dynamics',
        opt3: 'It rules CSS and HTML',
        opt4: "it's a browser database",
        corAns: '2'
    },
    {
        question: '2. Variables declared globally can only be used ____',
        opt1: 'inside a function',
        opt2: 'outside a function',
        opt3: '1 & 2',
        opt4: 'once in a function',
        corAns: '3'
    },
    {
        question: '3. Select the suitable variable assignment',
        opt1: 'GASGas = 23',
        opt2: 'gas123 = 23',
        opt3: 'var gas = 23',
        opt4: 'gas-123 = 23',
        corAns: '3'
    },
    {
        question: '4. Which property gives you the length of a string?',
        opt1: 'length',
        opt2: 'len',
        opt3: 'ln',
        opt4: 'none of these work',
        corAns: '1'
    }
];

// Setting the timer countdown
// when timer ends or when user completes the quiz, user should be prompted to the submission page
var timer;
var intervalID;

function resetTimer() {
    timer = 15 * qsetArray.length;
    timerCountDown.textContent = timer;

    clearInterval(intervalID);
    intervalID = setInterval(function () {
        timer--;
        timerCountDown.textContent = timer;
        var done = false;

        if (timer <= 0) {
            timer = 0;
            clearInterval(intervalID);
            timerCountDown.textContent = "0";
            alert('Time Out!');
            done = true;
        }
        // submit page shows up, clear the interval
        if (initialQuestion >= qsetArray.length) {
            timerCountDown.textContent = "0";
            clearInterval(intervalID);
            done = true;
        }

        if (done) {
            quizSubmissionEl.style.display = 'block';
            quizQuestionsEl.style.display = 'none';

        }

    }, 1000);
}

// QUIZ STARTS //

startQuizbtn.addEventListener('click', function () {
    quizQuestionsEl.style.display = 'block';
    quizMainEl.style.display = 'none';
    startQuizbtn.style.display = 'none';
    quizStart();
    resetTimer();
})

var quizStart = function () {
    questionChoice.innerText = qsetArray[initialQuestion].question;
    choiceButton1.innerText = qsetArray[initialQuestion].opt1;
    choiceButton2.innerText = qsetArray[initialQuestion].opt2;
    choiceButton3.innerText = qsetArray[initialQuestion].opt3;
    choiceButton4.innerText = qsetArray[initialQuestion].opt4;
};

// adding event listener to ensure question change occurs when the user clicks on an option

for (i = 0; i < choiceButtons.length; i++) {
    var choiceButton = choiceButtons[i]
    choiceButton.addEventListener('click', function handleclick(event) {
        // the choice is evaluated for correctness
        var clickedButton = event.target
        var chosenAnswer = clickedButton.getAttribute('data-value');
        var correctAnswer = qsetArray[initialQuestion].corAns;
        var wereTheyCorrect = chosenAnswer == correctAnswer;

        // I want to verify if the chosen answer is equal to the correct answer.
        // if so, we want to display correct. Else, we want to display incorrect

        if (chosenAnswer == correctAnswer) {

            correctEl.style.display = 'block';
            score += 25;
            userScore.textContent = score;
        }
        else {
            incorrectEl.style.display = 'block';
            timer -= 15;
        }

        // this function is timing the answer evaluations
        setTimeout(function () {
            correctEl.style.display = 'none'
            incorrectEl.style.display = 'none'
            initialQuestion += 1
            quizStart();
        }, 1000);

    })

};

// SUBMISSION & SUBMIT BUTTON ACTION

submitButton.addEventListener('click', function submitclick(event) {

    const key = inputNameEl.value;
    const value = score;

    if (key && value) {
        localStorage.setItem(key, value)  
    }
    
    // Logic loops through local storage and saves newly entered scores
    // to the score board
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        highScoreListEl.innerHTML += `${key}: ${value}<br />`;
    }
})

// 'ONE MORE TIME' BUTTON ACTION
oneMoreBtn.onclick = function () {
    location.reload(); // Reload method is equivalent to the refresh button on the browser
};

// VIEW HIGHSCORE
viewHighScoresHeaderEl.addEventListener('click', function viewScoresHead(event) {
    quizSubmissionEl.style.display = 'none';
    quizQuestionsEl.style.display = 'none';
    highScoresEl.style.display = 'block';
})

// 'CLEAR' BUTTON ACTION

clearButton.onclick = function () {
    localStorage.clear();
    quizSubmissionEl.style.display = 'none';
    quizQuestionsEl.style.display = 'none';
    quizMainEl.style.display = 'none';
    highScoresEl.style.display = 'block';
    
    //scoreRender();
}

// 'GO BACK' BUTTON ACTION
goBackButton.onclick = function () {
    quizSubmissionEl.style.display = 'block';
    quizQuestionsEl.style.display = 'none';
    highScoresEl.style.display = 'none';
    quizMainEl.style.display = 'none';
}