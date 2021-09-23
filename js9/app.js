//array to loop through 10 times//
let positions = [0,0,0,0,0,0,0,0,0,0]; 

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background("orange");
  
  //follows mouse//
  let position = {
    x: mouseX,
    y: mouseY
  };

  //array will follow mouse//
  positions.push(position);
  positions.shift();

  //loop to draw circles according to both arrays; 10 apart and following mouse//
  for (var i = 0; i < positions.length; i++) {
    noStroke();
    fill(100);
    circle(positions[i].x,positions[i].y,20,20);
  }
}