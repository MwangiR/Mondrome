// Assignment code here
// Function code to generate a random password
var generatePassword = function (
  length,
  includeNumbersCheckbox,
  includeUpperCaseCheckbox,
  includeLowerCaseCheckbox,
  includeSpecialCharsCheckbox,
) {
  // Defining character sets using regular expressions
  var uppercaseCharsRegex = /[A-Z]/;
  var lowercaseCharsRegex = /[a-z]/;
  var numbersRegex = /[0-9]/;
  var specialCharsRegex = /[^a-zA-Z0-9]/;

  // Creating an empty variable to store the characters
  var characters = "";

  // If the user wants to include numbers
  if (includeNumbersCheckbox) {
    // Adding numbers to the characters variable
    characters += "0123456789";
  }

  // If the user wants to include uppercase characters
  if (includeUpperCaseCheckbox) {
    // Adding uppercase characters to the characters variable
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // If the user wants to include lowercase characters
  if (includeLowerCaseCheckbox) {
    // Adding lowercase characters to the characters variable
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  // If the user wants to include special characters
  if (includeSpecialCharsCheckbox) {
    // Adding special characters to the characters variable
    characters += "!@#$%^&*()_+{}[]~-";
  }

  // Creating an empty variable to store the password
  var password = "";

  // Looping through the length of the password
  for (let i = 0; i < length; i++) {
    // Adding random characters to the password variable
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Get the length value from the slider
  var slider = document.getElementById("myRange");
  var length = parseInt(slider.value);

  // Get references from checkboxes
  var includeNumbersCheckbox = document.getElementById("includeNumbers").checked;
  var includeUpperCaseCheckbox = document.getElementById("includeUpperCase").checked;
  var includeLowerCaseCheckbox = document.getElementById("includeLowerCase").checked;
  var includeSpecialCharsCheckbox = document.getElementById("includeSpecialChars").checked;

  // Generate the password
  var password = generatePassword(
    length,
    includeNumbersCheckbox,
    includeUpperCaseCheckbox,
    includeLowerCaseCheckbox,
    includeSpecialCharsCheckbox,
  );

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Slider code
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// Add event listener to slider
slider.oninput = function () {
  output.innerHTML = this.value;
};
