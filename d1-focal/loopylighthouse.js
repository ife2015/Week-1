// const loopyLighthouse = function (array1, array2, names) {

//   let emptyArray = [];

//   for (let i = array1[0]; i <= array1[1]; i++) {
//     emptyArray.push(i);
//     for (let j = 0; j <= emptyArray.length; j++) {
//       if (emptyArray[j] % array2[0] === 0) {
//         (emptyArray[j] % array2[1] === 0) ? emptyArray[j] = `${names[0]}${names[1]}`: emptyArray[j] = names[0];
//       } else if (emptyArray[j] % array2[1] === 0) {
//         emptyArray[j] = names[1];
//       }
//     }
//   }
//   return emptyArray.join(",");
// } 

// console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));




const loopyLighthouse = function (array1, array2, names) {

  const fillinArray = [];
  for (let i = array1[0]; i <= array1[1]; i++) {
    fillinArray.push(i);
  }

  const nameTheArray = fillinArray.map(function (element) {
    if (element % array2[0] === 0) {
      return (element % array2[1] === 0) ? element = `${names[0]}${names[1]}` : element = names[0];
    } else if (element % array2[1] === 0) {
      return element = names[1];
    } else {
      return element;
    }
  }).join(" ");

  return nameTheArray; 
};  

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));