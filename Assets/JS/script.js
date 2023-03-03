// Assignment code here
/*what I need*/
// var askLength;
// var askuppercase;
// var asklowercase;
// var asknumbers;
// var askspecialcharacters;
/* variables arrays*/
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var concatarr = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Get references to the #generate element
/* button */
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//puts the pass on the screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*password parameters*/

function generatePassword() {
  //this area will set the prompts for the password
  //asking questions before is a ok 

  var lengthAns = prompt("Please pick a Length between 8-128");
  var uppercaseAns = confirm("Do you want anything Capitalized?");
  var lowercaseAns = confirm("You can have some lowercase");
  var numbersAns = confirm("Maybe add some numbers?");
  var specialCharactersAns = confirm("You should want special characters in your life and password");

  //this promps the length and parameter 
  if (lengthAns > 8 || lengthAns < 128) {
  }
  //notes they did choose some uppercase
  if (uppercaseAns == true) {
    concatarr = concatarr.concat(uppercase)
    console.log("yes the user wants uppercase");
  }
  //indicates if they did choose some lowercase
  if (lowercaseAns == true) {
    concatarr = concatarr.concat(lowercase)
    console.log("yes the user wants lowercase");
  }
  //indicates if they did choose some
  if (numbersAns == true) {
     concatarr = concatarr.concat(numbers)
     console.log("yes the user wants numbers")
   }
  //indicates if they did choose some
  if (specialCharactersAns == true) {
    concatarr = concatarr.concat(specialCharacters)
    console.log("yes the user wants special characters")
  }

  //THEN my input should be validated and at least one character type should be selected//
  //this is for the pass 
  console.log(concatarr)
  var passHolder = []
  // loop is for random character selection
  for (var i = 0; i < lengthAns; i++) {
    //[Math.floor(Math.random() * )] remember this its important 
    var char = concatarr[Math.floor(Math.random() * concatarr.length)];
    // this will add each successive random character
    passHolder.push(char);
  }
  console.log(passHolder)
  // characters will be joined in one array Makes them a string
  //
  var password = passHolder.join("");
  return password;
}