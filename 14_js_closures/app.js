// A closure is created when a function is defined inside another function, allowing the inner function to access variables and parameters of the outer function. 
// Even after the outer function has finished executing, the inner function retains access to those variables. 
// This behavior occurs because JavaScript functions create their own scope, and closures allow the inner function to "close over" the outer function’s scope.

function createPerson(name) {
        let age = 0; // Private variable
                
        return {
                getName: function() {
                return name;
                },
                getAge: function() {
                return age;
                },
                setAge: function(newAge) {
                if (newAge >= 0) {
                age = newAge;
                }
                }
        };
}

const person = createPerson('Alice');
console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 0
person.setAge(30);
console.log(person.getAge()); // Output: 30