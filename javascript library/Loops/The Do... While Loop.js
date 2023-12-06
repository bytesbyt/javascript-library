//Do.. While Statements
/*
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. THis is where the do...while statement comes in.
*/
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
//logs 01234

/*
In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it.

First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.
*/

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
//logs I will print!

//Program to simulate part of the cake-baking process.
//Depenind on the recipe, a different number of cups of sugar is required. We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added.')
} while (cupsAdded < cupsOfSugarNeeded)
//logs 1 cup was added.
