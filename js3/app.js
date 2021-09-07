//gives circleX a value//
let circleX = 0;

//setup canvas//
function setup() {
    createCanvas(800,600);
}

function draw() {
    //clears background//
    background ("black");

    //circle starts at x = 0, y = 300//
    circle (circleX,300,50);

    //circle moves 5 to the right each frame//
    circleX = circleX + 5;

    //if circle reaches end up canvas, it warps back to the beginning at x = 0//
    if (circleX > 800) {
    circleX = 0;
    
    //allows to see what circleX is doing//
    console.log(circleX);
    }
}