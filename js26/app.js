//retrieves input and div from HTML//
let txtAmount = document.getElementById("txtAmount")
let dvOutput = document.getElementById("dvOutput");

function calculateAmount() {
    console.log( txtAmount.value);
    //finalTip is the amount inputted in the field//
    let finalTip = makeTip(txtAmount.value);

    //should output the tip amount on screen//
    dvOutput.innerHTML = finalTip;
    console.log(finalTip);

  
    console.log( txtAmount.value);
    //total is the function makeTotal//
    let finalTotal = makeTotal(txtAmount.value);
    
    //displays final total on screen//
    dvOutput.innerHTML = finalTotal;
    console.log(finalTotal);
}

//Tip is the amount inputted//
function makeTip(amount) {
    return "Tip: $ " + amount;
}

//total is the the amount inputted plus .20//
function makeTotal(amount) {
    return "Total: $" + amount + ".20";
}