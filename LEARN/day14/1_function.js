// basic function syntax in JavaScript:
function func(num) {
  console.log("hi: " + num);
  return "hi, boy!";
}

console.log(typeof func);  // function

let ans = func(5);  // Logs: hi: 5
console.log(ans);   // Logs: hi, boy!
