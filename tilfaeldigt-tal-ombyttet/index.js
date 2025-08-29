"use strict";

const startKnap = document.querySelector("#start");
const forLavtKnap = document.querySelector("#for_lavt");
const forHøjttKnap = document.querySelector("#for_højt");
const rigtigKnap = document.querySelector("#rigtigt");
const pTekst = document.getElementById("text");
let computerGuess;

let min = 0;
let max = 100;

startKnap.addEventListener("click", animationStart);

function animationStart() {
  startKnap.classList.add("dissolve");

  min = 0;
  max = 100;
  computerGuess = Math.floor((min + max) / 2);
  console.log("computeren gætter på: ", computerGuess);

  pTekst.textContent = `Computeren gætter på ${computerGuess}`;
}

forLavtKnap.addEventListener("click", forLavt);
forHøjttKnap.addEventListener("click", forHøjt);
rigtigKnap.addEventListener("click", rigtigGuess);

function forLavt() {
  min = computerGuess + 1;
  computerGuess = Math.floor((min + max) / 2);

  pTekst.textContent = `Computeren gætter på ${computerGuess}`;
}

function forHøjt() {
  max = computerGuess - 1;
  computerGuess = Math.floor((min + max) / 2);

  pTekst.textContent = `Computeren gætter på ${computerGuess}`;
  console.log("computeren gætter på: ", computerGuess);
}

function rigtigGuess() {
  pTekst.textContent = `${computerGuess} er det rigtige tal`;

  console.log("computeren gættede rigtigt! tallet er", computerGuess);
  reset();
}

function reset() {
  startKnap.classList.remove("dissolve");

  min = 0;
  max = 100;
}
