const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');
const questionLine = document.querySelector('.question');
const answerArea = document.getElementById('answers');
const progressArea = document.querySelector('.progress');

// const a1 = document.querySelector('.answer1');
// const a2 = document.querySelector('.answer2');
// const a3 = document.querySelector('.answer3');
// const a4 = document.querySelector('.answer4');

// const questions = [
//   {question: 'Who started the Brotherhood?', choices: ['Altir', 'Ezio', 'Bayek', 'Kasandra'], answer: 'Bayek'},
//   {question: 'To get the early version of the hidden blade \, which finger did you lose?', a1: 'The middle finger', a2: 'The ring finger', a3: 'The index finger', a4: 'The pinky finger', answer: 'The ring finger'},
//   {question: 'Who didn\'t appear in the Assassin\'s Creed series?', a1: 'Michelo Angelo', a2: 'Pythagoras', a3: 'Cleopatra', a4: 'Sir Arthur Conan Doyle', answer: 'Sir Arthur Conan Doyle' },
//   {question: 'Which game was the only one to not feature the hidden blade?', a1: 'AC Odyssey', a2: 'AC Origins', a3: 'Assassin\'s Creed', a4: 'Assassin\'s Creed 2', answer:	'AC Odyssey'},
// ];

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

class Quiz{
  constructor(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  startGame(){
    start.classList.add('hide');
    questionArea.classList.remove('hide');
    return this.setQuestion();
  }
  setQuestion(questions){
    console.log(this.questions[this.questionIndex]);
    answerArea.innerHTML = ``;
    progressArea.innerHTML = ``;
    questionLine.innerHTML = this.questions[this.questionIndex].question;
    console.log(this.questions[this.questionIndex].options);
    this.questions[this.questionIndex].options.forEach(option => {
      console.log(option);
      answerArea.innerHTML += "<button class='btn'>" + option + "</button>";
    })
    progressArea.innerHTML = `On question ` + (this.questionIndex + 1) + ` of ` + this.questions.length;
    
    // for (var i = 0; i < this.questions.length; i++) {
    //   answerArea.innerHTML += 'but';
    //   // answerArea.innerHTML += "<button class='btn'>" + this.questions.options[i] + "</button>";
    // }
    // let singleQuestion = this.questions[this.questionIndex];
    // for (var i = 0; i < this.options.length; i++) {
    //   answerArea.innerHTML = "<button>" + this.questions[this.questionIndex].answer + "</button>";
    // }

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

let questions1 = new Question('Which game was the only one to not feature the hidden blade?', ['AC Odyssey', 'AC Origins', 'Assassin\'s Creed', 'Assassin\'s Creed 2'], 'AC Odyssey');
let questions2 = new Question('To get the early version of the hidden blade \, which finger did you lose?', ['The middle finger', 'The ring finger', 'The index finger', 'The pinky finger'],'The ring finger');
let questions3 = new Question('Who didn\'t appear in the Assassin\'s Creed series?', ['Michelo Angelo', 'Pythagoras', 'Cleopatra', 'Sir Arthur Conan Doyle'], 'Sir Arthur Conan Doyle');
let questions4 = new Question('Which game was the only one to not feature the hidden blade?', ['AC Odyssey', 'AC Origins', 'Assassin\'s Creed', 'Assassin\'s Creed 2'], 'AC Odyssey');
let questions5 = new Question('Which section of history hasn\'t been explored in the game series', ['Ancient Egypt', 'Victorian England', 'Ancient Rome', 'Renaissance Italy'], 'Ancient Rome');

let quiz = new Quiz([questions1, questions2, questions3, questions4,questions5]);

start.addEventListener('click', function(e){
  e.preventDefault();
  quiz.startGame();
  quiz.print();
  // alert('You clicked me!')
  // startGame();
})