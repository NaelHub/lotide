// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function (arr1, arr2) {
//   let isTrue = null;
//   if (arr1.length !== arr2.length)
//     return false
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       isTrue = false;
//     } else {
//       isTrue = true;
//     }
//   }
//   return isTrue;
// };
// const assertArraysEqual = function (a, b) {
//   if (eqArrays(a, b)) {
//     console.log(`✅✅✅Assertion Passed: ${a} === ${b} `);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${a} === ${b}`);
//   }
// };
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual")
// ACTUAL FUNCTION
const middle = function (array) {
    let result = [];
    if (array.length % 2 === 0) {
        result = [array[array.length / 2 - 1], array[array.length / 2]]
        return result
    } else {
        result =  [array[Math.round(array.length / 2 - 1)]];
        return result
    }
}
// return result;

module.exports = middle;