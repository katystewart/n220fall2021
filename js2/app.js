//setup canvas//
function setup() {
    createCanvas(400,300);
}

function draw() {
    //clears the background after moving//
    background("black");

    //circle that follows mouse//
    circle(mouseX,mouseY,30);

    //circle will be blue on the left side of canvas//
    fill("blue")
    
    //circle is red if mouse is on right half of canvas//
    if (mouseX > 200) {
        fill("red");
    }

}