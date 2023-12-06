/*
The typical for loop includes an iterator variable that usually appears in all three expressions.

A for loop contains three expressions separated by ; inside the parentheses:

1. an initialization starts the loop and can also be used to declare the iterator variable.

2. a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.

3. an iteration statement is used to update the iterator variable on each loop.
*/

for (let counter=5; counter <= 10; counter++ ) {
    console.log(counter);
  }

  // Loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

  //Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

/*
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
*/

// Nested Loops
// Extracting the names of the followers who exist in both lists.
let bobsFollowers = ['Jonn', 'Sam', 'Matt', 'Tes'];
let tinasFollowers = ['Matt', 'Lily', 'Sam'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++ ){
  for (let j = 0; j < tinasFollowers.length; j++ ){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
};

console.log(mutualFollowers);
//logs [ 'Sam', 'Matt' ]