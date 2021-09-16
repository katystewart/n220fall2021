function setup() {
    createCanvas(1000,400);

}


function draw() {
    background("white");
    stroke("green");
    
    for (let i = 1; i <= width+45; i++) {
      let lineX = i * 32;
      line(lineX, 200, lineX, height);
    }

    for (var x = 0; x < width+45; x += 40) {
        fill("blue");
        rect(x, 0, 40, 40);
        noStroke();
    }

    for (var x = 0; x < width+45; x += 40) {
        fill("green");
        ellipse(x, 400, 40, 40);
    }

    for (var x = 1; x <= width+40; x += 40) {
        fill("pink");
        ellipse(x, 200, 30, 40);
        noStroke();
    }
    for (var x = 1; x <= width+40; x += 40) {
        fill("purple");
        ellipse(x, 200, 10, 10);
        noStroke();
    }
    fill("yellow");
    circle(800,100, 50, 50);
    
  }