'user strict';

var questionObjects = []; // this will hold our question objects

var mainEl = document.getElementById('question-section');
var divLeftEl, divCenterEl, divRightEl, imgLeftEl, imgCenterEl, imgRightEl, pLeftEl, pCenterEl, pRightEl, h2El;
var clickCounter = 0;
var easyHikeCounter = 0;
var mediumHikeCounter = 0;
var hardHikeCounter = 0;
var totalEasyHikeCounter = 0;
var totalMediumHikeCounter = 0;
var totalHardHikeCounter = 0;
var counters = [];

// holds the actual questions in an array
var questions = ['What level of difficulty are you looking for in a hike?', 'How do you feel about dogs and kids?', 'How much elevation gain are you willing to climb?', 'Which region do you prefer?', 'Which hiking movie did you like best?', 'If you HAD to choose, how would you rather die?', 'Do you require a spectacular view?', 'Are you looking for a hike with a lake, river, or waterfall?', 'Would you have cut off your arm? (ie; 127 hours, Aron Ralston)', ' Are you opposed to paying for parking?'];

// holds the responses to the questions in a 2-D array. Each array has an array with three responses
var textResponses = [['Taking a stroll across the Shire', 'Just to Rivendell and back', 'Taking the ring to Mount Doom'], ['Omg love them!', 'Dogs are cool, but kids probably not', 'Good sustenance'], ['Not much at all', 'A fair amount', 'I want the hike to take my breath away...literally'], ['Local (Washington State)', 'About an hour away', 'Literally as far away as possible'], ['Homeward Bound', 'Wild', 'Into Thin Air'], ['Of boredom ', 'Bears!', 'Avalanche'], ['I’m all about the journey', 'Yes! Do it for the gram!', 'I want to stand on the top of the world'], ['Yes', 'Not particularly', 'All I care about is elevation'], ['LOL NOPE', 'Depends (on which arm, do I have life insurance, are there camera crews nearby, etc)', 'Already have. I am Aron Ralston.'], ['Yes, morally', 'I’m willing to pay for parking, let’s get started!', 'Where we\'re going, we don\'t need roads']];

// holds the filepaths to the images for the responses in a 2-D array. Each question has 3 images
var filePathResponses = [['img/Q1-left.jpg', 'img/Q1-center.jpg', 'img/Q1-right.jpg'], ['img/Q2-left.jpg', 'img/Q2-center.jpg', 'img/Q2-right.jpg'], ['img/Q3-left.jpg', 'img/Q3-center.jpg', 'img/Q3-right.jpg'], ['img/Q4-left.jpg', 'img/Q4-center.jpg', 'img/Q4-right.jpg'], ['img/Q5-left.jpg', 'img/Q5-center.jpg', 'img/Q5-right.jpg'], ['img/Q6-left.jpg', 'img/Q6-center.jpg', 'img/Q6-right.jpg'], ['img/Q7-left.jpg', 'img/Q7-center.jpg', 'img/Q7-right.jpg'], ['img/Q8-left.jpg', 'img/Q8-center.jpg', 'img/Q8-right.jpg'], ['img/Q9-left.jpg', 'img/Q9-center.jpg', 'img/Q9-right.jpg'], ['img/Q10-left.jpg', 'img/Q10-center.jpg', 'img/Q10-right.jpg']]; // this will be a 2d array that holds 3 filepath strings per element

// Question constructor
function Question(question, textResponses, filePathResponses) {
  this.question = question;
  this.textResponses = textResponses;
  this.filePathResponses = filePathResponses;
}

// creates question objects an places them in an array
function createQuestions() {
  for (var i = 0; i < 10; i++) {
    questionObjects.push(new Question(questions[i], textResponses[i], filePathResponses[i]));
  }
}

// creates the DOM elements to display the question data on webpage
function displayQuestion(questionIndex) {
  h2El = document.createElement('h2');
  h2El.setAttribute('class', 'question-text');
  h2El.textContent = questions[questionIndex];
  divLeftEl = document.createElement('div');
  divLeftEl.setAttribute('class', 'left');
  divLeftEl.setAttribute('id', 'left-div');
  imgLeftEl = document.createElement('img');
  imgLeftEl.setAttribute('src', filePathResponses[questionIndex][0]);
  imgLeftEl.setAttribute('class', 'left image-border');
  imgLeftEl.setAttribute('width', '250');
  imgLeftEl.setAttribute('height', '250');
  pLeftEl = document.createElement('p');
  pLeftEl.setAttribute('class', 'left question-text');
  pLeftEl.textContent = textResponses[questionIndex][0];

  divCenterEl = document.createElement('div');
  divCenterEl.setAttribute('class', 'center');
  divCenterEl.setAttribute('id', 'center-div');
  imgCenterEl = document.createElement('img');
  imgCenterEl.setAttribute('src', filePathResponses[questionIndex][1]);
  imgCenterEl.setAttribute('class', 'center image-border');
  imgCenterEl.setAttribute('width', '250');
  imgCenterEl.setAttribute('height', '250');
  pCenterEl = document.createElement('p');
  pCenterEl.setAttribute('class', 'center question-text');
  pCenterEl.textContent = textResponses[questionIndex][1];

  divRightEl = document.createElement('div');
  divRightEl.setAttribute('class', 'right');
  divRightEl.setAttribute('id', 'right-div');
  imgRightEl = document.createElement('img');
  imgRightEl.setAttribute('src', filePathResponses[questionIndex][2]);
  imgRightEl.setAttribute('class', 'right image-border');
  imgRightEl.setAttribute('width', '250');
  imgRightEl.setAttribute('height', '250');
  pRightEl = document.createElement('p');
  pRightEl.setAttribute('class', 'right question-text');
  pRightEl.textContent = textResponses[questionIndex][2];

  mainEl.appendChild(h2El);
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

// removes the question data from the webpage
function removeQuestion() {
  mainEl.removeChild(h2El);
  divLeftEl.removeChild(imgLeftEl);
  divLeftEl.removeChild(pLeftEl);
  mainEl.removeChild(divLeftEl);
  divCenterEl.removeChild(imgCenterEl);
  divCenterEl.removeChild(pCenterEl);
  mainEl.removeChild(divCenterEl);
  divRightEl.removeChild(imgRightEl);
  divRightEl.removeChild(pRightEl);
  mainEl.removeChild(divRightEl);
}

// returns the counter to the hike with the most clicks
function getResult() {
  return counters.indexOf(Math.max(...counters)); //this works... trust us
}

// displays the result page including a link to the hike with the highest tally
function renderResult() {
  var h1El = document.createElement('h1');
  h1El.setAttribute('class', 'question-text');
  h1El.textContent = 'Thank you for playing! Your perfect hike is: ';
  var aEl = document.createElement('a');
  aEl.setAttribute('class', 'results-text');

  if (getResult() === 0) {
    aEl.setAttribute('href', 'Results-Arboretum.html')
  } else if (getResult() === 1) {
    aEl.setAttribute('href', 'Results-West-Tiger.html')
  } else {
    aEl.setAttribute('href', 'Results-Annapurna.html')
  }

  aEl.textContent = 'Results';
  h1El.appendChild(aEl);
  mainEl.appendChild(h1El);
}

// get hike tallies from local storage
function getLocalStorage() {
  if (localStorage.length > 0) {
    totalEasyHikeCounter = JSON.parse(localStorage.getItem('totalEasyHikeCounter'));
    totalMediumHikeCounter = JSON.parse(localStorage.getItem('totalMediumHikeCounter'));
    totalHardHikeCounter = JSON.parse(localStorage.getItem('totalHardHikeCounter'));
  }
}

// this function gets called when user clicks a response
function onClickResponse(event) {
  event.preventDefault();
  event.stopPropagation();

  console.log(event.target.getAttribute('class').split(' ')[0]);
  clickCounter++;

  if (event.target.getAttribute('class').split(' ')[0] === 'left') {
    easyHikeCounter++;
    totalEasyHikeCounter++;
  } else if (event.target.getAttribute('class').split(' ')[0] === 'center') {
    mediumHikeCounter++;
    totalMediumHikeCounter++;
  } else {
    hardHikeCounter++;
    totalHardHikeCounter++;
  }

  if(clickCounter < 10) {
    removeQuestion();
    displayQuestion(clickCounter);
    divLeftEl.addEventListener('click', onClickResponse, false);
    divCenterEl.addEventListener('click', onClickResponse, false);
    divRightEl.addEventListener('click', onClickResponse, false);
  } else {
    localStorage.setItem('totalEasyHikeCounter', JSON.stringify(totalEasyHikeCounter));
    localStorage.setItem('totalMediumHikeCounter', JSON.stringify(totalMediumHikeCounter));
    localStorage.setItem('totalHardHikeCounter', JSON.stringify(totalHardHikeCounter));

    // add counters to an array in order to get the one with most clicks
    counters.push(easyHikeCounter);
    counters.push(mediumHikeCounter);
    counters.push(hardHikeCounter);
    removeQuestion();
    renderResult();
  }
}

/********************************** CONTROL FLOW ******************************/
createQuestions();
getLocalStorage();
displayQuestion(0);

divLeftEl.addEventListener('click', onClickResponse, false);
divCenterEl.addEventListener('click', onClickResponse, false);
divRightEl.addEventListener('click', onClickResponse, false);
