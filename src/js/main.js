const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');

class Question{
  constructor(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
  print(){
    console.log(this.question, this.options, this.answer);
  }
}

const questions = new Question('Which game was the only one to not feature the hidden blade?', {btn1:'AC Odyssey', btn2:'AC Origins', btn3:'Assassin\'s Creed', btn4:'Assassin\'s Creed 2'}, 'AC Odyssey')

questions.print();


class Quiz{
  constructor(){

  }
  startGame(){
    start.classList.add('hide');
    questionArea.classList.remove('hide');
  }
}

const quiz = new Quiz();

start.addEventListener('click', function(e){
  e.preventDefault();
  quiz.startGame();
  // alert('You clicked me!')
})
