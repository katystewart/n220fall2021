function setup() {
    createCanvas(1000,400);

}


function draw() {
    background("white");
    stroke("green");
    //stems//
    for (let i = 1; i <= width+45; i++) {
      let lineX = i * 32;
      line(lineX, 200, lineX, height);
    }
    
    //sky//
    for (var x = 0; x < width+45; x += 40) {
        fill("blue");
        rect(x, 0, 40, 40);
        noStroke();
    }

    //bushes//
    for (var x = 0; x < width+45; x += 40) {
        fill("green");
        ellipse(x, 400, 40, 40);
    }

    //flower petals//
    for (var x = 1; x <= width+40; x += 40) {
        fill("pink");
        ellipse(x, 200, 30, 40);
        noStroke();
    }

    //inside of flower//
    for (var x = 1; x <= width+40; x += 40) {
        fill("purple");
        ellipse(x, 200, 10, 10);
        noStroke();
    }

    //sun//
    fill("yellow");
    circle(800,100, 50, 50);
    
  }