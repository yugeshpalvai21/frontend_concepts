const handleOutput = (user) => {
    let tarElement  = document.querySelector('.main')
    tarElement.innerHTML = `<ul><li>${user.name}</li><li>${user.location}</li></ul>`; 
}

const prom = new Promise((Resolve, Reject) => {
    const x = 6;
    if(x==6) {
        Resolve({name: 'yugesh', location: 'IND'})
    } else {
        Reject(404, 'Unable To Gather Data')
    }
})

prom.then(function(data){
    handleOutput(data); 
}, function(status, error) {
    console.log(status, error);
})