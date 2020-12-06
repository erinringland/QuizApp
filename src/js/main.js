const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');
const questionLine = document.querySelector('.question');
const a1 = document.querySelector('.answer1');
const a2 = document.querySelector('.answer2');
const a3 = document.querySelector('.answer3');
const a4 = document.querySelector('.answer4');

const questions = [
  {question: 'Who started the Brotherhood?', a1: 'Altir', a2: 'Ezio', a3: 'Bayek', a4: 'Kasandra', answer: 'Bayek'},
  {question: 'To get the early version of the hidden blade \, which finger did you lose?', a1: 'The middle finger', a2: 'The ring finger', a3: 'The index finger', a4: 'The pinky finger', answer: 'The ring finger'},
  {question: 'Who didn\'t appear in the Assassin\'s Creed series?', a1: 'Michelo Angelo', a2: 'Pythagoras', a3: 'Cleopatra', a4: 'Sir Arthur Conan Doyle', answer: 'Sir Arthur Conan Doyle' },
  {question: 'Which game was the only one to not feature the hidden blade?', a1: 'AC Odyssey', a2: 'AC Origins', a3: 'Assassin\'s Creed', a4: 'Assassin\'s Creed 2', answer:	'AC Odyssey'},
];

const findArr = questions[1];

console.log(findArr);

class Quiz{
  constructor(){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  startGame(){
    start.classList.add('hide');
    questionArea.classList.remove('hide');
    this.setQuestion();
  }
  setQuestion(){
    console.log(questions[this.questionIndex]);
    this.nextQuestion(questions[this.questionIndex]);
  }
  nextQuestion(question){
    console.log(this.setQuestion);
    questionLine.innerHTML = this.setQuestion.question;
  }
  print(){
    console.log(this.questions);
  }
}

const quiz = new Quiz();

start.addEventListener('click', function(e){
  e.preventDefault();
  quiz.startGame();
  quiz.print();
  // alert('You clicked me!')
})