// In deep copy, actual separate copies are created,
// so it is called deep copy because real copies get created.

// Always use structuredClone to do deep copy (modern and recommended)

let obj1 = {
  a: 22,
  b: 33
};

let obj2 = structuredClone(obj1); // two different objects get created

obj2.a = 77;

console.log(obj1, obj2);
// Output:
// { a: 22, b: 33 } { a: 77, b: 33 }
// two different copies are created and both obj1 and obj2 are separate references
