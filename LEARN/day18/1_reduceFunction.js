// Syntax of reduce function:
// 1. const res = ar.reduce(callBackFunction, initialization)
// 2. const res = ar.reduce((accumulator, currentValue) => {
//      // logic
//    }, initialization)

// initialization: starting value of accumulator
// currentValue: current element in the array

const ar = [10, 20, 30];

// Example 1: sum all elements using reduce with block body
const res1 = ar.reduce((accumulator, currentValue) => {
  accumulator = accumulator + currentValue;
  return accumulator; // accumulator accumulates values
}, 0);
console.log(res1); // Output: 60

// Example 2: sum all elements using a compact arrow function
const res2 = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(res2); // Output: 60

// Example 3: counting occurrences of fruits in an array
const aray = [
  "orange", "apple", "banana", "apple", "orange",
  "banana", "orange", "apple", "grapes", "apple"
];

const answer = aray.reduce((accumulator, currentValue) => {
  if (accumulator.hasOwnProperty(currentValue)) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {}); // empty object as initializer

console.log(answer);
// Output: { orange: 3, apple: 4, banana: 2, grapes: 1 }

// Example 4: same logic using a conditional (ternary) operator
const ans5 = aray.reduce((accumulator, currentValue) => {
  accumulator.hasOwnProperty(currentValue)
    ? accumulator[currentValue]++
    : (accumulator[currentValue] = 1);
  return accumulator;
}, {});
console.log(ans5);

// Example 5: Initialize the accumulator object with preset counts
const ans6 = aray.reduce((accumulator, currentValue) => {
  accumulator.hasOwnProperty(currentValue)
    ? accumulator[currentValue]++
    : (accumulator[currentValue] = 1);
  return accumulator;
}, { orange: 3, apple: 4, grapes: 107 });
console.log(ans6);

// Example 6: Using reduce to create a new array with each value doubled
const ar5 = [1, 2, 3, 4];
const ans = ar5.reduce((acc, curr) => {
  acc.push(curr * 2); // modify and add each item
  return acc;
}, []); // empty array as initializer

console.log(ans); // Output: [2, 4, 6, 8]

// Example 7: Demonstrating hasOwnProperty method
let obj = {
  a: 1,
  b: 2
};

console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("c")); // false
