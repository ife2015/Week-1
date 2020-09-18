
`Function Declarations`

```javascript
function howdy(para) {
  console.log("hey there");
};
```

`Anoynmous Function`

```javascript
 const howdyAgain = function(param){
  console.log('hows it going again')
}; 
```

`Arrow Function`

```javascript 
const howdyTheThird = (param) => {
  console.log("hey some more .........");
}; 
```

`Functions can be stored and passed in as variables`

```javascript 
  const copyOfFunc = howdyAgain; 
  console.log(copyOfFunc());
```
`Call-back functions `

```javascript 
const higherOrderHowdy = (howdyFunction) => {
  console.log('Howdy is starting in 3,2,1...');
  console.log(`what is howdyFunction`, howdyFunction);
  howdyFunction(); 
}

higherOrderHowdy(howdy);
higherOrderHowdy(howdyAgain);
higherOrderHowdy(howdyTheThird);
```