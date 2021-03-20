var form = document.getElementById('my-form');

// 

var listitems = document.getElementById('list-items');

form.addEventListener('submit', processData);

function processData(e) {
    e.preventDefault();
    var itemInput = document.getElementById('item').value;
    document.getElementById('item').value = '';
    if(itemInput.length > 3) {
        var li = document.createElement('li');
        var text = document.createTextNode(itemInput);

        li.appendChild(text);

        listitems.appendChild(li);
    }else {
        alert('Hey Check Your Input Length...');
    }
}