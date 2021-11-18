//get divs from HTML and add data attribute//
let div1 = document.createElement("div");
div1.setAttribute("data-color", "red");

let div2 = document.createElement("div");
div2.setAttribute("data-color", "green");

let div3 = document.createElement("div");
div3.setAttribute("data-color", "blue");

//array for three divs//
let divs = [div1, div2, div3];

//for loop to style the divs//
for (let i = 0; i < divs.length; i++) {
  divs[i].style.width = "200px";
  divs[i].style.height = "200px";
  divs[i].style.margin = "5px";
  divs[i].style.backgroundColor = "grey";
  divs[i].style.float = "left";

//event listener to change color when clicked//
  divs[i].addEventListener('click', changeColor);
  document.body.appendChild(divs[i]);
}

//function to change color and add the event target//
function changeColor(event) {
  var backgroundColor = event.target.getAttribute("data-color");
  event.target.style.backgroundColor = backgroundColor;
}