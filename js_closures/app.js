// // WITH Declaration of global variable, manipulation can be done from anywhere
// var counter = 0;

// function AddCounter() {
//   counter += 1;
// }

// console.log(counter);

// AddCounter();

// console.log(counter)

// counter = 0;

// console.log(counter);

// WITH CLOSURES DEFINE VARIABLE IN LOCAL SCOPE AND GIVE THAT VARIABLE TO GLOBAL SCOPE

// A closure is a function having access to the parent scope, even after the parent function has closed.

const AddCounter = (() => {
        var counter = 0;
        return () => {
                counter++;
                return counter;
        }
})();

console.log(AddCounter());

console.log(AddCounter());

console.log(AddCounter());

counter = 0;

console.log(counter);
console.log(AddCounter());
