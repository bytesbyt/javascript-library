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