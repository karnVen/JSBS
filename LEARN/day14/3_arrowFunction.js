// First format: arrow function with explicit return using curly braces
const fun1 = (a, b) => {
  return a * b + a % b;
};
let ans1 = fun1(5, 2);
console.log(ans1); // Output: 11

// Second format: concise body arrow function (implicit return)
const fun2 = (a, b, c) => a * b + a % b + c;
let ans2 = fun2(5, 2, 9);
console.log(ans2); // Output: 20

// Third format: single parameter without parentheses, concise body
const fun3 = num => num * num * num;
console.log(fun3(7)); // Output: 343
