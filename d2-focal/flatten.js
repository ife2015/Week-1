const eqArrays = function(array1, array2) {
  const firstArray = array1.map((element, index) =>{
    return element === array2[index]; 
  }).every(element => element === true);
  return firstArray; 
}; 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${array1} !== ${array2} `);
  }
};

const flatten = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let spliceArray = array.splice(i, 1)[0];
      for (let i = 0; i < spliceArray.length; i++) {
        array.push(spliceArray[i]);
      }
    }
  }
  return array.sort();
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]));