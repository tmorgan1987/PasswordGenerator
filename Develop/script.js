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
		var correctprompts = prompts(); //returns true or false
  
		if(correctprompts) {
			var password = generatePassword();
  		var passwordText = document.querySelector("#password");
			passwordText.value = password;

}

// Password needs to be generated based on the prompts.
function generatePassword() {
	var password = "";
	for (var i = 0; i < passLength; i++) {
		var randomize = Math.floor(Math.random() * choices.length);
		 password = password + choices[randomize];
	}
	return password;
}

// functions to run the prompts.
function prompts() {
	choices = [];

	passLength = parseInt(prompt("How long do you want your password to be?  Your password can't be shorter than 8 characters or longer than 128."));

	if(isNaN(passLength) || passLength < 8 || passLength > 128) {
		alert("Password length isn't a number, and needs to be between 8-128.  Use a number that's between 8128.")
		return false;
	}
	if (confirm("Do you want lowercase letters in your password?")) {
		choices = choices.concat(lowercase);
	}
	if (confirm("Do you want uppercase letters in your password?")) {
		choices = choices.concat(uppercase)
	}
	if (confirm("Do you want numbers in your password?")) {
		choices = choices.concat(numbers)
	}
	if (confirm("Do you want special characters in your password?")) {
		choices = choices.concat(specialCharacters)
	}
	return true;
}}