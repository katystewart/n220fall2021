//retrieving input and div from HTML//
let txtName = document.getElementById("txtName")
let dvOutput = document.getElementById("dvOutput");

function sayHello() {
    console.log( txtName.value);

    //calling the makeGreeting function that when the user inputs text//
    //it will output the final greeting function//

    let finalGreeting = makeGreeting(txtName.value);
    dvOutput.innerHTML = finalGreeting;
    console.log(finalGreeting);
}

//function to add Hello in front of inputted text//
function makeGreeting(name) {
    return "Hello " + name;
}
