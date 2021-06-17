// Selecting Elements With html way
window.onload = () => {
    var mainElement = document.getElementById('wrapper');
    console.dir(mainElement);

    var elementTwo = document.getElementsByTagName('ul');
    console.log(elementTwo);

    var elementThree = document.getElementsByClassName('col_1');
    console.log(elementThree);
}


// // Self Calling Function

// (function someName() {
//     console.log('generated some randon name');
// })();

//  //Examin Window and Document Objects
// console.log(window);
// console.log(document);

// function  myFunction() {
//     console.log('standalone functions attched to window as methods')
//     var someName = 'somename';
//     function innerFunction() {
//         console.log(someName, 'innerFunction called');
//     }

//     return {
//         objMethod: function() { console.log('function returns object and object holds method and method runs and displaying content here..') },
//         objOther: innerFunction,
//         value: someName
//     }
// }

// myFunction();

// var obj = window.myFunction();

// obj.objMethod();
// obj.objOther();


