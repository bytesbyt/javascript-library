
//Property Assignment
/*
One of two things can happen with property assignment:

1. If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.

2. If there was no property with that name, a new property will be added to the object.

*/
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Reassign the color property of the spaceship object to have a value of 'glorious gold'
  spaceship.color  = 'glorious gold'
  
  //Add property- numEngines
  spaceship.numEngines = 9;
  
  //Use delete operator to remove a property
  delete spaceship['Secret Mission'];
  