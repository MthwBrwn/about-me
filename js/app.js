'use strict'

var moveOnYes = 'That\'s Correct! Let\'s Move On!!'
var moveOnNo = 'that\s not quite right. Keep Going!'
var notYesNo = 'Hmmm, Try a Yes or No '
var newUser = prompt('what\'s my name again?', 'guest');
console.log ('user name is:', newUser);

if (newUser.toLowerCase () === 'guest'){
  alert('Guest is a boring name, but I respect your privacy!')
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know me!');
}

var firstCode = prompt('Is this the first coding school Matthew has attended?');
console.log (newUser + ' guessed', firstCode + 'to firstCode');

if (firstCode.toLowerCase() === 'yes'){
  confirm( moveOnYes );
} else if (firstCode.toLowerCase() === 'no' ) {
  confirm (moveOnNo);
} else {
  alert(notYesNo);
}
