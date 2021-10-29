let dvMessage = document.getElementById("dvMessage");



function generate() {
    let letter = random();

    dvMessage.innerHTML = letter;
}
function random() {

    let myArray = ["a", "b", "c"];
    let randIndex = Math.floor(Math.random() * myArray.length);

    let randEntry = myArray[randIndex];
   
    console.log(randIndex);
    console.log(randEntry);
    return randEntry;



}