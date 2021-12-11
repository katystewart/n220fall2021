//calls for button and div in HTML, when the button is clicked the answer(target) will appear//
document.getElementById("oneBtn").addEventListener("click", function() {
    document.getElementById("ansOne").innerHTML = "Indianapolis";
});

document.getElementById("twoBtn").addEventListener("click", function() {
    document.getElementById("ansTwo").innerHTML = "Two peas";
});

document.getElementById("threeBtn").addEventListener("click", function() {
    document.getElementById("ansThree").innerHTML = "Seven days";
});