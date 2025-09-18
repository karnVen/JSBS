// Here, the operator ...num is a rest operator, not a spread operator.

// The function captures all arguments passed into an array called num
function fun(...num) {
  // Initialize sum variable
  let sum = 0;

  // Iterate over all elements in the num array and add them to sum
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  // Return the computed sum
  return sum;
}

// Example usage:
let result1 = fun(1, 2, 3, 4, 5);
console.log(result1); // Output: 15

let result2 = fun(10, 20);
console.log(result2); // Output: 30

let result3 = fun(); // No arguments
console.log(result3); // Output: 0
