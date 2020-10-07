//JavaScript is an interpreted language. it is a scripting language
//A javascript engine in a webbrowser interpretes js
//JS is hosted by html on the front end hence js is a front end language
//Node JS is a backend hosting language for js

var block;
var container;
block = document.createElement("div");
block.innerHTML = "This div was created/inserted using javascript";
container = document.getElementById("container");
container.appendChild(block);

block.style.color = "red";
block.style.border = "1px solid yellow"
block.style.height = "40px"

//Make the above code a function

function creatediv(){
    var block;
    var container;
    block = document.createElement("div");
    block.innerHTML = "This div was created/inserted using  a javascript function";
    container = document.getElementById("container");
    container.appendChild(block);
    
    block.style.color = "red";
    block.style.border = "1px solid yellow"
    block.style.height = "40px"
}

creatediv();