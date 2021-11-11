txtExample = document.getElementById("txtExample");
let dvFound = document.getElementById("dvFound");
let dvFoundwater = document.getElementById("dvFoundwater");
let dvTires = document.getElementById("dvTires");

//split input into array by spaces// 
function findWord() {

    var input = txtExample.value;

    let splitInput = input.split(" ");
    console.log(splitInput);

//if clear is in input, clear found will be the output//
let badWords = "clear"
for(let i = 0; i < splitInput.length; i++) {
    if(splitInput[i] == badWords) {
        dvFound.innerHTML = "Clear found";
    }
}

//if water is in input, water found will be output//
let badWater = "water"
for(let i = 0; i < splitInput.length; i++) {
    if(splitInput[i] == badWater) {
        dvFoundwater.innerHTML = "Water found";
    }
}

//if tires is in input, tires found will be output//
let badTires = "tires"
for(let i = 0; i < splitInput.length; i++) {
    if(splitInput[i] == badTires) {
        dvTires.innerHTML = "Tires found";
    }
}
txtExample.value = " ";
 
}