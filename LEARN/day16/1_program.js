// In JavaScript, when you use Object.create(obj1), you're creating a new object (obj2) whose prototype is obj1.
// obj2 itself does not directly contain obj1's properties but inherits them via the prototype chain.

let obj1 = {
  firstName: "dev",
  lastName: "singh",
  height: "170 cm",
  weight: "70 kg",
  zipcode: 10203
};

let obj2 = Object.create(obj1);

console.log("obj1:", obj1);  // Own properties of obj1
console.log("obj2:", obj2);  // Empty object with prototype as obj1

// Add own properties to obj2
obj2.ssn = 10471002;
obj2.address = "12-new tower";

console.log("After adding own properties:");
console.log("obj1:", obj1);
console.log("obj2:", obj2);

// Access inherited properties via prototype chain
console.log("Inherited properties from obj1 via obj2:");
console.log(obj2.height, obj2.lastName, obj2.zipcode);

// Object.keys returns only obj2's own enumerable property names, not inherited ones
console.log("Object.keys(obj2):", Object.keys(obj2)); // ['ssn', 'address']

// for...in loops over enumerable properties, including those inherited via prototype chain
console.log("Iterating with for...in over obj2 (own + inherited properties):");
for (let key in obj2) {
  console.log(key, obj2[key]);
}
