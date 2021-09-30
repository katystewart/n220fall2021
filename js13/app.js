//creates a loop that calls an element 100 times//
for (var i=0; i<100; i++) {

    //pulls the element from HTML//
    let pull = document.getElementById("box");

    //creates a changed element//
    let div = document.createElement('div');
    
    //alligns divs to the left//
    div.style.float = "left";
    //height of div//
    div.style.height = "20px";
    //width of div//
    div.style.width = "20px";
    //makes each div a random color//
    div.style.backgroundColor = randomColor();
    //puts the element on the page//
    pull.appendChild(div); 
}

//makes each div a random color//
function randomColor() {
    //math.floor makes number a whole number; math.random picks a random number and multiples by 255 to get color//
    //for the rgb value, r will be a different random number, g will be a different random number, b will be a different random number to make up whole color//
    var r = Math.floor( Math.random() * 255);
    var g = Math.floor( Math.random() * 255);
    var b = Math.floor( Math.random() * 255);
    //puts each variable that was just set in a string//
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    //lets randomColor be called upon for backgroundColor//
    return randomColor;
}