// 1. Write the command to remove “Greg” from the array.
// 2. Write the command to remove “James” from the array.
// 3. Write the command to add “Matt” to the front of the array.
// 4. Write the command to add your name to the end of the array.
// 5. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
// 6. Write the command that gives the indexOf where “Mary” is located.
// 7. Write the command that gives the indexOf where “Foo” is located (this should return -1).
// 8. Redefine the people variable with the value you started with. Using the splice
//      command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array 
//      should look like this when you are done: [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
// 9. Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.

const people = ["Greg", "Mary", "Devon", "James"];

// 1 
const remGreg = people.shift();
console.log(people);

// 2 
const remJames = people.pop();
console.log(people);

// 3
const addMatt = people.unshift('Matt'); 
console.log(people);

// 4
const addSelf = people.push('Steph');
console.log(people);

//5
const copyNoM = people.slice(2); 
console.log(copyNoM);

// 6
console.log(people.indexOf('Mary'));

// 7
console.log(people.indexOf('Foo'));

// 8
const newPeople = people.splice(2,1, 'Elizabeth', 'Artie');
console.log(people);

// 9
const withBob = people.concat('Bob');
console.log(withBob);