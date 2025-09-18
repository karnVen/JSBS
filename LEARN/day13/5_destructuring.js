// destructuring of an array or object
// destructuring means getting the values individually
// destructuring means to break it up

// Object destructuring with rest operator
let ob1 = {
  name: "Ding Liren",
  money: 550000,
  zipcode: 4140004,
  address: "17-plank road"
};

// store specific properties into variables, rest into objy
const { name: personName, money: personMoney, ...objy } = ob1;

console.log(personName, personMoney, objy);
// Output:
// Ding Liren 550000 { zipcode: 4140004, address: '17-plank road' }


// Destructuring with Array:
const arr = [3, 2, 5, 7, 9, 11];

// capture first two elements and rest into ary
const [firstValue, secondValue, ...ary] = arr;
console.log(firstValue, secondValue, ary); 
// Output: 3 2 [5, 7, 9, 11]

// Selecting specific indexes by skipping others using commas
const [, index1value, , index3value, , index5value] = arr;
console.log(index1value, index3value, index5value);
// Output: 2 7 11

// Another variant, including a missing index 6 (which is undefined)
const [index0value, , index2value, , index4value, , index6value] = arr;
console.log(index0value, index2value, index4value, index6value);
// Output: 3 5 9 undefined


// Nested Object Destructuring
const oby = {
  name: "tian",
  address: {
    street: "14-food bridge",
    landmark: "prism hotel"
  }
};

// Destructure to get nested object separately
const { name: humanName, address: personAddress } = oby;

console.log(personAddress); // prints the whole address object
// Output: { street: '14-food bridge', landmark: 'prism hotel' }

// Destructure properties from nested object
const { landmark } = personAddress;
const { street } = personAddress;

console.log(humanName, landmark); // Output: tian prism hotel
console.log(humanName, street);   // Output: tian 14-food bridge

// Alternate nested destructuring in one step (commented out)
// const { name: fullname, address: { street, landmark } } = oby;
// console.log(street);   // 14-food bridge
// console.log(landmark); // prism hotel


// Destructuring property which is an array
const objt = {
  name: "tarun",
  arr: [25, 89, 75]
};

// Extract the whole array arr as arr2
const { arr: arr2 } = objt;
console.log(arr2); // Output: [25, 89, 75]

// Destructure to get second element from arr directly
const { arr: [, secondelement] } = objt;
console.log(secondelement); // Output: 89
