// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//
//
// USER INPUT
//
//

// Prompts user to input value between 8 and 128 for password length
var passLength = Number(window.prompt("Please select a value between 8-128 for the length of the password."));

// Checks for valid input
while (isNaN(passLength) || passLength < 8 || passLength > 128) {
  if (isNaN(passLength) || passLength < 8 || passLength > 128){
    alert("Invalid input");
    var passLength = window.prompt("Please select a value between 8-128 for the length of the password.");
  }
}

// Variable to check if the user has selected no characters (cancelled on
// every option)
var noChars = false;

// Loop to prevent user from not selcting any characters
do {

// Prompt user if they want the password to have lowercase letters
if (window.confirm("Select OK if you would like password to contain lowercase letters and Cancel if not.")) {
  var passLower = true;
}
else {
  var passLower = false;
}

// Prompt user if they want the password to have uppercase letters
if (window.confirm("Select OK if you would like password to contain uppercase letters and Cancel if not.")) {
  var passUpper = true;
}
else {
  var passUpper = false;
}

// Prompt user if they want the password to have numbers
if (window.confirm("Select OK if you would like password to contain numbers and Cancel if not.")) {
  var passNumber= true;
}
else {
  var passNumber = false;
}

// Prompt user if they want the password to have special characters
if (window.confirm("Select OK if you would like password to contain special characters and Cancel if not.")) {
  var passSpecial = true;
}
else {
  var passSpecial = false;
}

if (!passLower && !passUpper && !passNumber && !passSpecial){
  noChars = true;
  alert("You must select at least one character type.");
}
else {
  noChars = false;
}

} while (noChars);

//
//
// PASSWORD GENERATION
//
//

// Character sets
var charsLower = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charsNumber = '0123456789';
var charsSpecial = "[`!@#$%^&*()_+={};:|,.<>?~]";

// Initialize array for storing password characters
var passGen = Array(passLength);

// Loop checking for every possible combination of characters

for (let i = 0; i < passLength; i++) {
  
  if (passLower && !passUpper && !passNumber && !passSpecial){
    var chars = charsLower;
  }

else if (!passLower && passUpper && !passNumber && !passSpecial){
  var chars = charsUpper;
}

else if (!passLower && !passUpper && passNumber && !passSpecial){
  var chars = charsNumber;
}

else if (!passLower && !passUpper && !passNumber && passSpecial){
  var chars = charsSpecial;
}

else if (passLower && passUpper && !passNumber && !passSpecial){
  var chars = charsLower + charsUpper;
}

else if (!passLower && !passUpper && passNumber && passSpecial){
  var chars = charsNumber + charsSpecial;
}

else if (passLower && !passUpper && passNumber && !passSpecial){
  var chars = charsLower + charsNumber;
}

else if (!passLower && passUpper && !passNumber && passSpecial){
  var chars = charsUpper + charsSpecial;
}

else if (passLower && !passUpper && !passNumber && passSpecial){
  var chars = charsLower + charsSpecial;
}

else if (!passLower && passUpper && passNumber && !passSpecial){
  var chars = charsUpper + charsNumber;
}

else if (passLower && passUpper && passNumber && passSpecial){
  var chars = charsLower + charsUpper + charsNumber + charsSpecial;
}

else if (!passLower && passUpper && passNumber && passSpecial){
  var chars = charsUpper + charsNumber + charsSpecial;
}

else if (passLower && !passUpper && passNumber && passSpecial){
  var chars = charsLower + charsNumber + charsSpecial;
}

else if (passLower && passUpper && !passNumber && passSpecial){
  var chars = charsLower + charsUpper + charsSpecial;
}

else if (passLower && passUpper && passNumber && !passSpecial){
  var chars = charsLower + charsUpper + charsNumber;
}


// Randomly generate password
passGen[i] = chars.charAt(Math.random() * chars.length);

}

// Display password
document.getElementById("password").value = passGen.join("");

return passGen;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
