
const readProcessARGV = function() {
  return [...process.argv[2]];
};


const obfuscate = function(callfunc) {
  const arrayPassword = callfunc();
  for (let char of arrayPassword) {
    if (char === "a") {
      arrayPassword[arrayPassword.indexOf(char)] = 4;
    } else if (char === "e") {
      arrayPassword[arrayPassword.indexOf(char)] = 3;
    } else if (char === "o") {
      arrayPassword[arrayPassword.indexOf(char)] = 0;
    } else if (char === "i") {
      arrayPassword[arrayPassword.indexOf(char)] = 1;
    }
  }
  return arrayPassword.join("");
};

console.log(obfuscate(readProcessARGV));


