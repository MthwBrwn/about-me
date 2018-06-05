'use strict'

var moveOnRight = 'That\'s Correct! Let\'s Move On!!'
var moveOnWrong = 'that\s not quite right. Keep Going!'
var notYesNo = 'Hmmm, Try a Yes or No '
var newUser = prompt('what\'s my name again?', 'guest');
console.log ('user name is:', newUser);

if (newUser.toLowerCase () === 'guest'){
  alert('Guest is a boring name, but I respect your privacy!')
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know me!');
}
// question 1
var firstCode = prompt('Is this the first coding school Matthew has attended?');
console.log (newUser + ' guessed', firstCode + ' to firstCode');

if (firstCode.toLowerCase() === 'yes'){
  confirm( moveOnRight );
} else if (firstCode.toLowerCase() === 'no' ) {
  confirm (moveOnWrong);
} else {
  alert(notYesNo);
}

// question 2 
var doesCook = prompt('Does Matthew enjoy cooking?');
console.log (newUser + ' guessed', doesCook + ' to doesCook');

if (doesCook.toLowerCase() === 'yes'){
  confirm( moveOnRight );
} else if (doesCook.toLowerCase() === 'no') {
  confirm (moveOnWrong);
} else {
  alert(notYesNo);
}

// question 3 
var isSign = prompt('Wow. He seem so compatable with me. Is Matthew a Leo?');
console.log (newUser + ' guessed', isSign + ' to isSign ');

if (isSign.toLowerCase() === 'yes'){
  confirm( moveOnWrong );
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
  confirm (moveOnWrong);
} else {
  alert(notYesNo);
}
  // question 5


  var sportsBall = prompt('So you\'re from Seattle. Do Matthew watch the M\'s?');
console.log (newUser + ' guessed', sportsBall + ' to sportsBall ');

if (sportsBall.toLowerCase() === 'yes'){
  confirm( moveOnWrong );
} else if (sportsBall.toLowerCase() === 'no') {
  confirm (moveOnRight);
} else {
  alert(notYesNo);
}

//  var endAlert= alert('Thank you for taking the time to get to know me');