// for-in Loop in JavaScript
// The for-in loop is used to iterate over the enumerable properties (keys) of an object. 
// It gives you each property name (as a string) on every iteration.

const user = {
  name: "Sunny",
  role: "Data Engineer",
  location: "Melbourne"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
