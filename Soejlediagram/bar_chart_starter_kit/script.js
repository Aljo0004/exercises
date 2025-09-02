const list = document.querySelector("ul");

// const barArr = {};

// setInterval(generateBars, 500);

// function generateBars() {
//   barArr.push(Math.round(Math.random() * 100));

//   if (barArr.length > 6) {
//     barArr.shift();
//   }

//   render();
// }

// function render() {
//   document.querySelector("li").forEach((elm, i) => {
//     elm.style.setProperty("--height", barArr[i]);
//   });
// }

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);
const myArray = [];
setInterval(genererSoejle, 500);

function genererSoejle() {
  console.log("genererSoejle");
  if (myArray.length > 19) {
    myArray.shift();
    console.log(list.firstElementChild);

    list.removeChild(list.firstElementChild);
  }

  const randoNum = Math.floor(Math.random() * 100) + 1;
  myArray.push(randoNum);

  console.log("array", myArray.length);

  console.log(myArray);
  const li = document.createElement("li");

  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
}
