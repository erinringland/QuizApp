// const start = document.querySelector('.startQuiz');
// const questionArea = document.querySelector('.question-area');
// const questionLine = document.querySelector('.question');
// const answerArea = document.getElementById('answers');
// const progressArea = document.querySelector('.progress');

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
    console.log('Question: ' + this.questions[this.questionIndex].question);
    console.log(this.questions[this.questionIndex].options);
    console.log(this.questions[this.questionIndex].answer);
  }
  choice(choice){
    console.log('Your choice is: ' + choice);
    if(choice === this.questions[this.questionIndex].answer){
      console.log(`You're right!`)
      this.score++;
      console.log(`You're score is now ${this.score}`)
    } else{
    console.log(`You're wrong!`)
    console.log(`You're score is now ${this.score}`)
    }
    console.log(`${this.questionIndex + 1} question of ${this.questions.length}`);

  }
  nextQuestion(){
    this.questionIndex++;
  }
  endQuiz(){
    if(this.questionIndex === this.questions.length){
      console.log('The game has ended!')
    }
  }
}

class UI{
  constructor(){
    
  }
}


// **** UI
//   startGame(){
//     start.classList.add('hide');
//     questionArea.classList.remove('hide');
//     this.setQuestion();
//   }
//   setQuestion(){
//     answerArea.innerHTML = ``;
//     progressArea.innerHTML = ``;
//     questionLine.innerHTML = this.questions[this.questionIndex].question;
//     this.questions[this.questionIndex].options.forEach(option => {
//       answerArea.innerHTML += '<button id="btn">' + option + '</button>';
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
//       return 'The quiz has ended!';
//     }
//   }
// }

let questions1 = new Question('Which game was the only one to not feature the hidden blade?', ['AC Odyssey', 'AC Origins', 'Assassin\'s Creed', 'Assassin\'s Creed 2'], 'AC Odyssey');
let questions2 = new Question('To get the early version of the hidden blade \, which finger did you lose?', ['The middle finger', 'The ring finger', 'The index finger', 'The pinky finger'],'The ring finger');
let questions3 = new Question('Who didn\'t appear in the Assassin\'s Creed series?', ['Michelo Angelo', 'Pythagoras', 'Cleopatra', 'Sir Arthur Conan Doyle'], 'Sir Arthur Conan Doyle');
let questions4 = new Question('Which game was the only one to not feature the hidden blade?', ['AC Odyssey', 'AC Origins', 'Assassin\'s Creed', 'Assassin\'s Creed 2'], 'AC Odyssey');
let questions5 = new Question('Which section of history hasn\'t been explored in the game series', ['Ancient Egypt', 'Victorian England', 'Ancient Rome', 'Renaissance Italy'], 'Ancient Rome');

let quiz = new Quiz([questions1, questions2, questions3, questions4,questions5]);

quiz.getStarted();
quiz.choice(`AC Odyssey`);
quiz.nextQuestion();
quiz.getStarted();
quiz.choice(`The ring finger`);
quiz.nextQuestion();
quiz.getStarted();
quiz.choice(`Sir Arthur Conan Doyle`);
quiz.nextQuestion();
quiz.getStarted();
quiz.choice(`AC Origins`);
quiz.nextQuestion();
quiz.getStarted();
quiz.choice(`Ancient Rome`);
quiz.nextQuestion();
quiz.getStarted();
quiz.choice(`Ancient Rome`);
// start.addEventListener('click', function(e){
//   e.preventDefault();
//   quiz.startGame();
// })