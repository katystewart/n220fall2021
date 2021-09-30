//calls for div element in HTML and adds a function//
document.getElementById('box').onmouseout = function changeContent2 () {
    //changes background to blue when mouse is over box//
    document.getElementById('box').style.backgroundColor = "blue";
    //changes box size to 100px x 100px//
    document.getElementById('box').style.width = "100px";
    document.getElementById('box').style.height = "100px";
 }

document.getElementById('box').onmouseover = function changeContent() {
    //changes background to black when mouse is not over box//
    document.getElementById('box').style.backgroundColor = "black";
    //changes box size to 100px x 100px//
    document.getElementById('box').style.width = "100px";
    document.getElementById('box').style.height = "100px";
 
 }
