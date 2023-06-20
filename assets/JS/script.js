//created an array for all characters that can be chosen by the user.
var uppercaseOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','I','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberOptions = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharactersOptions =['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Confirm options required for generating password.
function confirmOptions(){
    //coverting string to integer of the input value.
    var passwordLength = parseInt(prompt('Enter Length of password . It should be between a minimum of 8 characters and maxiumum of 128 characters:'), 10);
    
    if (passwordLength === null || passwordLength === "") {
      return null;
    }
    
    if (Number.isNaN(passwordLength)) {
        alert('Please enter a valid number for length of the password. It should be between a minimum of 8 characters and maxiumum of 128 characters');
        return null;
    }
  
    if (passwordLength >= 8 && passwordLength <= 128){
        var confirmUppercase = confirm('Do you want to include Uppercase characters?');
        var confirmLowercase = confirm('Do you want to include Lowercase characters?');
        var confirmNumbers = confirm('Do you want to include Numbers characters?');
        var confirmSpecialcharacters = confirm('Do you want to include Special characters?');
    } else {
        alert('Invalid Length! Please choose between a minimum of 8 characters and maxiumum of 128 characters.');
        return null;
    }
  
    return {
      confirmUppercase,
      confirmLowercase,
      confirmNumbers,
      confirmSpecialcharacters,
      passwordLength
    }
   
  }

  function generatePassword(){

    var getOptions = confirmOptions();
    var tempPassword = [];
    var myPassword = [];
    var generatedPassword = "";
    var tempCharacter = "";
  
    //check if the options are defined.
    if (getOptions === null || getOptions === "") {
      return null;
    }
  
    //check if atleast one options is selected.
    if (!getOptions.confirmUppercase && !getOptions.confirmLowercase && !getOptions.confirmNumbers && !getOptions.confirmSpecialcharacters) {
      alert("Apart from length, please confirm atleast one option to generate password");
      return null;
    }
  
    //include Upper case characters
    if (getOptions.confirmUppercase){
      tempPassword = tempPassword.concat(uppercaseOptions);
    }
  
    //include lower case characters
    if (getOptions.confirmLowercase){
      tempPassword = tempPassword.concat(lowercaseOptions);
    }
  
    //include number characters
    if (getOptions.confirmNumbers) {
      tempPassword = tempPassword.concat(numberOptions);
    }
  
    //include special characters
    if (getOptions.confirmSpecialcharacters) {
      tempPassword = tempPassword.concat(specialCharactersOptions);
    }
  
    //pick random characters from the available list and build the password
    for (i=0; i<= getOptions.passwordLength - 1; i++ ){
      tempCharacter = tempPassword[Math.floor(Math.random() * tempPassword.length)];
      if (tempCharacter === null || tempCharacter === "") {
        return;
      }
      myPassword.push(tempCharacter);
    }
  
    //convert password array to string
    if (myPassword.length > 0) {
      generatedPassword = myPassword.join('');
      return generatedPassword;
    }
  
    
  }
  
    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
  }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

