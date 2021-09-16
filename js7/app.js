function setup() {
    createCanvas(400,400);
}

function draw() {

//max number of squares on bottom//
let width = 5;

background("white");

//adds 1 rectangle every row until width is reached//
//25 is size of box//
//1 is added to row every time//
for(let row = 0; row < width; row++) {
  for(let col = 0; col < row; col++) {
    rect( (col+0.5)*25, (row+0.5)*25,25,25);
    fill("red");
    stroke("white");
  }
}
}
