// Key is always stored as a string in an object
// To give a space in the key, use double quotes

// Way to create an object
const obj = {
  0: 202,
  1: 507,
  2: 303,
  3: 201,
  name: "yuan",
  age: 20,
  "aadhar number": 4512225002455,
  "instagram id": "ram123"
};

console.log(obj);
console.log(obj.age);
console.log(obj["0"]);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj["aadhar number"]);
console.log(typeof obj.name);
console.log(typeof obj.age);
console.log(obj["name"]);

console.log("\n");

// Way to create an array
const ary = new Array(10, 20, 30);
console.log(ary);

console.log("\n");

// The internal implementation of array is based on object concept:
// const ary = {
//   0: 10,
//   1: 20,
//   2: 30,
//   length: 3
// };
// It means that when we want to access ary.length, we don't use length() as a function, because length is a key/property, not a function.

// Another way to create an object
// Object is created in the heap
// Object is non-primitive data type
const person = new Object();

// Making object properties
person.name = "ray";
person.age = 17;
person.gender = "Male";

console.log(person);

delete person.age; // Delete object property
console.log(person);
