

var addCounter =( function() {
        let counter = 0;
        return function() {
                counter += 1;
                return counter;
            }
    }
)();

console.log(addCounter());
console.log(addCounter());

console.log(counter);

