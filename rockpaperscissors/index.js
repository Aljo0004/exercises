"use strict";

let userChoice; //let fordi variablen kan ændre sig undervejs
let computerChoice;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

function computerGuess() {
  //array
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3); //Math.floor runder ned
  computerChoice = choices[randomNum];
  console.log("computerens valg:", computerChoice);
}
computerGuess();

addEventListnersToButtons();
function addEventListnersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
  paperBtn.addEventListener("click", paperKlik);
}

//starter animation
function startShake() {
  player1.className = "player shake";
  player2.className = "player shake";
}

// spiller og computer vælger mellem sten, saks, papir
player1.addEventListener("animationend", function () {
  player1.className = `player ${userChoice}`;
  player2.className = `player ${computerChoice}`;
  visResultat();
});

function rockKlik() {
  userChoice = "rock";
  player1.className = "player rock";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}
function scissorsKlik() {
  userChoice = "scissors";
  player1.className = "player scissors";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}
function paperKlik() {
  userChoice = "paper";
  player1.className = "player paper";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}

function visResultat() {
  const winDiv = document.querySelector("#win");
  const loseDiv = document.querySelector("#lose");
  const drawDiv = document.querySelector("#draw");

  winDiv.classList.add("hidden");
  loseDiv.classList.add("hidden");
  drawDiv.classList.add("hidden");

  // Tjekker om spilleren vinder
  function playerWins(player, computer) {
    return (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper");
  }

  // Tjek resultatet
  if (userChoice === computerChoice) {
    drawDiv.classList.remove("hidden"); // uafgjort
  } else if (playerWins(userChoice, computerChoice)) {
    winDiv.classList.remove("hidden"); // spilleren vinder
  } else {
    loseDiv.classList.remove("hidden"); // computeren vinder
  }
}
