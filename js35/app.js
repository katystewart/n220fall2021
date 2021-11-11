let txtNumber = document.getElementById("txtNumber");
let dvAverage = document.getElementById("dvAverage");
let dvSum = document.getElementById("dvSum");

function splitString() {
    //takes in user input that is separated by commas//
    let input = txtNumber.value;
    console.log(input);

    //splits the input into an array by removing commas//
    let splitInput = input.split(",");
    console.log(splitInput);

    //sums up the values in array, makes values into numbers//
    let sum = 0;
    for(let i=0; i < splitInput.length; i++) {
        sum += Number(splitInput[i]);
    }
    console.log(sum);

    //calculates average//
    let numsCnt = splitInput.length;
    varAverage = sum / numsCnt;
    console.log(varAverage);

    //displays avearge and sum on screen//
    dvAverage.innerHTML = "Average: " + varAverage;
    dvSum.innerHTML = "Sum: " + sum;

    //clears input value//
    txtNumber.value = " ";
}

