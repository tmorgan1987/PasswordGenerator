// VARIABLES
var passLength = 8;
var choices = [];

// ARRAYS
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "|"];
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ];
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", ];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password needs to be generated based on the prompts.
function generatePassword() {

}

// functions to run the prompts.
function prompts() {
	passLength = parseInt(prompt("How long do you want your password to be?  Your password can't be shorter than 8 characters or longer than 128."));

}