console.log('loaded data from js successfully...');

var targetElement = document.getElementById('addInput');

//console.log(targetElement);

function addItemToDom(item) {
    var liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(item));
    //document.getElementsByTagName('ul')[0].appendChild(liElement);
    //document.getElementById('results').children[0].appendChild(liElement);
    document.querySelector("#results ul").appendChild(liElement);

}

var handleSubmission = function(e) {
    e.preventDefault();
    console.log(e.type);
    var data = document.getElementById('inputValue').value;
    addItemToDom(data);
    document.getElementById('inputValue').value = '';

}

targetElement.addEventListener('submit', handleSubmission);