// // Functions exercise
// const difference = (num1, num2) => {
//   return num1 - num2;
// };
// console.log(difference(2, 2));
// console.log(difference(0, 2));
// //

// const product = (num1, num2) => {
//   return num1 * num2;
// };
// console.log(product(2, 2));
// console.log(product(0, 2));
// //

// const printDay = (num) => {
//   switch (num) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;
//       default:
//         console.log(undefined);
//   }
// }
// printDay(1);
// printDay(2);
// printDay(41);
// //

// const lastElement = (arr) => {
//     return arr[arr.length-1];
// }
// console.log(lastElement([1,2,3,4]));
// console.log(lastElement([]));
// //

// const numberCompare = (num1, num2) => {
//     if (num1 > num2) {
//         console.log("First is greater");
//     }
//     else if (num2 > num1) {
//         console.log("Second is greater");
//     } else if (num1 === num2) {
//         console.log("Numbers are equal");
//     }
// }
// numberCompare(1,1);
// numberCompare(2,1);
// numberCompare(1,2);
// //

// const singleLetterCount = (str1, str2) => {
//     let result = 0;
//     for(let i=0; i<str1.length; i++) {
//         if(str1[i].toLowerCase() === str2.toLowerCase()) {
//             result++;
//         }
//     }
//     return result;
// }
// console.log(singleLetterCount('amazing', 'A'));
// console.log(singleLetterCount('school', 'o'));
// //

// const multipleLetterCount = (str) => {
//     str = str.toLowerCase();
//     let result = {};
//     for(let i=0; i< str.length; i++) {
//         if (result[str[i]] === undefined) {
//             result[str[i]] = 1;
//         } else {
//             result[str[i]]++;
//         }
//     }
//     return result;
// }
// console.log(multipleLetterCount("heLlo"));
// console.log(multipleLetterCount("person"));
// //

// const arrayManipulation = (arr, command, loc, val) => {
//     if (command === 'remove') {
//         if (loc === 'end'){
//             return arr.pop();
//         }
//         return arr.shift();
//     } else if (command === 'add'){
//         if(loc === 'end') {
//             arr.push(val);
//             return arr;
//         }
//         arr.unshift(val);
//         return arr;
//     }
// }
// console.log(arrayManipulation([1,2,3], 'remove', 'end'));
// console.log(arrayManipulation([1,2,3], 'remove', 'beginning'));
// console.log(arrayManipulation([1,2,3], 'add', 'beginning', 20));
// console.log(arrayManipulation([1,2,3], 'add', 'end', 30));
// //

// const isPalindrome = (str) => {
//     str = str.replace(/\s/g, '')
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
// }
// console.log(isPalindrome('testing'));
// console.log(isPalindrome('taco cat'));
// //

const rockPaperScissors = () => {
  function comp(num) {
    if (num <= 0.33) return "rock";
    else if (num <= 0.66) return "paper";
    return "scissors";
  }

  let userChoice = prompt(
    "Please choose rock, paper, or scissors"
  ).toLowerCase();
  let compChoice = comp(Math.random());
  let choices = ["rock", "paper", "scissors"];

  if (!userChoice || choices.indexOf(userChoice) === -1) {
    return "Please select a valid option";
  }
  if (userChoice === compChoice) {
    return "Tie";
  }
  if (userChoice === "rock" && compChoice === "paper") {
    return `You lose! Computer picked ${compChoice}`;
  }
  if (userChoice === "scissors" && compChoice === "rock") {
    return `You lose! Computer picked ${compChoice}`;
  }
  if (userChoice === "paper" && compChoice === "scissors") {
    return `You lose! Computer picked ${compChoice}`;
  }
  return `You win! Computer picked ${compChoice}`;

  //
}
console.log(rockPaperScissors());
// rockPaperScissors();

// // Rock, paper, scissors, lizard, spock from the Big Bang Theory
// const RPSLS = () => {
//   function comp(num) {
//     if (num <= 0.2) return "rock";
//     else if (num <= 0.4) return "paper";
//     else if (num <= 0.6) return "scissors";
//     else if (num <= 0.8) return "lizard";
//     return "spock";
//   }
//   let rules = alert(
//     "Welcome to Rock, Paper, Scissors, Lizard, Spock! Here are the rules: \n\
//     Rock crushes Scissors\n \
//     Scissors cuts Paper\n \
//     Paper covers Rock\n \
//     Rock crushes Lizard\n \
//     Lizard poisons Spock\n \
//     Spock smashes Scissors\n \
//     Scissors decapitates Lizard\n \
//     Lizard eats Paper\n \
//     Paper disproves Spock\n \
//     Spock vaporizes Rock"
//   );

//   let userChoice = prompt(
//     "Please choose rock, paper, scissors, lizard, or spock"
//   ).toLowerCase();
//   let compChoice = comp(Math.random());
//   let choices = ["rock", "paper", "scissors", "lizard", "spock"];

//   if (!userChoice || choices.indexOf(userChoice) === -1) {
//     // alert`Please select a valid option`;
//     return `Please select a valid option`;
//   }
//   if (userChoice === compChoice) {
//     // alert`Tie`;
//     return `Tie`;
//   }
//   if (userChoice === "rock" && compChoice === "paper") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "scissors" && compChoice === "rock") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "paper" && compChoice === "scissors") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "lizard" && compChoice === "rock") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "spock" && compChoice === "lizard") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "scissors" && compChoice === "spock") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "lizard" && compChoice === "scissors") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "paper" && compChoice === "lizard") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "spock" && compChoice === "paper") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   if (userChoice === "rock" && compChoice === "spock") {
//     // alert `You lose! Computer picked ${compChoice}`;
//     return `You lose! Computer picked ${compChoice}`;
//   }
//   // alert `You win! Computer picked ${compChoice}`;
//   return `You win! Computer picked ${compChoice}`;
//   // return;
// } 
// console.log(RPSLS());
