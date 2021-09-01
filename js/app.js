function setup() {
    createCanvas(1425,600);
    var gray = '#9DA9A0';
    background(gray);

    //outer box//
    stroke('#2C4251');
    strokeWeight(12);
    fill('#9DA9A0');
    rect(60,100,250,400);

    //middle box//
    stroke('#2C4251');
    strokeWeight(7);
    fill('#9DA9A0');
    rect(75,115,220,370);

    //inner box//
    stroke('#2C4251');
    strokeWeight(7);
    fill('#9DA9A0');
    rect(85,125,200,350);

    //handle box//
    noStroke();
    fill('#2C4251');
    rect(85,445,200,30);

    //handle//
    noStroke();
    fill('#9DA9A0');
    rect(172,452,32,10,20);

    //middle bar//
    noStroke();
    fill('#2C4251');
    rect(182,125,10,320);

    //1st triangle//
    noStroke();
    fill('#09B2FF');
    triangle(89, 129, 89, 445, 182, 445);

    //2nd triangle//
    noStroke();
    fill('#64CAFF');
    triangle(89, 129, 182, 129, 182, 445);

    //3rd triangle//
    noStroke();
    fill('#09B2FF');
    triangle(192, 129, 192, 445, 282, 445);

    //4th triangle//
    noStroke();
    fill('#64CAFF');
    triangle(192, 129, 282, 445, 282, 129);

}
