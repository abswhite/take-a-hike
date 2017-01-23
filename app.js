'user strict';

var questionObjects = []; // this will hold our question objects

var questions = ['What level of difficulty are you looking for in a hike?', 'How do you feel about dogs and kids?', 'How much elevation gain are you willing to climb?', 'Which region do you prefer?', 'Which hiking movie did you like best?', 'If you HAD to choose, how would you rather die?', 'Do you require a spectacular view?', 'Are you looking for a hike with a lake, river, or waterfall?', 'Would you have cut off your arm? (ie; 127 hours, Aron Ralston)', ' Are you opposed to paying for parking?'];

var textResponses = [['Taking a stroll across the Shire', 'Just to Rivendell and back', 'Taking the ring to Mount Doom'], ['Omg love them!', 'Neither here-nor-there', 'Ugh, is there a difference?'], ['Not much at all', 'A fair amount', 'I want the hike to take my breath away...literally'], ['Local (Washington State)', 'About an hour away', 'Literally as far away as possible'], ['Homeward Bound', 'Wild', 'Into Thin Air'], ['Of boredom ', 'Bears!', 'Avalanche'], ['I’m all about the journey', 'Yes! Do it for the gram!', 'I want to stand on the top of the world'], ['Yes', 'No', 'I’m looking not-die, how about that'], ['LOL NOPE', 'Depends (on which arm, do I have life insurance, are there camera crews nearby, etc)', 'Already have. I am Aron Ralston.'], ['Yes, morally', 'I’m willing to pay for parking, let’s get started!', 'Literally not worried about my car, man']];

var filePathResponses = ['img/bear-angry.jpg', 'img/bear.jpg', 'img/dog-grumpy-blanket.jpg'];

function Question(question, textResponses, filePathResponses) {
  this.question = question;
  this.textResponses = textResponses;
  this.filePathResponses = filePathResponses;
}

function createImages() {
  for (var i = 0; i < 2; i++) {
    questionObjects.push(new Question(questions[i], textResponses[i], filePathResponses[i]));
  }
}

function displayQuestion(questionObject) {
  
}
