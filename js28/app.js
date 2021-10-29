let txtTT = document.getElementById("txtTT");

function doThing() {
    let stringVector = txtTT.value;
    let objVector = makeVector(stringVector);
    console.log(objVector);
    normalizeVector();
    updateUI();

}

function makeVector() {
    let arVector = stringVector.split(","); // [10, 15]//
    let objVector = { };
    objVector.x = Number(arVector[0]); //{x: 10}
    objVector.y = Number(arVector[1]); //{x: 10, y: 15}
    return objVector;
}

function normalizeVector() {
    
}

function updateUI() {
    
}

function vectorLength() {

}