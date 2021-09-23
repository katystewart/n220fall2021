//color palette//
let colors = ["orange", "red", "blue", "black"];



function setup() {
  createCanvas(1400, 770);

}

//draws rectanges at random locations with looping colors pulled from array//
function draw() {
    for( var i = 0; i < colors.length; i ++) {
        noStroke();
        fill( colors[i] );
        rect(random(width), random(height), 15, 15);
        noStroke();
  }

}