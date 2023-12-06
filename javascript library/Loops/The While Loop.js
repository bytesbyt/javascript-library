

//The While Loop
/*
The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run.
Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full.
Rather you’ll eat while you’re hungry.
In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
  
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }


//Example

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
/*
Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.
*/
