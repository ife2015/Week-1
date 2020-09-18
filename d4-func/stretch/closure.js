// const outer = function() {
//   const x = 10;

//   const inner = function() {
//     console.log("The value of x is: " + x);
//   }
//   return inner;
// };


//const foo = outer(); // returns inner function
//foo(); // calls the inner function that is returned


// Loaded Die; 

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i=-1;

  return function() {
    i += 1;
    return list[i];
  }
}

const rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());

//countdown 

const countdownGenerator = function (x) {
  
  const countdown = [...Array(x).keys()].map(x => {
    return x += 1;
  })

  let i = countdown.length; 

  return function () {
      if(i >= 1) {
        i--
        console.log(` T-minus ${countdown[i]}...`);
      } else {
        if(i === 0) {
          i--
          console.log(" Blast Off!");
        } else {
          console.log(" Rockets already gone, bub!");
        }
        // if(i < 0) {
        //   console.log(" Rockets already gone, bub!");
        // }
      }
  }

};

const countdown = countdownGenerator(10);
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();


//console.log(countdown);