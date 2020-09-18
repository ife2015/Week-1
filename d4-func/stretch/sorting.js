
const compareName = function ( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name){
    return 1;
  }
  return 0;
}

const compareAge = function ( a, b ) {
  if ( a.name === b.name && a.age < b.age ){
    return -1;
  }
  if ( a.name === b.name && a.age > b.age){
    return 1;
  }
  return 0;
}

const sortArrayObject = function(listID, compare1, compare2) {

const sortedNames = listID.sort(compare1); 
const sortedAge = sortedNames.sort(compare2);
return sortedAge;
}

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 2, name: "lzerk", age: 22 },
  { id: 2, name: "johns", age: 22 },
  { id: 3, name: "alex",     age: 42 },
  { id: 4, name: "alex",     age: 30 }
];


console.log(sortArrayObject(students,compareName, compareAge));

