// let myVarGlob;

// upDateFinn("Finn");
// function upDateFinn(name) {
//   let myVar = name;
//   myVarGlob = myVar;
//   myVar += " er flink";
// }

// console.log(myVarGlob);

"use strict";

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

const myRandomNum = getRandomNum(100);

console.log("myRandomNum fra 0 til 100 er", myRandomNum);
