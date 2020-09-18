const dog = {name: "fluffers", age:5, owner:'rob'};
dog["loca" + "tion"] = "Vancouver";
console.log(dog);

const mage = {hp: 10, intellect: 15, castFireball: function () {
  return "😍";
}, name: 'Merlin'}; 

// mage.castFireball = function () {
//   this.hp = this.hp - 1; 
// }
console.log(mage.castFireball());
console.log(mage);

// Primitive Objects 
let num = 5; // 5
let numCopy = num; // 5 

// they don't affect each other when num changes 
// num = 6 // 6
// numCopy // 5


// Reference types
let obj = {one: 1}; 
let objCopy = obj; // objCopy(one: 1)

// obj = {one: 1, two: 2}; 
// objCopy is also {one: 1, two: 2}; 

