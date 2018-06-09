'use strict';


// all global variables
var moveOnRight = 'That\'s Correct! Let\'s Move On!! ';
var moveOnWrong = 'That\s not quite right, keep going! ';
var notYesNo = 'Hmmm, Try a Yes or No ';
var rightCount = 0;

var QuesCode = 'Is this the first coding school Matthew has attended?'; 
var QuesSign = 'Wow. Matthew seems like a fire sign. Is Matthew a Leo?';
var QuesCook = 'Does Matthew enjoy cooking?';
var QuesFrom = 'Is Matthew from Seattle?';
var QuesSports = 'So Matthew is from Seattle. Does Matthew watch the M\'s?';

var msgCode = 'Prior to CodeFellows Matthew had not attended a coding school';
var msgSign = 'Prior to CodeFellows Matthew had not attended a coding school';
var msgCook = 'Matthew enjoys cooking very much and is always looking for a new recipe to try';
var msgFrom = 'Matthew is one of the few people in Seattle born in Seattle, but he likes meeting new people no matter where they are from.';
var msgSports = ''

// intro prompt

var newUser = prompt('Thank you for visiting! What\'s your name?', 'guest');
console.log ('user name is:', newUser);

if (newUser=== 'guest'){
  alert('Guest is a boring name, but I respect your privacy!');
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know Matthew!');
}

var persQues = function ( question, message, flip){
  
  var userInput = prompt(question).toLowerCase(); 
  console.log (newUser + ' guessed', userInput );
  if (userInput.startsWith('y') || userInput.startsWith('y')){
    if (userInput.startsWith(flip)) {
    confirm( moveOnRight +' ' +message);
    rightCount = rightCount+1;
    break;
    } else  {
    confirm (moveOnWrong +' '+message);
  }else {
   alert (notYesNo);
 }
}

// var fourQues = prompt(newUser + ', I\'d like to play a game . You have 6 tries. Think of a number between 1 and 64.', '1-64');
// var triviaGuess = prompt('Matthew is also a big fan of Trivia.  Here is a trivia question for you. Please come up with one of the top 7 countries in order of Gross Domestic Product (GDP) per capita.  This is the measured wealth of a nation divided by the number of people');






var nextNewFunction = function (){
  var randoNum = getRandomInt(64);
  // this function is being used solely for a random number
  console.log('the random number is ' +randoNum);
}  


















//   var numGuess = 0;
//   var goodGuess = prompt(newUser + ', I\'d like to play a game . You have 6 tries. Think of a number between 1 and 64.', '1-64');
//   //need to take string and turn to integer
//   var intGuess= parseInt(goodGuess);
//   console.log(newUser +'guessed ' + intGuess);
  
  
//   for (var i = 0 ; i <6 ; i++){
//     var intGuess= parseInt(goodGuess);
//     console.log(i);
//     if ( intGuess > randoNum ){
//       alert(newUser + ' My number is lower than yours');
//       goodGuess = prompt('Try again');
//     } else if ( intGuess < randoNum ){
//       alert(newUser + ' my number is larger than yours');
//       goodGuess = prompt('Try again');
//     } else if (intGuess === randoNum){
//       alert (newUser + 'you have the correct number!!!');
//       rightCount++; 
//       break;
//     } else {
//       alert('Something went wrong ' + newUser + ', refresh the page and try again!!!');
//       goodGuess = prompt('Try again');
//     } 
//   }
//   if (i=== 6) {
//     alert ('you\'ve ran out of guesses!  Refresh the page and Try again !' ); 
//   }


//  var getRandomNumber = function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
//   }

  


// var worldGdp = ['liechtenstein','qatar','monaco','macau','luxembourg','falkland islands','singapore'];
//   // var triviaNum = worldGDP.length;
//   // console.log (triviaNum);
  
// var triviaGuess = prompt('Matthew is also a big fan of Trivia.  Here is a trivia question for you. Please come up with one of the top 7 countries in order of Gross Domestic Product (GDP) per capita.  This is the measured wealth of a nation divided by the number of people');


// var trivCount=0;

// for(var i = 0; i < worldGdp.length; i++){
// // console.log(worldGdp[i]);
// // console.log(triviaGuess);
//   if (true === worldGdp.includes(triviaGuess)) {
//   alert('yes');
//   rightCount++;
//   break;
    
// }else{
// triviaGuess = prompt('Please guess again. you have ' + (5-i) + ' guesses left');
// trivCount++;
//   if (trivCount > 4){
//   alert('you are out of tries!!!'); 
//   break;
//   }

// // console.log(worldGDP[i]);
// // console.log(triviaGuess);
// }
// }
// alert('thank you taking the time to learna about Matthew.  You have ' + rightCount + ' questions answered correctly');
