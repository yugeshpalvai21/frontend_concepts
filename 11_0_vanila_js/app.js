document.getElementById('btn1').addEventListener('click', getDetails);

function getDetails() {
    var xhr = new XMLHttpRequest();
    var url = 'https://jsonplaceholder.typicode.com/posts';
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(this.status == '200') {
            var data = JSON.parse(this.responseText);
            var output = '';
            for(var i in data){
                output += '<ul class="list-item">';
                output += '<li>' + 'ID: ' +data[i].id +'</li>';
                output += '<li>' + 'Title: ' + data[i].title +'</li>';
                output += '<li>' + 'Body: ' + data[i].body +'</li>';
                output += '</ul>'
            }
            document.getElementById('results').innerHTML = output;
        }
    }
    xhr.send()
}