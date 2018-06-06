'use strict'

var moveOnRight = 'That\'s Correct! Let\'s Move On!!'
var moveOnWrong = 'That\s not quite right, keep going! '
var notYesNo = 'Hmmm, Try a Yes or No '

var newUser = prompt('Thank you for visiting! What\'s your name?', 'guest');
  console.log ('user name is:', newUser);

if (newUser.toLowerCase () === 'guest'){
  alert('Guest is a boring name, but I respect your privacy!')
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know Matthew!');
}
// question 1
var firstCode = prompt('Is this the first coding school Matthew has attended?');
  console.log (newUser + ' guessed', firstCode + ' to firstCode');

if (firstCode.toLowerCase() === 'yes'){
  confirm( moveOnRight );
} else if (firstCode.toLowerCase() === 'no' ) {
  confirm (moveOnWrong + 'Prior to CodeFellows Matthew had not attended a coding school');
} else {
  alert(notYesNo);
}

// question 2 
var doesCook = prompt('Does Matthew enjoy cooking?');
  console.log (newUser + ' guessed', doesCook + ' to doesCook');

if (doesCook.toLowerCase() === 'yes'){
  confirm( moveOnRight );
} else if (doesCook.toLowerCase() === 'no') {
  confirm (moveOnWrong + 'Matthew enjoys cooking very much and is always looking for a new recipe to try');
} else {
  alert(notYesNo);
}

// question 3 
var isSign = prompt('Wow. He seem so compatable with me. Is Matthew a Leo?');
console.log (newUser + ' guessed', isSign + ' to isSign ');

if (isSign.toLowerCase() === 'yes'){
  confirm( moveOnWrong + 'Matthew was born June 25th so that makes him a Cancer.');
} else if (isSign.toLowerCase() === 'no') {
  confirm (moveOnRight);
} else {
  alert(notYesNo);
}

// question 4

var fromHere = prompt('Is Matthew from Seattle?');
console.log (newUser + ' guessed', fromHere + ' to fromHere ');

if (fromHere.toLowerCase() === 'yes'){
  confirm( moveOnRight );
} else if (fromHere.toLowerCase() === 'no') {
  confirm (moveOnWrong + 'Matthew is one of the few people in Seattle born in Seattle, but he likes meeting new people no matter where they are from.');
} else {
  alert(notYesNo);
}
  // question 5


  var sportsBall = prompt('So Matthew is from Seattle. Does Matthew watch the M\'s?');
console.log (newUser + ' guessed', sportsBall + ' to sportsBall ');

if (sportsBall.toLowerCase() === 'yes'){
  confirm( moveOnWrong +' Who are the M\'s?');
} else if (sportsBall.toLowerCase() === 'no') {
  confirm (moveOnRight);
} else {
  alert(notYesNo);
}

 var endAlert= alert('That\'s the end.  Thank you for taking the time to get to know Matthew');