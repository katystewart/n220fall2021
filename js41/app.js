//referencing HTML//
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");
let btnSix = document.getElementById("btnSix");
let btnSeven = document.getElementById("btnSeven");
let btnEight = document.getElementById("btnEight");
let btnNine = document.getElementById("btnNine");
let colorDiv = document.getElementById("colorDiv");
let redVal = 0;
let blueVal = 0;
let greenVal = 0;

//creates color block on page to be called for//
let divs = [colorDiv];

//loop to edit style of div on page; could add more divs//
for(let i = 0; i < divs.length; i++) {
    divs[i].style.width = "200px";
    divs[i].style.height = "200px";
    divs[i].style.margin = "5px";
    divs[i].style.backgroundColor = "grey";
    divs[i].style.float = "left";

    //puts div on page//
    document.body.appendChild(divs[i]);
}

//event listeners//
btnOne.addEventListener("click", clickOne);
btnTwo.addEventListener("click", clickTwo);
btnThree.addEventListener("click", clickThree);
btnFour.addEventListener("click",  clickFour);
btnFive.addEventListener("click", clickFive);
btnSix.addEventListener("click", clickSix);
btnSeven.addEventListener("click", clickSeven);
btnEight.addEventListener("click", clickEight);
btnNine.addEventListener("click", clickNine);

//funcitons for each button to add value to color that starts at zero//
function clickOne(event) {
  redVal = redVal + 1;
  colorChange();
}

function clickTwo(event) {
  blueVal = blueVal + 1;
  colorChange();
}

function clickThree(event) {
  greenVal = greenVal + 1;
  colorChange();
}

function clickFour(event) {
  redVal = redVal + 5;
  colorChange();
}

function clickFive(event) {
  blueVal = blueVal + 5;
  colorChange();
}

function clickSix(event) {
  greenVal = greenVal + 5;
  colorChange();
}

function clickSeven(event) {
  redVal = redVal + 10;
  colorChange();
}

function clickEight(event) {
  blueVal = blueVal + 10;
  colorChange();
}

function clickNine(event) {
  greenVal = greenVal + 10;
  colorChange();
}


//color change function that combines functions for separate red, green, and blue to change total color//
function colorChange(){
    //displays rgb code on page//
  document.getElementById('rgbCode').textContent = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
  colorDiv.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")"
}
