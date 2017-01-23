'user strict';

var questionObjects = []; // this will hold our question objects

var mainEl = document.getElementById('question-section');
var divLeftEl, divCenterEl, divRightEl, imgLeftEl, imgCenterEl, imgRightEl, pLeftEl, pCenterEl, pRightEl;

var questions = ['What level of difficulty are you looking for in a hike?', 'How do you feel about dogs and kids?', 'How much elevation gain are you willing to climb?', 'Which region do you prefer?', 'Which hiking movie did you like best?', 'If you HAD to choose, how would you rather die?', 'Do you require a spectacular view?', 'Are you looking for a hike with a lake, river, or waterfall?', 'Would you have cut off your arm? (ie; 127 hours, Aron Ralston)', ' Are you opposed to paying for parking?'];

var textResponses = [['Taking a stroll across the Shire', 'Just to Rivendell and back', 'Taking the ring to Mount Doom'], ['Omg love them!', 'Neither here-nor-there', 'Ugh, is there a difference?'], ['Not much at all', 'A fair amount', 'I want the hike to take my breath away...literally'], ['Local (Washington State)', 'About an hour away', 'Literally as far away as possible'], ['Homeward Bound', 'Wild', 'Into Thin Air'], ['Of boredom ', 'Bears!', 'Avalanche'], ['I’m all about the journey', 'Yes! Do it for the gram!', 'I want to stand on the top of the world'], ['Yes', 'No', 'I’m looking not-die, how about that'], ['LOL NOPE', 'Depends (on which arm, do I have life insurance, are there camera crews nearby, etc)', 'Already have. I am Aron Ralston.'], ['Yes, morally', 'I’m willing to pay for parking, let’s get started!', 'Literally not worried about my car, man']];

var filePathResponses = []; // this will be a 2d array that holds 3 filepath strings per element

function Question(question, textResponses, filePathResponses) {
  this.question = question;
  this.textResponses = textResponses;
  this.filePathResponses = filePathResponses;
}

function createImages() {
  for (var i = 0; i < 1; i++) {
    questionObjects.push(new Question(questions[i], textResponses[i], filePathResponses));
  }
}

function displayQuestion(questionIndex) {
  divLeftEl = document.createElement('div');
  divLeftEl.setAttribute('id', 'left');
  imgLeftEl = document.createElement('img');
  imgLeftEl.setAttribute('src', filePathResponses[questionIndex][0]);
  pLeftEl = document.createElement('p');
  pLeftEl.setAttribute('id', 'left');
  pLeftEl.textContent = textResponses[questionIndex][0];

  divCenterEl = document.createElement('div');
  divCenterEl.setAttribute('id', 'center');
  imgCenterEl = document.createElement('img');
  imgCenterEl.setAttribute('src', filePathResponses[questionIndex][1]);
  pCenterEl = document.createElement('p');
  pCenterEl.setAttribute('id', 'center');
  pCenterEl.textContent = textResponses[questionIndex[1]];

  divRightEl = document.createElement('div');
  divRightEl.setAttribute('id', 'right');
  imgRightEl = document.createElement('img');
  imgRightEl.setAttribute('src', filePathResponses[questionIndex][2]);
  pRightEl = document.createElement('p');
  pRightEl.setAttribute('id', 'right');
  pRightEl.textContent[questionIndex][2];

  divLeftEl.appendChild(imgLeftEl);
  divLeftEl.appendChild(pLeftEl);
  divCenterEl.appendChild(imgCenterEl);
  divCenterEl.appendChild(pCenterEl);
  divRightEl.appendChild(imgRightEl);
  divRightEl.appendChild(pRightEl);

  mainEl.appendChild(divLeftEl);
  mainEl.appendChild(divCenterEl);
  mainEl.appendChild(divRightEl);
}

createImages();
displayQuestion(0);
