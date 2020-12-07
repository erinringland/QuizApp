const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');
const questionLine = document.querySelector('.question');
const answerArea = document.querySelector('.answers');
const a1 = document.querySelector('.answer1');
const a2 = document.querySelector('.answer2');
const a3 = document.querySelector('.answer3');
const a4 = document.querySelector('.answer4');

const questions = [
  {question: 'Who started the Brotherhood?', choices: ['Altir', 'Ezio', 'Bayek', 'Kasandra'], answer: 'Bayek'},
  {question: 'To get the early version of the hidden blade \, which finger did you lose?', a1: 'The middle finger', a2: 'The ring finger', a3: 'The index finger', a4: 'The pinky finger', answer: 'The ring finger'},
  {question: 'Who didn\'t appear in the Assassin\'s Creed series?', a1: 'Michelo Angelo', a2: 'Pythagoras', a3: 'Cleopatra', a4: 'Sir Arthur Conan Doyle', answer: 'Sir Arthur Conan Doyle' },
  {question: 'Which game was the only one to not feature the hidden blade?', a1: 'AC Odyssey', a2: 'AC Origins', a3: 'Assassin\'s Creed', a4: 'Assassin\'s Creed 2', answer:	'AC Odyssey'},
];

// class Question{
//   constructor(question, options, answer){
//     this.question = question;
//     this.options = options;
//     this.answer = answer;
//   }
//   print(){
//     console.log(this.question, this.options, this.answer);
//   }
// }

class Quiz{
  constructor(){
    this.score = 0;
    // this.questions = questions;
    this.questionIndex = 0;
  }
  startGame(){
    start.classList.add('hide');
    questionArea.classList.remove('hide');
    this.setQuestion();
  }
  setQuestion(question){
    let singleQuestion = questions[this.questionIndex];
    questionLine.innerHTML = singleQuestion.question;
    for (var i = 0; i < questions.length; i++) {
      answerArea.innerHTML = "<button>" + questions[this.questionIndex].answer + "</button>";
    }
    // singleQuestion.choices.forEach(choice => {
    //   answerArea.innerHTML = choice;
    // })
    // singleQuestion.choices.forEach(answer => {
    //   let button = document.createElement('button')
    //   button.innerText = questions[this.questionIndex].choices.text;
    //   button.classList.add('btn');
    // })
    // for (var i = 0; i < questions.length; i++) {
    //   answerArea.innerHTML = "<button>" + questions[this.questionIndex].answer + "</button>";
    // }
    // var choices = quiz.getQuestionIndex().choices;
    // for(var i = 0; i < choices.length; i++) {
    //     var element = document.getElementById("choice" + i);
    //     element.innerHTML = choices[i];
    //     guess("btn" + i, choices[i]);
    // }
  }
  print(){
    // console.log(this.questions);
  }
}

// let shuffledQuestions, currentQuestionIndex;

// function startGame(){
//   start.classList.add('hide');
//   shuffledQuestions = questions.sort(() => Math.random() - .5);
//   currentQuestionIndex = 0;
//   questionArea.classList.remove('hide');
//   nextQuestion();
// }

// function nextQuestion(){
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }
// function showQuestion(question){
//   questionLine.innerText = question.question;

// }

// const questions = new Question('Which game was the only one to not feature the hidden blade?', ['AC Odyssey', 'AC Origins', 'Assassin\'s Creed', 'Assassin\'s Creed 2'], 'AC Odyssey')
const quiz = new Quiz();

start.addEventListener('click', function(e){
  e.preventDefault();
  quiz.startGame();
  quiz.print();
  // alert('You clicked me!')
  // startGame();
})