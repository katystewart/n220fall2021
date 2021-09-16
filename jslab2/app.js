function setup() {
    createCanvas(400,400);
}

function draw() {
    background(50);
    fill("orange");
    circle(400-mouseX, 400-mouseY, 20, 20);
}