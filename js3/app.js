let circleX = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background (32);
    circle (circleX,300,50);
    circleX = circleX + 5;
    if (circleX > 800) {
    circleX = 0;
    }
}