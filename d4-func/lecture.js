// function declaration 

function howdy(para) {
  console.log("hey there");
};

// anoynmous function 

const howdyAgain = function(param){
  console.log('hows it going again')
}; 

// arrow function 
const howdyTheThird = (param) => {
  console.log("hey some more .........");
}; 

//functions can be stored and passed in as variables 
// const copyOfFunc = howdyAgain; 
// console.log(copyOfFunc());

//call back functions - functiono passed in as a parameter 
const higherOrderHowdy = (howdyFunction) => {
  console.log('Howdy is starting in 3,2,1...');
  console.log(`what is howdyFunction`, howdyFunction);
  howdyFunction(); 
}

// higherOrderHowdy(howdy);
// higherOrderHowdy(howdyAgain);
// higherOrderHowdy(howdyTheThird);

// Allows our functions to be more modular 
// Make some functions more customizable 
// When a function receives another function as a parameter - higher order function 



// more call back elements with for each 
let arr = [1,2,3,4,5,6]; 

const printNum = (num) => {
  console.log('printing: ', num);
}

const numSquared = (num) => {
  console.log('squared: ', num*num); 
}

arr.forEach(printNum); 