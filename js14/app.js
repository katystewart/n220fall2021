//calls for div element in HTML//
let dvFortune = document.getElementById("fortune");

//starts with Good Day box with green background color//
dvFortune.innerHTML = "Good Day";
dvFortune.style.backgroundColor = "green";
dvFortune.style.width = "100px";
dvFortune.style.height = "100px";

//when clicked there is a 30% chance it will say Bad Day overall, but call is random//
function getFortune() {
    let flip = Math.random();
    let side = "Bad Day";
    if(flip > .3) side = "Good Day";
    dvFortune.innerHTML = side;
//if side Good Day is called, background will be green//
    if(side == "Good Day") {
        dvFortune.style.backgroundColor = "green";
    //if Good Day isn't called, so Bad Day, background color will be red//
    } else {
        dvFortune.style.backgroundColor = "red";
    }
}