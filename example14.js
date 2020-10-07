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