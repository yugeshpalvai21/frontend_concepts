function firstOne() {
    console.log('running this as callback from promises')
}

function secondOne() {
    return new Promise((resolve, reject) => {
        let admin = false;
        if(admin) {
            resolve();
        } else {
            reject('Admin Set TO FALSEEEE')
        }
    });
}

secondOne()
.then(firstOne)
.catch(err => console.log(err))
