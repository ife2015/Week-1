// takes in a single parameter from command line 
// generates a random number however many of times. 
// Max of 7

// function that makes an array
// function that maps out array

const rollNumber = function (spins) {
  let rollPlays  = new Array(spins).fill(0); 
  return rollPlays; 
}

const randomRolls = function(spins) {
  const rolledDices = rollNumber(spins).map(play => {
    return Math.floor(Math.random()*6)+1;
  });
  return rolledDices.join(", "); 
}

const userInput = +process.argv[2]; 
console.log(randomRolls(userInput));


