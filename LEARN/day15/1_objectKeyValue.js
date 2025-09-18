const obj = {
  name: "rohan",
  height: "175cm",
  weight: "65 Kg",
  ssn: 142077,
  address: "167 plank road"
};

// Object.keys(obj) extracts all the keys from the obj object and returns them as an array.
// That resulting array is then stored in the variable b.
let b = Object.keys(obj);
console.log(b);

// Object.values(obj) extracts all the values from the obj object and returns them as an array.
// That resulting array is then stored in the variable a.
let a = Object.values(obj);
console.log(a);

// Object.entries(obj) extracts all the key-value pairs from the obj object and returns them as an array.
// That resulting array is then stored in the variable c.
let c = Object.entries(obj);
console.log(c);
