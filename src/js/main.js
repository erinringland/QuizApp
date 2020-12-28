const start = document.querySelector('.startQuiz');
const questionArea = document.querySelector('.question-area');
const introPara = document.querySelector('.intro-para');
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
    this.questionIndex++;
  }
  endQuiz(){
    if(this.questionIndex === this.questions.length){
      return true;
    }
  }
}
class UI{
  static startGame(){
    start.classList.add('hide');
    introPara.classList.add('hide');
    questionArea.classList.remove('hide');
    quiz.getStarted();
  }
  static render(){
    if(quiz.endQuiz()){
      this.end();
    } else {
      questionLine.innerHTML = quiz.getStarted().question;
      let choices = quiz.getStarted().options;
      for (let i = 0; i < choices.length; i++) {
        let element = document.getElementById('choice' + i);
        element.innerHTML = choices[i];
        this.guess("btn" + i, choices[i]);
      }
      progressArea.innerHTML = `Question ${quiz.questionIndex + 1} of ${quiz.questions.length}`;
    }
  }
  static guess(id, choice) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.choice(choice);
      UI.render();
    }
  }
  static end(){
    questionLine.innerHTML = ``;
    answerArea.innerHTML = `Your score is ${quiz.score}`;
    progressArea.innerHTML = ``;
    const expr = quiz.score;
    switch (expr) {
      case 1:
      case 2:
      case 3:
        console.log(`You need to train more! Keep going!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, You need to train more! Keep going!`;
        break;
      case 4:
      case 5:
      case 6:
        console.log(`Good job! Keep training!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, Good job! Keep training!`;
        break;
      case 7:
      case 8:
      case 9:
        console.log(`Your hard work is paying off! Keep going!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, Your hard work is paying off! Keep going!`;
        break;  
      case 10:
      case 11:
        console.log(`You're almost there! Keep trying!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, You're almost there! Keep trying!`;
        break;  
      case 12:
        console.log(`Congratulations! You are a Master Assassin!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, Congratulations! You are a Master Assassin!`;
        break;
      default:
        console.log(`Sorry, you need to train more!`);
        answerArea.innerHTML = `Your score is ${quiz.score}, Sorry, you need to train more!`;
    }

  } 
}

let questions1 = new Question(`Which game does not feature the hidden blade?`, [`AC Odyssey`, `AC Origins`, `Assassin's Creed`, `Assassin's Creed 2`], `AC Odyssey`);
let questions2 = new Question(`To get the early version of the hidden blade, which finger did you lose?`, [`The middle finger`, `The ring finger`, `The index finger`, `The pinky finger`],`The ring finger`);
let questions3 = new Question(`Which historical figure doesn't appear in the series?`, [`Michelangelo`, `Pythagoras`, `Cleopatra`, `Sir Arthur Conan Doyle`], `Sir Arthur Conan Doyle`);
let questions4 = new Question(`Which section of history hasn't been explored in the game series`, [`Ancient Egypt`, `Victorian England`, `Ancient Rome`, `Renaissance Italy`], `Ancient Rome`);
let questions5 = new Question(`Which Assassins are related?`, [`Evie & Jacob`, `Connor & Edward`, `Kassandra & Aya`, `All`], `All`);
let questions6 = new Question(`Who started the Brotherhood?`, [`Ezio`, `Altaïr`, `Bayek`, `Kassandra`], `Bayek`);
let questions7 = new Question(`Which European city hasn't been featured in a game?`, [`Berlin`, `Paris`, `Rome`, `London`], `Berlin`);
let questions8 = new Question(`Which historic monument can you NOT climb?`, [`The Pyramids of Giza`, `Big Ben`, `Statue of Liberty`, `Statue of Zeus at Olympia`], `Statue of Liberty`);
let questions9 = new Question(`What era does the latest game explore?`, [`Ancient Greece`, `9 A.D. England`, `Victorian England`, `Renaissance Italy`], `9 A.D. England`);
let questions10 = new Question(`Who was featured in three games?`, [`Evie`, `Arno`, `Ezio`, `Altaïr`], `Ezio`);
let questions11 = new Question(`Which contient hasn't been explored?`, [`Australia`, `North America`, `Africa`, `Asia`], `Australia`);
let questions12 = new Question(`Which famous family are the antagonists in Assassin's Creed 2?`, [`The Borgias`, `The Medicis`, `The Aragons`, `The Sforzas`], `The Borgias`);

let quiz = new Quiz([questions1, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12]);

start.addEventListener(`click`, function(e){
  e.preventDefault();
  UI.startGame();
})
UI.render();

// const expr = 0;
// switch (expr) {
//   case 1:
//   case 2:
//   case 3:
//     console.log(`You need to train more! Keep going!`);
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log(`Good job! Keep training!`);
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log(`Your hard work is paying off! Keep going!`);
//     break;  
//   case 10:
//   case 11:
//     console.log(`You're almost there! Keep trying!`);
//     break;  
//   case 12:
//     console.log(`Congratulations! You are a Master Assassin!`);
//     break;
//   default:
//     console.log(`Sorry, you need to train more!`);
// }