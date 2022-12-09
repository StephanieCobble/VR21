// // 'map' under the hood
// const numArr = [1, 2, 3, 4, 5];
// const doubleNum = (num) => num * 2;

// const map = (arr, callback) => {
//     let results = [];

//     for (let i=0; i <= arr.length - 1; i++) {
//         let result = callback(arr[i]);
//         results.push(result);
//     }
//     return results;
// };
// console.log(map(numArr, doubleNum));

// // 'filter' under the hood 
// function isEven(num) {
//     return num % 2 === 0;
// }

// const filter = (arr, cb) => {
//     let results = [];
//     for (let i=0; i <arr.length; i++){
//         // let result = cb(arr[i]);
//         if (cb(arr[i]))
//         results.push(arr[i]);
//     }
//     return results;
// }
// console.log(filter(numArr, isEven));

// // 'reduce' under the hood 
// function add(acc, arrIndexVal) {
// return acc + arrIndexVal;
// }

// function reduce(arr, cb, initialVal) {
//     let acc = 0;
//     if (initialVal !== undefined){
//         acc = initialVal;
//     }
//     for(i = 0; i <arr.length -1; i++){
//         return cb(acc, arr[i])
//     }
//     return acc;
// }
// console.log(reduce(numArr, add)); 

// the .find() method. Returns the first element in the provided array
const arr1 = [5, 12, 8, 130, 44];
const found = arr1.find(element => element > 10);
console.log(found);