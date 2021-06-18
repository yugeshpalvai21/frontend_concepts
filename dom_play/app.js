// DOM Manipulation 

window.onload = () => {
    var elementOne = document.getElementById("wrapper");
    console.log(elementOne);

    var elementTwo = document.querySelector("#page_content .left_side_bar .col_1 .box ul");
    console.log(elementTwo);

    console.log(elementTwo.children);
    console.log(elementTwo.parentElement);

    console.log(elementTwo.firstElementChild);
    var anchorElement = elementTwo.lastElementChild.firstElementChild;
    console.log(anchorElement);

    setTimeout(() => {
        anchorElement.innerText = "Menu Item 3 (Modified Through DOM)";
    }, 5000);
}

// Create Element And Attach to DOM
// window.onload = () => {
//     var mainElement = document.querySelector("#wrapper");
//     console.log(mainElement);


//     var anchorElement = document.createElement("a")
//     var anchorText = document.createTextNode("Privacy")
//     anchorElement.append(anchorText);
//     anchorElement.setAttribute("href", "#");
    
//     var elementOne = document.createElement("li");
    
//     elementOne.appendChild(anchorElement);

//     var navElement = document.querySelector("#header .navigation ul")
//     console.log(navElement);
//     navElement.appendChild(elementOne);
//     console.log(navElement);

// }

// // Selecting Elements with CSS way

// window.onload = () => {
//     var elementOne = document.querySelector('#wrapper');
//     console.log(elementOne);

//     var elementTwo = document.querySelector(".col_1");
//     console.log(elementTwo);

//     var elementThree = document.querySelectorAll(".col_1");
//     console.log(elementThree);

//     var elementFour = document.querySelectorAll("div");
//     console.log(elementFour);

//     var elementFive = document.querySelectorAll("a[href='#']");
//     console.log(elementFive);

//     var elementFive = document.querySelectorAll("a[href='google']");
//     console.log(elementFive);
// }

// // Selecting Elements With html way
// window.onload = () => {
//     var mainElement = document.getElementById('wrapper');
//     console.dir(mainElement);

//     var elementTwo = document.getElementsByTagName('ul');
//     console.log(elementTwo);

//     var elementThree = document.getElementsByClassName('col_1');
//     console.log(elementThree);
// }


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


