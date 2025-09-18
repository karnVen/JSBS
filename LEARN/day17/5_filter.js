// Filter only even elements
let arr1 = [12, 99, 18, 71, 33];
const ans = arr1.filter((val) => {
  return val % 2 === 0;
});
console.log(ans); // Output: [12, 18]

// Filter elements at even indices only
let arr2 = [13, 90, 18, 70, 33];
const ans2 = arr2.filter((val, index) => {
  return index % 2 === 0;
});
console.log(ans2); // Output: [13, 18, 33]
