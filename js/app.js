function setup() {
    createCanvas(370,600);
    var gray = '#9DA9A0';
    var navy = '#2C4251';
    var brightblue = '#09B2FF';
    var lightblue = '#64CAFF';
    background(gray);

    //outer box//
    stroke(navy);
    strokeWeight(12);
    fill(gray);
    rect(60,100,250,400);

    //middle box//
    stroke(navy);
    strokeWeight(7);
    fill(gray);
    rect(75,115,220,370);

    //inner box//
    stroke(navy);
    strokeWeight(7);
    fill(gray);
    rect(85,125,200,350);

    //handle box//
    noStroke();
    fill(navy);
    rect(85,445,200,30);

    //handle//
    noStroke();
    fill(gray);
    rect(172,452,32,10,20);

    //middle bar//
    noStroke();
    fill(navy);
    rect(182,125,10,320);

    //1st triangle//
    noStroke();
    fill(brightblue);
    triangle(89, 129, 89, 445, 182, 445);

    //2nd triangle//
    noStroke();
    fill(lightblue);
    triangle(89, 129, 182, 129, 182, 445);

    //3rd triangle//
    noStroke();
    fill(brightblue);
    triangle(192, 129, 192, 445, 282, 445);

    //4th triangle//
    noStroke();
    fill(lightblue);
    triangle(192, 129, 282, 445, 282, 129);

    //middle horizontal bar//
    noStroke();
    fill(navy);
    rect(85,285,200,10);

}
