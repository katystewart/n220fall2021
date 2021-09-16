function setup() {
    createCanvas(400,400);
}

function draw() {


let width = 5;

background("white");

for(let k = 0; k < width; k++) {
  for(let i = 0; i < k; i++) {
    rect( (i+0.5)*25, (k+0.5)*25,25,25);
    fill("red");
    stroke("white");
  }
}
}
