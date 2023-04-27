const ValidateEmail = (input) => {

    console.log("Utility Input", input)
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
      console.log("Valid email address!");
  
      return true;
  
    } else {
  
      console.log("Invalid email address!");
  
      return false;
  
    }
  
  }

// module.exports = { ValidateEmail }
// or
exports.ValidateEmail = ValidateEmail