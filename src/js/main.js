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
  getStarted(){
    return this.questions[this.questionIndex];
  }
  choice(choice){
    if(choice === this.questions[this.questionIndex].answer){
      this.score++;
    }
    this.nextQuestion();
  }
  nextQuestion(){
    this.questionIndex++;
  }
  endQuiz(){
    if(this.questionIndex === this.questions.length){
      console.log(`The game has ended!`);
    }
  }
}

class UI{
  static startGame(){
    start.classList.add('hide');
    questionArea.classList.remove('hide');
    questionLine.innerHTML = UI.question();
    answerArea.innerHTML = UI.answers();
    // answerArea.innerHTML = `pop`;
    progressArea.innerHTML = UI.progress();
  }
  static question(){
    return quiz.getStarted().question;
  }
  static answers(){
    // console.log(quiz.getStarted().options.length);
    for (let i = 0; i < quiz.getStarted().options.length; i++) {
      return "<button>" + quiz.getStarted().options + "</button>";
    }
  }
  static progress(){
    return `Question ${quiz.questionIndex + 1} of ${quiz.questions.length}`;
  }
}

// **** UI
//   startGame(){
//     start.classList.add('hide');
//     questionArea.classList.removeadd('hide');
//     this.setQuestion();
//   }
//   setQuestion(){
//     answerArea.innerHTML = ``;
//     progressArea.innerHTML = ``;
//     questionLine.innerHTML = this.questions[this.questionIndex].question;
//     this.questions[this.questionIndex].options.forEach(option => {
//       answerArea.innerHTML += `<button id="btn">` + option + `</button>`;
//     })
//     progressArea.innerHTML = `On question ` + (this.questionIndex + 1) + ` of ` + this.questions.length;
//     this.choice();
//   }
//   choice(){
//     document.addEventListener('click', function(e){
//       if(e.target.id === 'btn'){
//         this.handleAnswer(e.target.innerText);
//       }
//     })
//   }
//   handleAnswer(choice){
//     console.log(choice)
//   }
//   endQuiz(){
//     if(this.questionIndex === this.questions.length){
//       return `The quiz has ended!`;
//     }
//   }
// }

let questions1 = new Question(`Which game does not feature the hidden blade?`, [`AC Odyssey`, `AC Origins`, `Assassin's Creed`, `Assassin's Creed 2`], `AC Odyssey`);
let questions2 = new Question(`To get the early version of the hidden blade, which finger did you lose?`, [`The middle finger`, `The ring finger`, `The index finger`, `The pinky finger`],`The ring finger`);
let questions3 = new Question(`Which historical figure doesn't appear in the Assassin's Creed series?`, [`Michelangelo`, `Pythagoras`, `Cleopatra`, `Sir Arthur Conan Doyle`], `Sir Arthur Conan Doyle`);
let questions4 = new Question(`Which game was the only one to not feature the hidden blade?`, [`AC Odyssey`, `AC Origins`, `Assassin's Creed`, `Assassin's Creed 2`], `AC Odyssey`);
let questions5 = new Question(`Which section of history hasn't been explored in the game series`, [`Ancient Egypt`, `Victorian England`, `Ancient Rome`, `Renaissance Italy`], `Ancient Rome`);

let quiz = new Quiz([questions1, questions2, questions3, questions4,questions5]);

// quiz.getStarted();
// quiz.choice(`AC Odyssey`);
// quiz.nextQuestion();
// quiz.getStarted();
// quiz.choice(`The ring finger`);
// quiz.nextQuestion();
// quiz.getStarted();
// quiz.choice(`Sir Arthur Conan Doyle`);
// quiz.nextQuestion();
// quiz.getStarted();
// quiz.choice(`AC Origins`);
// quiz.nextQuestion();
// quiz.getStarted();
// quiz.choice(`Ancient Rome`);

start.addEventListener(`click`, function(e){
  e.preventDefault();
  UI.startGame();
})