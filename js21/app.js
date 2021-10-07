
var myDot;

function setup() {
    createCanvas(800,400);
    
    //create the dot//
    myDot = new Dot();
    console.log(myDot);
}

function draw() {
  background(255);
    //display the dot//
    myDot.display();
    //move the dot//
    myDot.move();
}

//dot constructor//
class Dot {
    constructor() {
        this.xpos = 0;
        this.ypos = 0;
        this.width = 50;
        this.height = 50;
        this.c = color(252, 3, 132);
    }
    //function to move dot//
    move() {
        this.xpos = this.xpos + random(-5, 5);
        this.ypos = this.ypos + random(-5,5);
    }

    //display method//
    display() {
    
        noStroke();
        fill(this.c);
        ellipse(this.xpos + mouseX, this.ypos + mouseY, this.width, this.height);
    }

}