// Shallow copy means copy with reference.
// Shallow copy shares the same address.
// Only one object is created but all references point to the same object.

let obj1 = {
  a: 1,
  b: 2
};

let obj2 = obj1; // obj2 references the same object as obj1

console.log(obj1); // Output: { a: 1, b: 2 }
console.log(obj2); // Output: { a: 1, b: 2 }

obj2.a = 31; // Modify property 'a' via obj2

console.log(obj2); // Output: { a: 31, b: 2 }
// Both obj1 and obj2 reference the same object, so the change is seen in obj1 as well
console.log(obj1); // Output: { a: 31, b: 2 }
