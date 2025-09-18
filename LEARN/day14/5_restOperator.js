// All the values get bundled together in the 'num' parameter,
// and 'num' acts as an array inside the function.

// Function using rest operator to gather all arguments into an array
function fun(...num) {
  return num; // returns the array of arguments
}

let array1 = new Array(); // array is created but initially empty
array1 = fun(3, 5, 7);
console.log(array1); // Output: [3, 5, 7]

// Now, to sum all elements in the array 'array1'
let sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum += array1[i];
}

console.log(sum); // Output: 15

// Alternatively, you can calculate sum directly in the function
function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(sumAll(3, 5, 7)); // Output: 15
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll()); // Output: 0
