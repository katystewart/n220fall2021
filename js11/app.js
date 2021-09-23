let positions = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function setup() {
    createCanvas(400,300);

}

function draw() {
    background("orange");

    positions.push( mouseX );
    positions.shift();

    for( var i = 0; i < positions.length; i ++) {
        circle( positions[i], 150, 20);
    }
}