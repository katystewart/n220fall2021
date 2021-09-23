let rectX = 0;
let rectY= 0;
var hasClicked = false;


function setup() { 
    createCanvas(400, 400);
    background(50);
    rectMode(CENTER);
    noStroke();
  } 
  
  function draw() { 
  background(50);
    if (hasClicked) {
      fill(255);
      rect(rectX, rectY, 50, 25);
    }
    rectY+=5;
  }
  
  function mousePressed() {
    rectX = mouseX;
    rectY = mouseY;
    hasClicked = true;
  }