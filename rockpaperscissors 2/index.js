"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const drawScreen = document.querySelector("#draw")
const loseScreen = document.querySelector("#lose")
const winScreen = document.querySelector("#win")

addEventListenersToButtons();
function addEventListenersToButtons() {
    rockBtn.addEventListener("click", userKlik)
    paperBtn.addEventListener("click", userKlik)
    scissorsBtn.addEventListener("click", userKlik)


}

function userKlik(evt) {

    // console.log("evt", evt);
    console.log("Choice", evt.target.dataset.choice);
    userChoice = evt.target.dataset.choice
    // console.log("ROCK")
    // userChoice = "rock"
    computerGuess()
}



function computerGuess() {
    reset();
    const choice_arr = ["rock", "paper", "scissors"]
    const randoNum = Math.floor(Math.random() * 3)
    computerChoice = choice_arr[randoNum]
    console.log("computerChoice", computerChoice)
    // console.log(userChoice);
    // computerChoice = "paper"
    animationStarter();
}

function animationStarter() {
    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.addEventListener("animationend", animationEnd)

}

function animationEnd() {
    player1.classList.remove("shake")
    player2.classList.remove("shake")


    showChoice(player1, userChoice);
    showChoice(player2, computerChoice);
    showResultScreen();
}
function showResultScreen() {
    const result = getResult();
    if (result === "win") {

        winScreen.classList.remove("hidden")
    } else if (result === "lose") {
        loseScreen.classList.remove("hidden")

    } else {

        drawScreen.classList.remove("hidden")

    }


}



// helper stuff
function getResult() {
    let result
    if (userChoice === computerChoice) {
        result = "draw";


    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {

        result = "win";

    } else {

        result = "lose";


    }
    return result;


}

function showChoice(whichPlayer, whosChoice) {
    // slå switch case op på MDN
    switch (whosChoice) {
        case "rock":
            whichPlayer.classList.add("rock")
            break;
        case "paper":
            whichPlayer.classList.add("paper")
            break;
        case "scissors":
            whichPlayer.classList.add("scissors")
            break;
    }

}

function reset() {

    player1.classList = "player";
    player2.classList = "player";

    drawScreen.classList = "hidden";
    winScreen.classList = "hidden";
    loseScreen.classList = "hidden";

}