const findWaldo = function(names, found) {
  names.forEach(found);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(element,index) {
  if(element === "Waldo") {
  console.log(`Found Waldo at index ${index}!`);
  }
});