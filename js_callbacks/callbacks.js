// FETCH DATA

const userData = [{name: 'yugesh', location: 'IND', admin: true}];

function displayData() {
    let output = '';
    userData.forEach((user) => {
        output += `<li>${user.name} - ${user.location} - ${user.admin}</li>`
    });
    document.body.innerHTML = output;
}

displayData();
console.log(userData);

function insertData(callback) {
    userData.push({name: 'john', location: 'USA', admin: false});
    callback();
}

insertData(displayData);
console.log(userData);

insertData(displayData);
console.log(userData);



// // Basic Example
// function runOne(callback) {
//     setTimeout(() => {
//         console.log('running one');
//         callback();
//     }, 3000)
// }

// function runTwo() {
//     console.log('running two');
// }

// runOne(runTwo);

