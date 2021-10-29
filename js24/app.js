/*
let txtFortune = document.getElementById("txtFortune");
let dvOutput = document.getElementById("dvOutput");

function sayHello() {
    console.log( txtFortune.value);
    let finalGreeting = makeGreeting(txtFortune.value);
    dvOutput.innerHTML = finalGreeting;
    console.log(finalGreeting);
}

function makeGreeting(name) {
    return name + name;
}

let txtFortune = document.getElementById("txtFortune");
let dvOutput = document.getElementById("dvOutput");

function sayHello() {
    console.log( txtFortune.value);
    let finalGreeting = makeGreeting(txtFortune.value);
    dvOutput.innerHTML = finalGreeting;
    console.log(finalGreeting);
}

function makeGreeting(name) {
    return "Hello" + name;
}


*/


let txtFortune = document.getElementById("txtFortune");
let dvOutput = document.getElementById("dvOutput");
let txtNumber = document.getElementById("txtNumber")

function sayHello() {
    let name = txtFortune.value;
    let number = txtNumber.value;

    letfinalString = name;
    for ( let i=0; i< number; i++) {
        finalString = finalString + name
    }
    console.log(finalString);

    dvOutput.innerHTML = finalString;
}

