// The variable holds the function body.
// Function is always stored in the heap, so the variable that holds the function body will also reference that heap.

// Store an anonymous function in a variable
const funVar = function() {
  console.log("hello!");
  return 5; // return statement should be inside the function
};

// Call the function and log its return value
console.log(funVar());  
// Output:
// hello!
// 5
