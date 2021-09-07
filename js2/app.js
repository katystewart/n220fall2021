function setup() {
    createCanvas(400,300);
}

function draw() {
    background("black");
    circle(mouseX,mouseY,30);
    fill("blue")
    if (mouseX > 200) {
        fill("red");
    }

}