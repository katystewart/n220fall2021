function setup() {
    createCanvas(400, 400);
    background(50);
    noStroke();
    fill(255);
  }
  function draw() {
    // nothing to do! drawing happens in mousePressed
  }
  function mousePressed() {
    rect(mouseX, mouseY, 50, 25);
  }