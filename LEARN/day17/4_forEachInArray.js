// The forEach method expects a callback function within the parentheses

let arr = [10, 20, 30, 40, 50];
arr.forEach(function(num) {
  console.log(num);
});

// Arrow function as callback
let arr2 = [1, 2, 3];
arr2.forEach((num) => {
  console.log(num);
});

// More concise arrow function (implicit return for single expression)
let arr3 = [10, 2, 3];
arr3.forEach(num => console.log(num));

// Arrow function with value and index parameters
let arr4 = [10, 2, 3];
arr4.forEach((num, index) => console.log(num, index));

// Updating/modifying array elements inside forEach
let arr5 = [8, 7, 3];
arr5.forEach((num, index, arr) => {
  arr[index] = num * 2; // modify element by doubling its value
});
console.log(arr5); // Output: [16, 14, 6]

// Using a named callback function
let ary = [5, 78, 90, 12, 57];

function f(num) {
  console.log(num);
}

ary.forEach(f); // passing named function as callback

// Note: forEach does not return anything (undefined)
// It is used for executing side effects like logging or modifying elements
