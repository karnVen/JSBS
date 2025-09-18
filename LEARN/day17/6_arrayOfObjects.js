// Array of objects:
const students = [
  { name: "sham", age: 12, marks: 50 },
  { name: "samir", age: 13, marks: 49 },
  { name: "luv", age: 14, marks: 57 },
  { name: "krysh", age: 11, marks: 55 }
];

// Here, val denotes each object present inside the array

// Filter students with marks greater than 50
const result = students.filter((val) => {
  return val.marks > 50; // if true, will be stored in result
});
console.log(result);
// Output: [{ name: "luv", age: 14, marks: 57 }, { name: "krysh", age: 11, marks: 55 }]

// Destructured the object to get only marks and age, filter marks>50 and age>11
const result2 = students.filter(({ marks, age }) => marks > 50 && age > 11);
console.log(result2);
// Output: [{ name: "luv", age: 14, marks: 57 }]

// Destructured the object to get only age, filter age>11
const result3 = students.filter(({ age }) => age > 11);
console.log(result3);
// Output: [{ name: "sham", age: 12, marks: 50 }, { name: "samir", age: 13, marks: 49 }, { name: "luv", age: 14, marks: 57 }]

// Map example: square each element in array
const ar = [1, 2, 3, 4, 6];
const ans = ar.map((element) => element * element);
console.log(ans);
// Output: [1, 4, 9, 16, 36]

// Using filter and map simultaneously
// Filter out all even numbers and then square those values
const arry = [10, 20, 35, 87, 98];
const res = arry.filter((val) => val % 2 === 0).map((val) => val * val);
console.log(res);
// Output: [100, 400, 9604]
