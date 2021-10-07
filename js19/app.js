
var myDot;

function setup() {
    createCanvas(800,400);
    
    //create the dot//
    myDot = new Dot();
}

function draw() {
   
    //display the dot//
    myDot.display();
}

//dot constructor//
function Dot()
{
    this.xpos = 200;
    this.ypos = 200;
    this.width = 50;
    this.height = 50;
    this.c = color(252, 3, 132);

    //display method//
    this.display = function()
    {
        noStroke();
        fill(this.c);
        ellipse(this.xpos + 1, this.ypos, this.width, this.height);
    }
}