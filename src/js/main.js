const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');
const questionLine = document.querySelector('.question');
const answerArea = document.getElementById('answers');
const progressArea = document.querySelector('.progress');

class Question{
  constructor(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
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
    this.getStarted();
  }
  getStarted(){
    return this.questions[this.questionIndex];
  }
  choice(choice){
    if(choice === this.questions[this.questionIndex].answer){
      this.score++;
    }
    this.questionIndex++;
  }
  endQuiz(){
    if(this.questionIndex === this.questions.length){
      return true;
    }
  }
  render(){
    if(this.endQuiz()){
      this.end();
    } else{
      questionLine.innerHTML = this.getStarted().question;
      let choices = this.getStarted().options;
      for (let i = 0; i < choices.length; i++) {
        let element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        this.guess("btn" + i, choices[i]);
      }
      progressArea.innerHTML = `Question ${this.questionIndex + 1} of ${this.questions.length}`;
    }
  }
  guess(id, choice) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.choice(choice);
      quiz.render();
    }
  }
  end(){
    questionLine.innerHTML = ``;
    answerArea.innerHTML = `Your score is ${this.score}`;
    progressArea.innerHTML = ``;
  }
}

let questions1 = new Question(`Which game does not feature the hidden blade?`, [`AC Odyssey`, `AC Origins`, `Assassin's Creed`, `Assassin's Creed 2`], `AC Odyssey`);
let questions2 = new Question(`To get the early version of the hidden blade, which finger did you lose?`, [`The middle finger`, `The ring finger`, `The index finger`, `The pinky finger`],`The ring finger`);
let questions3 = new Question(`Which historical figure doesn't appear in the Assassin's Creed series?`, [`Michelangelo`, `Pythagoras`, `Cleopatra`, `Sir Arthur Conan Doyle`], `Sir Arthur Conan Doyle`);
let questions4 = new Question(`Which section of history hasn't been explored in the game series`, [`Ancient Egypt`, `Victorian England`, `Ancient Rome`, `Renaissance Italy`], `Ancient Rome`);

let quiz = new Quiz([questions1, questions2, questions3, questions4]);

start.addEventListener(`click`, function(e){
  e.preventDefault();
  quiz.startGame();
})
quiz.render();