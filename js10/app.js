//colors for each string//
let colors = [
    "#FFC0CB", "#964B00", "#FFFDD0"
]

function setup() {
    createCanvas(400,400);

    //will loop in order for the number of colors listed//
    for( var i = 0; i < colors.length; i ++) {
        noStroke();
        fill( colors[i] );
        rect( 80 * i, 150, 50, 30);
        noStroke();
    }
}