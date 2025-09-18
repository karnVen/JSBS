// for-of loop on array because the array is iterable
const ar = [10, 20, 30, 40, 50];
for (let val of ar) {
  console.log(val);
}

// for-of loop on string because the string is iterable
let str = "good morning!";
for (let term of str) {
  console.log(term);
}

// never use for-of loop on an object because object is not iterable.
// const obj = {
//   name: "roy",
//   gender: "male"
// };
// it throws an error.
// for(let x of obj){
//   console.log(x);
// }

// another way to apply for-of loop on an object by converting the object into an array:
const obj = {
  name: "roy",
  gender: "male"
};
for (let x of Object.keys(obj)) {
  console.log(x, obj[x]);
}

// for-each loop on array for iteration:
let arr = [1, 23, 10, 47, 98, 120];
arr.forEach(element => {
  console.log(element);
});
