'use strict';

const reverseFunc = function(character) {
  let message = "";
  for (let i = character.length - 1; i >= 0; i--) {
    message += character[i];
  }
  return message;
};

for (let i = 2; i < process.argv.length; i++) {
  console.log(reverseFunc(process.argv[i]));
}