function setup() {
    createCanvas(500,500);
    

}

function draw() {

background(200);


for( var i = 50; i > 0; i--) {
    circle(250,250, i * 5);
}

}