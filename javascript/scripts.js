// let pet = 'Strider';
// let firstName = 'Steph';
// let home = 'Washington';
// console.log(`My name is ${firstName}. I have a pet named ${pet} and I live in ${home}.`); // template literal


// const people = [
//     {name: "steph", age: 30},
//     {name: "jimbo", age: 25},
//     {name: "harold", age: 60},
// ]
// console.table(people)

// // 1
// const number = 13;
// console.log(`Type of number: ${typeof number}`);

// // 2
// const isLoggedIn = true;
// console.log(`Is logged in: ${isLoggedIn}`);

// // 3
// console.log("Is 13 a number? " + Number.isInteger('13'));

// // 4
// console.log(`The number parsed is: ${Number.parseInt('23')}`);

// // 5
// console.log(`The number parsed is: ${Number.parseFloat('23.928uufeaj')}`);

// // 6
// const num1 = 2;
// const num2 = 5;
// console.log(`Add: 2 + 5 = ${num1 + num2}`);

// // 7
// console.log(`Subtract: 2 - 5 = ${num1 - num2}`);

// // 8
// console.log(`Multiply: 2 * 5 = ${num1 * num2}`);

// // 9
// console.log(`Divide: 2 / 5 = ${num1 / num2}`);

// // 10
// console.log(`Modulo: 5 % 2 = ${num2 % num1}`);

// // 11
// console.log(`Exponent: 5^2 = ${num2 ** num1}`);

// // 12
// let hello;
// hello = 'hello world';
// console.log(`Declaring & assigning "let hello" so hello = ${hello}`);

// // 13
// let dog = 'Freyja';
// console.log(`let dog = "Freyja": ${dog}`);
// dog = 'Strider';
// console.log(`dog = "Strider": ${dog}`);

// // 14
// const months = 12;
// console.log(`const months = 12: ${months}`);
// // months = 13;
// // console.log(months);
// console.log("cannot reassign const");

// // 15
// let myName = 'Steph';
// console.log(`myName: ${myName}`);
// console.log(`Index 3 of "Steph": ${myName[3]}`);

// // 16
// const cool = "This is awesome don't you agree?";
// console.log(cool);
// console.log(`Slice backwards : ${cool.slice(-6, -1)}. (starts from -1)`);

// // 17
// const funFact = "Some cats are allergic to people";
// console.log(funFact);
// console.log(`Includes "cat"?: ${funFact.includes('cat')}`);


// // 18
// console.log(`Split funFact: ${funFact.split(' ')}`)

// 19
// console.log(`Replace method for funFact: ${funFact.replace(/c/, 'b')}`)

// // 20
// console.log("Is 13.1 a number? " + Number.isInteger('13.1'));

// // 21
// console.log(`Slice index(0,15) : ${cool.slice(0,15)}`);

// // 22
// console.log(`Includes "cat" at index: ${funFact.indexOf('cat')}`);

// // 23
// console.log(`Includes "frog" at index: ${funFact.indexOf('frog')}`);

// // 24
// let longString = `
// Lorem ipsum dolor sit amet, consectetur 
// adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
// dolore magna aliqua. Mi in nulla posuere sollicitudin. Diam vel quam 
// elementum pulvinar etiam non quam lacus suspendisse. Pellentesque 
// elit eget gravida cum sociis natoque penatibus et. Urna condimentum 
// mattis pellentesque id. Neque vitae tempus quam pellentesque nec nam 
// aliquam. Risus pretium quam vulputate dignissim suspendisse in est.
// `
// console.log(`Long string using backticks: ${longString}`);

// // 25
// console.log(`Does myName equal firstName?: ${myName === firstName}`);

// // 26
// console.log(`The length of myName is: ${myName.length}`);

// // 27
// console.log(`2 > 5? ${num1 > num2}`);

// // 28
// console.log(`2 < 5? ${num1 < num2}`);


// // 29
// console.log(`2 == 5? ${num1 == num2}`);


// // 30
// console.log(`2 === 5? ${num1 === num2}`);
// console.log(`2 !== 5? ${num1 !== num2}`);


// const sentence = 'I am new to learning javascript. ';
// console.log(sentence.slice(0,8));
// console.log(sentence.slice(-31,-23));
// console.log(sentence.includes('new'));
// if(sentence.indexOf("not") === -1) {
//     console.log("I have studies JS before");
// }else{
//     console.log("Welcome to JavaScript!");
// }
// console.log(sentence.split(' '));
// console.log(sentence.split(''));

// console.log(sentence.replace(/script/g, ''));

// const sentence2 = "It's awesome!"
// console.log(sentence.concat(sentence2));

//-----------------------------------------------------------------------------------------------
const userAge = prompt("How old are you? ");
if(userAge > 21) {
    console.log('You can enter the club');
}else {
    console.log('You are too young!');
}