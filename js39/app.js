let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementyById("user-choice");
let resultDisplay = document.getElementById("result");

let possibleChoices = document.getElementById("button")
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (element) => {
    userChoice = element.target.id
    userChoiceDisplay.innerHTML = userChoice
    makeComputerChoice()
    getResult()
}))

function makeComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber == 1) {
        computerChoiceDisplay = "rock"
    }
    if (randomNumber == 2) {
        computerChoiceDisplay = "paper"
    }
    if (randomNumber == 3) {
        computerChoiceDisplay = "scissors"
    }
    computerChoiceDisplay.innerHTML
}

function getResult() {
    if (computerChoice == userChoice) {
        result = "tie'd"
    }
    if (computerChoice == "rock" && userChoice == "paper") {
        result = "lost"
    }
    if (computerChoice == "rock" && userChoice == "scissors") {
        result = "lost"
    }
    if (computerChoice == "paper" && userChoice == "rock") {
        result = "won"
    }
    if (computerChoice == "paper" && userChoice == "scissors") {
        result = "won"
    }
    if (computerChoice == "scissors" && userChoice == "paper") {
        result = "lost"
    }
    }
    if (computerChoice == "scissors" && userChoice == "rock") {
        result = "won"
    }
    resultDisplay.innerHTML = result
    
