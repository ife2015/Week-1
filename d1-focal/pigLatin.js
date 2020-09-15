'use strict';

const fillArray = []; 

for (let i = 2; i < process.argv.length; i++) {
  fillArray.push(process.argv[i]); 
}

const changedArray = fillArray.map(element => {
  let singleElement = [...element];
  singleElement.push(singleElement[0] + "ay");
  singleElement.shift(); 
  return singleElement.join("");
}).join(" "); 

console.log(changedArray);