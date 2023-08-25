// define all special characters, lowerCase, upperCase, and numbers globally.
const specialArr = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "~", "?", "*", "^", ":", "\\", "two:\\", "`", "@", "_", ">", "<", "=", ".", "#", ".", "%"];

const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let counter = 0;
let userSpecificArr = [];
let passwordArr = [];
let uppercase;
let lowercase;
let passwordLength;

// Validation to ensure the user is selecting between 8-128 characters for their password.
function getpasswordLength () {
  passwordLength = window.prompt("How long would you like your password to be? Please select between 8 - 128 characters");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === false) {
    window.alert("You must select a character range between 8 - 128");
    getpasswordLength();
  }
}

function getUppercase () {
  uppercase = window.confirm("Would you like uppercase characters in the password?");
  if (uppercase) {
    userSpecificArr = [...userSpecificArr, ...uppercaseArr];
    let randomValue = uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
    passwordArr.push(randomValue);
    counter ++;
  }
}

function getLowercase () {
  lowercase = window.confirm("Would you like lowercase characters in your password?");
    if (lowercase) {
      userSpecificArr = [...userSpecificArr, ...lowercaseArr];
      let randomValue = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
      passwordArr.push(randomValue);
      counter ++;
    }
  }

function getSpecial () {
  let special = window.confirm("Would you like special characters in your password?");
    if (special) {
      userSpecificArr = [...userSpecificArr, ...specialArr];
      let randomValue = specialArr[Math.floor(Math.random() * specialArr.length)];
      passwordArr.push(randomValue);
      counter ++;
    }
  }

function getNumber () {
  let number = window.confirm("Would you like numbers in your password?");
  if (number) {
    userSpecificArr = [...userSpecificArr, ...numberArr];
    let randomValue = numberArr[Math.floor(Math.random() * numberArr.length)];
    passwordArr.push(randomValue);
    counter ++;
  }
}

//logic for password generator
function generatePassword () {
  window.alert("Lets create the perfect password by selecting criteria to make it safe");
  passwordCustomValid ();
  for (let i = 0; i < (passwordLength - counter); i++) {
    let randomValue = userSpecificArr[Math.floor(Math.random() * userSpecificArr.length)];
    passwordArr.push(randomValue);
  } 
  return passwordArr.join('');
}

//this will begin the validation of the password criteria.
function passwordCustomValid () {
  getpasswordLength ();
  getUppercase ();
  getLowercase ();
  getSpecial ();
  getNumber ();
  if (!uppercase && !lowercase && !special && !number) {
    window.alert("You must select ATLEAST one special criteria");
    userSpecificArr = [];
    passwordCustomValid();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  userSpecificArr.length = 0;
  passwordArr.length = 0;
  counter = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
