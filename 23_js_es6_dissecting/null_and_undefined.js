// In JavaScript, undefined and null are both used to represent the absence of value, 
// but they are used in different contexts and have different meanings.


// A variable is undefined if it has been declared but not assigned a value. 
// In other words, undefined is the default value assigned to variables that haven't been initialized.

let name;

console.log('name >>', name);


function sampleMethod() {
   // No return statement, so implicitly returns undefined
}

console.log(sampleMethod());

const obj = {}

console.log(obj.name);

console.log(typeof null);
console.log(typeof undefined);


// null is a special value that explicitly indicates the absence of value. 
// It is a value assigned to variables to represent that they are intentionally empty or have no value.

let b = null;
console.log(b); // Output: null

const person = {
  name: 'Alice',
  age: null // Indicates that the age property is intentionally left blank
};
console.log(person.age); // Output: null

function findItem(id) {
  // Assume we search for an item and return null if not found
  return null; 
}
console.log(findItem(1)); // Output: null


// Comparison

console.log(undefined == null);  // returns true as they both representing absence of value
console.log(undefined === null);  // returns false even as they both representing absence of value, but their type is different