// Passing function as an argument to another function is called a callback function.

// Example 1: Passing a named function as callback
function fun1(fun2) {
  console.log("hi, I'm function fun1");
  fun2();
}

function fun2() {
  console.log("hi, I'm function fun2");
}

fun1(fun2);

// Example 2: Passing an anonymous function directly as an argument
function fun3(fun4) {
  console.log("hi, I'm function fun3");
  fun4();
}

fun3(function fun4() { // directly passing function as argument
  console.log("hi, I'm function fun4");
});

// Example 3: Using a function reference variable as a callback
function fun5(fun6) {
  console.log("hi, I'm function fun5");
  fun6();
}

const refVariable = function fun6() {
  console.log("hi, I'm function fun6");
};

fun5(refVariable); // passing the reference of fun6

// Example 4: Passing an arrow function directly as a callback
function fun7(fun8) {
  console.log("hi, I'm function fun7");
  fun8();
}

fun7(() => { // directly passing arrow function as argument
  console.log("hi, I'm function fun8");
});
