// Write a node program that takes in an unlimited number of commands
// line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip instanceof. Do support negative numbers

// Steps - Pseudo code - project req, prob desc, I want this...
  // get arguments/inputs from user 
  
  const getArguments = function() {
      const userArguments = process.argv.slice(2); 
      return userArguments; 
  };

  const checkWholesomeness = function(userInput) {
    const isNumber = Number(userInput); 
    if (userInput) {
      if(Number.isInteger(isNumber)) {
        return isNumber; 
      } 
    }
    return false; 
  };

 const loopArguments = function(userArguments) {
   let sum = 0; 
  for (let arg of userArguments) {
    if(checkWholesomeness(arg)) {
      sum = sum + checkWholesomeness(arg); 
    }
  }
  return sum;
 };

 const userArguments = getArguments(); 

 console.log(loopArguments(userArguments));
