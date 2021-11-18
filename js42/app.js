let questions = document.getElementById("show");

function showAnswer(e) {

    for(let i = 0; i < questions.length; i++) {
       all[i].style.display = "none";
       }
    
    let div = e.nextElementSibling;
    div.style.display = "inline-block";
}