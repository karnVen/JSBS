// Nested object

const user = {
  name: "yuan",
  ssn: 12456,
  // address property is nested object
  address: {
    zipcode: 789990,
    "street number": "7-plank street"
  }
};

console.log(user.address["street number"]); // Output: 7-plank street
console.log(user.address.zipcode);          // Output: 789990
console.log(user.ssn);                       // Output: 12456

// Object.assign() uses shallow copy
// For non-nested properties, it copies values (primitive)
// For nested objects, it copies references (shallow copy)

const user2 = Object.assign({}, user);

user2.name = "ryan";
user2.ssn = 81230;

console.log(user2, user);
// user2 and user have different name and ssn values

// Shallow copy effect on nested objects:
user2.address["street number"] = "19-wood street";

console.log(user.address["street number"], user2.address["street number"]);
// Both user.address and user2.address reflect the change because nested objects are shared references.

// Note:
// Object.assign() and spread operator {...} both create shallow copies for nested objects.

