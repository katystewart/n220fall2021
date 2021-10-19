//create array//
let letters = ["a", "b", "c"];

function setup () {
createCanvas(1200,600);

for(let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    console.log(letters[i]);

    if(letter == "a") {
        fill(0);
        rect( 10, 10, 50, 50);
    }

    else if(letter == "b") {
        fill("red");
        circle( 150, 30, 20);
    }

    else {
        fill("blue");
        circle( 200, 300, 20);
    }
}
}