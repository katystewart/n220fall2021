var myCar;

function setup() {
    createCanvas(800,400);
    
    //create the block//
    myBlock = new Block();
}

function draw() {
   
    //display the block//
    myBlock.display();
}

//block constructor//
function Block()
{
    this.xpos = 200;
    this.ypos = 200;
    this.width = 40;
    this.height = 50;
    this.c = color(3, 169, 252);

    //display method//
    this.display = function()
    {
        fill(this.c);
        rect(this.xpos, this.ypos, this.width, this.height);
    }
}

//1 - Data-driven display: Make an object with all the properties for a graphic on the screen - width, height, color, position. //
//In your create or draw function draw that object using the data in your object// 
