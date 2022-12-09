// 1. Write the command to add the language “Go” to the end of the languages array.
// 2. Change the difficulty to the value of 7.
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
// 4. Write the command to add a new key called isFun and a value of true to the programming object.

let programming = {
    languages: ['JavaScript', 'Python', 'Ruby'],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
}
console.log(programming);

// 1
const addGo = programming.languages.push('Go');
console.log(programming.languages);

// 2
programming.difficulty = 7;
console.log(programming.difficulty);

// 3
delete programming.jokes;
console.log(programming);

// 4
programming.isFun = true;
console.log(programming);