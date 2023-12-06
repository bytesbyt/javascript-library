/*
Arrays and function
When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
*/
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept); //[ 'arrays', 'can', 'be', 'MUTATED' ]

//mutate and array using a built-in method inside a function.

function removeElement(newArr){
  newArr = newArr.pop()
}

removeElement(concept);

console.log(concept);//[ 'arrays', 'can', 'be' ]