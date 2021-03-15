var quizMainEl = document.getElementById('quiz-main');
var quizQuestionsEl = document.getElementById('quiz-questions');
var quizSubmissionEl = document.getElementById('quiz-submission');
var highScoresEl = document.getElementById('high-scores');
var startQuizbtn = document.getElementById('start-quiz');
var questionChoice = document.getElementById('question-choice');
var choiceButton1 = document.getElementById('choiceButton1');
var choiceButton2 = document.getElementById('choiceButton2');
var choiceButton3 = document.getElementById('choiceButton3');
var choiceButton4 = document.getElementById('choiceButton4');
var choiceButtons = document.getElementsByClassName('choiceButton');
var initialQuestion = 0;

quizQuestionsEl.style.display = 'none';
quizSubmissionEl.style.display = 'none';
highScoresEl.style.display = 'none';

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
        question: '2. Who is Bane?',
        opt1: 'Nothing, Python rules',
        opt2: 'Function and dynamics',
        opt3: 'It rules CSS and HTML',
        opt4: "'it's a browser database'",
        corAns: '2'
    }
];

startQuizbtn.addEventListener('click',function(){
    quizQuestionsEl.style.display = 'block';
    quizMainEl.style.display = 'none';
    startQuizbtn.style.display = 'none';
    quizStart();
})

var quizStart = function() {
    questionChoice.innerText=qsetArray[initialQuestion].question;
    choiceButton1.innerText=qsetArray[initialQuestion].opt1;
    choiceButton2.innerText=qsetArray[initialQuestion].opt2;
    choiceButton3.innerText=qsetArray[initialQuestion].opt3;
    choiceButton4.innerText=qsetArray[initialQuestion].opt4;
};



    for (i = 0; i < choiceButtons.length; i++) {
        console.log('Hello')
    };
