const findWaldo = function(names, found) {
  names.forEach(found);
}


const actionWhenFound = function(element,index) {
  if(element === "Waldo") {
  console.log(`Found Waldo at index ${index}!`);
  }
}

//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

actionWhenFound.someProperty = 45; 

console.log(actionWhenFound);