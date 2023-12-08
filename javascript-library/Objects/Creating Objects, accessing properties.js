/*
Creating Object Literals
Objects can be assigned to variables just like any JavaScript type.
We use curly braces, {}, to designated an object literal.
*/

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

// Accessing Properties using dot notation, ..
let ship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


//Bracket Notation

/*
The second way to access a key's value is by using bracket notation, [ ].

We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
*/

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];
console.log(isActive);//returns true
console.log(spaceship[propName]);//returns true
