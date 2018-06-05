'use strict'

var newUser = prompt('what\'s my name again?', 'guest');
console.log ('user name is:', newUser);

if (newUser.toLowerCase () === 'guest'){
  alert('Guest is a boring name, but I respect your privacy!')
} else  { 
  alert('Welcome ' + newUser + '! Let\'s get to know me!')
}