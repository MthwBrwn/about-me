'use strict';

var moveOnRight = 'That\'s Correct! Let\'s Move On!! ';
var moveOnWrong = 'That\s not quite right, keep going! ';
var notYesNo = 'Hmmm, Try a Yes or No ';
var rightCount = 0;
var newUser = prompt('Thank you for visiting! What\'s your name?', 'guest');
console.log ('user name is:', newUser);


if (newUser=== 'guest'){
  alert('Guest is a boring name, but I respect your privacy!');
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know Matthew!');
}

var firstCodeQuestion = 'Is this the first coding school Matthew has attended?'; 
var doesCookQuestion = 'Does Matthew enjoy cooking?';
var fromHereQuestion = 'Is Matthew from Seattle?';
// var goodGuess = prompt(newUser + ', I\'d like to play a game . You have 6 tries. Think of a number between 1 and 64.', '1-64');
// var triviaGuess = prompt('Matthew is also a big fan of Trivia.  Here is a trivia question for you. Please come up with one of the top 7 countries in order of Gross Domestic Product (GDP) per capita.  This is the measured wealth of a nation divided by the number of people');

var firstCodeErrorMessage = 'Prior to CodeFellows Matthew had not attended a coding school';
var doesCookErrorMessage = 'Matthew enjoys cooking very much and is always looking for a new recipe to try';
var fromHereErrorMessage = 'Matthew is one of the few people in Seattle born in Seattle, but he likes meeting new people no matter where they are from.';

var yesCorrectAnswer = function (errorMessage, question){
  var userInput = prompt(question).toLowerCase(); 
  console.log (newUser + ' guessed', userInput );
  
  if (userInput.startsWith('y')) {
  confirm( moveOnRight );
  rightCount++;
  } else if (userInput.startsWith('n')) {
  confirm (moveOnWrong + errorMessage);
  } else {
  alert(notYesNo);
  }
  } ;
  yesCorrectAnswer(firstCodeErrorMessage, firstCodeQuestion);
  yesCorrectAnswer(doesCookErrorMessage, doesCookQuestion);
  yesCorrectAnswer(fromHereErrorMessage, fromHereQuestion);


var isSignQuestion = 'Wow. Matthew seems like a fire sign. Is Matthew a Leo?';
var sportsBallQuestion = 'So Matthew is from Seattle. Does Matthew watch the M\'s?';

var isSignErrorMessage = 'Prior to CodeFellows Matthew had not attended a coding school';
var sportsBallErrorMessage = 'Matthew enjoys cooking very much and is always looking for a new recipe to try';

var noCorrectAnswer = function (errorMessage, question){
  var userInput = prompt(question).toLowerCase(); 
  console.log (newUser + ' guessed', userInput );
  
  if (userInputs.startsWith('y')){
    confirm( moveOnWrong );
  } else if (userInput.startsWith('n')) {
    confirm (moveOnRight);
    rightCount++;
  } else {
    alert(notYesNo);
  }
  answerNoFunction(isSignErrorMessage, isSignQuestion);
  answerNoFunction(sportsBallErrorMessage, sportsBallQuestion);



//   var ourNewFunction = function (firstCode)
// { prompt('Is this the first coding school Matthew has attended?').toLowerCase(); 
// //var shortCode = firstCode.startsWith('y',0)
// console.log (newUser + ' guessed', firstCode + ' to firstCode');

// if (firstCode.startsWith('y')) {
//   confirm( moveOnRight );
//   rightCount++;
// } else if (firstCode.startsWith('n')) {
//   confirm (moveOnWrong + 'Prior to CodeFellows Matthew had not attended a coding school');
// } else {
//   alert(notYesNo);
// }
// ourNewFunction()


// console.log (newUser + ' guessed', firstCode + ' to firstCode');

// if (firstCode.startsWith('y')) {
//   confirm( moveOnRight );
//   rightCount++;
// } else if (firstCode.startsWith('n')) {
//   confirm (moveOnWrong + 'Prior to CodeFellows Matthew had not attended a coding school');
// } else {
//   alert(notYesNo);
// }



// question 1

// var ourNewFunction = function (firstCode)
// { prompt('Is this the first coding school Matthew has attended?').toLowerCase(); 
// //var shortCode = firstCode.startsWith('y',0)
// console.log (newUser + ' guessed', firstCode + ' to firstCode');

// if (firstCode.startsWith('y')) {
//   confirm( moveOnRight );
//   rightCount++;
// } else if (firstCode.startsWith('n')) {
//   confirm (moveOnWrong + 'Prior to CodeFellows Matthew had not attended a coding school');
// } else {
//   alert(notYesNo);
// }
// ourNewFunction()

// question 2 
// var doesCook = prompt('Does Matthew enjoy cooking?').toLowerCase();
// console.log (newUser + ' guessed', doesCook + ' to doesCook');

// if (doesCook.startsWith('y')){
//   confirm( moveOnRight );
//   rightCount++;
// } else if (doesCook.startsWith('n')) {
//   confirm (moveOnWrong + 'Matthew enjoys cooking very much and is always looking for a new recipe to try');
// } else {
//   alert(notYesNo);
// }

// question 3 
// var isSign = prompt('Wow. Matthew seems like a fire sign. Is Matthew a Leo?').toLowerCase();
// console.log (newUser + ' guessed', isSign + ' to isSign ');

// if (isSign.startsWith('y')){
//   confirm( moveOnWrong + 'Matthew was born June 25th so that makes him a Cancer.');
// } else if (isSign.startsWith('n')) {
//   confirm (moveOnRight);
//   rightCount++;
// } else {
//   alert(notYesNo);
// }

// question 4

// var fromHere = prompt('Is Matthew from Seattle?').toLowerCase();
// console.log (newUser + ' guessed', fromHere + ' to fromHere ');

// if (fromHere.startsWith('y')){
//   confirm( moveOnRight );
//   rightCount++;
// } else if (fromHere.startsWith('n')) {
//   confirm (moveOnWrong + 'Matthew is one of the few people in Seattle born in Seattle, but he likes meeting new people no matter where they are from.');
// } else {
//   alert(notYesNo);
// }
  // question 5

// var sportsBall = prompt('So Matthew is from Seattle. Does Matthew watch the M\'s?').toLowerCase();
// console.log (newUser + ' guessed', sportsBall + ' to sportsBall ');

// if (sportsBall.startsWith('y')){
//   confirm( moveOnWrong +' Who are the M\'s?');
// } else if (sportsBall.startsWith('n')) {
//   confirm (moveOnRight);
//   rightCount++;
// } else {
//   alert(notYesNo);
// }

// question 6 - 
// I'd like to do a puzzle that challenges the user to guess a number between one and 64 in 6 guesses
// the for loop will work the best for this. 

nextNewFunction = function (){
  var randoNum = getRandomInt(64);
  // this function is being used solely for a random number
  console.log('the random number is ' +randoNum);
  
  var numGuess = 0;
  var goodGuess = prompt(newUser + ', I\'d like to play a game . You have 6 tries. Think of a number between 1 and 64.', '1-64');
  //need to take string and turn to integer
  var intGuess= parseInt(goodGuess);
  console.log(newUser +'guessed ' + intGuess);
  
  
  for (var i = 0 ; i <6 ; i++){
    var intGuess= parseInt(goodGuess);
    console.log(i);
    if ( intGuess > randoNum ){
      alert(newUser + ' My number is lower than yours');
      goodGuess = prompt('Try again');
    } else if ( intGuess < randoNum ){
      alert(newUser + ' my number is larger than yours');
      goodGuess = prompt('Try again');
    } else if (intGuess === randoNum){
      alert (newUser + 'you have the correct number!!!');
      rightCount++; 
      break;
    } else {
      alert('Something went wrong ' + newUser + ', refresh the page and try again!!!');
      goodGuess = prompt('Try again');
    } 
  }
  if (i=== 6) {
    alert ('you\'ve ran out of guesses!  Refresh the page and Try again !' ); 
  }

}
 var getRandomNumber = function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
}
  


var worldGdp = ['liechtenstein','qatar','monaco','macau','luxembourg','falkland islands','singapore'];
  // var triviaNum = worldGDP.length;
  // console.log (triviaNum);
  
var triviaGuess = prompt('Matthew is also a big fan of Trivia.  Here is a trivia question for you. Please come up with one of the top 7 countries in order of Gross Domestic Product (GDP) per capita.  This is the measured wealth of a nation divided by the number of people');


var trivCount=0;

for(var i = 0; i < worldGdp.length; i++){
// console.log(worldGdp[i]);
// console.log(triviaGuess);
  if (true === worldGdp.includes(triviaGuess)) {
  alert('yes');
  rightCount++;
  break;
    
}else{
triviaGuess = prompt('Please guess again. you have ' + (5-i) + ' guesses left');
trivCount++;
  if (trivCount > 4){
  alert('you are out of tries!!!'); 
  break;
  }

// console.log(worldGDP[i]);
// console.log(triviaGuess);
}
}
alert('thank you taking the time to learna about Matthew.  You have ' + rightCount + ' questions answered correctly');
